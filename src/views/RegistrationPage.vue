<template>
  <div class="sheet">
    <div class="registration-page">        

        <form @submit.prevent="submitForm">

          <h2 class="inscription-title">Inscription</h2>

          <div class="form-row-1">

            <div>
              <label for="raisonSociale">Raison Sociale :</label>
              <!-- <input type="text" 
              v-model="raisonSociale" 
              id="raisonSociale" 
              :class="{'input-error': !isValidRaisonSociale}"
              required /> -->

              <input type ="text"
                v-model="raisonSociale"
                id="raisonSociale"
                :style="raisonSocialeBorderColor"
                @input="checkRaisonSocialLength"
                @blur="isTouchedRaisonSociale = true"
                :class="{'input-error': hasErrorRaisonSociale && isTouchedRaisonSociale}" required /> 
                <span v-if="hasErrorRaisonSociale && isTouchedRaisonSociale" style ="color : red">
                  La raison sociale doit contenir au moins 6 caractères et ne pas être 
                  présente dans notre base de données.</span>
            </div>
            
            <div>
              <label for="siret">Siret :</label>
              <input type="text"
               v-model="siret" id="siret"
                @input="checkSiretStrength"
                @blur="isTouchedSiret = true; checkSiretStrength" 
                :style="siretBorderColor" 
                :class="{'input-error': hasErrorSiret && isTouchedSiret}" required /> 
                <span v-if="hasErrorSiret && isTouchedSiret" style ="color : red">Le siret ne doit être présent dans notre base données,
                  ne peut être constitué que de chiffres et doit être de 14 caractères</span>       
            </div>
            
          </div>

          <div class="form-row-2">

            <div>
              <label for="adresse">Adresse :</label>
              <input type="text" v-model="adresse" 
              id="adresse"
              @input="checkAdress" 
              @blur="isTouchedAdresse = true; checkAdress()"
              :style="adressBorderColor"
              :class="{'input-error': hasErrorAdresse && isTouchedAdresse}"
              required />
              <span v-if="hasErrorAdresse && isTouchedAdresse" style ="color : red">L'adresse doit contenir au moins 5 caractères.</span>
            </div>

            <div>
              <label for="codePostal">Code Postal :</label>
              <input type="text"
               v-model="codePostal"
                id="codePostal"
                 @input="checkErrorPostalCode"
                  @blur="isTouchedCodePostal = true; checkErrorPostalCode()"
                  :style="codePostalBorderColor"
                 :class="{'input-error': hasErrorCodePostal && isTouchedCodePostal}"
                  required />
                  <span v-if="hasErrorCodePostal && isTouchedCodePostal" style ="color : red">Le code postal doit être composé de 5 chiffres.</span>
            </div>
            
            <div>
              <label for="ville">Ville :</label>
              <input type="text"
               v-model="ville" 
              id="ville"
               @input="checkVille"
                @blur="isTouchedVille = true; checkVille()"
              :style="villeBorderColor" 
              :class="{'input-error': hasErrorVille && isTouchedVille}" required />
              <span v-if="hasErrorVille && isTouchedVille" style ="color : red">La ville doit contenir au moins 3 caractères.</span>
            </div>

          </div>

          <div class="form-row-3">

            <div>
              <label for="email">Email :</label>
              <input type="email" 
              v-model="email" 
              id="email"
              @input="checkEmail" 
              @blur="isTouchedEmail = true; checkEmail()"
              :style="emailBorderColor"
              :class="{'input-error': hasErrorMail && isTouchedEmail}" required />
              <span v-if="hasErrorMail && isTouchedEmail" style ="color : red">L'email n'est pas valide.</span>
            
            </div>

          </div>
          

          <div class="form-row-4">
            
            <div>
              <label for="motDePasse">Mot de Passe :</label>
              <input type="password" 
                v-model="motDePasse" 
                id="motDePasse"
                @input="checkPassWordStrenght"
                @blur="isTouchedPassword = true; checkPassWordStrenght()"
                :style="passwordBorderColor"
                :class="{'input-error': hasErrorPassword && isTouchedPassword}" 
                required />

              <h3 v-if="motDePasse.length > 0">Force du mot de passe :</h3>
              <span class="password-strength" :style="passwordStrengthColor">{{ passwordStrengthMessage }}</span>
            </div>

            <div>
              <label for="confirmPassword">Confirmer le mot de passe :</label>
              <input type="password" v-model="confirmPassword"
               id="confirmPassword"
               :style="confirmPasswordBorderColor"
                :class="{'input-error': hasErrorConfirmPassword}"
                 required />
                  <span v-if="hasErrorConfirmPassword" style ="color : red">Les mots de passe ne correspondent pas.</span>
            </div>
            

          </div>      
        
          <div class="Registration-btn">
            <ButtonComponent
          @click="submitForm"
          label="S'inscrire"
          type="register"
          class="btn-Register"
     
          v-if="true"
          />
          </div>

        </form>
    </div>

    
  </div>
    

    <ModalComponent :showModal="showModal" @close="showModal" color="{ backgroundColor:White}">
      <template #header>
      </template>
      <template #body>
        <p>{{ errorMessage }}</p>
      </template>
      <template #footer>
        <button @click="closeModal">Fermer</button>
      </template>
    </ModalComponent>
  </template>


  <script>
  import { mapActions } from "vuex";
  import ModalComponent from "@/components/ModalComponent.vue";
  import ButtonComponent from "@/components/ButtonComponents.vue";
  
  export default {
    name: "RegistrationModal",

    components: {
      ModalComponent,
      ButtonComponent,
    },
  
    data() {
      return {
        raisonSociale: "",
        siret: "",
        adresse: "",
        codePostal: "",
        ville: "",
        email: "",
        username: "",
        motDePasse: "",
        isFocused: false,
        hasErrorRaisonSociale: false,
        hasErrorSiret: false,
        hasErrorAdresse: false,
        hasErrorCodePostal: false,
        hasErrorVille: false,
        hasErrorMail: false,
        hasErrorUserName: false,
        hasErrorPassword: false,
        hasErrorConfirmPassword: false,
        passwordStrength: "weak",
        passwordStrengthMessage: "",
        siretStrengthMessage :"",
        showModal: false,
        errorMessage: "",
        isSubmitting: false,

      //interactions flags
      isTouchedRaisonSociale: false,
      isTouchedSiret: false,
      isTouchedAdresse: false,
      isTouchedCodePostal: false,
      isTouchedVille: false,
      isTouchedEmail: false,
      isTouchedPassword: false,
      isTouchedConfirmPassword: false,
      };
    },

    computed: {
      passwordStrengthColor() {
        if (this.passwordStrength === 1) {
          return { color: 'red' };  // Faible
        } else if (this.passwordStrength === 2) {
          return { color: 'orange' };  // Moyen
        } else if (this.passwordStrength === 3) {
          return { color: 'green' };  // Fort
        } else {
          return { color: 'black' };  // Par défaut (aucune saisie)
        }
      },

      raisonSocialeBorderColor(){
        if(this.hasErrorRaisonSociale)
        {
          return {color : 'red', borderColor : 'red'};
        }
        else
        {
          return {color : 'black', borderColor : 'black'};
        }
      },

      siretBorderColor(){
        const siretRegex = /^\d{14}$/;
        if(this.isTouchedSiret && !siretRegex.test(this.siret)){
          return {color : 'red', borderColor : 'red'};
        }
        else
        {
          return {color : 'black', borderColor : 'black'};
        }
      },

      adressBorderColor(){
      if(this.isTouchedAdresse && this.hasErrorAdresse){
        return {color :'red', borderColor : 'red'};
      }
      else{
        return {color : 'black', borderColor : 'black'};
      }   
    },

    codePostalBorderColor(){     
      if(this.isTouchedCodePostal && this.hasErrorCodePostal)
      {
        return {color : 'red', borderColor : 'red'};
      }
      else{
        return {color : 'black', borderColor : 'black'};
      } 
    },

    villeBorderColor(){
      if(this.isTouchedVille && this.hasErrorVille)
      {
        return {color : 'red', borderColor : 'red'};
      }
      else{
        return {color : 'black', borderColor : 'black'};
      } 
    },

    emailBorderColor(){
      if(this.isTouchedEmail && this.hasErrorMail)
      {
        return {color : 'red', borderColor : 'red'};
      }
      else{
        return {color : 'black', borderColor : 'black'};
      } 
    },

    passwordBorderColor(){
      if (this.isTouchedPassword && (this.hasErrorPassword || this.motDePass === ""))
      {
        return {color : 'red', borderColor : 'red'};
      }
      else{
        return {color : 'black', borderColor : 'black'};
      }
    },

    confirmPasswordBorderColor(){
      if (this.hasErrorConfirmPassword)
      {
        return {color : 'red', borderColor : 'red'};
      }
      else{
        return {color : 'black', borderColor : 'black'};
      } 
    },
         
    },
  
    methods: {
      ...mapActions(["registerUser"]),

      onFocus(){
        this.isFocused = true;
      },
      onBlur(){
        this.isFocused = false;
      },

      closeModal(){
        this.showModal = false;
      },

      checkDuplicateData(){
        this.raisonSocial = this.raisonSociale.trim();
        this.siret = this.siret.trim();
        this.adresse = this.adresse.trim();


        const userWithEmail = this.$store.getters.getUtilisateurByEmail(this.email);
        const userWithSiret = this.$store.getters.getUtilisateurBySiret(this.siret);
        const userWithRaisonSociale = this.$store.getters.getUtilisateurByRaisonSociale(this.raisonSociale);

        const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

        const emailExists = utilisateurs.some(utilisateur => utilisateur.email === this.email);
        const siretExists = utilisateurs.some(utilisateur => utilisateur.siret === this.siret);
        const raisonSocialeExists = utilisateurs.some(utilisateur => utilisateur.raisonSociale === this.raisonSociale);

        if (userWithEmail || emailExists){
          this.hasErrorMail = true;
          this.errorMessage = "Un utilisateur avec cet email existe déjà.";
          this.showModal = true;
          return false;
        }


        if (userWithSiret || siretExists){
          this.hasErrorSiret = true;
          this.errorMessage = "Un utilisateur avec ce siret existe déjà.";
          this.showModal = true;
          return false;
        }

        if (userWithRaisonSociale || raisonSocialeExists){
          this.hasErrorRaisonSociale = true;
          this.errorMessage = "Un utilisateur avec cette raison sociale existe déjà.";
          this.showModal = true;
          return false;
        }

        return true;
      },

      checkSiretStrength(){

        const siret = this.siret.trim();
        const siretRegex = /^\d{14}$/;

        if(!siret)
        {
          this.hasErrorSiret = true;
        }

        else if (!siretRegex.test(siret))
        {
          this.hasErrorSiret = true;
        } 
        else 
        {
          this.hasErrorSiret = false;
        }

      },

      checkUsernameLength(){
        if(this.username.length < 6)
        {
          this.hasErrorUserName = true;
        }
        else
        {
          this.hasErrorUserName = false;
        }
      },

      checkRaisonSocialLength(){
        this.raisonSociale = this.raisonSociale.trim();
        this.hasErrorRaisonSociale = this.raisonSociale.length < 6;
        
      },

      checkAdress()
      {
        const adresse = this.adresse.trim();
        if(!adresse || this.adresse.length < 5)
        {
          this.hasErrorAdresse = true;
        }
        else
        {
          this.hasErrorAdresse = false;
        }
      },

      checkErrorPostalCode(){
        const codePostalRegex = /^\d{5}$/;
        const codePostal = this.codePostal.trim();

        if(!codePostal || !codePostalRegex.test(codePostal))
        {
          this.hasErrorCodePostal = true;
        }
        else
        {
          this.hasErrorCodePostal = false;
        }

      },

      checkVille(){
        const ville = this.ville.trim();
        if(!ville || this.ville.length < 3)
        {
          this.hasErrorVille = true;
        }
        else
        {
          this.hasErrorVille = false;
        }
      },      

      checkEmail(){
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        this.hasErrorMail = !emailRegex.test(this.email.trim());
      },

      checkPassWordStrenght(){
        let strength = 0;
        const password = this.motDePasse;

        if(password.length >= 6) strength++;
        if (/[a-z]/.test(password)) strength++; // Contient des minuscules
        if (/[A-Z]/.test(password)) strength++; // Contient des majuscules
        if (/[0-9]/.test(password)) strength++; // Contient des chiffres
        if (/\W/.test(password)) strength++;    // Contient un symbole

        if (password.length === 0) 
        {
        this.passwordStrengthMessage = "";
        } 
        else if (strength <= 2) 
        {
          this.passwordStrengthMessage = "Faible";
          this.passwordStrengthColor = 'red';
          this.passwordStrength = 1;

        } 
        else if (strength === 3)
         {
          this.passwordStrengthMessage = "Moyen";
          this.passwordStrengthColor = 'orange';
          this.passwordStrength = 2;
        } 
        else if (strength >= 4) 
        {
          this.passwordStrengthMessage = "Fort";
          this.passwordStrengthColor = 'green';
          this.passwordStrength = 3;
          return {color : 'green'};
        }

      },

      // checkifDatasInUtilisateurs(){
      //   //get local storage
      //   const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

      //   if(!Array.isArrayutilisateurs || utilisateurs.length === 0)
      //   {
      //     return false;
      //   }

      //   const emailExists = utilisateurs.some(utilisateur => utilisateur.email === this.email);
      //   const siretExists = utilisateurs.some(utilisateur => utilisateur.siret === this.siret);
      //   const raisonSocialeExists = utilisateurs.some(utilisateur => utilisateur.raisonSociale === this.raisonSociale);

      //   if(emailExists || siretExists || raisonSocialeExists)
      //   {
      //     this.hasErrorMail = emailExists;
      //     this.hasErrorSiret = siretExists;
      //     this.hasErrorRaisonSociale = raisonSocialeExists;
      //     this.errorMessage = "Certaines informations que vous avez entré existent déjà dans notre base de données. Echec de l'enregistrement.";
      //     this.showModal = true;
      //     return true;
      //   }


      //   return false; 
      // },
      

      validateForm()
      {
        const siretRegex = /^\d{14}$/;
        const codePostalRegex = /^\d{5}$/;
        const villeRegex = /^[a-zA-ZÀ-ÿ\s-]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const usernameRegex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s._-]{3,40}$/;
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        
        this.hasErrorRaisonSociale = this.checkRaisonSocialLength();
        this.hasErrorSiret = !siretRegex.test(this.siret);
        this.hasErrorAdresse = this.adresse.length < 5;
        this.hasErrorCodePostal = !codePostalRegex.test(this.codePostal);
        this.hasErrorVille = !villeRegex.test(this.ville);
        this.hasErrorMail = !emailRegex.test(this.email);
        this.hasErrorUserName = !usernameRegex.test(this.username) && this.username.length > 3;
        this.hasErrorPassword = this.passwordStrength < 3;
        this.hasErrorConfirmPassword = this.motDePasse !== this.confirmPassword;
     

        // const passwordStrength = this.checkPassWordStrenght(this.motDePasse);
       
        if(this.hasErrorPassword)
        {
          this.errorMessage = "Le mot de passe est trop faible. Veuillez choisir un mot de passe plus puissant.";
          this.showModal = true;
          return false;
        }
      },
  
      async submitForm() {
        this.isSubmitting = true;

        const isDuplicateData = this.checkDuplicateData();

        if (!isDuplicateData) {
          this.isSubmitting = false;
          return;
        }

        this.validateForm();
        // if(!this.validateForm())
        // {
        //   this.isSubmitting = false;
        //   return;
        // }
        // this.validateForm();

        if(
          this.hasErrorRaisonSociale ||
        this.hasErrorSiret ||
        this.hasErrorAdresse ||
        this.hasErrorCodePostal ||
        this.hasErrorVille ||
        this.hasErrorEmail ||
        this.hasErrorUsername ||
        this.hasErrorPassword
        ) 
        {
          this.showModal = true;
          this.isSubmitting = false;
          return;
        }
        
        if(this.isSubmitting === false)
        {
          return;
        }
        const newUser = {
          raisonSociale: this.raisonSociale,
          siret: this.siret,
          adresse: this.adresse,
          codePostal: this.codePostal,
          ville: this.ville,
          email: this.email,
          motDePasse: this.motDePasse,
          role: "USER", // par défaut on sera toujours en rôle user
          username: this.username,
        };
        
        const response = await this.registerUser(newUser);
        if (response.success) {

          this.showModal = true;
          this.errorMessage = "Inscription réussie.";
          //push vers Login avec le retour
          this.$router.push("/login");
        } else {
          this.errorMessage = "Une erreur est survenue lors de l'inscription.";
          this.showModal = true;
          this.isSubmitting = true;
        }
      },
    },
  };
  </script>
  
  <style scoped >

  * {
    box-sizing: border-box;
  }

  .input-error {
    border: 1px solid red;
  }

  .sheet {
    height: 100%;
    max-height: 900px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border-style: none;
    border-radius: 10px;
    transform: scale(0.85);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    
  }

  .inscription-title{
    text-align: center;
    position: relative;
    font-size: 25px;
    margin-bottom: 100px;
    top: 20px;
    margin-left: -40px;
  }

  .registration-page {
    margin-left: 25%;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    margin-left: 280px;
  }
  .registration-page input  {
  max-width: 1200px;
  width: 90%;  
  margin: 30px auto;
  margin-left : -2%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  }

  .registration-page label {
    font-size: 20px;
    position: relative;
    top: 20px;  
  }

  .registration-page form {
    grid-column : span 3;
    display: flex;
    flex-direction: column;
  }

  .form-row-1{
    display: grid;
    width: 104%;
    grid-template-columns: repeat(2, 1fr);
  }

  .form-row-2{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 102%;
  }

  .form-row-3{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 105%;
    
  }

  .form-row-3 input {
    width: 95%;
  }

  .form-row-4{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    width: 105%;
  }

  .form-row-4 h3{
    font-size: 20px;
  }

  .registration-page h3 {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 10px;
    margin-top: -10px;
  }

  .password-strength {
    font-weight: bold;
    min-height: 20px;
    font-size: 24px;
  }

  .Registration-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) and (min-width: 400px) {

    .sheet{
      max-height: 100%;
      padding: 15px;
    }
    .registration-page {
     width: 100%;
     height: 100%;
     padding: 15px;
     margin : 0 auto;
    }

    .form-row-1, .form-row-2, .form-row-3, .form-row-4 {
    grid-template-columns: 1fr;
    width: 100%; 
    
    }

    .registration-page input {
      width: 95%;
      margin: 10px 0;
    }

    .registration-page label {
      top: 10px;
     
    }
     
  

    

  }

    /* Malheureusement on ne peut pas changer la couleur de la bordure d'input quand il est sélectionné, ou en tout
  cas je ne sais pas comment le faire, donc je me suis contenté de mettre l'inscription en rouge pour les erreurs
  tant que l'erreur n'est pas corrigée, et la bordure devient rouge s'il y a une Erreur et que le champ est désélectionné */

  </style>