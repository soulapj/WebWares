<template>
    <div class="add">
        <p>Ajouter un produit</p>
            <form>
                <label for="name">Titre produit:</label><br>
                <input type="text" id="name" name="name" v-model="newCateg.name"><br>

                <label for="images">Image de la catégorie:</label><br>
                  <input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/png, image/jpeg"
                  @change="imageAdd"
                /><br>

                <label for="description">Description catégorie:</label><br>
                <textarea  type="text" id="description" name="description" v-model="newCateg.description" placeholder="Entrez votre description" rows="5" cols="33"></textarea><br>

                <br>
                <div class="boutons">
                  <ButtonComponents label="Ajouter" type="submit" @click.prevent="addCateg()" ></ButtonComponents>
                  <ButtonComponents label="Annuler" type="logout" @click.prevent="goBack()"></ButtonComponents>
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
    import { mapMutations } from "vuex";


  export default {
    components:{
        ButtonComponents,
        ModalComponent
    },
    data() {
    return {
      newCateg: {},
      showModalConfirm: false,
      
    };
    },

    methods: {
      ...mapMutations(['backAddCateg']),
      addCateg(){
            if (this.newCateg.name && this.newCateg.description){
                this.backAddCateg(this.newCateg);
                this.newCateg = {};
                this.goBack()
            } else {
                this.openModal()
            }
            // this.saveProduitsLocalStorage()

        },
        // saveProduitsLocalStorage(){
        //     localStorage.setItem("produitList", JSON.stringify(this.produits))
        // },
        goBack(){
            this.$router.back()
        },
        imageAdd(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newCateg.images = e.target.result; // Conversion en base64
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

    }
    
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