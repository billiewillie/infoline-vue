<template>
  <div class="news-item shadow">
    <span class="news-item__date">
      <span class="icon"><IconCalendar/></span>
      <span class="text">{{ item.published_date }}</span>
    </span>
    <div class="news-item__image">
      <picture>
        <source :srcset="`${NEWS_IMAGES_URL}/${item.id}/${item.preview_image}.webp`" type="image/webp">
        <img :src="`${NEWS_IMAGES_URL}/${item.id}/${item.preview_image}.jpg`" alt=""/>
      </picture>
    </div>
    <div class="news-item__content">
      <h2 class="title">{{ item.title }}</h2>
      <p class="text">{{ item.description }}</p>
    </div>
    <footer class="news-item__footer">
      <div class="news-item__footer-stats">
        <div class="comments-count news-item__footer-item">
          <span class="icon"><IconComment/></span>
          <span class="news-item__footer-stats-digit">{{ item.comments.length }}</span>
        </div>
        <span class="likes-count news-item__footer-item">
          <span class="icon"><IconLike/></span>
          <span class="news-item__footer-stats-digit">{{ item.like_count }}</span>
        </span>
        <span class="views-count news-item__footer-item">
          <span class="icon"><IconView/></span>
          <span class="news-item__footer-stats-digit">{{ item.show_count }}</span>
        </span>
      </div>
      <router-link :to="`/news/${item.id}`" class="news-item__footer-link">
        <span>Читать полностью</span>
        <span><IconArrow/></span>
      </router-link>
    </footer>
  </div>
</template>

<script setup>
import IconComment from "@/components/icons/IconComment.vue";
import IconView from "@/components/icons/IconView.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconArrow from "@/components/icons/IconArrow.vue";
import {NEWS_IMAGES_URL} from "@/constants";

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.news-item {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.news-item__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 17px;
}

.news-item__content .title {
  font-weight: 700;
  font-size: 18px;

  @media (min-width: 1280px) {
    font-size: 15px;
  }

  @media (min-width: 1920px) {
    font-size: 16px;
  }
}

.news-item__content .text {
  font-weight: 400;
  font-size: 15px;

  @media (min-width: 1280px) {
    font-size: 13px;
  }

  @media (min-width: 1920px) {
    font-size: 14px;
  }
}

.news-item__date {
  position: absolute;
  display: flex;
  column-gap: 5px;
  align-items: center;
  z-index: 1;
  color: var(--white);
  padding: 6px 12px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
  background-color: var(--purple);

  @media (min-width: 1920px) {
    padding: 7px 9px;
  }
}

.news-item__date .icon {
  display: flex;
}

.news-item__date .icon svg {
  width: 18px;
  height: 20px;

  @media (min-width: 1280px) {
    width: 12px;
    height: 13px;
  }

  @media (min-width: 1920px) {
    width: 16px;
    height: 18px;
  }
}

.news-item__date .text {
  font-weight: 600;
  font-size: 13px;

  @media (min-width: 1280px) {
    font-size: 10px;
  }

  @media (min-width: 1920px) {
    font-size: 13px;
  }
}

.news-item__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-item__footer-stats {
  display: flex;
  column-gap: 17px;
  padding: 0 17px;
}

.news-item__footer-stats-digit {
  line-height: 1;
  color: var(--gray-dark);
  font-weight: 400;
  font-size: 13px;
}

.news-item__footer-link {
  display: flex;
  align-items: center;
  column-gap: 16px;
  background-color: var(--blue-light);
  color: var(--white);
  padding: 16px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
}

.news-item__footer-link span {
  font-weight: 700;
  font-size: 13px;
  display: flex;
}

.news-item__footer-item {
  display: flex;
  align-items: center;
  column-gap: 6px;
}

.news-item__footer-item .icon {
  display: flex;
}

.news-item__image {
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  @media (min-width: 1920px) {
    height: 273px;
  }
}

.news-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>