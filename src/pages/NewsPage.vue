<template>
  <div class="basepage newspage">
    <h1 class="title">Новости</h1>
    <div class="news-categories shadow rounded">
      <a to="/news" class="news-category rounded active">Все</a>
      <a v-for="category in categories" :key="category" :to="`/news/${category}`"
                   class="news-category rounded">
        {{ category }}
      </a>
    </div>
    <div class="news-list" v-if="news.length">
      <NewsItem v-for="item in news" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script setup>
import NewsItem from "@/components/NewsItem.vue";
import {ref} from "vue";
import axios from "axios";
import {NEWS_URL} from "@/constants";

const news = ref([]);
const categories = ref([
  'Polytics',
  'Sport',
  'Culture']);

axios
    .get(NEWS_URL)
    .then(response => {
      news.value = response.data.data;
    })
</script>

<style scoped>
.title {
  margin-bottom: 35px;
}

.news-categories {
  margin-bottom: 20px;
  background-color: var(--white);
  display: flex;
  width: fit-content;
}

.news-category {
  display: flex;
  color: var(--blue-dark);
  font-weight: 500;
  font-size: 13px;
  padding: 10px 28px;
}

.news-category.active {
  background-color: var(--blue-light);
  position: relative;
  z-index: 1;
}

.news-category.active::after {
  display: none;
}

.news-category:nth-child(n + 2)::after {
  content: '';
  position: absolute;
  background-color: var(--gray-dark);
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: -1px;
  margin: auto;
  width: 1px;
  height: 12px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
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