<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/produit">Liste Produit</router-link> |
    <router-link to="/panier">Panier</router-link> |
    <router-link to="/utilisateur">Profil Utilisateur</router-link>
  </nav>
  <router-view />
</template>

<script>
// localStorage.clear();
export default {
  created() {
    this.$store.dispatch("loadCommandesFromLocalStorage");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
