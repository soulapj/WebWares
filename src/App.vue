<template>
  <div id="app">
      <!-- Header should be visible on all pages -->
      <HeaderComponent />

      <!-- Router-view to show different views like HomeView, Product List, etc. -->
      <router-view />

    <!-- Footer should be visible on all pages -->
      <FooterComponent />
      <HeaderMobileComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderMobileComponent from "./components/HeaderMobileComponent.vue";
// localStorage.clear();
export default {
  created() {
    this.$store.dispatch("loadCommandesFromLocalStorage");
  },
  components: {
    HeaderComponent,
    FooterComponent,
    HeaderMobileComponent,
  },
}
</script>

<style>
:root {
  --color-primary: #d7c3a7;
  --color-secondary: #264653;
  --color-accent: #e9c46a;
  --color-background: #f4f4f4;
  --color-logout: #e63946;
  --spacing: 1.5rem;
}
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-size: 62.5%; */
}
#app {
  font-family: 'Roboto', 'Open Sans';
  display: flex;           /* may cause fout a merde to others*/
  flex-direction: column;   /* may cause fout a merde to others*/
  min-height: 100vh;    /* may cause fout a merde to others*/
}

</style>
