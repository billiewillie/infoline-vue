<template>
  <div class="image">
    <div class="cover" :class="isLoaded ? 'loaded' : ''"></div>
    <img
        v-show="isLoaded"
        @load="isLoaded = true"
        @error="console.log(222)"
        :src="image"
        v-if="image"
        :alt="alt"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";

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
</script>

<style scoped>
.image {
  position: relative;
  height: 100%;
  animation: skeleton 1s linear infinite alternate;
  animation-delay: 0.2s;
}

img {
  display: flex;
  object-position: top center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(30px);
  transition: backdrop-filter 0.5s ease-in-out;
}

.cover.loaded {
  backdrop-filter: blur(0);
}

.about-page .about-cover img {
  aspect-ratio: 370/237;

  @media (min-width: 1280px) {
    aspect-ratio: inherit;
  }
}

@keyframes skeleton {
  from {
    background-color: var(--gray-medium);
  }
  to {
    background-color: var(--white);
  }
}

</style>