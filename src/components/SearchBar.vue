<template>
  <div class="search-container">
    <div class="search-bar-wrapper">
      <!-- Icone de loupe -->
       <i class="search-icon"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="25px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
       </i>
      <!-- Barre de recherche -->
      <input
        v-model="searchQueryLocal"
        type="text"
        :placeholder="placeholder"
        class="search-bar"
        @input="onSearch"
      />
    </div>
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
  margin-top: 20px;
}

.search-bar-wrapper {
  position: relative;
  width: 300px;
}

.search-bar {
  width: 100%;
  padding: 10px;
  padding-left: 40px; /* Ajoute de l'espace pour l'icône */
  border-radius: 25px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  text-align: center;
}

/* Icône de recherche */
.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #aaa;
}
</style>
