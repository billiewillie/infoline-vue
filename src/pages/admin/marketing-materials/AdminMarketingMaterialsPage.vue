<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class="title">Админка маркетинговых материалов</h1>
    </div>
    <div class="filters rounded">
      <TheTabs
          :tabs="categories"
          :activeTab="activeCategory"
          @setActiveTab="marketingMaterialsStore.setActiveCategory"
      />
    </div>

    <router-link to="/admin/marketing-materials/create" class="btn rounded">Новый маркетинговый материал</router-link>
    <div class="content shadow rounded">
      <header class="events-header">
        <div>Обложка</div>
        <div>Название</div>
        <div>Бренды</div>
        <div>Действия</div>
      </header>
      <ul class="events-list">
        <li class="event-item" v-for="material in activeMaterials" :key="material.id">
          <div class="image">
            <img :src="`https://marketing-materials.trifonov.space/materials/${material.id}/${material.prev}.webp`" :alt="material.title">
          </div>
          <h2 class="title material-title">{{ material.title }}</h2>
          <div class="material-brands">
            <span v-for="brand in material.brand" :key="brand.id">
              {{ brand }}
            </span>
          </div>
          <div class="material-btns">
            <router-link :to="`/admin/marketing-materials/edit/${material.id}`" class="btn btn-green rounded">Редактировать</router-link>
            <button @click="marketingMaterialsStore.deleteMaterial(material.id)" class="btn btn-red rounded">Удалить</button>
          </div>
        </li>
      </ul>
      <div class="pagination"></div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useRootStore} from "@/stores/marketingMaterialsStore";
import TheTabs from "@/components/TheTabs.vue";
import {ref} from "vue";

const sortedData = ref([]);

const marketingMaterialsStore = useRootStore();
marketingMaterialsStore.getMaterials();

const {
  activeMaterials,
  categories,
  activeCategory
} = storeToRefs(marketingMaterialsStore);
</script>

<style scoped>
.content {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
}

.events-list {
  display: flex;
  flex-direction: column;
}

.event-item,
.events-header {
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  gap: 8px;
}

.events-header {
  padding: 24px 16px;
}

.event-item:nth-child(odd) {
  background-color: var(--gray-light);
}

.event-item {
  padding: 16px;
}

.events-header div {
  font-weight: 700;
}

.event-title,
.event-date,
.event-category {
  font-size: 14px;
}

.event-btns {
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
}

.event-btns .btn {
  display: flex;
  margin-bottom: 0;
  flex: 1 1 0;
  justify-content: center;
  font-size: 14px;
}

.btn {
  background-color: var(--blue-light);
  color: var(--black);
  padding: 10px 20px;
  margin-bottom: 24px;
  display: inline-flex;
  line-height: 1;
  font-size: 16px;
}

.btn-red {
  background-color: var(--orange);
  border: 1px solid var(--orange);
  cursor: pointer;
}
</style>