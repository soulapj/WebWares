<template>
  <nav>

    <!-- App vue est le point d'entrée principal de notre application, il continent la navbar, et peut
     contenir un footer -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- bouton qui affichera le modal-->

    <!-- si l'utilisateur est déconnecté, on affiche le bouton login -->
    <!-- si l'utilisateur est connecté, on affiche le bouton logout -->
    <button v-if="isDisconnected" @click="openModal">Login</button>
    <button v-if="isAuthenticated" @click="logout">Logout</button>

    <!-- on accède à l'admin panel si on est admin -->
     <button
      v-if="isAdmin"
      @click="navigateToAdmin"
      style="background-color: blue; color: white; padding: 10px; margin: 10px;">
      Admin Panel
    </button>

    <!-- on accède au user panel si on est user -->
    <button
      v-if="isUser"
      @click="navigateToUser"
      style="background-color: orange; color: white; padding: 10px; margin: 10px;">
      User Panel
    </button>
  </nav>
  <router-view/>

  <!-- ici on fait notre modal de connexion -->
   <loginModal :showModal="showModal" @close="closeModal"></loginModal>
</template>

<script>
import LoginModal from './components/LoginModal.vue'

//il faut comprendre que notre store set déjà les données de l'utilisateur courant
//la page Vue qui est le point d'entrée de notre application effectue sa propre logique
export default {
  name: 'App',
  components: {
    LoginModal
  },
  data() {
    return {
      showModal: false // au départ on ne montre pas le modal il est donc set à false
    }
  },
  

  computed:{

    //on va utiliser directement les données du store pour retourner le rôle de l'utilisateur courant


    currentUser(){

      //on retourne l'utilisateur courant de notre store
      return this.$store.state.currentUser;

    },
    isAuthenticated(){
       // on retourne l'utilisateur et son role s'il est authentifié
      return this.currentUser && (this.currentUser.role === 'admin' || this.currentUser.role === 'user');
     
    },
    isDisconnected(){
      //imagine que l'utilisateur est déconnecté. Est-ce qu'on veut qu'il accède à notre sute ? Non.
      //on retourne donc le currentUser et son role déconnecté

      return this.currentUser && this.currentUser.role === 'disconnected';
    },
    
    isAdmin(){
      //si l'user est admin, le currentUser et son role admin
      return this.currentUser && this.currentUser.role === 'admin';
    },
    isUser(){
      //même chose pour l'utilisateur qui n'est pas admin
      return this.currentUser && this.currentUser.role === 'user';
    }

  },

  created(){
    //au moment de la création de l'instance de l'application on charge les données de l'utilisateur courant
    //et on charge le tableau des utilisateurs stockés dans le local storage
    //normalemnt on fait pas ça car on peut se retrouver avec une masse de données conséquente à charger, imaginez Amazon et ses millions d'utilisateurs ! 
    //Mais pour notre exemple mes reufs, on s'en fout un peu 
    this.$store.commit('loadUsersFromLocalStorage');
    this.$store.commit('loadCurrentUserFromLocalStorage');
  },


  methods: {

    //openModal et close modal sont des méthodes qui permettent d'ouvrir et de fermer le modal dans le contexte de l'instance
    openModal(){
      this.showModal = true;
    },

    closeModal(){
      this.showModal = false;
    },

    navigateToAdmin(){
      this.$router.push({ name : 'admin' });
    },

    navigateToUser(){
      this.$router.push({ name : 'user' });
    },

    //nécessairement pour notre exemple, on a besoin de se connecter afin d'effectuer les tests
    login(user){
      //vérifier si l'utilisateur existe déjà
      const existingUser = this.$store.getters.getUserByEmail(user.email);

    
      if(existingUser)
      {
        this.$store.commit('restoreUser');
        alert(`l'utilisateur ${user.name} est connecté ! Bon retour parmis nous !`);
      }
      else
      {
        this.$store.commit('setUser', user);
        alert(`Utilisateur ${user.name} inscrit avec le role ${user.role}`);
      }
      this.showModal = false;
    },
    logout(){
      this.$store.commit('logout');
      alert('Vous êtes déconnecté');
      this.$router.push('/');
    }
  }
}
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