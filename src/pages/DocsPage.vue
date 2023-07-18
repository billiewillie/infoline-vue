<template>
  <div class="basepage">
    <h1 class="title">Документы</h1>
    <TheTabs
        :tabs="departmentsTitles"
        :activeTab="activeDepartment"
        @setActiveTab="docsStore.setActiveDepartment"
    />
    <h2 class="subtitle">{{ activeDepartment }}</h2>
    <div class="content shadow rounded overflow-hidden">
      <DocComponent v-for="item in activeDocs" :key="item.name" :doc="item"/>
    </div>
  </div>
</template>

<script setup>
import TheTabs from "@/components/TheTabs.vue";
import {ref} from "vue";
import IconDoc from "@/components/icons/IconDoc.vue";
import DocComponent from "@/components/DocComponent.vue";

import {useRootStore} from "@/stores/docsStore";
import {storeToRefs} from "pinia";

const docsStore = useRootStore();
docsStore.getDocs();

const {departments, departmentsTitles, activeDepartment, activeDocs} = storeToRefs(docsStore);
</script>

<style scoped>
.subtitle {
  text-align: center;
  margin-bottom: 18px;

  @media (min-width: 1280px) {
    margin-bottom: 20px;
  }
}

.content {
  background-color: var(--white);
}

.tabs {
  @media (min-width: 1280px) {
    display: none;
  }
}
</style>