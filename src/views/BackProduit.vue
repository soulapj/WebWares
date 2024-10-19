<template>
  <div>
    <!-- Ajouter un produit -->
    <!-- Search bar (filtre)-->
    <div class="top">
      <SearchBar
        :placeholder="'Rechercher un produit...'"
        :searchQuery="searchQuery"
        @update-search="handleSearchUpdate"
      />
      <ButtonComponents
        class="bouton"
        label="Nouveau Produit"
        type="submit"
        @click="$router.push(`ajout-produit`)"
      ></ButtonComponents>
    </div>

    <!-- Liste Produit -->
    <div class="container">
      <table>
        <thead>
          <tr>
            <th class="pimg">Image</th>
            <th>Titre</th>
            <th class="desc">Description</th>
            <th>Prix</th>
            <th>Quantité Minimum</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(produit, index) in this.filteredProduits" :key="index">
            <td class="pimg">
              <img
                v-bind:src="produit.images"
                id="image"
                v-bind:alt="produit.titre"
              />
            </td>
            <td >{{ produit.titre }}</td>
            <td class="desc">{{ produit.description }}</td>
            <td>{{ produit.prix }}</td>
            <td>{{ produit.moq }}</td>
            <td class="categorybox hide">
              <div v-for="(category, index) in this.categories" :key="index">
                <div v-if="produit.categorieId == category.id"> {{ category.name }}</div>
              </div>
            </td>
            <!-- <td v-if="produit.categorieId == 1">Mobilier d'Intérieur</td>
            <td v-else-if="produit.categorieId == 2">Luminaires</td>
            <td v-else-if="produit.categorieId == 3">Tapis</td>
            <td v-else-if="produit.categorieId == 4">Objets de décoration</td>
            <td v-else>Placeholder</td> -->
            <td class="act">
              <ButtonComponents
                label="Modifier"
                type="submit"
                @click="$router.push(`modif-produit/` + produit.id)"
              ></ButtonComponents>
              <ButtonComponents
                label="Supprimer"
                type="logout"
                @click="openDeleteModal(produit.id)"
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
            @click="deleteProduit(this.produitToRemove)"
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
      produitToRemove: "",
    };
  },

  methods: {
    ...mapMutations(["backDeleteProduct"]),
    deleteProduit() {
      this.$store.commit("backRemoveProduit", this.produitToRemove);
      this.showDeleteModalConfirm = false;
      this.produitToRemove = null;
    },
    // Méthode pour mettre à jour la recherche
    handleSearchUpdate(newSearchQuery) {
      this.searchQuery = newSearchQuery;
    },
    openDeleteModal(produitId) {
      this.produitToRemove = produitId;
      this.showDeleteModalConfirm = true;
    },
    closeDeleteModalConfirm() {
      this.showDeleteModalConfirm = false;
      this.produitToRemove = null;
    },
    openModModal(produitId) {
      this.showModificationModalConfirm = true;
      this.produitToRemove = produitId;
    },
    closeModModalConfirm() {
      this.showModificationModalConfirm = false;
      this.produitToRemove = null;
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
    filteredProduits() {
      return this.produits.filter(
        (prod) =>
          prod.titre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          prod.description
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

.categorybox {
  display: flex;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid transparent;
}

.hide {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 156px;
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
.produit {
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
  
}

</style>
