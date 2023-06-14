<template>
  <div class="basepage gallery-page">
    <h1 class="title">Фотогалерея #1</h1>
    <div class="gallery-grid">
      <div class="gallery-item rounded shadow">
        <div class="gallery-cover rounded overflow-hidden">
          <picture>
            <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
            <img src="@/assets/img/gallery-1.jpeg" alt="">
          </picture>
        </div>
      </div>
      <div class="gallery-item rounded shadow">
        <div class="gallery-cover rounded overflow-hidden">
          <picture>
            <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
            <img src="@/assets/img/gallery-1.jpeg" alt="">
          </picture>
        </div>
      </div>
      <div class="gallery-item rounded shadow">
        <div class="gallery-cover rounded overflow-hidden">
          <picture>
            <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
            <img src="@/assets/img/gallery-1.jpeg" alt="">
          </picture>
        </div>
      </div>
      <div class="gallery-item rounded shadow">
        <div class="gallery-cover rounded overflow-hidden">
          <picture>
            <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
            <img src="@/assets/img/gallery-1.jpeg" alt="">
          </picture>
        </div>
      </div>
      <div class="gallery-item rounded shadow">
        <div class="gallery-cover rounded overflow-hidden">
          <picture>
            <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
            <img src="@/assets/img/gallery-1.jpeg" alt="">
          </picture>
        </div>
      </div>
      <div class="gallery-item rounded shadow">
        <div class="gallery-cover rounded overflow-hidden">
          <picture>
            <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
            <img src="@/assets/img/gallery-1.jpeg" alt="">
          </picture>
        </div>
      </div>
      <div class="gallery-item rounded shadow">
        <div class="gallery-cover rounded overflow-hidden">
          <picture>
            <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
            <img src="@/assets/img/gallery-1.jpeg" alt="">
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconView from "@/components/icons/IconView.vue";

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
      src: "1"
    },
    {
      src: "2"
    }
  ],
  gallery_cover: '1',
});

// axios
//     .get('http://gallery.trifonov.space/api/gallery/show/all')
//     .then(res => photos.value = res.data);
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 2px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(284px, 1fr));
    gap: 16px;
  }

  @media (min-width: 1920px) {
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