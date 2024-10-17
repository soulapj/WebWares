<template>
  <div class="category-container">
    <div class="category">
      <img :src="category.images" :alt="category.name">
      <div class="category-description">
        <h1>{{ category.name }}</h1>
        <p>{{ category.description }}</p>
        <a href="#view-all">Tout voir</a>
      </div>
    </div>
  </div>

  <div v-if="products.length" id="view-all" class="view-all-container">
    <div v-for="product in products" :key="product.id" class="view-all">
      <img :src="product.images" :alt="product.titre" @click="$router.push(`/product-details/` + product.id)">
      <router-link :to="'/product-details/' + product.id" class="product-link">{{ product.titre }}</router-link>
      <div class="product-description">
        <p>€{{ product.prix }}</p>
      </div>
    </div>
  </div>
  <p v-else>Aucun produit disponible pour cette catégorie.</p>
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
      return this.produits.filter(
        (product) => product.categorieId === parseInt(this.$route.params.id)
      );
    },
  },
  watch: { // watch is to modify route params. motherfucker casse ma tete
    '$route.params.id': {
      immediate: true,
      handler(newCategoryId) {
        const categoryId = parseInt(newCategoryId);
        this.category = this.categories.find((cat) => cat.id === categoryId) || {};
      }
    }
  }
};
</script>

<style sloped>
.category-container {
  display: flex;
  background-color: var(--color-primary);
  padding: var(--spacing);
  margin: 0;
  justify-content: space-evenly;
}

.category {
  display: flex;
  gap: var(--spacing);
  color: var(--color-secondary);
}

.category img {
  width: 400px;
  height: 400px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.category-description {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: start;
  width: 800px;
}

.category-description h1 {
  font-size: 2rem;
}

.category-description p {
  font-size: 1.2rem;
}

.category-description a {
  font-size: 1.3rem;
  color: var(--color-secondary);
  text-underline-offset: 5px;
}

.category-description a:hover {
  text-decoration-thickness: 3px;
}
          /* Show all section */
.view-all-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 5rem 0;  
}
.view-all-container img {
  height: 500px;
  width: 334px;
}
.view-all-container img:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: 0.3s ease;;
}

.view-all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 0 0 25%;
  box-sizing: border-box;
  padding: 1rem 0rem;
}

.product-link {
  text-decoration: none;
  font-size: 1.5rem;
  margin: 1rem 0;
  color: var(--color-secondary);
  font-weight: bold;
}
.product-link:hover {
  text-decoration: underline;
}

.product-description p {
  margin: 0;
  font-size: 1.3rem;
}

@media (max-width: 1260px) {
  .category {
    flex-direction: column;
    justify-content: center;
    gap: 0rem;
  }
  .category img {
    width: 100%;
  }
  .category-description {
    width: 100%;
    text-align: center;
    align-items: center;
  }
}
</style>
