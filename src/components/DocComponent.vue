<template>
  <div
      class="content-item"
      :key="props.doc.id"
      :class="{ expand: showFooter }">
    <div
        @click="showFooter = !showFooter"
        class="icon">
      <IconDoc :ext="props.doc.ext"/>
    </div>
    <p
        @click="showFooter = !showFooter"
        class="name">{{ props.doc.name }}</p>
    <footer class="item-footer">
      <IconSave/>
      <a
          class="link"
          :href="`${props.doc.link}`"
          download>скачать</a>
    </footer>
  </div>
</template>

<script setup>
import IconDoc from "@/components/icons/IconDoc.vue";
import {ref} from "vue";
import IconSave from "@/components/icons/IconSave.vue";

const props = defineProps({
  doc: {
    type: Object,
    required: true
  }
})

const showFooter = ref(false);
</script>

<style scoped>
.content-item {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: auto 1fr;
  column-gap: 30px;

  @media (min-width: 1280px) {
    grid-template-rows: repeat(2, 1fr);
    row-gap: 10px;
    padding: 20px 36px;
  }
}

.content-item.expand {
  grid-template-rows: repeat(2, 1fr);
}

.content-item:nth-child(even) {
  background-color: var(--gray-light);
}

.icon {
  padding: 12px 29px 12px 19px;

  @media (min-width: 1280px) {
    display: flex;
    grid-row-start: 1;
    grid-row-end: 3;
    padding: 0;
    align-items: center;
    width: auto;
    height: auto;
  }
}

.icon svg {
    height: 78px;
}

.name {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 12px 12px 12px 0;

  @media (min-width: 1280px) {
    padding: 0;
    font-size: 16px;
  }
}

.item-footer {
  display: none;
  align-items: center;
  padding: 12px 19px;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: var(--blue-light);
  column-gap: 10px;
  line-height: 1;

  @media (min-width: 1280px) {
    display: flex;
    grid-column-start: 2;
    background-color: transparent;
    padding: 0;
  }
}

.item-footer svg {
  width: 20px;
  height: 20px;
}

.content-item.expand .item-footer {
  display: flex;
}

.link {
  font-size: 18px;
  color: var(--white);
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 700;

  @media (min-width: 1280px) {
    color: var(--blue-dark);
  }
}
</style>