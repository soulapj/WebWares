<template>
  <div class="search-container">
    <div class="search-bar-wrapper">
      <!-- Icone de loupe -->
      <i class="fas fa-search search-icon"></i>
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
