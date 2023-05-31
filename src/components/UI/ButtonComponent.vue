<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
</script>

<template>
  <button class="btn">
    <span class="text">
      <slot/>
    </span>
    <span class="icon">
      <IconArrow/>
    </span>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  background-color: var(--blue-light);
  position: relative;
  border: none;
  cursor: pointer;
}

span.text {
  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
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