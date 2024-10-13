<template>
    <div>
        <!-- Ajouter un produit -->
        <!-- Search bar (filtre)-->
        <div class="top">
          <SearchBar :placeholder="'Rechercher un produit...'" :searchQuery="searchQuery" @update-search="handleSearchUpdate" />
          <ButtonComponents class="bouton" label="Nouveau Produit" color="#72BF78" @click="openAddModal()"></ButtonComponents>
        </div>

        <!-- Liste Produit -->
        <div class="container">
          <table>
              <thead>
                  <tr>
                      <th>ID Produit</th>
                      <th>Image</th>
                      <th>Titre</th>
                      <th>Description</th>
                      <th>Prix</th>
                      <th>Quantité Minimum</th>
                      <th>Catégorie</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(produit, index) in this.filteredProduits" :key="index">
                      <td>{{ produit.id }}</td>
                      <td><img v-bind:src="produit.images" id="image" v-bind:alt="produit.titre"></td>
                      <td>{{ produit.titre }}</td>
                      <td>{{ produit.description }}</td>
                      <td>{{ produit.prix }}</td>
                      <td>{{ produit.moq }}</td>
                      <td>Catégorie {{ produit.categorieId }}</td>
                      <td>
                          <ButtonComponents label="Modifier" color="#72BF78" @click="openModModal()"></ButtonComponents>
                          <ButtonComponents label="Supprimer" color="red" @click="openDeleteModal(produit.id)"></ButtonComponents>
                                <!-- Deletion Modal -->
                      <ModalComponent :showModal="showDeleteModalConfirm" color="#d7c3a7">
                          <template #header>
                              <h2>Confirmation de bannissement :</h2>
                          </template>
                          
                          <template #body>
                              <p>Tout bannissement est définitif. Êtes-vous sur de vouloir continuer?</p>
                          </template>
                          <template #footer>
                              <ButtonComponents
                                  label="Valider"
                                  color="#72BF78"
                                  @click="deleteProduit()"
                              />
                              <ButtonComponents
                                  label="Annuler"
                                  color="red"
                                  @click="closeDeleteModalConfirm"
                              />
                          </template>
                      </ModalComponent>
                      <!-- Modification Modal -->
                      <ModalComponent :showModal="showModificationModalConfirm" color="#d7c3a7">
                          <template #header>
                              <h2>Modifier :</h2>
                          </template>
                          
                          <template #body>
                              <p>Êtes vous sur?</p>
                          </template>
                          <template #footer>
                              <ButtonComponents
                                  label="Valider"
                                  color="#72BF78"
                                  @click="closeModModalConfirm"
                              />
                              <ButtonComponents
                                  label="Annuler"
                                  color="red"
                                  @click="closeModModalConfirm"
                              />
                          </template>
                      </ModalComponent>
                      </td>
                  </tr>
              </tbody>
          </table>
        <!-- Ajout Modal -->
        <ModalComponent :showModal="showAddModalConfirm" color="#d7c3a7">
            <template #header>
                <h2>Voulez-vous ajouter un nouvel utilisateur?</h2>
            </template>
            
            <template #body>
                <p>Êtes vous sur?</p>
            </template>
            <template #footer>
                <ButtonComponents
                    label="Valider"
                    color="#72BF78"
                    @click="closeAddModalConfirm"
                />
                <ButtonComponents
                    label="Annuler"
                    color="red"
                    @click="closeAddModalConfirm"
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
      ModalComponent
    },
    data() {
    return {
      searchQuery: "", // Garde la query ici pour la gestion dans le parent
      showDeleteModalConfirm: false,
      showModificationModalConfirm: false,
      showAddModalConfirm: false,
    };
    },
    
    methods: {
        ...mapMutations(['deleteBackProduit']),
        deleteProduit(id){
          this.deleteBackProduit(id)
          this.saveProductToLocalStorage()
          this.showDeleteModalConfirm = false;
        },
        // Méthode pour mettre à jour la recherche
        handleSearchUpdate(newSearchQuery) {
          this.searchQuery = newSearchQuery;
        },
        openDeleteModal() {
            this.showDeleteModalConfirm = true;
        },
        closeDeleteModalConfirm() {
            this.showDeleteModalConfirm = false;
        },
        openModModal() {
            this.showModificationModalConfirm = true;
        },
        closeModModalConfirm() {
            this.showModificationModalConfirm = false;
        },
        openAddModal() {
            this.showAddModalConfirm = true;
        },
        closeAddModalConfirm() {
            this.showAddModalConfirm = false;
        },
        saveProductToLocalStorage(){
            localStorage.setItem("productlist", JSON.stringify(this.produits))
        },
    },
    computed: {
      ...mapState(["produits", "categories"]),
      filteredProduits() {
      return this.produits.filter((prod) =>
        prod.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      },
    },
    watch:{
        produits:{
            handler(){
                this.saveProductToLocalStorage()
            }
        }
    },
    created(){
      this.saveProductToLocalStorage();
      let storedProduct = localStorage.getItem("productlist");
      if (storedProduct) {
        this.produits = JSON.parse(storedProduct)
      }
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
  </style>
  