<template>
  <div class="basepage newspage">
    <h1 class="title">Новости</h1>
    <div class="categories"></div>
    <div class="news-list" v-if="news.length">
      <NewsItem v-for="item in news" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script setup>
import NewsItem from "@/components/NewsItem.vue";
import {ref} from "vue";
import axios from "axios";

const news = ref([]);

axios
    .get('http://news.trifonov.space/api/posts')
    .then(response => {
      news.value = response.data.data;
    })
</script>

<style scoped>
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