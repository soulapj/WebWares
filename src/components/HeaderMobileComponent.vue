<template>
    <div class="mobile-nav-container">
        <router-link to="/" @click="() => { showCategories = false; showUser = false; }">
            <div><i class="fa-solid fa-house fa-2xl"></i></div>
        </router-link>

        <router-link to="/produit" @click="() => { showCategories = false; showUser = false; }">
            <div><i class="fa-solid fa-magnifying-glass fa-2xl"></i></div>
        </router-link>

        <div @click="toggleCategories">
            <i class="fa-solid fa-list fa-2xl"></i>
        </div>

        <div v-if="showCategories" class="category-pane">
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <router-link class="category-pane-links"
                        :to="{ name: 'CategorieProduits', params: { id: category.id } }">
                        {{ category.name }}
                    </router-link>
                    <i class="fa-solid fa-chevron-right fa-lg"></i>
                </li>
            </ul>
        </div>

        <router-link to="/panier" @click="() => { showCategories = false; showUser = false; }">
            <div><i class="fa-sharp fa-solid fa-cart-shopping fa-2xl"></i></div>
        </router-link>

        <div @click="toggleUser">
            <i class="fa-solid fa-user fa-2xl"></i>
        </div>

        <div v-if="showUser" class="user-pane" >
            <div v-if="!isLoggedIn" @click="showUser = false">
                <p>Veuillez vous connecter</p>
                <ButtonComponents to="/login" label="Connexion" type="login" @click="loginAndClose" />
                <ButtonComponents to="/signup" label="S'inscrire" type="register" @click="registerAndClose" />
            </div>
            <div v-else>
                <p class="welcome-msg">Bienvenue {{ currentUser.raisonSociale }}</p>
                <ButtonComponents label="Profil" type="login" @click="$router.push('/profile/:id')" />
                <ButtonComponents label="Déconnexion" type="logout" @click="logoutAndClose" />
            </div>
        </div>
    </div>

</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import ButtonComponents from "./ButtonComponents.vue";
export default {
    components: {
        ButtonComponents,
    },
    props: {
        isLoggedIn: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            showCategories: false,
            showUser: false,
        };
    },

    computed: {
        ...mapState({
            categories: (state) => state.categories,

            currentUser: (state) =>
                state.utilisateurs.find((user) => user.id === state.currentUserId),
            commandes: (state) => state.commandes,
        }),
        ...mapGetters([
            "currentUser",
            "isLoggedIn",
            "isAdmin",
            "isUser",
            "isAdminView",
        ]),
    },
    // created() {
    //     const savedLoginStatus = localStorage.getItem("isLoggedIn");
    //     this.isLoggedIn = savedLoginStatus === "true"; // Convert string to boolean

    //     // Alternatively, handle a missing value
    //     if (!savedLoginStatus) {
    //         this.isLoggedIn = false; // Default to false if not present
    //         console.log(this.isLoggedIn);

    //     }
    // },
    methods: {
        // ===============Arash============== \\
        toggleCategories(event) {
            event.stopPropagation();
            this.showCategories = !this.showCategories;
            if (this.showCategories) {
                this.showUser = false;
            }
        },
        toggleUser(event) {
            event.stopPropagation();
            this.showUser = !this.showUser;
            if (this.showUser) {
                this.showCategories = false;
            }
        },
        logoutAndClose() {
            this.logout();
            this.showUser = false;
        },
        loginAndClose() {
            this.login();
            this.showUser = false;
        },
        registerAndClose() {
            this.goToRegister();
            this.showUser = false;
        },
       // ============Arash end=========== \\
  },
       
        logout() {
            // ------------ Clément

            // alert("Déconnexion");
            //ici cette action permet de sauvegarder les commandes de le tableau des savedCommandes
            this.$store.commit("saveCommandesForUtilisateur");
            this.$store.commit("clearCurrentUtilisateur");

            localStorage.removeItem("currentUtilisateur");

            this.$emit("user-logged-in", false);
            // alert(this.isLoggedIn);
            this.$router.push("/login");
            // ------------ //
        },
        login() {
            // this.isLoggedIn = true; le problème était que ça nous mettait directement en connecté donc passé en commentaire
            this.$router.push("/login");
        },
        goToRegister() {
            this.$router.push("/register");
        },
};
</script>

<style scoped>
.mobile-nav-container {
    background-color: var(--color-background);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    padding: 2.2rem;
    position: sticky;
    bottom: 0;
}

i {
    color: var(--color-secondary);
}

.category-pane,
.user-pane {
    position: fixed;
    background-color: var(--color-background);
    color: var(--color-secondary);
    border-bottom: 1px solid var(--color-secondary);
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1.5rem;
    text-align: center;
    bottom: 88px;
    left: 0;
    right: 0;
    top: auto;
    transition: 0.3s ease-in-out;
}

.chevron {
    color: var(--color-secondary);
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.category-pane-links {
    text-decoration: none;
}

.user-pane>div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
}


.user-pane p {
    margin: 0;
}

@media (min-width: 1260px) {
    .mobile-nav-container {
        display: none;
    }
}
</style>
