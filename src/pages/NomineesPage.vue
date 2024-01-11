<template>
  <div class="basepage newspage">
    <h1 class="title">Итоги <span>2023</span> года</h1>
    <div class="content">
      <aside class="content-aside rounded shadow overflow-hidden" v-if="menu.length && menu.length > 0">
        <div
          class="aside-item"
          :class="{
              open: item.title === openAsideMenu,
              active: item.id === activeMenu.id
            }"
          v-for="item in menu"
          :key="item.title">
          <p
            @click="menuClickHandler(item); openMenu(item)"
            class="aside-item-title">{{ item.title }} <i
            class="icon"
            v-if="item.innerMenu && item.innerMenu.length > 0">
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 10L2.76297 8.42742C4.1689 7.17332 4.87187 6.54627 4.98011 5.782C5.00663 5.59474 5.00663 5.40526 4.98011 5.218C4.87187 4.45373 4.1689 3.82668 2.76297 2.57258L1 1"
                :stroke="item.id === activeMenu.id ? 'var(--blue-light)' : 'var(--white)'"
                stroke-width="1"
                stroke-linecap="round"/>
            </svg>
          </i>
          </p>
          <template v-if="item.innerMenu && item.innerMenu.length > 0">
            <div class="inner-menu">
              <div class="overflow-hidden">
                <div
                  class="inner-menu-item"
                  :class="{ active: subItem.id === activeMenu.id }"
                  v-for="subItem in item.innerMenu"
                  @click="menuClickHandler(subItem)"
                  :key="subItem.title">
                  <div class="inner-menu-item__container">
                    <p class="inner-menu-item-title">{{ subItem.title }}</p>
                    <p class="inner-menu-item-subtitle">{{ subItem.subtitle }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </aside>
      <aside class="content-aside rounded shadow overflow-hidden" v-else>
        <div class="aside-item">
          <p class="aside-item-title">Дебют года</p>
        </div>
        <div class="aside-item">
          <p class="aside-item-title">Специалист года <i class="icon">
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 10L2.76297 8.42742C4.1689 7.17332 4.87187 6.54627 4.98011 5.782C5.00663 5.59474 5.00663 5.40526 4.98011 5.218C4.87187 4.45373 4.1689 3.82668 2.76297 2.57258L1 1"
                stroke="var(--white)"
                stroke-width="1"
                stroke-linecap="round"/>
            </svg>
          </i>
          </p>
        </div>
        <div class="aside-item">
          <p class="aside-item-title">Проект года <i class="icon">
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 10L2.76297 8.42742C4.1689 7.17332 4.87187 6.54627 4.98011 5.782C5.00663 5.59474 5.00663 5.40526 4.98011 5.218C4.87187 4.45373 4.1689 3.82668 2.76297 2.57258L1 1"
                stroke="var(--white)"
                stroke-width="1"
                stroke-linecap="round"/>
            </svg>
          </i>
          </p>
        </div>
        <div class="aside-item">
          <p class="aside-item-title">Команда года <i class="icon">
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 10L2.76297 8.42742C4.1689 7.17332 4.87187 6.54627 4.98011 5.782C5.00663 5.59474 5.00663 5.40526 4.98011 5.218C4.87187 4.45373 4.1689 3.82668 2.76297 2.57258L1 1"
                stroke="var(--white)"
                stroke-width="1"
                stroke-linecap="round"/>
            </svg>
          </i></p>
        </div>
        <div class="aside-item">
          <p class="aside-item-title">Менеджер года</p>
        </div>
      </aside>
      <main class="content-main rounded shadow overflow-hidden">
        <div class="main-header content-container">
          <div class="text">
            <h1>{{ activeMenu.title ? activeMenu.title : 'Дебют года' }}</h1>
            <p v-if="activeMenu.subtitle">{{ activeMenu.subtitle }}</p>
          </div>
          <div class="image">
            <img
              :src="activeMenu.statueImage ? activeMenu.statueImage : defaultStatueImage"
              alt="award">
          </div>
        </div>
        <div class="main-content content-container">
          <h2 class="title">Победители</h2>
          <div class="list">
            <template
              v-for="item in content"
              :key="Math.random() * 100">
              <template v-if="item.name">
                <router-link
                  class="list-item"
                  v-if="item.login"
                  target="_blank"
                  :to="`/users/${item.login}`">
                  <TheImage
                    alt="nominee"
                    :image="item.image"
                    :fallback="PersonFallback"/>
                  <h2 class="name">{{ item.name }} {{ item.surname }}</h2>
                  <p class="position">{{ item.position }}</p>
                  <span class="city">{{ item.city }}</span>
                </router-link>
                <div
                  v-else
                  class="list-item">
                  <TheImage
                    alt="nominee"
                    :image="item.image"
                    :fallback="PersonFallback"/>
                  <h2 class="name">{{ item.name }} {{ item.surname }}</h2>
                  <p class="position">{{ item.position }}</p>
                  <span class="city">{{ item.city }}</span>
                </div>
              </template>
              <template v-else>
                <div class="list-item list-item__team rounded">
                  <p class="department">{{ item }}</p>
                </div>
              </template>
            </template>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useRootStore} from "@/stores/awardsStore";
import defaultStatueImage from "@/assets/img/award.webp";
import TheImage from "@/components/TheImage.vue";
import PersonFallback from "@/assets/img/person-fallback.webp";

const awardsStore = useRootStore();
awardsStore.getData();
const {menu, activeMenu, openAsideMenu, content} = storeToRefs(awardsStore);

const openMenu = (item) => {
  if (item.title === openAsideMenu.value) {

    openAsideMenu.value = null

  } else {

    openAsideMenu.value = item.title;

  }
}

const menuClickHandler = (item) => {
  activeMenu.value = item
  awardsStore.setContent(item)
}

</script>

<style scoped>
.title {
  margin-bottom: 20px;
  line-height: 1;
}

.title span {
  font-weight: 700;
  color: var(--blue-light);
}

.content-aside {
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: var(--blue-dark);

  @media (min-width: 768px) {
    width: 24%;
  }

  @media (min-width: 1280px) {
    min-height: 389px;
  }
}

.inner-menu {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.3s grid-template-rows ease;
  background-color: var(--white);
  padding: 0;
}

.aside-item.open .inner-menu {
  grid-template-rows: 1fr;
}

.inner-menu-item {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  cursor: pointer;
  color: var(--black);
  padding: 0 24px;
  font-size: 16px;
}

.inner-menu-item.active {
  background-color: var(--blue-light);
}

.inner-menu-item__container {
  padding: 16px 0;
  border-bottom: 1px solid var(--gray-medium);
}

.inner-menu-item:last-child .inner-menu-item__container {
  border-bottom: none;
}

.aside-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--blue-dark);
  color: var(--white);
}

.aside-item-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--black);
  cursor: pointer;
  font-size: 24px;
  padding: 8px 16px;
  transition: color 0.3s ease;

  @media (min-width: 1280px) {
    padding: 24px;
  }
}

.aside-item:last-child .aside-item-title {
  border-bottom: none;
}

.aside-item .aside-item-title .icon {
  display: flex;
  height: 11px;
  width: 6px;
  transform-origin: center;
  transition: transform 0.3s ease;
}

.aside-item.active .aside-item-title {
  color: var(--blue-light);
}

.aside-item.open .aside-item-title .icon {
  transform: rotate(90deg);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 16px;
  row-gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.content-container {
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1800px) {
    padding-left: 80px;
    padding-right: 80px;
  }
}

.content-main {
  display: flex;

  flex-direction: column;
  background-color: var(--white);

  @media (min-width: 768px) {
    width: 76%;
  }
}

.main-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  column-gap: 32px;
  row-gap: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: var(--blue-dark);
  color: var(--white);

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    min-height: 389px;
  }
}

.main-header .image {
  display: flex;
  justify-content: center;
  max-height: 355px;
  font-size: 0;
  background: radial-gradient(50% 50% at 50% 50%, #2659FF 0%, rgba(43, 54, 90, 0.80) 100%);

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1800px) {
    width: 43%;
  }
}

.main-header img {
  height: auto;
  width: 100%;
  object-fit: contain;

  @media (min-width: 768px) {
    width: auto;
  }
}

.main-header .text {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    text-align: left;
  }

  @media (min-width: 1800px) {
    width: 57%;
  }
}

.main-header h1 {
  font-size: 30px;
  font-weight: 700;

  @media (min-width: 1280px) {
    font-size: 40px;
  }

  @media (min-width: 1800px) {
    font-size: 55px;
  }
}

.main-header p {
  font-size: 22px;

  @media (min-width: 1800px) {
    font-size: 28px;
  }
}

.main-content {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
}

.main-content .title {
  text-align: center;
  font-size: 34px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--blue-light);
}

.main-content .list {
  display: grid;
  align-items: flex-start;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));

  @media (min-width: 1280px) {
    align-items: stretch;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

.main-content .list .list-item {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
  text-align: center;
}

.main-content .list .list-item.list-item__team {
  text-align: left;
  justify-content: flex-start;
  align-self: stretch;
  padding: 8px;
  border: 1px solid var(--blue-dark);
  background-color: var(--blue-dark);
}

.main-content .list .list-item.list-item__team p {
  width: 100%;
  color: var(--white);
  font-weight: 700;
}

.main-content .list .list-item .image {
  width: 100%;
  height: auto;
  overflow: hidden;
  aspect-ratio: 1/1;
  object-position: top center;
}

.main-content .list .list-item .name {
  font-size: 20px;
  font-weight: 700;
  color: var(--blue-dark);
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray-medium);
}

.main-content .list .list-item .position {
  font-size: 16px;
  color: var(--black);
  flex: auto;
}

.main-content .list .list-item .city {
  color: var(--gray-dark);
  font-size: 16px;
}

.inner-menu-item-title {
  font-weight: 700;
}
</style>