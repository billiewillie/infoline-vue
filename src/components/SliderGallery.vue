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

.slider-gallery .swiper-button-next,
.slider-gallery .swiper-button-prev {
  background-color: var(--blue-light);
  width: 32px;
  height: 32px;
}

.slider-gallery .swiper-button-next {
  right: 0;
  -webkit-border-radius: 3px 0 0 3px;
  -moz-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}

.slider-gallery .swiper-button-prev {
  left: 0;
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

.slider-gallery .swiper-button-next:after,
.slider-gallery .swiper-button-prev:after {
  color: var(--white);
  font-size: 12px;
}
</style>