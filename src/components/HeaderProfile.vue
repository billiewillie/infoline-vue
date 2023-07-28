<template>
  <div class="header-profile" @click="isOpen = !isOpen">
    <div class="header-profile__avatar">
      <picture>
        <source srcset="@/assets/img/avatar.webp" type="image/webp"/>
        <img src="@/assets/img/avatar.jpg" alt="avatar"/>
      </picture>
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
        <div class="header-profile__item">
          <div class="icon">
            <IconSettings/>
          </div>
          <span class="text">Сменить пароль</span>
        </div>
        <div class="header-profile__item">
          <div class="icon">
            <IconLogout/>
          </div>
          <span class="text" @click="setLoggedOut">Выйти</span>
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

const router = useRouter()
const isOpen = ref(false);

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
  localStorage.setItem('isLoggedIn', '0');
  router.push({
    path: '/login'
  })
}
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

  @media (min-width: 1920px) {
    width: 40px;
    height: 40px;
  }
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
