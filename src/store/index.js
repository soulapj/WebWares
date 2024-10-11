import { createStore } from 'vuex'
//Le store est un objet qui contient l'ensemble des données de l'application dans Vuex.
//Rappel : C'est un système de gestion d'état pour les applications Vue.js. 
//Les mutations sont la seule façon de modifier l'état dans le store
//Les commit permettent de déclencher des mutations
//Syntaxe : store.commit('nomDeLaMutation', autreParamètre)

// Le principe : 
// 1. Le state continent un user qui stocke des informations, ça peut être ce que vous voulez.
// 2. Le getter isAuthenticated permet de vérifier si l'utilisateur est autgentifié 
// 3. Le getter userRole permet de vérifier le rôle de l'utilisateur
// 4. La mutation setUser permet de définir l'utilisateur 
// 5. La mutation logout permet de déconnecter l'utilisateur
// 6. L'action login permet de déclencher la mutation setUser
// 7. L'action logout permet de déclencher la mutation logout

export default createStore({
  state: {
    users: [
      // on a déjà deux utisilasteurs un admin et un utilisateur régulier cela nous sert d'exemple pour visualiser les rôles
      // attribués à chaque utilisateur

      {name : 'Admin user', role : 'admin', email :'admin@exemple.com'},
      {name : 'Regular user', role : 'user', email :'user@exemple.com'}
      ],
    currentUser: null, // au début on doit s'enregistrer, donc le current user est null il sera définit par la suite
    previousUser : null // nous permettra de stocker l'utilisateur précédent avant de se déconnecter
  },

  getters: {
    // déjà on doit retourner les utilisateurs, les getters nous retournent les utilisateurs, on peut les récupérer
    // par leur email, et on peut aussi récupérer le rôle de l'utilisateur
    getAllusers: state => state.users,

    getUserbyEmail : state => email => state.users.find(user => user.email === email),

    getUserRole: (state, getters) => email => {
      const user = getters.getUserbyEmail(email);
      return user ? user.role : null; //nécessairement l'utilisateur il a un rôle, donc le ternaire le retournera vu qu'il n'est pas null
    }
  },

  mutations: {
    setUser(state, user){
    
      // déjà on vérfiie si l'utilisateur existe dans notre ensemble d'utilisateurs avec son email
    
      const existingUser = state.users.find (u => u.email === user.email);
      if (!existingUser)
      {
        state.users.push(user);
      }
      state.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert(`Vous êtes connecté en tant que ${user.role}`);

    },

    //ajoute un utilisateur dans notre tableau d'utilisateurs
    addUser(state, newUser)
    {
      state.users.push(newUser);
      alert(`Nouvel utilisateur créé : ${newUser.name} avec le rôle ${newUser.role}`);
      localStorage.setItem('users', JSON.stringify(state.users));

    },

    loginExistingUser(state, user)
    {
      state.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert(` Bienvenue à nouveau${user.name}, vous êtes connecté en tant que ${user.role}`);

    },

    //on aura besoin de récupérer l'utilisateur connecté 
    loadUserFromLocalStorage(state) {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers)
      {
        state.currentUser = JSON.parse(storedUsers);
      }
    },

    //on recupère le tableau des utilisateurs dans le local storage
    //les deux méthodes seront appelées lors de la création du store
    loadCurrentUserFromLocalStorage(state) {
      const storedUsers = localStorage.getItem('currentUser');
      if (storedUsers)
      {
        state.currentUser = JSON.parse(storedUsers);
      }

    },

    //on aura besoin de vérifier son rôle
    checkRole(state, {email, role})
    {
      const user = state.users.find( u=> u.email === email);
      alert('votre role est : ' + user.role);
      return user && user.role === role;
    },

    //on peut vouloire lui permettre de se déconnecter
    logout(state) {
      if(state.currentUser)
        {
          state.previousUser = {...state.currentUser};
          state.currentUser = {...state.currentUser, role: 'disconnected'};
          localStorage.setItem('previousUser', JSON.stringify(state.previousUser));
          localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
        }

    },

    //on restaure l'utilisateur précédent
    restoreUser(state){
      const storedPreviousUser = localStorage.getItem('previousUser');
      if (storedPreviousUser)
      {
        state.currentUser = {...storedPreviousUser};
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
      }
    }
  },

  
  actions: {

    log({commit, getters, }, {email, name, role})
    {
      const existingUser = getters.getUserbyEmail(email);

      if (!existingUser) {
        const newUser = {name, email, role};
        commit('addUser', newUser)
        commit('setUser', newUser);
        alert(`Nouvel utilisateur créé : ${name} avec le rôle ${role}`);
      }
      else 
      {
        // Si l'utilisateur existe déjà, on le conncte directement en affichant un message, en lui passant l'existing user
        commit('loginExistingUser', existingUser);
        alert(`Bienvenue à nouveau ${existingUser.name}, vous êtes connecté en tant que ${existingUser.role}`);
       
      }
    }

  },
  modules: {
  }
})
