<template>
	<div class="slider-gallery shadow rounded">
		<swiper :modules="modules" :slides-per-view="1" navigation loop v-if="gallery.length">
			<SwiperSlide v-for="item in gallery" :key="item.id">
				<picture>
					<source :srcset="imageWeb" type="image/webp" />
					<img :src="image" alt="news" loading="lazy" />
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

const gallery = ref([
	{
		id: 4,
		title: 'Test 4',
		url: 'gallery-4',
		src: 'index-news-img',
	},
	{
		id: 1,
		title: 'Test 4',
		url: 'gallery-4',
		src: 'index-news-img',
	},
	{
		id: 1,
		title: 'Новогодний квартирник',
		url: 'gallery-1',
		src: 'index-news-img',
	},
	{
		id: 6,
		title: 'Test 4',
		url: 'gallery-4',
		src: 'index-news-img',
	},
	{
		id: 2,
		title: 'Test 4',
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
const modules = [Navigation];

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
</style>
