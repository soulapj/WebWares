<template>
    <div class="gestion-commande">
      <h1>Gestion des Commandes</h1>
  
      <!-- Tableau des commandes validées -->
      <h2>Commandes Validées</h2>
      <div v-if="commandeValider.length > 0">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Produits</th>
              <th>Quantité</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="commande in commandeValider" :key="commande.id">
              <td>{{ commande.id }}</td>
              <td>
                <ul>
                  <li v-for="produit in commande.produits" :key="produit.produitId">
                    {{ produit.titre }} (x{{ produit.quantite }})
                  </li>
                </ul>
              </td>
              <td>{{ getTotalQuantite(commande.produits) }}</td>
              <td>{{ commande.countTotal.toFixed(2) }} €</td>
              <td>
                <!-- Bouton pour transférer la commande -->
                <button @click="transferCommande(commande.id)">Transférer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Aucune commande validée pour le moment.</p>
      </div>
  
      <!-- Tableau des commandes transférées -->
      <h2>Commandes Transférées</h2>
      <div v-if="commandesTransferees.length > 0">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Produits</th>
              <th>Quantité</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="commande in commandesTransferees" :key="commande.id">
              <td>{{ commande.id }}</td>
              <td>
                <ul>
                  <li v-for="produit in commande.produits" :key="produit.produitId">
                    {{ produit.titre }} (x{{ produit.quantite }})
                  </li>
                </ul>
              </td>
              <td>{{ getTotalQuantite(commande.produits) }}</td>
              <td>{{ commande.countTotal.toFixed(2) }} €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Aucune commande transférée pour le moment.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  
  export default {
    name: "GestionCommande",
    computed: {
      ...mapState(["commandeValider", "commandesTransferees"]),
    },
    methods: {
      ...mapActions(["transferCommande"]),
      getTotalQuantite(produits) {
        return produits.reduce((total, produit) => total + produit.quantite, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  .gestion-commande {
    padding: 20px;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  .table th, .table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  