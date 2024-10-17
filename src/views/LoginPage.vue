<template>
    <div class="login-page">
        <h2>Connexion </h2>
        <form @submit.prevent="submitForm">

          <div>
            <label for="Siret_or_mail">Email ou Siret :</label>
            <input
              type="text"
              v-model="siretOrEmail"
              id="Siret_or_mail"
              @input="validateSiretOrEmail" 
              :class="{'input-error': hasErrorSiretorEmail}"  
              required />
          </div>

          <div>
            <label for="motDePasse">Mot de Passe :</label>
            <input
              type="password"
              v-model="motDePasse" 
              id="motDePasse"
              @input="validatePassword"
              :class="{'input-error': hasErrorPassword}"
              required />
          </div>

          <ButtonComponent
            @click="submitForm"
            label="Connexion"
            color="var(--color-secondary)"
            textColor="white"
            class="submit-button"
            v-if="true"
          />

        </form>

         <!-- Ajout du ModalComponent -->
         <ModalComponent :showModal="showModal" @close="closeModal" color="{ backgroundColor:White }">
          <template #header>          
          </template>
          <template #body>
            <p>{{ errorMessage }}</p>
          </template>
          <template #footer>
            <button @click="closeModal">Fermer</button>
          </template>
        </ModalComponent>

      </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import { useRouter } from 'vue-router';
  import ModalComponent from "@/components/ModalComponent.vue"
  import ButtonComponent from "@/components/ButtonComponents.vue"
  
  export default {

    name: 'LoginPage',

    components: {
      ModalComponent,
      ButtonComponent
    },

    data() {
        return {
            username : "",
            email : "",
            motDePasse : "",
            errorMessage : "",
            siret : "",
            hasErrorEmail : false,
            hasErrorPassword : false,
            hasErrorUserName : false,
            isUserSubscribed : false,
            hasErrorSiretorEmail : false,
            hasErrorSiret : false,
            pseudoUnfound : false,
            emailUnfound : false,
            showModal : false,
            subscritionButtonVisible : false,
            isLoggedIn : false
        };
    },

    setup() {
      const router = useRouter();
      return { router};
    },

    // computed : {
    //   currentUser: (state) => state.utilisateurs.find(user => user.id === user.id),
    // },


    methods: {
        ...mapActions(["Connecting"]), // Map l'action Connecting depuis le store

        //validation des champs avec les regex et en comparaison avec un getter du store
        validateSiretOrEmail() {
          //accepte les lettres, chiffres, espaces, et les caractères spéciaux
          const siretRegex = /^\d{14}$/;
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

          if(siretRegex.test(this.siretOrEmail))
          {
            const utilisateur = this.$store.getters.getUtilisateurBySiret(this.siretOrEmail);
            if(!utilisateur)
            {
              this.hasErrorSiretorEmail = true;
              this.errorMessage = "SIRET non trouvé ";
            }
            else 
            {
              this.hasErrorSiretorEmail = false;
            }
          }
          else if (emailRegex.test(this.siretOrEmail)) 
          {
            const utilisateur = this.$store.getters.getUtilisateurByEmail(this.siretOrEmail);
            if(!utilisateur) 
            {
              this.hasErrorSiretorEmail = true;
              this.errorMessage = "Email non trouvé ";
     
            }
            else
            {
              this.hasErrorSiretorEmail = false;
            }
          }
          else 
          {
            this.hasErrorSiretorEmail = true;
            this.errorMessage = "Format invalide (SIRET ou Email) ";
          }       
          
        },

        login() {
        this.isLoggedIn = true;
        },
    

        validatePassword(){
          if(!this.motDePasse)
          {
            this.hasErrorPassword = true;
            this.errorMessage = "Mot de passe requis";
          }
          else 
          {
            this.hasErrorPassword = false;
          }
         
        },

        //soumettre le formulaire
        async submitForm(){
            this.hasErrorEmail = false;
            this.hasErrorPassword = false;
            this.hasErrorUserName = false;
            this.emailUnfound = false;
            this.pseudoUnfound = false;
            this.subscritionButtonVisible = false;

            this.validateSiretOrEmail();
            this.validatePassword();


            if(this.hasErrorSiretorEmail || this.hasErrorPassword)
            {
              
              this.errorMessage = "veuillez corriger les erreurs avant de soumettre le formulaire";
              this.showModal = true;
              return;

            }

            const utilisateur = this.$store.getters.getUtilisateurBySiret(this.siretOrEmail) || this.$store.getters.getUtilisateurByEmail(this.siretOrEmail);

            if(!utilisateur) 
            {
              this.errorMessage = "Cet utilisateur n'existe pas !";
              this.showModal = true;
              return;
            }
          

            //vérifier si cet utilisateur est connecté ailleurs : (doit être corrigé !)
            // const userSessionKey = `currentUtilisateur_${utilisateur.id}`;
            // const existingSession = sessionStorage.getItem(userSessionKey);
            // if(existingSession)
            // {
            //   this.errorMessage = "Cet utilisateur est déjà connecté ailleurs !";
            //   this.showModal = true;
            //   return;

            // }

            //vérifier le mot de passe
            if (utilisateur.motDePasse !== this.motDePasse)
            {
              this.errorMessage = "Mot de passe incorrect !";
              this.hasErrorPassword = true;
              this.showModal = true;
              return;
            }

            if (utilisateur && utilisateur.motDePasse === this.motDePasse)
            {
              this.$store.commit('setCurrentUtilisateur', utilisateur.id);
              this.$store.commit('loadPanierForCurrentUser', utilisateur.id);          
              this.$emit('user-logged-in', true);
              this.$router.push("/");
   

            }
            else 
            {
              this.errorMessage = "Connexion échouée !";
              this.showModal = true;
            }

            // this.$store.commit("loginExistingUser", utilisateur);
            // sessionStorage.setItem(`currentUtilisateur_${utilisateur.id}`, JSON.stringify(utilisateur));

            // this.errorMessage = "Connexion réussie !";
            // this.showModal = true;
            // this.isLoggedIn = true;
            // this.$store.commit('setCurrentUtilisateur', utilisateur.id);          
            // //ici on émet un évènement pour dire que l'utilisateur est connecté
            // // alert("emissionde l'event user-logged-in");
            // this.$emit('user-logged-in', true);        
            // this.$router.push("/");
    

        },

        closeModal(){
          this.showModal = false;
        },

        //rediriger vers la page d'inscription
        goToRegister(){
            this.$router.push("/register");
        },
    }
  };
  </script>

  
  <style>
  .login-page {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  form div {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .close {
    float: right;
    font-size: 24px;
    cursor: pointer;
  }
  
  form div {
    margin: 10px 0;
  }
  
  input, select, button {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
  }

  .submit-button {
   width: 70%;
   max-width: 200px;
   align-self: center;
   margin-left: 30px;
  }

  /* Le style n'est pas scoped, donc c'est un style global donc il peut être utilisé dans d'autres composants,*/

  .input-error {
    border: 2px solid red;
  }

  .input-valid {
    border: 2px solid green;
  }
  .error-message {
    color: red;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
  }
  </style>
  