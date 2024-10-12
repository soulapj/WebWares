<template>
    <div class="search-container">
      <input
        v-model="searchQueryLocal"
        type="text"
        :placeholder="placeholder"
        class="search-bar"
        @input="onSearch"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: "Rechercher un produit...",
      },
      // On reçoit la valeur de recherche initiale de la vue parent si nécessaire
      searchQuery: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        searchQueryLocal: this.searchQuery, // copie locale de la query
      };
    },
    methods: {
      // Emit l'événement pour envoyer la recherche au parent
      onSearch() {
        this.$emit("update-search", this.searchQueryLocal);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .search-bar {
    padding: 10px;
    width: 300px;
    border-radius: 25px;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    text-align: center;
  }
  </style>
  