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
};
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
:root {
  --color-primary: #D7C3A7;
  --color-secondary: #264653;
  --color-accent: #E9C46A;
  --color-background: #F4F4F4;
  --color-logout: #e63946;
}
body {
  margin: 0;
}
#app {
  font-family: 'Roboto', 'Open Sans';
  margin: 0;
}
</style>
