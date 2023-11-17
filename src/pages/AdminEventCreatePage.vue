<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class="title">Админка мероприятий</h1>
    </div>
    <div class="content shadow rounded">
      <FormKit
          submit-label="Сохранить"
          id="eventForm"
          name="eventForm"
          @submit="submitHandler"
          :incomplete-message="false"
          type="form">
        <FormKit
            type="text"
            name="title"
            id="title"
            validation="required|length:3"
            label="Название"
            placeholder="Выставка микроскопов"
            :validation-messages="{
              required: 'Введите название мероприятия',
              length: 'Название мероприятия должно быть не менее 3 символов',
            }"
        />

        <FormKit
            type="select"
            label="Категория мероприятия"
            name="category"
            id="category"
            validation="required"
            :options="categories"
            v-if="categories.length > 0"
            :validation-messages="{ required: 'Выберите категорию мероприятия' }"
        />

        <FormKit
            type="select"
            label="Страна мероприятия"
            name="country"
            id="country"
            validation="required"
            :options="countries"
            v-if="countries.length > 0"
            v-model="activeCountry"
            @change="setCities(activeCountry)"
            :validation-messages="{ required: 'Выберите страну мероприятия' }"
        />

        <FormKit
            type="select"
            label="Город мероприятия"
            name="city"
            id="city"
            validation="required"
            :options="cities"
            v-if="cities.length > 0"
            :validation-messages="{ required: 'Выберите город мероприятия' }"
        />

        <FormKit
            type="date"
            name="dateStart"
            :value="todayDate"
            label="Дата начала мероприятия"
            validation="required"
            validation-visibility="live"
            @change="setDate"
            :validation-messages="{ required: 'Выберите дату начала мероприятия' }"
        />

        <FormKit
            type="date"
            name="dateEnd"
            :value="endDate"
            label="Дата окончания мероприятия"
            validation="required"
            validation-visibility="live"
            v-model="endDate"
            :validation-messages="{ required: 'Выберите дату окончания мероприятия' }"
        />

        <FormKit
            type="url"
            name="url"
            label="Ссылка на сайт мероприятия"
            placeholder="https://www.example.com..."
            validation="url"
            :validation-messages="{ url: 'Неправильная ссылка' }"
        />

        <FormKit
            type="checkbox"
            label="Опубликовать?"
            name="isPublished"
            :value="true"
            validation="accepted"
            validation-visibility="dirty"
        />
      </FormKit>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUpdated, ref} from "vue";
import axios from "axios";
import router from "@/router";

const categories = ref({});

const activeCategory = ref({});

const allCountries = ref([]);

const countries = ref([]);

const activeCountry = ref({});

const activeCity = ref({});

const cities = ref([]);

async function submitHandler(credentials) {
  const event = {
    access_token: 'sdk',
    title: credentials.title.trim(),
    category: Number(credentials.category),
    country: Number(credentials.country) || Number(activeCountry.value),
    city: Number(activeCity.value),
    dateStart: credentials.dateStart,
    dateEnd: credentials.dateEnd,
    url: credentials.url ? credentials.url.trim() : '',
    isPublished: credentials.isPublished,
    sort: 500
  };
  const url = "https://calendar.trifonov.space/api/calendar/admin/add/event";
  await axios.post(url, event).then((response) => {
    console.log(response);
    if (response.status === 200) {
      setTimeout(() => {
        router.push({
          path: '/admin/events'
        })
      }, 1000)
    }
  }).catch((error) => {
    console.log(error);
  })
}

const d = new Date();
const todayDate = ref([
  d.getFullYear(),
  ('0' + (d.getMonth() + 1)).slice(-2),
  ('0' + d.getDate()).slice(-2)
].join('-'));
const endDate = ref(todayDate.value);

const setDate = (date) => {
  endDate.value = date.target.value;
}

async function getAttributes() {
  const url = "https://calendar.trifonov.space/api/calendar/admin/show/list/all";
  await axios.get(url).then((response) => {
    categories.value = response.data.categories
        .sort((a, b) => b.id - a.id)
        .map(category => {
          return {
            value: String(category.id),
            label: category.title
          }
        });

    activeCategory.value = categories.value[0];

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
  }).catch((error) => {
    console.log(error)
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
  justify-content: center;
  background-color: var(--white);
  padding: 16px;
  flex: auto;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1280px) {
    min-width: 360px;
  }
}
</style>