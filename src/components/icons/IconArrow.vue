<template>
  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M1 10L2.76297 8.42742C4.1689 7.17332 4.87187 6.54627 4.98011 5.782C5.00663 5.59474 5.00663 5.40526 4.98011 5.218C4.87187 4.45373 4.1689 3.82668 2.76297 2.57258L1 1"
        :stroke="stroke"
        stroke-width="1.5"
        stroke-linecap="round"/>
  </svg>
</template>

<script setup>
const props = defineProps({
  stroke: {
    type: String,
    default: '#fff'
  }
})
</script>

<style scoped>
path{
  transition: stroke 0.3s ease-in-out;
}
</style>