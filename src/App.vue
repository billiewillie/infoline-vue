<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import MobileNav from "@/components/MobileNav.vue";
</script>

<template>
  <router-view class="wrapper"/>
  <router-view name="Header" class="header"/>
  <router-view name="Sidebar" class="aside"/>
</template>

<style scoped>
main.main {
  display: grid;

  @media (min-width: 1280px) {
    height: calc(100vh - 82px);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 16px;
  }
}
</style>
