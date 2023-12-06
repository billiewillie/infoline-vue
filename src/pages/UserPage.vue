<template>
  <div class="basepage userpage">
    <ConfettiExplosion
        v-if="isConfettiVisible"
        :particleCount="200"
        :force="0.3"
        :duration="4000"/>
    <div class="gallery shadow rounded overflow-hidden">
      <Swiper
          :modules="modules"
          :slides-per-view="1"
          navigation
          loop
          v-if="user.gallery">
        <SwiperSlide v-for="i in 3" :key="i">
          <TheImage
              :alt="`${user.firstname} ${user.lastname}`"
              :fallback="PlaceholderPerson"
              v-if="isRendered"
              :image="`https://users.trifonov.space/images/users/${user.login}/gallery_${i}.webp`"/>
        </SwiperSlide>
      </Swiper>
    </div>
    <header class="user-header shadow rounded">
      <div class="user-name">
        <span class="user-name__surname">{{ user.lastname }}</span>
        <span class="user-name__name">{{ user.firstname }} {{ user.middlename }}</span>
      </div>
      <div class="user-birthday">
        <span
            class="icon rounded"
            v-if="isBDay()">
          <IconBirthday/>
        </span>
        <span class="user-birthday__column-title">День рождения: </span>
        <span
            class="user-birthday__column-value"
            :style="isBDay() ? `color: var(--blue-light)` : ``">
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
          <span>Местный тел: </span>
          <span v-if="user.localphone && user.localphone > 0">{{ user.localphone }}</span>
          <span v-else>Нет</span>
        </div>
      </div>
      <div class="user-contacts__column">
        <span class="icon">
          <IconMail/>
        </span>
        <div class="user-contacts__column-value">
          <span>Email: </span>
          <a v-if="user.email && user.email.length > 0" :href="`mailto:${user.email}`">{{ user.email }}</a>
          <span v-else>Нет</span>
        </div>
        <span class="icon icon-copy" v-if="user.email && user.email.length > 0">
          <IconCopy @click="copyMail(user.email)"/>
          <span class="tooltip">Копировать</span>
        </span>
      </div>
      <div class="user-contacts__column">
        <span class="icon">
          <IconPhone/>
        </span>
        <div class="user-contacts__column-value">
          <span>Моб: </span>
        </div>
        <div
            v-if="phones.length > 0"
            class="user-contacts__column-value phone-value">
          <template
              v-for="(item, index) in phones"
              :key="`${item}_${index}`">
            <div class="user-contacts__column-value-row">
              <div class="user-contacts__column-value">
                <a :href="`tel:${item}`">{{
                    formatPhoneNumber(item, user?.companies[0]?.department?.locations_url)
                  }}</a>
              </div>
              <span class="icon icon-copy">
                  <IconCopy @click="copyPhone(item)"/>
                  <span class="tooltip">Копировать</span>
                </span>
            </div>
          </template>
        </div>
        <div
            v-else
            class="user-contacts__column-value phone-value">
          <span>Нет</span>
        </div>
      </div>
    </div>
    <div class="user-position shadow rounded overflow-hidden">
      <Swiper
          :modules="modules"
          :slides-per-view="1"
          navigation
          loop
          v-if="user.companies">
        <SwiperSlide v-for="item in user.companies" :key="item.id">
          <div class="user-position__row">
            <span class="user-position__column-title">Регион/ДП: </span>
            <router-link
                v-if="item.department?.locations_url.length > 0"
                :to="`/locations/${item.department?.locations_url}`"
                class="user-position__column-value">{{ item.department?.locations }}
            </router-link>
            <span class="user-position__column-value" v-else>{{ item.department.locations }}</span>
          </div>
          <div class="user-position__row">
            <span class="user-position__column-title">Компания: </span>
            <span class="user-position__column-value">{{ item.title }}</span>
          </div>
          <div
              class="user-position__row"
              v-if="item.department?.title">
            <span class="user-position__column-title">Отдел: </span>
            <router-link
                v-if="item.department?.url.length > 0"
                :to="`/departments/${item.department?.url}`"
                class="user-position__column-value">
              {{ item.department?.title }}
            </router-link>
            <span class="user-position__column-value" v-else>{{ item.department?.title }}</span>
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
    <OfficeMap
        v-if="user?.location"
        :location="user?.location"/>
    <div class="fallback shadow rounded overflow-hidden" v-else>
      <p v-for="(company, index) in user?.companies" :key="company.id">
        <template v-if="index === 0">
          {{ company?.department?.locations }}
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css';
import axios from "axios";
import 'swiper/css/navigation';
import {Navigation} from 'swiper';
import "vue-toastification/dist/index.css";
import {useToast} from "vue-toastification";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {getMonthName} from "@/functions/getMonthName";
import ConfettiExplosion from "vue-confetti-explosion";
import {formatPhoneNumber} from "@/functions/formatPhoneNumber";
import IconBirthday from "@/components/icons/IconBirthday.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconCopy from "@/components/icons/IconCopy.vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import TheImage from "@/components/TheImage.vue";
import PlaceholderPerson from "@/assets/img/person-fallback.webp";
import {onMounted, ref, nextTick} from "vue";
import OfficeMap from "@/components/OfficeMap.vue";

const params = useRoute().params;
const toast = useToast();
const modules = [Navigation];
const user = ref({});
const isRendered = ref(true);
const phones = ref([]);
const isMapShow = ref(false);
const isConfettiVisible = ref(false);

const updateComponent = async () => {
  isRendered.value = false;
  await nextTick();
  isRendered.value = true;
};

const isBDay = () => {
  const date = new Date();
  return date.getDate() === user.value.day && date.getMonth() + 1 === user.value.month;
};

const copyMail = (email) => {
  navigator.clipboard.writeText(email);
  toast.success('скопировано', {
    timeout: 2000
  })
};

const copyPhone = (phone) => {
  navigator.clipboard.writeText(`+${phone}`);
  toast.success('скопировано', {
    timeout: 2000
  })
}

const explode = async () => {
  isConfettiVisible.value = false;
  await nextTick();
  isConfettiVisible.value = true;
};

onMounted(() => {
  axios
      .get(`https://users.trifonov.space/api/show/user/${params.id}`)
      .then(res => {
        user.value = res.data;
        phones.value = res.data.companies
            .map(item => item?.department?.phone)
            .filter(item => item.length > 0);
        if (isBDay() === true) {
          setTimeout(() => {
            explode();
          }, 600)
        }
      })
      .catch(err => {
        console.log(err);
      })
});

onBeforeRouteUpdate((to) => {
  axios
      .get(`https://users.trifonov.space/api/show/user/${to.params.id}`)
      .then(res => {
        user.value = res.data;
        isMapShow.value = false;
        phones.value = res.data.companies
            .map(item => item?.department?.phone)
            .filter(item => item.length > 0);
        updateComponent();
        if (isBDay() === true) {
          setTimeout(() => {
            explode();
          }, 600)
        }
      })
      .catch(err => {
        console.log(err);
      })
});
</script>

<style scoped>
.confetti-container {
  position: fixed !important;
  top: 100px;
  left: 0;
  right: 0;
  margin: auto;
  --floor-height: 100vh !important;

  @media (min-width: 1280px) {
    top: 150px;
  }

  @media (min-width: 1920px) {
    top: 200px;
  }
}

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

  @media (min-width: 1800px) {
    gap: 20px;
  }
}

.userpage .gallery {
  min-height: 555px;

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
  background-color: var(--white);

  @media (min-width: 1280px) {
    row-gap: 20px;
    padding: 30px 40px;
    justify-content: center;
  }

  @media (min-width: 1800px) {
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

  @media (min-width: 1800px) {
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
  position: relative;
  opacity: 1;
  transition: opacity .3s ease-in-out;
}

.tooltip {
  position: absolute;
  bottom: 130%;
  width: 70px;
  left: 50%;
  opacity: 0;
  font-size: 12px !important;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-in-out;
}

.icon-copy:hover .tooltip {
  opacity: 1;
}

.user-name .user-name__surname {
  display: block;
}

.userpage .user-contacts {
  display: flex;
  row-gap: 25px;
  padding: 30px 24px;
  color: var(--white);
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--blue-dark);

  @media (min-width: 1280px) {
    row-gap: 20px;
    padding: 40px;
    flex-direction: row;
    align-items: center;
  }
}

.user-position {
  background-color: var(--white);
}

.user-position__column-title {
  font-size: 13px;
  min-width: 80px;
  font-weight: 400;
  color: var(--gray-dark);
}

.user-position__column-value {
  font-size: 16px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }

  @media (min-width: 1800px) {
    font-size: 16px;
  }
}

a.user-position__column-value {
  line-height: 1.5;
  color: var(--blue-dark);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.user-position__row {
  display: flex;
  align-items: baseline;
  column-gap: 20px;
}

.userpage .swiper-wrapper {
  padding: 0;
}

.user-position .swiper-slide {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  padding: 30px 40px;

  @media (min-width: 1280px) {
    padding: 30px 44px;
  }

  @media (min-width: 1800px) {
    padding: 60px 64px;
  }
}

.user-contacts__column-value.phone-value {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.user-contacts__column-value:nth-child(2) {
  display: flex;
  column-gap: 10px;
}

.user-contacts__column-value span {
  @media (min-width: 1280px) {
    font-size: 12px;
  }

  @media (min-width: 1800px) {
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

  @media (min-width: 1800px) {
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

.user-contacts__column .icon.icon-copy {
  display: none;

  @media (min-width: 1280px) {
    display: flex;
  }
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

.fallback {
  display: flex;
  min-height: 260px;
  padding: 24px;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--white);
  color: var(--blue-light);
}

.fallback p {
  font-weight: 700;
  font-size: 20px;

  @media (min-width: 1280px) {
    font-size: 24px;
  }
}
</style>