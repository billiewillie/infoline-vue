<template>
  <div class="basepage">
    <div class="content">
      <div class="row row-calendar">
        <TheCalendar
            :attributes="attributes"
        />
        <div class="filters rounded shadow">
          <TheTabs
              :tabs="countries"
              :activeTab="activeCountry"
              @setActiveTab="setActiveCountry"
          />
          <div class="filters-grid">
            <div class="filters-item">
              <div class="icon">
                <IconCopy/>
              </div>
              <p class="text">мероприятия</p>
            </div>
            <div class="filters-item">
              <div class="icon">
                <IconCopy/>
              </div>
              <p class="text">мероприятия</p>
            </div>
            <div class="filters-item">
              <div class="icon">
                <IconCopy/>
              </div>
              <p class="text">мероприятия</p>
            </div>
            <div class="filters-item">
              <div class="icon">
                <IconCopy/>
              </div>
              <p class="text">мероприятия</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h2 class="title">В этот день</h2>
        <div class="list">
          <div class="item rounded shadow">
            <header class="item-header">
              <p class="title">Event</p>
            </header>
          </div>
        </div>
      </div>
      <div class="row">
        <h2 class="title">В этот месяце</h2>
        <div class="list">
          <div class="item rounded shadow">item 1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheCalendar from "@/components/TheCalendar.vue";
import {ref} from "vue";
import TheTabs from "@/components/TheTabs.vue";
import IconCopy from "@/components/icons/IconCopy.vue";

const data = ref({
  "Россия": [
    {
      "id": 1,
      "title": "Здравоохранение - TIHE 2023",
      "url": "https://bioline.ru/news/nurses-day-2023",
      "description": "13-15 апреля группа компаний «БиоЛайн» примет участие в ключевом событии для медицинского сообщества Узбекистана – международной выставке TIHE-2023.\r\n</p>\r\n<p>\r\nМероприятие является не только демонстрационной платформой, но и включает в себя обширную научно-практическую программу с участием ведущих специалистов, посвященную современным технологиям в Здравоохранении.",
      "date_start": "2023-06-02",
      "date_end": "2023-06-06",
      "time_start": null,
      "time_end": null,
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
      "date_start": "2023-06-02",
      "date_end": "2023-06-06",
      "time_start": null,
      "time_end": null,
      "day": 2,
      "month": 6,
      "category": "Производственный календарь",
      "city": "Москва"
    }
  ],
});

const countries = ref([
  "Россия",
  "Беларусь",
  "Казахстан",
  "Узбекистан"
]);

const activeCountry = ref(countries.value[0]);

const date = ref('');

const attributes = ref([
  {
    highlight: 'blue',
    dates: [new Date(), date.value],
  },
  {
    highlight: 'red',
    dates: ['2023-06-24', '2023-06-12']
  }
]);

// const eventsOfTheDay = ref(data.value["Россия"].filter(item));

const setActiveCountry = (country) => {
  activeCountry.value = country;
}

const setActiveDate = (date) => {
  date.value = date;
}
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
  gap: 10px;

  @media (min-width: 1280px) {
    gap: 16px;
  }

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
  padding: 10px;
}

.filters {
  display: flex;
  flex-direction: column;
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
  background-color: var(--white);
  padding: 24px;
  row-gap: 24px;
}

.filters-item {
  display: flex;
  column-gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray-medium);
}
</style>