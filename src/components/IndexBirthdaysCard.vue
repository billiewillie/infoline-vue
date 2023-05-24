<template>
  <div class="birthdays-card shadow rounded">
    <header class="birthdays-card-header">
      <p>Ближайшие дни рождения</p>
    </header>
    <ul class="birthdays-list">
      <li class="birthdays-item" v-for="item in birthdays" :key="item.id">
        <router-link to="" class="birthdays-link">
          <div class="birthdays-date">
            <span class="name">{{ item.day }}</span> <span class="name">{{ item.month }}</span>
          </div>
          <div class="birthdays-avatar">
            <picture>
              <source type="image/webp" :srcset="`http://users.trifonov.space/images/users/belinovich/belinovich.webp`">
              <img :src="`http://users.trifonov.space/images/users/belinovich/belinovich.jpg`" alt="">
            </picture>
          </div>
          <p class="birthdays-avatar">
            <span class="name">{{ item.firstname }}</span> <span class="name">{{ item.lastname }}</span>
          </p>
        </router-link>
      </li>
    </ul>
    <router-link to="/" class="default-card shadow rounded">Все дни рождения</router-link>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const birthdays = ref([]);

onMounted(() => {
  fetch('http://users.trifonov.space/api/show/upcoming-birthdays/4')
      .then(res => res.json())
      .then(data => {
        birthdays.value = data
      })
      .then(data => {
        console.log(data);
      });
})
</script>

<style scoped>
.birthdays-card {
  background: linear-gradient(180deg, #57E8DF 16.25%, #A557CA 88.31%);
}

.birthdays-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
</style>