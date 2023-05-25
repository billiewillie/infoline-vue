<template>
  <div class="calendar-wrapper">
    <Calendar
        class="calendar shadow rounded"
        v-model="date"
        borderless
        expanded
        title-position="left"
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

.calendar .vc-header {
  background-color: var(--purple);
  margin-top: 0;
}

.calendar .vc-title {
  z-index: 1;
  background-color: transparent;
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
  min-height: 23px;
}

.calendar .vc-day-content {
  height: 23px;
  line-height: 1;
  font-size: 11px;
}

.calendar .vc-highlight {
  height: 23px;
  width: 23px;
}

.calendar .vc-weeks {
  display: grid;
  row-gap: 4px;
}

.calendar .vc-week {
  column-gap: 4px;
}
</style>