<template>
  <div class="basepage default-page">
    <h1 class="title">Инструкции</h1>
    <TheTabs
        :tabs="departmentsTitles"
        :activeTab="activeDepartment"
        @setActiveTab="instructionsStore.setActiveDepartment"/>
    <div class="content rounded shadow">
      <div class="inner-tabs">
        <div
            :key="item"
            v-if="categoriesTitles"
            class="inner-tab__item"
            v-for="item in categoriesTitles"
            @click="instructionsStore.setActiveCategory(item)"
            :class="{active: activeCategory === item}">
          {{ item }}
        </div>
      </div>
      <div class="docs-container">
        <div
            class="docs-inner"
            v-for="type in activeTypesList"
            :key="type.title">
          <h2
              class="title"
              v-if="type.title">{{ type.title }}</h2>
          <ul class="docs">
            <li
                v-for="(doc, index) in type.docsList"
                :key="index"
                class="docs__item">
              <router-link
                  :to="`/instructions/${doc.url}`"
                  class="docs__link">
                {{ doc.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheTabs from "@/components/TheTabs.vue";
import {useRootStore} from "@/stores/instructionsStore";
import {storeToRefs} from "pinia";

const instructionsStore = useRootStore();
instructionsStore.getInstructions();

const {
  departmentsList,
  departmentsTitles,
  activeDepartment,
  categoriesTitles,
  activeCategory,
  activeTypesList
} = storeToRefs(instructionsStore);
</script>

<style scoped>
.content {
  flex: auto;
  background-color: var(--white);
}

.inner-tabs {
  display: flex;
  padding: 12px 10px;
  column-gap: 20px;
  justify-content: center;
  border-bottom: 1px solid var(--gray-medium);
}

.inner-tabs .inner-tab__item {
  cursor: pointer;
}

.inner-tabs .inner-tab__item.active {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.docs-container {
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px 0;
  gap: 35px;

  @media (min-width: 1280px) {
    gap: 48px;
    padding: 20px 36px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.content .title {
  padding: 0 10px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--gray-medium);
}

.docs {
  display: flex;
  row-gap: 10px;
  list-style: disc;
  flex-direction: column;
  padding: 0 10px 0 30px;
}

.docs__item::marker {
  color: var(--blue-light);
}

.docs__link {
  color: var(--black);
  transition: opacity 0.3s ease-in-out;
}

.docs__link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
  opacity: 0.5;
}
</style>