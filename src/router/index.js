import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminExemple from '../views/AdminExemple.vue'
import UserExemple from '../views/UserExemple.vue'

//
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {

    //parfois on veut attacher des informations arbitraires à une route. C'est un peu comme un agent de la circulation
    //qui guide les véhicules selon leur catégorie. Un camion ne peut passer sur une route réservée aux vélos.
    //C'est le même principe pour les routes qui sont un tableau d'objets.
    //Une route avec une meta requiresRole: 'admin' ne peut être accédée que par un utilisateur avec le rôle admin.
    //idem pour requiresRole: 'user'
    //le champ requiresRole n'est pas une propriété intégrée à meta, c'est une propriété personnalisée
    //que j'ai ajoutée pour décrire le rôle requis pour accéder à une route.
    //chaque route peut avoir une ou plusieurs propriétés meta, c'est une convention que j'ai appliquée
    //ici meta est un objet contenant des paires clé-valeur, la clé est requiresRole et la valeur est le rôle requis

    path: '/admin',
    name: 'admin',
    component: AdminExemple,
    meta : {requiresRole: 'admin'}
  },
  {
    path: '/user',
    name: 'user',
    component: UserExemple,
    meta : {requiresRole: 'user'}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// beforeEach est une méthode de navigation globale appelée avant chaque action de navigation.

router.beforeEach((to, from, next) => { 
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const userRole = user ? user.role : null;

  //ici user accède au local storage pour récupérer l'utilisateur courant
  //étant donné que l'utilisateur a forcément un rôle et qu'il existe, le ternaire 
  //retournera systématiquement son rôle.
  //si l'utilisateur n'est pas connecté il a le rôle disconnected donc qui ne correspond pas 
  //aux requiresRole des routes réserver aux admins et aux users
  //si userRole correspond à requiresRole, alors l'utilisateur peut accéder à la route
  //via la méthode next() qui permet de continuer la navigation
  //la méthode next est automatiquement fournie par Vue Router : https://router.vuejs.org/guide/advanced/navigation-guards.html

  if(to.matched.some(record => record.meta.requiresRole)) {
    if (userRole === to.meta.requiresRole)
      {
        next();
      }
      else 
      {
        alert('Vous n\'avez pas le droit d\'accéder à cette page' );
        //la méthode next ici redirige l'utilisateur vers la page d'accueil
        next('/');
      }
  }
  else
  {
    next();
  }



});

export default router
