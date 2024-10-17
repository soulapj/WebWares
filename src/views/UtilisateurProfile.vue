<template>
  <div class="profile-container" v-if="currentUtilisateur">
    <div class="profile-carte">
      <div class="profile-header">
        <!-- <img
          class="profile-avatar"
          src="https://via.placeholder.com/150"
          alt="Avatar de l'utilisateur"
        /> -->
        <h2 class="profile-name">{{ currentUtilisateur.raisonSociale }}</h2>
      </div>
      <div class="profile-body">
        <div class="profile-info">
          <h4>Adresse de l'entreprise</h4>
          <p>
            {{ currentUtilisateur.adresse }},
            {{ currentUtilisateur.codePostal }},
            {{ currentUtilisateur.ville }}
          </p>
        </div>
        <div class="profile-info">
          <h4>Numéro de Siret</h4>
          <p>{{ currentUtilisateur.siret }}</p>
        </div>
        <div class="profile-info">
          <h4>Email</h4>
          <p>{{ currentUtilisateur.email }}</p>
        </div>
      </div>
      <div>
        <ButtonComponents
          label="Modifier le profil"
          type="submit"
          @click="$router.push('/modification-profile')"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <p>Aucun utilisateur connecté.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ButtonComponents from "@/components/ButtonComponents.vue";

export default {
  components: {
    ButtonComponents,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapState({
      currentUtilisateur: (state) => state.currentUtilisateur,
    }),
  },
  mounted() {
    if (this.currentUtilisateur) {
      this.editedUser = { ...this.currentUtilisateur };
    }
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.profile-carte {
  background-color: #d7c3a7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
}

.profile-header {
  margin-bottom: 20px;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.profile-name {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
}

.profile-role {
  font-size: 18px;
  color: #777;
}

.profile-body {
  text-align: left;
}

.profile-info {
  margin-bottom: 15px;
}

.profile-info h4 {
  font-size: 20px;
  margin-bottom: 5px;
  color: #333;
}

.profile-info p {
  margin: 0;
  font-size: 18px;
  color: #555;
}
</style>
