<template>
  <div class="basepage homepage">
    <div class="news">
      <template v-if="newsIndexPage && newsIndexPage.length">
        <Swiper
            :modules="modules"
            :slides-per-view="1"
            :breakpoints="{ 1280: { enabled: false } }"
            navigation
            space-between="10"
            loop>
          <SwiperSlide
              v-for="item in newsIndexPage"
              :key="item.id">
            <NewsItem :item="item"/>
          </SwiperSlide>
        </Swiper>
      </template>
      <template v-else>
        <NewsSkeleton/>
      </template>
    </div>
    <TheCalendar
        :attributes="attributesIndexPage"
        class="home-page-calendar"/>
    <SliderGallery/>
    <IndexBirthdaysCard/>
    <IndexDefaultCard
        v-for="item in defaultCards"
        :key="item.title"
        :title="item.title"
        :background="item.background"
        :link="item.link"
        :component="item.component"/>
  </div>
</template>

<script setup>
import NewsItem from "@/components/NewsItem.vue";
import TheCalendar from "@/components/TheCalendar.vue";
import IconMarketingDocs from "@/components/icons/IconMarketingDocs.vue";
import SliderGallery from "@/components/SliderGallery.vue";
import IndexBirthdaysCard from "@/components/IndexBirthdaysCard.vue";
import 'swiper/css';
import 'swiper/css/navigation';
import {ref} from "vue";
import {Autoplay, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {useRootStore as useNewsStore} from "@/stores/newsStore";
import {useRootStore as useCalendarStore} from "@/stores/calendarStore";
import {storeToRefs} from "pinia";
import NewsSkeleton from "@/components/NewsSkeleton.vue";
import AboutPhoto11 from "@/assets/img/about-photo-11.webp";
import AboutPhoto12 from "@/assets/img/about-photo-12.webp";
import IndexDefaultCard from "@/components/IndexDefaultCard.vue";

const defaultCards = ref([
  {
    title: "Маркетинговые материалы",
    background: '#BAF7F3',
    link: "/marketing-materials",
    component: "IconMarketingDocs"
  },
]);
const photos = [AboutPhoto11, AboutPhoto12];

const modules = [Navigation];
const modules2 = [Autoplay];
const newsStore = useNewsStore();
const calendarStore = useCalendarStore();
calendarStore.getData();
newsStore.getNewsIndexPage();
const {newsIndexPage} = storeToRefs(newsStore);
const {attributesIndexPage} = storeToRefs(calendarStore);
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
  scrollbar-width: none;

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

.news .swiper-wrapper::-webkit-scrollbar {
  display: none;
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

.news .swiper-slide:nth-child(2) {
  @media (min-width: 1280px) {
    height: calc(50vh - 54px);
  }

  @media (min-width: 1920px) {
    height: calc(50vh - 70px);
  }
}

.news-item__footer .btn .icon {
  width: 7px;
  height: 11px;
}

.calendar .vc-day.is-today .vc-blue .vc-highlight {
  display: block;
}

.home-page-calendar .is-today .vc-highlight-bg-solid {
  background-color: var(--blue-light);
}

.home-page-calendar .vc-highlight-bg-solid {
  background-color: var(--gray);
}

.home-page-calendar .vc-day-content {
  color: var(--black);
}

.contest-card .swiper {
  max-width: 100%;
  height: 200px;
}


.contest-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-bottom: 10px;
  background-color: var(--white);
}

.contest-card .swiper {
  height: 60%;
  width: 100%;
}

.contest-card .title {
  height: auto;
  font-size: 28px;

  @media (min-width: 1280px) {
    font-size: 34px;
  }
}

.contest-card .subtitle {
  font-size: 14px;
  font-weight: 400;
  padding: 0 10px;
  @media (min-width: 1280px) {
    font-size: 16px;
  }
}

.contest-card .btn {
  padding: 15px 30px;
}

.default-card-wrapper {
  overflow: hidden;
  box-shadow: var(--base-shadow);

  @media (min-width: 1280px) {
    padding-bottom: 5px;
    overflow: inherit;
    box-shadow: none;
  }
}
</style>