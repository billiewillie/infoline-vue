<template>
  <div class="tabs shadow rounded">
    <select
        class="tabs__select"
        @change="$emit('setActiveTab', $event.target.value)"
    >
      <option
          v-for="tab in props.tabs"
          :key="tab"
          :value="tab"
      >
        {{ tab }}
      </option>
    </select>

    <ul class="tabs__list">
      <li
          v-for="tab in props.tabs"
          :key="tab"
          class="tabs__item"
          :class="{ active: tab === props.activeTab }"
          @click="$emit('setActiveTab', tab)"
      >
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  activeTab: {
    type: String,
  }
})

const emit = defineEmits(['setActiveTab'])
</script>

<style scoped>
.tabs__select {
  display: flex;

  @media (min-width: 1280px) {
    display: none;
  }
}

.tabs__list {
  display: none;

  @media (min-width: 1280px) {
    display: flex;
  }
}

.tabs__item {
  cursor: pointer;
}

.tabs__item.active {
  background-color: var(--blue-light);
}
</style>