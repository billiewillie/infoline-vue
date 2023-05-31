<template>
  <div class="news-detail-page">
    <div class="news-container rounded shadow">
      <div class="news-cover">
        <picture>
          <source :srcset="`${NEWS_IMAGES_URL}/${post.id}/${post.preview_image}.webp`"
                  type="image/webp">
          <img :src="`${NEWS_IMAGES_URL}/${post.id}/${post.preview_image}.jpg`" :alt="post.title">
        </picture>
      </div>
      <div class="news-detail__content">
        <h1 class="title">{{ post.title }}</h1>
        <p class="description">{{ post.description }}</p>
        <div v-html="post.content"></div>
        <div class="new-comment">
          <header class="new-comment__header">
            <span class="icon">
              <IconCommentGrey/>
            </span>
            <span>Оставить комментарий</span>
          </header>
          <form action="" class="form">
            <textarea name="" id="" cols="30" rows="10" class="textarea rounded shadow"></textarea>
            <ButtonComponent class="rounded">отправить</ButtonComponent>
          </form>
        </div>
      </div>
    </div>
    <div class="news-container news-container__comments rounded shadow">
      <header class="comments-header">
        <div class="comment-container">
          <p>Комментарии</p>
        </div>
      </header>
      <section class="comments-section">
        <div class="comment-container">
          <div class="comment">
            <div class="avatar overflow-hidden">
              <picture>
                <source :srcset="`http://users.trifonov.space/images/users/belinovich/belinovich.webp`"
                        type="image/webp">
                <img :src="`http://users.trifonov.space/images/users/belinovich/belinovich.jpg`" :alt="post.title">
              </picture>
            </div>
            <span class="name">Марина Лазарева</span>
            <span class="date">11.12.1013</span>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, perferendis. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Molestias, perferendis.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Molestias, perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Molestias, perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
              perferendis.
            </div>
          </div>
          <div class="comment comment-answer">
            <div class="avatar overflow-hidden">
              <picture>
                <source :srcset="`http://users.trifonov.space/images/users/belinovich/belinovich.webp`"
                        type="image/webp">
                <img :src="`http://users.trifonov.space/images/users/belinovich/belinovich.jpg`" :alt="post.title">
              </picture>
            </div>
            <span class="name">Марина Лазарева</span>
            <span class="date">11.12.1013</span>
            <div class="text"><span class="remain">@Марина Лазарева</span> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Molestias, perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
              perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, perferendis.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Molestias, perferendis.
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {NEWS_IMAGES_URL, NEWS_URL} from "@/constants";
import IconCommentGrey from "@/components/icons/IconCommentGrey.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

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
  padding: 56px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  background-color: var(--gray-light);

  @media (min-width: 1280px) {
    padding: 66px 20px 10px;
  }

  @media (min-width: 1920px) {
    padding: 90px 20px 10px 90px;
  }
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
  height: 514px;
}

.news-detail__content {
  padding: 40px 10px;
  font-size: 16px;
  font-weight: 400;

  @media (min-width: 1280px) {
    padding: 40px 152px;
  }
}

.title {
  color: var(--blue-dark);
  font-weight: 700;
  font-size: 30px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid var(--gray-medium);
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

.new-comment {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
}

.new-comment .form {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  align-items: center;
}

.new-comment .form textarea {
  padding: 15px;
  resize: none;
  width: 100%;
}

.new-comment .form button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  width: 230px;
}

.new-comment .form button span.text {
  color: var(--white);
  font-size: 13px;
  font-weight: 700;
}

.comments-header {
  color: var(--gray-dark);
  margin-bottom: 40px;
}

.comments-header p {
  font-weight: 700;
  font-size: 16px;
}

.comment {
  display: grid;
  grid-template-columns: 46px auto 1fr;
  grid-template-rows: 20px 1fr;
  column-gap: 16px;
  row-gap: 9px;
  margin-bottom: 30px;
}

.comment.comment-answer {
  padding-left: 73px;
}

.comment .avatar {
  width: 46px;
  height: 46px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  grid-row-start: 1;
  grid-row-end: 3;
  filter: drop-shadow(0 1px 5px rgba(0, 0, 0, 0.21));
}

.comment .name {
  font-size: 14px;
  color: var(--blue-dark);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.comment .date {
  font-size: 14px;
  color: var(--gray-dark);
}

.comment .text {
  font-size: 14px;
  grid-column-end: 4;
  grid-column-start: 2;
  color: var(--blue-dark);
}

.comment-container {
  padding: 0 10px;

  @media (min-width: 1280px) {
    padding: 0 152px;
  }
}
</style>