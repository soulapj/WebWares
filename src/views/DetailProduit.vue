<template>
  <div class="produit">
    <h1>Details du produit :</h1>
    <img :src="detailProd.images" alt="" />
    <h4>{{ detailProd.titre }}</h4>
    <p>{{ detailProd.description }}</p>
    <p>{{ detailProd.prix }}</p>
    <ButtonComponents label="retour" color="grey" v-on:click="goBack" />
  </div>
</template>

<script>
import ButtonComponents from "@/components/ButtonComponents.vue";
import { mapState } from "vuex";

export default {
  components: {
    ButtonComponents,
  },
  computed: {
    ...mapState(["detailProd"]),
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  created() {
    let idProduit = parseInt(this.$route.params.id);
    this.$store.dispatch("loadDetailProduits", idProduit);
  },
};
</script>

<style scoped></style>
