<template>
  <div
      class="burger"
      :class="{'active': isActiveMobileNav}"
      @click="$emit('toggleStatusMobileNav', !isActiveMobileNav)"
  >
    <span></span>
  </div>
  <teleport to="body">
    <div
        class="mobile-nav"
        :class="{'show': isActiveMobileNav}"
    >
      <div class="mobile-nav__content">
        <BaseNav @click="$emit('toggleStatusMobileNav', false)"/>
        <DocsNav @click="$emit('toggleStatusMobileNav', false)"/>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import {ref} from "vue";
import DocsNav from "@/components/DocsNav.vue";
import BaseNav from "@/components/BaseNav.vue";

const isActive = ref(false);
const emit = defineEmits(['toggleStatusMobileNav']);
const props = defineProps({
  isActiveMobileNav: {
    type: Boolean,
    default: false
  }
});

</script>

<style>
.burger {
  height: 100%;
  width: 56px;
  background-color: var(--blue-light);

  @media (min-width: 1280px) {
    display: none;
  }
}

.burger span {
  height: 2px;
  width: 15px;
  background-color: var(--white);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 15px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  opacity: 1;
  transition: opacity 0.3s ease-in-out, right 0.3s ease-in-out;
}

.burger.active span {
  opacity: 0;
  right: 25px;
}

.burger::before,
.burger::after {
  position: absolute;
  content: "";
  height: 2px;
  width: 21px;
  right: 18px;
  transform-origin: right center;
  transition: transform 0.3s ease-in-out;
  background-color: var(--white);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.burger::before {
  top: 20px;
}

.burger.active::before {
  transform: rotate(-43deg);
}

.burger::after {
  bottom: 20px;
}

.burger.active::after {
  transform: rotate(43deg);
}

.mobile-nav {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 56px;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: var(--blue-dark);
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: visibility .3s ease-in-out, opacity .3s ease-in-out, left .3s ease-in-out;
}

.mobile-nav.show {
  opacity: 1;
  visibility: visible;
  left: 0;
}

.mobile-nav .mobile-nav__content {
  width: 100%;
}

.mobile-nav .base-nav__item,
.mobile-nav .docs-nav__item {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--black);
}

.mobile-nav .base-nav__item a,
.mobile-nav .docs-nav__item a span {
  display: flex;
  padding: 20px 0;
  font-size: 21px;
  font-weight: 700;
}
</style>