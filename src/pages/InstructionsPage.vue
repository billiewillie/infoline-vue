<template>
  <div class="basepage">
    <h1 class="title">Инструкции</h1>
    <div class="tabs">
      <div
          v-for="item in departmentsList"
          :key="item.department"
          class="tab"
          :class="{active: activeDepartment === item.department}"
          @click="[activeDepartment = item.department, activeCategory = item.categoriesList[0].category]">
        {{ item.department }}
      </div>
    </div>
    <div class="content shadow rounded">
      <template
          v-for="department in departmentsList"
          :key="department.department"
      >
        <div class="inner-tabs">
          <div
              class="tab"
              v-for="category in department.categoriesList"
              :key="category.category"
              @click="activeCategory = category.category"
              v-if="activeDepartment === department.department"
          >
            {{ category.category }}
          </div>
        </div>

        <div v-for="category in department.categoriesList" :key="category.category">
          <div
              class="tab"
              v-for="(type, index) in category.typesList"
              :key="index"
              v-if="category.category === activeCategory"
          >
            <h2 class="title" v-if="type.title">{{ type.title }}</h2>
            <ul class="docs">
              <li v-for="doc in type.docsList" :key="doc.title">
                <router-link :to="`${doc.link}`">{{ doc.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";

const activeDepartment = ref('IT отдел');
const activeCategory = ref('1с');

const departmentsList = ref([
  {
    department: 'IT отдел',
    categoriesList: [
      {
        category: '1с',
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
    department: 'Госзакупки',
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

const getActiveDepartment = computed(() => {
  return activeDepartment.value
})
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.content {
  background-color: var(--white);
}

.inner-tabs {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--gray-medium);
}

.docs {

}
</style>

