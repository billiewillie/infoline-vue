<template>
  <ul class="docs-nav__menu">
    <li
        v-for="item in navList"
        :key="item.title"
        class="docs-nav__item">
      <router-link
          class="docs-nav__link"
          :to="`${item.path}`">
        <span class="docs-nav__title">{{ item.title }}</span>
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
import IconCalendarBlack from "@/components/icons/IconCalendarBlack.vue";
import IconMarketingMaterials from "@/components/icons/IconMarketingMaterials.vue";
import IconAchievement from "@/components/icons/IconAchievement.vue";
import {ref} from "vue";

const props = defineProps({
  withIcons: {
    type: Boolean,
    default: false,
  },
});

const navList = ref([
  {
    title: 'Регламенты и положения',
    path: '/docs?department=1',
    icon: 'IconDocs'
  },
  {
    title: 'Инструкции',
    path: '/instructions',
    icon: 'IconInstructions'
  },
  {
    title: 'Маркетинговые материалы',
    path: '/marketing-materials?category=1',
    icon: 'IconMarketingMaterials'
  },
  {
    title: 'Календарь',
    path: '/calendar',
    icon: 'IconCalendarBlack'
  },
  // {
  //   title: 'Номинации',
  //   path: '/nominees',
  //   icon: 'IconAchievement'
  // }
]);

function renderIcon(icon) {
  switch (icon) {
    case "IconDocs":
      return IconDocs
    case "IconInstructions":
      return IconInstructions
    case "IconMarketingMaterials":
      return IconMarketingMaterials
    case "IconCalendarBlack":
      return IconCalendarBlack
    case "IconAchievement":
      return IconAchievement
  }
}
</script>

<style>
.docs-nav__item a {
  color: var(--white);
}

.docs-nav__item:hover {
  background-color: var(--blue-light);
}
</style>