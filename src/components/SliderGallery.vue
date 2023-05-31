<template>
  <div class="slider-gallery shadow rounded">
    <swiper
        :modules="modules"
        :slides-per-view="1"
        navigation
        loop
        v-if="gallery.length"
    >
      <SwiperSlide v-for="item in gallery" :key="item.id">
        <picture>
          <source :srcset="`${GALLERY_URL}/${item.id}/${item.src}.webp`"
                  type="image/webp">
          <img :src="`${GALLERY_URL}/${item.id}/${item.src}.jpg`" :alt="item.title">
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
import {onMounted, ref} from "vue";
import axios from "axios";
import {GALLERY_URL, INDEX_PAGE_GALLERY_URL} from "@/constants";

const gallery = ref([]);
const modules = [Navigation];

onMounted(() => {
  axios
      .get(INDEX_PAGE_GALLERY_URL)
      .then(response => {
        gallery.value = response.data;
      })
});
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
</style>