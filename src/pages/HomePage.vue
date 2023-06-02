<template>
  <div class="basepage homepage">
    <div class="news">
      <swiper
          :modules="modules"
          :slides-per-view="1"
          :breakpoints="{ 1280: { enabled: false } }"
          navigation
          loop
          v-if="news.length"
      >
        <SwiperSlide v-for="item in news" :key="item.id">
          <NewsItem :item="item"/>
        </SwiperSlide>
      </swiper>
    </div>
    <TheCalendar/>
    <SliderGallery/>
    <IndexBirthdaysCard/>
    <IndexDefaultCard
        v-for="item in defaultCards"
        :key="item.title"
        :title="item.title"
        :text="item.text"
        :background="item.background"
        :link="item.link"
        :component="item.component"
    />
  </div>
</template>

<script setup>
import NewsItem from "@/components/NewsItem.vue";
import TheCalendar from "@/components/TheCalendar.vue";
import SliderGallery from "@/components/SliderGallery.vue";
import IndexDefaultCard from "@/components/IndexDefaultCard.vue";
import IndexBirthdaysCard from "@/components/IndexBirthdaysCard.vue";
import IconMarketingDocs from "@/components/icons/IconMarketingDocs.vue";
import IconUpdates from "@/components/icons/IconUpdates.vue";
import IconOrders from "@/components/icons/IconOrders.vue";
import {NEWS_URL} from "@/constants";

import 'swiper/css';
import 'swiper/css/navigation';

import {ref} from "vue";
import axios from "axios";
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

const defaultCards = ref([
  {
    title: "Маркетинговые документы",
    text: "Задокументируй невербальные всполохи бездны в сознании, расщепись на атомы и созерцай незримое.",
    background: '#F2CECE',
    link: "/marketing-docs",
    component: "IconMarketingDocs"
  },
  {
    title: "Обновления на сайте",
    text: "Задокументируй невербальные всполохи бездны в сознании, расщепись на атомы и созерцай незримое.",
    background: '#E3BBF7',
    link: "/updates",
    component: "IconUpdates"
  },
  {
    title: "Оформить заявку",
    text: "Задокументируй невербальные всполохи бездны в сознании, расщепись на атомы и созерцай незримое.",
    background: '#BAF7F3',
    link: "/orders",
    component: "IconOrders"
  },
])
const news = ref([])
const modules = [Navigation];

axios
    .get(NEWS_URL)
    .then(response => {
      news.value = response.data.data;
    })
</script>

<style>
.homepage {
  display: grid;
  position: relative;
  z-index: 0;
  row-gap: 20px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 16px;
    height: 100vh;
    min-height: 720px;
  }

  @media (min-width: 1920px) {
    gap: 20px;
  }
}

.news {
  overflow: hidden;
  @media (min-width: 1280px) {
    display: grid;
    grid-row-start: 1;
    grid-row-end: 4;
    overflow: hidden;
  }
}

.news .swiper-wrapper {
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    overflow-y: scroll;
  }

  @media (min-width: 1920px) {
    row-gap: 20px;
    padding: 0 1px;
  }
}

.news .swiper {
  width: 100%;
}

.news .swiper-slide {
  @media (min-width: 1280px) {
    height: auto;
  }
}
</style>