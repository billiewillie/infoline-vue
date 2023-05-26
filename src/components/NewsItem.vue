<template>
  <div class="news-item shadow">
    <span class="news-item__date">
      <span class="icon"><IconCalendar/></span>
      <span class="news-item__date-text">{{ item.date }}</span>
    </span>
    <img :src="`${item.image}`" alt=""/>
    <div class="news-item__content">
      <h2 class="title">{{ item.title }}</h2>
      <p class="text">{{ item.text }}</p>
    </div>
    <footer class="news-item__footer">
      <div class="news-item__footer-stats">
        <div class="comments-count news-item__footer-item">
          <span class="icon"><IconComment/></span>
          <span class="news-item__footer-stats-digit">{{ item.comments }}</span>
        </div>
        <span class="likes-count news-item__footer-item">
          <span class="icon"><IconLike/></span>
          <span class="news-item__footer-stats-digit">{{ item.likes }}</span>
        </span>
        <span class="views-count news-item__footer-item">
          <span class="icon"><IconView/></span>
          <span class="news-item__footer-stats-digit">{{ item.views }}</span>
        </span>
      </div>
      <router-link to="/" class="news-item__footer-link">
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
}

.news-item__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 17px;
}

.news-item__date {
  position: absolute;
  z-index: 1;
  color: var(--white);
  padding: 8px 12px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
  background-color: var(--purple);
}

.news-item__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-item__footer-stats {
  display: flex;
  flex: auto;
  justify-content: space-between;
  padding: 0 17px;
}

.news-item__footer-link {
  display: flex;
  align-items: center;
  column-gap: 16px;
  background-color: var(--blue-light);
  color: var(--white);
  font-weight: 700;
  font-size: 13px;
  padding: 16px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
}

.news-item__footer-item {
  display: flex;
  align-items: center;
  column-gap: 6px;
}

.news-item__footer-item .icon {
  display: flex;
}
</style>