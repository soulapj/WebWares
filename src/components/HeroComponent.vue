<template>
<div class="hero-container">
      <div class="hero">
        <img src="../assets/hero/hero6.jpg" alt="Hero Image" class="hero-img">
        <span pan class="hero-msg">
          <h1>Bienvenue sur WebWares</h1>
          <p>La meilleure plateforme pour commander des meubles et des décorations en ligne.</p>
          <button>En Savoir Plus</button>
        </span>
      </div>
    </div>
</template>

<script>

export default {
    components: {
        
    }
}
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
  border: 2px solid var(--color-secondary);;
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
</style>