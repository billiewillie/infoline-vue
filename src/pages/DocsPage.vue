<template>
  <div class="basepage">
    <h1 class="title">Документы</h1>
    <TheTabs
        :tabs="departmentsTitles"
        :activeTab="activeDepartment"
        @setActiveTab="setActiveDepartment"
    />
    <h2 class="subtitle">{{ activeDepartment }}</h2>
    <div class="content shadow rounded overflow-hidden">
      <div class="content-item" v-for="item in activeDocs" :key="item.id">
          <div class="icon">
            <span>{{ item.ext }}</span>
          </div>
          <p>{{ item.name }}</p>
          <footer class="item-footer">
            <a :href="`${item.link}`">Скачать</a>
          </footer>
      </div>
    </div>
  </div>
</template>

<script setup>

import TheTabs from "@/components/TheTabs.vue";
import {ref} from "vue";

const departments = ref([
  {
    name: 'Отдел персонала',
    docs: [
      {
        id: 1,
        name: 'файл 1',
        ext: 'pdf',
        link: '/',
      },
      {
        id: 2,
        name: 'файл 2',
        ext: 'pdf',
        link: '/',
      }
    ]
  },
  {
    name: 'Бухгалтерия',
    docs: [
      {
        id: 1,
        name: 'файл 1',
        ext: 'mp3',
        link: '/',
      },
      {
        id: 2,
        name: 'файл 2',
        ext: 'mp3',
        link: '/',
      }
    ]
  },
  {
    name: 'ИТ отдел',
    docs: [
      {
        id: 1,
        name: 'файл ИТ отделИТ отдел 1',
        ext: 'pdf',
        link: '/',
      },
      {
        id: 2,
        name: 'файл ИТ отдел 2',
        ext: 'pdf',
        link: '/',
      },
      {
        id: 3,
        name: 'файл ИТ отделИТ отдел 3',
        ext: 'pdf',
        link: '/',
      },
    ]
  }
]);

let departmentsTitles = ref(['Отдел персонала', 'Бухгалтерия', 'ИТ отдел']);
let activeDepartment = ref(departments.value[0].name);
const activeDocs = ref(departments.value[0].docs);

const setActiveDepartment = (tab) => {
  activeDepartment.value = tab;
  setActiveDocs(tab);
}

const setActiveDocs = (tab) => {
  activeDocs.value = departments.value.filter(item => item.name === tab)[0].docs;
}

</script>

<style scoped>

.subtitle {
  text-align: center;
  margin-bottom: 18px;

  @media (min-width: 1280px) {
    margin-bottom: 20px;
  }
}

.content {
  background-color: var(--white);
}

.content-item {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: auto 1fr;
  column-gap: 30px;

  @media (min-width: 1280px) {
    padding: 20px 36px;
  }
}

.content-item:nth-child(even) {
  background-color: var(--gray-light);
}

.item-footer {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: var(--blue-light);

  @media (min-width: 1280px) {
    grid-column-start: 2;
    background-color: transparent;
  }
}
</style>