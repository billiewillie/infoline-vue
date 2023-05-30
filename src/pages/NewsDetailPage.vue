<template>
  <div class="basepage news-detail-page">

    <div class="news-cover">
      <picture>
        <source :srcset="`${NEWS_IMAGES_URL}/${post.id}/${post.preview_image}.webp`"
                type="image/webp">
        <img :src="`${NEWS_IMAGES_URL}/${post.id}/${post.preview_image}.jpg`" :alt="post.title">
      </picture>
    </div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <div v-html="post.content"></div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {NEWS_IMAGES_URL, NEWS_URL} from "@/constants";

const post = ref({});

onMounted(() => {
  axios
      .get(`${NEWS_URL}/1`)
      .then(res => {
        post.value = res.data;
      })
})

</script>

<style scoped>

</style>