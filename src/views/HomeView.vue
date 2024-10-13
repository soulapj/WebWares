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
</style>
