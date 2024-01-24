<template>
  <div class="basepage default-page marketing-materials-page">
    <h1 class="title">Маркетинговые материалы</h1>

    <div class="tabs">
      <div class="select-box" v-click-outside="handleClickOutside">
        <div
          @click="isOpen = !isOpen"
          class="select-box__current shadow"
          tabindex="1">
          <div
            class="select-box__value"
            v-for="tab in materials"
            :key="tab">
            <input
              class="select-box__input"
              type="radio"
              :id="`input-${tab.id}`"
              :value="tab"
              :checked="tab.id === activeCategory.id"
              @change="marketingMaterialsStore.setActiveCategory(tab.id);setQueryParameter(tab.id)"/>
            <p class="select-box__input-text">{{ tab.title }}</p>
          </div>
          <div
            class="arrow">
            <div
              class="icon"
              :class="{active: isOpen}">
              <IconArrow/>
            </div>
          </div>
        </div>
        <ul v-show="isOpen" class="select-box__list shadow rounded">
          <li
            v-for="(tab, index) in materials"
            :key="Math.random().toString(36).slice(2)">
            <label
              class="select-box__option"
              :for="`input-${tab.id}`"
              aria-hidden="true">{{ tab.title }}</label>
          </li>
        </ul>
      </div>
      <ul class="tabs__list shadow rounded">
        <li
          v-for="tab in materials"
          :key="tab.id"
          :id="tab.id"
          class="tabs__item"
          :class="{ active: tab.id === activeCategory.id }"
          @click="marketingMaterialsStore.setActiveCategory(tab.id);setQueryParameter(tab.id)">
          {{ tab.title }}
        </li>
      </ul>
    </div>

    <div class="content shadow rounded overflow-hidden">
      <div class="grid">
        <div
          class="card"
          :id="item.id"
          v-for="item in activeMaterials"
          :key="item.id">
          <TheImage
            alt="alt"
            :image="`https://marketing-materials.trifonov.space/materials/${item.id}/${item.prev}.webp`"/>
          <div class="card-content">
            <a
              :href="`https://marketing-materials.trifonov.space/materials/${item.id}/${item.source}.${item.extension}`"
              target="_blank"
              class="title card-title">{{ item.title }}</a>
            <div class="card-content-footer">
              <p class="field">
                <span class="field-title">Формат:</span>
                <span class="field-text">{{ item.format }}</span>
              </p>
              <p class="field">
                <span class="field-title">Бренд:</span>
                <span class="field-text">{{ item.brand[0] }}</span>
              </p>
              <p class="field">
                <span class="field-title">Загружено:</span>
                <span class="field-text">{{ item.update_at ? item.update_at : item.created_at }}</span>
              </p>
              <div class="buttons">
                <a class="button"
                   :href="`https://marketing-materials.trifonov.space/materials/${item.id}/${item.source}.${item.extension}`"
                   target="_blank">
                  <span class="icon">
                     <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="share-06">
                            <path
                              id="Icon"
                              d="M16.1677 10.0645C16.3508 9.9076 16.4424 9.82914 16.4759 9.73576C16.5054 9.65381 16.5054 9.56416 16.4759 9.48221C16.4424 9.38883 16.3508 9.31036 16.1677 9.15343L9.81469 3.70796C9.49952 3.43781 9.34194 3.30274 9.20852 3.29943C9.09257 3.29656 8.98181 3.3475 8.90853 3.43741C8.82422 3.54086 8.82422 3.74841 8.82422 4.16351V7.38496C7.22321 7.66505 5.75791 8.4763 4.669 9.69438C3.48184 11.0224 2.82514 12.7409 2.82422 14.5222V14.9812C3.61122 14.0331 4.59385 13.2664 5.70479 12.7334C6.68424 12.2636 7.74303 11.9852 8.82422 11.9119V15.0545C8.82422 15.4696 8.82422 15.6771 8.90853 15.7806C8.98181 15.8705 9.09257 15.9214 9.20852 15.9185C9.34194 15.9152 9.49952 15.7802 9.81469 15.51L16.1677 10.0645Z"
                              stroke="var(--blue-light)"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"/>
                          </g>
                        </svg>
                  </span>
                  <span class="text">Открыть</span>
                </a>
                <span
                  class="button"
                  @click="copyLink(`${domain}/marketing-materials?category=${activeCategory.id}&material=${item.id}`)">
                    <span
                      class="icon"
                      style="padding: 4px;">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.96484 0C2.78921 0 0.214844 2.57436 0.214844 5.75V12.8569C0.214844 13.2711 0.55063 13.6069 0.964844 13.6069C1.37906 13.6069 1.71484 13.2711 1.71484 12.8569V5.75C1.71484 3.40279 3.61763 1.5 5.96484 1.5H12.9777C13.3919 1.5 13.7277 1.16421 13.7277 0.75C13.7277 0.335786 13.3919 0 12.9777 0H5.96484Z"
                            stroke-width="0"
                            fill="var(--blue-light)"/>
                          <path
                            fill-rule="evenodd"
                            stroke-width="0"
                            clip-rule="evenodd"
                            d="M15.3674 3.54326C12.1264 3.18104 8.80327 3.18104 5.56232 3.54326C4.63905 3.64645 3.89711 4.37304 3.78829 5.30348C3.4039 8.58996 3.4039 11.91 3.78829 15.1965C3.89711 16.127 4.63904 16.8535 5.56232 16.9567C8.80328 17.319 12.1264 17.319 15.3674 16.9567C16.2907 16.8535 17.0326 16.127 17.1414 15.1965C17.5258 11.91 17.5258 8.58996 17.1414 5.30348C17.0326 4.37304 16.2907 3.64645 15.3674 3.54326ZM5.72893 5.03398C8.85915 4.68413 12.0706 4.68413 15.2008 5.03398C15.4381 5.0605 15.6247 5.24821 15.6516 5.47773C16.0224 8.64843 16.0224 11.8516 15.6516 15.0223C15.6247 15.2518 15.4381 15.4395 15.2008 15.466C12.0706 15.8159 8.85916 15.8159 5.72893 15.466C5.49158 15.4395 5.30498 15.2518 5.27813 15.0223C4.90729 11.8516 4.90729 8.64844 5.27813 5.47773C5.30498 5.24821 5.49158 5.0605 5.72893 5.03398Z"
                            fill="#57E8DF"/>
                        </svg>
                    </span>
                  <span class="text">Копировать ссылку</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRootStore} from "@/stores/marketingMaterialsStore";
import {storeToRefs} from "pinia";
import TheImage from "@/components/TheImage.vue";
import IconShare from "@/components/icons/IconShare.vue";
import IconArrow from "@/components/icons/IconArrow.vue";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import router from "@/router";
import "vue-toastification/dist/index.css";

import {useToast} from "vue-toastification";

const toast = useToast();
const domain = window.location.origin;
const route = useRoute();
const isOpen = ref(false);
const category = ref(1);
const material = ref(1);

const setQueryParameter = (value) => {
  router.push({
    path: '/marketing-materials',
    query: {
      category: value
    }
  });
};

const handleClickOutside = () => {
  isOpen.value = false;
};

const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.__ClickOutsideHandler__);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__);
  },
};

const marketingMaterialsStore = useRootStore();

onMounted(() => {
  if (route.query.category && route.query.material) {

    category.value = Number(route.query.category);
    marketingMaterialsStore.getMaterials(category.value);
    material.value = route.query.material;

    setTimeout(() => {
      const el = document.getElementById(material.value.toString());
      el.scrollIntoView({block: 'center', behavior: 'smooth'});
      el.classList.add('accent');
    }, 500)

  } else if (route.query.category) {

    category.value = Number(route.query.category);
    marketingMaterialsStore.getMaterials(category.value);

  } else {

    marketingMaterialsStore.getMaterials(1);

  }
});

const copyLink = (link) => {
  navigator.clipboard.writeText(link);
  toast.success(
    'скопировано',
    {
      timeout: 2000
    }
  )
}

const {
  materials,
  activeMaterials,
  activeCategory,
} = storeToRefs(marketingMaterialsStore);
</script>

<style scoped>
.content {
  display: flex;
  background-color: var(--white);
  padding: 16px;
  flex: auto;

  @media (min-width: 1280px) {
    padding: 16px;
    gap: 40px;
    flex-wrap: wrap;
  }

  @media (min-width: 1920px) {
    padding: 20px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 32px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-template-rows: auto;
  }
}

.card {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    max-height: 360px;
  }
}

.card.accent {
  border: 1px solid rgba(87, 232, 223, 0.4);
}

.card .image {
  box-shadow: var(--base-shadow);
  overflow: hidden;

  @media (min-width: 768px) {
    aspect-ratio: 3/4;
    flex: 1;
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  flex: 1;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
}

.card-content-footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-title {
  color: var(--blue-dark);
  padding-bottom: 20px;
  font-size: 18px;
}

.accent .card-title {
  color: var(--blue-light);
}

.card-title::after {
  content: '';
  display: block;
  position: absolute;
  height: 1px;
  width: 100%;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  background-color: var(--blue-light);
}

.icon {
  display: flex;
  width: 30px;
  height: 30px;
}

.icon svg {
  width: 100%;
  height: 100%;
}

.icon path {
  stroke: var(--blue-light);
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.button {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.button .text {
  color: var(--blue-dark);
  font-weight: bold;
  font-size: 18px;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.field {
  display: flex;
  align-items: center;
}

.field-title {
  display: flex;
  font-weight: 400;
  min-width: 80px;
  font-size: 12px;
  color: var(--gray-dark);
}

.field-text {
  font-size: 18px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.select-box {
  display: flex;
  width: 100%;
  position: relative;

  @media (min-width: 1280px) {
    display: none;
  }
}

.select-box__current {
  width: 100%;
  position: relative;
  cursor: pointer;
  outline: none;
  padding: 0 10px;
  background-color: var(--white);
}

.select-box__current:focus + .select-box__list .select-box__option {
  cursor: pointer;
}

.select-box .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  transition: transform 0.3s ease-in-out;
  transform-origin: 50% 50%;
  width: auto;
  height: auto;
}

.select-box .icon.active {
  transform: rotate(-90deg);
}

.select-box .arrow {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 32px;
  height: 100%;
  background-color: var(--blue-light);
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

.select-box__value {
  display: flex;
}

.select-box__input {
  display: none;

  &:checked + .select-box__input-text {
    display: block;
  }
}

.select-box__input-text {
  display: none;
  width: 100%;
  padding: 7px 0;
  background-color: #fff;
}

.select-box__list {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  row-gap: 10px;
  list-style: none;
  top: 40px;
  opacity: 1;
  background-color: var(--white);
  z-index: 3;

  @media (min-width: 1280px) {
    padding: 0;
  }
}

.select-box__option {
  display: block;
  padding: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #546c84;
    background-color: #fbfbfb;
  }
}

.tabs__list {
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    background-color: var(--white);
    overflow-x: hidden;
  }
}

.tabs__item {
  display: flex;
  align-items: center;
  color: var(--blue-dark);
  font-weight: 500;
  font-size: 13px;
  padding: 10px 20px;
  cursor: pointer;
  height: 100%;

  @media (min-width: 1280px) {
    text-align: center;
  }
}

.tabs__item.active {
  background-color: var(--blue-light);
  position: relative;
  z-index: 1;
}

.tabs__item.active::after {
  display: none;
}

.tabs__item:nth-child(n + 2)::after {
  content: '';
  position: absolute;
  background-color: var(--gray-dark);
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: -1px;
  margin: auto;
  width: 1px;
  height: 12px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
}

.calendar-tabs .tabs__list {
  @media (min-width: 1280px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}

.admin-page .calendar-tabs .tabs__list {
  @media (min-width: 1280px) {
    width: auto;
    display: flex;
  }
}

.calendar-tabs .tabs__item {
  justify-content: center;
}
</style>