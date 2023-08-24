<template>
  <div class="basepage gallery-page">
    <h1 class="title">{{ gallery.title }}</h1>
    <div class="stats-wrapper">
      <div class="stats rounded shadow">
        <div class="stats__item">
        <span class="icon">
          <IconView/>
        </span>
          <span class="count">{{ gallery.show_count }}</span>
        </div>
        <div class="stats__item">
        <span class="icon">
          <IconPhoto/>
        </span>
          <span class="count">32</span>
        </div>
        <div class="stats__item">
          <span class="icon">
            <IconSave/>
          </span>
          <a
              class="link"
              :href="`https://gallery.trifonov.space/upload/galleries/${gallery.id}/${gallery.id}.zip`"
              download>
            скачать
          </a>
        </div>
      </div>
    </div>
    <div class="gallery-grid">
      <div
          class="gallery-item rounded shadow pic"
          v-for="(photo, index) in galleryImgs"
          :key="index"
          @click="() => showImg(index)">
        <div class="gallery-cover rounded overflow-hidden">
          <TheImage alt="photo" :image="photo"/>
        </div>
      </div>
      <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="galleryImgs"
          :index="indexRef"
          @hide="onHide"/>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import VueEasyLightbox from 'vue-easy-lightbox'
import {useRootStore} from "@/stores/galleriesStore";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import TheImage from "@/components/TheImage.vue";
import IconView from "@/components/icons/IconView.vue";
import IconSave from "@/components/icons/IconSave.vue";
import IconPhoto from "@/components/icons/IconPhoto.vue";

const visibleRef = ref(false);
const indexRef = ref(0);

const params = useRoute().params;
const showImg = (index) => {
  indexRef.value = index
  visibleRef.value = true
}
const onHide = () => visibleRef.value = false

const galleriesStore = useRootStore();
galleriesStore.getGallery(params.id);
const {gallery, galleryImgs} = storeToRefs(galleriesStore);

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

.gallery-item img {
  object-position: top center;
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

.vel-modal {
  background: rgba(0, 0, 0, 0.8);
}

.stats-wrapper {
  display: flex;
  justify-content: center;
}

.stats {
  display: flex;
  align-items: center;
  background-color: var(--white);
  justify-content: center;
  margin: 0 auto 30px;
  padding: 20px;
  -webkit-column-gap: 16px;
  -moz-column-gap: 16px;
  column-gap: 16px;
}

.stats__item {
  display: flex;
  align-items: center;
  column-gap: 6px;
}

.stats__item a,
.stats__item span {
  color: var(--blue-dark);
  line-height: 1;
}

.stats__item a.link {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.stats__item a.link:hover {
  text-decoration: none;
}

.stats__item .icon {
  width: 16px;
  height: 16px;
}

.stats__item .icon svg {
  width: 100%;
  height: 100%;
}
</style>