<template>
  <div class="birthdays-card">
    <header class="birthdays-card-header">
			<span class="icon">
				<IconBirthday/>
			</span>
      <span class="text">С Днем Рождения!</span>
      <router-link to="/birthdays" class="birthdays-card-link shadow rounded">все</router-link>
    </header>
    <div class="birthdays-list">
      <router-link
          :to="{name: 'User', params: {id: 'belinovich'}}"
          class="birthdays-link rounded shadow overflow-hidden"
          v-for="item in birthdaysIndexPage"
          :key="item.id">
        <div class="birthdays-avatar overflow-hidden">
          <TheImage
              :image="`http://users.trifonov.space/images/users/${item.login}/gallery_1.webp`"
              alt="alt" />
        </div>
        <span class="birthdays-name">{{ item.lastname }} {{ item.firstname }}</span>
        <div class="birthdays-date">
          <span>{{ item.day }}</span>
          <span>{{ getMonthName(item.month) }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import imageWebp from '@/assets/img/gallery-1.jpeg';
import IconBirthday from '@/components/icons/IconBirthday.vue';
import {getMonthName} from '@/functions/getMonthName';

import {useRootStore} from "@/stores/birthdaysStore";
import {storeToRefs} from "pinia";
import TheImage from "@/components/TheImage.vue";

const birthdaysStore = useRootStore();
birthdaysStore.getBirthdaysIndexPage();
const {birthdaysIndexPage} = storeToRefs(birthdaysStore);

</script>

<style scoped>
.birthdays-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.birthdays-card-header {
  position: relative;
  display: flex;
  justify-content: center;
  background-color: var(--blue-dark);
  color: var(--white);
  column-gap: 8px;
  padding: 8px 0;
  width: 100%;
  text-align: center;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
  align-items: center;

  @media (min-width: 1280px) {
    display: flex;
    text-align: left;
    align-self: start;
    -webkit-border-radius: 3px 3px 0 0;
    -moz-border-radius: 3px 3px 0 0;
    border-radius: 3px 3px 0 0;
    column-gap: 10px;
    padding: 5px 0;
  }

  @media (min-width: 1920px) {
    padding: 6px 11px 7px 8px;
    column-gap: 14px;
  }
}

.birthdays-card-header .icon {
  display: flex;
  align-items: center;
  height: 100%;

  @media (min-width: 1280px) {
    left: 0;
    position: relative;
    width: 13px;
    height: 13px;
  }

  @media (min-width: 1920px) {
    width: 19px;
    height: 19px;
  }
}

.birthdays-card-header .icon svg {
  width: 19px;
  height: 19px;

  @media (min-width: 1280px) {
    width: 13px;
    height: 13px;
  }

  @media (min-width: 1920px) {
    width: 19px;
    height: 19px;
  }
}

.birthdays-card-header .text {
  font-weight: 700;
  font-size: 15px;

  @media (min-width: 1280px) {
    font-size: 13px;
  }
}

.birthdays-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  width: 100%;
  row-gap: 16px;

  @media (min-width: 1280px) {
    padding: 8px 0 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 12px;
    height: 100%;
  }
}

.birthdays-link {
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: var(--white);

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
}

.birthdays-date {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    padding: 10px 0;
  }
}

.birthdays-date span {
  color: var(--gray-dark);
  font-weight: 700;
  width: 100%;
  text-align: center;

  @media (min-width: 1280px) {
    font-size: 14px;
  }
}

.birthdays-avatar {
  height: 100%;
  aspect-ratio: 1 / 1;
  grid-row-start: 1;
  grid-row-end: 3;

  @media (min-width: 1280px) {
    aspect-ratio: inherit;
    width: 100%;
    flex: auto;
  }
}

.birthdays-avatar img {
  object-position: top center;
}

.birthdays-name {
  display: flex;
  flex-wrap: nowrap;
  color: var(--blue-dark);
  font-weight: 700;
  font-size: 16px;
  padding: 0 4px;
  min-height: 43px;
  border-bottom: 1px solid var(--gray-medium);
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media (min-width: 1280px) {
    font-size: 10px;
    padding: 10px 4px;
  }

  @media (min-width: 1920px) {
    font-size: 13px;
  }
}

.birthdays-card-link {
  position: absolute;
  display: flex;
  align-items: center;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto;
  color: var(--white);
  text-decoration: underline;
  font-weight: 500;
  font-size: 15px;

  @media (min-width: 1280px) {
    font-size: 11px;
  }

  @media (min-width: 1920px) {
    font-size: 13px;
  }
}
</style>
