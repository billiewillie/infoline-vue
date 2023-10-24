<template>
  <div class="basepage default-page vote-page">
    <header class="vote-page-header">
      <h1 v-show="!isSidebarOpen" class="title">Фотоконкурс «Место силы»</h1>
      <p v-show="isSidebarOpen">Отобранные фото</p>
      <div class="show-selected" @click="isSidebarOpen = !isSidebarOpen;isVotingOpen = false">
        <i class="icon" v-if="isSidebarOpen">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.75 15.75V10.2C5.75 9.78001 5.75 9.56999 5.83175 9.40956C5.90365 9.26843 6.01839 9.1537 6.15951 9.08179C6.31994 9.00005 6.52996 9.00005 6.95 9.00005H9.05C9.47004 9.00005 9.68006 9.00005 9.84049 9.08179C9.98161 9.1537 10.0963 9.26843 10.1683 9.40956C10.25 9.56999 10.25 9.78001 10.25 10.2V15.75M7.26327 2.07306L2.17654 6.0294C1.83652 6.29387 1.6665 6.4261 1.54402 6.5917C1.43552 6.73839 1.3547 6.90365 1.30552 7.07935C1.25 7.2777 1.25 7.49308 1.25 7.92385V13.35C1.25 14.1901 1.25 14.6102 1.41349 14.931C1.5573 15.2133 1.78677 15.4427 2.06901 15.5866C2.38988 15.75 2.80992 15.75 3.65 15.75H12.35C13.1901 15.75 13.6101 15.75 13.931 15.5866C14.2132 15.4427 14.4427 15.2133 14.5865 14.931C14.75 14.6102 14.75 14.1901 14.75 13.35V7.92385C14.75 7.49308 14.75 7.2777 14.6945 7.07935C14.6453 6.90365 14.5645 6.73839 14.456 6.5917C14.3335 6.4261 14.1635 6.29387 13.8235 6.02941L8.73673 2.07306C8.47324 1.86812 8.34149 1.76565 8.19601 1.72626C8.06765 1.69151 7.93235 1.69151 7.80399 1.72626C7.65851 1.76565 7.52677 1.86812 7.26327 2.07306Z"
                stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </i>
        <i class="icon" v-else>
          <svg
              fill="var(--blue-light)"
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="var(--white)">
            <g id="SVGRepo_iconCarrier">
              <path
                  d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
            </g>
          </svg>
        </i>
      </div>
    </header>
    <div class="sidebar shadow rounded overflow-hidden" v-show="isSidebarOpen">
      <header class="sidebar-header">Отобранные фото</header>
      <div class="list" v-if="selectedImages[0] && selectedImages[0].data.length > 0">
        <div class="list-inner" v-for="category in selectedImages" :key="category.category">
          <div
              class="item rounded overflow-hidden"
              v-for="item in category.data"
              :key="item">
            <TheImage
                alt="img"
                :fallback="contestData.list.find(el => el.category === category.category).data.find(el => el.id === item).url"
                :image="contestData.list.find(el => el.category === category.category).data.find(el => el.id === item).url"/>
            <div
                @click="contestStore.removeImageFromSelectedImages(item, category.category);contestStore.sendLikedImages(user_id)"
                class="item-remove rounded">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div
          style="padding: 16px"
          v-else>Нет выбранных фото
      </div>
      <footer class="sidebar-footer">
        <i>Голосов осталось: </i>
        <template v-if="selectedImages.length">{{ totalLimit - selectedImages[0].data.length }}</template>
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
      <div
          v-for="category in contestData.list"
          :key="category.category"
          class="list">
        <h2 class="list-title title" style="margin-bottom: 16px">{{ category.category }}</h2>
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
                    @click="contestStore.addImageToSelectedImages(item, category.category, user_id);contestStore.sendLikedImages(user_id)"
                    class="button-like rounded"
                    :class="{
                      disabled: selectedImages.find(el => el.category === category.category).data.length >= contestData.list.find(el => el.category === category.category).limit,
                      liked: selectedImages.find(el => el.category === category.category).data.includes(item.id)
                   }">
                  <i class="icon">
                    <svg
                        fill="var(--white)"
                        width="64px"
                        height="64px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="2"
                        stroke="var(--blue-dark)">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                      </g>
                    </svg>
                  </i>
                </div>
                <div class="button-show rounded" @click="isVotingOpen = true;changeSlides(item.id)">
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
          @slide-change="showQueue"
          :thumbs="{
            swiper: thumbsSwiper,
            autoUpdate: false
          }">
        <SwiperSlide
            v-for="item in activeGallery.data"
            :key="item.id">
          <TheImage
              alt="img"
              :image="item.url"
              @click="setActivePhoto()"
              :fallback="item.url"/>
          <div class="content">
            <h2 class="title">{{ item.title }}</h2>
            <p v-html="item.description"></p>
            <div class="location" v-if="item.location">
              <i class="icon">
                <IconMarker/>
              </i>
              <i>{{ item.location }}</i>
            </div>
            <div class="content-footer">
              <div
                  @click="contestStore.addImageToSelectedImages(item, activeGallery.category, user_id);contestStore.sendLikedImages(user_id)"
                  :class="{
                    disabled: selectedImages.find(el => el.category === activeGallery.category).data.length >= contestData.list.find(el => el.category === activeGallery.category).limit,
                    liked: selectedImages.find(el => el.category === activeGallery.category).data.includes(item.id)
                  }"
                  class="vote-button rounded">
                <span v-if="!selectedImages.find(el => el.category === activeGallery.category).data.includes(item.id)">Проголосовать</span>
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
          @slide-change-transition-end="showQueue"
          :thumbs="{
            swiper: thumbsSwiper,
            autoUpdate: false
          }">
        <SwiperSlide
            v-for="item in activeGallery.data"
            :key="item.id">
          <TheImage
              @click="isPopupOpen = true;setActivePhoto()"
              alt="img"
              :image="item.url"
              :fallback="item.url"/>
          <div class="image-cover">
            <i class="icon">
              <IconLoop/>
            </i>
          </div>
          <div class="content">
            <h2 class="title">{{ item.title }}</h2>
            <p v-html="item.description"></p>
            <div v-if="item.location" class="location">
              <i class="icon">
                <IconMarker/>
              </i>
              <span>{{ item.location }}</span>
            </div>
            <div class="content-footer">
              <div
                  @click="contestStore.addImageToSelectedImages(item, activeGallery.category, user_id);contestStore.sendLikedImages(user_id)"
                  :class="{
                    disabled: selectedImages.find(el => el.category === activeGallery.category).data.length >= contestData.list.find(el => el.category === activeGallery.category).limit,
                    liked: selectedImages.find(el => el.category === activeGallery.category).data.includes(item.id)
                  }"
                  class="vote-button rounded">
                <span v-if="!selectedImages.find(el => el.category === activeGallery.category).data.includes(item.id)">Проголосовать</span>
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
      <div class="voting-close" @click="isVotingOpen = false">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="popup" v-show="isPopupOpen">
      <div class="popup-backdrop" @click="isPopupOpen = false"></div>
      <div class="popup-image">
        <TheImage
            alt="image"
            :fallback="activePhoto"
            :image="activePhoto"/>
      </div>
      <div class="popup-close" @click="isPopupOpen = false">
        <span></span>
        <span></span>
      </div>
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
import IconLoop from "@/components/icons/IconLoop.vue";
import IconLike from "@/components/icons/IconLike.vue";

const params = useRoute().params;
const user_id = params.id.split('-')[0];
const windowWidth = ref(window.innerWidth);
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const contestStore = useRootStore();
contestStore.getContestData(params.id);
const {contestData, activeGallery, totalLimit, selectedImages} = storeToRefs(contestStore);

const selectedImagesLimit = ref(1);
const sliderRef = ref(null);
const sliderRefMobile = ref(null);
const sliderThumbs = ref(null);
const currentSlide = ref(0);

const modules = [Navigation, Thumbs, EffectFade];
const isSidebarOpen = ref(false);
const isVotingOpen = ref(false);
const isPopupOpen = ref(false);
const activePhoto = ref('');

const changeSlides = (id) => {
  const arrayLength = activeGallery.value.data.length;
  const elIndex = activeGallery.value.data.findIndex(el => el.id === id);
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

const setActivePhoto = () => {
  Array.from(document.querySelectorAll('.main-slider .swiper-slide.swiper-slide-active .image img')).forEach(item => activePhoto.value = item.getAttribute('src'));
}

const setActivePhotoMobile = () => {
  Array.from(document.querySelectorAll('.main-slider-mobile .swiper-slide.swiper-slide-active .image img')).forEach(item => activePhoto.value = item.getAttribute('src'));
}
</script>

<style scoped>
.image-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease-in-out;
}

.main-slider .image:hover + .image-cover {
  opacity: 1;
}

.image-cover i.icon {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.image-cover i.icon svg {
  width: 100%;
  height: 100%;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
}

.popup .popup-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

.popup .popup-image {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  max-height: 90%;
  max-width: 90%;
  z-index: 4;
}

.popup .popup-close {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  top: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 5;
}

.popup .popup-close span {
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: var(--white);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transform: rotate(45deg)
}

.popup .popup-close span:nth-child(2) {
  transform: rotate(-45deg)
}

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

.sidebar .list-inner {
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
  display: flex;
  align-items: center;
  justify-content: center;
  right: -10px;
  width: 56px;
  height: 56px;
  background-color: var(--blue-light);
  border: none;

  @media (min-width: 1280px) {
    display: none;
  }
}

.show-selected i.icon {
  width: 30px;
  height: 30px;
}

.show-selected i.icon svg {
  height: 100%;
  width: 100%;
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
  background-color: var(--white);
  border: 1px solid var(--blue-light);
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
}

.button-like:not(.disabled):hover i.icon svg {
  fill: var(--blue-light);
  stroke: var(--white);
}

.button-like.liked i.icon svg {
  fill: var(--blue-dark);
  stroke: var(--blue-light);
}

.button-like.liked:hover i.icon svg {
  fill: var(--blue-dark);
  stroke: var(--white);
}

.button-like:hover {
  background-color: var(--blue-light);
}

.button-like.liked {
  background-color: var(--blue-dark);
  border: 1px solid var(--blue-dark);
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
  border-bottom: 4px solid var(--blue-light);
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

  @media (min-width: 1280px) {
    flex-direction: row;
  }
}

.main-slider .swiper-slide {
  height: auto;
}

.thumbs-slider .swiper-slide {
  max-height: 60px;
  height: auto;
}

.thumbs-slider .swiper-slide .image {
  width: 100%;
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
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.voting-close span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 100%;
  height: 2px;
  background-color: var(--black);
}

.voting-close span:nth-child(2) {
  transform: translate(-50%, -50%) rotate(-45deg);
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
  right: 16px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
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
  column-gap: 8px;
}

.content .location i {
  line-height: 1;
  color: var(--gray-dark);
}
</style>