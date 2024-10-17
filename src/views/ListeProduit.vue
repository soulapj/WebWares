<template>
  <SearchBar
    :placeholder="'Rechercher un produit...'"
    :searchQuery="searchQuery"
    @update-search="handleSearchUpdate"
  />
  <div class="produit">
    <div v-for="(prod, index) in filteredProduits" :key="index">
      <img :src="prod.images" />
      <h4>{{ prod.titre }}</h4>
      <p v-if="isLoggedIn">
        Quantité d'achat de l'article minimum : {{ prod.moq }}
      </p>
      <p v-if="isLoggedIn">EUR : {{ prod.prix }} €</p>
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
      <router-link :to="{ name: 'DetailProduit', params: { id: prod.id } }"
        >voir détails</router-link
      >
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
.catégorie {
  display: inline-block;
  margin: 50px;
}

.produit {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
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
