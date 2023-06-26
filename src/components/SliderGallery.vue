<template>
  <div class="slider-gallery shadow rounded">
    <router-link :to="`/galleries/gallery-1`" class="title gallery-title">
      <span class="icon">
      <IconGallery/>
      </span>
      {{ galleryTitle }}
    </router-link>
    <swiper
        :modules="modules"
        :slides-per-view="1"
        navigation
        loop
        v-if="gallery.length"
        @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="item in gallery" :key="item.id">
        <picture>
          <source :srcset="imageWeb" type="image/webp"/>
          <img :src="image" alt="news" loading="lazy"/>
        </picture>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script setup>
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

import imageWeb from '@/assets/img/index-news-img.webp';
import image from '@/assets/img/index-news-img.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import {onMounted, ref} from 'vue';
import axios from 'axios';
import {GALLERY_URL, INDEX_PAGE_GALLERY_URL} from '@/constants';
import IconGallery from "@/components/icons/IconGallery.vue";

const gallery = ref([
  {
    id: 1,
    title: 'id 1',
    url: 'gallery-4',
    src: 'index-news-img',
  },
  {
    id: 2,
    title: 'id 2',
    url: 'gallery-4',
    src: 'index-news-img',
  },
  {
    id: 3,
    title: 'id 3',
    url: 'gallery-1',
    src: 'index-news-img',
  },
  {
    id: 4,
    title: 'id 4',
    url: 'gallery-4',
    src: 'index-news-img',
  },
  {
    id: 5,
    title: 'id 5',
    url: 'gallery-4',
    src: 'index-news-img',
  },
  {
    id: 2,
    title: 'Новогодний квартирник',
    url: 'gallery-1',
    src: 'index-news-img',
  },
  {
    id: 3,
    title: 'Test 4',
    url: 'gallery-4',
    src: 'index-news-img',
  },
]);
const galleryTitle = ref(gallery.value[0].title);
const modules = [Navigation];

const onSlideChange = (swiper) => {
  galleryTitle.value = gallery.value[swiper.realIndex].title;
};

// onMounted(() => {
//   axios
//       .get(INDEX_PAGE_GALLERY_URL)
//       .then(response => {
//         gallery.value = response.data;
//       })
// });
</script>

<style>
.slider-gallery {
  overflow: hidden;
}

.slider-gallery .swiper {
  margin-left: inherit;
  margin-right: inherit;
  height: 100%;
}

.gallery-title {
  display: flex;
  align-items: center;
  column-gap: 15px;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 13px;
  color: var(--white);
  padding: 8px;
  z-index: 2;
  min-width: 40%;
  background-color: var(--blue-dark);
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
}

.icon {
  width: 18px;
  height: 18px;
}
</style>
