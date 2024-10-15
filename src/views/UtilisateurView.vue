<template>
  <div>
    <div v-for="(user, index) in this.utilisateurs" :key="index">
      <h4>Nom de l'entreprise : {{ user.raisonSociale }}</h4>
      <p>
        Adresse de l'entreprise : {{ user.adresse }} {{ user.codePostal }}
        {{ user.ville }}
      </p>
      <p>Numéro de Siret :{{ user.siret }}</p>
      <p>Adresse mail :{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["utilisateurs"]),
  },
};
</script>

<style scoped></style>
