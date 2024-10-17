<template>
  <div>
    <h2>Commande en cours</h2>
    <div class="commande" v-if="commandes.length > 0">
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Total HT</th>
            <th>Total TTC</th>
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
                <p>{{ produit.titre }} *moq : {{ produit.quantite }}</p>
              </div>
            </td>
            <td>
              <div
                v-for="produit in commande.produits"
                :key="produit.produitId"
              >
                <span class="changeValue">
                  <button
                    @click="decrementQuantite(produit)"
                    style="width: fit-content"
                  >
                    -
                  </button>
                  {{ produit.quantite }}
                  <button
                    @click="incrementQuantite(produit)"
                    style="width: fit-content"
                  >
                    +
                  </button>
                </span>
              </div>
            </td>
            <td>
              <div
                v-for="produit in commande.produits"
                :key="produit.produitId"
              >
                <p>{{ subTotalHT(produit.produitId) }} €</p>
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
                  style="width: fit-content"
                  type="logout"
                  @click="openDeleteModal(produit.produitId)"
                  icon="fa-solid fa-trash"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="total-container">
        <p>
          Montant total de votre commande (HT): <strong>{{ totalHT }} €</strong>
        </p>
        <p>
          Montant total de votre commande:
          <strong>{{ total }} €</strong>
        </p>
        <div class="poursuiteBtn">
          <ButtonComponents
            label="Poursuivre la commande"
            type="submit"
            @click="$router.push('/resume-commande')"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <p style="text-align: center">Votre panier est vide.</p>
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
          type="login"
          @click="removeProduit()"
        />
        <ButtonComponents
          label="Annuler"
          type="logout"
          @click="closeDeleteModalConfirm"
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
      produitToRemove: null,
      commandeValidated: null,
    };
  },

  computed: {
    ...mapState(["commandes", "commandeValider"]),
    ...mapGetters(["total", "subTotal", "totalHT", "subTotalHT"]),
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

h2 {
  text-align: center;
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

.poursuiteBtn {
  display: flex;
  justify-content: center;
}

.total-container {
  margin-top: 20px;
  text-align: center;
}

.total-container p {
  font-weight: bold;
}

.changeValue {
  display: flex;
  align-items: center;
  flex-direction: row;
}
</style>
