import "./tableaux.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ListeProduits({ products, supprimerProduit }) {
  const navigate = useNavigate();
  const [triPrix, setTriPrix] = useState("aucun");
  const [filtreStock, setFiltreStock] = useState("tous");
  const filteredProducts = products
    .filter((p) => {
      
      if (filtreStock === "tous") return true;
      if (filtreStock === "faible") return p.stock < 10;
      if (filtreStock === "moyen") return p.stock >= 10 && p.stock <= 20;
      if (filtreStock === "eleve") return p.stock > 20;
      return true;
    })
    .sort((a, b) => {
      
      if (triPrix === "croissant") return a.prix - b.prix;
      if (triPrix === "decroissant") return b.prix - a.prix;
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Liste des produits</h2>
      <div style={{ marginBottom: "15px" }}>
        <label>📦 Filtrer par stock :</label>{" "}
        <select
          value={filtreStock}
          onChange={(e) => setFiltreStock(e.target.value)}
        >
          <option value="tous">Tous</option>
          <option value="faible">Faible (moins de 10)</option>
          <option value="moyen">Moyen (10 à 30)</option>
          <option value="eleve">Élevé (plus de 30)</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>💰 Trier par prix :</label>{" "}
        <select value={triPrix} onChange={(e) => setTriPrix(e.target.value)}>
          <option value="aucun">Aucun</option>
          <option value="croissant">Croissant</option>
          <option value="decroissant">Décroissant</option>
        </select>
      </div>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix (DH)</th>
            <th>Stock</th>
            <th>Catégorie</th>
            <th>Date d'achat</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nom}</td>
              <td>{p.prix}</td>
              <td>{p.stock}</td>
              <td>{p.categorie}</td>
              <td>{p.date_achat}</td>
              <td><button onClick={() => navigate(`/modifier/${p.id}`)}>Modifier</button>
                <button onClick={() => supprimerProduit(p.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListeProduits;