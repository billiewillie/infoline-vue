<template>
  <div class="skeleton-wrapper">
    <div class="skeleton">
      <div class="skeleton-image"></div>
      <div class="skeleton-content"></div>
      <div class="skeleton-footer"></div>
    </div>
    <div class="skeleton desktop">
      <div class="skeleton-image"></div>
      <div class="skeleton-content"></div>
      <div class="skeleton-footer"></div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

</script>

<style>
.skeleton-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  row-gap: 16px;

  @media (min-width: 1280px) {
    row-gap: 20px;
  }
}

.skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 15px;
  background-color: var(--white);
  width: 100%;
  height: 100%;
  border-radius: 3px;
  overflow: hidden;

  @media (min-width: 1280px) {
    height: calc(50vh - 49px);
  }

  @media (min-width: 1920px) {
    height: calc(50vh - 70px);
  }
}

.skeleton-image {
  width: 100%;
  aspect-ratio: 185 / 114;

  @media (min-width: 1280px) {
    aspect-ratio: 37 / 17;
  }
}

.skeleton-footer {
  display: flex;
  width: 100%;
  height: 47px;
}

.skeleton-content {
  display: flex;
  width: 90%;
  height: 60px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.skeleton-image,
.skeleton-content,
.skeleton-footer {
  display: flex;
  animation: skeleton 1s linear infinite alternate;
  animation-delay: 0.2s;
}

.skeleton.desktop {
  display: none;
  @media (min-width: 1280px) {
    display: flex;
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