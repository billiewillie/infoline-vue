<template>
    <header class="header">
        <TheLogo/>
        <BaseNav/>
        <TheSearch/>
        <HeaderProfile/>
    </header>
</template>

<script setup>
import TheLogo from "@/components/TheLogo.vue";
import BaseNav from "@/components/BaseNav.vue";
import TheSearch from "@/components/TheSearch.vue";
import HeaderProfile from "@/components/HeaderProfile.vue";
</script>

<style scoped>
.header {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
    background-color: var(--blue-dark);

    @media (min-width: 1280px) {
        height: 50px;
        padding-right: 16px;
    }

    @media (min-width: 1920px) {
        height: 70px;
        padding-right: 20px;
    }
}

.header .base-nav__menu {
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        column-gap: 10px;
    }
}

.header .base-nav__link {
    font-weight: 700;
    color: var(--white);
    padding: 6px 10px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;

    @media (min-width: 1280px) {
        font-size: 11px;
    }

    @media (min-width: 1920px) {
        font-size: 13px;
    }
}

.header .base-nav__link.router-link-active {
    background-color: var(--blue-light);
}

.header .base-nav__link:hover {
    color: var(--blue-light);
}

.header .base-nav__link.router-link-active:hover {
    color: var(--white);
}
</style>