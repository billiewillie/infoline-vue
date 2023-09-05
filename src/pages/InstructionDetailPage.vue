<template>
  <div class="basepage default-page instruction-page">
    <h1 class="title">{{ instruction.title }}</h1>
    <div class="content rounded shadow">
      <div class="container">
        <div
            class="body"
            v-if="instruction.body"
            v-html="instruction.body"></div>
        <div v-if="instruction.media?.video[0]?.url" class="instruction-video">
          <video class="video" controls>
            <source :src="`https://instructions.trifonov.space/${instruction.media?.video[0]?.url}`">
          </video>
        </div>
        <div v-if="instruction.media?.documents[0]?.url" class="instruction-document">
          <a :href="`https://instructions.trifonov.space/${instruction.media?.documents[0]?.url}`" download>Скачать
            инструкцию</a>
        </div>
        <p v-else>Инструкция скоро будет</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";

const instruction = ref({});

const params = useRoute().params;

onMounted(() => {
  axios
      .get(`https://instructions.trifonov.space/api/instructions/show/${params.id}`)
      .then(res => {
        instruction.value = res.data[0];
        console.log(instruction.value);
      })
})
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

video {
  width: 100%;
}

.container .body {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.container .body b {
  display: flex;
  font-weight: 700;
}

.instruction-video {
  margin-bottom: 20px;
}

.instruction-document a {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 16px;
  color: var(--blue-dark);
  transition: all 0.3s ease;
}

.instruction-document a:hover {
  opacity: 0.6;
  text-decoration: none;
}
</style>