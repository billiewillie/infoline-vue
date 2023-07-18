<template>
  <div class="basepage newspage">
    <h1 class="title">Новости</h1>
    <div class="news-list">
      <NewsItem
          v-for="item in news"
          :key="item.id"
          :item="item"/>
    </div>
  </div>
</template>

<script setup>
import NewsItem from "@/components/NewsItem.vue";
import TheTabs from "@/components/TheTabs.vue";

import {useRootStore} from "@/stores/newsStore";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";

const newsStore = useRootStore();
newsStore.getNews();
const {news, newsCategories, activeCategory, activeNews} = storeToRefs(newsStore);
</script>

<style scoped>
.title {
  margin-bottom: 35px;
}

.news-list {
  display: grid;
  position: relative;
  z-index: 0;
  row-gap: 20px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-flow: row;
    gap: 16px;
  }

  @media (min-width: 1920px) {
    gap: 20px;
  }
}

.title {
  text-align: center;
  font-weight: 700;
  color: var(--blue-dark);
}
</style>