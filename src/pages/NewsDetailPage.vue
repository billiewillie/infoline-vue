<template>
  <div class="basepage">
    <div class="news-cover">
      <TheImage alt="alt" image="http://news.trifonov.space/images/posts/10/img_124.webp"/>
      <header class="news-header">
        <div class="news-header__top">
          <div class="date">
            <div class="icon">
              <IconCalendar/>
            </div>
            <span>{{ post.published_date }}</span>
          </div>
          <div class="author">
            <div class="icon">
              <IconHouse/>
            </div>
            <span>автор: {{ post.name }} {{ post.surname }}</span>
          </div>
          <div class="category">
            <div class="icon">
              <IconHouse/>
            </div>
            <span>категория: {{ post.category }}</span>
          </div>
        </div>
        <h1 class="title">{{ post.title }}</h1>
      </header>
    </div>
    <div class="content">
      <p class="description">{{ post.description }}</p>
      <div v-html="post.content"></div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {NEWS_IMAGES_URL, NEWS_URL} from "@/constants";
import IconCommentGrey from "@/components/icons/IconCommentGrey.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import TheImage from "@/components/TheImage.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconHouse from "@/components/icons/IconHouse.vue";

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
.news-detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  background-color: var(--gray-light);
}

.news-detail-page .news-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background-color: var(--white);
}

.news-detail-page .news-container__comments {
  padding: 40px 0;
}

.news-cover {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  height: 500px;
}

.news-cover .image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.news-header {
  background-color: var(--blue-dark);
  color: var(--white);
  max-width: 760px;
}

.content {
  padding: 40px 10px;
  font-size: 16px;
  font-weight: 400;

  @media (min-width: 1280px) {
    padding: 40px 152px;
  }
}

.title {
  color: var(--white);
  font-weight: 700;
  font-size: 30px;
}

.new-comment__header {
  display: flex;
  align-items: center;
  column-gap: 15px;
}

.new-comment__header span {
  display: flex;
  font-weight: 700;
  font-size: 16px;
  color: var(--gray-dark);
}

.description {
  color: var(--gray-dark);
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid var(--gray-medium);
  font-size: 24px;
  font-weight: 400;
}
</style>