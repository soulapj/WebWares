import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: 'WebWares - Home' }, 
  },
  {
    path: "/produit",
    name: "ListeProduit",

    component: () => import("../views/ListeProduit.vue"),
    meta: { title: 'WebWares - Product List' },
    
  },
  {
    path: "/panier",
    name: "PanierProduit",

    component: () => import("../views/PanierProduit.vue"),
    meta: { title: 'WebWares - Shopping Cart' }, 
  },
  {
    path: "/product-details/:id",
    name: "DetailProduit",

    component: () => import("../views/DetailProduit.vue"),
  },
  {
    path: "/categorie/:id", 
    name: "CategorieProduits",

    component: () => import("../views/CategorieProduits.vue"), 
  },
  {
    path: "/mentions-legales",
    name: "MentionsLegales",

    component: () => import("../views/MentionsLegales.vue"),
    meta: { title: 'WebWares - Mentions Legales' },
  },
  {
    path: "/politique-confidentialite",
    name: "PolitiqueConfidentialite",

    component: () => import("../views/PolitiqueConfidentialite.vue"),
    meta: { title: 'WebWares - Politique Confidentialite' },
  },
  {
    path: "/conditions-utilisation",
    name: "ConditionsUtilisation",

    component: () => import("../views/ConditionsUtilisation.vue"),
    meta: { title: 'WebWares - Conditions Utilisation' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'WebWares'; 
  next();
});

export default router;
