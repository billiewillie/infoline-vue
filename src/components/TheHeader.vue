<template>
  <Transition name="slide" appear>
    <header class="header snow">
      <div class="header-left">
        <TheLogo @click="toggleStatusMobileNav(false)"/>
        <BaseNav/>
      </div>
      <div class="header-right">
        <TheSearch :isActive="isActive" @toggleStatus="toggleStatus" @toggleStatusMobileNav="toggleStatusMobileNav"/>
        <HeaderBurger :isActiveMobileNav="isActiveMobileNav" @toggleStatusMobileNav="toggleStatusMobileNav"/>
        <HeaderProfile/>
      </div>
    </header>
  </Transition>
</template>

<script setup>
import TheLogo from '@/components/TheLogo.vue';
import BaseNav from '@/components/BaseNav.vue';
import TheSearch from '@/components/TheSearch.vue';
import HeaderProfile from '@/components/HeaderProfile.vue';
import HeaderBurger from '@/components/HeaderBurger.vue';
import {onMounted, ref} from 'vue';

const isShown = ref(false);
const isActive = ref(false);
const isActiveMobileNav = ref(false);

const toggleStatus = (value) => {
  isActive.value = value;
};

const toggleStatusMobileNav = (value) => {
  isActiveMobileNav.value = value;
};

onMounted(() => {
  isShown.value = true;
})
</script>

<style>
.header {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: var(--blue-dark);
  column-gap: 2px;
  transition: top 0.3s ease-in-out;

  @media (min-width: 1280px) {
    height: 50px;
    padding-right: 16px;
  }

  @media (min-width: 1920px) {
    height: 70px;
    padding-right: 20px;
  }
}

.header.snow {
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50%3B' xml:space='preserve'%3E%3Cstyle type='text/css'%3E.st1%7Bopacity:0.7%3Bfill:%23FFFFFF%3B%7D.st3%7Bopacity:0.1%3Bfill:%23FFFFFF%3B%7D%3C/style%3E%3Ccircle class='st3' cx='4' cy='14' r='1'/%3E%3Ccircle class='st3' cx='43' cy='3' r='1'/%3E%3Ccircle class='st3' cx='31' cy='30' r='2'/%3E%3Ccircle class='st3' cx='19' cy='23' r='1'/%3E%3Ccircle class='st3' cx='37' cy='22' r='1'/%3E%3Ccircle class='st3' cx='43' cy='16' r='1'/%3E%3Ccircle class='st3' cx='8' cy='45' r='1'/%3E%3Ccircle class='st3' cx='29' cy='39' r='1'/%3E%3Ccircle class='st3' cx='13' cy='37' r='1'/%3E%3Ccircle class='st3' cx='47' cy='32' r='1'/%3E%3Ccircle class='st3' cx='15' cy='4' r='2'/%3E%3Ccircle class='st3' cx='9' cy='27' r='1'/%3E%3Ccircle class='st3' cx='30' cy='9' r='1'/%3E%3Ccircle class='st3' cx='25' cy='15' r='1'/%3E%3Ccircle class='st3' cx='21' cy='45' r='2'/%3E%3Ccircle class='st3' cx='42' cy='45' r='1'/%3E%3C/svg%3E");
  background-position: center;
  animation: animatedBackground 22s linear infinite;
}

.header-right {
  display: flex;
  align-items: stretch;
  height: 100%;
  column-gap: 1px;

  @media (min-width: 1280px) {
    height: 100%;
    width: calc(31% - 5px);
    justify-content: space-between;
  }

  @media (min-width: 1920px) {
    width: 31%;
  }
}

.header-left {
  display: flex;
  align-items: center;
  height: 100%;
  column-gap: 70px;
}

.header .base-nav__menu {
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    column-gap: 10px;
  }

  @media (min-width: 1920px) {
    column-gap: 30px;
  }
}

.header .base-nav__link {
  font-weight: 700;
  color: var(--white);
  padding: 6px 10px;
  -webkit-border-radius: var(--radius);
  -moz-border-radius: var(--radius);
  border-radius: var(--radius);

  @media (min-width: 1280px) {
    font-size: 12px;
  }

  @media (min-width: 1920px) {
    font-size: 14px;
  }
}

.header .base-nav__link.router-link-active {
  color: var(--blue-light);
}

.header .base-nav__link:hover {
  color: var(--blue-light);
}

.header .base-nav__link.router-link-active:hover {
  color: var(--white);
}

.slide-enter-active,
.slide-leave-active{
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}

@keyframes animatedBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 300px;
  }
}
</style>
