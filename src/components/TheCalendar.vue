<template>
  <div class="calendar-wrapper rounded">
    <DatePicker
        expanded
        borderless
        locale="ru"
        ref="calendar"
        :attributes="attributes"
        class="calendar shadow rounded"
        v-model="date"
        @dayclick="setClick"
        @transition-end="toggleMonthHandler"/>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import 'v-calendar/style.css';
import {DatePicker} from 'v-calendar';

const calendar = ref(null);
const date = ref(new Date());
const currentPage = ref(null);
const myFromPage = ref(null);
const fullDate = ref([date.value.getFullYear(), date.value.getMonth() + 1, date.value.getDate()].join('-'));

const emit = defineEmits(['toggleDate', 'toggleMonth']);

const props = defineProps({
  attributes: {
    type: Array,
    default: () => [],
  },
  activeDay: {
    type: String,
    default: '',
  }
});

async function toggleMonthHandler() {
  const result = await calendar.value.calendarRef.pages[0];
  await emit('toggleMonth', `${result.year}-${result.month}-1`);
}

function setClick() {
  if ([date.value.getFullYear(), date.value.getMonth() + 1, date.value.getDate()].join('-') !== props.activeDay) {
    emit('toggleDate', date.value);
  }
}
</script>

<style>
.calendar {
  overflow: hidden;
  height: 100%;
}

.calendar .vc-pane-header-wrapper {
  z-index: 1;
}

.calendar .vc-pane-layout {
  height: 100%;
}

.calendar .vc-header {
  background-color: var(--blue-dark);
  margin-top: 0;
  padding: 0;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  min-height: 32px;
}

.calendar .vc-title {
  z-index: 1;
  background-color: transparent;
}

.calendar .vc-title span {
  color: var(--white);
  font-size: 15px;
  font-weight: 700;
}

.calendar .vc-day.is-not-in-month {
  opacity: 0.5;
}

.calendar .is-not-in-month .vc-day-content {
  opacity: 1;
  color: var(--black);
}

.calendar .vc-day {
  background-color: var(--gray);
  -webkit-border-radius: var(--radius);
  -moz-border-radius: var(--radius);
  border-radius: var(--radius);
  min-height: 31px;

  @media (min-width: 1280px) {
    min-height: 100%;
  }
}

.calendar .vc-day.is-today {
  background-color: var(--white);
}

.calendar .vc-day.is-today.is-not-in-month {
  background-color: var(--gray);
}

.calendar .vc-day.is-today.is-not-in-month .vc-day-content {
  color: var(--black);
}

.calendar .vc-day-content {
  line-height: 23px;
  font-size: 14px;
  font-weight: 400;
  height: 100%;
  width: 100%;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;

  @media (min-width: 1280px) {
    font-size: 11px;
    line-height: 19px;
  }

  @media (min-width: 1920px) {
    font-size: 14px;
  }
}

.calendar .vc-highlight {
  height: 23px;
  aspect-ratio: 1 / 1;

  @media (min-width: 1280px) {
    height: 100%;
    width: auto;
  }
}

.calendar .vc-weeks {
  display: grid;
  row-gap: 4px;
  grid-template-rows: repeat(7, 1fr);
  height: 100%;
}

.calendar .vc-week {
  column-gap: 4px;
}

.calendar .vc-header .vc-arrow {
  background-color: var(--blue-light);
  height: 100%;
}

.calendar .vc-base-icon {
  stroke: var(--white);
}

.calendar .vc-header .vc-next {
  -webkit-border-radius: 0 3px 0 0;
  -moz-border-radius: 0 3px 0 0;
  border-radius: 0 3px 0 0;
}

.calendar .vc-header .vc-prev {
  -webkit-border-radius: 3px 0 0 0;
  -moz-border-radius: 3px 0 0 0;
  border-radius: 3px 0 0 0;
}

.calendar .vc-weekdays {
  align-items: center;
}

.calendar .vc-weekday {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 13px;
  padding: 0;
  min-height: 31px;

  @media (min-width: 1280px) {
    min-height: auto;
  }
}

.calendar .vc-highlight-bg-solid {
  height: 31px;
  min-width: 31px;
  aspect-ratio: 1 / 1;

  @media (min-width: 1280px) {
    height: 100%;
  }
}

.calendar .vc-day:not(.is-today) .vc-highlight-bg-solid {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  width: 100%;
}

.calendar .vc-weekday.vc-weekday-7,
.calendar .vc-weekday.vc-weekday-1 {
  color: var(--orange);
}

.calendar .vc-pane {
  display: flex;
  flex-direction: column;
  flex: auto;
}

.calendar .vc-focus:focus-within {
  box-shadow: none;
}

.calendar .vc-red .vc-highlight-bg-solid {
  background-color: var(--orange);
}

.calendar .vc-day-box-center-bottom {
  padding-bottom: 2px;

  @media (min-width: 1280px) {
    padding-bottom: 5px;
  }
}

.calendar .vc-day .vc-focus:focus-within {
  color: var(--black);
  background-color: var(--white);
  border: 2px solid var(--blue-light);
}

.vc-blue {
  --vc-accent-50: var(--blue-light);
  --vc-accent-100: var(--blue-light);
  --vc-accent-200: var(--blue-light);
  --vc-accent-300: var(--blue-light);
  --vc-accent-400: var(--blue-light);
  --vc-accent-500: var(--blue-light);
  --vc-accent-600: var(--blue-light);
  --vc-accent-700: var(--blue-light);
  --vc-accent-800: var(--blue-light);
  --vc-accent-900: var(--blue-light);
}
</style>