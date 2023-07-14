<template>
  <ul class="docs-nav__menu">
    <li v-for="item in navList" :key="item.title" class="docs-nav__item">
      <router-link class="docs-nav__link" :to="`${item.path}`">
        <span class="docs-nav__title">
          {{ item.title }}
        </span>
        <span class="docs-nav__icon" v-if="withIcons">
          <component :is="renderIcon(item.icon)"/>
        </span>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import IconDocs from "@/components/icons/IconDocs.vue";
import IconInstructions from "@/components/icons/IconInstructions.vue";
import IconOrdersSmall from "@/components/icons/IconOrdersSmall.vue";
import IconBooking from "@/components/icons/IconBooking.vue";
import IconLearning from "@/components/icons/IconLearning.vue";
import IconMarketingMaterials from "@/components/icons/IconMarketingMaterials.vue";
import IconOrders from "@/components/icons/IconOrders.vue";
import {ref} from "vue";

const props = defineProps({
  withIcons: {
    type: Boolean,
    default: false,
  },
});

const navList = ref([
  {
    title: 'Документы',
    path: '/docs',
    icon: 'IconDocs'
  },
  {
    title: 'Инструкции',
    path: '/instructions',
    icon: 'IconInstructions'
  }
])

function renderIcon(icon) {
  switch (icon) {
    case "IconDocs":
      return IconDocs
    case "IconInstructions":
      return IconInstructions
  }
}
</script>

<style>
.docs-nav__item a {
  color: var(--white);
}
</style>