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
        <div
            @click="toggleLike"
            class="icon">
          <svg
              :fill="isLikedByCurrentUser ? 'var(--blue-light)' : 'none'"
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="2"
              stroke="var(--blue-light)">
            <g id="SVGRepo_iconCarrier">
              <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
            </g>
          </svg>
        </div>
        <div class="text">{{ likes.length ? likes.length : 0 }}</div>
        <div class="list list-aside" v-if="likes.length > 0">
          <div class="list-wrapper rounded">
            <router-link
                v-for="item in likes"
                :to="`/users/${item.user_token}`"
                :key="item.id" class="list-item overflow-hidden">
              <TheImage
                  :alt="`${item.id}`"
                  :fallback="PlaceholderPerson"
                  :image="`https://users.trifonov.space/images/users/${item.user_token}/avatar.webp`"/>
            </router-link>
          </div>
        </div>
      </div>
      <div class="news-stats-item">
        <div class="icon">
          <IconView/>
        </div>
        <div class="text">{{ post.show_count ? post.show_count : 0 }}</div>
      </div>
      <div class="news-stats-item">
        <div
            class="icon icon-copy"
            @click="copyLink">
          <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <g id="share-06">
              <path
                  id="Icon"
                  d="M16.1677 10.0645C16.3508 9.9076 16.4424 9.82914 16.4759 9.73576C16.5054 9.65381 16.5054 9.56416 16.4759 9.48221C16.4424 9.38883 16.3508 9.31036 16.1677 9.15343L9.81469 3.70796C9.49952 3.43781 9.34194 3.30274 9.20852 3.29943C9.09257 3.29656 8.98181 3.3475 8.90853 3.43741C8.82422 3.54086 8.82422 3.74841 8.82422 4.16351V7.38496C7.22321 7.66505 5.75791 8.4763 4.669 9.69438C3.48184 11.0224 2.82514 12.7409 2.82422 14.5222V14.9812C3.61122 14.0331 4.59385 13.2664 5.70479 12.7334C6.68424 12.2636 7.74303 11.9852 8.82422 11.9119V15.0545C8.82422 15.4696 8.82422 15.6771 8.90853 15.7806C8.98181 15.8705 9.09257 15.9214 9.20852 15.9185C9.34194 15.9152 9.49952 15.7802 9.81469 15.51L16.1677 10.0645Z"
                  stroke="#57E8DF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </g>
          </svg>
          <div class="tooltip">
            <span class="tooltip-wrapper rounded">Копировать ссылку</span>
          </div>
        </div>
      </div>
    </div>
    <div class="news-cover rounded shadow">
      <TheImage
          alt=""
          :fallback="`https://news.trifonov.space/images/posts/${post.id}/${post.preview_image}.webp`"
          :image="`https://news.trifonov.space/images/posts/${post.id}/${post.preview_image}.webp`"/>
      <header class="news-header overflow-hidden">
        <div class="news-header__top">
          <div class="news-header__top-item date">
            <div class="icon">
              <IconCalendar/>
            </div>
            <span>{{ new Date(post.published_date).getDate() }}.{{
                new Date(post.published_date).getMonth() + 1
              }}.{{ new Date(post.published_date).getFullYear() }}</span>
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
    <div class="comment-new">
      <header class="post-header">
        <h2 class="title post-center">
          <span class="icon">
            <IconNew/>
          </span>
          <span>Оставить комментарий</span>
        </h2>
      </header>
      <div class="comment-new-textarea">
        <textarea
            rows="5"
            placeholder="Напишите комментарий"
            v-model="newComment"></textarea>
        <button
            @click="sendComment"
            class="comment-new-send">
          <span>отправить</span>
          <i class="icon">
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M1 10L2.76297 8.42742C4.1689 7.17332 4.87187 6.54627 4.98011 5.782C5.00663 5.59474 5.00663 5.40526 4.98011 5.218C4.87187 4.45373 4.1689 3.82668 2.76297 2.57258L1 1"
                  stroke="var(--white)"
                  stroke-width="1.5"
                  stroke-linecap="round"/>
            </svg>
          </i>
        </button>
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
      <CommentComponent
          :key="comment.id"
          :comment="comment"
          :postId="params.id"
          :parentId="comment.parent_id ? comment.parent_id : null"
          v-for="comment in comments"
          @deleteComment="deleteComment"
          @editComment="editComment"
          @sendAnswer="sendAnswer"
      />
      <div v-if="comments && comments.length === 0">
        <div class="post-center comments-empty">
          <p>Комментариев еще нет</p>
        </div>
      </div>
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
import "vue-toastification/dist/index.css";
import axios from "axios";
import 'swiper/css/navigation';
import {Navigation} from 'swiper';
import {NEWS_URL} from "@/constants";
import {onMounted, ref} from "vue";
import TheImage from "@/components/TheImage.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconUser from "@/components/icons/IconUser.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconView from "@/components/icons/IconView.vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {Swiper, SwiperSlide} from "swiper/vue";
import NewsItem from "@/components/NewsItem.vue";
import {storeToRefs} from "pinia";
import {useRootStore as useNewsStore} from "@/stores/newsStore";
import PlaceholderPerson from "@/assets/img/person-fallback.webp";
import {useToast} from "vue-toastification";
import CommentComponent from "@/components/CommentComponent.vue";
import IconNew from "@/components/icons/IconNew.vue";

const modules = [Navigation];
const newsStore = useNewsStore();
newsStore.getNewsIndexPage();

const {newsIndexPage} = storeToRefs(newsStore);
const post = ref({});
const params = useRoute().params;
const likes = ref([]);
const isLikedByCurrentUser = ref(false);
const comments = ref([]);
const commentsParents = ref([]);
const commentsChildren = ref([]);
const toast = useToast();
const newComment = ref('');

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href);
  toast.success(
      'скопировано',
      {
        timeout: 2000
      }
  );
};

const toggleLike = async () => {
  if (localStorage.getItem('login') !== 'test') {
    if (isLikedByCurrentUser.value) {
      await axios
          .post(`https://news.trifonov.space/api/likes?post_id=${params.id}&user_token=${localStorage.getItem('login')}`, {})
          .then(() => {
            likes.value = likes.value.filter(like => like.user_token !== localStorage.getItem('login'));
            isLikedByCurrentUser.value = false;
          })
          .catch(err => {
            console.error(err)
          })
    } else {
      await axios
          .post(`https://news.trifonov.space/api/likes?post_id=${params.id}&user_token=${localStorage.getItem('login')}`, {})
          .then(() => {
            isLikedByCurrentUser.value = true;
            likes.value.push({
              post_id: params.id,
              user_token: localStorage.getItem('login')
            });
          })
          .catch(err => {
            console.error(err)
          })
    }
  }
}

const sendComment = async () => {
  if (localStorage.getItem('login') !== 'test' && newComment.value.length > 3) {
    await axios
        .post('https://news.trifonov.space/api/comments', {
          "content": newComment.value,
          "parent_id": null,
          "user_token": localStorage.getItem('login'),
          "post_id": params.id,
        })
        .then(res => {
          toast.success(
              'комментарий добавлен',
              {
                timeout: 2000
              }
          )
          comments.value.push(res.data);
          newComment.value = '';
        })
        .catch(err => {
          toast.error(
              'ошибка',
              {
                timeout: 2000
              }
          )
          console.error(err)
        })
  }
}

const sendAnswer = async (parent_id, content) => {
  if (localStorage.getItem('login') !== 'test') {
    await axios
        .post(
            'https://news.trifonov.space/api/comments',
            {
              "content": content,
              "parent_id": parent_id,
              "user_token": localStorage.getItem('login'),
              "post_id": params.id,
            }
        )
        .then((res) => {
          toast.success(
              'комментарий добавлен',
              {
                timeout: 2000
              }
          )
          const filteredComment = comments.value.filter(comment => comment.id === parent_id || comment.parent_id === parent_id).pop();
          console.log(filteredComment)
          comments.value.forEach((comment, index) => {
            if (comment.id === filteredComment.id) {
              comments.value.splice(index + 1, 0, res.data);
            }
          })
        })
        .catch(err => {
          toast.error(
              'ошибка',
              {
                timeout: 2000
              }
          )
          console.error(err)
        })
  }
}

const deleteComment = async (id) => {
  await axios
      .delete(`https://news.trifonov.space/api/comments`, {
        data: {
          "id": id
        }
      })
      .then(() => {
        toast.success(
            'комментарий удален',
            {
              timeout: 2000
            }
        )
        comments.value.forEach(comment => {
          if (comment.id === id) {
            comment.content = "Комментарий удален."
          }
        });
      })
      .catch(err => {
        toast.error(
            'ошибка',
            {
              timeout: 2000
            }
        )
        console.error(err)
      })
}

const editComment = async (id, content) => {
  await axios
      .patch(
          'https://news.trifonov.space/api/comments',
          {
            "id": id,
            "content": content
          })
      .then((res) => {
        toast.success(
            'комментарий изменен',
            {
              timeout: 2000
            }
        )
        comments.value.forEach(comment => {
          if (comment.id === id) {
            comment.content = content
          }
        })
        console.log(comments.value)
      })
      .catch(err => {
        toast.error(
            'ошибка',
            {
              timeout: 2000
            }
        )
        console.error(err)
      })
}

onMounted(() => {
  axios
      .get(`${NEWS_URL}/${params.id}`)
      .then(res => {
        post.value = res.data;
        likes.value = res.data.likes;
        isLikedByCurrentUser.value = res.data.likes.filter(like => like.user_token === localStorage.getItem('login')).length > 0;
        commentsParents.value = res.data.comments.filter(comment => comment.parent_id === null);
        commentsChildren.value = res.data.comments.filter(comment => comment.parent_id !== null);
        commentsParents.value.forEach(parent => {
          comments.value.push(parent);
          commentsChildren.value.forEach(child => {
            if (parent.id === child.parent_id) {
              comments.value.push(child);
            }
          })
        })
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
        likes.value = res.data.likes;
        isLikedByCurrentUser.value = res.data.likes.filter(like => like.user_token === localStorage.getItem('login')).length > 0;
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
  row-gap: 24px;
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
  column-gap: 8px;
  color: var(--white);
  position: relative;
}

.news-stats-item .text {
  min-width: 25px;
}

.news-stats-item .list {
  position: absolute;
  display: none;
  padding-right: 30px;
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  transition: opacity 0.3s ease-in-out;
}

.news-stats-item .list .list-wrapper {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  padding: 8px;
  width: 160px;
  gap: 8px;
  background-color: var(--blue-dark);
}

.news-stats-item .list-item {
  display: flex;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 2px solid var(--blue-light);
  width: 30px;
  height: 30px;
  transition: border 0.3s ease-in-out;
}

.news-stats-item .list-item .image {
  width: 100%;
}

.news-stats-item:hover > .list {
  display: flex;
}

.news-stats-item .list-item:hover {
  border: 2px solid var(--blue-dark);
}

.news-stats-item .icon {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.news-stats-item .icon svg {
  width: 100%;
  height: 100%;
  transition: fill 0.3s ease-in-out;
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

.icon-copy {
  position: relative;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  display: none;
  right: 100%;
  padding-right: 30px;
  width: 162px;
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-wrapper {
  padding: 8px;
  background-color: var(--blue-dark);
  text-align: center;
  font-size: 12px;
}

.icon-copy:hover .tooltip {
  display: block;
}
</style>