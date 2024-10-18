<template>
    <div class="add">
        <p>Modifier un produit</p>
            <form>
              <label for="images">Image du produit:</label><br>
                <input type="file" id="images" name="images" accept="image/png, image/jpeg"/><br>


                <label for="titre">Titre produit:</label><br>
                <input type="text" id="titre" name="titre" v-model="editProd.titre"><br>

                <label for="description">Description produit:</label><br>
                <input type="text" id="description" name="description" v-model="editProd.description"><br>

                <label for="prix">Prix unitaire:</label><br>
                <input type="number" min="0" id="prix" name="prix" v-model="editProd.prix"><br>

                <label for="moq">Quantité Minimum:</label><br>
                <input type="number" min="0" id="moq" name="moq" v-model="editProd.moq"><br>
                
                <label for="categorieId">Catégorie produit:</label><br>
                <select id="categorieId" name="category" v-model="editProd.categorieId">
                    <option value="1">Mobilier d'Intérieur</option>
                    <option value="2">Luminaires</option>
                    <option value="3">Tapis</option>
                    <option value="4">Objet de décoration</option>
                </select><br>
                <br>
                <div class="boutons">
                  <ButtonComponents label="Modifier" type="submit" @click.prevent="modProd()"></ButtonComponents>
                  <ButtonComponents label="Annuler" type="logout" @click.prevent="goBack()"></ButtonComponents>
                </div>
            </form>
    </div>
  </template>
  
  <script>
  import ButtonComponents from "@/components/ButtonComponents.vue";
  import { mapState, mapMutations } from "vuex";


  export default {
    components:{
        ButtonComponents,
    },
    data() {
    return {
      editProd: {},
      payload: {key1: {}, key2: (this.$route.params.id)}

    };
    },
    methods: {
    ...mapMutations(['backModProduit']),
    modProd(){
      if (this.editProd.titre && this.editProd.description && this.editProd.prix && this.editProd.moq && this.editProd.categorieId){
        this.editProd.id = this.$route.params.id
        this.payload.key1 = this.editProd
        this.backModProduit(this.payload)
        } else {
        alert("remplacer par un modal")
        }
        this.goBack()
    },
    
    goBack() {
      this.$router.back()

    },
    },
    computed:{
      ...mapState(["utilisateurs"]),
    },
    mounted() {
    // if (this.produits[this.produits.findIndex((prod) => prod.id === this.$route.params.id)]) {
    //   this.editProd = { ...this.produits[this.produits.findIndex((prod) => prod.id === this.$route.params.id)] };
    // }
  },
    }
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