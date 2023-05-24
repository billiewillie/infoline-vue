<template>
    <div class="slider-gallery shadow rounded">
        <swiper
                :modules="modules"
                :slides-per-view="1"
                navigation
                loop
        >
            <SwiperSlide v-for="item in gallery" :key="item.id">
                <picture>
                    <source type="image/webp" :srcset="item.srcWebp">
                    <img :src="item.srcFallback" :alt="item.alt">
                </picture>
            </SwiperSlide>
        </swiper>
    </div>
</template>

<script>
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
    name: "SliderGallery",
    data() {
        return {
            title: 'title of the gallery',
            gallery: [
                {
                    id: 1,
                    srcFallback: './src/assets/img/gallery-1.webp',
                    srcWebp: './src/assets/img/gallery-1.jpeg',
                    alt: 'alt'
                },
                {
                    id: 2,
                    srcFallback: './src/assets/img/gallery-2.webp',
                    srcWebp: './src/assets/img/gallery-2.webp',
                    alt: 'alt'
                },
                {
                    id: 3,
                    srcFallback: './src/assets/img/gallery-3.webp',
                    srcWebp: './src/assets/img/gallery-3.jpeg',
                    alt: 'alt'
                },
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
}
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