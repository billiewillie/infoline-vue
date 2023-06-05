<template>
  <router-view class="wrapper" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
  <router-view name="Header" class="header"/>
  <router-view name="Sidebar" class="aside"/>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import MobileNav from "@/components/MobileNav.vue";
</script>

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
