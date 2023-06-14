<template>
  <div class="basepage galleries-page">
    <h1 class="title">Фотогалерея</h1>
    <div class="galleries-grid">
      <router-link :to="`/galleries/${gallery.url}`" class="gallery-item rounded shadow" v-for="gallery in galleries" :key="gallery.id">
        <div class="gallery-date">
          <span class="icon">
            <IconCalendar/>
          </span>
          <span class="date">{{ gallery.published_date }}</span>
        </div>
        <div class="gallery-cover rounded overflow-hidden">
          <picture>
            <source
                :srcset="`http://gallery.trifonov.space/upload/galleries/${gallery.id}/${gallery.gallery_cover}.webp`"
                type="image/webp">
            <img :src="`http://gallery.trifonov.space/upload/galleries/${gallery.id}/${gallery.gallery_cover}.jpg`"
                 :alt="gallery.title" loading="lazy">
          </picture>
        </div>
        <footer class="gallery-footer">
          <h2 class="title">{{ gallery.title }}</h2>
          <span class="location">{{ gallery.location }}</span>
          <div class="gallery-stats">
            <div class="gallery-stats__item">
              <div class="icon">
                <IconView/>
              </div>
              <span class="count">{{ gallery.show_count }}</span>
            </div>
            <div class="gallery-stats__item">
              <div class="icon">
                <IconView/>
              </div>
              <span class="count">{{ gallery.count_img }}</span>
            </div>
          </div>
        </footer>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconView from "@/components/icons/IconView.vue";

const galleries = ref([]);

axios
    .get('http://gallery.trifonov.space/api/gallery/show/all')
    .then(res => galleries.value = res.data);
</script>

<style scoped>
.galleries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));
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
  min-height: 237px;
  aspect-ratio: 3 / 2;

  @media (min-width: 1920px) {
    min-height: 375px;
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