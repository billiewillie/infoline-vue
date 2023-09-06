<template>
  <div
      v-if="location?.city === 'Санкт-Петербург'"
      class="map-overlay"
      :class="{expand: isMapShow}">
    <div class="map-container">
      <div class="text" :class="{hidden: !isMapShow}">
        <h2 class="title">{{ location?.floor }} этаж</h2>
        <div class="row">
          <span>{{ location?.office }}</span>
          <span>кабинет</span>
        </div>
      </div>
      <div class="map">
        <img :src="setFloorImage()" alt="floor"/>
      </div>
    </div>
    <div
        class="map-close"
        :class="{hidden: !isMapShow}"
        @click="emit('closeMap')">x
    </div>
  </div>
</template>

<script setup>
import Floor1 from "@/assets/img/floor-1.svg";
import Floor2 from "@/assets/img/floor-2.svg";
import Floor3 from "@/assets/img/floor-3.svg";

const props = defineProps({
  location: {
    type: Object,
    default: {
      country: "Россия",
      city: "Санкт-Петербург",
      street: "ул. Профессора Попова",
      floor: 1,
      office: 122
    }
  },
  isMapShow: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['closeMap']);

const setFloorImage = () => {
  switch (props.location?.floor) {
    case 1:
      return Floor1;
    case 2:
      return Floor2;
    case 3:
      return Floor3;
  }
};
</script>

<style>

.map-close {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 30px;
  top: 30px;
  cursor: pointer;
}

.map-close.hidden {
  display: none;
}

.map-overlay {
  position: absolute;
  display: flex;
  bottom: 20px;
  right: 20px;
  justify-content: center;
  z-index: 2;
  background-color: var(--white);
  width: calc(33% - 46px);
  height: calc(27% - 10px);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.map-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.map-overlay .text {
  position: absolute;
  left: 50%;
  top: 80px;
}

.map-overlay .text.hidden {
  opacity: 0;
}

.map-overlay.expand {
  z-index: 4;
  width: calc(100vw - 110px);
  height: calc(100vh - 110px);
}

.map-overlay .map {
  width: 600px;
  height: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @media (min-width: 1900px) {
    width: 1327px;
    height: 785px;
  }
}

.map-overlay .map img {
  object-fit: contain;
}
</style>