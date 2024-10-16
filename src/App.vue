<template>
  <div id="app">
      <!-- Header should be visible on all pages -->
      <!-- Header component reçoit isLoggedIn en props -->
      <!-- User logged in est émis par le composent enfant Header Component, mettant à jour son état -->
      <HeaderComponent :isLoggedIn="isLoggedIn" @user-logged-in="handleUserLoggedIn"/>

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
  data(){
    return {
      isLoggedIn: false,
      currentUserId: null,
    };
  },

  //Cette méthode mettra à jour l'état de connexion de l'utilisateur
  //Dans nous écoutons un évènement émis par Login lors de la connexion, qui set is Logged In sur true ou false, et nous le passons l'information de isLoggedIn
  //au HeaderComponent que l'on modifiera pour qu'il accepte la prop isLoggedIn. Cela passera du composant parent ici App.vue
  // au composant enfant HeaderComponent.vue
  methods:{
    handleUserLoggedIn(loggedInStatus){
      this.isLoggedIn = loggedInStatus;
      localStorage.setItem("isLoggedIn", loggedInStatus);

      if(loggedInStatus)
      {
        const currentUtilisateur = JSON.parse(localStorage.getItem("currentUtilisateur"));
        if (currentUtilisateur) {
          this.currentUserId = currentUtilisateur.id;
          this.updateUserIdInCommande(this.currentUserId);
          alert("current user id : " + this.currentUserId);
        }
      }
    },

    updateUserIdInCommande(userId) {
    //récupérer les commandes validées à partir du localStorage
    let commandes = JSON.parse(localStorage.getItem("commandes")) || [];

    // Vérifie si des commandes existent et mets à jour l'ID  utilisateur dans les commandes validées
    commandes = commandes.map(commande => {
      if(!commande.userId || commande.userId !== userId) {
        commande.userId = userId;
      }
      return commande;
    })

    localStorage.setItem("commandes", JSON.stringify(commandes));

    //on  met à jour l'ID utilisateur dans le store
    commandes.forEach((commande) => {
      this.$store.dispatch("setUserIdForCommande", {
        userId,
        commandeId : commande.id,
      })
      alert("userID : " + userId + " commandeId : " + commande.id);
    });
  },

  // -------------------- //
  },




  // ----------------- //
  created() {
    

    // -----------------C
    this.$store.dispatch("loadUtilisateursFromLocalStorage");
    this.$store.dispatch("loadCurrentUtilisateurFromLocalStorage");
    this.$store.dispatch("loadCurrentUtilisateursFromLocalStorage")
    this.$store.dispatch("loadCommandesFromLocalStorage");

    // ----------------- //
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
