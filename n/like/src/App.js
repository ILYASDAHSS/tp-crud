import { Routes, Route, Link } from "react-router-dom";
import ListeProduits from "./listeProduits";
import AjouterProduit from "./ajouterProduit";
import { useState, useEffect } from "react";
import produitsInitiaux from "./data";
import ModifierProduit from "./modifierProduits"

function App() {
  const [produits, setProduits] = useState(produitsInitiaux);
  // Chargement initial
/*   useEffect(() => {
    const data = localStorage.getItem("produits");
    if (data) {
      setProduits(JSON.parse(data));
    } else {
      setProduits(produitsInitiaux);
      localStorage.setItem("produits", JSON.stringify(produitsInitiaux));
    }
  }, []); */
  // Sauvegarde automatique à chaque modification
/*   useEffect(() => {
    if (produits.length > 0) {
      localStorage.setItem("produits", JSON.stringify(produits));
    } 
  }, [produits]); */

  function addProduct(nouveau) {
    setProduits([...produits, nouveau]);
  }

  function deleteProduct(id) {
    setProduits(produits.filter((p) => p.id !== id));
  }
  
  function updateProduct(pModif) {
    setProduits(produits.map((p) => (p.id === pModif.id ? pModif : p)));
  }

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>TP CRUD</h1>
        <nav>
          <Link to="/" style={{ margin: "10px" }}>Liste des produits</Link>
          <Link to="/ajouter" style={{ margin: "10px" }}>Nouveau produit</Link>
        </nav>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<ListeProduits products={produits} supprimerProduit={deleteProduct} />} />
        <Route path="/ajouter" element={<AjouterProduit ajouterProduit={addProduct} />} />
        <Route
          path="/modifier/:id"
          element={<ModifierProduit produits={produits} modifierProduit={updateProduct} />}
        />
      </Routes>
    </div>
  );
}

export default App;