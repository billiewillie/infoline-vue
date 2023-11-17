<template>
  <div class="tabs">
    <div class="select-box" v-click-outside="handleClickOutside">
      <div @click="isOpen = !isOpen" class="select-box__current shadow" tabindex="1">
        <div class="select-box__value" v-for="tab in props.tabs" :key="tab">
          <input
              class="select-box__input"
              type="radio"
              :id="tab"
              :value="tab"
              :checked="tab === activeTab"
              @change="$emit('setActiveTab', $event.target.value)"
          />
          <p class="select-box__input-text">{{ tab }}</p>
        </div>
        <div
            class="arrow">
          <div
              class="icon"
              :class="{active: isOpen}">
            <IconArrow/>
          </div>
        </div>
      </div>
      <ul
          v-show="isOpen"
          class="select-box__list shadow rounded">
        <li v-for="tab in props.tabs" :key="tab">
          <label
              class="select-box__option"
              :for="tab"
              aria-hidden="true">{{ tab }}</label>
        </li>
      </ul>
    </div>
    <ul class="tabs__list shadow rounded">
      <li
          v-for="tab in props.tabs"
          :key="tab"
          class="tabs__item"
          :class="{ active: tab === props.activeTab }"
          @click="$emit('setActiveTab', tab)">
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from "vue";
import IconArrow from "@/components/icons/IconArrow.vue";

const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  activeTab: {
    type: String,
  }
});

const isOpen = ref(false);

const emit = defineEmits(['setActiveTab']);

const handleClickOutside = () => {
  isOpen.value = false;
};

const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.__ClickOutsideHandler__);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__);
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.select-box {
  display: flex;
  width: 100%;
  position: relative;

  @media (min-width: 1280px) {
    display: none;
  }
}

.select-box__current {
  width: 100%;
  position: relative;
  cursor: pointer;
  outline: none;
  padding: 0 10px;
  background-color: var(--white);
}

.select-box__current:focus + .select-box__list .select-box__option {
  cursor: pointer;
}

.select-box .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  transition: transform 0.3s ease-in-out;
  transform-origin: 50% 50%;
}

.select-box .icon.active {
  transform: rotate(-90deg);
}

.select-box .arrow {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 32px;
  height: 100%;
  background-color: var(--blue-light);
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

.select-box__value {
  display: flex;
}

.select-box__input {
  display: none;

  &:checked + .select-box__input-text {
    display: block;
  }
}

.select-box__input-text {
  display: none;
  width: 100%;
  padding: 7px 0;
  background-color: #fff;
}

.select-box__list {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  row-gap: 10px;
  list-style: none;
  top: 40px;
  opacity: 1;
  background-color: var(--white);
  z-index: 3;

  @media (min-width: 1280px) {
    padding: 0;
  }
}

.select-box__option {
  display: block;
  padding: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #546c84;
    background-color: #fbfbfb;
  }
}

.tabs__list {
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    background-color: var(--white);
    overflow-x: hidden;
  }
}

.tabs__item {
  display: flex;
  align-items: center;
  color: var(--blue-dark);
  font-weight: 500;
  font-size: 13px;
  padding: 10px 20px;
  cursor: pointer;
  height: 100%;

  @media (min-width: 1280px) {
    text-align: center;
  }
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

.calendar-tabs .tabs__list {
  @media (min-width: 1280px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}

.admin-page .calendar-tabs .tabs__list {
  @media (min-width: 1280px) {
    width: auto;
    display: flex;
  }
}

.calendar-tabs .tabs__item {
  justify-content: center;
}
</style>