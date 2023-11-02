<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class="title">Админка</h1>
    </div>
    <div class="content shadow rounded">
      <router-link to="/admin/events">Мероприятия</router-link>
      <router-link to="/admin/news">Новости</router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.content {
  background-color: var(--white);
  padding: 16px;
}
</style>