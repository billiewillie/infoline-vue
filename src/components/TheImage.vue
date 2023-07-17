<template>
  <div class="image">
    <div class="cover" ref="cover"></div>
    <img
        v-show="isLoaded"
        @load="onImgLoaded"
        :src="image"
        :alt="alt"/>
    <img
        v-show="!isLoaded"
        :src="imageWebp"
        :alt="alt"/>
  </div>
</template>

<script setup>
import imageWebp from '@/assets/img/placeholder-person.jpeg';
import {onMounted, ref} from "vue";

const cover = ref(null);

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  }
});

const isLoaded = ref(false);
const onImgLoaded = () => {
  isLoaded.value = true;
}

onMounted(() => {
  setTimeout(() => {
    cover.value.classList.add('loaded');
  }, 500)
})
</script>

<style scoped>
.image {
  position: relative;
  height: 100%;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(20px);
  transition: backdrop-filter 0.5s ease-in-out;
}

.cover.loaded {
  backdrop-filter: blur(0);
}

</style>