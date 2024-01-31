<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class=title>Добавить сотрудника</h1>
    </div>
    <div class="content shadow rounded">
      <FormKit
        type="form"
        submit-label="Сохранить"
        @submit="submitHandler">

        <FormKit
          type="text"
          name="firstname"
          label="Имя"
          placeholder="Иван"
          validation="required|length:1"/>

        <FormKit
          type="text"
          name="lastname"
          label="Фамилия"
          placeholder="Иванов"
          validation="required|length:1"/>

        <FormKit
          type="text"
          name="middlename"
          label="Отчество"
          placeholder="Иванович"
          validation="required|length:1"/>

        <FormKit
          type="select"
          name="month"
          :options="months"
          value="1"
          label="Месяц рождения"/>

        <FormKit
          type="select"
          :options="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]"
          value="1"
          name="day"
          label="День рождения"
          placeholder="День рождения"/>

        <FormKit
          type="number"
          name="localphone"
          label="Рабочий номер"
          placeholder="000"/>

        <FormKit
          name="location"
          type="group">
          <div class="group">
            <FormKit
              type="select"
              name="country"
              id="country"
              :options="countries"
              v-if="countries.length > 0"
              v-model="activeCountry"
              @change="setCities(activeCountry)"
              label="Страна"
              placeholder="Страна"
              validation="required"
              :validation-messages="{ required: 'Выберите страну' }"
            />

            <FormKit
              type="select"
              name="city"
              id="city"
              :options=cities
              v-if="cities.length > 0"
              v-model="activeCity"
              label="Город"
              placeholder="Город"
              validation="required"
              :validation-messages="{ required: 'Выберите город' }"
            />

            <FormKit
              type="number"
              name="floor"
              label="Этаж"
              validation="between:1,3"
              :validation-messages="{ between: 'Этаж должен быть от 1 до 3' }"
            />

            <FormKit
              type="number"
              name="office"
              label="Офис"
              validation="between:100,400"
              :validation-messages="{ between: 'Офис должен быть от 100 до 400' }"
            />

          </div>
        </FormKit>

        <FormKit
          type="list"
          :value="[{}]"
          name="companies"
          dynamic
          #default="{ items, node, value }">
          <FormKit
            type="group"
            v-for="(item, index) in items"
            :key="item"
            :index="index">
            <div class="group">
              <FormKit
                type="text"
                name="name"
                label="Guest name"
                placeholder="Guest name"
                validation="required"
              />

              <FormKit
                type="number"
                name="age"
                label="Guest age"
                validation="required|between:18,120"
              />

            </div>
          </FormKit>

          <button
            type="button"
            @click="() => node.input(value.concat({}))"
            class="border border-blue-600 text-blue-600 p-3 mb-4">Добавить компанию
          </button>
        </FormKit>
      </FormKit>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const allCountries = ref([]);

const countries = ref([]);

const activeCountry = ref({});

const activeCity = ref({});

const cities = ref([]);

const months = [
  {
    value: 1,
    label: "Январь"
  },
  {
    value: 2,
    label: "Февраль"
  },
  {
    value: 3,
    label: "Март"
  },
  {
    value: 4,
    label: "Апрель"
  },
  {
    value: 5,
    label: "Май"
  },
  {
    value: 6,
    label: "Июнь"
  }, {
    value: 7,
    label: "Июль"
  },
  {
    value: 8,
    label: "Август"
  },
  {
    value: 9,
    label: "Сентябрь"
  }, {
    value: 10,
    label: "Октябрь"
  },
  {
    value: 11,
    label: "Ноябрь"
  },
  {
    value: 12,
    label: "Декабрь"
  },
]
const submitHandler = (credentials) => {
  console.log(credentials)
}

async function getAttributes() {
  const url = "https://calendar.trifonov.space/api/calendar/admin/show/list/all";
  await axios
    .get(url)
    .then((response) => {
      allCountries.value = response.data.countries

      countries.value = response.data.countries
        .sort((a, b) => a.id - b.id)
        .map(country => {
          return {
            value: String(country.id),
            label: country.title
          }
        });

      activeCountry.value = String(countries.value[0].value);

      setCities(activeCountry.value)
    })
    .catch((error) => {
      console.error(error)
    })
}

const setCities = (value) => {

  cities.value = allCountries.value
    .find(country => country.id === Number(value)).cities
    .sort((a, b) => a.id - b.id)
    .map(city => {
      return {
        value: String(city.id),
        label: city.title
      }
    });

  activeCity.value = String(cities.value[0].value);
}

onMounted(() => {
  getAttributes();
})
</script>

<style scoped>
.admin-page {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 16px;
  flex: auto;
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (min-width: 1280px) {
    min-width: 360px;
  }
}
</style>