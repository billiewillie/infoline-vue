<template>
  <div class="basepage userpage">
    <div class="gallery shadow rounded overflow-hidden">
      <Swiper
          :modules="modules"
          :slides-per-view="1"
          navigation
          loop
          v-if="user.gallery">
        <SwiperSlide v-for="item in user.gallery" :key="item">
          <picture>
            <source :srcset="imageWeb" type="image/webp"/>
            <img :src="image" alt="news" loading="lazy"/>
          </picture>
        </SwiperSlide>
      </Swiper>
    </div>
    <header class="user-header shadow rounded">
      <div class="user-name">
        <span class="user-name__surname">{{ user.lastname }}</span>
        <span class="user-name__name">{{ user.firstname }} {{ user.middlename }}</span>
      </div>
      <div class="user-birthday">
        <span class="icon rounded" v-if="isBDay">
          <IconBirthday/>
        </span>
        <span class="user-birthday__column-title">День рождения: </span>
        <span
            class="user-birthday__column-value"
            :style="isBDay ? `color: var(--blue-light)` : ``">
          {{ user.day }} {{ getMonthName(user.month) }}
        </span>
      </div>
    </header>
    <div class="user-contacts shadow rounded">
      <div class="user-contacts__column">
        <span class="icon">
          <IconPhone/>
        </span>
        <div class="user-contacts__column-value">
          <span>Местный телефон: </span>
          <span>{{ user.localphone }}</span>
        </div>
      </div>
      <div class="user-contacts__column">
        <span class="icon">
          <IconMail/>
        </span>
        <div class="user-contacts__column-value">
          <span>Эл. почта: </span>
          <a :href="`mailto:${user.email}`">{{ user.email }}</a>
        </div>
        <span class="icon icon-copy">
          <IconCopy @click="copyMail(user.email)"/>
        </span>
      </div>
      <div class="user-contacts__column">
        <span class="icon">
          <IconPhone/>
        </span>
        <div class="user-contacts__column-value">
          <span>Мобильный: </span>
        </div>
        <div class="user-contacts__column-value phone-value">
          <template v-for="item in user.companies" :key="item.id">
            <template v-if="item.department.phone">
              <div class="user-contacts__column-value-row">
                <div class="user-contacts__column-value">
                  <a :href="`tel:${item.department.phone}`">{{ formatPhoneNumber(item.department.phone) }}</a>
                </div>
                <span class="icon icon-copy">
                  <IconCopy @click="copyPhone(item.department.phone)"/>
                </span>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div class="user-position shadow rounded overflow-hidden">
      <Swiper
          :modules="modules"
          :slides-per-view="1"
          navigation
          loop
          v-if="user.companies"
      >
        <SwiperSlide v-for="item in user.companies" :key="item.id">
          <div class="user-position__row">
            <span class="user-position__column-title">Регион/ДП: </span>
            <span class="user-position__column-value">{{ item.department.locations }}</span>
          </div>
          <div class="user-position__row">
            <span class="user-position__column-title">Компания: </span>
            <span class="user-position__column-value">{{ item.title }}</span>
          </div>
          <div class="user-position__row">
            <span class="user-position__column-title">Отдел: </span>
            <router-link to="/" class="user-position__column-value">{{ item.department.title }}</router-link>
          </div>
          <div class="user-position__row" v-show="item.department.groups.title">
            <span class="user-position__column-title">Группа: </span>
            <span class="user-position__column-value">{{ item.department.groups.title }}</span>
          </div>
          <div class="user-position__row">
            <span class="user-position__column-title">Должность: </span>
            <span class="user-position__column-value">{{ item.department.groups.position.title }}</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="user-location shadow rounded">
      <img src="@/assets/img/map.jpg" alt="map">
    </div>
  </div>
</template>

<script setup>
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {ref} from "vue";
import {getMonthName} from "@/functions/getMonthName";
import imageWeb from '@/assets/img/lazareva.webp';
import image from '@/assets/img/lazareva.jpg';
import {formatPhoneNumber} from "@/functions/formatPhoneNumber";
import {useToast} from "vue-toastification";
import "vue-toastification/dist/index.css";

import 'swiper/css';
import 'swiper/css/navigation';
import IconBirthday from "@/components/icons/IconBirthday.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconCopy from "@/components/icons/IconCopy.vue";

const toast = useToast();
const modules = [Navigation];
const user = ref({
  "id": 79,
  "token": "etwe4t21452341f",
  "login": "belinovich",
  "email": "lidzhi-goryaev@bioline.ru",
  "firstname": "Марина",
  "middlename": "Руслановна",
  "lastname": "Лазарева",
  "avatar": "belinovich.webp",
  "localphone": 259,
  "month": 5,
  "day": 21,
  "gallery": [
    {
      "src": "lazareva"
    },
    {
      "src": "lazareva"
    },
    {
      "src": "lazareva"
    }
  ],
  "companies": [
    {
      "id": 1,
      "user_id": 79,
      "company_id": 1,
      "title": "БиоЛайн",
      "url": "bioline",
      "sort": 600,
      "department": {
        "locations": "Санкт-Петербург",
        "title": "Отдел рекламы",
        "email": "",
        "url": "advertising",
        "phone": "79214088648",
        "groups": {
          "title": "Группа web-разработки",
          "email": "",
          "url": "web",
          "position": {
            "title": "web-программист"
          }
        }
      }
    },
    {
      "id": 2,
      "user_id": 89,
      "company_id": 2,
      "title": "БиоЛайн df",
      "url": "bioline",
      "sort": 600,
      "department": {
        "locations": "Санкт-Петербург",
        "title": "Отдел рекламы",
        "email": "",
        "url": "advertising",
        "phone": "79214088649",
        "groups": {
          "title": "Группа web-разработки",
          "email": "",
          "url": "web",
          "position": {
            "title": "web-программист"
          }
        }
      }
    }
  ],
  "status": [
    {
      "date_start": "2023-05-19",
      "date_end": null,
      "title": "в отпуске"
    }
  ]
});

const date = new Date();
const isBDay = ref(false);
const month = date.getMonth() + 1;
const day = date.getDate();

if (day === user.value.day && month === user.value.month) {
  isBDay.value = true;
}

const copyMail = (email) => {
  navigator.clipboard.writeText(email);
  toast.success('скопировано', {
    timeout: 2000
  })
}

const copyPhone = (phone) => {
  navigator.clipboard.writeText(`+${phone}`);
  toast.success('скопировано', {
    timeout: 2000
  })
}
</script>

<style scoped>
.userpage {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;

  @media (min-width: 1280px) {
    height: 100vh;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, minmax(0, auto));
    gap: 16px;
  }

  @media (min-width: 1920px) {
    gap: 20px;
  }
}

.userpage .gallery {
  @media (min-width: 1280px) {
    grid-row-start: 1;
    grid-row-end: 4;
  }
}

.userpage .user-header,
.userpage .user-contacts {

  @media (min-width: 1280px) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
}

.userpage .user-header {
  display: flex;
  flex-direction: column;
  padding: 24px;
  row-gap: 10px;

  @media (min-width: 1280px) {
    row-gap: 20px;
    padding: 30px 40px;
  }

  @media (min-width: 1920px) {
    row-gap: 20px;
    padding: 50px 64px;
  }
}

.user-name {
  color: var(--blue-dark);
  display: flex;
  flex-direction: column;
  font-size: 32px;

  @media (min-width: 1280px) {
    font-size: 40px;
  }

  @media (min-width: 1920px) {
    font-size: 66px;
    min-height: 160px;
  }
}

.user-birthday {
  font-size: 22px;
  display: flex;
  align-items: center;
  column-gap: 14px;
}

.user-birthday__column-title {
  font-size: 16px;
  color: var(--gray-dark);

  @media (min-width: 1280px) {
    font-size: 20px;
  }
}

.user-birthday__column-value {
  font-weight: 700;
  font-size: 18px;

  @media (min-width: 1280px) {
    font-size: 24px;
  }
}

.user-birthday .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  background-color: var(--blue-light);
}

.user-birthday .icon svg {
  width: 13px;
  height: 13px;

  @media (min-width: 1280px) {
    width: 15px;
    height: 15px;
  }
}

.user-name span {
  font-weight: 700;
}

.icon-copy {
  cursor: pointer;
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

.user-contacts__column:hover .icon-copy {
  opacity: 1;
}

.user-name .user-name__surname {
  display: block;
}

.userpage .user-contacts {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  justify-content: space-between;
  background-color: var(--blue-dark);
  color: var(--white);
  padding: 30px 24px;

  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    row-gap: 20px;
    padding: 40px 44px;
  }

  @media (min-width: 1920px) {
    padding: 60px 64px;
  }
}

.user-location {
  background-color: var(--white);
}

.user-location img {
  object-fit: contain;
}

.user-position {
  background-color: var(--white);
}

.user-position__column-title {
  font-size: 13px;
  font-weight: 400;
  min-width: 80px;
  color: var(--gray-dark);
}

.user-position__column-value {
  font-size: 16px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }

  @media (min-width: 1920px) {
    font-size: 16px;
  }
}

a.user-position__column-value {
  color: var(--blue-light);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.user-position__row {
  display: flex;
  column-gap: 60px;
}

.userpage .swiper-wrapper {
  padding: 0;
}

.user-position .swiper-slide {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  padding: 30px;

  @media (min-width: 1280px) {
    padding: 30px 44px;
  }

  @media (min-width: 1920px) {
    padding: 60px 64px;
  }
}

.user-contacts__column-value.phone-value {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.user-contacts__column-value span {
  @media (min-width: 1280px) {
    font-size: 12px;
  }

  @media (min-width: 1920px) {
    font-size: 19px;
  }
}

.user-contacts__column-value a {
  color: var(--blue-light);
  text-decoration: underline;
  text-underline-offset: 4px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }

  @media (min-width: 1920px) {
    font-size: 19px;
  }
}

.user-contacts__column {
  display: flex;
  column-gap: 10px;
  align-items: center;
}

.user-contacts__column .icon {
  display: flex;
}

.user-contacts__column svg {
  width: 15px;
  height: 15px;

  @media (min-width: 1280px) {
    width: 18px;
    height: 18px;
  }
}

.user-contacts__column-value-row {
  display: flex;
  column-gap: 10px;
}
</style>