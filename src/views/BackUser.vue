<template>
    <div>
        <div class="top">
            <SearchBar :placeholder="`Rechercher un nom d'entreprise`" :searchQuery="searchQuery" @update-search="handleSearchUpdate" />
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
                <ButtonComponents label="Modifier" type="login" @click="$router.push(`modif-user/`+ user.id)"></ButtonComponents>
                <ButtonComponents label="Supprimer" type="logout" @click="openDeleteModal(user.id)"></ButtonComponents>
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
                        type="submit"
                        @click="deleteUser(this.userToRemove)"
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
      userToRemove: "",
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
        deleteUser(){
          this.$store.commit("backRemoveUser", this.userToRemove)
          this.showDeleteModalConfirm = false;
          this.userToRemove = null
        },
        // Méthode pour mettre à jour la recherche
        handleSearchUpdate(newSearchQuery) {
          this.searchQuery = newSearchQuery;
        },
        openDeleteModal(userId) {
            this.userToRemove = userId;
            this.showDeleteModalConfirm = true;
        },
        closeDeleteModalConfirm() {
            this.showDeleteModalConfirm = false;
            this.userToRemove = null
        },
        openModModal(userId) {
            this.userToRemove = userId;
            this.showModificationModalConfirm = true;
        },
        closeModModalConfirm() {
            this.showModificationModalConfirm = false;
        },

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
        flex-wrap: wrap;
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