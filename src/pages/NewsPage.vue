<template>
  <div class="basepage newspage">
    <h1 class="title">Новости</h1>
    <TheTabs
        :tabs="newsCategories"
        :activeTab="activeCategory"
        @setActiveTab="setActiveCategory"/>
    <div class="news-list" v-if="news">
      <NewsItem
          v-for="item in activeNews"
          :key="item.id"
          :item="item"/>
    </div>
  </div>
</template>

<script setup>
import NewsItem from "@/components/NewsItem.vue";
import {ref} from "vue";
import TheTabs from "@/components/TheTabs.vue";

import {useRootStore} from "@/stores/newsStore";
import {storeToRefs} from "pinia";

const rootStore = useRootStore();
const {news} = storeToRefs(rootStore);
const {newsCategories} = storeToRefs(rootStore);

let activeCategory = ref(newsCategories.value[0]);

const activeNews = ref(news);

console.log(news.value)

const setActiveCategory = (value) => {
  activeCategory.value = value;
  activeNews.value = news.value.filter((item) => {
    if (value === newsCategories.value[0]) {
      return true;
    } else {
      return item.category.title === value;
    }
  });
}
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