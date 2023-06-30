<template>
  <div class="basepage">
    <div class="content">
      <div class="row row-calendar">
        <TheCalendar
            :attributes="attributes"
            @toggleDate="toggleDate"
        />
        <div class="filters rounded shadow">
          <TheTabs
              v-if="countries"
              :tabs="countries"
              :activeTab="activeCountry"
              @setActiveTab="setActiveCountry"
              class="calendar-tabs"
          />
          <div class="filters-grid">
            <div class="filters-item">
              <div class="icon">
                <IconProdCalendar/>
              </div>
              <p class="text">Производственный календарь</p>
            </div>
            <div class="filters-item">
              <div class="icon">
                <IconCorpCalendar/>
              </div>
              <p class="text">Корпоративные мероприятия</p>
            </div>
            <div class="filters-item">
              <div class="icon">
                <IconExhibition/>
              </div>
              <p class="text">Выставки и семинары</p>
            </div>
            <div class="filters-item">
              <div class="icon">
                <IconElseEvents/>
              </div>
              <p class="text">Все события</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h2 class="title">В этот день</h2>
        <div class="list">
          <div
              class="item rounded shadow"
              v-for="event in dayEvents"
              :key="event.id">
            <header class="item-header">
              <div class="icon">
                <IconCorpCalendar/>
              </div>
              <p class="title">{{ event.title }}</p>
            </header>
            <div class="item-content">
              <div class="item-detail">
                <div class="icon">
                  <IconClock/>
                </div>
                <span class="text">{{ event.time_start }} - {{ event.time_end }}</span>
              </div>
              <div class="item-detail">
                <div class="icon">
                  <IconCalendarBlue/>
                </div>
                <span class="text">{{ event.date_start }} - {{ event.date_end }}</span>
              </div>
              <div class="item-detail">
                <div class="icon">
                  <IconGlobe/>
                </div>
                <span class="text">{{ activeCountry }}</span>
              </div>
              <div class="item-detail">
                <div class="icon">
                  <IconMarker/>
                </div>
                <span class="text">{{ event.city }}</span>
              </div>
            </div>
            <footer class="item-footer">
              <router-link :to="`${event.url}`" class="link">Подробнее</router-link>
            </footer>
          </div>
        </div>
      </div>
      <div class="row">
        <h2 class="title">В этот месяце</h2>
        <div class="list">
          <div class="item rounded shadow">
            <header class="item-header">
              <div class="icon">
                <IconCorpCalendar/>
              </div>
              <p class="title">Здравоохранение - TIHE 2023</p>
            </header>
            <div class="item-content">
              <div class="item-detail">
                <div class="icon">
                  <IconClock/>
                </div>
                <span class="text">10 - 19</span>
              </div>
              <div class="item-detail">
                <div class="icon">
                  <IconCalendarBlue/>
                </div>
                <span class="text">14 - 24 апреля</span>
              </div>
              <div class="item-detail">
                <div class="icon">
                  <IconGlobe/>
                </div>
                <span class="text">Казахстан</span>
              </div>
              <div class="item-detail">
                <div class="icon">
                  <IconMarker/>
                </div>
                <span class="text">Санкт-Петербург</span>
              </div>
            </div>
            <footer class="item-footer">
              <router-link to="/" class="link">Подробнее</router-link>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheCalendar from "@/components/TheCalendar.vue";
import {onMounted, ref, watch} from "vue";
import TheTabs from "@/components/TheTabs.vue";
import IconProdCalendar from "@/components/icons/IconProdCalendar.vue";
import IconCorpCalendar from "@/components/icons/IconCorpCalendar.vue";
import IconExhibition from "@/components/icons/IconExhibition.vue";
import IconElseEvents from "@/components/icons/IconElseEvents.vue";
import IconClock from "@/components/icons/IconClock.vue";
import IconCalendarBlue from "@/components/icons/IconCalendarBlue.vue";
import IconGlobe from "@/components/icons/IconGlobe.vue";
import IconMarker from "@/components/icons/IconMarker.vue";
import {areDatesEqual} from "@/functions/areDatesEqual";

const date = new Date();

const countries = ref([]);
const activeCountry = ref('');
const dayEvents = ref([]);
const monthEvents = ref([]);

const data = ref({
  "Россия": [
    {
      "id": 1,
      "title": "Здравоохранение - TIHE 2023",
      "url": "/news/nurses-day-2023",
      "description": "13-15 апреля группа компаний «БиоЛайн» примет участие в ключевом событии для медицинского сообщества Узбекистана – международной выставке TIHE-2023.\r\n</p>\r\n<p>\r\nМероприятие является не только демонстрационной платформой, но и включает в себя обширную научно-практическую программу с участием ведущих специалистов, посвященную современным технологиям в Здравоохранении.",
      "date_start": "2023-6-30",
      "date_end": "2023-7-06",
      "time_start": "10",
      "time_end": "19",
      "day": 2,
      "month": 6,
      "category": "Производственный календарь",
      "city": "Москва"
    },
    {
      "id": 2,
      "title": "Здравоохранение - TIHE 2024",
      "url": "https://bioline.ru/news/nurses-day-2023",
      "description": "«БиоЛайн» примет участие в ключевом событии для медицинского сообщества Узбекистана – международной выставке TIHE-2023.\r\n</p>\r\n<p>\r\nМероприятие является не только демонстрационной платформой, но и включает в себя обширную научно-практическую программу с участием ведущих специалистов, посвященную современным технологиям в Здравоохранении.",
      "date_start": "2023-06-30",
      "date_end": "2023-07-16",
      "time_start": 12,
      "time_end": 14,
      "day": 2,
      "month": 6,
      "category": "Выставки и семинары",
      "city": "Санкт-Петербург"
    }
  ],
  "Беларусь": [
    {
      "id": 3,
      "title": "Здравоохранение - TIHE 2023",
      "url": "https://bioline.ru/news/nurses-day-2023",
      "description": "13-15 апреля группа компаний «БиоЛайн» примет участие в ключевом событии для медицинского сообщества Узбекистана – международной выставке TIHE-2023.\r\n</p>\r\n<p>\r\nМероприятие является не только демонстрационной платформой, но и включает в себя обширную научно-практическую программу с участием ведущих специалистов, посвященную современным технологиям в Здравоохранении.",
      "date_start": "2023-06-02",
      "date_end": "2023-06-06",
      "time_start": null,
      "time_end": null,
      "day": 2,
      "month": 6,
      "category": "Корпоративные мероприятия",
      "city": "Витебск"
    },
    {
      "id": 4,
      "title": "Здравоохранение - TIHE 2024",
      "url": "https://bioline.ru/news/nurses-day-2023",
      "description": "«БиоЛайн» примет участие в ключевом событии для медицинского сообщества Узбекистана – международной выставке TIHE-2023.\r\n</p>\r\n<p>\r\nМероприятие является не только демонстрационной платформой, но и включает в себя обширную научно-практическую программу с участием ведущих специалистов, посвященную современным технологиям в Здравоохранении.",
      "date_start": "2023-06-02",
      "date_end": "2023-06-06",
      "time_start": null,
      "time_end": null,
      "day": 2,
      "month": 6,
      "category": "Производственный календарь",
      "city": "Минск"
    }
  ],
});

const fullDate = ref([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));

const currentDate = ref(fullDate.value);

const toggleDate = (value) => {
  date.value = value;
}

const attributes = ref([
  {
    highlight: 'blue',
    dates: [new Date(), '2023-06-01'],
  },
  {
    highlight: 'red',
    dates: ['2023-06-24', '2023-06-12']
  }
]);

// const setDayEvents = () => {
//   data
//       .value[activeCountry.value]
//       .filter(item => item.date_start === currentDate.value);
// }
// const setMonthEvents = ref(data.value["Россия"].filter(item));

const setActiveCountry = (country) => {
  activeCountry.value = country;
}

// const setActiveDate = (date) => {
//   date.value = date;
// }

onMounted(() => {
  countries.value = Object.keys(data.value);
  setActiveCountry(countries.value[0]);
  dayEvents.value = data.value[activeCountry.value].filter(item => areDatesEqual(item.date_start, currentDate.value));
  monthEvents.value = data.value[activeCountry.value].filter(item => item.date_start === currentDate.value);
  console.log(dayEvents.value)
})

</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1400px;
  row-gap: 20px;
}

.row {
  display: grid;
  width: 100%;
  gap: 16px;

  @media (min-width: 1920px) {
    gap: 20px;
  }
}

.row-calendar {
  grid-template-columns: 1fr;

  @media (min-width: 1280px) {
    grid-template-columns: 3fr 2fr;
  }
}

h2.title {
  border-bottom: 1px solid var(--blue-light);
  padding-bottom: 10px;
  text-align: center;
}

.list {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;

  @media (min-width: 1280px) {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
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

  @media (min-width: 1280px) {
    padding: 0 10px;
    column-gap: 14px;
    border-top: 1px solid var(--gray-medium);
  }
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
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: repeat(2, 1fr);
    padding: 15px;
    row-gap: 15px;
  }
}

.item-header {
  display: flex;
  align-items: center;
  padding: 18px;
  column-gap: 10px;
  font-size: 18px;
  color: var(--blue-dark);

  @media (min-width: 1280px) {
    order: 1;
    padding: 0;
  }
}

.item-header .icon {
  width: 24px;
  height: 24px;
}

.item-header .icon svg {
  width: 100%;
}

.item-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 18px;
  row-gap: 23px;
  column-gap: 10px;
  border-top: 1px solid var(--gray-medium);

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    row-gap: 0;
    order: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    padding: 15px 0 0 0;
  }
}

.item-detail {
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-size: 14px;
  color: var(--blue-dark);

  @media (min-width: 1280px) {
    font-size: 11px;
  }

  @media (min-width: 1920px) {
    font-size: 14px;
  }
}

.item-detail .icon {
  width: 24px;
  height: 24px;
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