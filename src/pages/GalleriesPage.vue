<template>
  <div class="basepage galleries-page">
    <h1 class="title">Фотогалерея</h1>

    <TheTabs
        :tabs="years"
        :activeTab="activeYear"
        @setActiveTab="galleriesStore.setActiveYear"/>

    <div class="galleries-grid">
      <router-link
          :to="`/galleries/${gallery.url}`"
          class="gallery-item rounded shadow"
          v-for="gallery in activeGalleries"
          :key="gallery.id">
        <div class="gallery-date">
          <span class="icon">
            <IconCalendar/>
          </span>
          <span class="date">{{ gallery.published_date }}</span>
        </div>
        <div class="gallery-cover rounded overflow-hidden">
          <TheImage
              alt="gallery-cover"
              :image="`https://gallery.trifonov.space/upload/galleries/${gallery.id}/${gallery.gallery_cover}.webp`"
          />
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
                <IconPhoto/>
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
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconPhoto from "@/components/icons/IconPhoto.vue";
import IconView from "@/components/icons/IconView.vue";
import TheTabs from "@/components/TheTabs.vue";
import {useRootStore} from "@/stores/galleriesStore";
import {storeToRefs} from "pinia";
import TheImage from "@/components/TheImage.vue";

const galleriesStore = useRootStore();
galleriesStore.getGalleries();
const {galleries, years, activeYear, activeGalleries} = storeToRefs(galleriesStore);
</script>

<style scoped>
.galleries-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(3, 1fr);
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
  width: 18px;
  height: 18px;
}

.gallery-item .icon svg {
  width: 100%;
  height: 100%;
}

.gallery-date .icon svg {
  width: 18px;
  height: 18px;
}

.gallery-date {
  position: relative;
  z-index: 2;
  padding: 7px;
  background-color: var(--blue-dark);
  line-height: 1;
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
  z-index: 2;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0) 100%);
  -webkit-border-radius: 0 0 3px 3px;
  -moz-border-radius: 0 0 3px 3px;
  border-radius: 0 0 3px 3px;
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


@keyframes bounceIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>