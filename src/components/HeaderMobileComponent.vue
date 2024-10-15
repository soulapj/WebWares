<template>
    <div class="mobile-nav-container">
        <router-link to="/">
            <div><i class="fa-solid fa-house fa-2xl"></i></div>
        </router-link>
        <router-link to="/produit">
            <div><i class="fa-solid fa-magnifying-glass fa-2xl"></i></div>
        </router-link>
        <router-link to="/categorie/:id">
            <div><i class="fa-solid fa-list fa-2xl"></i></div>
        </router-link>
        <router-link to="/panier">
            <div><i class="fa-sharp fa-solid fa-cart-shopping fa-2xl"></i></div>
        </router-link>
        <router-link to="/">
            <div><i class="fa-solid fa-user fa-2xl"></i></div>
        </router-link>

    </div>
</template>

<style scoped>
.mobile-nav-container {
    background-color: var(--color-background);
    /* background-color: var(--color-secondary); */
    display: flex;
    justify-content: space-between;
    padding: 2.2rem;
    position: sticky;
    bottom: 0;
}

i {
    /* color: var(--color-accent); */
    color: var(--color-secondary);
}

@media (min-width: 768px) {
    .mobile-nav-container {
        display: none;
    }
}
</style>