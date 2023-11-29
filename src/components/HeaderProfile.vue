<template>
  <div class="header-profile" @click="isOpen = !isOpen">
    <div class="header-profile__avatar">
      <TheImage
          alt="avatar"
          :fallback="PlaceholderPerson"
          :image="`https://users.trifonov.space/images/users/${login}/avatar.webp`"      />
    </div>
    <span class="icon" :class="{active: isOpen}">
			<IconArrow/>
		</span>
  </div>
  <teleport to="body">
    <transition name="fade">
      <div
          class="header-profile__nav shadow"
          v-show="isOpen"
          v-click-outside="handleClickOutside">
<!--        <router-link class="header-profile__item" to="/admin" @click="isOpen = false">-->
<!--          <div class="icon">А</div>-->
<!--          <span class="text">Админ</span>-->
<!--        </router-link>-->
        <div class="header-profile__item" @click="setLoggedOut">
          <div class="icon">
            <IconLogout/>
          </div>
          <span class="text">Выйти</span>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import IconArrow from '@/components/icons/IconArrow.vue';
import IconSettings from '@/components/icons/IconSettings.vue';
import IconLogout from '@/components/icons/IconLogout.vue';
import {ref} from 'vue';
import {useRouter} from "vue-router";
import TheImage from "@/components/TheImage.vue";
import PlaceholderPerson from "@/assets/img/person-fallback.webp";
import {storeToRefs} from "pinia";
import {useRootStore} from "@/stores/usersStore";

const router = useRouter();
const isOpen = ref(false);
const login = localStorage.getItem('login');

const handleClickOutside = () => {
  isOpen.value = false;
};

const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target) || event.target.closest('.header-profile'))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.__ClickOutsideHandler__);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__);
  },
};

const setLoggedOut = () => {
  localStorage.setItem('login', '');
  usersStore.login({})
  router.push({
    path: '/login'
  })
}

const usersStore = useRootStore();
</script>

<style scoped>
.header-profile {
  display: none;
  cursor: pointer;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
}

.header-profile__avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 30px;
  height: 30px;
  border: 3px solid var(--blue-light);

  @media (min-width: 1920px) {
    width: 40px;
    height: 40px;
  }
}

.header-profile__avatar .image {
  overflow: hidden;
}

.header-profile__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-profile .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  transform-origin: 50% 50%;
  transition: transform 0.3s;
  transform: rotate(90deg);
}

.header-profile .icon.active {
  transform: rotate(-90deg);
}

.header-profile__nav {
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: var(--white);
  right: 0;
  top: 50px;
  padding: 20px;
  -webkit-border-radius: 0 0 0 3px;
  -moz-border-radius: 0 0 0 3px;
  border-radius: 0 0 0 3px;

  @media (min-width: 1920px) {
    top: 70px;
  }
}

.header-profile__item {
  display: flex;
  column-gap: 14px;
  align-items: center;
  cursor: pointer;
}

.header-profile__item .icon {
  display: flex;
}

.header-profile__item svg {
  width: 16px;
  height: 16px;
}

.header-profile__item .text {
  color: var(--blue-dark);
  font-size: 14px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, top 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  top: 40px;
  opacity: 0;

  @media (min-width: 1280px) {
    top: 60px;
  }

  @media (min-width: 1920px) {
    top: 80px;
  }
}
</style>
