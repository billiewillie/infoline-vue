<template>
  <div class="basepage calendar-page">
    <div class="row row-calendar">
      <TheCalendar
          :attributes="attributes"
          :activeDay="activeDate"
          @toggleDate="toggleDate"
          @toggleMonth="toggleMonth"
      />
      <div class="filters rounded shadow">
        <TheTabs
            v-if="countries"
            :tabs="countries"
            :activeTab="activeCountry"
            @setActiveTab="setActiveCountry"
            class="calendar-tabs"/>
        <div class="filters-grid">
          <div
              class="filters-item"
              :class="{ active: item.title === activeCategory.title }"
              v-for="item in categories"
              :key="item.title"
              @click="toggleCategory(item)"
          >
            <div class="icon">
              <component :is="item.icon"/>
            </div>
            <p
                class="text"
            >{{ item.title }}</p>
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
import {onMounted, ref, shallowRef} from "vue";
import TheTabs from "@/components/TheTabs.vue";
import IconProdCalendar from "@/components/icons/IconProdCalendar.vue";
import IconCorpCalendar from "@/components/icons/IconCorpCalendar.vue";
import IconExhibition from "@/components/icons/IconExhibition.vue";
import IconElseEvents from "@/components/icons/IconElseEvents.vue";
import IconClock from "@/components/icons/IconClock.vue";
import IconCalendarBlue from "@/components/icons/IconCalendarBlue.vue";
import IconGlobe from "@/components/icons/IconGlobe.vue";
import IconMarker from "@/components/icons/IconMarker.vue";
import {getPrettyDatesRange} from "@/functions/getPrettyDatesRange";
import {setMonthsEvents} from "@/functions/setMonthsEvents";
import {setDaysEvents} from "@/functions/setDaysEvents";
import {getMonthName} from "../functions/getMonthName";

const date = new Date();
const icons = {
  IconProdCalendar,
  IconCorpCalendar,
  IconExhibition,
  IconElseEvents
}

const countries = ref([]);
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
const activeCategory = ref(categories.value[3]);
const activeCountry = ref('');
const dayEvents = ref([]);
const monthEvents = ref([]);
const fullDate = ref([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
const activeDate = ref(fullDate.value);
const attributes = ref([
  {
    highlight: 'blue',
    dates: [],
  },
  {
    highlight: 'red',
    dates: [],
  }
]);
const data = ref({
  "Россия": [
    {
      "id": 1,
      "title": "Здравоохранение - TIHE 2023 руддщ вавыа ва ыаы выа",
      "url": "/news/nurses-day-2023",
      "description": "13-15 апреля группа компаний «БиоЛайн» примет участие в ключевом событии для медицинского сообщества Узбекистана – международной выставке TIHE-2023.\r\n</p>\r\n<p>\r\nМероприятие является не только демонстрационной платформой, но и включает в себя обширную научно-практическую программу с участием ведущих специалистов, посвященную современным технологиям в Здравоохранении.",
      "date_start": "2023-6-5",
      "date_end": "2023-6-6",
      "time_start": "10",
      "time_end": "19",
      "day": 2,
      "month": 6,
      "category": "Корпоративные мероприятия",
      "city": "Москва",
      "timetable": [
        {
          "date": "2023-6-5",
          "time_start": "10:00",
          "time_end": "12:00"
        },
        {
          "date": "2023-6-6",
          "time_start": "11:00",
          "time_end": "14:00"
        }
      ]
    },
    {
      "id": 3,
      "title": "День России выаыв выавыа выав ыаываы вавыа",
      "url": "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BD%D1%8C_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8",
      "description": "Праздник День России",
      "date_start": "2023-6-12",
      "date_end": "2023-6-12",
      "time_start": null,
      "time_end": null,
      "day": 12,
      "month": 6,
      "category": "Производственный календарь",
      "city": null,
      "timetable": [
        {
          "date": "2023-6-12",
          "time_start": "10:00",
          "time_end": "12:00"
        }
      ]
    },
    {
      "id": 2,
      "title": "Здравоохранение - TIHE 2024",
      "url": "https://bioline.ru/news/nurses-day-2023",
      "description": "«БиоЛайн» примет участие в ключевом событии для медицинского сообщества Узбекистана – международной выставке TIHE-2023.\r\n</p>\r\n<p>\r\nМероприятие является не только демонстрационной платформой, но и включает в себя обширную научно-практическую программу с участием ведущих специалистов, посвященную современным технологиям в Здравоохранении.",
      "date_start": "2023-07-05",
      "date_end": "2023-07-06",
      "time_start": 12,
      "time_end": 14,
      "day": 2,
      "month": 6,
      "category": "Выставки и семинары",
      "city": "Санкт-Петербург",
      "timetable": [
        {
          "date": "2023-07-05",
          "time_start": "12:00",
          "time_end": "14:00"
        },
        {
          "date": "2023-07-06",
          "time_start": "13:00",
          "time_end": "15:00"
        }
      ]
    },
  ],
  "Казахстан": [],
  "Узбекистан": [],
  "Беларусь": [],
});
const calendar = ref(null);

const toggleDate = (value) => {
  activeDate.value = value;
  dayEvents.value = data
      .value[activeCountry.value]
      .filter(item => setDaysEvents(item.date_start, item.date_end, activeDate.value));
}

const toggleMonth = (result) => {
  activeDate.value = result;
  setActiveEvents();
}

const setActiveCountry = (country) => {
  activeCountry.value = country;
  setActiveEvents();
}

const setActiveEvents = () => {
  if (activeCategory.value.title === "Все события") {

    dayEvents.value = data
        .value[activeCountry.value]
        .filter(item => setDaysEvents(item.date_start, item.date_end, activeDate.value));

    monthEvents.value = data
        .value[activeCountry.value]
        .filter(item => setMonthsEvents(item.date_start, item.date_end, activeDate.value));

    attributes.value[0].dates = [
      new Date(),
      ...data
          .value[activeCountry.value]
          .filter(item => item.category !== 'Производственный календарь')
          .map(item => {
            if (item.date_start !== item.date_end) {
              const dateStart = new Date(item.date_start);
              const dateEnd = new Date(item.date_end);
              const dates = [];

              while (dateStart <= dateEnd) {
                dates.push(new Date(dateStart));
                dateStart.setDate(dateStart.getDate() + 1);
              }
              return dates;
            } else {
              return new Date(item.date_start);
            }
          })
    ].flat();

    attributes.value[1].dates = [
      ...data
          .value[activeCountry.value]
          .filter(item => item.category === 'Производственный календарь')
          .map(item => {
            if (item.date_start !== item.date_end) {
              const dateStart = new Date(item.date_start);
              const dateEnd = new Date(item.date_end);
              const dates = [];

              while (dateStart <= dateEnd) {
                dates.push(new Date(dateStart));
                dateStart.setDate(dateStart.getDate() + 1);
              }
              return dates;
            } else {
              return new Date(item.date_start);
            }
          })
    ].flat();

  } else {
    dayEvents.value = data
        .value[activeCountry.value]
        .filter(item => item.category === activeCategory.value.title)
        .filter(item => setDaysEvents(item.date_start, item.date_end, activeDate.value));

    monthEvents.value = data
        .value[activeCountry.value]
        .filter(item => item.category === activeCategory.value.title)
        .filter(item => setMonthsEvents(item.date_start, item.date_end, activeDate.value));

    attributes.value[0].dates = [
      new Date(),
      ...data
          .value[activeCountry.value]
          .filter(item => {
            if (activeCategory.value.title === 'Корпоративные мероприятия') {
              return item.category === 'Корпоративные мероприятия'
            } else if (activeCategory.value.title === 'Выставки и семинары') {
              return item.category === 'Выставки и семинары'
            }
          })
          .map(item => {
            if (item.date_start !== item.date_end) {
              const dateStart = new Date(item.date_start);
              const dateEnd = new Date(item.date_end);
              const dates = [];

              while (dateStart <= dateEnd) {
                dates.push(new Date(dateStart));
                dateStart.setDate(dateStart.getDate() + 1);
              }
              return dates;
            } else {
              return new Date(item.date_start);
            }
          })
    ].flat();

    attributes.value[1].dates = [
      ...data
          .value[activeCountry.value]
          .filter(item => {
            if (activeCategory.value.title === 'Производственный календарь') {
              return item.category === 'Производственный календарь'
            }
          })
          .map(item => {
            if (item.date_start !== item.date_end) {
              const dateStart = new Date(item.date_start);
              const dateEnd = new Date(item.date_end);
              const dates = [];

              while (dateStart <= dateEnd) {
                dates.push(new Date(dateStart));
                dateStart.setDate(dateStart.getDate() + 1);
              }
              return dates;
            } else {
              return new Date(item.date_start);
            }
          })
    ].flat();

  }
}

const toggleCategory = (category) => {
  activeCategory.value = category;
  console.log(activeCategory.value.title);
  setActiveEvents();
}

onMounted(() => {
  countries.value = Object.keys(data.value);
  setActiveCountry(countries.value[0]);
  setActiveEvents();
})
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