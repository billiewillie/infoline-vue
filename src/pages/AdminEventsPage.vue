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

    <div class="content shadow rounded">
      <router-link to="/admin/events/create">Новое мероприятие</router-link>
      <ul class="events-list">
        <li class="event-item" v-for="event in data[activeCountry]" :key="event.id">
          <h2 class="title event-title">{{ event.title }}</h2>
          <div>{{event.category}}</div>
          <div class="event-date">{{event.date_start}}</div>
          <div class="event-date">{{event.date_end}}</div>
          <div class="event-btns">
            <router-link :to="`/admin/events/edit/${event.id}`">Редактировать</router-link>
            <button>Удалить</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useRootStore} from "@/stores/calendarStore";
import TheTabs from "@/components/TheTabs.vue";

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

console.log(data.value['Россия']);
</script>

<style scoped>
.content {
  background-color: var(--white);
  padding: 16px;
}

.events-list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.event-item {
  display: grid;
  align-items: flex-start;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 8px;
}

.event-title {
  font-size: 16px;
}

.event-date {
  text-align: center;
}

.event-btns {
  display: flex;
  justify-content: space-between;
}
</style>