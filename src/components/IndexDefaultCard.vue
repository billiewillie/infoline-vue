<template>
  <div class="default-card-wrapper">
    <router-link :to="`${link}`" class="default-card shadow rounded">
      <span class="icon">
        <component :is="renderIcon(component)"/>
      </span>
      <h2 class="title">
        {{ title }}
        <span class="line"></span>
      </h2>
    </router-link>
  </div>
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
  }
}
</script>

<style scoped>
.default-card-wrapper {
  @media (min-width: 1920px) {
    padding-bottom: 5px;
  }
}

.default-card {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 40px 30px;
  height: 100%;
  text-align: center;
  align-items: center;
  background-color: var(--white);
  justify-content: center;

  @media (min-width: 1280px) {
    grid-template-columns: 310px;
  }
}

span.icon {
  width: 60px;
  height: 60px;
  margin: auto;
}

span.icon svg {
  width: 100%;
  height: 100%;
}

h2.title {
  position: relative;
  font-size: 26px;
  font-weight: 700;
  color: var(--blue-dark);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    font-size: 22px;
  }
  @media (min-width: 1920px) {
    font-size: 28px;
  }
}

h2.title .line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 180px;
  height: 4px;
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