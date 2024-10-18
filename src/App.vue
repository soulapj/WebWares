<template>
  <div id="app">
    <!-- Header should be visible on all pages -->
    <!-- Header component reçoit isLoggedIn en props -->
    <!-- User logged in est émis par le composent enfant Header Component, mettant à jour son état -->
    <HeaderComponent
      :isLoggedIn="isLoggedIn"
      @user-logged-in="handleUserLoggedIn"
    />

    <!-- Router-view to show different views like HomeView, Product List, etc. -->
    <!-- ici on écoute l'évent passé depuis la page login -->
    <router-view @user-logged-in="handleUserLoggedIn" />

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
  //-----------------C
  data() {
    return {
      isLoggedIn: false,
      currentUserId: null,
    };
  },

  //Cette méthode mettra à jour l'état de connexion de l'utilisateur
  //Dans nous écoutons un évènement émis par Login lors de la connexion, qui set is Logged In sur true ou false, et nous le passons l'information de isLoggedIn
  //au HeaderComponent que l'on modifiera pour qu'il accepte la prop isLoggedIn. Cela passera du composant parent ici App.vue
  // au composant enfant HeaderComponent.vue
  methods: {
    handleUserLoggedIn(loggedInStatus) {
      this.isLoggedIn = loggedInStatus;
      localStorage.setItem("isLoggedIn", loggedInStatus);

      if (loggedInStatus) {
        const currentUtilisateur = JSON.parse(
          localStorage.getItem("currentUtilisateur")
        );

        if (currentUtilisateur) {
          this.currentUserId = currentUtilisateur.id;
          // alert("currentUserId: " + this.currentUserId);
          this.$store.dispatch("updateUserIdInCommandes", {
            userId: this.currentUserId,
          });

          // this.$store.commit("filterCommandesByCurrentuser");
        }
      }
    },

    // -------------------- //
  },

  created() {
    // -----------------C
    this.$store.dispatch("loadUtilisateurArrayFromLocalStorage");
    this.$store.dispatch("loadCurrentUtilisateurFromLocalStorage");
    this.$store.dispatch("loadCommandesFromLocalStorage");
    this.$store.dispatch("backLoadProduitFromLocalStorage");
    this.$store.dispatch("backLoadUserFromLocalStorage");

    // ----------------- //
  },
  components: {
    HeaderComponent,
    FooterComponent,
    HeaderMobileComponent,
  },
};
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-size: 62.5%; */
}
#app {
  font-family: "Roboto", "Open Sans";
  display: flex; /* may cause fout a merde to others*/
  flex-direction: column; /* may cause fout a merde to others*/
  min-height: 100vh; /* may cause fout a merde to others*/
}
</style>
