<template>
  <footer>
    <div class="footer-links">
      <router-link to="/mentions-legales">Mentions Légales</router-link>
      <router-link to="/politique-confidentialite">Politique de Confidentialité</router-link>
      <router-link to="/conditions-utilisation">Conditions d'utilisation</router-link>
    </div>
    <div class="social-media">
      <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>
      <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://x.com" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
    </div>
    <p>&copy; 2024 WebWares. Tous droits réservés.</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--color-secondary);
  color: var(--color-background);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 1rem;
}

.footer-links a {
  color: var(--color-accent);
  text-decoration: none;
  font-size: 1.2rem;
}

.footer-links a:hover {
  text-decoration: underline;
}

.social-media {
  display: flex;
  gap: 2rem;
  text-align: center;
}

.social-media a {
  font-size: 2rem;
  color: var(--color-background); 
  text-decoration: none;
}

.social-media a:hover {
  color: var(--color-accent);
  transition: 0.5s ease;
}

</style>
