<template>
  <SearchBar
    :placeholder="'Rechercher un produit...'"
    :searchQuery="searchQuery"
    @update-search="handleSearchUpdate"
  />
  <div class="produit">
    <div class="produit-item" v-for="(prod, index) in filteredProduits" :key="index">
      <img :src="prod.images" />
      <h3>{{ prod.titre }}</h3>
      <p v-if="isLoggedIn">
        Quantité d'achat de l'article minimum : {{ prod.moq }}
      </p>
      <p v-if="isLoggedIn">EUR : {{ prod.prix }} €</p>
      <div class="button">
        <ButtonComponents
          v-if="isLoggedIn && commandes && !isInBag(prod.id)"
          label="Ajouter au panier"
          type="login"
          @click="addToPanier(prod.id)"
        />
        <ButtonComponents
          v-if="isLoggedIn && commandes && isInBag(prod.id)"
          label="Supprimer du panier"
          type="logout"
          @click="removeToPanier(prod.id)"
        />
        <ButtonComponents
        class="test"
        label="Voir détails"
        type="register"
        @click="$router.push({ name: 'DetailProduit', params: { id: prod.id } })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ButtonComponents from "@/components/ButtonComponents.vue";
import SearchBar from "@/components/SearchBar.vue"; // Import du composant

export default {
  components: {
    ButtonComponents,
    SearchBar, // Ajout du composant
  },
  data() {
    return {
      searchQuery: "", // Garde la query ici pour la gestion dans le parent
    };
  },
  computed: {
    ...mapState(["produits", "categories", "commandes"]),
    ...mapGetters(["currentUser", "isLoggedIn", "isAdmin", "isUser"]),
    // Propriété calculée pour filtrer les produits
    filteredProduits() {
      return this.produits.filter((prod) =>
        prod.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    addToPanier(produitId) {
      this.$store.dispatch("addProduitToPanier", produitId);
    },
    removeToPanier(produitId) {
      this.$store.dispatch("removeProduit", produitId);
    },
    isInBag(produitId) {
      return this.commandes.some((commande) =>
        commande.produits.some((prod) => prod.produitId === produitId)
      );
    },
    // Méthode pour mettre à jour la recherche
    handleSearchUpdate(newSearchQuery) {
      this.searchQuery = newSearchQuery;
    },
  },
};
</script>

<style scoped>
img {
  width: 250px;
  height: 230px;
  margin: 15px;
}

.catégorie {
  display: inline-block;
  margin: 50px;
}

.produit {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 1rem 0;
}

/* Limite de 5 éléments par ligne */
.produit-item {
  width: calc(20% - 30px); 
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

h3 {
  margin: 0.5rem 0;
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 1200px) {
  /* Réduire à 4 éléments par ligne pour écrans plus petits */
  .produit-item {
    width: calc(25% - 30px); 
  }
}

@media (max-width: 900px) {
  /* Réduire à 3 éléments par ligne pour tablettes */
  .produit-item {
    width: calc(33.33% - 30px);
  }
}

@media (max-width: 600px) {
  /* Réduire à 2 éléments par ligne pour petits écrans */
  .produit-item {
    width: calc(50% - 30px);
  }
}

@media (max-width: 400px) {
  /* 1 élément par ligne pour écrans très petits */
  .produit-item {
    width: 100%;
  }
}

.produit > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  text-align: center;
}

img {
  width: 250px;
  height: 230px;
  margin-bottom: 15px;
}

h4,
p,
.button {
  margin: 5px 0;
}

.button {
  width: 100%;
}
</style>
