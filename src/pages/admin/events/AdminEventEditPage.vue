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
            :options="['Выставки и семинары', 'Производственный календарь', 'Корпоративные мероприятия']"
            :validation-messages="{ required: 'Выберите категорию мероприятия' }"
        />

        <FormKit
            type="select"
            label="Страна мероприятия"
            name="country"
            id="country"
            validation="required"
            :options="Object.keys(countries)"
            v-model="val"
            :validation-messages="{ required: 'Выберите страну мероприятия' }"
        />

        <FormKit
            type="select"
            label="Город мероприятия"
            name="city"
            id="city"
            validation="required"
            :options="Object.values(countries[val])"
            :validation-messages="{ required: 'Выберите город мероприятия' }"
        />

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
import {ref} from "vue";
import axios from "axios";

const countries = ref({
  'Россия': ['Москва', 'Санкт-Петербург', 'Сочи', 'Казань', 'Краснодар', 'Омск', 'Нижний Новгород', 'Великий Новгород', "Екатеринбург", "Петрозаводск", "Владивосток"],
  'Казахстан': ['Астана', 'Алматы'],
  'Беларусь': ['Минск', 'Витебск'],
  'Узбекистан': ['Ташкент', 'Самарканд']
});

const val = ref('Россия');

async function submitHandler(credentials) {
  const event = {
    title: credentials.title.trim(),
    category: credentials.category,
    country: credentials.country,
    city: credentials.city,
    dateStart: credentials.dateStart,
    dateEnd: credentials.dateEnd,
    url: credentials.url ? credentials.url.trim() : '',
    isPublished: credentials.isPublished,
    sort: 500
  };
  // const url = "https://aperio.biolinegroup.ru/api/v1/send";
  // await axios.post(url, event);
}

const d = new Date();
const todayDate = ref([
  d.getFullYear(),
  ('0' + (d.getMonth() + 1)).slice(-2),
  ('0' + d.getDate()).slice(-2)
].join('-'));

</script>

<style scoped>
.content {
  background-color: var(--white);
  padding: 16px;
}
</style>