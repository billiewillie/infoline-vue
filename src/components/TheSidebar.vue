<template>
  <aside class="aside">
    <DocsNav :withIcons="true"/>
    <button class="button-up">UP</button>
  </aside>
</template>

<script setup>
import DocsNav from "@/components/DocsNav.vue";
</script>

<style scoped>
aside.aside {
  display: none;
  transition: right 0.3s ease-in-out;

  @media (min-width: 1280px) {
    position: fixed;
    right: calc(100% - 50px);
    top: 50px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 50px);
    background-color: var(--white);
    z-index: 1;
    box-shadow: var(--secondary-shadow);
  }

  @media (min-width: 1920px) {
    top: 70px;
    height: calc(100vh - 70px);
    right: calc(100% - 300px);
  }
}

aside.aside:hover {
  @media (min-width: 1280px) {
    right: calc(100% - 300px);
  }

  @media (min-width: 1920px) {
    right: calc(100% - 300px);
  }
}

aside.aside .docs-nav__menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--blue-dark);

  @media (min-width: 1280px) {
    align-items: flex-end;
    padding: 16px 20px;
    row-gap: 57px;
  }
}
</style>