<template>
  <div class="slider-gallery shadow rounded">
    <swiper
        :modules="modules"
        :slides-per-view="1"
        navigation
        loop
        v-if="gallery.length > 0"
    >
      <SwiperSlide v-for="item in gallery" :key="item.id">
        <picture>
          <source :srcset="`http://gallery.trifonov.space/upload/galleries/${item.id}/${item.src}.webp`"
                  type="image/webp">
          <img :src="`http://gallery.trifonov.space/upload/galleries/${item.id}/${item.src}.jpg`" :alt="item.title">
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

const gallery = ref([]);
const modules = [Navigation];

onMounted(() => {
  fetch('http://gallery.trifonov.space/api/gallery/show/hidden-pool')
      .then(res => res.json())
      .then(data => gallery.value = data)
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

.slider-gallery .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>