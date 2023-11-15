<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class="title">Админка</h1>
    </div>
    <div class="content">
      <router-link to="/admin/events" class="shadow rounded admin-item">Мероприятия</router-link>
      <router-link to="/admin/news" class="shadow rounded admin-item">Новости</router-link>
    </div>
  </div>
</template>

<script setup>
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