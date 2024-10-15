<template>

  <SearchBar
    :placeholder="'Rechercher un produit...'"
    :searchQuery="searchQuery"
    @update-search="handleSearchUpdate"
  />
  <div>
    <h1 style="text-align: center">
      Produits pour la catégorie {{ category.name }}
    </h1>
    <div class="produit" v-if="products.length">
      <div v-for="product in products" :key="product.id">
        <img :src="product.images" />
        <h4>{{ product.titre }}</h4>
        <p>Quantité d'achat de l'article minimum : {{ product.moq }}</p>
        <p>EUR : {{ product.prix }} €</p>
        <router-link :to="'/product-details/' + product.id">{{
          product.titre
        }}</router-link>
      </div>
    </div>
    <p v-else>Aucun produit disponible pour cette catégorie.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      category: {},
    };
  },
  computed: {
    ...mapState({
      produits: (state) => state.produits,
      categories: (state) => state.categories,
    }),
    products() {
      // Filter products based on the category ID
      return this.produits.filter(
        (product) => product.categorieId === parseInt(this.$route.params.id)
      );
    },

    filteredProduits() {
      return this.produits.filter((prod) =>
        prod.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    handleSearchUpdate(newSearchQuery) {
      this.searchQuery = newSearchQuery;
    },

  },
  created() {
    const categoryId = parseInt(this.$route.params.id);
    this.category = this.categories.find((cat) => cat.id === categoryId) || {};
  },
};
</script>

<style>
img {
  width: 250px;
  height: 230px;
  margin: 15px;
}

.produit {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}
</style>