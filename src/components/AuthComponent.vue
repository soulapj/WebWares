<template>
    <div class="auth-container">
      <h1>{{ isAdmin ? 'Admin' : 'User' }} Login</h1>
      
      <div v-if="!isLoggedIn">
        <form @submit.prevent="login">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Enter your email" required>
          
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" placeholder="Enter your password" required>
          
          <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </div>

      <div v-if="isLoggedIn">
        <h2>Welcome, {{ currentUser.raisonSociale }}</h2>
        <p>role: {{ currentUser.role }}</p>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    computed: {
      
      currentUser() {
        return this.$store.state.currentUser;
      },
      isLoggedIn() {
        return !!this.currentUser
      },
      isAdmin() {
        return this.currentUser?.role === 'ADMIN'
      }
    },
    methods: {
      login() {
       
        const user = this.$store.state.utilisateurs.find(
          (u) => u.email === this.email && u.motDePasse === this.password
        );
        
        if (user) {
          this.$store.commit('setCurrentUser', user)
          localStorage.setItem('currentUser', JSON.stringify(user))
          this.errorMessage = ''
        } else {
          this.errorMessage = 'Invalid email or password'
        }
      },
      logout() {
        this.$store.commit('setCurrentUser', null)
        localStorage.removeItem('currentUser')
      }
    },
    created() {
      const savedUser = JSON.parse(localStorage.getItem('currentUser'))
      if (savedUser) {
        this.$store.commit('setCurrentUser', savedUser)
      }
    }
  };
  </script>
  
  <style scoped>
  .auth-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    border: 1px solid black;
  }
  
  input {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 1rem;
  }
  
  button {
    padding: 10px 20px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: var(--color-secondary);
  }
  </style>
  