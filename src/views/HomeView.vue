<template>
  <section class="home">
    <!-- Hero section with a welcome message -->
    <div class="hero">
      <h1>Bienvenue sur WebWares</h1>
      <p>
        La meilleure plateforme pour commander des meubles et des décorations en
        ligne.
      </p>
      <router-link to="/signup" class="btn hero-btn"
        >S'inscrire maintenant</router-link
      >
    </div>

    <!-- Features section -->
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
          <p>
            Découvrez notre large gamme de meubles et décorations de haute
            qualité.
          </p>
        </div>
        <div class="feature">
          <img src="@/assets/deco/deco-1.jpg" alt="Service Client" />
          <h3>Service Client</h3>
          <p>
            Notre équipe est à votre disposition pour toute question ou
            assistance.
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* Hero Section */
.hero {
  background-color: #e0d1be;
  text-align: center;
  padding: 100px 20px;
  color: #264653;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 24px;
  margin-bottom: 30px;
}

.hero-btn {
  background-color: #e9c46a;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 5px;
}

/* Features Section */
.features {
  padding: 60px 20px;
  text-align: center;
  background-color: #f4f4f4;
}

.features h2 {
  font-family: "Merriweather", serif;
  font-size: 36px;
  margin-bottom: 40px;
  color: #264653;
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
