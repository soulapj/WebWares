<template>
  <div class="edit-profile-container">
    <div class="edit-profile-carte">
      <h2>Modifier les informations de profil</h2>

      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="raisonSociale">Nom de l'entreprise</label>
          <input
            v-model="editedUser.raisonSociale"
            type="text"
            id="raisonSociale"
            required
          />
        </div>

        <div class="form-group">
          <label for="adresse">Adresse</label>
          <input
            v-model="editedUser.adresse"
            type="text"
            id="adresse"
            required
          />
        </div>

        <div class="form-group">
          <label for="codePostal">Code Postal</label>
          <input
            v-model="editedUser.codePostal"
            type="text"
            id="codePostal"
            required
          />
        </div>

        <div class="form-group">
          <label for="ville">Ville</label>
          <input v-model="editedUser.ville" type="text" id="ville" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="editedUser.email" type="email" id="email" required />
        </div>

        <ButtonComponents label="Valider" type="submit" @click="submitForm" />
        <ButtonComponents label="Annuler" type="button" @click="annulForm" />
      </form>
    </div>
  </div>
</template>

<script>
import ButtonComponents from "@/components/ButtonComponents.vue";
import { mapState } from "vuex";

export default {
  components: {
    ButtonComponents,
  },
  data() {
    return {
      editedUser: {
        raisonSociale: "",
        adresse: "",
        codePostal: "",
        ville: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapState({
      currentUtilisateur: (state) => state.currentUtilisateur,
    }),
  },
  methods: {
    submitForm() {
      this.$store.commit("updateUtilisateur", this.editedUser);
      this.showModal = false;
      this.$router.push("/profile/id");
    },
    annulForm() {
      this.$router.push("/profile/id");
    },
  },
  mounted() {
    if (this.currentUtilisateur) {
      this.editedUser = { ...this.currentUtilisateur };
    }
  },
};
</script>

<style scoped>
.edit-profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.edit-profile-carte {
  background-color: #d7c3a7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
}
</style>
