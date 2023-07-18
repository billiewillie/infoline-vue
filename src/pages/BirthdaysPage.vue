<template>
  <div class="basepage">
    <h1 class="title">Дни рождения</h1>
    <TheTabs
        :tabs="months"
        :activeTab="activeMonth"
        @setActiveTab="setActiveMonth"
    />
    <div class="content">
      <div class="month">
        <h2 class="month-title title subtitle">{{ activeMonth }}</h2>
        <div class="list">
          <router-link
              :to="`users/${item.login}`"
              class="card rounded shadow"
              :class="{ active: isBirthday(item)}"
              v-for="item in birthdays[activeMonth]">
            <div class="icon">
              <IconGift/>
            </div>            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">{{ item.lastname}} {{ item.firstname }}</p>
            <footer class="card-footer">
              <span class="date">{{ item.day }} {{ getMonthName(item.month) }}</span>
            </footer>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconGift from "@/components/icons/IconGift.vue";
import TheTabs from "@/components/TheTabs.vue";
import {ref} from "vue";
import {useRootStore} from "@/stores/birthdaysStore";
import {storeToRefs} from "pinia";
import {getMonthName} from "@/functions/getMonthName";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const data = ref([])

const date = new Date();
const activeMonth = ref(months[date.getMonth()]);
const activeMonthNumber = ref(date.getMonth())

const setActiveMonth = (month) => {
  activeMonth.value = month;
  activeMonthNumber.value = months.indexOf(month);
};

const birthdaysStore = useRootStore();
birthdaysStore.getBirthdays();
const {birthdays} = storeToRefs(birthdaysStore);

const isBirthday = (item) => {
  return new Date().getMonth() + 1 === item.month && new Date().getDate() === item.day;
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.month-title {
  margin-bottom: 20px;
  color: var(--gray-dark);

  @media (min-width: 1280px) {
    display: block;
  }
}

.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 45px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  row-gap: 30px;
  background-color: var(--white);

  @media (min-width: 1280px) {
    display: grid;
    flex-direction: initial;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    padding-right: 20px;
    column-gap: 20px;
    row-gap: 0;
    transition: box-shadow 0.3s ease-in-out;
  }
}

.card:hover {
  box-shadow: 0 1px 14px var(--gray-medium);
}

.card.active:hover {
  box-shadow: 0 1px 14px var(--blue-light);
}

.photo {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;

  @media (min-width: 1280px) {
    grid-row-start: 1;
    grid-row-end: 3;
    width: 132px;
    -webkit-border-radius: 3px 0 0 3px;
    -moz-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
  }
}

.title {
  font-size: 27px;
  text-align: center;
  color: var(--blue-dark);
}

.subtitle {
  color: var(--gray-dark);
  border-bottom: 1px solid var(--gray-medium);
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.name {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    font-size: 18px;
  }
}

.card-footer {
  display: flex;
  align-items: center;
  border-top: 1px solid var(--gray-medium);

  @media (min-width: 1280px) {
    column-gap: 15px;
  }
}

.date {
  display: flex;
  flex: auto;
  justify-content: center;
  font-weight: 700;
  font-size: 27px;
  color: var(--black);
  padding: 10px 0;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    font-size: 18px;
    padding: 0;
  }
}

.active .date {
  color: var(--blue-light);
}

.icon {
  display: none;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background-color: var(--blue-light);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  -webkit-border-radius: 0 3px 0 3px;
  -moz-border-radius: 0 3px 0 3px;
  border-radius: 0 3px 0 3px;

  @media (min-width: 1280px) {
    width: 35px;
    height: 35px;
  }
}

.active .icon {
  display: flex;
}
</style>