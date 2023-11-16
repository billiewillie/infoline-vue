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
      <router-link to="/admin/events/create" class="btn rounded">Новое мероприятие</router-link>
      <ul class="events-list">
        <li class="event-item" v-for="event in sortedData" :key="event.id">
          <h2 class="title event-title">{{ event.title }}</h2>
          <div>{{ event.category }}</div>
          <div class="event-date">{{ event.date_start }}</div>
          <div class="event-date">{{ event.date_end }}</div>
          <div class="event-btns">
            <router-link :to="`/admin/events/edit/${event.id}`" class="btn btn-green rounded">Редактировать</router-link>
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
import {onMounted, onUpdated, ref} from "vue";

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
  padding: 16px;
}

.events-list {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.event-item {
  display: grid;
  align-items: flex-start;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
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
  column-gap: 8px;
}

.event-btns .btn {
  display: flex;
  margin-bottom: 0;
  flex: 1 1 0;
  justify-content: center;
}

.btn {
  background-color: var(--blue-light);
  color: var(--black);
  font-weight: 700;
  padding: 8px;
  margin-bottom: 24px;
  display: inline-flex;
  line-height: 1;
  font-size: 16px;
}

.btn-red {
  background-color: var(--orange);
  border: 1px solid var(--orange);
}
</style>