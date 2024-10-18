<template>
    <div class="add">
      <p>Modifier un catégorie</p>
      <form>
        <label for="name">Nom catégorie:</label><br />
        <input
          type="text"
          id="name"
          name="name"
          v-model="addCateg.name"
        /><br />

        <label for="images">Image du catégorie:</label><br />
        <input
          type="file"
          id="images"
          name="images"
          accept="image/png, image/jpeg"
          @change="imageChange"
        /><br />
        <img
          v-if="addCateg.images"
          :src="addCateg.images"
          alt="Image catégorie"
          style="max-width: 150px; max-height: 150px"
        /><br>

        <label for="description">Description catégorie:</label><br />
        <textarea
          type="text"
          id="description"
          name="description"
          v-model="addCateg.description"
          rows="5" cols="33"
        ></textarea><br />
  
        <div class="boutons">
          <ButtonComponents
            label="Modifier"
            type="submit"
            @click.prevent="modCateg()"
          ></ButtonComponents>
          <ButtonComponents
            label="Annuler"
            type="logout"
            @click.prevent="goBack()"
          ></ButtonComponents>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import ButtonComponents from "@/components/ButtonComponents.vue";
  import { mapState, mapMutations } from "vuex";
  
  export default {
    components: {
      ButtonComponents,
    },
    data() {
      return {
        addCateg: {},
        // payload: { key1: {}, key2: this.$route.params.id },
      };
    },
    methods: {
      ...mapMutations(["backModCateg"]),
      modCateg() {
        if (
          this.addCateg.name &&
          this.addCateg.description
        ) {
          this.addCateg.id = this.$route.params.id;
          this.payload = this.addCateg;
          this.backModCateg(this.payload);
        } else {
          alert("remplacer par un modal");
        }
        this.goBack();
      },
  
      goBack() {
        this.$router.back();
      },
  
      imageChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.addCateg.images = e.target.result; // Conversion en base64
          };
          reader.readAsDataURL(file);
        }
      },
    },
    computed: {
      ...mapState(["categories"]),
    },
    mounted() {
      const category = this.categories.find(
        (categ) => categ.id == this.$route.params.id
      );
      if (category) {
        this.addCateg = { ...category };
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
  