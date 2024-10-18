import { createStore } from "vuex";

export default createStore({
  state: {
    detailProd: {},
    commandeValider: [],
    commandesTransferees: [],
    isAdminView: true,

    savedCommandes: [],
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
      {
        id: 1,
        name: "Mobilier d'intérieur",
        images: require("@/assets/category photos/Mobilier d'intérieur.jpg"),
        description:
          "Découvrez notre gamme de mobilier professionnel, conçue pour allier design et fonctionnalité dans tous vos espaces de travail.",
      },
      {
        id: 2,
        name: "Luminaires",
        images: require("@/assets/category photos/Luminaires.jpg"),
        description:
          "Optimisez l'éclairage de vos projets avec nos luminaires modernes, alliant performance et efficacité énergétique.",
      },
      {
        id: 3,
        name: "Tapis",
        images: require("@/assets/category photos/Tapis.jpg"),
        description:
          "Ajoutez une touche d'élégance à vos espaces avec nos tapis haut de gamme, parfaits pour un usage intensif en milieu professionnel.",
      },
      {
        id: 4,
        name: "Objets de décorations",
        images: require("@/assets/category photos/Objets de décorations2.jpg"),
        description:
          "Personnalisez vos espaces avec notre sélection d'articles de décoration, spécialement conçus pour répondre aux exigences des entreprises.",
      },
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
    backProduitList: [],
    backUserList: [],
  },
  mutations: {
    setCurrentUser(state, user) {
      // ========= test ========
      state.currentUser = user;
    },
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

    clearPanier(state) {
      state.commandes = [];
      localStorage.removeItem("commandes");
    },


    backSetProduitListFromLocalStorage(state, produits){
      state.backProduitList = produits;
    },
    backSetUserListFromLocalStorage(state, users){
      state.backUserList = users;
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

    addProduitToCommande(state, prodId) {
      let produitInfo = state.produits.find((p) => p.id === prodId);
      if (!produitInfo) return;

      let userId = state.currentUtilisateur?.id;
      if (!userId) return; // j'ai juste ajouté cette ligne pour s'assurer qu'on a un userId issu d'un utilisateur connecté

      // const currentUser = state.currentUtilisateur;
      // if (!currentUser) return;

      let commandeExistante = state.commandes.find((commande) =>
        commande.produits.some((p) => p.produitId === prodId)
      );
      // let commandeExistante = state.commandes.find(
      //   (commande) =>
      //     commande.userId === currentUser.id &&
      //     commande.produits.some((p) => p.produitId === prodId)
      // );

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
          // userId: currentUser.id,
          userId: userId,
          // userId: this.state.currentUserId, // juste un test
        });
      }
      localStorage.setItem("commandes", JSON.stringify(state.commandes));
    },

        //trouve l'index de l'objet et le supprime
        backRemoveProduit(state, prodId) {
          const indexProd = state.produits.map((e) => e.id).indexOf(prodId);
          state.produits.splice(indexProd, 1);
        },
        backRemoveUser(state, userId) {
          const indexUser = state.utilisateurs.map((e) => e.id).indexOf(userId);
          state.utilisateurs.splice(indexUser, 1);
        },
        backAddProduit(state, newObj){
          let maxId = 0
          for (let i = 0; i < state.produits.length; i++){
            if (state.produits.map((e) => e.id)[i] > maxId) {
              maxId = state.produits.map((e) => e.id)[i];
            }
          }
          newObj.id = maxId + 1;
          state.produits.push(newObj);
        },
        backModProduit(state, modObj){
          const index = state.produits.findIndex(
            (prod) => prod.id === modObj.key2)
            if (index !== -1) {
              state.utilisateurs[index] = {
                ...state.utilisateurs[index],
                ...modObj.key2,
              };}
          // state.produits[index] = {...modObj.key1}
        },
        backModUser(state, modObj){
          const indexProd = state.utilisateurs.map((e) => e.id).indexOf(parseInt(modObj.key2));
          state.utilisateurs[indexProd] = {...modObj.key1}
        },


    saveCommandeToLocalStorage(state, commande) {
      let userId = state.currentUtilisateur?.id;
      if (!userId) return; //j'applique la même logique que dans la mutation addProduitToCommande

      // const currentUser = state.currentUtilisateur;

      if (commande && Array.isArray(commande.produits)) {
        state.commandeValider.push({
          id: state.commandeValider.length + 1,
          produits: commande.produits.map((p) => ({
            produitId: p.produitId,
            titre: p.titre,
            quantite: p.quantite,
          })),
          countTotal: commande.countTotal,

          // userId: currentUser.id,
          // userId: commande.userId,
          userId: userId,
        });
        localStorage.setItem(
          "commandeValider",
          JSON.stringify(state.commandeValider)
        );
      } else {
        console.error("Invalid commande object", commande);
      }
    },

    updateUtilisateur(state, updatedData) {
      const index = state.utilisateurs.findIndex(
        (user) => user.id === updatedData.id
      );

      if (index !== -1) {
        state.utilisateurs[index] = {
          ...state.utilisateurs[index],
          ...updatedData,
        };

        if (state.currentUserId === updatedData.id) {
          state.currentUtilisateur = {
            ...state.utilisateurs[index],
          };

          localStorage.setItem(
            "currentUtilisateur",
            JSON.stringify(state.currentUtilisateur)
          );
        }
      }
    },

    toggleAdminView(state) {
      state.isAdminView = !state.isAdminView;
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
      if (currentUtilisateur) {
        state.currentUtilisateur = JSON.parse(currentUtilisateur);
        state.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", true);
      } else {
        state.currentUtilisateur = null;
        state.isLoggedIn = false;
      }
    },

    setCurrentUtilisateur(state, userId) {
      const utilisateur = state.utilisateurs.find((user) => user.id === userId);

      if (utilisateur) {
        state.currentUtilisateur = utilisateur;
        state.currentUserId = userId;
        localStorage.setItem("currentUtilisateur", JSON.stringify(utilisateur));

        const savedCommande = state.savedCommandes.find(
          (savedCommande) => savedCommande.userId === userId
        );
        if (savedCommande) {
          state.commandes = savedCommande.commandes;
        } else {
          state.commandes = [];
        }
      }
    },

    clearCurrentUtilisateur(state) {
      if (state.currentUtilisateur) {
        state.previousUtilisateur = state.currentUtilisateur;
      }

      state.currentUtilisateur = null;
      state.isLoggedIn = false;
      localStorage.removeItem("currentUtilisateur");
    },

    addUser(state, newUser) {
      state.utilisateurs.push(newUser);
      localStorage.setItem("utilisateurs", JSON.stringify(state.utilisateurs));
    },

    setUtilisateursFromLocalStorage(state) {
      const storedUtilisateurs = JSON.parse(
        localStorage.getItem("utilisateurs")
      );
      if (storedUtilisateurs && Array.isArray(storedUtilisateurs)) {
        state.utilisateurs = storedUtilisateurs;
      }
    },

    updateUserForCommandes(state, userId) {
      // alert("Mutation test : userId for mutation UpdateUserForCommandes : " + userId);
      let commandes = state.commandes.map((commande) => {
        if (!commande.userId || commande.userId === 1) {
          commande.userId = userId;
        }
        return commande;
      });
      localStorage.setItem("commandes", JSON.stringify(commandes));
    },

    setUserIdForcommande(state, { userId, commandeId }) {
      const commande = state.commandeValider.find((c) => c.id === commandeId);

      if (commande) {
        commande.userId = userId;
        localStorage.setItem(
          "commandeValider",
          JSON.stringify(state.commandeValider)
        );
      } else {
        console.error(`Commande avec l'ID ${commandeId} non trouvée.`);
      }
    },

    //la sauvegarde des commandes de l'utilisateur se fait lors de la déconnexion
    //
    saveCommandesForUtilisateur(state) {
      const currentUserId = state.currentUtilisateur?.id;
      if (!currentUserId) return;

      const existingSavedCommande = state.savedCommandes.find(
        (savedCommande) => savedCommande.userId === currentUserId
      );

      if (existingSavedCommande) {
        existingSavedCommande.commandes = [...state.commandes];
      } else {
        state.savedCommandes.push({
          userId: currentUserId,
          commandes: [...state.commandes],
        });
      }
      localStorage.setItem(
        "savedCommandes",
        JSON.stringify(state.savedCommandes)
      );
    },

    //la restauration des commandes de l'utilisateur se fait lors de la connexion
    setPanierForCurrentUser(state, userId) {
      const savedCommande = state.savedCommandes.find(
        (savedCommande) => savedCommande.userId === userId
      );
      if (savedCommande) {
        state.commandes = savedCommande.commandes;
      } else {
        state.commandes = [];
      }
      localStorage.setItem("commandes", JSON.stringify(state.commandes));
    },

    // une fois la vente confirmée on supprime la commande de la liste des commandes sauvegardées
    clearSavedCommandesForUser(state, userId) {
      state.savedCommandes = state.savedCommandes.filter(
        (savedCommande) => savedCommande.userId !== userId
      );
      localStorage.setItem("savedCommandes", JSON.stringify(state.savedCommandes));
    }
    

    // ----------------------- Fin mutations clément //


  },

  actions: {
    // ========= test ==========
    loadCurrentUser({ commit }) {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      if (user) {
        commit("setCurrentUser", user);
      }
    },
    // =========== test ==========
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
    removeProduit({ commit }, prodId) {
      commit("removeProduit", prodId);
    },

    loadCommandesFromLocalStorage({ commit, state }) {
      const commandes = JSON.parse(localStorage.getItem("commandes"));
      if (commandes && state.currentUtilisateur) {
        const commandesUtitilisateur = commandes.filter(
          (commande) => commande.userId === state.currentUtilisateur.id
        );
        commit("setCommandesFromLocalStorage", commandesUtitilisateur);
      } else {
        commit("setCommandesFromLocalStorage", []);
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

    // --------------------- Début actions Clément

    loadPanierForCurrentUser({ commit, state }) {
      const userId = state.currentUtilisateur?.id;
      if (userId) {
        commit("setPanierForCurrentUser", userId);
      }
    },

    loadCurrentUtilisateurFromLocalStorage({ commit }) {
      const currentUtilisateur = localStorage.getItem("currentUtilisateur");

      if (currentUtilisateur) {
        const utilisateur = JSON.parse(currentUtilisateur);

        commit("setCurrentUtilisateur", JSON.parse(currentUtilisateur));
        const savedCommandes = JSON.parse(
          localStorage.getItem("savedCommandes")
        );

        if (savedCommandes) {
          const userCommandes = savedCommandes.find(
            (commande) => commande.userId === utilisateur.id
          );
          if (userCommandes) {
            commit("setCommandesFromLocalStorage", userCommandes.commandes);
          }
        }
      }
    },

    // ici on charge les utilisateurs depuis le local storage

    loadUtilisateurArrayFromLocalStorage({commit}){ 
      // commit("setUtilisateursFromLocalStorage");
      const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs'));
      if(utilisateurs && Array.isArray(utilisateurs)){


        commit("setUtilisateursFromLocalStorage", utilisateurs);
      }
    },

    // loadUtilisateursArrayFromLocalStorage({commit}) {
    //   commit("setUtilisateursFromLocalStorage");
    // },

    registerUser({ commit }, newUser) {
      const id = this.state.utilisateurs.length + 1;
      const userWithId = { id, ...newUser };
      commit("addUser", userWithId);
      return { success: true };
    },

    setUserIdForCommande({ commit }, userId) {
      commit("setUserIdForcommande", userId);
    },

    updateUserIdInCommandes({ commit }, payload) {
      commit("updateUserForCommandes", payload.userId);
    },

    saveCommandesForUtilisateur({ commit }) {
      commit("saveCommandeForUtilisateur");
    },

    clearSavedCommandesForUser({ commit, state }) {
      const userId = state.currentUtilisateur?.id;
      if (userId) {
        commit("clearSavedCommandesForUser", userId);
      }
    }
     // ----------------------- Fin action Clément//

  },

  getters: {
    currentUser(state) {
      return state.utilisateurs.find((user) => user.id === state.currentUserId);
    },
    isLoggedIn(state, getters) {
      return !!getters.currentUser;
    },
    isAdmin(state, getters) {
      return getters.currentUser && getters.currentUser.role === "ADMIN";
    },

    isUser(state, getters) {
      return getters.currentUser && getters.currentUser.role === "USER";
    },

    isAdminView(state) {
      return state.isAdminView;
    },

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

    isUserLoggedIn: (state) => {
      return !!state.currentUtilisateur;
    },

    // --------------------- getters Clément

    getUtilisateurs: (state) => state.utilisateurs,

    getUtilisateurByEmail: (state) => (email) =>
      state.utilisateurs.find((user) => user.email === email),


    getUtilisateurBySiret: (state) => (siret) =>
      state.utilisateurs.find((user) => user.siret === siret),

    getUtilisateurByRaisonSociale: (state) => (raisonSociale) =>
      state.utilisateurs.find((user) => user.raisonSociale === raisonSociale),

     filteredCommandes : (state) => {
      const userId = state.currentUtilisateur?.id || state.previousUtilisateur?.id;
      return state.commandes.filter((commande) => commande.userId === userId);
    },

    getPreviousUtilisateur: (state) => {
      return state.previousUtilisateur;
    },

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
      return produitsWithQuantite.sort((a, b) => b.quantite - a.quantite).slice(0, 8); // top 8 best seller
    },
    // ========================================================================================================\\
  },

  modules: {},
});
