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
                @focus="onFocus"
                @blur="onBlur"
                required />
            </div>
            
            <div>
              <label for="siret">Siret :</label>
              <input type="text" v-model="siret" id="siret" @input="checkSiretStrength" :class="{'input-error': hasErrorSiret}" required />        
            </div>
            
          </div>

          <div class="form-row-2">

            <div>
              <label for="adresse">Adresse :</label>
              <input type="text" v-model="adresse" id="adresse" @input="checkAdress" :class="{'input-error': hasErrorAdresse}"  required />
            </div>

            <div>
              <label for="codePostal">Code Postal :</label>
              <input type="text" v-model="codePostal" id="codePostal" @input="checkErrorPostalCode" :class="{'input-error': hasErrorCodePostal}" required />
            </div>
            
            <div>
              <label for="ville">Ville :</label>
              <input type="text" v-model="ville" id="ville" @input="checkVille" :class="{'input-error': hasErrorVille}" required />
            </div>

          </div>

          <div class="form-row-3">

            <div>
              <label for="email">Email :</label>
              <input type="email" v-model="email" id="email" :class="{'input-error': hasErrorMail}" required />
            </div>

          </div>
          

          <div class="form-row-4">
            
            <div>
              <label for="motDePasse">Mot de Passe :</label>
              <input type="password" v-model="motDePasse" id="motDePasse"
              @input="checkPassWordStrenght"
              :class="{'input-error': hasErrorPassword}" 
              required />
              
              <h3 v-if="motDePasse.length > 0"> Force du mot de passe : </h3> 

              <span class="password-strength" :style="passwordStrengthColor"> 
                {{ passwordStrengthMessage }}</span>          
            </div>

            <div>
              <label for="confirmPassword">Confirmer le mot de passe :</label>
              <input type="password" v-model="confirmPassword" id="confirmPassword" :class="{'input-error': hasErrorConfirmPassword}" required />
            </div>

          </div>      
        

          <ButtonComponent 
          @click="submitForm"
          label="S'inscrire"
          color="var(--color-accent)"
          textColor="var(--color-secondary)"
          class="submit-button"
          v-if="true"
          />
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
        if(this.raisonSociale.length < 6){
          return {color :'red', borderColor : 'red'};
          
        }
        else{
          return {color : 'black', borderColor : 'black'};
        }     

      },

      siretStrength(){
        if(this.siret.length < 14){
          return {color : 'red'};
        }
        else
        {
          return {color : ''};

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
        const userWithEmail = this.$store.getters.getUtilisateurByEmail(this.email);
        const userWithSiret = this.$store.getters.getUtilisateurBySiret(this.siret);

        if (userWithEmail){
          this.hasErrorMail = true;
          this.errorMessage = "Un utilisateur avec cet email existe déjà.";
          this.showModal = true;
          return false;
        }


        if (userWithSiret){
          this.hasErrorSiret = true;
          this.errorMessage = "Un utilisateur avec ce siret existe déjà.";
          this.showModal = true;
          return false;
        }

        return true;
      },

      checkSiretStrength(){

        const siret = this.siret;

        if(siret.length === 0){
          this.siretStrengthMessage = "";
        } 
        else if (siret.length < 14)
        {
          this.siretStrengthMessage = "Siret invalide";
          this.hasErrorSiret = true;
        } 
        else 
        {
          this.siretStrengthMessage = "Siret valide";
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
        this.hasErrorRaisonSociale = this.raisonSociale.length < 6;
        
      },

      checkAdress()
      {
        if(this.adresse.length < 5)
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
        if(!codePostalRegex.test(this.codePostal))
        {
          this.hasErrorCodePostal = true;
        }
        else
        {
          this.hasErrorCodePostal = false;
        }
      },

      checkVille(){
        if(this.ville.length < 3)
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
        if(!emailRegex.test(this.email))
        {
          this.hasErrorEmail = true;
        }
        else
        {
          this.hasErrorEmail = false;
        }
      },

      checkPassWordStrenght(){
        let strength = 0;

        const password = this.motDePasse;

        if(password.length >= 6) strength++;
        if (/[a-z]/.test(password)) strength++; // Contient des minuscules
        if (/[A-Z]/.test(password)) strength++; // Contient des majuscules
        if (/[0-9]/.test(password)) strength++; // Contient des chiffres
        if (/\W/.test(password)) strength++;    // Contient un symbole

        if (password.length === 0) {
        this.passwordStrengthMessage = "";
        } else if (strength <= 2) {
          this.passwordStrengthMessage = "Faible";
          this.passwordStrengthColor = 'red';
          this.passwordStrength = 1;

        } else if (strength === 3) {
          this.passwordStrengthMessage = "Moyen";
          this.passwordStrengthColor = 'orange';
          this.passwordStrength = 2;
        } else if (strength >= 4) {
          this.passwordStrengthMessage = "Fort";
          this.passwordStrengthColor = 'green';
          this.passwordStrength = 3;
          return {color : 'green'};
        }

      },
      

      validateForm()
      {
        const siretRegex = /^\d{14}$/;
        const codePostalRegex = /^\d{5}$/;
        const villeRegex = /^[a-zA-ZÀ-ÿ\s-]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const usernameRegex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s._-]{3,40}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        
        this.hasErrorRaisonSociale = this.checkRaisonSocialLength();
        this.hasErrorSiret = !siretRegex.test(this.siret);
        this.hasErrorAdresse = this.adresse.length < 5;
        this.hasErrorCodePostal = !codePostalRegex.test(this.codePostal);
        this.hasErrorVille = !villeRegex.test(this.ville);
        this.hasErrorMail = !emailRegex.test(this.email);
        this.hasErrorUserName = !usernameRegex.test(this.username) && this.username.length > 3;
        this.hasErrorPassword = !passwordRegex.test(this.motDePasse);

        const isDuplicateData = this.checkDuplicateData();
        if (!isDuplicateData){
          return false;
        }

        const passwordStrength = this.checkPassWordStrenght(this.motDePasse);
        if(passwordStrength < 4)
        {
          this.errorMessage = "Le mot de passe est trop faible.";
          this.showModal = true;
          this.hasErrorPassword = true;
        }
        else
        {
          this.hasErrorPassword = false;
        }
        if(this.motDePasse !== this.confirmPassword)
        {
          this.hasErrorConfirmPassword = true;
          this.hasErrorPassword = true;
          this.errorMessage = "Les mots de passe ne correspondent pas.";
          this.showModal = true;
          return false; // 
          
        }
        else
        {
          this.hasErrorConfirmPassword = false;        
        
        }
      },
  
      async submitForm() {

        this.validateForm();

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
          this.errorMessage = "Veuillez corriger les erreurs dans le formulaire";
          this.showModal = true;
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
        }
      },
    },
  };
  </script>
  
  <style >

  .input-error {
    border: 1px solid red;
  }

  .sheet {
    padding: 30;
    max-width: 1400px;
    width: 100%;
    position: relative;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border-style: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  .inscription-title{
    text-align: center;
    position: relative;
    font-size: 25px;
    margin-bottom: 80px;
    top: 20px;
  }

  .registration-page {
    margin-left: 22%;
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 10px;
  }


  .registration-page input  {
  width: 80%;  
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
  }

  .registration-page form {
    grid-column : span 3;
    display: flex;
    flex-direction: column;
  }

  .form-row-1{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .form-row-2{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .form-row-3{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .form-row-3 input {
    width: 95%;
  }

  .form-row-4{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
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

  .submit-button {
    width:  150px;
    align-self: center;
  }

  </style>