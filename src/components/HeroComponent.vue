<template>
  <div class="hero-container">
    <div class="hero">
      <img src="../assets/hero/hero6.jpg" alt="Hero Image" class="hero-img" />
      <span class="hero-msg">
        <h1>Bienvenue Sur WebWares</h1>

        <p>Créez un compte pour bénéficier de réductions exclusives sur nos collections.</p>
        <ButtonComponents @Click="goToRegister" label="S'INSCRIRE" type="login"/>

      </span>
    </div>
  </div>
</template>

<script>
import ButtonComponents from "./ButtonComponents.vue";
export default {
  components: {
    ButtonComponents,
  },

  methods:{
    goToRegister(){
       this.$router.push("/Register");

    }
  }
};

</script>

<style scoped>
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

.hero-msg button {
  background-color: var(--color-secondary);
  color: var(--color-background);
  border: 2px solid var(--color-secondary);
  padding: 1rem 2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.hero-msg button:hover {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

@media (max-width: 1260px) {
  .hero-container {
    padding: 0;
  }
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
  }

  .hero-msg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hero h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .hero-img {
    width: 100%;
  }
}
</style>
