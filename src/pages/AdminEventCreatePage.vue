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
            id="name"
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
            :options="{...categories}"
            v-model="activeCategory"
            :validation-messages="{ required: 'Выберите категорию мероприятия' }"
        />

<!--        <FormKit-->
<!--            type="select"-->
<!--            label="Страна мероприятия"-->
<!--            name="country"-->
<!--            id="country"-->
<!--            validation="required"-->
<!--            :options="Object.keys(countries)"-->
<!--            v-model="val"-->
<!--            :validation-messages="{ required: 'Выберите страну мероприятия' }"-->
<!--        />-->

<!--        <FormKit-->
<!--            type="select"-->
<!--            label="Город мероприятия"-->
<!--            name="city"-->
<!--            id="city"-->
<!--            validation="required"-->
<!--            :options="Object.values(countries[val])"-->
<!--            :validation-messages="{ required: 'Выберите город мероприятия' }"-->
<!--        />-->

        <FormKit
            type="date"
            name="dateStart"
            :value="todayDate"
            label="Дата начала мероприятия"
            validation="required"
            validation-visibility="live"
            :validation-messages="{ required: 'Выберите дату начала мероприятия' }"
        />

        <FormKit
            type="date"
            name="dateEnd"
            :value="todayDate"
            label="Дата окончания мероприятия"
            validation="required"
            validation-visibility="live"
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
import {onMounted, ref} from "vue";
import axios from "axios";

const attributes = ref({})

const categories = ref({})

const activeCategory = ({});

const countries = ref([]);

const val = ref('Россия');

async function submitHandler(credentials) {
  const event = {
    access_token: 'sdk',
    title: credentials.title.trim(),
    category: Number(activeCategory.value),
    dateStart: credentials.dateStart,
    dateEnd: credentials.dateEnd,
    url: credentials.url ? credentials.url.trim() : '',
    isPublished: credentials.isPublished,
    sort: 500
  };

  const url = "https://calendar.trifonov.space/api/calendar/admin/add/event";
  await axios.post(url, event).then((response) => {
    console.log(event)
    console.log(response);
  }).catch((error) => {
    console.log(event)
    console.log(error);
  })
}

const d = new Date();
const todayDate = ref([
  d.getFullYear(),
  ('0' + (d.getMonth() + 1)).slice(-2),
  ('0' + d.getDate()).slice(-2)
].join('-'));

async function getAttributes() {
  const url = "https://calendar.trifonov.space/api/calendar/admin/show/list/all";
  await axios.get(url).then((response) => {
    attributes.value = response.data
    attributes.value.categories.forEach(item => {
      categories.value[item.id] = item.title
    })
    countries.value = attributes.value.countries
    console.log(countries.value)
    activeCategory.value = Object.keys(categories.value)[0]
    console.log(activeCategory.value)
  }).catch((error) => {
    console.log(error)
  })
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