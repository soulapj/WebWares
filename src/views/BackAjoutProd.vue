<template>
  <div class="add">
    <p>Ajouter un produit</p>
    <form>
      <label for="images">Image du produit:</label><br />
      <input
        type="file"
        id="images"
        name="images"
        accept="image/png, image/jpeg"
        @change="imageAdd"
      /><br />

      <label for="titre">Titre produit:</label><br />
      <input
        type="text"
        id="titre"
        name="titre"
        v-model="newProd.titre"
      /><br />

      <label for="description">Description produit:</label><br />
      <input
        type="text"
        id="description"
        name="description"
        v-model="newProd.description"
      /><br />

      <label for="prix">Prix unitaire:</label><br />
      <input
        type="number"
        min="0"
        id="prix"
        name="prix"
        v-model="newProd.prix"
      /><br />

      <label for="moq">Quantité Minimum:</label><br />
      <input
        type="number"
        min="0"
        id="moq"
        name="moq"
        v-model="newProd.moq"
      /><br />

      <label for="categorieId">Catégorie produit:</label><br />
      <select id="categorieId" name="category" v-model="newProd.categorieId">
        <option v-for="category in this.categories" :value="category.id" :key="category.id">{{category.name}}</option>
      </select
      ><br />
      <br />
      <div class="boutons">
        <ButtonComponents
          label="Ajouter"
          type="login"
          @click.prevent="addProd()"
          style="margin-right: 0.5rem"
        ></ButtonComponents>
        <ButtonComponents
          label="Annuler"
          type="logout"
          @click.prevent="goBack()"
        ></ButtonComponents>
      </div>
    </form>
  </div>
  <ModalComponent :showModal="showModalConfirm" color="#d7c3a7">
            <template #header>
              <h2>Veuillez remplir tous les champs</h2>
            </template>

            <template #body>
              <p></p>
            </template>
            <template #footer>
          <ButtonComponents
            label="Continuer"
            type="submit"
            @click="closeModal()"
          />
        </template>
      </ModalComponent>
</template>

<script>
import ButtonComponents from "@/components/ButtonComponents.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    ButtonComponents,
    ModalComponent
  },
  data() {
    return {
      newProd: {},
      showModalConfirm: false,
    };
  },

  methods: {
    ...mapMutations(["backAddProduit"]),
    addProd() {
      if (
        this.newProd.titre &&
        this.newProd.description &&
        this.newProd.prix &&
        this.newProd.moq &&
        this.newProd.categorieId &&
        this.newProd.images
      ) {
        this.backAddProduit(this.newProd);
        this.newProd = {};
        this.goBack();
      } else {
        this.openModal()
      }
      // this.saveProduitsLocalStorage()
    },
    // saveProduitsLocalStorage(){
    //     localStorage.setItem("produitList", JSON.stringify(this.produits))
    // },
    goBack() {
      this.$router.back();
    },
    imageAdd(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newProd.images = e.target.result; // Conversion en base64
        };
        reader.readAsDataURL(file);
      }
    },
    openModal() {
      this.showModalConfirm = true;
    },
    closeModal() {
      this.showModalConfirm = false;
    },
  },
  computed: {
    ...mapState(["produits", "categories"]),
  },
};
</script>

<style scoped>
.add {
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: wheat;
  padding: 20px 60px 20px 60px;
  border-radius: 25px;
  margin: 30px;
}
p {
  font-size: 24px;
}
.boutons {
  display: flex;
  justify-content: space-around;
}
</style>
