<template>
  <div class="basepage">
    <div class="content">
      <div class="row row-calendar">
        <TheCalendar/>
        <div class="filters">
          filters
        </div>
      </div>
      <div class="row">
        <h2 class="title">В этот день</h2>
        <div class="list">
          <div class="item rounded shadow">item 1</div>
          <div class="item rounded shadow">item 2</div>
        </div>
      </div>
      <div class="row">
        <h2 class="title">В этот месяце</h2>
        <div class="list">
          <div class="item rounded shadow">item 1</div>
          <div class="item rounded shadow">item 2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import TheCalendar from "@/components/TheCalendar.vue";
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
</style>