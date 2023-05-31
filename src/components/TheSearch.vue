<template>
  <div class="search" @click="$emit('toggleStatus', true)">
    <div class="search-button">Поиск...</div>
    <span class="search-icon">
      <IconLoop/>
    </span>
  </div>
  <Teleport to="body">
    <div class="search-overlay" v-show="isActive === true" @click="$emit('toggleStatus', false)">
      <div class="container">
        <header class="search-header">
          <input placeholder="Поиск..." @click.stop />
          <span class="search-icon">
            <IconClose />
          </span>
        </header>
        <main class="search-main">
          <section class="search-results">
            <header class="search-results__header">Люди</header>
            <ul class="search-results__list">
              <li class="search-results__item">
                <router-link
                    to="/news"
                    class="search-results__link"
                    @mouseover="stroke = '#fff'"
                    @mouseout="stroke = '#57e8df'"
                >
                  <div class="search-results__avatar rounded shadow overflow-hidden">
                    <picture>
                      <source :srcset="`http://users.trifonov.space/images/users/belinovich/belinovich.webp`"
                              type="image/webp">
                      <img :src="`http://users.trifonov.space/images/users/belinovich/belinovich.jpg`" alt=""/>
                    </picture>
                  </div>
                  <div class="search-results__description">
                    <p class="search-results__title">Иванов Иван Иванович</p>
                    <span class="search-results__position">Генеральный директор</span>
                  </div>
                  <span class="icon">
                    <IconArrow :stroke="stroke"/>
                  </span>
                </router-link>
              </li>
              <li class="search-results__item">
                <router-link
                    to="/"
                    class="search-results__link"
                    @mouseover="stroke = '#fff'"
                    @mouseout="stroke = '#57e8df'">
                  <div class="search-results__avatar rounded shadow overflow-hidden">
                    <picture>
                      <source :srcset="`http://users.trifonov.space/images/users/belinovich/belinovich.webp`"
                              type="image/webp">
                      <img :src="`http://users.trifonov.space/images/users/belinovich/belinovich.jpg`" alt=""/>
                    </picture>
                  </div>
                  <div class="search-results__description">
                    <p class="search-results__title">Иванов Иван Иванович</p>
                    <span class="search-results__position">Генеральный директор</span>
                  </div>
                  <span class="icon">
                    <IconArrow :stroke="stroke"/>
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
import {ref} from "vue";

const stroke = ref('#57e8df');
const props = defineProps({
  isActive: Boolean,
})

const emit = defineEmits(['toggleStatus'])

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