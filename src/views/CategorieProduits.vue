<template>
  <div>
    <h1>Produits pour la catégorie {{ category.name }}</h1>
    <div v-if="products.length">
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="'/product-details/' + product.id">{{
            product.titre
          }}</router-link>
        </li>
      </ul>
    </div>
    <p v-else>Aucun produit disponible pour cette catégorie.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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
  },
  created() {
    const categoryId = parseInt(this.$route.params.id);
    this.category = this.categories.find((cat) => cat.id === categoryId) || {};
  },
};
</script>
