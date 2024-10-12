<template>
  <div class="catégorie" v-for="(cat, id) in this.categories" :key="id">
    <p>{{ cat.name }}</p>
  </div>
  <div class="produit">
    <div v-for="(prod, index) in this.produits" :key="index">
      <img :src="prod.images" />
      <h4>{{ prod.titre }}</h4>
      <p>Nombre d'article restant :{{ prod.moq }}</p>
      <p>EUR : {{ prod.prix }} €</p>
      <ButtonComponents
        v-if="commandes && !isInBag(prod.id)"
        label="Ajouter au panier"
        color="#E9C46A"
        @click="addToPanier(prod.id)"
      />
      <ButtonComponents
        v-else
        label="Supprimer du panier"
        color="#E9C46A"
        @click="removeToPanier(prod.id)"
      />
      <router-link :to="{ name: 'DetailProduit', params: { id: prod.id } }"
        >voir détails</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ButtonComponents from "@/components/ButtonComponents.vue";

export default {
  components: {
    ButtonComponents,
  },
  computed: {
    ...mapState(["produits", "categories", "commandes"]),
  },
  methods: {
    addToPanier(produitId) {
      this.$store.dispatch("addProduitToPanier", produitId);
    },
    removeToPanier(produitId) {
      this.$store.dispatch("removeProduit", produitId);
    },
    isInBag(produitId) {
      return this.commandes.some((commande) =>
        commande.produits.some((prod) => prod.produitId === produitId)
      );
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: 100px;
  margin: 15px;
}
.catégorie {
  display: inline-block;
  margin: 50px;
}
.produit {
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>
