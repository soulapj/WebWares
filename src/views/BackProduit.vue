<template>
  <div>
    <!-- Ajouter un produit -->
    <!-- Search bar (filtre)-->
    <!-- Liste Produit -->
    <table>
      <thead>
        <tr>
          <th>ID Produit</th>
          <th>Image</th>
          <th>Titre</th>
          <th>Description</th>
          <th>Prix</th>
          <th>Quantité Minimum</th>
          <th>Catégorie</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(produit, index) in this.produits" :key="index">
          <td>{{ produit.id }}</td>
          <td>
            <img v-bind:src="produit.images" id="image" v-bind:alt="produit.titre" />
          </td>
          <td>{{ produit.titre }}</td>
          <td>{{ produit.description }}</td>
          <td>{{ produit.prix }}</td>
          <td>{{ produit.moq }}</td>
          <td>Catégorie {{ produit.categorieId }}</td>
          <td>
            <ButtonComponents label="Modifier" color="#72BF78"></ButtonComponents>
            <ButtonComponents label="Supprimer" color="red" v-on:click="deleted(index)"></ButtonComponents>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ButtonComponents from "@/components/ButtonComponents.vue";

export default {
  components: {
    ButtonComponents,
  },
  methods: {
    ...mapMutations(["deleteBackProduit"]),
    deleted(id) {
      this.deleteBackProduit(id);
    },
  },
  computed: {
    ...mapState(["produits", "categories"]),
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
