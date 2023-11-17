<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class="title">Админка мероприятий</h1>
    </div>
    <div class="filters rounded">
      <TheTabs
          v-if="countries"
          :tabs="countries"
          :activeTab="activeCountry"
          @setActiveTab="calendarStore.setActiveCountry"
          class="calendar-tabs"/>
    </div>

    <router-link to="/admin/events/create" class="btn rounded">Новое мероприятие</router-link>
    <div class="content shadow rounded">
      <header class="events-header">
        <div>Название</div>
        <div>Город</div>
        <div>Категория</div>
        <div>Дата начала</div>
        <div>Действия</div>
      </header>
      <ul class="events-list">
        <li class="event-item" v-for="event in sortedData" :key="event.id">
          <h2 class="title event-title">{{ event.title }}</h2>
          <div class="event-date">{{ event.city }}</div>
          <div class="event-category">{{ event.category }}</div>
          <div class="event-date">{{ formateDateToHumanDate(event.date_start) }}</div>
          <div class="event-btns">
            <router-link :to="`/admin/events/edit/${event.id}`" class="btn btn-green rounded">Редактировать
            </router-link>
            <button @click="calendarStore.deleteEvent(event.id)" class="btn btn-red rounded">Удалить</button>
          </div>
        </li>
      </ul>
      <div class="pagination"></div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useRootStore} from "@/stores/calendarStore";
import TheTabs from "@/components/TheTabs.vue";
import {onUpdated, ref} from "vue";
import {formateDateToHumanDate} from "@/functions/formatDateToHumanDate";

const sortedData = ref([]);

const calendarStore = useRootStore();
calendarStore.getData();

const {
  data,
  dayEvents,
  activeDate,
  countries,
  attributes,
  monthEvents,
  activeCountry,
  activeCategory,
} = storeToRefs(calendarStore);

onUpdated(() => {
  sortedData.value = data.value[activeCountry.value].sort((a, b) => {
    return new Date(b.date_start) - new Date(a.date_start);
  });
})
</script>

<style scoped>
.content {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
}

.events-list {
  display: flex;
  flex-direction: column;
}

.event-item,
.events-header {
  display: grid;
  align-items: flex-start;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  gap: 8px;
}

.events-header {
  padding: 24px 16px;
}

.event-item:nth-child(odd) {
  background-color: var(--gray-light);
}

.event-item {
  padding: 16px;
}

.events-header div {
  font-weight: 700;
}

.event-title, .event-date, .event-category {
  font-size: 14px;
}

.event-btns {
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
}

.event-btns .btn {
  display: flex;
  margin-bottom: 0;
  flex: 1 1 0;
  justify-content: center;
  font-size: 14px;
}

.btn {
  background-color: var(--blue-light);
  color: var(--black);
  padding: 10px 20px;
  margin-bottom: 24px;
  display: inline-flex;
  line-height: 1;
  font-size: 16px;
}

.btn-red {
  background-color: var(--orange);
  border: 1px solid var(--orange);
  cursor: pointer;
}
</style>