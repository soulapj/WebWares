import { createStore } from "vuex";

export default createStore({
  state: {
    detailProd: {},
    commandeValider: [],

    categories: [
      { id: 1, name: "Mobilier d'intérieur" },
      { id: 2, name: "Luminaires" },
      { id: 3, name: "Tapis" },
      { id: 4, name: "Objets de décorations" },
    ],

    produits: [
      {
        id: 1,
        images: require("@/assets/mobilier/mobilier-5.jpg"),
        titre: "Table à manger en bois",
        description: "Table à manger en bois massif avec finition élégante.",
        prix: 299.99,
        moq: 5,
        categorieId: 1,
      },
      {
        id: 2,
        images: require("@/assets/luminaire/luminaire-1.jpg"),
        titre: "Lampe moderne",
        description: "Lampe avec un design moderne et éclairage ajustable.",
        prix: 129.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 3,
        images: require("@/assets/tapis/tapis-2.jpg"),
        titre: "Tapis en laine",
        description: "Tapis doux en laine avec motif géométrique.",
        prix: 89.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 4,
        images: require("@/assets/luminaire/luminaire-3.jpg"),
        titre: "Vase éthnique en argile",
        description: "Vase éthnique en argile avec motifs gravés à la main.",
        prix: 49.99,
        moq: 20,
        categorieId: 4,
      },
    ],

    commandes: [
      // {
      //   id: 1,
      //   produits: [
      //     { produitId: 1, titre: "Table à manger en bois", quantite: 2 },
      //     { produitId: 3, titre: "Tapis en laine", quantite: 1 },
      //   ],
      //   countTotal: 689.97,
      //   userId: 1,
      // },
      // {
      //   id: 2,
      //   produits: [
      //     { produitId: 2, titre: "Lampe moderne", quantite: 1 },
      //     { produitId: 4, titre: "Vase éthnique en argile", quantite: 3 },
      //   ],
      //   countTotal: 539.96,
      //   userId: 2,
      // },
    ],

    utilisateurs: [
      {
        id: 1,
        raisonSociale: "Entreprise A",
        siret: "12345678901234",
        adresse: "123 Rue de la République",
        codePostal: "75001",
        ville: "Paris",
        email: "entrepriseA@example.com",
        motDePasse: "motdepasseA",
        role: "USER",
      },
      {
        id: 2,
        raisonSociale: "Entreprise B",
        siret: "56789012345678",
        adresse: "456 Avenue des Champs-Élysées",
        codePostal: "75008",
        ville: "Paris",
        email: "entrepriseB@example.com",
        motDePasse: "motdepasseB",
        role: "ADMIN",
      },
    ],
  },
  mutations: {
    setCategories(state, cat) {
      state.categories = cat;
    },
    setProduit(state, prod) {
      state.produits = prod;
    },
    setCommande(state, com) {
      state.commandes = com;
    },
    setUtilisateur(state, user) {
      state.utilisateurs = user;
    },
    setDetailProduit(state, prod) {
      state.detailProd = prod;
    },
    deleteBackProduit(state, id){
        state.produits.splice(id, 1);
    },
    setCommandesFromLocalStorage(state, commandes) {
      state.commandes = commandes;
    },
    setCommandeValider(state, commande) {
      state.commandeValider = commande;
    },

    clearPanier(state) {
      state.commandes = [];
      localStorage.removeItem("commandes");
    },

    addProduitToCommande(state, prodId) {
      let produitInfo = state.produits.find((p) => p.id === prodId);
      if (!produitInfo) return;

      let commandeExistante = state.commandes.find((commande) =>
        commande.produits.some((p) => p.produitId === prodId)
      );

      if (commandeExistante) {
        let produit = commandeExistante.produits.find(
          (p) => p.produitId === prodId
        );
        produit.quantite++;
        commandeExistante.countTotal += produitInfo.prix;
      } else {
        state.commandes.push({
          id: state.commandes.length + 1,
          produits: [
            {
              produitId: produitInfo.id,
              titre: produitInfo.titre,
              quantite: 1,
            },
          ],
          countTotal: produitInfo.prix,
          userId: 1,
        });
      }
      localStorage.setItem("commandes", JSON.stringify(state.commandes));
    },

    removeProduit(state, prodId) {
      state.commandes = state.commandes
        .map((commande) => ({
          ...commande,
          produits: commande.produits.filter((p) => p.produitId !== prodId),
        }))
        .filter((commande) => commande.produits.length > 0);
      localStorage.setItem("commandes", JSON.stringify(state.commandes));
    },

    incrementQuantite(state, prodId) {
      let commande = state.commandes.find((com) =>
        com.produits.some((p) => p.produitId === prodId)
      );
      if (commande) {
        let produit = commande.produits.find((p) => p.produitId === prodId);
        produit.quantite++;
        let produitInfo = state.produits.find((p) => p.id === prodId);
        commande.countTotal += produitInfo.prix;
        localStorage.setItem("commandes", JSON.stringify(state.commandes));
      }
    },

    decrementQuantite(state, prodId) {
      let commande = state.commandes.find((com) =>
        com.produits.some((p) => p.produitId === prodId)
      );
      if (commande) {
        let produit = commande.produits.find((p) => p.produitId === prodId);
        if (produit.quantite > 1) {
          produit.quantite--;
          let produitInfo = state.produits.find((p) => p.id === prodId);
          commande.countTotal -= produitInfo.prix;
          localStorage.setItem("commandes", JSON.stringify(state.commandes));
        }
      }
    },

    saveCommandeToLocalStorage(state, commande) {
      if (commande && Array.isArray(commande.produits)) {
        state.commandeValider.push({
          id: state.commandeValider.length + 1,
          produits: commande.produits.map((p) => ({
            produitId: p.produitId,
            titre: p.titre,
            quantite: p.quantite,
          })),
          countTotal: commande.countTotal,
          userId: commande.userId,
        });
        localStorage.setItem(
          "commandeValider",
          JSON.stringify(state.commandeValider)
        );
      } else {
        console.error("Invalid commande object", commande);
      }
    },

    updateProductStock(state, { produitId, quantite }) {
      const produit = state.produits.find((p) => p.id === produitId);
      if (produit && produit.moq >= quantite) {
        produit.moq -= quantite;
      } else {
        console.error(
          `Quantité demandée pour le produit ID: ${produitId} est supérieure au stock disponible.`
        );
      }
    },
  },

  actions: {
    loadDetailProduits({ commit }, idProduit) {
      const selectedProduct = this.state.produits.find(
        (prod) => prod.id === idProduit
      );
      if (selectedProduct) {
        commit("setDetailProduit", selectedProduct);
      }
    },

    addProduitToPanier({ commit }, prodId) {
      commit("addProduitToCommande", prodId);
    },
    removeProduit({ commit }, produitId) {
      commit("removeProduit", produitId);
    },

    loadCommandesFromLocalStorage({ commit }) {
      const commandes = JSON.parse(localStorage.getItem("commandes"));
      if (commandes && Array.isArray(commandes)) {
        commit("setCommandesFromLocalStorage", commandes);
      }
    },

    saveCommandeToLocalStorage({ commit }, currentCommande) {
      if (currentCommande && Array.isArray(currentCommande.produits)) {
        commit("saveCommandeToLocalStorage", currentCommande);
      } else {
        console.error("Invalid currentCommande object", currentCommande);
      }
    },
  },

  getters: {
    subTotal: (state) => (produitId) => {
      const produit = state.commandes
        .flatMap((commande) => commande.produits)
        .find((p) => p.produitId === produitId);
      if (produit) {
        const produitInfo = state.produits.find((p) => p.id === produitId);
        return (produit.quantite * produitInfo.prix).toFixed(2);
      }
      return 0;
    },

    total: (state) => {
      return state.commandes.reduce((acc, commande) => {
        return (
          acc +
          commande.produits.reduce((subAcc, produit) => {
            return (
              subAcc +
              produit.quantite *
                state.produits.find((p) => p.id === produit.produitId).prix
            );
          }, 0)
        );
      }, 0);
    },
  },
  modules: {},
});
