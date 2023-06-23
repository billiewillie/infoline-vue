<template>
  <div class="basepage gallery-page">
    <h1 class="title">Фотогалерея #1</h1>
    <div class="gallery-grid">
      <div
          class="gallery-item rounded shadow pic"
          v-for="(photo, index) in imgs"
          :key="index"
          @click="() => showImg(index)">
        <div class="gallery-cover rounded overflow-hidden">
          <img :src="photo" alt="photo">
        </div>
      </div>
      <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgs"
          :index="indexRef"
          @hide="onHide"/>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import VueEasyLightbox from 'vue-easy-lightbox'

const photos = ref({
  id: 1,
  title: 'Фотогалерея #1',
  location: 'Санкт-Петербург',
  download_link: 'https://www.google.com',
  url: 'https://www.google.com',
  show_count: 1,
  published_date: '2022-01-01',
  category: [
    {
      title: 'Категория 1',
    }
  ],
  author: [
    {
      token: 'sdfsdf',
      firstname: 'Иван',
      lastname: 'Иванов',
    }
  ],
  media: [
    {
      src: "gallery-1",
      alt: 'alt'
    },
    {
      src: "gallery-3",
      alt: 'alt'
    }
  ],
  gallery_cover: '1',
});

let imgs = ref([]);

const visibleRef = ref(false)
const indexRef = ref(0)
const showImg = (index) => {
  indexRef.value = index
  visibleRef.value = true
}
const onHide = () => visibleRef.value = false

onMounted(() => {
  imgs.value = photos.value.media.map(item => `../src/assets/img/${item.src}.jpg`)
})

// axios
//     .get('http://gallery.trifonov.space/api/gallery/show/all')
//     .then(res => photos.value = res.data);
</script>

<style scoped>
@import "vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css";

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 2px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }
}

.gallery-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--white);
  aspect-ratio: 1 / 1;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 1280px) {
    aspect-ratio: 3 / 2;
  }
}

.gallery-item .title {
  font-size: 18px;
  font-weight: 700;
}

.gallery-item .location {
  font-size: 14px;
  font-weight: 500;
}

.gallery-item .icon {
  display: flex;
}

.gallery-date .icon svg {
  width: 18px;
  height: 18px;
}

.gallery-date {
  position: relative;
  z-index: 1;
  padding: 7px;
  background-color: var(--blue-dark);
  display: flex;
  column-gap: 7px;
  align-items: center;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
}

.gallery-date .date {
  font-size: 13px;
  font-weight: 600;
}

.gallery-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gallery-footer {
  display: flex;
  position: relative;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  padding: 17px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0) 100%);
}

.gallery-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 17px;
  width: 52px;
  height: 1px;
  background-color: var(--blue-light);
}

.gallery-stats {
  display: flex;
  column-gap: 24px;
}

.gallery-stats__item {
  display: flex;
  column-gap: 7px;
  align-items: center;
  font-size: 13px;
}

.gallery-stats__item svg {
  width: 14px;
  height: 14px;
}
</style>