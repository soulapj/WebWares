<template>
  <div>
    <!-- Utilisation du composant de barre de recherche -->
    <SearchBar :placeholder="'Rechercher un produit...'" :searchQuery="searchQuery" @update-search="handleSearchUpdate" />

    <!-- Affichage des catégories -->
    <div class="catégorie" v-for="(cat, id) in categories" :key="id">
      <p>{{ cat.name }}</p>
    </div>

    <!-- Affichage des produits filtrés -->
    <div class="produit">
      <div v-for="(prod, index) in filteredProduits" :key="index">
        <img :src="prod.images" />
        <h4>{{ prod.titre }}</h4>
        <p>Nombre d'article restant : {{ prod.moq }}</p>
        <p>EUR : {{ prod.prix }} €</p>
        <ButtonComponents label="Ajouter au panier" color="green" />
        <router-link :to="{ name: 'DetailProduit', params: { id: prod.id } }">voir détails</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    ...mapState(["produits", "categories"]),
    // Propriété calculée pour filtrer les produits
    filteredProduits() {
      return this.produits.filter((prod) =>
        prod.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    // Méthode pour mettre à jour la recherche
    handleSearchUpdate(newSearchQuery) {
      this.searchQuery = newSearchQuery;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: 100px;
  margin: 15px;
}

.catégorie {
  display: inline-block;
  margin: 50px;
}

.produit {
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>
