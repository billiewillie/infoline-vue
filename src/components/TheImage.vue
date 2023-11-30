<template>
  <div class="image">
    <div
        class="cover"
        :class="isLoaded ? 'loaded' : ''"></div>
    <img
        @load="isLoaded = true"
        @error="handleImageBroken"
        :src="image"
        v-if="image && !isImageBroken"
        :alt="alt"/>
    <img
        v-else
        :src="fallback"
        :alt="alt">
  </div>
</template>

<script setup>
import {ref} from "vue";

const isLoaded = ref(false);
const isImageBroken = ref(false);
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  fallback: {
    type: String,
  }
});

const handleImageBroken = () => {
  isImageBroken.value = true;
  isLoaded.value = true;
}
</script>

<style scoped>
.image {
  position: relative;
  height: 100%;
  animation: skeleton 1s linear infinite alternate;
  animation-delay: 0.1s;
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
  transition: backdrop-filter 0.3s ease-in-out;
}

.vote-page .popup .popup-image .image img {
  object-fit: fill;
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

.description-image img {
  object-position: top center;
}

.marketing-materials-page .image img {
  object-position: center;
}
</style>