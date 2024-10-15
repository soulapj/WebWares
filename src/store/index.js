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
        //ajout du username pour la connexion -C
        username : "Entreprise A",
        role: "USER",
        commandes : []
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
        username : "Entreprise B",
        role: "ADMIN",
        commandes : [],
      },
    ],
    //-------- Ajout d'un utilisateur current à null pour la connexion ça permettra de suivre les données également -C 
    currentUtilisateur : {},
    // -----------//
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
          userId: state.currentUtilisateur.id, // je récupère l'id de l'utilisateur connecté -C
        });
        
      }
      localStorage.setItem("commandes", JSON.stringify(state.commandes));

      // je tente un truc ici l'idée est que la commande push dans le tableau commandes de l'utilisateur -------------- C
      // Je n'ai pas osé modifié d'autres parties, donc je vous laisse

      const utilisateur = state.utilisateurs.find(user => user.id === state.currentUtilisateur.id);
      if(utilisateur) {
        alert('Utilisateur trouvé');
        if (!Array.isArray(utilisateur.commandes)) {
          utilisateur.commandes = [];
        
        }
        utilisateur.commandes.push(state.commandes[state.commandes.length - 1]);
        localStorage.setItem("utilisateurs", JSON.stringify(state.utilisateurs));

        state.currentUtilisateur.commandes = utilisateur.commandes;
        localStorage.setItem("currentUtilisateur", JSON.stringify(state.currentUtilisateur));
      }
      // --------------------------- //
    },

    removeProduit(state, prodId) {
      state.commandes = state.commandes
        .map((commande) => ({
          ...commande,
          produits: commande.produits.filter((p) => p.produitId !== prodId),
        }))
        .filter((commande) => commande.produits.length > 0);
      localStorage.setItem("commandes", JSON.stringify(state.commandes));

      // ------ La partie que j'ai modifié dans cette mutation -c

      // --------------------------- //
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

      // ------ La partie que j'ai modifié dans cette mutation -c

      // --------------------------- //
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

      // ------ La partie que j'ai modifié dans cette mutation -c

      // --------------------------- //
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

     //------- mutations pour les utilisateurs -C

    checkRole(state, {email, role}){
      const user = state.utilisateurs.find(user => user.email === email);
      return user && user.role === role;
      },
    
    //on push le nouvel utilisateur dans le tableau utilisateurs

    // l'utilisateurs dans ce cas est le tableau des utilisateurs.
    setUtilisateurs(state, utilisateurs) {
        state.utilisateurs = utilisateurs;
      },

    addUser(state, newUser){
        state.utilisateurs.push(newUser);
        localStorage.setItem("utilisateurs", JSON.stringify(state.utilisateurs));
      },

    loadUtilisateursFromLocalStorage(state){
      const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs"));
      if(utilisateurs && Array.isArray(utilisateurs)){
        state.utilisateurs = utilisateurs; 
      }
    },

    loginExistingUser(state, user) {
        state.currentUtilisateur = user;
        state.isLoggedIn = true;
        localStorage.setItem("currentUtilisateur", JSON.stringify(user));
        sessionStorage.setItem("currentUtilisateur", JSON.stringify(user));

      },

    logoutUser(state) {
      const userId = state.currentUtilisateur.id;

      if(userId) 
      {
        const userSessionKey = `currentUtilisateur_${userId}`;
        sessionStorage.removeItem(userSessionKey);
      }

  
      state.currentUtilisateur = {};
      state.isLoggedIn = false;
      localStorage.removeItem("currentUtilisateur");
    },

    setCurrentUtilisateurFromSessionStorage(state) {
      const currentUtilisateur = sessionStorage.getItem("currentUtilisateur");
      if (currentUtilisateur) 
      {
        state.currentUtilisateur = JSON.parse(currentUtilisateur);
        state.isLoggedIn = true;
        
      }
      else 
      {
        state.currentUtilisateur = {};
        state.isLoggedIn = false
      }
    },

    setCurrentUtilisateurFromLocalStorage(state) {
      const currentUtilisateur = localStorage.getItem("currentUtilisateur");
      if (currentUtilisateur)
      {
        state.currentUtilisateur =JSON.parse(currentUtilisateur);
        state.isLoggedIn = true;
        sessionStorage.setItem("currentUtilisateur", currentUtilisateur);

      }
      else 
      {
        state.currentUtilisateur = {};
        state.isLoggedIn = false;
      }
    },

    //ici on met à jour le tableau des utilisateurs avec le user
    setUtilisateur(state, user) {
        state.utilisateurs = user;
        
      },

    // -------------------------- //
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

     //---------- actions pour les utilisateurs -C

    //cette action permet de load le tableau des utilisateurs que l'on met à jour
    loadUtilisateursFromLocalStorage({commit}) {
      commit("loadUtilisateursFromLocalStorage");
    },


     registerUser({commit}, newUser){
      const id = this.state.utilisateurs.length + 1;
      const userWithId = {id, ...newUser};
      commit("addUser", userWithId);
      return {success: true};
    },

    // ici on load l'utilisateur courant de la session storage ou du local storage
    loadCurrentUtilisateurFromSessionStorage({commit})   {
      commit("setCurrentUtilisateurFromSessionStorage");
    },

    loadCurrentUtilisateurFromLocalStorage({commit}){
      commit("setCurrentUtilisateurFromLocalStorage");
    },

    login({commit}, user){
      commit("loginExistingUser", user);
    },

    logout({commit}) {
      commit("logoutUser");
    }
    
    //---------------------------------------- //
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
    
    //--------------- getters pour les utilisateurs -C

    getUtilisateurs: (state) => state.utilisateurs,
    //attention j'ai mis le getteur à get UtilisateurByEmail !
    getUtilisateurByEmail: (state) => (email) =>
      state.utilisateurs.find((user) => user.email === email),

    //attention j'ai mis le getteur à get UtilisateurByUsername !
    getUtilisateurByUsername: (state) => (username) =>
      state.utilisateurs.find((user) => user.username === username),

    getUtilisateurBySiret : (state) => (siret) =>
      state.utilisateurs.find((user) => user.siret === siret),

    isLoggedIn: (state) => state.isLoggedIn, // getter pour l'état de connexion

    //-------------------------//
  },

  modules: {},
});
