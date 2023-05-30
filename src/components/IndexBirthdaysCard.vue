<template>
  <div class="birthdays-card shadow rounded">
    <header class="birthdays-card-header">
      <span class="icon">
        <IconBirthday/>
      </span>
      <span class="text">С Днем Рождения!</span>
    </header>
    <ul class="birthdays-list">
      <li class="birthdays-item" v-for="item in birthdays" :key="item.id">
        <router-link :to="{name: 'User', params: {id: item.login}}" class="birthdays-link">
          <div class="birthdays-date">
            <span class="name">{{ item.day }}</span> <span class="name">{{ getMonthName(item.month) }}</span>
          </div>
          <div class="birthdays-avatar rounded shadow overflow-hidden">
            <picture>
              <source type="image/webp"
                      :srcset="`${USERS_IMAGES_URL}/${item.login}/${item.login}.webp`">
              <img :src="`${USERS_IMAGES_URL}/${item.login}/${item.login}.jpg`" alt="birthday-avatar">
            </picture>
          </div>
          <p class="birthdays-name">{{ item.firstname }} {{ item.lastname }}</p>
        </router-link>
      </li>
    </ul>
    <div class="birthdays-footer">
      <router-link to="/" class="birthdays-card-link shadow rounded">Все дни рождения</router-link>
    </div>
  </div>
</template>

<script setup>
import IconBirthday from "@/components/icons/IconBirthday.vue";
import {onMounted, ref} from "vue";
import {getMonthName} from "@/functions/getMonthName";
import {USERS_IMAGES_URL} from "@/constants";

const birthdays = ref([]);

onMounted(() => {
  fetch('http://users.trifonov.space/api/show/upcoming-birthdays/4')
      .then(res => res.json())
      .then(data => {
        birthdays.value = data
      })
})
</script>

<style scoped>
.birthdays-card {
  display: flex;
  flex-direction: column;

  align-items: center;
  background: linear-gradient(180deg, #57E8DF 16.25%, #A557CA 88.31%);
  padding-bottom: 25px;

  @media (min-width: 1280px) {
    padding-bottom: 10px;
  }
}

.birthdays-card-header {
  background-color: var(--purple);
  color: var(--white);
  column-gap: 10px;
  padding: 8px 0;
  margin-bottom: 60px;
  width: 100%;
  text-align: center;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
  align-items: center;

  @media (min-width: 1280px) {
    display: flex;
    width: auto;
    text-align: left;
    align-self: start;
    -webkit-border-radius: 3px 0 3px 0;
    -moz-border-radius: 3px 0 3px 0;
    border-radius: 3px 0 3px 0;
    margin-bottom: 13px;
    column-gap: 10px;
    padding: 4px 11px 4px 5px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 10px;
    padding: 6px 11px 7px 8px;
    column-gap: 14px;
  }
}

.birthdays-card-header .icon {
  position: absolute;
  display: flex;
  align-items: center;
  left: 8px;
  top: 0;
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
    font-size: 10px;
  }

  @media (min-width: 1920px) {
    font-size: 13px;
  }
}

.birthdays-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 13px;
  row-gap: 27px;
  margin-bottom: 34px;

  @media (min-width: 1280px) {
    row-gap: 17px;
    column-gap: 10px;
    margin-bottom: 8px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 5px;
    column-gap: 50px;
    row-gap: 21px;
  }
}

.birthdays-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  padding: 0 30px;

  @media (min-width: 1280px) {
    row-gap: 6px;
    padding: 0 10px;
  }
}

.birthdays-date {
  position: absolute;
  color: var(--white);
  font-size: 11px;
  padding: 5px;
  min-width: 74px;
  text-align: center;
  background-color: var(--orange);
  top: -11px;
  left: calc(50% + 8px);
  z-index: 1;
  -webkit-border-radius: 3px 3px 3px 0;
  -moz-border-radius: 3px 3px 3px 0;
  border-radius: 3px 3px 3px 0;

  @media (min-width: 1280px) {
    font-size: 9px;
    min-width: 63px;
    padding: 2px 5px;
    top: -5px;
  }

  @media (min-width: 1920px) {
    font-size: 11px;
    min-width: 74px;
    padding: 4px 5px;
    top: -11px;
    left: calc(50% + 17px);
  }
}

.birthdays-date span {
  font-weight: 700;
}

.birthdays-avatar {
  width: 90px;
  height: 90px;

  @media (min-width: 1280px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1920px) {
    width: 60px;
    height: 60px;
  }
}

.birthdays-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.birthdays-name {
  display: flex;
  text-align: center;
  color: var(--white);
  font-weight: 700;
  font-size: 16px;
  @media (min-width: 1280px) {
    font-size: 11px;
  }

  @media (min-width: 1920px) {
    font-size: 14px;
  }
}

.birthdays-footer {
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 1280px) {
    padding-right: 10px;
    justify-content: flex-end;
  }
}

.birthdays-card-link {
  color: var(--white);
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 500;
  font-size: 15px;

  @media (min-width: 1280px) {
    font-size: 10px;
  }

  @media (min-width: 1920px) {
    font-size: 13px;
  }
}
</style>