<template>
  <div class="add">
    <p>Modifier un produit</p>
    <form>
      <label for="images">Image du produit:</label><br />
      <input
        type="file"
        id="images"
        name="images"
        accept="image/png, image/jpeg"
        @change="imageChange"
      /><br />
      <img
        v-if="editProd.images"
        :src="editProd.images"
        alt="Image produit"
        style="max-width: 150px; max-height: 150px"
      />

      <label for="titre">Titre produit:</label><br />
      <input
        type="text"
        id="titre"
        name="titre"
        v-model="editProd.titre"
      /><br />

      <label for="description">Description produit:</label><br />
      <input
        type="text"
        id="description"
        name="description"
        v-model="editProd.description"
      /><br />

      <label for="prix">Prix unitaire:</label><br />
      <input
        type="number"
        min="0"
        id="prix"
        name="prix"
        v-model="editProd.prix"
      /><br />

      <label for="moq">Quantité Minimum:</label><br />
      <input
        type="number"
        min="0"
        id="moq"
        name="moq"
        v-model="editProd.moq"
      /><br />

      <label for="categorieId">Catégorie produit:</label><br />
      <select id="categorieId" name="category" v-model="editProd.categorieId">
        <option v-for="category in this.categories" :value="category.id" :key="category.id">{{category.name}}</option>
      </select
      ><br />
      <br />
      <div class="boutons">
        <ButtonComponents
          label="Modifier"
          type="login"
          @click.prevent="modProd()"
          style="margin-right: 0.5rem"
        ></ButtonComponents>
        <ButtonComponents
          label="Annuler"
          type="logout"
          @click.prevent="goBack()"
        ></ButtonComponents>
      </div>
    </form>
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
  </div>
</template>

<script>
import ButtonComponents from "@/components/ButtonComponents.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    ButtonComponents,
    ModalComponent
  },
  data() {
    return {
      editProd: {},
      payload: { key1: {}, key2: this.$route.params.id },
      showModalConfirm: false,
    };
  },
  methods: {
    ...mapMutations(["backModProduit"]),
    modProd() {
      if (
        this.editProd.titre &&
        this.editProd.description &&
        this.editProd.prix &&
        this.editProd.moq &&
        this.editProd.categorieId &&
        this.editProd.images
      ) {
        this.editProd.id = this.$route.params.id;
        this.payload.key1 = this.editProd;
        this.backModProduit(this.payload);
        this.goBack();
      } else {
        this.openModal()
      }
    },

    goBack() {
      this.$router.back();
    },

    imageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.editProd.images = e.target.result; // Conversion en base64
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
  mounted() {
    const product = this.produits.find(
      (prod) => prod.id == this.$route.params.id
    );
    if (product) {
      this.editProd = { ...product };
    }
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
