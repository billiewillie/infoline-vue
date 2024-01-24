<template>
  <div
    class="content-item"
    :id="props.doc.link.split('.')[0]"
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
      <div>
        <IconSave/>
        <a
          download
          class="link"
          :href="`https://regulations.trifonov.space/documents/${props.doc.link}`"
          :target="props.doc.ext === 'jpg' ? '_blank' : '_self'">Скачать</a>
      </div>
      <div>
        <IconShare/>
        <span
          @click="copyLink(`${domain}/docs?department=${props.department}&doc=${props.doc.id}`)"
          class="link pointer">Скопировать ссылку</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import "vue-toastification/dist/index.css";
import {useToast} from "vue-toastification";
import IconDoc from "@/components/icons/IconDoc.vue";
import {ref} from "vue";
import IconSave from "@/components/icons/IconSave.vue";
import IconShare from "@/components/icons/IconShare.vue";

const toast = useToast();
const domain = window.location.origin;

const props = defineProps({
  doc: {
    type: Object,
    required: true
  },
  department: {
    type: Number,
  }
})

const copyLink = (link) => {
  navigator.clipboard.writeText(link);
  toast.success(
    'скопировано',
    {
      timeout: 2000
    }
  )
}

const showFooter = ref(false);
</script>

<style scoped>
.content-item {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 84px 1fr;
  column-gap: 8px;

  @media (min-width: 1280px) {
    grid-template-rows: 1fr auto;
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

.content-item.accent,
.content-item.accent:nth-child(even) {
  background-color: rgba(87, 232, 223, 0.4);
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

  .content-item.accent:nth-child(4n + 3)::before {
    background-color: var(--gray-light);
    left: 100%;
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
  column-gap: 16px;
  line-height: 1;

  @media (min-width: 1280px) {
    display: flex;
    grid-column-start: 2;
    background-color: transparent;
    padding: 0;
    height: auto;
  }
}

.item-footer > div {
  display: flex;
  align-items: center;
  column-gap: 4px;
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
  text-underline-offset: 4px;
  font-weight: 700;

  @media (min-width: 1280px) {
    color: var(--blue-dark);
  }
}
</style>