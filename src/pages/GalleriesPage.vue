<template>
  <div class="basepage galleries-page">
    <h1 class="title">Фотогалерея</h1>

    <TheTabs
        :tabs="years"
        :activeTab="activeYear"
        @setActiveTab="setActiveYear"
    />

    <transition-group name="grid" tag="div" class="galleries-grid">
      <router-link
          :to="`/galleries/${gallery.url}`"
          class="gallery-item rounded shadow"
          v-for="gallery in activeGalleries"
          :key="gallery.id"
      >
        <div class="gallery-date">
          <span class="icon">
            <IconCalendar/>
          </span>
          <span class="date">{{ gallery.published_date }}</span>
        </div>
        <div class="gallery-cover rounded overflow-hidden">
          <picture>
            <source :srcset="imageWeb" type="image/webp"/>
            <img :src="image" alt="gallery" loading="lazy"/>
          </picture>
        </div>
        <footer class="gallery-footer">
          <h2 class="title">{{ gallery.title }}</h2>
          <span class="location">{{ gallery.location }}</span>
          <div class="gallery-stats">
            <div class="gallery-stats__item">
              <div class="icon">
                <IconView/>
              </div>
              <span class="count">{{ gallery.show_count }}</span>
            </div>
            <div class="gallery-stats__item">
              <div class="icon">
                <IconView/>
              </div>
              <span class="count">{{ gallery.count_img }}</span>
            </div>
          </div>
        </footer>
      </router-link>
    </transition-group>

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconView from "@/components/icons/IconView.vue";
import imageWeb from '@/assets/img/index-news-img.webp';
import image from '@/assets/img/index-news-img.jpg';
import TheTabs from "@/components/TheTabs.vue";

const galleries = ref([
  {
    "id": 1,
    "title": "Новогодний квартирник",
    "location": "Москва",
    "url": "gallery-1",
    "show_count": 123,
    "published_date": "2023-05-12",
    "published_year": "2023",
    "gallery_cover": "index-news-img",
    "count_img": 5
  },
  {
    "id": 2,
    "title": "Детский новогодний спектакль в театре Карлсон хаус",
    "location": "Москва",
    "url": "gallery-2",
    "show_count": 7,
    "published_date": "2023-05-20",
    "published_year": "2022",
    "gallery_cover": "index-news-img",
    "count_img": 3
  },
  {
    "id": 3,
    "title": "Новогодний квартирник",
    "location": "Спб",
    "url": "gallery-3",
    "show_count": 9,
    "published_date": "2023-05-20",
    "published_year": "2021",
    "gallery_cover": "index-news-img",
    "count_img": 3
  },
  {
    "id": 4,
    "title": "Test 4",
    "location": "Спб",
    "url": "gallery-4",
    "show_count": 1,
    "published_date": "2023-05-20",
    "published_year": "2021",
    "gallery_cover": "index-news-img",
    "count_img": 3
  },
  {
    "id": 5,
    "title": "Test 5",
    "location": "Москва",
    "url": "gallery-5",
    "show_count": 1,
    "published_date": "2023-05-20",
    "published_year": "2020",
    "gallery_cover": "index-news-img",
    "count_img": 2
  },
  {
    "id": 6,
    "title": "Новогодний квартирник",
    "location": "Спб",
    "url": "gallery-6",
    "show_count": 23,
    "published_date": "2023-05-20",
    "published_year": "2020",
    "gallery_cover": "index-news-img",
    "count_img": 2
  },
  {
    "id": 7,
    "title": "Детский новогодний спектакль в театре Карлсон хаус",
    "location": "Москва",
    "url": "gallery-7",
    "show_count": 3,
    "published_date": "2019-05-20",
    "published_year": "2019",
    "gallery_cover": "index-news-img",
    "count_img": 2
  },
  {
    "id": 8,
    "title": "Test 6",
    "location": "Спб",
    "url": "gallery-8",
    "show_count": 5,
    "published_date": "2018-05-20",
    "published_year": "2018",
    "gallery_cover": "index-news-img",
    "count_img": 3
  },
  {
    "id": 9,
    "title": "Test 9",
    "location": "Спб",
    "url": "gallery-9",
    "show_count": 6,
    "published_date": "2018-05-20",
    "published_year": "2018",
    "gallery_cover": "index-news-img",
    "count_img": 3
  }
]);

const years = ref(['Все']);
const activeYear = ref(years.value[0]);
const activeGalleries = ref(galleries.value);

onMounted(() => {
  galleries.value.forEach(item => {
    years.value.push(item.published_year);
  });
  years.value = [...new Set(years.value)];
  years.value.sort((a, b) => b - a);
});

const setActiveYear = (year) => {
  activeYear.value = year;
  activeGalleries.value = galleries.value.filter(item => {
    if (activeYear.value === 'Все') {
      return true;
    } else {
      return item.published_year === activeYear.value;
    }
  });
};
</script>

<style scoped>
.galleries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.gallery-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--white);
  min-height: 237px;
  aspect-ratio: 3 / 2;

  @media (min-width: 1920px) {
    min-height: 375px;
  }
}

.gallery-item .title {
  font-size: 18px;
  font-weight: 700;
}

.gallery-item .location {
  font-size: 14px;
  font-weight: 500;
}

.gallery-item .icon {
  display: flex;
}

.gallery-date .icon svg {
  width: 18px;
  height: 18px;
}

.gallery-date {
  position: relative;
  z-index: 1;
  padding: 7px;
  background-color: var(--blue-dark);
  display: flex;
  column-gap: 7px;
  align-items: center;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
}

.gallery-date .date {
  font-size: 13px;
  font-weight: 600;
}

.gallery-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gallery-footer {
  display: flex;
  position: relative;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  padding: 17px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0) 100%);
  -webkit-border-radius: 0 0 3px 3px;
  -moz-border-radius: 0 0 3px 3px;
  border-radius: 0 0 3px 3px;
}

.gallery-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 17px;
  width: 52px;
  height: 1px;
  background-color: var(--blue-light);
}

.gallery-stats {
  display: flex;
  column-gap: 24px;
}

.gallery-stats__item {
  display: flex;
  column-gap: 7px;
  align-items: center;
  font-size: 13px;
}

.gallery-stats__item svg {
  width: 14px;
  height: 14px;
}

.grid-leave-active,
.grid-enter-active,
.grid-move {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.grid-enter {
  opacity: 0;
  transform: translateY(50px) scale(0.5);
}

.grid-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.grid-enter-from,
.grid-leave-to {
  opacity: 0;
}

.grid-leave-active {
  position: absolute;
  opacity: 0;
  transform: scaleY(0);
  animation: bounceIn 0.3s reverse;
}

.grid-enter-active {
  animation: bounceIn 0.3s;
}

@keyframes bounceIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>