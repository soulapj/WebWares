import { createStore } from "vuex";

export default createStore({
  state: {
    detailProd: {},

    categories: [
      { id: 1, name: "Mobilier d'intérieur" },
      { id: 2, name: "Luminaires" },
      { id: 3, name: "Tapis" },
      { id: 4, name: "Objets de décorations" },
    ],

    produits: [
      {
        id: 1,
        images: "@/assets/mobilier/mobilier-5.jpg",
        titre: "Table à manger en bois",
        description: "Table à manger en bois massif avec finition élégante.",
        prix: 299.99,
        moq: 5,
        categorieId: 1,
      },
      {
        id: 2,
        images: "@/assets/luminaire/luminaire-1.jpg",
        titre: "Lampe moderne",
        description: "Lampe avec un design moderne et éclairage ajustable.",
        prix: 129.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 3,
        images: "@/assets/tapis/tapis-2.jpg",
        titre: "Tapis en laine",
        description: "Tapis doux en laine avec motif géométrique.",
        prix: 89.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 4,
        images: "@/assets/luminaire/luminaire-3.jpg",
        titre: "Vase éthnique en argile",
        description: "Vase éthnique en argile avec motifs gravés à la main.",
        prix: 49.99,
        moq: 20,
        categorieId: 4,
      },
    ],

    commandes: [
      {
        id: 1,
        produits: [
          { produitId: 1, quantite: 2 },
          { produitId: 3, quantite: 1 },
        ],
        coutTotal: 689.97,
        userId: 1,
      },
      {
        id: 2,
        produits: [
          { produitId: 2, quantite: 1 },
          { produitId: 4, quantite: 3 },
        ],
        coutTotal: 539.96,
        userId: 2,
      },
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
  },
  getters: {},
  modules: {},
});
