<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class="title">Добавить маркетинговый материал</h1>
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
            label="Название документа"
            placeholder="Проточный цитометр для исследований"
            :validation-messages="{
              required: 'Введите название документа',
              length: 'Название документа должно быть не менее 3 символов',
            }"
        />

        <FormKit
            type="select"
            label="Категория документа"
            name="category"
            id="category"
            validation="required"
            v-if="categories.length > 0"
            v-model="categorySelected"
            :validation-messages="{ required: 'Выберите категорию документа' }">
          <option
              v-for="category in categories"
              :value="category.id"
              :key="category.id">
            {{ category.title }}
          </option>
        </FormKit>

        <FormKit
            type="select"
            label="Формат документа"
            name="format"
            id="format"
            validation="required"
            v-if="formats.length > 0"
            v-model="formatSelected"
            :validation-messages="{ required: 'Выберите формат документа' }">
          <option
              v-for="format in formats"
              :value="format.id"
              :key="format.id">
            {{ format.title }}
          </option>
        </FormKit>

        <FormKit
            type="checkbox"
            label="Бренды"
            :options="brands"
            help="Выберите бренды документа"
            validation="required|min:1"
            name="brands"
            id="brands"
            v-if="brands.length > 0"
            v-model="brandsSelected"
            :validation-messages="{
              required: 'Выберите хотя бы 1 бренд',
              min: 'Выберите хотя бы 1 бренд'
            }"
        />

        <FormKit
            name="cover"
            id="cover"
            type="file"
            label="Превью документа"
            accept=".webp"
            help="Расширение картинки .webp"
            validation="required"
            :validation-messages="{ required: 'Выберите превью документа' }"
        />

        <FormKit
            name="material"
            id="material"
            type="file"
            label="Документ"
            :accept="extensionsString"
            validation="required"
            :help="`Расширение документа ${extensionsString}`"
            :validation-messages="{ required: 'Выберите документ' }"
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

const categories = ref([]);
const categorySelected = ref(0);
const formats = ref([]);
const formatSelected = ref(0);
const brands = ref([]);
const brandsSelected = ref([]);
const extensions = ref([]);
const extensionsString = ref('');

const submitHandler = async (credentials) => {
  const formData = new FormData();

  formData.append('title', credentials.title.trim());
  formData.append('category', credentials.category);
  formData.append('format', credentials.format);
  formData.append('brands', credentials.brands);
  formData.append('cover', credentials.cover[0].file);
  formData.append('material', credentials.material[0].file);
  formData.append('extension', extensions.value.find(ext => ext.title === credentials.material[0].file.name.split('.').pop()).id);
  formData.append('isPublished', credentials.isPublished);
  formData.append('sort', 500);

  const url = "https://marketing-materials.trifonov.space/api/marketing-materials/admin/add/material";
  await axios
      .post(url, formData)
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {
            router.push({
              path: '/admin/marketing-materials'
            })
          }, 1000)
        }
      })
      .catch((error) => {
        console.log(error);
      })
}

async function getAttributes() {
  const url = "https://marketing-materials.trifonov.space/api/marketing-materials/admin/show/list/all";

  await axios
      .get(url)
      .then((response) => {
        categories.value = response.data.categories;
        categorySelected.value = categories.value[0].id;
        formats.value = response.data.formats;
        formatSelected.value = formats.value[0].id;
        brands.value = response.data.brands.map(brand => {
          return {
            value: brand.id,
            label: brand.title
          }
        })
        extensions.value = response.data.extensions;
        extensionsString.value = extensions.value
            .map(ext => `.${ext.title}`)
            .join(',');
        console.log(extensions.value);
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
  row-gap: 16px;

  @media (min-width: 1280px) {
    min-width: 360px;
  }
}

.formkit-options {
  column-count: 2;
}
</style>