<template>
    <div class="top">
        <SearchBar :placeholder="`Rechercher un nom d'entreprise`" :searchQuery="searchQuery" @update-search="handleSearchUpdate" />
        <ButtonComponents class="bouton" label="Nouvel User" color="#72BF78" @click="openAddModal()"></ButtonComponents>
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
                    color="#E9C46A"
                    @click="closeAddModalConfirm"
                />
                <ButtonComponents
                    label="Annuler"
                    color="#E9C46A"
                    @click="closeAddModalConfirm"
                />
            </template>
        </ModalComponent>
    </div>
    <div class="conteneur">
      <div class="profil" v-for="(user, index) in this.filteredUser" :key="index">
        <h4>{{ user.raisonSociale }}</h4>
        <p>
          Adresse de l'entreprise : {{ user.adresse }} {{ user.codePostal }}
          {{ user.ville }}
        </p>
        <p>Numéro de Siret : {{ user.siret }}</p>
        <p>Adresse mail : {{ user.email }}</p>
        <p>Rôle : {{ user.role }}</p>
        <div class="boutons">
            <ButtonComponents label="Modifier" color="#72BF78" @click="openModModal(user.id)"></ButtonComponents>
            <ButtonComponents label="Bannir" color="#e63946" @click="openDeleteModal(user.id)"></ButtonComponents>
        </div>
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
                    color="#E9C46A"
                    @click="closeDeleteModalConfirm"
                />
                <ButtonComponents
                    label="Annuler"
                    color="#E9C46A"
                    @click="closeDeleteModalConfirm"
                />
            </template>
        </ModalComponent>
        <!-- Modification Modal -->
        <ModalComponent :showModal="showModificationModalConfirm" color="#d7c3a7">
            <template #header>
                <h2>Modifier {{ user.raisonSociale }} :</h2>
            </template>
            
            <template #body>
                <p>Êtes vous sur? {{ user.id }}</p>
            </template>
            <template #footer>
                <ButtonComponents
                    label="Valider"
                    color="#E9C46A"
                    @click="closeModModalConfirm"
                />
                <ButtonComponents
                    label="Annuler"
                    color="#E9C46A"
                    @click="closeModModalConfirm"
                />
            </template>
        </ModalComponent>
      </div>
    </div>
  </template>

  <script>
  import ButtonComponents from "@/components/ButtonComponents.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import SearchBar from "@/components/SearchBar.vue";
import { mapState } from "vuex";

  export default {
    components:{
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
    computed: {
    ...mapState(["utilisateurs"]),
    // Propriété calculée pour filtrer les produits
    filteredUser() {
        return this.utilisateurs.filter((user) =>
        user.raisonSociale.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    },
    },
    methods: {
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
        saveUserToLocalStorage(){
            localStorage.setItem("userList", JSON.stringify(this.utilisateurs))
        }
    },
    watch:{
        produits:{
            handler(){
                this.saveUserToLocalStorage()
            }
        }
    },
    created(){
        this.saveUserToLocalStorage();
        let storedUser = localStorage.getItem("userList");
        if (storedUser) {
          this.utilisateurs = localStorage.setItem("userList", storedUser)
        }

    },

  };
  </script>

  <style scoped>
    h4{
        font-size: 24px;
    }
    .top {
        display: flex;
        justify-content: center;
    }
    .conteneur{
        background-color: #ece5dc;
        display: flex;
        justify-content: space-evenly;
    }
    .profil{
        width: 300px;
        margin: 10px;
        padding: 10px;
        background-color: white;
        border: solid #D7C3A7 5px;
        border-radius: 25px;
    }
    .boutons {
        display: flex;
        justify-content: space-evenly;
    }

    .bouton {
        margin: 10px;
        font-size: 16px;
        align-self: center;
        transform: translateX(45%);
    }
</style>