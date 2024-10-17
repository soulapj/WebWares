<template>
  <div class="produit">
    <div class="product-layout">
      <img :src="detailProd.images" alt="" class="product-image" />
      <div class="product-description">
        <h4 class="product-title">{{ detailProd.titre }}</h4>
        <p class="product-info">{{ detailProd.description }}</p>
        <p class="product-info">€{{ detailProd.prix }}</p>
        <p class="moq">MOQ: {{ detailProd.moq }}</p>
        <QuantityCounterComponent :detailProd="detailProd"/>
        <div class="buttons">
          <ButtonComponents label="Retour" type="default" @click="goBack" class="test2"/>
          <ButtonComponents label="Ajouter au panier" type="login" @click="addToPanier(detailProd.id)" class="test"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponents from "@/components/ButtonComponents.vue";
import QuantityCounterComponent from "@/components/QuantityCounterComponent.vue";
import { mapState } from "vuex";

export default {
  components: {
    ButtonComponents,
    QuantityCounterComponent,
  },
  computed: {
    ...mapState(["detailProd", "produits", "commandes"]),
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    addToPanier(produitId) {
      this.$store.dispatch("addProduitToPanier", produitId);
    },
    incrementQuantite(produit) {
      this.$store.commit("incrementQuantite", produit.produitId);
    },
    decrementQuantite(produit) {
      this.$store.commit("decrementQuantite", produit.produitId);
    },
  },
  created() {
    let idProduit = parseInt(this.$route.params.id);
    this.$store.dispatch("loadDetailProduits", idProduit);
  },
};
</script>

<style scoped>
.produit {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding: var(--spacing);
  color: var(--color-secondary);
}

.product-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 3vw, 3rem);
  align-content: center;
  justify-items: center;
}

.product-image {
  width: clamp(40%, 20vw, 60%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  justify-self: end;
}

.product-image:hover {
  transform: scale(1.05);
  transition: 0.3s ease;
}

.product-description {
  justify-self: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  text-align: center;
}

.product-title {
  font-size: clamp(2.5rem, 2vw, 3rem);
  margin: 0;
}

.product-info {
  font-size: clamp(1.5rem, 1.8vw, 1.5rem);
  margin: 0.7rem 0;
}

.moq {
  font-weight: bold;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: var(--spacing);
}

@media (max-width: 768px) {
  .product-layout {
    grid-template-columns: 1fr;
  }
  .product-image {
    justify-self: center;
    width: 100%;
  }
  .product-description {
    justify-self: center;
    width: 100%;
  }
  /* .buttons {
    justify-content: center;

  } */
}
</style>
