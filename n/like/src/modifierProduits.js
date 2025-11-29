import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ModifierProduit({ produits, modifierProduit }) {
  const { id } = useParams();
  const produit = produits.find((p) => p.id === parseInt(id));
  
  const [nom, setNom] = useState(produit.nom);
  const [prix, setPrix] = useState(produit.prix);
  const [stock, setStock] = useState(produit.stock);
  const [categorie, setCategorie] = useState(produit.categorie);
  const [date_achat, setDateAchat] = useState(produit.date_achat);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    modifierProduit({
      id: produit.id,
      nom: String(nom),
      prix: Number(prix),
      stock: Number(stock),
      categorie: String(categorie),
      date_achat: String(date_achat),
    });
    navigate("/");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Modifier le produit</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} /><br />

        <label>Prix :</label>
        <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} /><br />

        <label>Stock :</label>
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} /><br />

        <label>Catégorie :</label>
        <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} /><br />

        <label>Date d'achat :</label>
        <input type="date" value={date_achat} onChange={(e) => setDateAchat(e.target.value)} /><br />

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default ModifierProduit;