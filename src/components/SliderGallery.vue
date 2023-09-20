<template>
  <div class="slider-gallery shadow rounded">
    <router-link
        :to="`/galleries/${galleryLink}`"
        class="title gallery-title">
      <span class="icon">
        <IconGallery/>
      </span>
      <p>{{ galleryTitle }}</p>
    </router-link>
    <swiper
        :modules="modules"
        :slides-per-view="1"
        navigation
        v-if="galleriesIndexPage.length > 0"
        @slideChange="onSlideChange"
        loop>
      <SwiperSlide v-for="item in galleriesIndexPage" :key="item.id">
        <TheImage
            alt="gallery-item"
            :image="`https://gallery.trifonov.space/upload/galleries/${item.gallery_id}/${item.src}.webp`"/>
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
import TheImage from "@/components/TheImage.vue";

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
  z-index: 2;
  width: 50%;
  padding: 7px;
  color: var(--white);
  background-color: var(--blue-dark);
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
}

.gallery-title p {
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  width: calc(100% - 33px);
}

.icon {
  display: block;
  width: 18px;
  height: 18px;
}

.icon svg {
  width: 100%;
  height: 100%;
}
</style>
