<template>
  <div class="tabs">
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

    <ul class="tabs__list shadow rounded overflow-hidden">
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
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

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
    background-color: var(--white);
  }
}

.tabs__item {
  display: flex;
  color: var(--blue-dark);
  font-weight: 500;
  font-size: 13px;
  padding: 10px 28px;
  cursor: pointer;
}

.tabs__item.active {
  background-color: var(--blue-light);
}

.tabs__item.active {
  background-color: var(--blue-light);
  position: relative;
  z-index: 1;
}

.tabs__item.active::after {
  display: none;
}

.tabs__item:nth-child(n + 2)::after {
  content: '';
  position: absolute;
  background-color: var(--gray-dark);
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: -1px;
  margin: auto;
  width: 1px;
  height: 12px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
}
</style>