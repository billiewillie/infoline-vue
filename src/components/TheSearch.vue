<template>
  <div
      class="search"
      @click="
        $emit('toggleStatus', true);
        $emit('toggleStatusMobileNav', false);
        setInputFocused()">
    <div class="search-button">Поиск...</div>
    <span class="search-icon">
      <IconLoop/>
    </span>
  </div>
  <Teleport to="body">
    <div
        class="search-overlay"
        v-show="isActive === true"
        @click="$emit('toggleStatus', false);clearSearchValue()">
      <div class="container">
        <header class="search-header">
          <input
              placeholder="Поиск..."
              @click.stop
              @input="setSearchValue"
              v-model="searchValue"
              ref="searchInput"
          />
          <span class="search-icon" @click="clearSearchValue()">
            <IconClose/>
          </span>
        </header>
        <main class="search-main" v-if="isShownResultsList">
          <section class="search-results" v-for="list in data" :key="list.title">
            <header class="search-results__header" @click.stop>{{ list.title }}</header>
            <ul class="search-results__list">
              <li class="search-results__item" v-if="list.title === 'люди'">
                <router-link
                    to="/news"
                    class="search-results__link"
                    @click="clearSearchValue"
                    v-for="item in list.list"
                    :key="item.id">
                  <div class="search-results__avatar rounded shadow overflow-hidden">
                    <picture>
                      <source :srcset="imageWeb" type="image/webp"/>
                      <img :src="image" alt="news" loading="lazy"/>
                    </picture>
                  </div>
                  <div class="search-results__description">
                    <p class="search-results__title">{{ item.firstName }}</p>
                    <span class="search-results__position">{{ item.position }}</span>
                  </div>
                  <span class="icon">
                    <IconArrow/>
                  </span>
                </router-link>
              </li>
              <li class="search-results__item" v-if="list.title === 'документы'">
                <a
                    download
                    class="search-results__link"
                    v-for="item in list.list"
                    :href="item.link"
                    @click="clearSearchValue"
                    :key="item.id">
                  <div class="search-results__avatar rounded shadow overflow-hidden">
                    <picture>
                      <source :srcset="imageWeb" type="image/webp"/>
                      <img :src="image" alt="news" loading="lazy"/>
                    </picture>
                  </div>
                  <div class="search-results__description">
                    <p class="search-results__title">{{ item.title }}</p>
                  </div>
                  <span class="icon">
                    <IconArrow/>
                  </span>
                </a>
              </li>
              <li class="search-results__item" v-if="list.title === 'новости'">
                <router-link
                    to="/news"
                    class="search-results__link"
                    @click="clearSearchValue"
                    v-for="item in list.list"
                    :key="item.id">
                  <div class="search-results__avatar rounded shadow overflow-hidden">
                    <picture>
                      <source :srcset="imageWeb" type="image/webp"/>
                      <img :src="image" alt="news" loading="lazy"/>
                    </picture>
                  </div>
                  <div class="search-results__description">
                    <p class="search-results__title">{{ item.title }}</p>
                  </div>
                  <span class="icon">
                    <IconArrow/>
                  </span>
                </router-link>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import IconLoop from "@/components/icons/IconLoop.vue";
import IconClose from "@/components/icons/IconClose.vue";
import IconArrow from "@/components/icons/IconArrow.vue";
import {nextTick, ref} from "vue";
import axios from "axios";
import json from "@/assets/data/search.json";
import imageWeb from "@/assets/img/lazareva.webp";
import image from "@/assets/img/lazareva.jpg";

const isShownResultsList = ref(false);
const searchValue = ref('');
const searchInput = ref(null);
const props = defineProps({
  isActive: Boolean,
});
const emit = defineEmits(['toggleStatus', 'toggleStatusMobileNav']);
const data = ref([]);
const keys = ['firstName', 'middleName', 'lastName', 'position', 'title', 'description', 'category'];

const setSearchValue = (e) => {
  searchValue.value = e.target.value;
  isShownResultsList.value = searchValue.value.length > 2;
  if (searchValue.value.length > 2) {
    data.value = [];
    json.forEach(item => {
      item.list.forEach(el => {
        keys.forEach(key => {
          if (el[key] && el[key].toLowerCase().includes(searchValue.value.toLowerCase())) {
            if (data.value.length === 0) {
              data.value.push({
                title: item.title,
                list: [el]
              })
            } else {
              data.value.forEach((valueItem) => {
                if (valueItem.title === item.title) {
                  valueItem.list.push(el);
                } else {
                  data.value.push({
                    title: item.title,
                    list: [el]
                  })
                }
              })
            }
          }
        })
      })
    });
    isShownResultsList.value = true;
  }
};
const clearSearchValue = () => {
  searchValue.value = '';
  isShownResultsList.value = false;
  data.value = [];
};

const setInputFocused = () => {
  nextTick(() => {
    searchInput.value.focus();
  })
}
</script>

<style scoped>
.search {
  height: 100%;
}

.search {
  display: flex;
  cursor: pointer;
}

.search-button {
  background-color: var(--white);
  opacity: 0.9;
  display: none;
  align-items: center;

  @media (min-width: 1280px) {
    display: flex;
    padding: 0 18px;
    min-width: 236px;
    font-size: 12px;
  }

  @media (min-width: 1920px) {
    min-width: 325px;
    font-size: 16px;
  }
}

.search-icon {
  background-color: var(--blue-light);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  cursor: pointer;

  @media (min-width: 1280px) {
    width: 50px;
  }

  @media (min-width: 1920px) {
    width: 70px;
  }
}

.search-icon svg {
  width: 17px;
  height: 17px;

  @media (min-width: 1920px) {
    width: 21px;
    height: 21px;
  }
}

.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.61);
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
}

.search-overlay .container {
  width: 100%;
  max-width: 900px;
}

.search-header {
  display: flex;
  height: 56px;
  width: 100%;

  @media (min-width: 1280px) {
    height: 50px;
  }

  @media (min-width: 1920px) {
    height: 70px;
  }
}

.search-header input {
  flex: auto;
  padding: 0 23px;
  font-size: 16px;
  font-family: var(--font-base);
  outline: none;
}

.search-main {
  display: flex;
  flex-direction: column;
}

.search-results {
  display: flex;
  flex-direction: column;
}

.search-results__header {
  background-color: var(--blue-dark);
  color: var(--white);
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  padding: 5px;
}

.search-results__list {
  display: flex;
  flex-direction: column;
}

.search-results__link {
  padding: 11px 24px 11px 11px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  column-gap: 22px;
  transition: background-color 0.3s ease-in-out;
}

.search-results__link:hover {
  background-color: var(--blue-light);
}

.search-results__avatar {
  width: 70px;
  height: 70px;
  filter: drop-shadow(0 1px 5px rgba(0, 0, 0, 0.21));
}

.search-results__avatar img {
  object-position: center top;
}

.search-results__description {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex: auto;
}

.search-results__title {
  font-weight: 700;
  font-size: 14px;
  color: var(--blue-dark);
}

.search-results__position {
  color: var(--gray-dark);
  font-size: 13px;
}

</style>