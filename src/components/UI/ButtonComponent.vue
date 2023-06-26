<template>
  <button
      class="btn"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false">
    <span class="text">
      <slot/>
    </span>
    <span class="icon">
      <IconArrow
          :stroke="isHovered
          ? 'var(--blue-light)'
          : 'var(--white)'"
      />
    </span>
  </button>
</template>

<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import {ref} from "vue";

const isHovered = ref(false);
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  background-color: var(--blue-light);
  border: 1px solid var(--blue-light);
  position: relative;
  cursor: pointer;
  padding: 14px;
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  background-color: var(--white);
}

span.text {
  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
  flex: auto;
  transition: color 0.3s ease-in-out;
}

.btn:hover span.text {
  color: var(--blue-light);
}

span.icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>