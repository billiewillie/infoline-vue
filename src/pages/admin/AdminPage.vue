<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class="title">Админка</h1>
    </div>
    <div class="content">
      <router-link
          v-for="page in pages"
          :to="`/admin/${page.path}`"
          :key="page.path"
          class="shadow rounded admin-item">{{ page.title }}</router-link>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const pages = ref([
  {
    title: 'Персонал',
    path: 'employees'
  },
  {
    title: 'Мероприятия',
    path: 'events'
  },
  {
    title: 'Новости',
    path: 'news'
  },
  {
    title: 'Маркетинговые материалы',
    path: 'marketing-materials'
  }
])
</script>

<style scoped>
.content {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
}

.admin-item {
  background-color: var(--white);
  padding: 8px;
}
</style>