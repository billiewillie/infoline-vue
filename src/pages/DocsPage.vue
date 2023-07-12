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
      <DocComponent v-for="item in activeDocs" :key="item.id" :doc="item"/>
    </div>
  </div>
</template>

<script setup>
import TheTabs from "@/components/TheTabs.vue";
import {ref} from "vue";
import IconDoc from "@/components/icons/IconDoc.vue";
import DocComponent from "@/components/DocComponent.vue";

const departments = ref([
  {
    name: 'Отдел персонала',
    docs: [
      {
        id: 1,
        name: 'файл 1 файл 1файл 1файл 1файл 1файл 1файл 1',
        ext: 'mp3',
        link: './src/assets/img/gallery-2.webp',
      },
      {
        id: 2,
        name: 'файл 2 файл 2файл 2файл 2файл 2файл 1файл 1 2',
        ext: 'pdf',
        link: './src/assets/img/gallery-2.webp',
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

const showFooter = ref(false);

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
</style>