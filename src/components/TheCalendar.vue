<template>
  <div class="calendar-wrapper rounded">
    <Calendar
        class="calendar shadow rounded"
        v-model="date"
        borderless
        expanded
        locale="ru"
        :attributes="attributes"/>
  </div>
</template>

<script setup>
import {Calendar, DatePicker} from 'v-calendar';
import 'v-calendar/style.css';
import {ref} from "vue";

const date = ref(new Date());
const attributes = ref([
  {
    highlight: true,
    dates: new Date()
  }
]);
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
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
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
}

.calendar .vc-day {
  background-color: var(--gray);
  -webkit-border-radius: var(--radius);
  -moz-border-radius: var(--radius);
  border-radius: var(--radius);
  min-height: 13px;
}

.calendar .vc-day-content {
  height: auto;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
}

.calendar .vc-highlight {
  height: 23px;
  width: 23px;
}

.calendar .vc-weeks {
  display: grid;
  row-gap: 4px;
  height: calc(100% - 30px);
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
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

.calendar .vc-header .vc-prev {
  -webkit-border-radius: 3px 0 0 3px;
  -moz-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}

.calendar .vc-focus:focus-within {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.calendar .vc-weekdays {
  align-items: center;
}

.calendar .vc-weekday {
  font-size: 12px;
  line-height: 13px;
  font-weight: 500;
  padding: 0;
}

.calendar .vc-highlight-bg-solid {
  background-color: var(--blue-light);
}

</style>