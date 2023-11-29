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
      <FormKit
          id="eventForm"
          name="eventForm"
          submit-label="Войти"
          @submit="submitClick"
          :incomplete-message="false"
          type="form">

        <FormKit
            type="email"
            validation="required|email"
            placeholder="Введите email"
            prefix-icon="email"
            name="email"
            v-model="email"
            :validation-messages="{
              required: 'Введите email',
              email: 'Неправильный email',
            }"
        />

        <FormKit
            type="password"
            name="password"
            prefix-icon="password"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
            validation="required|length:6"
            placeholder="Введите пароль"
            v-model="password"
            :validation-messages="{
              required: 'Введите пароль',
              length: 'Минимальная длина 6 символов',
            }"
        />

      </FormKit>
    </div>
  </div>
</template>

<script setup>
import IconLogo from "@/components/icons/IconLogo.vue";
import {ref} from "vue";
import {useRootStore} from "@/stores/usersStore";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import axios from "axios";

const usersStore = useRootStore();
const {isLoggedIn} = storeToRefs(usersStore);

const router = useRouter();
const email = ref('');
const password = ref('');
const isHovered = ref(false);

const submitClick = async (data, node) => {
  await axios
      .post(
          'https://users.trifonov.space/api/auth/login',
          {
            email: email.value,
            password: password.value
          }
      )
      .then((response) => {
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('login', response.data.user.login);
      })
      .catch((error) => {
        node.setErrors(['Есть ошибки в email или пароле']);
        console.error(error);
      })

  await axios
      .get(
          `https://users.trifonov.space/api/show/user/${localStorage.getItem('login')}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
          }
      )
      .then((response) => {
        usersStore.login(response.data.user);
        router.push({
          path: '/'
        })
      })
      .catch((error) => {
        console.error(error);
      })
}

const handleIconClick = (node) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
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

.form-row input,
button {
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

.title {
  font-size: 22px;
  font-weight: 700;
  color: var(--white);
}

.title .blue {
  font-weight: 700;
  color: var(--blue-light);
}
</style>