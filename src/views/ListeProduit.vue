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
      <p v-if="isUserLoggedIn">
        Quantité d'achat de l'article minimum : {{ prod.moq }}
      </p>
      <p v-if="isUserLoggedIn">EUR : {{ prod.prix }} €</p>
      <ButtonComponents
        v-if="isUserLoggedIn && commandes && !isInBag(prod.id)"
        label="Ajouter au panier"
        color="#E9C46A"
        @click="addToPanier(prod.id)"
      />
      <ButtonComponents
        v-if="isUserLoggedIn && commandes && isInBag(prod.id)"
        label="Supprimer du panier"
        color="#E9C46A"
        @click="removeToPanier(prod.id)"
      />
      <router-link
        v-if="isUserLoggedIn"
        :to="{ name: 'DetailProduit', params: { id: prod.id } }"
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
    ...mapGetters(["isUserLoggedIn"]),
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
  created() {
    this.$store.dispatch("loadCurrentUtilisateurFromLocalStorage");
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
  gap: 50px;
}
</style>
