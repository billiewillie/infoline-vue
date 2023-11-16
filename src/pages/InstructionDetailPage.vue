<template>
  <div class="basepage default-page basepage default-page instruction-page">
    <h1 class="title">{{ instruction.title }}</h1>
    <div class="content rounded shadow">
      <div class="container">
        <div
            class="body"
            v-if="instruction.body"
            v-html="instruction.body"></div>
        <div v-if="instruction.media?.documents[0]?.url" class="instruction-document">
          <a class="btn btn-link" :href="`${instruction.media?.documents[0]?.url}`" download target="_blank">
            <span>Скачать инструкцию</span>
            <span class="icon">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="share-06">
                  <path
                      id="Icon"
                      d="M16.1677 10.0645C16.3508 9.9076 16.4424 9.82914 16.4759 9.73576C16.5054 9.65381 16.5054 9.56416 16.4759 9.48221C16.4424 9.38883 16.3508 9.31036 16.1677 9.15343L9.81469 3.70796C9.49952 3.43781 9.34194 3.30274 9.20852 3.29943C9.09257 3.29656 8.98181 3.3475 8.90853 3.43741C8.82422 3.54086 8.82422 3.74841 8.82422 4.16351V7.38496C7.22321 7.66505 5.75791 8.4763 4.669 9.69438C3.48184 11.0224 2.82514 12.7409 2.82422 14.5222V14.9812C3.61122 14.0331 4.59385 13.2664 5.70479 12.7334C6.68424 12.2636 7.74303 11.9852 8.82422 11.9119V15.0545C8.82422 15.4696 8.82422 15.6771 8.90853 15.7806C8.98181 15.8705 9.09257 15.9214 9.20852 15.9185C9.34194 15.9152 9.49952 15.7802 9.81469 15.51L16.1677 10.0645Z"
                      stroke="var(--white)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
                </g>
              </svg>
            </span>
          </a>
        </div>
        <div v-if="instruction.media?.video[0]?.url" class="instruction-video">
          <video class="video" controls>
            <source :src="`${instruction.media?.video[0]?.url}`">
          </video>
        </div>
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
  padding: 24px 8px;

  @media (min-width: 1280px) {
    padding: 40px 16px  ;
  }
}

video {
  width: 100%;

  @media (min-width: 1280px) {
    display: block;
    max-width: 60%;
    margin: auto;
  }
}

.container .body {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 24px;

  @media (min-width: 1280px) {
    margin-bottom: 56px;
  }
}

.container .body b {
  display: flex;
  font-weight: 700;
}

.instruction-document {
  text-align: center;
}

.instruction-video {
  margin-top: 24px;

  @media (min-width: 1280px) {
    margin-top: 56px;
  }
}

.btn-link {
  color: var(--white);
  font-weight: 700;
  line-height: 1;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  column-gap: 16px;
  background-color: var(--blue-light);
  padding: 8px 16px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid var(--blue-light);
}

.btn-link:hover {
  background-color: var(--white);
  color: var(--blue-light);
}

.btn-link:hover path {
  stroke: var(--blue-light);
}
</style>