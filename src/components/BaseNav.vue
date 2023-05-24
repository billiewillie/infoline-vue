<script setup>
import {ref} from "vue";

const navList = ref([
    {
        title: 'Новости',
        path: '/news'
    },
    {
        title: 'Новичку',
        path: '/newbie'
    },
    {
        title: 'Фотогалерея',
        path: '/galleries'
    },
    {
        title: 'Наша команда',
        path: '/team'
    },
    {
        title: 'Login',
        path: '/login'
    }
]);
</script>

<template>
    <ul class="base-nav__menu">
        <li v-for="item in navList" :key="item.title" class="base-nav__item">
            <router-link class="base-nav__link" :to="`${item.path}`">
                {{ item.title }}
            </router-link>
        </li>
    </ul>
</template>

<style scoped>
.base-nav__menu {
    justify-content: space-between;
}

.base-nav__link {
    color: var(--white);
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
</style>