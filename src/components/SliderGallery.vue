<template>
  <div class="slider-gallery shadow rounded">
    <router-link
        :to="`/galleries/${galleryLink}`"
        class="title gallery-title">
      <span class="icon">
      <IconGallery/>
      </span>
      {{ galleryTitle }}
    </router-link>
    <swiper
        :modules="modules"
        :slides-per-view="1"
        navigation
        v-if="galleriesIndexPage.length > 0"
        @slideChange="onSlideChange"
        loop>
      <SwiperSlide v-for="item in galleriesIndexPage" :key="item.id">
        <picture>
          <source
              :srcset="`http://gallery.trifonov.space/upload/galleries/${item.id}/${item.src}.webp`"
              type="image/webp"/>
          <img
              :src="`http://gallery.trifonov.space/upload/galleries/${item.id}/${item.src}.jpg`"
              alt="gallery"/>
        </picture>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script setup>
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import IconGallery from "@/components/icons/IconGallery.vue";

import {useRootStore} from "@/stores/galleriesStore";
import {storeToRefs} from "pinia";

const galleriesStore = useRootStore();
galleriesStore.getGalleriesIndexPage();
const {galleriesIndexPage, galleryTitle, galleryLink} = storeToRefs(galleriesStore);
const modules = [Navigation];

const onSlideChange = (swiper) => {
  galleriesStore.setGalleryTitle(swiper.realIndex);
  galleriesStore.setGalleryLink(swiper.realIndex);
};
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
