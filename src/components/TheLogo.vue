<script setup>
import IconLogo from "@/components/icons/IconLogo.vue";
</script>

<template>
  <router-link to="/" class="logo">
    <div class="logo-icon">
      <IconLogo/>
    </div>
    <span class="logo-name">info <span class="blue">Line</span></span>
  </router-link>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  height: 100%;
  column-gap: 16px;
  @media (min-width: 1280px) {
    column-gap: 16px;
  }
  @media (min-width: 1920px) {
    column-gap: 26px;
  }

}

.logo-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--blue-light);
  @media (min-width: 1280px) {
    width: 50px;
  }
  @media (min-width: 1920px) {
    width: 70px;
  }
}

.logo-name {
  color: var(--white);
  font-weight: 700;
  font-size: 22px;

  @media (min-width: 1280px) {
    font-size: 18px;
  }
  @media (min-width: 1920px) {
    font-size: 22px;
  }
}

.logo-name .blue {
  color: var(--blue-light);
  font-weight: 700;
}
</style>