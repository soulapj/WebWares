<template>
  <div>
    <h2>Commande en cours</h2>
    <div class="commande" v-if="commandes.length > 0">
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Total de(s) article(s) (TTC)</th>
            <!-- <th>Montant total de(s) article(s) (HT) Prix HT = Prix TTC ÷ (1 + Taux de TVA)</th> -->
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="commande in commandes" :key="commande.id">
            <td>
              <div
                v-for="produit in commande.produits"
                :key="produit.produitId"
              >
                <p>{{ produit.titre }} *moq : {{ produit.moq }}</p>
              </div>
            </td>
            <td>
              <div
                v-for="produit in commande.produits"
                :key="produit.produitId"
              >
                <span>
                  <button @click="decrementQuantite(produit)">-</button>
                  {{ produit.quantite }}
                  <button @click="incrementQuantite(produit)">+</button>
                </span>
              </div>
            </td>
            <td>
              <div
                v-for="produit in commande.produits"
                :key="produit.produitId"
              >
                <p>{{ subTotal(produit.produitId) }} €</p>
              </div>
            </td>
            <td>
              <div
                v-for="produit in commande.produits"
                :key="produit.produitId"
              >
                <ButtonComponents
                  label="Supprimer l'article"
                  color="#E9C46A"
                  @click="openDeleteModal(produit.produitId)"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="total-container">
        <p>
          Montant total de votre commande:
          <strong>{{ total.toFixed(2) }} €</strong>
        </p>
        <ButtonComponents
          label="Valider la commande"
          color="#E9C46A"
          @click="openValidateCommandeModal(commandeValider.id)"
        />
      </div>
    </div>
    <div v-else>
      <p>Votre panier est vide.</p>
    </div>
    <ModalComponent :showModal="showModalConfirm" color="#d7c3a7">
      <template #header>
        <h2>Confirmation de suppression :</h2>
      </template>

      <template #body>
        <p>Êtes-vous sûr de vouloir supprimer le ou les articles?</p>
      </template>

      <template #footer>
        <ButtonComponents
          label="Valider"
          color="#E9C46A"
          @click="removeProduit()"
        />
        <ButtonComponents
          label="Annuler"
          color="#E9C46A"
          @click="closeDeleteModalConfirm"
        />
      </template>
    </ModalComponent>
    <ModalComponent :showModal="showModalCommandeConfirm" color="#d7c3a7">
      <template #header>
        <h2>Confirmation de la commande :</h2>
      </template>

      <template #body>
        <p>Êtes-vous sûr de vouloir valider votre commande?</p>
      </template>

      <template #footer>
        <ButtonComponents
          label="Valider"
          color="#E9C46A"
          @click="validerCommande()"
        />
        <ButtonComponents
          label="Annuler"
          color="#E9C46A"
          @click="closeValidateCommandeModal"
        />
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ButtonComponents from "@/components/ButtonComponents.vue";
import ModalComponent from "@/components/ModalComponent.vue";

export default {
  components: {
    ButtonComponents,
    ModalComponent,
  },

  data() {
    return {
      showModalConfirm: false,
      showModalCommandeConfirm: false,
      produitToRemove: null,
      commandeValidated: null,
    };
  },

  computed: {
    ...mapState(["commandes", "commandeValider"]),
    ...mapGetters(["total", "subTotal"]),
  },
  methods: {
    openDeleteModal(produitId) {
      this.produitToRemove = produitId;
      this.showModalConfirm = true;
    },
    closeDeleteModalConfirm() {
      this.showModalConfirm = false;
      this.produitToRemove = null;
    },

    openValidateCommandeModal(commandeId) {
      this.commandeValidated = commandeId;
      this.showModalCommandeConfirm = true;
    },
    closeValidateCommandeModal() {
      this.showModalCommandeConfirm = false;
      this.commandeValidated = null;
    },

    removeProduit() {
      this.$store.commit("removeProduit", this.produitToRemove);
      this.closeDeleteModalConfirm();
    },
    incrementQuantite(produit) {
      this.$store.commit("incrementQuantite", produit.produitId);
    },
    decrementQuantite(produit) {
      this.$store.commit("decrementQuantite", produit.produitId);
    },
    validerCommande() {
      const currentCommande = {
        produits: this.commandes.flatMap((commande) => commande.produits),
        countTotal: this.total,
        userId: 1,
      };
      this.$store.dispatch("saveCommandeToLocalStorage", currentCommande);

      this.$store.commit("clearPanier");
      this.closeValidateCommandeModal();
    },
  },
};
</script>

<style scoped>
.commande {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
}

table {
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
}

thead {
  background-color: #f4f4f4;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #d7c3a7;
  color: #264653;
}

tr:hover {
  background-color: #f1f1f1;
}

button {
  margin: 0 5px;
}

.total-container {
  margin-top: 20px;
  text-align: center;
}

.total-container p {
  font-weight: bold;
}
</style>
