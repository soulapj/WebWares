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
        <div v-if="showUser" class="user-pane">
            <!-- <i class="fa-solid fa-right-from-bracket fa-lg"></i> -->
            <p class="welcome-msg"><i class="fa-solid fa-door-open fa-lg"></i> {{ currentUser.raisonSociale }}</p>
            <ButtonComponents label="Profil" type="login" @click="$router.push('/profile/:id')" />
            <ButtonComponents label="Déconnexion" type="logout" @click="isLoggedIn = false" />
            <ButtonComponents label="test" type="register" v-if="isAdmin && isLoggedIn" @click="toggleAdminView" />
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
        }),
        ...mapGetters([
            "currentUser",
            "isLoggedIn",
            "isAdmin",
            "isUser",
            "isAdminView",
        ]),
    },
    methods: {
        toggleCategories() {
            this.showCategories = !this.showCategories;
            if (this.showCategories) {
                this.showUser = false;
            }
        },
        toggleUser() {
            this.showUser = !this.showUser;
            if (this.showUser) {
                this.showCategories = false;
            }
        },
        toggleAdminView() {
            this.$store.commit("toggleAdminView");
        },
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
    color: var(--color-secondary);
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.5rem;
    text-align: center;
    bottom: 88px;
    left: 0;
    right: 0;
    top: auto;
    background-color: var(--color-background);
    padding: 1.5rem;
    border-bottom: 1px solid var(--color-secondary);
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

.user-pane {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: var(--spacing);
    /* padding: 0; */
    /* height: 700px; */
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
