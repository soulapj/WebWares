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
            <th>Entreprise</th>
            <th>Adresse</th>
            <th>Produits</th>
            <th>Total HT</th>
            <th>Total TTC</th>
            <th>Commentaires</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="commande in commandeValider" :key="commande.id">
            <td>{{ commande.id }}</td>
            <!-- Entreprise et Adresse récupérées depuis les utilisateurs -->
            <td>{{ getUtilisateur(commande.userId).raisonSociale }}</td>
            <td>{{ getUtilisateur(commande.userId).adresse }}</td>
            <!-- Affichage des produits -->
            <td>
              <div
                v-for="produit in commande.produits"
                :key="produit.produitId"
              >
                {{ produit.titre }} (x{{ produit.quantite }})
              </div>
            </td>
            <!-- totale ht -->
            <td>{{ commande.countTotalHT }}</td>
            <!-- totale TTC -->
            <td>{{ commande.countTotalTTC }}</td>
            <!-- Commentaires -->
            <td>{{ commande.commentaire }}</td>
            <!-- Action bouton de validation -->
            <td>
              <button @click="transferCommande(commande.id)">Validation</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Aucune commande validée pour le moment.</p>
    </div>

    <!-- Tableau des commandes transférées -->
    <h2>Commandes Livrées</h2>
    <div v-if="commandesTransferees.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Entreprise</th>
            <th>Adresse</th>
            <th>Produits</th>
            <th>Total HT</th>
            <th>Total TTC</th>
            <th>Commentaires</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="commande in commandesTransferees" :key="commande.id">
            <td>{{ commande.id }}</td>
            <!-- Entreprise et Adresse récupérées depuis les utilisateurs -->
            <td>{{ getUtilisateur(commande.userId).raisonSociale }}</td>
            <td>{{ getUtilisateur(commande.userId).adresse }}</td>
            <!-- Affichage des produits -->
            <td>
              <ul>
                <li
                  v-for="produit in commande.produits"
                  :key="produit.produitId"
                >
                  {{ produit.titre }} (x{{ produit.quantite }})
                </li>
              </ul>
            </td>
            <!-- totale ht -->
            <td>{{ commande.countTotalHT }}</td>
            <!-- totale TTC -->
            <td>{{ commande.countTotalTTC }}</td>
            <!-- Commentaires -->
            <td>{{ commande.commentaire }}</td>
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
    ...mapState(["commandeValider", "commandesTransferees", "utilisateurs"]),
  },
  methods: {
    ...mapActions([
      "transferCommande",
      "setCommandesValider",
      "setCommandesTransferees",
    ]),

    // Fonction pour récupérer l'utilisateur associé à la commande
    getUtilisateur(userId) {
      return this.utilisateurs.find((user) => user.id === userId) || {};
    },

    // Calculer la quantité totale pour chaque commande
    getTotalQuantite(produits) {
      return produits.reduce((total, produit) => total + produit.quantite, 0);
    },
  },
  mounted() {
    // Charger les données depuis LocalStorage quand le composant est monté
    const commandeValider = JSON.parse(localStorage.getItem("commandeValider"));
    const commandesTransferees = JSON.parse(
      localStorage.getItem("commandesTransferees")
    );

    if (commandeValider) {
      this.setCommandesValider(commandeValider);
    }
    if (commandesTransferees) {
      this.setCommandesTransferees(commandesTransferees);
    }
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
.table th,
.table td {
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
