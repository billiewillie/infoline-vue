<template>
  <div class="tabs shadow rounded">
    <ul class="tabs__list">
      <li v-for="tab in tabs" :key="tab.title" class="tabs__item">
        {{ tab.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  }
})
</script>

<style scoped>
.tabs__list {
  display: flex;
}

.tabs__item {}
</style>