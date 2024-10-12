<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="WebWares Logo" />
      </router-link>
    </div>

    <!-- Navigation Links -->
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/produit">Tous les Produits</router-link>

      <!-- Dynamic Categories -->
      <div class="categories-dropdown">
        <span>Catégories</span>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <router-link :to="{ name: 'CategorieProduits', params: { id: category.id }}">{{ category.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Authentication Links -->
    <div>
      <div class="auth-section" v-if="!isLoggedIn">
        <ButtonComponent to="/login" label="Connexion" color="var(--color-secondary)"/>
        <ButtonComponent to="/signup" label="S'inscrire" color="var(--color-accent)" textColor="var(--color-secondary)" />
      </div>

      <div class="icons" v-else>
        <!-- Cart Icon -->
        <router-link to="/panier" class="cart-icon">
          <i class="fa-solid fa-cart-shopping"></i>
        </router-link>

        <!-- User Menu -->
        <div class="user-menu">
          <span class="user-icon">
            <i class="fa-solid fa-user"></i>
          </span>
          <div class="dropdown">
            <p class="welcome-msg">Bienvenue {{ currentUser.raisonSociale }}</p>
            <button class="logout" @click="logout">Déconnexion</button>
          </div>
        </div>
      </div>
    </div>
    
  </header>
</template>

<script>
import { mapState } from 'vuex';
import ButtonComponent from './ButtonComponents.vue';


export default {
  components: {
    ButtonComponent
  },
  data() {
    return {
      isLoggedIn: false, // This should be dynamically set, depending on user authentication state
    };
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
      currentUser: (state) => state.utilisateurs.find(user => user.id === 1), // Example: Replace logic with actual authentication data
    }),
  },
  methods: {
    logout() {
      // Logout logic goes here 
      this.isLoggedIn = false;
    },
  },
  created() {
    // (replace this with actual authentication logic)
    this.isLoggedIn = !!this.currentUser;
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  background-color: var(--color-background);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
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
  padding: 1rem 0;
  width: 20rem;
  text-align: center;
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
}

.user-menu {
  position: relative;
}

.user-menu .dropdown {
  display: none;
  text-align: center;
  position: absolute;
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
}

</style>

