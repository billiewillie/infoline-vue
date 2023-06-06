<script setup>
import IconLogo from "@/components/icons/IconLogo.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import IconUserForm from "@/components/icons/IconUserForm.vue";
import IconKeyForm from "@/components/icons/IconKeyForm.vue";
</script>

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
      <form class="form">
        <div class="form-row">
          <div class="icon">
            <IconUserForm/>
          </div>
          <input type="text" class="rounded input" placeholder="Введите логин"/>
        </div>
        <div class="form-row">
          <div class="icon">
            <IconKeyForm />
          </div>
          <input type="password" class="rounded input" placeholder="Введите пароль"/>
        </div>
        <div class="form-row">
          <ButtonComponent>Войти</ButtonComponent>
        </div>
      </form>
      <router-link to="/forgot" class="forgot">Забыли пароль?</router-link>
    </div>
  </div>
</template>


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
  row-gap: 11px;
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

.btn {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
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
}

.title .blue {
  font-weight: 700;
  color: var(--blue-light);
}
</style>