<template>
  <div>
    <div class="top">
      <SearchBar
        :placeholder="'Rechercher une categorie...'"
        :searchQuery="searchQuery"
        @update-search="handleSearchUpdate"
      />
      <ButtonComponents
        class="bouton"
        label="Nouvelle Categorie"
        type="submit"
        @click="$router.push(`/ajout-categ/`)"
      ></ButtonComponents>
    </div>

    <!-- Liste Produit -->
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Image</th>
            <th class="desc">Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, index) in this.filteredCateg" :key="index">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>
              <img
                v-bind:src="category.images"
                id="image"
                v-bind:alt="category.name"
              />
            </td>
            <td class="desc">{{ category.description }}</td>
            <td>
              <ButtonComponents
                label="Modifier"
                type="submit"
                @click="$router.push(`/modif-category/` + category.id)"
              ></ButtonComponents>
              <ButtonComponents
                label="Supprimer"
                type="logout"
                @click="openDeleteModal(category.id)"
              ></ButtonComponents>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Deletion Modal -->
      <ModalComponent :showModal="showDeleteModalConfirm" color="#d7c3a7">
        <template #header>
          <h2>Confirmation de suppression :</h2>
        </template>

        <template #body>
          <p>Toute suppression est définitive. Voulez-vous continuer?</p>
        </template>
        <template #footer>
          <ButtonComponents
            label="Valider"
            type="submit"
            @click="deleteCateg(this.categToRemove)"
          />
          <ButtonComponents
            label="Annuler"
            type="logout"
            @click="closeDeleteModalConfirm"
          />
        </template>
      </ModalComponent>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ButtonComponents from "@/components/ButtonComponents.vue";
import SearchBar from "@/components/SearchBar.vue";
import ModalComponent from "@/components/ModalComponent.vue";

export default {
  components: {
    ButtonComponents,
    SearchBar,
    ModalComponent,
  },
  data() {
    return {
      searchQuery: "", // Garde la query ici pour la gestion dans le parent
      showDeleteModalConfirm: false,
      showModificationModalConfirm: false,
      showAddModalConfirm: false,
      categToRemove: "",
    };
  },

  methods: {
    ...mapMutations(["backDeleteProduct"]),
    deleteCateg() {
      this.$store.commit("backRemoveCateg", this.categToRemove);
      this.showDeleteModalConfirm = false;
      this.categToRemove = null;
    },
    // Méthode pour mettre à jour la recherche
    handleSearchUpdate(newSearchQuery) {
      this.searchQuery = newSearchQuery;
    },
    openDeleteModal(produitId) {
      this.categToRemove = produitId;
      this.showDeleteModalConfirm = true;
    },
    closeDeleteModalConfirm() {
      this.showDeleteModalConfirm = false;
      this.categToRemove = null;
    },
    openModModal(produitId) {
      this.showModificationModalConfirm = true;
      this.categToRemove = produitId;
    },
    closeModModalConfirm() {
      this.showModificationModalConfirm = false;
      this.categToRemove = null;
    },
    openAddModal() {
      this.showAddModalConfirm = true;
    },
    closeAddModalConfirm() {
      this.showAddModalConfirm = false;
    },
  },
  computed: {
    ...mapState(["produits", "categories"]),
    filteredCateg() {
      return this.categories.filter(
        (categ) =>
          categ.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          categ.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
}
table {
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
}

thead {
  background-color: #f4f4f4;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #d7c3a7;
  color: #264653;
}

tr:hover {
  background-color: #f1f1f1;
}
img {
  max-width: 100%;
  height: 100px;
  margin: 15px;
}
.catégorie {
  display: inline-block;
  margin: 50px;
}
.category {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.bouton {
  margin: 10px;
  font-size: 16px;
  align-self: center;
  transform: translateX(45%);
}
.top {
  display: flex;
  justify-content: center;
}

@media (max-width: 1200px) {
  .desc {
    display: none;
  }
  
}

@media (max-width: 900px) {
  .top {
    transform: scale(80%) translate(-5%);
  }
  
}

@media (max-width: 600px) {
  .pimg {
    display: none;
  }
  td{
    padding: 3px
  }
  .act {
    transform: scale(80%);
  }
  img {
    margin:0px;
  }
  
}
</style>
