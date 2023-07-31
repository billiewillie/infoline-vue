<template>
  <div class="basepage">
    <div class="news-stats">
      <div class="news-stats-item">
        <div class="icon">
          <IconComment/>
        </div>
        <div class="text">2</div>
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
    <div class="news-cover">
      <TheImage alt="alt" image="http://news.trifonov.space/images/posts/10/img_124.webp"/>
      <header class="news-header rounded overflow-hidden">
        <div class="news-header__top">
          <div class="news-header__top-item date">
            <div class="icon">
              <IconCalendar/>
            </div>
            <span>{{ post.published_date }}</span>
          </div>
          <div class="news-header__top-item category">
            <div class="icon">
              <IconTag/>
            </div>
            <span>юбиляры</span>
          </div>
          <div class="news-header__top-item author">
            <div class="icon">
              <IconUser/>
            </div>
            <span>автор: Евгения Родионова</span>
          </div>
        </div>
        <h1 class="title">{{ post.title }}</h1>
      </header>
    </div>
    <div class="content">
      <p class="description post-center">{{ post.description }}</p>
      <div class="post-center" v-html="post.content"></div>
    </div>
    <div class="comment-new">
      <header class="post-header">
        <h2 class="title post-center">
            <span class="icon">
              <IconNew/>
            </span>
          <span>Оставить комментарий</span>
        </h2>
      </header>
      <div class="comment-new-textarea post-center">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
    <div class="comments">
      <header class="post-header">
        <h2 class="title post-center">
            <span class="icon">
              <IconComment/>
            </span>
          <span>Комментарии</span>
        </h2>
      </header>
      <div class="comment" v-for="comment in post.comments" :key="comment.id">
        <div class="post-center comment-inner">
          <div class="comment-avatar">
            <div class="image">
              <img
                  src="http://users.trifonov.space/images/users/belinovich/avatar.webp"
                  alt="avatar"/>
            </div>
          </div>
          <div class="comment-content">
            <div class="comment-header">
              <h3 class="comment-author title">Вадим Белинович</h3>
              <div class="comment-stats">
                <div class="comment-stats-item">
                  <div class="icon">
                    <IconCalendar/>
                  </div>
                  <span>11.12.23</span>
                </div>
                <div class="comment-stats-item">
                  <div class="icon">
                    <IconLike/>
                  </div>
                  <span>12</span>
                </div>
                <div class="comment-stats-item">
                  <div class="icon">
                    <IconLike/>
                  </div>
                  <span>12</span>
                </div>
              </div>
            </div>
            <div class="comment-text">
              {{ comment.content }}
            </div>
          </div>
          <div class="comment-dialog-trigger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {NEWS_URL} from "@/constants";
import TheImage from "@/components/TheImage.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconTag from "@/components/icons/IconTag.vue";
import IconUser from "@/components/icons/IconUser.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconView from "@/components/icons/IconView.vue";
import IconShare from "@/components/icons/IconShare.vue";
import IconNew from "@/components/icons/IconNew.vue";

const post = ref({});

onMounted(() => {
  axios
      .get(`${NEWS_URL}/1`)
      .then(res => {
        post.value = res.data;
      })
})

console.log(post)

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

  @media (min-width: 1280px) {
    flex-direction: column-reverse;
    height: 500px;
  }
}

.news-cover .image {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  overflow: hidden;

  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.news-header {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  background-color: var(--blue-dark);
  color: var(--white);
  padding: 10px;

  @media (min-width: 1280px) {
    max-width: 760px;
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

.content {
  padding: 40px 10px;
  font-size: 16px;
  font-weight: 400;
  background-color: var(--white);

  @media (min-width: 1280px) {
    padding: 40px 0;
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
}

.post-center {
  max-width: 740px;
  margin: 0 auto;
}

.post-header {
  background-color: var(--blue-dark);
  padding: 0 10px;
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
}

.comment-new-textarea textarea {
  width: 100%;
}

.comment {
  padding: 20px 0;
}

.comment:nth-of-type(even) {
  background-color: #fafafa;
}

.comment-inner {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
}

.comment-avatar {
  width: 54px;
  height: 54px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  overflow: hidden;
}

.comment-header {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
}

.comment-author {
  font-size: 16px;
  color: var(--blue-dark);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.comment-stats {
  display: flex;
  column-gap: 15px;
}

.comment-stats-item {
  display: flex;
  column-gap: 5px;
  color: var(--blue-dark);
}

.comment-content {
  display: flex;
  flex: auto;
  flex-direction: column;
  row-gap: 10px;
}

.comment-dialog-trigger {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3px;

}

.comment-dialog-trigger span {
  width: 4px;
  height: 4px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: var(--blue-dark);
}
</style>