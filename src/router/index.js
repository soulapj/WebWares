import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produit",
    name: "ListeProduit",

    component: () => import("../views/ListeProduit.vue"),
  },
  {
    path: "/panier",
    name: "PanierProduit",

    component: () => import("../views/PanierProduit.vue"),
  },
  {
    path: "/product-details/:id",
    name: "DetailProduit",
    component: () => import("../views/DetailProduit.vue"),
  },
  {
    path: "/productback",
    name: "DetailProduit",
    component: () => import("../views/BackProduit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
