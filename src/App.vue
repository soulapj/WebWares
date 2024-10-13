<template>

  <div id="app">
      <!-- Header should be visible on all pages -->
      <HeaderComponent />

      <!-- Router-view to show different views like HomeView, Product List, etc. -->
      <router-view />

    <!-- Footer should be visible on all pages -->
      <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
// localStorage.clear();
export default {
  created() {
    this.$store.dispatch("loadCommandesFromLocalStorage");
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style>
:root {
  --color-primary: #D7C3A7;
  --color-secondary: #264653;
  --color-accent: #E9C46A;
  --color-background: #F4F4F4;
  --color-logout: #e63946;
}
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Roboto', 'Open Sans';
  display: flex;           /* may cause fout a merde to others*/
  flex-direction: column;   /* may cause fout a merde to others*/
  min-height: 100vh;    /* may cause fout a merde to others*/
}

</style>
