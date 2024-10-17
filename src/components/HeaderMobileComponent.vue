<template>
    <div class="mobile-nav-container">
        <router-link to="/" @click="this.showCategories = false">
            <div><i class="fa-solid fa-house fa-2xl"></i></div>
        </router-link>
        <router-link to="/produit" @click="this.showCategories = false">
            <div><i class="fa-solid fa-magnifying-glass fa-2xl"></i></div>
        </router-link>
        <div @click="toggleCategories" class="category-toggle">
            <i class="fa-solid fa-list fa-2xl"></i>
        </div>

        <div v-if="showCategories" class="category-pane">
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <router-link class="category-pane-links" :to="{ name: 'CategorieProduits', params: { id: category.id } }" >
                        {{ category.name }}
                    </router-link>
                    <i class="fa-solid fa-chevron-right fa-lg"></i>
                </li>
            </ul>
        </div>
        <router-link to="/panier" @click="this.showCategories = false">
            <div><i class="fa-sharp fa-solid fa-cart-shopping fa-2xl"></i></div>
        </router-link>
        <router-link to="/" @click="this.showCategories = false">
            <div><i class="fa-solid fa-user fa-2xl"></i></div>
        </router-link>

    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            showCategories: false,
        };
    },
    computed: {
        ...mapState({
            categories: (state) => state.categories,
        }),
    },
    methods: {
        toggleCategories() {
            this.showCategories = !this.showCategories;
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

.category-pane {
    position: relative;
    color: var(--color-secondary);
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.5rem;
    transition: 0.9s ease;
    /* border-radius: 5px; */
    text-align: center;
    position: fixed;
    bottom: 88px;
    left: 0;
    right: 0;
    top: auto;
    background-color: var(--color-background);
    padding: 1.5rem;
    border-bottom: 1px solid var(--color-secondary);
    /* border-top: 1px solid var(--color-secondary); */
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

@media (min-width: 1260px) {
    .mobile-nav-container {
        display: none;
    }
}
</style>