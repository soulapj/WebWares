<template>
    <div class="modal" :class="{'is-visible': showModal}">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Connexion / Inscription</h2>
        <form @submit.prevent="submitForm">
          <div>
            <label for="name">Nom :</label>
            <input type="text" v-model="name" id="name" required />
          </div>
          <div>
            <label for="email">Email :</label>
            <input type="email" v-model="email" id="email" required />
          </div>
          <div>
            <label for="role">Rôle :</label>
            <select v-model="role">
              <option value="user">Utilisateur</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {

    name: 'LoginModal',

    props: ['showModal'], //recevoir showModal depuis App.vue

    data() {
      return {
        name: '',
        email: '',
        role: 'user'
      };
    },

    methods: {

      ...mapActions(['log']),
      closeModal() {
        this.$emit('close'); // on emet un événement pour fermer le modal dans App.vue
      },

      submitForm() {
        this.log({ email: this.email, name: this.name, role: this.role });
        this.closeModal();
      }
    }
  };
  </script>
  
  <style>
  .modal {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal.is-visible {
    display: flex;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
  }
  
  .close {
    float: right;
    font-size: 24px;
    cursor: pointer;
  }
  
  form div {
    margin: 10px 0;
  }
  
  input, select, button {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
  }
  </style>
  