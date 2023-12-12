<template>
  <div class="news-item shadow rounded">
    <span class="news-item__date">
      <span class="icon"><IconCalendar/></span>
      <span class="text">{{ new Date(item.published_date).getDay() }}-{{ new Date(item.published_date).getMonth() }}-{{ new Date(item.published_date).getFullYear() }}</span>
    </span>
    <div class="news-item__image">
      <TheImage
          alt="news-cover"
          :fallback="PlaceholderImage"
          :image="`https://news.trifonov.space/images/posts/${item.id}/${item.preview_image}.webp`"/>
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
					<span class="icon">
            <svg
                fill="none"
                width="19px"
                height="19px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke="var(--blue-light)">
            <g id="SVGRepo_iconCarrier">
              <path
                  d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
            </g>
          </svg>
          </span>
					<span class="news-item__footer-stats-digit">{{ item.like_count }}</span>
				</span>
        <span class="views-count news-item__footer-item">
					<span class="icon"><IconView/></span>
					<span class="news-item__footer-stats-digit">{{ item.show_count }}</span>
				</span>
      </div>
      <router-link :to="`/news/${item.id}`">
        <ButtonComponent class="btn">Читать полностью</ButtonComponent>
      </router-link>
    </footer>
  </div>
</template>

<script setup>
import IconComment from '@/components/icons/IconComment.vue';
import IconView from '@/components/icons/IconView.vue';
import IconLike from '@/components/icons/IconLike.vue';
import IconCalendar from '@/components/icons/IconCalendar.vue';
import ButtonComponent from '@/components/UI/ButtonComponent.vue';
import TheImage from "@/components/TheImage.vue";
import PlaceholderImage from "@/assets/img/flowers.webp";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.news-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 15px;
  background-color: var(--white);
  height: 100%;
}

.news-item__image {
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  aspect-ratio: 37 / 17;
}

.news-item__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 16px;
}

.news-item__content .title {
  font-weight: 700;
  font-size: 18px;
  color: var(--blue-dark);

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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--gray-dark);

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
  z-index: 2;
  color: var(--white);
  padding: 8px 12px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
  background-color: var(--blue-dark);

  @media (min-width: 1920px) {
    padding: 7px 9px;
  }
}

.news-item__date .icon {
  display: flex;
  width: 18px;
  height: 18px;
}

.news-item__date .icon svg {
  width: 100%;
  height: 100%;
}

.news-item__date .text {
  font-weight: 600;
  font-size: 13px;
  line-height: 1;
}

.news-item__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1280px) {
    bottom: -1px;
  }
}

.news-item__footer-stats {
  display: flex;
  column-gap: 16px;
  padding: 0 16px;
}

.news-item__footer-stats-digit {
  line-height: 1;
  color: var(--gray-dark);
  font-weight: 400;
  font-size: 13px;
}

.btn {
  padding: 14px 26px;
  font-size: 11px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;

  @media (min-width: 1280px) {
    padding: 15px 30px;
    font-size: 13px;
  }
}

.news-item__footer-item {
  display: flex;
  align-items: center;
  column-gap: 4px;
}

.news-item__footer-item .icon {
  display: flex;
}
</style>
