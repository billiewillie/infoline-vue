<script setup>
import DocsNav from "@/components/DocsNav.vue";
</script>

<template>
  <aside class="aside">
    <DocsNav/>
    <button class="button-up">UP</button>
  </aside>
</template>

<style scoped>
aside.aside {
  display: none;

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
    right: calc(100% - 70px);
  }

}

aside.aside .docs-nav__menu {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-end;
    padding: 16px 20px;
  }
}
</style>