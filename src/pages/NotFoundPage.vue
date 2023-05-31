<script setup>

</script>

<template>
  <div class="custompage">
    <div class='light x1'></div>
    <div class='light x2'></div>
    <div class='light x3'></div>
    <div class='light x4'></div>
    <div class='light x5'></div>
    <div class='light x6'></div>
    <div class='light x7'></div>
    <div class='light x8'></div>
    <div class='light x9'></div>
    <div class="custom-wrapper">
      <div class="notFound-inner shadow rounded">
        <h1>Данная страница не существует</h1>
        <router-link to="/">Вернуться на главную</router-link>
        <a @click="$router.go(-1)"></a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>