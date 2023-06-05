<template>
  <div class="birthdays-card shadow rounded">
    <header class="birthdays-card-header">
      <span class="icon">
        <IconBirthday/>
      </span>
      <span class="text">С Днем Рождения!</span>
      <div class="birthdays-footer">
        <router-link to="/" class="birthdays-card-link shadow rounded">все</router-link>
      </div>
    </header>
    <ul class="birthdays-list">
      <li class="birthdays-item rounded shadow overflow-hidden" v-for="item in birthdays" :key="item.id">
        <router-link :to="{name: 'User', params: {id: 'belinovich'}}" class="birthdays-link">
          <div class="birthdays-avatar overflow-hidden">
            <picture>
              <source
                  type="image/webp"
                  :srcset="`${USERS_IMAGES_URL}/${item.login}/${item.login}.webp`"
              >
              <img
                  :src="`${USERS_IMAGES_URL}/${item.login}/${item.login}.jpg`"
                  alt="birthday-avatar"
              >
            </picture>
          </div>
          <span class="birthdays-name">{{ item.firstname }}<br>{{ item.lastname }}</span>
          <div class="birthdays-date">
            <span class="name">{{ item.day }}</span> <span class="name">{{ getMonthName(item.month) }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import IconBirthday from "@/components/icons/IconBirthday.vue";
import {onMounted, ref} from "vue";
import {getMonthName} from "@/functions/getMonthName";
import {USERS_API_URL, USERS_IMAGES_URL} from "@/constants";

const birthdays = ref([]);

onMounted(() => {
  fetch(`${USERS_API_URL}/upcoming-birthdays/4`)
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
  padding-bottom: 25px;

  @media (min-width: 1280px) {
    padding-bottom: 11px;
    row-gap: 11px;
  }

  @media (min-width: 1920px) {
    padding-bottom: 11px;
    row-gap: 11px;
  }
}

.birthdays-card-header {
  background-color: var(--blue-dark);
  color: var(--white);
  column-gap: 10px;
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
    padding: 4px 11px 4px 5px;
  }

  @media (min-width: 1920px) {
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
  display: flex;
  justify-content: center;
  column-gap: 13px;

  @media (min-width: 1280px) {
    column-gap: 13px;
  }

  @media (min-width: 1920px) {
    column-gap: 16px;
    padding: 0 30px;
  }
}

.birthdays-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 11px;
  padding-bottom: 11px;
}

.birthdays-date {
  font-size: 11px;
  text-align: center;
  color: var(--gray-dark);
  -webkit-border-radius: 3px 3px 3px 0;
  -moz-border-radius: 3px 3px 3px 0;
  border-radius: 3px 3px 3px 0;

  @media (min-width: 1280px) {
    font-size: 9px;
  }

  @media (min-width: 1920px) {
    font-size: 11px;
    min-width: 74px;
  }
}

.birthdays-date span {
  font-weight: 700;
}

.birthdays-avatar {
  width: 90px;
  height: 90px;

  @media (min-width: 1280px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 1920px) {
    width: 120px;
    height: 120px;
  }
}

.birthdays-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

  @media (min-width: 1280px) {
    font-size: 11px;
  }

  @media (min-width: 1920px) {
    font-size: 13px;
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