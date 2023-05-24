<script setup>
import IconLogo from "@/components/icons/IconLogo.vue";
</script>

<template>
    <router-link to="/" class="logo">
        <div class="logo-icon">
            <IconLogo/>
        </div>
        <span class="logo-name">info Line</span>
    </router-link>
</template>

<style scoped>
.logo {
    display: flex;
    align-items: center;
    height: 100%;
    column-gap: 16px;
}

.logo-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: var(--blue-light);
    @media (min-width: 1280px) {
        width: 50px;
    }
    @media (min-width: 1920px) {
        width: 70px;
    }
}

.logo-name {
    color: var(--white);
}
</style>