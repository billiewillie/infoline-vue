<template>
  <div class="basepage homepage">
    <div class="news">
      <Swiper
          :modules="modules"
          :slides-per-view="1"
          :breakpoints="{ 1280: { enabled: false } }"
          navigation
          space-between="10"
          loop>
        <SwiperSlide v-for="item in newsIndexPage" :key="item.id">
          <NewsItem :item="item"/>
        </SwiperSlide>
      </Swiper>
    </div>
    <TheCalendar :attributes="attributes"/>
    <SliderGallery/>
    <IndexBirthdaysCard/>
    <IndexDefaultCard
        v-for="item in defaultCards"
        :key="item.title"
        :title="item.title"
        :text="item.text"
        :background="item.background"
        :link="item.link"
        :component="item.component"/>
  </div>
</template>

<script setup>
import NewsItem from "@/components/NewsItem.vue";
import TheCalendar from "@/components/TheCalendar.vue";
import IconOrders from "@/components/icons/IconOrders.vue";
import SliderGallery from "@/components/SliderGallery.vue";
import IndexDefaultCard from "@/components/IndexDefaultCard.vue";
import IndexBirthdaysCard from "@/components/IndexBirthdaysCard.vue";

import 'swiper/css';
import 'swiper/css/navigation';

import {onMounted, ref} from "vue";
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

const defaultCards = ref([
  {
    title: "Оформить заявку",
    text: "Задокументируй невербальные всполохи бездны в сознании, расщепись на атомы и созерцай незримое.",
    background: '#BAF7F3',
    link: "/orders",
    component: "IconOrders"
  },
]);
const modules = [Navigation];

import {useRootStore} from "@/stores/newsStore";
import {storeToRefs} from "pinia";

const newsStore = useRootStore();
newsStore.getNewsIndexPage();
const {newsIndexPage} = storeToRefs(newsStore);

const attributes = ref([
  {
    dates: [
      new Date('2023-07-27')
    ],
    dot: {
      color: 'blue',
    },
    popover: {
      label: "Здравоохранение - TIHE 2023 руддщ вавыа ва ыаы выа"
    }
  },
  {
    dates: [
      new Date('2023-07-27')
    ],
    dot: {
      color: 'blue',
    },
    popover: {
      label: "День России выаыв выавыа выав ыаываы вавыа"
    }
  },
]);
</script>

<style>
.homepage {
  display: grid;
  position: relative;
  z-index: 0;
  row-gap: 20px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
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
    grid-row-end: 3;
  }
}

.news .swiper {
  padding-bottom: 2px;
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
  }
}

.news .swiper {
  width: 100%;
}

.news .swiper-slide {
  @media (min-width: 1280px) {
    height: calc(50vh - 49px);
    margin-right: 0 !important;
    padding-right: 2px;
  }

  @media (min-width: 1920px) {
    height: calc(50vh - 65px);
  }
}
</style>