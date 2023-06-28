<template>
  <div class="basepage default-page">
    <h1 class="title">Инструкции</h1>

    <TheTabs
        :tabs="departmentsTitles"
        :activeTab="activeDepartment"
        @setActiveTab="setActiveDepartment"
    />

    <div class="content rounded shadow">

      <div class="inner-tabs">
        <div
            v-for="item in categoriesTitles"
            :key="item"
            class="inner-tab__item"
            @click="setActiveCategory(item)"
            :class="{active: activeCategory === item}"
        >
          {{ item }}
        </div>
      </div>

      <div class="docs-container">
        <div
            class="docs-inner"
            v-for="type in activeTypesList"
            :key="type.title">
          <h2
              class="title"
              v-if="type.title">{{ type.title }}</h2>
          <ul class="docs">
            <li
                v-for="(doc, index) in type.docsList"
                :key="index"
                class="docs__item">
              <router-link
                  :to="`${doc.link}`"
                  class="docs__link">
                {{ doc.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import TheTabs from "@/components/TheTabs.vue";

const departmentsList = ref([
  {
    title: 'IT отдел',
    categoriesList: [
      {
        category: '1С',
        typesList: [
          {
            title: 'Общие инструкции',
            docsList: [
              {
                title: 'Порядок обращения в IT-отдел',
                link: '/instructions/ordering'
              },
              {
                title: 'Подключение новой ИБ',
                link: '/instructions/ordering'
              },
            ]
          },
          {
            title: 'инструкции для менеджеров',
            docsList: [
              {
                title: 'Партнеры и контрагенты',
                link: '/instructions/1'
              },
              {
                title: 'Номенклатура',
                link: '/instructions/1'
              }
            ]
          },
          {
            title: 'инструкции для менеджеров (отдел Елисеевой Е.В.)',
            docsList: [
              {
                title: 'Партнеры и контрагенты',
                link: '/instructions/1'
              },
              {
                title: 'Номенклатура',
                link: '/instructions/1'
              }
            ]
          },
          {
            title: 'Инструкции для специалистов',
            docsList: [
              {
                title: 'Порядок обращения в IT-отдел',
                link: '/instructions/ordering'
              },
              {
                title: 'Подключение новой ИБ',
                link: '/instructions/ordering'
              }
            ]
          },
          {
            title: 'Инструкции для РПК',
            docsList: [
              {
                title: 'Порядок обращения в IT-отдел',
                link: '/instructions/ordering'
              },
              {
                title: 'Подключение новой ИБ',
                link: '/instructions/ordering'
              }
            ]
          },
          {
            title: 'инструкции для склада',
            docsList: [
              {
                title: 'Партнеры и контрагенты',
                link: '/instructions/1'
              },
              {
                title: 'Номенклатура',
                link: '/instructions/1'
              }
            ]
          },
          {
            title: 'Общие для отдела закупок',
            docsList: [
              {
                title: 'Порядок обращения в IT-отдел',
                link: '/instructions/ordering'
              },
              {
                title: 'Подключение новой ИБ',
                link: '/instructions/ordering'
              }
            ]
          },
          {
            title: 'инструкции для тех. сервиса',
            docsList: [
              {
                title: 'Партнеры и контрагенты',
                link: '/instructions/1'
              },
              {
                title: 'Номенклатура',
                link: '/instructions/1'
              }
            ]
          },
          {
            title: 'Инструкции для юридического отдела',
            docsList: [
              {
                title: 'Порядок обращения в IT-отдел',
                link: '/instructions/ordering'
              },
              {
                title: 'Подключение новой ИБ',
                link: '/instructions/ordering'
              }
            ]
          },
          {
            title: 'Инструкции для финансово-экономического отдела + бухгалтерии',
            docsList: [
              {
                title: 'Партнеры и контрагенты',
                link: '/instructions/1'
              },
              {
                title: 'Номенклатура',
                link: '/instructions/1'
              }
            ]
          },
          {
            title: 'Инструкции отдела кадров',
            docsList: [
              {
                title: 'Порядок обращения в IT-отдел',
                link: '/instructions/ordering'
              },
              {
                title: 'Подключение новой ИБ',
                link: '/instructions/ordering'
              }
            ]
          },
        ]
      },
      {
        category: 'Почта',
        typesList: [
          {
            title: '',
            docsList: [
              {
                title: 'Основные нововведения в госзакупках 2022',
                link: '/instructions/1'
              },
              {
                title: 'Практические вопросы подачи заявки 2022',
                link: '/instructions/1'
              },
              {
                title: 'Основные нововведения в госзакупках 2022',
                link: '/instructions/1'
              },
              {
                title: 'Основные нововведения в госзакупках 2022',
                link: '/instructions/1'
              },
              {
                title: 'Основные нововведения в госзакупках 2022',
                link: '/instructions/1'
              },
              {
                title: 'Основные нововведения в госзакупках 2022',
                link: '/instructions/1'
              },
              {
                title: 'Основные нововведения в госзакупках 2022',
                link: '/instructions/1'
              },
              {
                title: 'Основные нововведения в госзакупках 2022',
                link: '/instructions/1'
              },
              {
                title: 'Основные нововведения в госзакупках 2022',
                link: '/instructions/1'
              },
            ]
          },
        ]
      },
      {
        category: 'Мотив',
        typesList: [
          {
            title: '',
            docsList: [
              {
                title: 'Просмотр и создание задач в мотиве (Видео)',
                link: '/instructions/1'
              },
              {
                title: 'Создание задачи',
                link: '/instructions/1'
              }
            ]
          },
        ]
      },
      {
        category: 'Сайты',
        typesList: [
          {
            title: '',
            docsList: [
              {
                title: 'Требованя к файлам для размещения на сервере',
                link: '/instructions/1'
              }
            ]
          },
        ]
      }
    ]
  },
  {
    title: 'Госзакупки',
    categoriesList: [
      {
        category: 'Нововведения 2022',
        typesList: [
          {
            title: '',
            docsList: [
              {
                title: 'Порядок обращения в IT-отдел',
                link: '/instructions/1'
              },
              {
                title: 'Подключение новой ИБ',
                link: '/instructions/1'
              }
            ]
          },
        ]
      },
      {
        category: 'Базовое обучение 2023',
        typesList: [
          {
            title: '',
            docsList: [
              {
                title: 'Практические вопросы',
                link: '/instructions/1'
              },
              {
                title: 'Требованя к учебному плану',
                link: '/instructions/1'
              }
            ]
          },
        ]
      },
    ]
  },
]);

let departmentsTitles = ref(['IT отдел', 'Госзакупки']);
let activeDepartment = ref(departmentsTitles.value[0]);

const categoriesTitles = ref(['1С', 'Почта', 'Мотив', 'Сайты']);
const activeCategory = ref(categoriesTitles.value[0]);

const activeTypesList = ref([
  {
    title: 'Общие инструкции',
    docsList: [
      {
        title: 'Порядок обращения в IT-отдел',
        link: '/instructions/ordering'
      },
      {
        title: 'Подключение новой ИБ',
        link: '/instructions/ordering'
      },
    ]
  },
  {
    title: 'инструкции для менеджеров',
    docsList: [
      {
        title: 'Партнеры и контрагенты',
        link: '/instructions/1'
      },
      {
        title: 'Номенклатура',
        link: '/instructions/1'
      }
    ]
  },
  {
    title: 'инструкции для менеджеров (отдел Елисеевой Е.В.)',
    docsList: [
      {
        title: 'Партнеры и контрагенты',
        link: '/instructions/1'
      },
      {
        title: 'Номенклатура',
        link: '/instructions/1'
      }
    ]
  },
  {
    title: 'Инструкции для специалистов',
    docsList: [
      {
        title: 'Порядок обращения в IT-отдел',
        link: '/instructions/ordering'
      },
      {
        title: 'Подключение новой ИБ',
        link: '/instructions/ordering'
      }
    ]
  },
  {
    title: 'Инструкции для РПК',
    docsList: [
      {
        title: 'Порядок обращения в IT-отдел',
        link: '/instructions/ordering'
      },
      {
        title: 'Подключение новой ИБ',
        link: '/instructions/ordering'
      }
    ]
  },
  {
    title: 'инструкции для склада',
    docsList: [
      {
        title: 'Партнеры и контрагенты',
        link: '/instructions/1'
      },
      {
        title: 'Номенклатура',
        link: '/instructions/1'
      }
    ]
  },
  {
    title: 'Общие для отдела закупок',
    docsList: [
      {
        title: 'Порядок обращения в IT-отдел',
        link: '/instructions/ordering'
      },
      {
        title: 'Подключение новой ИБ',
        link: '/instructions/ordering'
      }
    ]
  },
  {
    title: 'инструкции для тех. сервиса',
    docsList: [
      {
        title: 'Партнеры и контрагенты',
        link: '/instructions/1'
      },
      {
        title: 'Номенклатура',
        link: '/instructions/1'
      }
    ]
  },
  {
    title: 'Инструкции для юридического отдела',
    docsList: [
      {
        title: 'Порядок обращения в IT-отдел',
        link: '/instructions/ordering'
      },
      {
        title: 'Подключение новой ИБ',
        link: '/instructions/ordering'
      }
    ]
  },
  {
    title: 'Инструкции для финансово-экономического отдела + бухгалтерии',
    docsList: [
      {
        title: 'Партнеры и контрагенты',
        link: '/instructions/1'
      },
      {
        title: 'Номенклатура',
        link: '/instructions/1'
      }
    ]
  },
  {
    title: 'Инструкции отдела кадров',
    docsList: [
      {
        title: 'Порядок обращения в IT-отдел',
        link: '/instructions/ordering'
      },
      {
        title: 'Подключение новой ИБ',
        link: '/instructions/ordering'
      }
    ]
  },
]);

const setActiveDepartment = (tab) => {
  activeDepartment.value = tab;
  categoriesTitles.value = departmentsList
      .value
      .filter(item => item.title === tab)[0]
      .categoriesList
      .map(item => item.category);
  setActiveCategory(categoriesTitles.value[0]);
}

const setActiveCategory = (category) => {
  activeCategory.value = category;
  setActiveTypesList();
}

const setActiveTypesList = () => {
  activeTypesList.value = departmentsList.value
      .filter(item => item.title === activeDepartment.value)[0]
      .categoriesList
      .filter(item => item.category === activeCategory.value)[0]
      .typesList;
}
</script>

<style scoped>

.content {
  flex: auto;
  background-color: var(--white);
}

.inner-tabs {
  display: flex;
  padding: 12px 10px;
  column-gap: 20px;
  justify-content: center;
  border-bottom: 1px solid var(--gray-medium);
}

.inner-tabs .inner-tab__item {
  cursor: pointer;
}

.inner-tabs .inner-tab__item.active {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.docs-container {
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px 0;
  gap: 35px;

  @media (min-width: 1280px) {
    gap: 48px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.content .title {
  padding: 0 10px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--gray-medium);
}

.docs {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 10px 0 30px;
  list-style: disc;
}

.docs__item::marker {
  color: var(--blue-light);
}

.docs__link {
  color: var(--black);
  transition: opacity 0.3s ease-in-out;
}

.docs__link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
  opacity: 0.5;
}
</style>