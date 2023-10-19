<template>
  <div class="basepage default-page vote-page">
    <header class="vote-page-header">
      <h1
          v-show="!isSidebarOpen"
          class="title">Фотоконкурс «Место силы»</h1>
      <p v-show="isSidebarOpen">Отобранные фото</p>
      <button
          class="show-selected"
          @click="isSidebarOpen = !isSidebarOpen;isVotingOpen = false">show
      </button>
    </header>
    <div class="sidebar shadow rounded overflow-hidden" v-show="isSidebarOpen">
      <header class="sidebar-header">Отобранные фото</header>
      <div class="list" v-show="selectedImages.length > 0">
        <div v-for="category in selectedImages" :key="category.category">
          <div
              class="item rounded overflow-hidden"
              v-for="item in category.data"
              :key="item.id">
            <TheImage
                alt="img"
                :image="item.url"/>
            <div
                @click="contestStore.removeImageFromSelectedImages(item, category.category)"
                class="item-remove rounded">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div style="padding: 16px" v-show="!selectedImages.length">Нет выбранных фото</div>
      <footer class="sidebar-footer">
        <i>Голосов осталось:</i> {{ totalLimit }}
      </footer>
    </div>
    <div class="content" v-show="!isSidebarOpen && !isVotingOpen">
      <div class="row">
        <div class="description shadow rounded card">
          <div class="description-image overflow-hidden">
            <TheImage alt="img" :image="ContestBg" :fallback="ContestBg"/>
          </div>
          <div class="card-content">
            <h2 class="title">Описание:</h2>
            <p>12 снимков-лидеров по количеству голосов составят календарь группы
              на 2023 год. Автор снимка, набравшего большее количество голосов, станет победителем фотоконкурса
              и получит традиционный приз.</p>
          </div>
        </div>
        <div class="rules">
          <div class="shadow rounded card card-content">
            <h2 class="title">Перед тем, как проголосовать, пожалуйста, прочитайте правила:</h2>
            <ol class="rules-list">
              <li>Посмотрите все фотографии, не торопитесь.</li>
              <li>При повторном просмотре выберите 12 снимков, которые, на ваш взгляд, будут лучше всего смотреться в
                фирменном календаре группы компаний «БиоЛайн».
              </li>
              <li>Для того, чтобы проголосовать, нажмите сердечко под фотографией.</li>
              <li>В правой части экрана отобразятся снимки, которые вы выбрали.</li>
              <li>У вас есть возможность переголосовать – нажмите сердечко под выбранным фото еще раз и оно перестанет
                быть активным – выбор снят.
              </li>
              <li>За свои фотографии голосовать нельзя!</li>
            </ol>
            <p>Теперь, когда вы прочитали правила, предлагаем начать голосование!</p>
          </div>
        </div>
      </div>
      <div v-for="category in contestData.list" :key="category.category" class="list">
        <h2 class="list-title">{{ category.category }}</h2>
        <div class="list-inner">
          <div v-for="item in category.data" :key="item.id" class="card item shadow rounded overflow-hidden">
            <div class="item-image">
              <TheImage
                  alt="img"
                  :image="item.url"
                  :fallback="item.url"/>
            </div>
            <div class="item-content">
              <h3 class="title">{{ item.title }}</h3>
              <div class="item-location" v-if="item.location">
                <i class="icon">
                  <IconMarker/>
                </i>
                <span>{{ item.location }}</span>
              </div>
              <footer class="item-footer">
                <div
                    @click="contestStore.addImageToSelectedImages(item, category.category)"
                    class="button-like rounded"
                    :class="{
                    disabled: selectedImages.length >= selectedImagesLimit,
                    liked: selectedImages.includes(item)
                 }">
                  <i class="icon">
                    <svg
                        fill="var(--blue-light)"
                        width="64px"
                        height="64px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                            d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                      </g>
                    </svg>
                  </i>
                </div>
                <div
                    class="button-show rounded"
                    @click="isVotingOpen = true;changeSlides(item.id)">
                  <span>Подробнее</span>
                  <i class="icon">
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M1 10L2.76297 8.42742C4.1689 7.17332 4.87187 6.54627 4.98011 5.782C5.00663 5.59474 5.00663 5.40526 4.98011 5.218C4.87187 4.45373 4.1689 3.82668 2.76297 2.57258L1 1"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"/>
                    </svg>
                  </i>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="voting rounded shadow" v-show="isVotingOpen">
      <Swiper
          v-if="windowWidth < 1280"
          :modules="modules"
          ref="sliderRefMobile"
          :slides-per-view="1"
          navigation
          class="main-slider-mobile"
          style="margin-bottom: 16px"
          @slide-change-transition-end="showQueue"
          :thumbs="{
            swiper: thumbsSwiper,
            autoUpdate: false
          }">
        <SwiperSlide
            v-for="item in activeGallery.data"
            :key="item.id">
          <TheImage alt="img" :image="item.url" :fallback="item.url"/>
          <div class="content">
            <h2 class="title">{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="location">
              <i class="icon">
                <IconMarker/>
              </i>
              <i>{{ item.location }}</i>
            </div>
            <div class="content-footer">
              <div
                  @click="contestStore.addImageToSelectedImages(item, activeGallery.category)"
                  :class="{
                    disabled: selectedImages.length >= selectedImagesLimit,
                    liked: selectedImages.includes(item)
                  }"
                  class="vote-button rounded">
                <span v-if="!selectedImages.includes(item)">Проголосовать</span>
                <span v-else>Снять голос</span>
                <i class="icon">
                  <svg
                      fill="var(--white)"
                      width="64px"
                      height="64px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="var(--blue-dark)">
                    <g id="SVGRepo_iconCarrier">
                      <path
                          d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                    </g>
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
          v-else
          :modules="modules"
          ref="sliderRef"
          :slides-per-view="1"
          navigation
          class="main-slider"
          style="margin-bottom: 16px"
          :effect="'fade'"
          @slide-change-transition-end="showQueue"
          :thumbs="{
            swiper: thumbsSwiper,
            autoUpdate: false
          }">
        <SwiperSlide
            v-for="item in activeGallery.data"
            :key="item.id">
          <TheImage alt="img" :image="item.url" :fallback="item.url"/>
          <div class="content">
            <h2 class="title">{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="location">
              <i class="icon">
                <IconMarker/>
              </i>
              <span>{{ item.location }}</span>
            </div>
            <div class="content-footer">
              <div
                  @click="contestStore.addImageToSelectedImages(item, activeGallery.category)"
                  :class="{disabled: selectedImages.length >= selectedImagesLimit, liked: selectedImages.includes(item)}"
                  class="vote-button rounded">
                <span v-if="!selectedImages.includes(item)">Проголосовать</span>
                <span v-else>Снять голос</span>
                <i class="icon">
                  <svg
                      fill="var(--white)"
                      width="64px"
                      height="64px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="var(--blue-dark)">
                    <g id="SVGRepo_iconCarrier">
                      <path
                          d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                    </g>
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
          @swiper="setThumbsSwiper"
          :modules="modules"
          ref="sliderThumbs"
          :slides-per-view="6"
          :space-between="16"
          :watch-slides-progress="true"
          class="thumbs-slider">
        <SwiperSlide
            v-for="item in activeGallery.data"
            class="rounded overflow-hidden"
            :key="item.id">
          <TheImage alt="img" :image="item.url" :fallback="item.url"/>
        </SwiperSlide>
      </Swiper>
      <button class="voting-close" @click="isVotingOpen = false">close</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import TheImage from "@/components/TheImage.vue";
import ContestBg from "@/assets/img/contest-bg.webp";
import IconMarker from "@/components/icons/IconMarker.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {EffectFade, Navigation, Thumbs} from "swiper";
import {moveItem} from "@/functions/moveItem";
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {useRootStore} from "@/stores/contestStore";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import axios from "axios";

const params = useRoute().params;
const user_id = params.id.split('-')[0];
const windowWidth = ref(window.innerWidth);
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const contestStore = useRootStore();
contestStore.getContestData(params.id);
const {contestData, activeGallery, totalLimit} = storeToRefs(contestStore);

const selectedImagesLimit = ref(1);
const sliderRef = ref(null);
const sliderRefMobile = ref(null);
const sliderThumbs = ref(null);
const selectedImages = ref([]);
const currentSlide = ref(0);

const modules = [Navigation, Thumbs, EffectFade];
const isSidebarOpen = ref(false);
const isVotingOpen = ref(false);

const changeSlides = (id) => {
  const elIndex = activeGallery.value.data.findIndex(el => el.id === id);
  const arrayLength = activeGallery.value.data.length;
  const restOfArray = activeGallery.value.data.filter(el => el.id !== id);
  if (currentSlide.value === 0) {
    activeGallery.value.data = [activeGallery.value.data[elIndex], ...restOfArray];
  } else if (currentSlide.value === arrayLength - 1) {
    activeGallery.value.data = [...restOfArray].concat(activeGallery.value.data[elIndex]);
  } else {
    moveItem(activeGallery.value.data, currentSlide.value, elIndex);
  }
}

const showQueue = () => {
  Array.from(document.querySelectorAll('.main-slider .swiper-slide.swiper-slide-active')).forEach(item => currentSlide.value = item.swiperSlideIndex);
  Array.from(document.querySelectorAll('.main-slider-mobile .swiper-slide.swiper-slide-active')).forEach(item => currentSlide.value = item.swiperSlideIndex);
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1280px) {
    width: 83%;
  }
}

.content-footer {
  display: flex;
  flex: auto;
  justify-content: flex-end;
  align-items: flex-end;
}

.content .row {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.content .list-inner {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.container {
  background-color: var(--white);
}

.sidebar {
  background-color: var(--white);
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    display: block !important;
    position: fixed;
    right: 16px;
    top: 158px;
    width: calc(17% - 32px);
  }

  @media (min-width: 1920px) {
    width: calc(17% - 40px);
    right: 20px;
    top: 182px;
  }
}

.sidebar .list {
  padding: 16px;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    padding: 20px;
    gap: 20px;
  }
}

.sidebar .item {
  position: relative;
  aspect-ratio: 3 / 2;
}

.sidebar-header {
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-weight: 700;
    background-color: var(--blue-dark);
    padding: 8px;
  }
}

.card {
  background-color: var(--white);
  height: 100%;
}

.vote-page-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.vote-page-header p,
.vote-page-header .title {
  display: flex;
  justify-content: center;
  flex: auto;
  align-items: center;
  text-align: center;
  margin-bottom: 0;
  min-height: 73px;
}

.vote-page-header p {
  @media (min-width: 1280px) {
    display: none;
  }
}

.show-selected {
  position: absolute;
  right: -10px;
  width: 56px;
  height: 56px;
  background-color: var(--blue-light);
  border: none;

  @media (min-width: 1280px) {
    display: none;
  }
}

.sidebar-footer {
  border-top: 1px solid var(--gray-medium);
  padding: 16px;
  font-size: 14px;
}

.sidebar-footer i {
  color: var(--gray-dark);
}

.rules-list {
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
  row-gap: 16px;
  padding-left: 20px;
  font-size: 16px;
}

.rules-list li::marker {
  font-weight: 700;
}

.description {
  display: grid;
}

.description-image {
  max-height: 280px;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
}

.rules .card-content,
.description .card-content {
  padding: 16px;

  @media (min-width: 1920px) {
    padding: 32px;
  }
}

.rules p {
  font-weight: 700;
  color: var(--blue-dark);
  font-size: 16px;
}

.description .card-content p {
  font-size: 16px;
}

.rules .card-content .title,
.description .card-content .title {
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--blue-light);
  color: var(--blue-dark);
  font-size: 20px;

  @media (min-width: 1280px) {
    font-size: 26px;
    padding-bottom: 24px;
    margin-bottom: 24px;
  }
}

.item-image {
  aspect-ratio: 3 / 2;
  overflow: hidden;
}

.item-content {
  display: flex;
  flex: auto;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 16px;
  background-color: var(--white);
  padding: 16px;
}

.item-footer {
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
}

.button-like {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  cursor: pointer;
  background-color: var(--blue-light);
  transition: opacity 0.3s ease-in-out;
}

.button-like.disabled:not(.liked) {
  opacity: 0.5;
}

.button-like i.icon {
  width: 24px;
  height: 24px;
}

.button-like i.icon svg {
  width: 100%;
  height: 100%;
  transition: fill 0.3s ease-in-out;
}

.button-like.liked i.icon svg,
.button-like:not(.disabled):hover i.icon svg {
  fill: var(--white);
}

.button-show {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
  background-color: var(--blue-light);
  border: 1px solid var(--blue-light);
  color: var(--white);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.button-show span {
  font-weight: 700;
  font-size: 13px;
  line-height: 1;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;
}

.button-show:hover span {
  color: var(--blue-light);
}

.button-show i.icon {
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 6px;
  height: 11px;
  font-size: 8px;
}

.button-show i.icon path {
  stroke: var(--white);
  transition: stroke 0.3s;
}

.button-show:hover {
  background-color: var(--white);
}

.button-show:hover i.icon path {
  stroke: var(--blue-light);
}

.item.card {
  display: flex;
  flex-direction: column;
}

.item .title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 16px;
  min-height: 39px;
}

.item-location {
  display: flex;
  flex: auto;
  align-items: flex-start;
  column-gap: 8px;
}

.item-location i.icon {
  width: 16px;
  height: 16px;
  display: flex;
}

.item-location i.icon svg {
  width: 100%;
  height: 100%;
}

.item-location span {
  font-size: 13px;
  color: var(--gray-dark);
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 24px);

}

.sidebar .item-remove {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 8px;
  bottom: 8px;
  z-index: 1;
  background-color: var(--orange);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.sidebar .item-remove span {
  height: 1px;
  width: 16px;
  background-color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  transform-origin: center;
}

.sidebar .item-remove span:last-child {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.voting {
  width: 100%;
  background-color: var(--white);

  @media (min-width: 1280px) {
    padding: 32px;
    width: 83%;
  }
}

.thumbs-slider {
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 60%;
    margin-left: 0;
  }
}

.thumbs-slider .swiper-slide-thumb-active {
  border-bottom: 4px solid var(--blue-dark);
}

.main-slider {
  display: none;

  @media (min-width: 1280px) {
    display: block;
  }
}

.main-slider-mobile {
  @media (min-width: 1280px) {
    display: none;
  }
}


.main-slider-mobile .swiper-slide,
.main-slider .swiper-slide {
  display: flex;
  flex-direction: column;
  height: auto;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
}

.thumbs-slider .swiper-slide {
  max-height: 60px;
}

.swiper-slide {
  @media (min-width: 1280px) {
    display: flex;
  }
}

.main-slider .image {
  width: 100%;
  height: 250px;
  aspect-ratio: 3 / 2;

  @media (min-width: 1280px) {
    width: 60%;
    height: 100%;
  }
}

.main-slider-mobile .image {
  width: 100%;
  height: 250px;
  aspect-ratio: 3 / 2;
}

.main-slider-mobile .content {
  padding: 16px;
  flex: auto;
  background-color: var(--white);
}

.main-slider .content {
  padding: 16px;
  flex: auto;
  background-color: var(--white);

  @media (min-width: 1280px) {
    padding: 0 24px;
    width: 40%;
    flex: auto;
  }
}

.voting-close {
  position: absolute;
  right: 8px;
  top: 8px;
}

.vote-button {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  cursor: pointer;
  text-align: center;
  border: 1px solid var(--blue-light);
  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (min-width: 1280px) {
    max-width: 270px;
  }
}

.vote-button.disabled:not(.liked) {
  opacity: 0.5;
}

.vote-button.liked {
  background-color: var(--blue-light);
}

.vote-button span {
  font-weight: 700;
  font-size: 18px;
  color: var(--blue-dark);
}

.vote-button i.icon {
  position: absolute;
  right: 24px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 32px;
  height: 32px;
}

.vote-button i.icon svg {
  width: 100%;
  height: 100%;
}

.vote-button.liked i.icon svg {
  stroke: var(--white);
}

.content .location {
  display: flex;
  align-items: center;
  column-gap: 16px;
}

.content .location i {
  line-height: 1;
  color: var(--gray-dark);
}
</style>