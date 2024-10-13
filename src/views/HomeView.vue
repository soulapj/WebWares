<template>
  <section class="home">
    <!-- Hero section with a welcome message -->
    <HeroComponent />

    <!-- Nos Avantage section -->
    
    <hr>
    <!-- Best Seller section -->
     <BestSellerComponent />

     <!-- Contact Form Section -->
      <ContactFormComponent />
  </section>
</template>

<script>
import BestSellerComponent from '@/components/BestSellerComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import ContactFormComponent from '@/components/ContactFormComponent.vue';
export default {
  components: {
    BestSellerComponent,
    HeroComponent,
    ContactFormComponent,
  },
  name: "HomeView",
};
</script>

<style scoped>
/* Hero Section */
.hero-container {
  padding: 2rem 5rem;
}

.hero {
  color: var(--color-secondary);
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
}

.hero-img {
  width: 60%;
  object-fit: contain;
}

.hero-msg {
  flex: 1;
  margin: 0 5rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

/* Nos Avantage Section */


</style>
