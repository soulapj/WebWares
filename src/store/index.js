import { createStore } from "vuex";

export default createStore({
  state: {
    detailProd: {},
    commandeValider: [],
    // ----------C j'ai un ajouté un state currentUtilisateur set sur null
    currentUtilisateur: null,
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },

    categories: [
      { id: 1, name: "Mobilier d'intérieur" },
      { id: 2, name: "Luminaires" },
      { id: 3, name: "Tapis" },
      { id: 4, name: "Objets de décorations" },
    ],

    produits: [
      {
        id: 1,
        images: require("@/assets/mobilier/mobilier-1.jpg"),
        titre: "Table de chevet",
        description: "Table de chevet en bois massif avec finition élégante.",
        prix: 199.99,
        moq: 2,
        categorieId: 1,
      },
      {
        id: 2,
        images: require("@/assets/mobilier/mobilier-2.jpg"),
        titre: "Etagère en bois",
        description: "Etagère en bois d'arbre marron.",
        prix: 99.99,
        moq: 3,
        categorieId: 1,
      },
      {
        id: 3,
        images: require("@/assets/mobilier/mobilier-3.jpg"),
        titre: "Canapé en cuir",
        description: "Canapé en cuir marron (3 places).",
        prix: 249.99,
        moq: 2,
        categorieId: 1,
      },
      {
        id: 4,
        images: require("@/assets/mobilier/mobilier-4.jpg"),
        titre: "Canapé en tissu",
        description: "Canapé en tissu bleu machin bizarre (3 places).",
        prix: 219.99,
        moq: 2,
        categorieId: 1,
      },
      {
        id: 5,
        images: require("@/assets/mobilier/mobilier-5.jpg"),
        titre: "Table à manger en bois",
        description: "Table à manger en bois massif avec finition élégante.",
        prix: 299.99,
        moq: 5,
        categorieId: 1,
      },
      {
        id: 6,
        images: require("@/assets/luminaire/luminaire-1.jpg"),
        titre: "Lampe moderne",
        description: "Lampe avec un design moderne et éclairage ajustable.",
        prix: 129.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 7,
        images: require("@/assets/luminaire/luminaire-2.jpg"),
        titre: "Lampe plafonnier",
        description:
          "Lampe plafonnier avec un design moderne et éclairage ciblé vertical.",
        prix: 79.99,
        moq: 7,
        categorieId: 2,
      },
      {
        id: 8,
        images: require("@/assets/luminaire/luminaire-3.jpg"),
        titre: "Vase éthnique en argile",
        description: "Vase éthnique en argile avec motifs gravés à la main.",
        prix: 49.99,
        moq: 6,
        categorieId: 2,
      },
      {
        id: 9,
        images: require("@/assets/luminaire/luminaire-4.jpg"),
        titre: "Lampe plafonnier métal",
        description:
          "Lampe plafonnier métal noir avec un design oldSchool et éclairage vertical.",
        prix: 69.99,
        moq: 5,
        categorieId: 2,
      },
      {
        id: 10,
        images: require("@/assets/luminaire/luminaire-5.jpg"),
        titre: "Lampe mural",
        description:
          "Lampe mural en bois d'arbre de la forêt avec un design enfantin.",
        prix: 129.99,
        moq: 7,
        categorieId: 2,
      },
      {
        id: 11,
        images: require("@/assets/tapis/tapis-1.jpg"),
        titre: "Tapis peau de bête",
        description:
          "Tapis peau de bête synthétique parce qu'on aime les animales.",
        prix: 119.99,
        moq: 5,
        categorieId: 3,
      },
      {
        id: 12,
        images: require("@/assets/tapis/tapis-2.jpg"),
        titre: "Tapis en laine",
        description: "Tapis doux en laine avec motif géométrique.",
        prix: 89.99,
        moq: 7,
        categorieId: 3,
      },
      {
        id: 13,
        images: require("@/assets/tapis/tapis-3.jpg"),
        titre: "Tapis en laine",
        description: "Tapis doux en laine avec motif oriental.",
        prix: 69.99,
        moq: 6,
        categorieId: 3,
      },
      {
        id: 14,
        images: require("@/assets/tapis/tapis-4.jpg"),
        titre: "Tapis éléphant",
        description:
          "Tapis éléphant en laine maillé main avec motif tête de Dumbo.",
        prix: 109.99,
        moq: 10,
        categorieId: 3,
      },
      {
        id: 15,
        images: require("@/assets/tapis/tapis-5.jpg"),
        titre: "Tapis moumoute",
        description: "Tapis moumoute doux en laine bleu foncé.",
        prix: 69.99,
        moq: 4,
        categorieId: 3,
      },
      {
        id: 16,
        images: require("@/assets/deco/deco-1.jpg"),
        titre: "Pot florale",
        description: "Pot florale en bois vernis.",
        prix: 29.99,
        moq: 20,
        categorieId: 4,
      },
      {
        id: 17,
        images: require("@/assets/deco/deco-2.jpg"),
        titre: "Vase florale",
        description: "Vase florale en céramique vert et blanc.",
        prix: 39.99,
        moq: 20,
        categorieId: 4,
      },
      {
        id: 18,
        images: require("@/assets/deco/deco-3.jpg"),
        titre: "Vase artisanale",
        description:
          "Vase artisanal en terre cuite réalisé par un influenceur.",
        prix: 59.99,
        moq: 21,
        categorieId: 4,
      },
      {
        id: 19,
        images: require("@/assets/deco/deco-4.jpg"),
        titre: "Vase décoratif",
        description: "Vase décoratif en marbre ancien.",
        prix: 129.99,
        moq: 2,
        categorieId: 4,
      },
      {
        id: 20,
        images: require("@/assets/deco/deco-5.jpg"),
        titre: "Vase en métal",
        description: "Vase en métal bleu forgé.",
        prix: 79.99,
        moq: 4,
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
    deleteBackProduit(state, id) {
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

        if (produit.quantite < produitInfo.moq) {
          produit.quantite = produitInfo.moq;
          commandeExistante.countTotal +=
            (produitInfo.moq - produit.quantite) * produitInfo.prix;
        } else {
          produit.quantite++;
          commandeExistante.countTotal += produitInfo.prix;
        }
      } else {
        state.commandes.push({
          id: state.commandes.length + 1,
          produits: [
            {
              produitId: produitInfo.id,
              titre: produitInfo.titre,
              quantite: produitInfo.moq,
            },
          ],
          countTotal: produitInfo.prix * produitInfo.moq,
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
        let produitInfo = state.produits.find((p) => p.id === prodId);

        if (produit.quantite > produitInfo.moq) {
          produit.quantite--;
          commande.countTotal -= produitInfo.prix;
          localStorage.setItem("commandes", JSON.stringify(state.commandes));
        } else {
          console.log(
            `La quantité minimum pour ce produit est ${produitInfo.moq}`
          );
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
    // Contact form ===============================arash================================================================ \\
    setFormData(state, payload) {
      state.formData = payload;
    },
    updateField(state, { field, value }) {
      state.formData[field] = value;
    },
    // ============================================================================================================ \\

    // --------------------- mutations Clément
    setCurrentUtilisateurFromLocalStorage(state) {
      const currentUtilisateur = localStorage.getItem("currentUtilisateur");
      if (currentUtilisateur)
      {
        state.currentUtilisateur =JSON.parse(currentUtilisateur);
        state.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", true);

      }
      else 
      {
        state.currentUtilisateur = null;
        state.isLoggedIn = false;
      }
    },
    
    setCurrentUtilisateur(state, userId) {
      const utilisateur = state.utilisateurs.find((user) => user.id === userId);
      if(utilisateur)
        {
          state.currentUtilisateur = utilisateur;
          state.currentUserId = userId;
          localStorage.setItem("currentUtilisateur", JSON.stringify(utilisateur));
        }      
    },

    clearCurrentUtilisateur(state) { 
      state.currentUtilisateur = null;
      state.isLoggedIn = false;
    },

    addUser(state, newUser) {
      state.utilisateurs.push(newUser);
      localStorage.setItem('utilisateurs', JSON.stringify(state.utilisateurs));
    },

    setUtilisateursFromLocalStorage(state, utilisateurs) {
      state.utilisateurs = utilisateurs;
    },

    setUserIdForcommande(state, {userId, commandeId}) {
      const commande = state.commandeValider.find(c => c.id === commandeId);

      if(commande) {
        commande.userId = userId;
        localStorage.setItem('commandeValider', JSON.stringify(state.commandeValider));
      }
      else 
      {
        console.error(`Commande avec l'ID ${commandeId} non trouvée.`);
      }
    },

    // -----------------------//

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
    // Contact Form ==========================arash=============================================== \\
    saveFormData({ commit }, formData) {
      commit("setFormData", formData);
      localStorage.setItem("formData", JSON.stringify(formData));
    },
    initializeFormData({ commit }) {
      const savedFormData = localStorage.getItem("formData");
      if (savedFormData) {
        commit("setFormData", JSON.parse(savedFormData));
      }
    },
    // ========================================================================================= \\


    // --------------------- actions Clément

    loadCurrentUtilisateurFromLocalStorage({commit}){
      const currentUtilisateur = localStorage.getItem("currentUtilisateur");
      if(currentUtilisateur) {
        commit("setCurrentUtilisateur", JSON.parse(currentUtilisateur));
      }
    },

    //-> ici on charge le tableau et non l'utilisateur unique 
    loadCurrentUtilisateursFromLocalStorage({commit}){ 
      const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs'));
      if(utilisateurs && Array.isArray(utilisateurs)){
        commit("setUtilisateursFromLocalStorage", utilisateurs);
      }
    },

    registerUser({commit}, newUser){
      const id = this.state.utilisateurs.length + 1;
      const userWithId = {id, ...newUser};
      commit("addUser", userWithId);
      return {success: true};
    },

    setUserIdForCommande({commit}, {userId, commandeId}) {
      commit("setUserIdForcommande", {userId, commandeId});
    },  
    // -----------------------//
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

    subTotalHT: (state) => (produitId) => {
      const produit = state.commandes
        .flatMap((commande) => commande.produits)
        .find((p) => p.produitId === produitId);
      if (produit) {
        const produitInfo = state.produits.find((p) => p.id === produitId);
        const prixHT = produitInfo.prix / 1.2;
        return (produit.quantite * prixHT).toFixed(2);
      }
      return 0;
    },

    total: (state) => {
      return state.commandes
        .reduce((acc, commande) => {
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
        }, 0)
        .toFixed(2);
    },

    totalHT: (state) => {
      return state.commandes
        .reduce((acc, commande) => {
          return (
            acc +
            commande.produits.reduce((subAcc, produit) => {
              const produitInfo = state.produits.find(
                (p) => p.id === produit.produitId
              );
              const prixHT = produitInfo.prix / 1.2;
              return subAcc + produit.quantite * prixHT;
            }, 0)
          );
        }, 0)
        .toFixed(2);
    },

     // --------------------- getters Clément

     getUtilisateurs: (state) => state.utilisateurs,
     //attention j'ai mis le getteur à get UtilisateurByEmail !
     getUtilisateurByEmail: (state) => (email) =>
       state.utilisateurs.find((user) => user.email === email),
 
     //attention j'ai mis le getteur à get UtilisateurByUsername !
     getUtilisateurByUsername: (state) => (username) =>
       state.utilisateurs.find((user) => user.username === username),
 
     getUtilisateurBySiret : (state) => (siret) =>
       state.utilisateurs.find((user) => user.siret === siret),
 
     //isLoggedIn: (state) => state.isLoggedIn, // getter pour l'état de connexion

     // ---------------------------------//

    // Sorted best seller ======================arash====================================================== \\
    sortedBestSellers(state) {
      const produitsWithQuantite = state.produits.map((produit) => {
        const order = state.commandeValider.find(
          (commande) => commande.productId === produit.id
        );

        return {
          ...produit,
          quantite: order ? order.quantite : 0,
        };
      });
      return produitsWithQuantite.sort((a, b) => b.quantite - a.quantite);
    },
    // ========================================================================================================\\
  },

 
  modules: {},
});
