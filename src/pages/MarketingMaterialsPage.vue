<template>
  <div class="basepage default-page marketing-materials-page">
    <h1 class="title">Маркетинговые материалы</h1>
    <TheTabs
        :tabs="categories"
        :activeTab="activeCategory"
        @setActiveTab="marketingMaterialsStore.setActiveCategory"
    />
    <div class="content shadow rounded overflow-hidden">
      <div class="grid">
        <div
            class="card"
            v-for="item in activeMaterials"
            :key="item.id">
          <TheImage
              alt="alt"
              :image="`https://marketing-materials.trifonov.space/materials/${item.id}/${item.prev}.webp`"/>
          <div class="card-content">
            <h2 class="title card-title">{{ item.title }}</h2>
            <div class="card-content-footer">
              <p class="field">
                <span class="field-title">Формат:</span>
                <span class="field-text">{{ item.format }}</span>
              </p>
              <p class="field">
                <span class="field-title">Бренд:</span>
                <span class="field-text">{{ item.brand[0] }}</span>
              </p>
              <p class="field">
                <span class="field-title">Дата:</span>
                <span class="field-text">{{ item.update_at ? item.update_at : item.created_at }}</span>
              </p>
              <div class="buttons">
                <a class="button"
                   :href="`https://marketing-materials.trifonov.space/materials/${item.id}/${item.source}.${item.extension}`"
                   target="_blank">
                  <span class="icon">
                    <IconShare/>
                  </span>
                  <span class="text">открыть</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheTabs from "@/components/TheTabs.vue";
import {useRootStore} from "@/stores/marketingMaterialsStore";
import {storeToRefs} from "pinia";
import TheImage from "@/components/TheImage.vue";
import IconShare from "@/components/icons/IconShare.vue";
import IconSave from "@/components/icons/IconSave.vue";

const marketingMaterialsStore = useRootStore();
marketingMaterialsStore.getMaterials();

const {
  activeMaterials,
  activeCategory,
  categories
} = storeToRefs(marketingMaterialsStore);
</script>

<style scoped>
.content {
  display: flex;
  background-color: var(--white);
  padding: 20px;
  flex: auto;

  @media (min-width: 1280px) {
    padding: 40px;
    gap: 40px;
    flex-wrap: wrap;
  }

  @media (min-width: 1920px) {
    padding: 40px;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  width: 100%;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-auto-rows: 350px;
  }
}

.card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 1280px) {
    grid-template-columns: 2fr 3fr;
    gap: 30px;
  }
}

.card .image {
  box-shadow: var(--base-shadow);

  @media (min-width: 1280px) {
    height: 350px;
  }

  @media (min-width: 1920px) {
    height: 350px;
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 1280px) {
    justify-content: space-between;
  }
}

.card-content-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-title {
  color: var(--blue-dark);
  padding-bottom: 20px;
}

.card-title::after {
  content: '';
  display: block;
  position: absolute;
  height: 1px;
  width: 100%;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  background-color: var(--blue-light);
}

.icon {
  display: flex;
  width: 30px;
  height: 30px;
}

.icon svg {
  width: 100%;
  height: 100%;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.button {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.button .text {
  color: var(--blue-dark);
  font-weight: bold;
  font-size: 18px;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.field {
  display: flex;
  align-items: center;
}

.field-title {
  display: flex;
  font-weight: 400;
  min-width: 60px;
  font-size: 12px;
  color: var(--gray-dark);
}

.field-text {
  font-size: 18px;
}
</style>