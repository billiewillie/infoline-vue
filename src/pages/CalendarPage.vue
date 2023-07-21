<template>
  <div class="basepage calendar-page">
    <div class="row row-calendar">
      <TheCalendar
          :attributes="attributes"
          :activeDay="activeDate"
          @toggleDate="calendarStore.toggleDate"
          @toggleMonth="calendarStore.toggleMonth"
      />
      <div class="filters rounded shadow">
        <TheTabs
            v-if="countries"
            :tabs="countries"
            :activeTab="activeCountry"
            @setActiveTab="calendarStore.setActiveCountry"
            class="calendar-tabs"/>
        <div class="filters-grid">
          <div
              class="filters-item"
              :class="{ active: item.title === activeCategory.title }"
              v-for="item in categories"
              :key="item.title"
              @click="calendarStore.toggleCategory(item)">
            <div class="icon">
              <component :is="item.icon"/>
            </div>
            <p class="text">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h2 class="title rounded">В этот день</h2>
      <div class="list" v-if="dayEvents.length > 0">
        <div
            class="item rounded shadow"
            v-for="event in dayEvents"
            :key="event.id">
          <div class="location">
            <div class="icon">
              <IconMarker/>
            </div>
            <p>{{ activeCountry }} {{ event.city }}</p>
          </div>
          <header class="item-header">
            <div class="icon">
              <IconCorpCalendar v-if="event.category === 'Корпоративные мероприятия'"/>
              <IconExhibition v-if="event.category === 'Выставки и семинары'"/>
              <IconProdCalendar v-if="event.category === 'Производственный календарь'"/>
            </div>
            <p class="title">{{ event.title }}</p>
          </header>
          <div class="item-content">
            <div class="item-content__block">
              <div class="item__content__block-row" v-for="date in event.timetable" :key="date.date">
                <div class="item-detail">
                  <div class="icon">
                    <IconCalendarBlue/>
                  </div>
                  <span class="text">{{
                      new Date(date.date).getDate()
                    }} {{ getMonthName(new Date(date.date).getMonth() + 1) }}</span>
                </div>
                <div class="item-detail">
                  <div class="icon">
                    <IconClock/>
                  </div>
                  <span class="text" v-if="event.time_start">{{ event.time_start }} - {{ event.time_end }}</span>
                  <span class="text" v-else>Весь день</span>
                </div>
              </div>
            </div>
            <div class="item-content__block">
              <div class="item-detail" v-if="event.url">
                <router-link :to="`${event.url}`" class="link">Подробнее</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-else>Нет событий</p>
    </div>
    <div class="row">
      <h2 class="title rounded">В этот месяце</h2>
      <div class="list" v-if="monthEvents.length > 0">
        <div
            class="item rounded shadow"
            v-for="event in monthEvents"
            :key="event.id">
          <div class="location">
            <div class="icon">
              <IconMarker/>
            </div>
            <p>{{ activeCountry }} {{ event.city }}</p>
          </div>
          <header class="item-header">
            <div class="icon">
              <IconCorpCalendar v-if="event.category === 'Корпоративные мероприятия'"/>
              <IconExhibition v-if="event.category === 'Выставки и семинары'"/>
              <IconProdCalendar v-if="event.category === 'Производственный календарь'"/>
            </div>
            <p class="title">{{ event.title }}</p>
          </header>
          <div class="item-content">
            <div class="item-content__block">
              <div class="item__content__block-row" v-for="date in event.timetable" :key="date.date">
                <div class="item-detail">
                  <div class="icon">
                    <IconCalendarBlue/>
                  </div>
                  <span class="text">{{
                      new Date(date.date).getDate()
                    }} {{ getMonthName(new Date(date.date).getMonth() + 1) }}</span>
                </div>
                <div class="item-detail">
                  <div class="icon">
                    <IconClock/>
                  </div>
                  <span class="text" v-if="event.time_start">{{ event.time_start }} - {{ event.time_end }}</span>
                  <span class="text" v-else>Весь день</span>
                </div>
              </div>
            </div>
            <div class="item-content__block">
              <template v-if="event.url">
                <router-link :to="`${event.url}`" class="link">Подробнее</router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
      <p v-else>Нет событий</p>
    </div>
  </div>
</template>

<script setup>
import TheCalendar from "@/components/TheCalendar.vue";
import {ref, shallowRef} from "vue";
import TheTabs from "@/components/TheTabs.vue";
import IconProdCalendar from "@/components/icons/IconProdCalendar.vue";
import IconCorpCalendar from "@/components/icons/IconCorpCalendar.vue";
import IconExhibition from "@/components/icons/IconExhibition.vue";
import IconElseEvents from "@/components/icons/IconElseEvents.vue";
import IconClock from "@/components/icons/IconClock.vue";
import IconCalendarBlue from "@/components/icons/IconCalendarBlue.vue";
import IconMarker from "@/components/icons/IconMarker.vue";
import {setMonthsEvents} from "@/functions/setMonthsEvents";
import {setDaysEvents} from "@/functions/setDaysEvents";
import {getMonthName} from "@/functions/getMonthName";
import {useRootStore} from "@/stores/calendarStore";
import {storeToRefs} from "pinia";

const date = new Date();
const icons = {
  IconProdCalendar,
  IconCorpCalendar,
  IconExhibition,
  IconElseEvents
}

const categories = shallowRef([
  {
    title: 'Производственный календарь',
    icon: icons.IconProdCalendar,
  },
  {
    title: 'Корпоративные мероприятия',
    icon: icons.IconCorpCalendar,
  },
  {
    title: 'Выставки и семинары',
    icon: icons.IconExhibition,
  },
  {
    title: 'Все события',
    icon: icons.IconElseEvents,
  }
]);

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
</script>

<style scoped>
.calendar-page {
  display: flex;
  flex-direction: column;
  margin: auto;
  row-gap: 20px;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 16px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1920px) {
    gap: 20px;
  }
}

.row {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media (min-width: 1920px) {
    gap: 20px;
  }
}

.calendar-page .calendar-wrapper {
  @media (min-width: 1280px) {
    height: calc(50vh - 49px);
    padding-right: 2px;
  }

  @media (min-width: 1920px) {
    height: calc(50vh - 65px);
  }
}

.row-calendar {
  grid-template-columns: 1fr;
}

h2.title {
  background-color: var(--blue-dark);
  color: var(--white);
  font-size: 15px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
    gap: 16px;
  }

  @media (min-width: 1920px) {
    gap: 20px;
  }
}

.item {
  background-color: var(--white);
}

.filters {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
}

.tabs {
  position: relative;
  z-index: 1;
  margin-bottom: 0;
  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.21);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.21);
}

.filters-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  background-color: var(--white);
  padding: 0 24px;

  @media (min-width: 1280px) {
    row-gap: 0;
    padding: 17px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    height: 100%;
  }

  @media (min-width: 1920px) {
    padding: 17px 24px;
  }
}

.filters-item {
  display: flex;
  align-items: center;
  column-gap: 24px;
  padding: 24px 0;
  border-top: 1px solid var(--gray-medium);
  cursor: pointer;

  @media (min-width: 1280px) {
    padding: 10px 12px;
    column-gap: 14px;
    border-top: 1px solid var(--gray-medium);
  }
}

.filters-item.active p {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.filters-item:first-child {
  border-top: none;
}

.filters-item:nth-child(2) {
  @media (min-width: 1280px) {
    border-top: none;
  }
}

.filters-item:nth-child(odd) {
  @media (min-width: 1280px) {
    border-right: 1px solid var(--gray-medium);
  }
}

.filters-item .icon {
  display: flex;
  align-items: center;
  width: 29px;
  height: 29px;

  @media (min-width: 1280px) {
    width: 20px;
    height: 20px;
  }
}

.filters-item .icon svg {
  width: 100%;

  @media (min-width: 1280px) {
    min-width: 20px;
    min-height: 20px;
  }
}

.filters-item .text {
  font-size: 18px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }

  @media (min-width: 1920px) {
    font-size: 14px;
  }
}

.filters .tabs {
  margin-bottom: 0;
}

.filters .tabs__item {
  width: 25%;
  justify-content: center;
}

.item {
  display: flex;
  flex-direction: column;
  @media (min-width: 1280px) {
    padding: 15px;
    row-gap: 15px;
  }
}

.item .location {
  display: flex;
  align-items: center;
  padding: 10px;
  column-gap: 10px;
  font-size: 12px;

  @media (min-width: 1280px) {
    padding: 10px 0;
  }
}

.item .location .icon {
  width: 18px;
  height: 18px;
}

.item .location .icon svg {
  width: 18px;
  height: 18px;
}

.item-header {
  display: flex;
  padding: 10px;
  column-gap: 10px;
  font-size: 16px;
  color: var(--blue-dark);

  @media (min-width: 1280px) {
    padding: 0;
  }
}

.item-header .icon {
  width: 18px;
  height: 18px;
}

.item-header .icon svg {
  width: 18px;
  height: 18px;
}

.item-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
  row-gap: 10px;
  column-gap: 10px;
  border-top: 1px solid var(--gray-medium);

  @media (min-width: 1280px) {
    flex-direction: row;
    row-gap: 0;
    padding: 15px 0 0 0;
  }
}

.item-content__block {
  display: flex;
}

.item-content__block:first-child {
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media (min-width: 1280px) {
    width: 60%;
  }

  @media (min-width: 1920px) {
    width: 50%;
  }
}

.item__content__block-row {
  display: flex;
}

.item__content__block-row:not(:first-child) .icon {
  visibility: hidden;
}

.item-content__block:last-child {
  @media (min-width: 1280px) {
    justify-content: flex-end;
    flex: auto;
    align-self: flex-end;
  }
}

.item-content__block:last-child .item-detail {
  @media (min-width: 1280px) {
    width: 100%;
    justify-content: flex-end;
  }
}

.item-content__block a {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.item-detail {
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-size: 14px;
  color: var(--blue-dark);
  width: 50%;

  @media (min-width: 1280px) {
    font-size: 11px;
  }

  @media (min-width: 1920px) {
    font-size: 14px;
  }
}

.item-detail .icon {
  width: 18px;
  height: 18px;
}

.item-detail .icon svg {
  width: 18px;
  height: 18px;
}

.item-footer {
  display: flex;
  justify-content: center;
  padding: 18px;

  @media (min-width: 1280px) {
    order: 2;
  }
}

.item-footer a {
  font-size: 16px;
  font-weight: 700;
  color: var(--blue-dark);
  text-decoration: underline;
  text-underline-offset: 4px;

  @media (min-width: 1280px) {
    font-size: 14px;
  }
}
</style>