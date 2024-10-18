<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="WebWares Logo" />
      </router-link>
    </div>

    <!-- Navigation Links -->
    <nav v-if="(!isAdminView && isLoggedIn) || !isLoggedIn || isUser">
      <router-link to="/">Accueil</router-link>
      <router-link to="/produit">Produits</router-link>

      <!-- Dynamic Categories -->
      <div class="categories-dropdown">
        <span
          >Catégories <i class="fa-duotone fa-solid fa-caret-down fa-xl"></i
        ></span>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <router-link
              :to="{ name: 'CategorieProduits', params: { id: category.id } }"
              >{{ category.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <nav v-if="isAdmin && isLoggedIn && isAdminView">
      <router-link to="/user-back">Utilisateur</router-link>
      <router-link to="/product-back">Produits</router-link>
      <!-- <router-link to="/">Catégories</router-link> -->
      <router-link to="/gestion-commande">Commandes</router-link>
    </nav>

    <!-- Authentication Links -->
    <div>
      <div class="auth-section" v-if="!isLoggedIn">
        <ButtonComponents
          to="/login"
          label="Connexion"
          type="login"
          @click="login"
        />
        <ButtonComponents
          to="/signup"
          label="S'inscrire"
          type="register"
          @click="goToRegister"
        />
      </div>

      <div class="icons" v-else>
        <!-- Cart Icon -->
        <router-link
          to="/panier"
          class="cart-icon"
          v-if="isUser || !isAdminView"
        >
          <span v-if="commandes && commandes.length > 0">{{
            commandes.length
          }}</span>
          <i class="fa-solid fa-basket-shopping fa-lg"></i>
        </router-link>

        <!-- User Menu -->
        <div class="user-menu">
          <span class="user-icon">
            <i class="fa-solid fa-user fa-lg"></i>
          </span>
          <div class="dropdown">
            <p class="welcome-msg">Bienvenue {{ currentUser.raisonSociale }}</p>

            <ButtonComponents
              label="Profil"
              type="login"
              @click="$router.push('/profile/:id')"
            />
            <div v-if="isAdmin && isLoggedIn">
              <button @click="toggleAdminView" style="width: fit-content">
                {{ isAdminView ? "Accès utilisateur" : "Accès admin" }}
              </button>
            </div>
            <ButtonComponents
              label="Déconnexion"
              type="logout"
              @click="logout"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ButtonComponents from "./ButtonComponents.vue";

export default {
  props: {
    // isLoggedIn: {
    //   type: Boolean,
    //   required: true,
    // },
  },

  components: {
    ButtonComponents,
  },
  data() {
    return {
      // isLoggedIn: false,
    };
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,

      //ici on j'ai juste modifié sur state.currentUserId
      currentUser: (state) =>
        state.utilisateurs.find((user) => user.id === state.currentUserId),

      commandes: (state) => state.commandes,
    }),
    ...mapGetters([
      "currentUser",
      "isLoggedIn",
      "isAdmin",
      "isUser",
      "isAdminView",
    ]),
  },
  methods: {
    // j'ai modifié et ajouté quelques méthodes ici : tout est indiqué par mes commentaires

    logout() {
      // ------------ Clément

      // alert("Déconnexion");
      //ici cette action permet de sauvegarder les commandes de le tableau des savedCommandes
      this.$store.commit("saveCommandesForUtilisateur");
      this.$store.commit("clearCurrentUtilisateur");

      localStorage.removeItem("currentUtilisateur");

      this.$emit("user-logged-in", false);
      // alert(this.isLoggedIn);
      this.$router.push("/");
      // ------------ //
    },
    login() {
      // this.isLoggedIn = true; le problème était que ça nous mettait directement en connecté donc passé en commentaire
      this.$router.push("/login");
    },

    // méthode pour rediriger vers la page d'inscription
    goToRegister() {
      this.$router.push("/register");
    },
    // -------------------------------- //

    toggleAdminView() {
      this.$store.commit("toggleAdminView");
    },
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  background-color: var(--color-background);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 238;
}

.logo img {
  height: 6rem;
  width: 6rem;
}

nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

nav a {
  font-weight: bold;
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
}

nav a:hover {
  background-color: var(--color-primary);
  transition: 0.9s ease;
  padding: 0.5rem;
  border-radius: 5px;
}

.categories-dropdown {
  position: relative;
  color: var(--color-secondary);
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem;
  transition: 0.9s ease;
  border-radius: 5px;
}

.categories-dropdown:hover {
  background-color: var(--color-primary);
  cursor: pointer;
}

.categories-dropdown ul {
  display: none;
  position: absolute;
  background-color: var(--color-background);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  list-style: none;
  padding: 1rem;
  width: 20rem;
  text-align: left;
  top: 20px;
  left: -100px;
}

.categories-dropdown:hover ul {
  display: block;
}

.categories-dropdown ul li {
  font-size: 1rem;
  line-height: 1.5;
}

.auth-section {
  display: flex;
  gap: 1rem;
}

.icons {
  display: flex;
  font-size: 1.5rem;
  gap: 2rem;
}

i {
  color: var(--color-secondary);
  cursor: pointer;
}

i:hover {
  color: var(--color-primary);
  transition: 0.3s ease;
}

.user-menu {
  position: relative;
}

.user-menu .dropdown {
  display: none;
  text-align: center;
  position: absolute;
  /*position a gerer */
  top: 25px;
  left: -100px;
  background-color: var(--color-background);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 1rem 0;
  width: 17rem;
}

.user-menu:hover .dropdown {
  display: block;
}

.welcome-msg {
  margin: 0.5rem 0 1rem 0;
}

.logout {
  background-color: var(--color-logout);
  color: var(--color-background);
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-logout);
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.logout:hover {
  background-color: var(--color-background);
  color: var(--color-logout);
  border: 2px solid var(--color-logout);
  padding: 0.5rem 1rem;
  transition: 0.3s ease;
}

@media (max-width: 1260px) {
  header {
    display: none;
  }
}
</style>
