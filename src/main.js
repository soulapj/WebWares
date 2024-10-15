import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// je vais tenter un truc : on va gérer un ID unique par session, ça permettra de gérer les sessions multiples

function generateUniqueTabId(){
    return 'tab_' + Math.random().toString(36).substr(2, 9);
}

//récupérer un ID unique pour l'onglet
let tabId = sessionStorage.getItem('tabId');
if (!tabId) {
    tabId = generateUniqueTabId();
    sessionStorage.setItem('tabId', tabId);
}

function loadCurrentUser()
{
    const storeUser = sessionStorage.getItem(`currentUtilisateur_${tabId}`);
    const localuser = localStorage.getItem(`currentUtilisateur_${tabId}`);

    if(storeUser) {
        store.dispatch('login', JSON.parse(storeUser));
    }
    else if(localuser){
        store.dispatch('login', JSON.parse(localuser));
        sessionStorage.setItem(`currentUtilisateur_${tabId}`, localuser);
    }
}



if(!store.getters.isLoggedIn)
{
    loadCurrentUser();

}



store.subscribe((mutation) => {
    if (mutation.type === 'loginExistingUser') {
      sessionStorage.setItem(`currentUtilisateur_${tabId}`, JSON.stringify(mutation.payload));
    } else if (mutation.type === 'logoutUser') {
      sessionStorage.removeItem(`currentUtilisateur_${tabId}`);
    }
  });

// nécessaire pour pouvoir charger correctement nos données depuis le local storage sinon on ne peut pas récupérer les entreprises que l'on a inscrites
store.dispatch('loadUtilisateursFromLocalStorage'); 
// ---------------------- //    

createApp(App).use(store).use(router).mount('#app')
