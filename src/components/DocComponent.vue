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
          :href="`https://regulations.trifonov.space/documents/${props.doc.link}`"
          download
          :target="props.doc.ext === 'jpg' ? '_blank' : '_self'"
      >скачать</a>
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
  grid-template-rows: 1fr;
  grid-template-columns: 84px 1fr;
  column-gap: 30px;

  @media (min-width: 1280px) {
    grid-template-rows: repeat(2, 1fr);
    row-gap: 10px;
    padding: 15px 0;
  }
}

.content-item.expand {
  grid-template-rows: 1fr 60px;

  @media (min-width: 1280px) {
    grid-template-rows: repeat(2, 1fr);
  }
}

.content-item:nth-child(even) {
  background-color: var(--gray-light);

  @media (min-width: 1280px) {
    background-color: transparent;
  }
}

.content-item:nth-child(4n + 3) {
  position: relative;
}

.content-item:nth-child(4n + 3)::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
}

@media (min-width: 1280px) {
  .content-item:nth-child(4n + 3)::before {
    background-color: var(--gray-light);
    display: block;
  }
}

.icon {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 16px 0;

  @media (min-width: 1280px) {
    display: flex;
    grid-row-start: 1;
    grid-row-end: 3;
    padding: 5px 0 0;
    align-items: flex-start;
    width: auto;
    height: auto;
  }
}

.icon-doc {
  width: 35px;
  height: 38px;
}

.icon svg {
  height: 78px;
}

.name {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 16px 12px 16px 0;

  @media (min-width: 1280px) {
    padding: 0;
    font-size: 16px;
  }
}

.item-footer {
  display: none;
  height: 60px;
  align-items: center;
  padding: 0 20px;
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
    height: auto;
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