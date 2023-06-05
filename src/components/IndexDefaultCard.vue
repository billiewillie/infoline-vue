<template>
  <router-link
      :to="`${link}`" class="default-card shadow rounded"
  >
    <span class="icon">
      <component :is="renderIcon(component)"/>
    </span>
    <h2 class="title">
      {{ title }}
      <span class="line"></span>
    </h2>
    <p class="text">
      {{ text }}
    </p>
  </router-link>
</template>

<script setup>
import IconMarketingDocs from "@/components/icons/IconMarketingDocs.vue";
import IconUpdates from "@/components/icons/IconUpdates.vue";
import IconOrders from "@/components/icons/IconOrders.vue";
import {onMounted} from "vue";

const props = defineProps({
  title: String,
  text: String,
  background: String,
  component: String,
  link: String
})

function renderIcon(icon) {
  switch (icon) {
    case "IconMarketingDocs":
      return IconMarketingDocs
    case "IconUpdates":
      return IconUpdates
    case "IconOrders":
      return IconOrders
  }
}
</script>

<style scoped>
.default-card {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, auto);
  padding: 40px 30px;
  text-align: center;
  row-gap: 30px;

  @media (min-width: 1280px) {
    padding: 34px 0 50px 0;
    grid-template-columns: calc(25% - 15px) 75%;
    grid-template-rows: repeat(2, 1fr);
    text-align: left;
    row-gap: 16px;
    column-gap: 15px;
  }

  @media (min-width: 1920px) {
    padding: 56px 0 50px 0;
    grid-template-columns: calc(25% - 10px) 75%;
    column-gap: 10px;
  }
}

span.icon {
  @media (min-width: 1280px) {
    display: grid;
    grid-row-start: 1;
    grid-row-end: 3;
    padding: 0 22px;
  }

  @media (min-width: 1920px) {
    padding: 0 47px;
  }
}

span.icon svg {
  width: 60px;
  height: 60px;

  @media (min-width: 1280px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1920px) {
    width: 48px;
    height: 48px;
  }
}

h2.title {
  position: relative;
  padding-bottom: 30px;
  font-size: 26px;
  font-weight: 700;
  color: var(--blue-dark);

  @media (min-width: 1280px) {
    font-size: 22px;
    padding-bottom: 25px;
    padding-right: 150px;
  }

  @media (min-width: 1920px) {
    font-size: 28px;
    padding-right: 230px;

  }
}

h2.title .line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 180px;
  height: 2px;
  opacity: 0.8;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background-color: var(--blue-light);

  @media (min-width: 1280px) {
    width: 100%;
  }
}

p.text {
  font-size: 15px;
  font-weight: 400;
  color: var(--color-text);

  @media (min-width: 1280px) {
    font-size: 11px;
    padding-right: 50px;

  }

  @media (min-width: 1920px) {
    font-size: 14px;
    padding-right: 130px;
  }
}
</style>