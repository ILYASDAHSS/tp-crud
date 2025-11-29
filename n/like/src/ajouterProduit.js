import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AjouterProduit({ ajouterProduit })
 {
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [stock, setStock] = useState("");
  const [categorie, setCategorie] = useState("");
  const [date_achat, setDateAchat] = useState("");    
  const navigate=useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Création du nouvel objet produit
    const nouveauProduit = {
      id: Date.now(),
      nom: String(nom),
      prix: parseFloat(prix),
      stock: parseInt(stock),
      categorie: String(categorie),
      date_achat
    };
    // Appel de la fonction envoyée depuis App.js
    ajouterProduit(nouveauProduit);
    // Retour à la liste après ajout
    navigate("/");
  }

  return <div style={{ padding: "20px" }}>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label><br />
          <input value={nom} onChange={(e) => setNom(e.target.value)} required />
        </div>

        <div>
          <label>Prix (DH) :</label><br />
          <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} required />
        </div>

        <div>
          <label>Stock :</label><br />
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
        </div>

        <div>
          <label>Catégorie :</label><br />
          <input value={categorie} onChange={(e) => setCategorie(e.target.value)} required />
        </div>

        <div>
          <label>Date d'achat :</label><br />
          <input type="date" value={date_achat} onChange={(e) => setDateAchat(e.target.value)} required />
        </div>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
}

export default AjouterProduit;