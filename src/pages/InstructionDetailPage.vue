<template>
  <div class="basepage default-page">
    <h1 class="title">Инструкция мобильной почты (Android)</h1>
    <h2 class="subtitle">Добрый день, уважаемы коллеги! Сейчас мы разберемся как подключить корпоративную почту на своем телефоне.</h2>
    <div class="content rounded shadow">
      <div class="container">
        здесь текст для инструкции
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.title {
  max-width: 800px;
  margin: 0 auto 20px;
}

.subtitle {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto 20px;

  @media (min-width: 1280px) {
    font-size: 24px;
  }
}

.content {
  background-color: var(--white);
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1400px;
  padding: 20px 10px;
}
</style>