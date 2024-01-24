<template>
  <div class="basepage docs-page">
    <h1 class="title">Регламенты и положения</h1>

    <div class="tabs">
      <div class="select-box" v-click-outside="handleClickOutside">
        <div
          @click="isOpen = !isOpen"
          class="select-box__current shadow"
          tabindex="1">
          <div
            class="select-box__value"
            v-for="(tab, index) in departmentsTitles"
            :key="tab">
            <input
              class="select-box__input"
              type="radio"
              :id="`input-${index + 1}`"
              :value="index + 1"
              :checked="index + 1 === activeDepartment.id"
              @change="docsStore.setActiveDepartment(index + 1);setQueryParameter(index + 1)"/>
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
        <ul v-show="isOpen" class="select-box__list shadow rounded">
          <li
            v-for="(tab, index) in departmentsTitles"
            :key="Math.random().toString(36).slice(2)">
            <label
              class="select-box__option"
              :for="`input-${index + 1}`"
              aria-hidden="true">{{ tab }}</label>
          </li>
        </ul>
      </div>
      <ul class="tabs__list shadow rounded">
        <li
          v-for="(tab, index) in departmentsTitles"
          :key="index+1"
          class="tabs__item"
          :class="{ active: index+1 === activeDepartment.id }"
          @click="docsStore.setActiveDepartment(index+1);setQueryParameter(index+1)">
          {{ tab }}
        </li>
      </ul>
    </div>

    <div class="content shadow rounded overflow-hidden">
      <DocComponent
        v-for="item in activeDocs"
        :key="item.id"
        :id="item.id"
        :department="activeDepartment.id"
        :doc="item"/>
    </div>
  </div>
</template>

<script setup>
import DocComponent from "@/components/DocComponent.vue";
import {useRootStore} from "@/stores/docsStore";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import IconArrow from "@/components/icons/IconArrow.vue";
import router from "@/router";

const route = useRoute();

const department = ref(1);
const doc = ref('');
const isOpen = ref(false);

const setQueryParameter = (value) => {
  router.push({
    path: '/docs',
    query: {
      department: value
    }
  });
};

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

const docsStore = useRootStore();

onMounted(() => {
  if (route.query.department && route.query.doc) {

    department.value = Number(route.query.department);
    docsStore.getDocs(department.value);
    doc.value = route.query.doc;

    setTimeout(() => {
      const el = document.getElementById(doc.value);
      el.scrollIntoView({block: 'center', behavior: 'smooth'});
      el.classList.add('accent');
    }, 500)

  } else if (route.query.department) {

    department.value = Number(route.query.department);
    docsStore.getDocs(department.value);

  } else {

    docsStore.getDocs(1);

  }
});

const {departments, departmentsTitles, activeDepartment, activeDocs} = storeToRefs(docsStore);
</script>

<style scoped>
.subtitle {
  text-align: center;
  margin-bottom: 18px;

  @media (min-width: 1280px) {
    margin-bottom: 20px;
  }
}

.content {
  background-color: var(--white);

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

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
</style>