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
        <transition name="search-header">
          <header class="search-header">
            <input
                placeholder="Поиск..."
                @click.stop
                @input="setSearchValue"
                v-model="searchValue"
                ref="searchInput"/>
            <span class="search-icon" @click="clearSearchValue()">
            <IconClose/>
          </span>
          </header>
        </transition>
        <main class="search-main" v-if="isShownResultsList">
          <section class="search-results" v-if="data.users && data.users.length > 0">
            <header class="search-results__header" @click.stop>Пользователи</header>
            <ul class="search-results__list">
              <li class="search-results__item" v-for="user in data.users" :key="user.id">
                <router-link
                    :to="`/users/${user.login}`"
                    class="search-results__link"
                    @click="clearSearchValue">
                  <div class="search-results__avatar rounded shadow overflow-hidden">
                    <TheImage
                        alt="search"
                        :image="`https://users.trifonov.space/images/users/${user.login}/avatar.webp`"/>
                  </div>
                  <div class="search-results__description">
                    <p class="search-results__title">{{ user.firstname }} {{ user.lastname }}</p>
                    <span class="search-results__position">{{ user.position }}</span>
                  </div>
                  <span class="icon">
                    <IconArrow/>
                  </span>
                </router-link>
              </li>
            </ul>
          </section>
          <section class="search-results" v-if="data.news && data.news.length > 0">
            <header class="search-results__header" @click.stop>Новости</header>
            <ul class="search-results__list">
              <li class="search-results__item" v-for="news in data.news" :key="news.id">
                <router-link
                    to="/news"
                    class="search-results__link"
                    @click="clearSearchValue">
                  <div class="search-results__avatar rounded shadow overflow-hidden">
                    <TheImage alt="search" :image="imageWeb"/>
                  </div>
                  <div class="search-results__description">
                    <p class="search-results__title">{{ news.title }}</p>
                  </div>
                  <span class="icon">
                    <IconArrow/>
                  </span>
                </router-link>
              </li>
            </ul>
          </section>
          <section class="search-results" v-if="data.documents && data.documents.length > 0">
            <header class="search-results__header" @click.stop>Документы</header>
            <ul class="search-results__list">
              <li class="search-results__item" v-for="document in data.documents" :key="document.id">
                <a
                    class="search-results__link"
                    :href="`https://regulations.trifonov.space/documents/${document.url}`"
                    download
                    @click="clearSearchValue">
                  <div class="search-results__avatar rounded shadow overflow-hidden">
                    <IconDoc :ext="document.ext"/>
                  </div>
                  <div class="search-results__description">
                    <p class="search-results__title">{{ document.title }}</p>
                  </div>
                  <span class="icon">
                    <IconArrow/>
                  </span>
                </a>
              </li>
            </ul>
          </section>
          <section class="search-results" v-if="data.instructions && data.instructions.length > 0">
            <header class="search-results__header" @click.stop>Инструкции</header>
            <ul class="search-results__list">
              <li class="search-results__item" v-for="instruction in data.instructions" :key="instruction.id">
                <router-link
                    to="/instructions"
                    class="search-results__link"
                    @click="clearSearchValue">
                  <div class="search-results__avatar rounded shadow overflow-hidden">
                    <div class="icon">
                      <IconDocSearch/>
                    </div>
                  </div>
                  <div class="search-results__description">
                    <p class="search-results__title">{{ instruction.title }}</p>
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
import imageWeb from "@/assets/img/news-cover-search.webp";

import TheImage from "@/components/TheImage.vue";
import axios from "axios";
import IconDoc from "@/components/icons/IconDoc.vue";
import IconDocSearch from "@/components/icons/IconDocSearch.vue";

const isShownResultsList = ref(false);
const searchValue = ref('');
const searchInput = ref(null);
const props = defineProps({
  isActive: Boolean,
});
const emit = defineEmits(['toggleStatus', 'toggleStatusMobileNav']);
const data = ref([]);
const keys = ['firstname', 'middlename', 'lastname', 'position', 'title', 'description', 'tags', 'content'];

const setSearchValue = async (e) => {
  searchValue.value = e.target.value;
  isShownResultsList.value = searchValue.value.length > 2;
  if (searchValue.value.length > 2) {
    data.value = [];
    await axios
        .get(`https://test.trifonov.space/api/search/show?search=${searchValue.value}`)
        .then((res) => {
          data.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
    console.log(data.value);
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
  transition: backdrop-filter 0.3s ease-in-out;
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
  overflow-y: scroll;
  height: 90%;
  scrollbar-width: none;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: var(--white);
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