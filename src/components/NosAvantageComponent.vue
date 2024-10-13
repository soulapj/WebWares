<template>
<section class="features">
      <h2>Nos Avantages</h2>
      <div class="feature-grid">
        <div class="feature">
          <img src="@/assets/deco/deco-1.jpg" alt="Commande Rapide" />
          <h3>Commande Rapide</h3>
          <p>Commandez facilement et rapidement tous vos produits préférés.</p>
        </div>
        <div class="feature">
          <img src="@/assets/deco/deco-1.jpg" alt="Produits de Qualité" />
          <h3>Produits de Qualité</h3>
          <p>Découvrez notre large gamme de meubles et décorations de haute qualité.</p>
        </div>
        <div class="feature">
          <img src="@/assets/deco/deco-1.jpg" alt="Service Client" />
          <h3>Service Client</h3>
          <p>Notre équipe est à votre disposition pour toute question ou assistance.</p>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.features {
  padding: 0.5rem 0;
  text-align: center;
  background-color: #f4f4f4;
}

.features h2 {
  font-size: 36px;
  margin-bottom: 40px;
  color: var(--color-secondary);
}

.feature-grid {
  display: flex;
  justify-content: space-around;
  gap: 40px;
}

.feature {
  max-width: 300px;
  text-align: center;
}

.feature img {
  max-width: 100%;
  margin-bottom: 20px;
}

.feature h3 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>