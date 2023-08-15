<template>
  <div class="custompage">
    <div class='light x1'></div>
    <div class='light x2'></div>
    <div class='light x3'></div>
    <div class='light x4'></div>
    <div class='light x5'></div>
    <div class='light x6'></div>
    <div class='light x7'></div>
    <div class='light x8'></div>
    <div class='light x9'></div>
    <div class="custom-wrapper login-wrapper rounded">
      <div class="logo rounded">
        <IconLogo/>
      </div>
      <h1 class="title">Добро пожаловать на корпоративный портал info <span class="blue">Line</span>!</h1>
      <form class="form" @submit.prevent="submitClick">
        <div class="form-row">
          <div class="icon">
            <IconUserForm/>
          </div>
          <input
              type="text"
              class="rounded input"
              v-model="login"
              placeholder="Введите логин"/>
        </div>
        <div class="form-row">
          <div class="icon">
            <IconKeyForm/>
          </div>
          <input
              type="password"
              class="rounded input"
              v-model="password"
              placeholder="Введите пароль"/>
        </div>
        <div class="form-row">
          <button
              class="btn"
              @mouseover="isHovered = true"
              @mouseleave="isHovered = false">
            <span class="text">войти</span>
            <span class="btn-icon">
              <IconArrow
                  :stroke="isHovered
                  ? 'var(--blue-light)'
                  : 'var(--white)'"
              />
            </span>
          </button>
        </div>
      </form>
      <!--      <router-link to="/forgot" class="forgot">Забыли пароль?</router-link>-->
    </div>
  </div>
</template>

<script setup>
import IconLogo from "@/components/icons/IconLogo.vue";
import IconUserForm from "@/components/icons/IconUserForm.vue";
import IconKeyForm from "@/components/icons/IconKeyForm.vue";
import IconArrow from "@/components/icons/IconArrow.vue";
import {ref} from "vue";
import {useRootStore} from "@/stores/usersStore";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";

const usersStore = useRootStore();
const {isLoggedIn} = storeToRefs(usersStore);

const router = useRouter();
const login = ref('');
const password = ref('');
const isHovered = ref(false);

const submitClick = () => {
  usersStore.setLogin(login.value, password.value);
  if (localStorage.getItem('isLoggedIn') === '1') {
    router.push({
      path: '/'
    })
  }
}
</script>

<style scoped>
.custom-wrapper {
  background-color: var(--blue-dark);
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: var(--blue-light);
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
}

.form-row {
  position: relative;
  width: 100%;
}

.form-row input, button {
  width: 100%;
}

.forgot {
  color: var(--white);
  text-decoration: underline;
  text-underline-offset: 3px;
  font-size: 13px;
}

.form-row .icon {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 13px;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
}

.input {
  padding: 14px 14px 14px 45px;
}

.title {
  font-size: 22px;
  font-weight: 700;
  color: var(--white);
}

.title .blue {
  font-weight: 700;
  color: var(--blue-light);
}

.btn {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--blue-light);
  border: 1px solid var(--blue-light);
  cursor: pointer;
  padding: 14px;
  transition: background-color 0.3s ease-in-out;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.btn:hover {
  background-color: var(--white);
}

.btn span.text {
  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
  flex: auto;
  transition: color 0.3s ease-in-out;
}

.btn:hover span.text {
  color: var(--blue-light);
}

.btn-icon {
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