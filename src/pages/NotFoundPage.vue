<script setup>

import IconArrow from "@/components/icons/IconArrow.vue";
import IconHouse from "@/components/icons/IconHouse.vue";
import IconNotFound from "@/components/icons/IconNotFound.vue";
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
    <div class="custom-wrapper rounded shadow">
      <div class="icon main-icon">
        <IconNotFound/>
      </div>
      <h1 class="title">Данная страница не существует!</h1>
      <a @click="$router.go(-1)" class="link">
        <span class="icon rounded link-back">
          <IconArrow/>
        </span>
        <span>Назад</span>
      </a>
      <router-link to="/" class="link">
        <span class="icon rounded">
          <IconHouse/>
        </span>
        <span>На главную</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

.main-icon {
  padding-bottom: 38px;
  border-bottom: 2px solid var(--gray-medium);
  width: 100%;
}

.main-icon svg {
  max-width: 150px;
}

.custom-wrapper {
  background-color: var(--white);
}

.title {
  color: var(--blue-dark);
}

.link {
  display: flex;
  column-gap: 10px;
  align-items: center;
  width: 128px;
  cursor: pointer;
}

.link-back svg {
  transform: rotate(180deg);
}

.link span {
  color: var(--gray-dark);
  font-weight: 700;
}

.link .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: var(--blue-light);

}

.link .icon svg {
  width: 18px;
  height: 18px;
}
</style>