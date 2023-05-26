<template>
  <aside class="aside">
    <DocsNav :withIcons="true"/>
    <button class="button-up">UP</button>
  </aside>
</template>

<script setup>
import DocsNav from "@/components/DocsNav.vue";
</script>

<style>
aside.aside {
  display: none;
  transition: right 0.3s ease-in-out;

  @media (min-width: 1280px) {
    position: fixed;
    right: calc(100% - 50px);
    top: 50px;
    width: 190px;
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

aside.aside:hover {
  right: calc(100% - 190px);
}

aside.aside .docs-nav__menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--blue-dark);

  @media (min-width: 1280px) {
    align-items: flex-end;
    padding: 16px;
    row-gap: 57px;
  }

  @media (min-width: 1920px) {
    padding: 20px;
  }
}

aside.aside .docs-nav__link {
  display: flex;
  column-gap: 25px;
  align-items: center;
  color: var(--blue-dark);

}

.aside.aside .docs-nav__title {
  font-size: 13px;
  font-weight: 400;
  text-align: right;
  max-width: 100px;
}

aside.aside .docs-nav__icon {
  display: flex;
}

aside.aside .docs-nav__icon svg {
  width: 18px;
  height: 18px;

  @media (min-width: 1920px) {
    width: 30px;
    height: 30px;
  }
}
</style>