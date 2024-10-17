<template>
  <section class="best-sellers">
    <h2>Best Sellers</h2>
    <div class="best-seller-container" v-if="sortedBestSellers.length">
      <div class="best-seller" v-for="produit in sortedBestSellers" :key="produit.id">
        <img :src="produit.images" :alt="produit.titre" class="best-seller-img" />
        <div v-if="!userRole" class="overlay" @click="$router.push(`/product-details/` + produit.id)">
          <!-- v-if login state condition to be added -->
          <h1>Pour voir les détails s'inscrire</h1>
          <ButtonComponents type="register" label="S'INSCRIRE" />
        </div>
        <div class="overlay" v-if="userRole === `USER`" @click="$router.push(`/product-details/` + produit.id)">
          <!-- v-if logout state condition to be added /-->
          <p>{{ produit.titre }}</p>
          <p>{{ produit.prix }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponents from './ButtonComponents.vue';
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    ButtonComponents,
  },
  data() {
    return {
      userRole: null, 
    };
  },
  computed: {
    ...mapState(["produits"]),
    ...mapGetters(["sortedBestSellers"]),
    
  },
  created() {
    const savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (savedUser && savedUser.role) {
      this.userRole = savedUser.role;
    }
  }
}
</script>

<style scoped>
.best-sellers {
  text-align: center;
  padding: 0 2rem 2rem 2rem;
  color: var(--color-secondary);
}

.best-sellers h2 {
  font-size: 2rem;
}

.best-seller-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.best-seller {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  height: 30rem;
  overflow: hidden;
}

.best-seller-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.overlay:hover {
  opacity: 1;
  cursor: pointer;
}

.overlay h1 {
  font-size: 2rem;
  font-style: italic;
}

.overlay img {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .best-seller-container {
    grid-template-columns: repeat(1, 1fr);
  }

  .best-sellers {
    padding: 0;
  }
}
</style>