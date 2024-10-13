<template>
    <section class="best-sellers">
      <h2>Best Sellers</h2>
      <div class="best-seller-container">
        <div class="best-seller">
          <img src="../assets/deco/deco-3.jpg" alt="" class="best-seller-img">
        </div>
        <div class="best-seller">
          <img src="../assets/luminaire/luminaire-1.jpg" alt="" class="best-seller-img">
        </div>
        <div class="best-seller">
          <img src="../assets/mobilier/mobilier-2.jpg" alt="" class="best-seller-img">
        </div>
        <div class="best-seller">
          <img src="../assets/tapis/tapis-1.jpg" alt="" class="best-seller-img">
        </div>
        <div class="best-seller">
          <img src="../assets/luminaire/luminaire-3.jpg" alt="" class="best-seller-img">
        </div>
        <div class="best-seller">
          <img src="../assets/mobilier/mobilier-1.jpg" alt="" class="best-seller-img">
        </div>
        <div class="best-seller">
          <img src="../assets/tapis/tapis-4.jpg" alt="" class="best-seller-img">
        </div>
        <div class="best-seller">
          <img src="../assets/deco/deco-1.jpg" alt="" class="best-seller-img">
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.best-sellers {
  text-align: center;
  padding: 2rem;
  color: var(--color-secondary);
}

.best-sellers h2 {
  font-size: 2rem;
}

.best-seller-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 0.5rem; 
  justify-content: center; 
  align-items: center; 
}

.best-seller {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4; 
  height: 30rem; 
}

.best-seller-img {
  width: 100%; 
  height: 100%;
  object-fit: cover; 
}

@media (max-width: 768px) {
  .best-seller-container {
    grid-template-columns: repeat(2, 1fr); 
  }
}
</style>