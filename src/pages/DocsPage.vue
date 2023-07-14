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
      <DocComponent v-for="item in activeDocs" :key="item.name" :doc="item"/>
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
    name: 'Отдел рекламы',
    docs: [
      {
        id: 1,
        name: 'Акт с перевозчиком - повреждение груза',
        ext: 'doc',
        link: 'https://infoline.bioline.ru/docs/1-1.pdf',
      },
      {
        id: 2,
        name: 'БЛ + БС Комбинированный Логотип (ENG)',
        ext: 'jpg',
        link: 'https://infoline.bioline.ru/docs/1-1.jpg',
      },
      {
        id: 3,
        name: 'БЛ + БС Комбинированный Логотип (RU)',
        ext: 'jpg',
        link: 'https://infoline.bioline.ru/docs/1-1.jpg',
      },
      {
        id: 4,
        name: 'БЛ Логотип (ENG)',
        ext: 'jpg',
        link: 'https://infoline.bioline.ru/docs/1-1.jpg',
      },
      {
        id: 5,
        name: 'БЛ Логотип (RU)',
        ext: 'jpg',
        link: 'https://infoline.bioline.ru/docs/1-1.jpg',
      },
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
    name: 'Отдел персноала',
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
  },
  {
    name: 'Юридический отдел',
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
    name: 'Тендерный отдел',
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
    name: 'Секретариат',
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
    name: 'Отдел логистики',
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
    name: 'Финансовый раздел',
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
    name: 'Охрана труда',
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
    name: 'Отдел внешней и складской логистики',
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
    name: 'Отдел закупок',
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
  }
]);

const showFooter = ref(false);

let departmentsTitles = ref(['Отдел рекламы', 'Бухгалтерия', 'Отдел персонала', 'Юридический отдел', 'Тендерный отдел', 'Секретариат', 'Отдел логистики', 'Финансовый раздел', 'Охрана труда', 'Отдел внешней и складской логистики', 'Отдел закупок']);

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

.tabs {
  @media (min-width: 1280px) {
    display: none;
  }
}
</style>