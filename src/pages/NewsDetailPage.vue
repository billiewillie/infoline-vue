<template>
  <div class="basepage">
    <div class="news-stats">
      <div class="news-stats-item">
        <div class="icon">
          <IconComment/>
        </div>
        <div class="text">{{ post?.comments?.length > 0 ? post?.comments?.length : 0 }}</div>
      </div>
      <div class="news-stats-item">
        <div class="icon">
          <IconLike/>
        </div>
        <div class="text">{{ post.like_count ? post.like_count : 0 }}</div>
      </div>
      <div class="news-stats-item">
        <div class="icon">
          <IconView/>
        </div>
        <div class="text">{{ post.show_count ? post.show_count : 0 }}</div>
      </div>
      <div class="news-stats-item">
        <div class="icon">
          <IconShare/>
        </div>
      </div>
    </div>
    <div class="news-cover rounded shadow">
      <TheImage
          :alt="`image-${post.id}`"
          :fallback="`https://news.trifonov.space/images/posts/${post.id}/${post.preview_image}.webp`"
          :image="`https://news.trifonov.space/images/posts/${post.id}/${post.preview_image}.webp`"/>
      <header class="news-header overflow-hidden">
        <div class="news-header__top">
          <div class="news-header__top-item date">
            <div class="icon">
              <IconCalendar/>
            </div>
            <span>{{ post.published_date }}</span>
          </div>
          <div class="news-header__top-item author">
            <div class="icon">
              <IconUser/>
            </div>
            <span>автор: <b>Евгения Родионова</b></span>
          </div>
        </div>
        <h1 class="title">{{ post.title }}</h1>
      </header>
    </div>
    <div class="content rounded shadow">
      <p class="description">{{ post.description }}</p>
      <div class="post-content post-center" v-html="post.content"></div>
    </div>
    <div class="news-more">
      <h2 class="title">Похожие новости</h2>
      <div class="news-grid">
        <Swiper
            :modules="modules"
            :slides-per-view="1"
            navigation
            space-between="10"
            v-if="newsIndexPage && newsIndexPage.length"
            :breakpoints="{
              768: {
                slidesPerView: 2
              },
              1280: {
                slidesPerView: 3
              }
            }"
            loop>
          <SwiperSlide
              v-for="item in newsIndexPage"
              :key="item.id">
            <NewsItem :item="item"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css';
import axios from "axios";
import 'swiper/css/navigation';
import {Navigation} from 'swiper';
import {NEWS_URL} from "@/constants";
import {onMounted, ref} from "vue";
import TheImage from "@/components/TheImage.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconUser from "@/components/icons/IconUser.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconView from "@/components/icons/IconView.vue";
import IconShare from "@/components/icons/IconShare.vue";
import IconNew from "@/components/icons/IconNew.vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {Swiper, SwiperSlide} from "swiper/vue";
import NewsItem from "@/components/NewsItem.vue";
import {storeToRefs} from "pinia";
import {useRootStore as useNewsStore} from "@/stores/newsStore";
import CommentComponent from "@/components/CommentComponent.vue";

const modules = [Navigation];
const newsStore = useNewsStore();
newsStore.getNewsIndexPage();
const {newsIndexPage} = storeToRefs(newsStore);
const post = ref({});
const params = useRoute().params;

onMounted(() => {
  axios
      .get(`${NEWS_URL}/${params.id}`)
      .then(res => {
        post.value = res.data;
      })
      .catch(err => {
        console.log(err);
      })
});

onBeforeRouteUpdate((to) => {
  axios
      .get(`${NEWS_URL}/${to.params.id}`)
      .then(res => {
        post.value = res.data;
      })
      .catch(err => {
        console.log(err);
      })
});
</script>

<style scoped>
.news-stats {
  position: fixed;
  display: none;
  top: 170px;
  right: 0;
  background-color: var(--blue-dark);
  padding: 20px;
  z-index: 2;
  flex-direction: column;
  row-gap: 30px;
  -webkit-border-radius: 3px 0 0 3px;
  -moz-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
  transition: right 0.5s ease-in-out;

  @media (min-width: 1280px) {
    display: flex;
  }
}

.news-stats-item {
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: var(--white);
}

.news-stats-item .icon {
  width: 18px;
  height: 18px;
}

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
  flex-direction: column;
  position: relative;
  row-gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 1280px) {
    flex-direction: column-reverse;
    height: 590px;
  }
}

.news-cover .image {
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  aspect-ratio: 2/1;

  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: inherit;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
}

.news-header {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  background-color: var(--blue-dark);
  color: var(--white);
  padding: 10px;
  z-index: 1;
  -webkit-border-radius: 0 0 3px 3px;
  -moz-border-radius: 0 0 3px 3px;
  border-radius: 0 0 3px 3px;

  @media (min-width: 1280px) {
    max-width: 760px;
    padding: 20px;
    row-gap: 20px;
  }
}

.news-header__top {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media (min-width: 1280px) {
    gap: 30px;
  }
}

.news-header__top-item {
  display: flex;
  column-gap: 10px;
}

.news-header__top-item b {
  font-weight: 700;
}

.news-header__top-item.category span {
  font-weight: 600;
}

.news-header__top-item.date span {
  font-weight: 600;
}

.content {
  padding: 30px 10px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  background-color: var(--white);
  margin-bottom: 40px;

  @media (min-width: 1280px) {
    padding: 40px 0;
    font-size: 18px;
  }
}

.title {
  color: var(--white);
  font-weight: 700;
  font-size: 30px;
  text-align: left;
  margin-bottom: 0;
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
  border-bottom: 1px solid var(--gray-medium);
  font-size: 24px;
  font-weight: 400;
  max-width: 740px;
  margin: 0 auto 25px;
}

.post-center {
  max-width: 740px;
  margin: 0 auto;
}

.post-header {
  background-color: var(--blue-dark);
  padding: 0 10px;
}

.comments .post-header {
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
}

.post-header h2 {
  display: flex;
  column-gap: 10px;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  justify-content: flex-start;
}

.post-header .icon {
  width: 18px;
  height: 18px;

  @media (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
}

.post-header .icon svg {
  width: 100%;
  height: 100%;
}

.post-header span {
  font-size: 16px;
  font-weight: 700;
}

.comment-new {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-bottom: 20px;
  background-color: var(--white);
}

.comments {
  background-color: var(--white);
  margin-bottom: 40px;
}

.comment-new-textarea {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  position: relative;
  max-width: 740px;
  margin: 0 auto;
  font-size: 0;
  border: 1px solid var(--gray-medium);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.comment-new-textarea textarea {
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 740px;
  padding: 8px;
  outline: none;
  border: 1px solid var(--white);
  resize: none;
  font-family: var(--font-base);
  line-height: 1.4;
}

.comment-new-send {
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-color: var(--blue-light);
  bottom: -1px;
  right: -1px;
  padding: 10px 20px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid var(--blue-light);
  transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out;
}

.comment-new-send span {
  line-height: 1;
  color: var(--white);
  font-weight: bold;
}

.comment-new-send i.icon {
  display: flex;
  align-items: center;
  width: 6px;
  height: 11px;
}

.comment-new-send i.icon svg {
  width: 100%;
  height: 100%;
}

.comment-new-send:hover {
  background-color: var(--white);
}

.comment-new-send:hover span {
  color: var(--blue-light);
}

.comment-new-send:hover svg path {
  stroke: var(--blue-light);
}

.news-more {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.news-more .title {
  color: var(--blue-dark);
  text-align: center;
}

.post-content {
  padding-bottom: 30px;
}

.comments-empty {
  padding: 20px 10px;

  @media (min-width: 1280px) {
    padding: 20px 0;
  }
}

.swiper-slide {
  @media (min-width: 1280px) {
    height: auto;
  }
}

.swiper {
  @media (min-width: 1280px) {
    padding-bottom: 2px;
  }
}
</style>