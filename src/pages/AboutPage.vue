<template>
  <div class="basepage about-page">
    <div class="about-page-header">
      <div class="about-cover shadow rounded overflow-hidden">
        <TheImage
            alt="cover"
            :image="AboutCoverImage"/>
      </div>
      <h1 class="title">О компании</h1>
    </div>
    <ul class="about-logos">
      <li
          class="shadow rounded about-logo"
          v-for="logo in logos">
        <div class="logo">
          <component :is="logo.logo"/>
        </div>
        <p class="text">{{ logo.text }}</p>
      </li>
    </ul>
    <div class="content shadow rounded">
      <div class="about-slider">
        <div class="container">
          <swiper
              :modules="modules"
              :slides-per-view="1"
              loop
              navigation>
            <swiper-slide v-for="slide in slides1">
              <TheImage alt="slide" :image="slide"/>
            </swiper-slide>
          </swiper>
          <div class="slider-text">
            <h2 class="slider-title title">Мы проделали долгий путь</h2>
            <p class="slider-description">Компания началась с нескольких человек
              и небольшой комнаты в Больнице №33. За 30 лет мы выросли, сейчас нас больше
              300 человек, мы занимаем целое здание, площадью
              2500 м2, а наши офисы находятся не только
              в Санкт-Петербурге, и даже не только в России.</p>
          </div>
        </div>
      </div>
      <div class="about-page-title">
        <img class="bg-about-title" :src="BgAboutTitle" alt="bg-about-title">
        <div class="container">
          <span class="blue">Наша миссия -</span>
          <p class="subtitle">поиск, внедрение и адаптация новых технологий в диагностику и медицину.</p>
          <p class="description">Мы стремимся создавать инновационные решения, которые помогут улучшить качество жизни
            пациентов и повысить эффективность работы медицинских учреждений.</p>
        </div>
      </div>
      <div class="about-slider">
        <div class="container">
          <swiper
              :modules="modules"
              :slides-per-view="1"
              loop
              navigation>
            <swiper-slide v-for="slide in slides1">
              <TheImage alt="slide" :image="slide"/>
            </swiper-slide>
          </swiper>
          <div class="slider-text">
            <h2 class="slider-title title">Мы проделали долгий путь</h2>
            <p class="slider-description">Компания началась с нескольких человек
              и небольшой комнаты в Больнице №33. За 30 лет мы выросли, сейчас нас больше
              300 человек, мы занимаем целое здание, площадью
              2500 м2, а наши офисы находятся не только
              в Санкт-Петербурге, и даже не только в России.</p>
          </div>
        </div>
      </div>
      <div class="timeline">
        <div class="container">timeline</div>
      </div>
      <div class="about-page-title">
        <img class="bg-about-title" :src="BgAboutTitle" alt="bg-about-title">
        <div class="container">
          <span class="blue">Наша продукция -</span>
          <p class="subtitle">самые значимые технологии в лабораторном и медицинском мире.</p>
          <p class="description">Самые крупные мировые производители доверяют нам своё имя, а мы всегда оправдываем их
            доверие.</p>
        </div>
      </div>
      <div class="about-slider">
        <div class="container">
          <swiper
              :modules="modules"
              :slides-per-view="1"
              loop
              navigation>
            <swiper-slide v-for="slide in slides1">
              <TheImage alt="slide" :image="slide"/>
            </swiper-slide>
          </swiper>
          <div class="slider-text">
            <h2 class="slider-title title">Мы проделали долгий путь</h2>
            <p class="slider-description">Компания началась с нескольких человек
              и небольшой комнаты в Больнице №33. За 30 лет мы выросли, сейчас нас больше
              300 человек, мы занимаем целое здание, площадью
              2500 м2, а наши офисы находятся не только
              в Санкт-Петербурге, и даже не только в России.</p>
          </div>
        </div>
      </div>
      <div class="about-page-title">
        <img class="bg-about-title" :src="BgAboutTitle" alt="bg-about-title">
        <div class="container">
          <span class="blue">Наша команда</span>
          <p class="subtitle">не стоит на месте и уверенными темпами мы идём вперед.</p>
          <p class="description">Особенно ценно, что многие сотрудники остаются с нами надолго, растут и развиваются
            вместе с компанией на протяжении десятилетий.</p>
        </div>
      </div>
      <div class="about-slider">
        <div class="container">
          <swiper
              :modules="modules"
              :slides-per-view="1"
              loop
              navigation>
            <swiper-slide v-for="slide in slides1">
              <TheImage alt="slide" :image="slide"/>
            </swiper-slide>
          </swiper>
          <div class="slider-text">
            <h2 class="slider-title title">Мы проделали долгий путь</h2>
            <p class="slider-description">Компания началась с нескольких человек
              и небольшой комнаты в Больнице №33. За 30 лет мы выросли, сейчас нас больше
              300 человек, мы занимаем целое здание, площадью
              2500 м2, а наши офисы находятся не только
              в Санкт-Петербурге, и даже не только в России.</p>
          </div>
        </div>
      </div>
      <div class="about-page-title">
        <img class="bg-about-title" :src="BgAboutTitle" alt="bg-about-title">
        <div class="container">
          <span class="blue">Мы ценим,</span>
          <p class="subtitle">что за каждым профессионалом нашей команды стоит интересная личность!</p>
          <p class="description">Мы с удовольствием предоставляем каждому возможность проявить себя, организовывая
            конкурсы, тимбилдинг и другие корпоративные мероприятия.</p>
        </div>
      </div>
      <div class="about-slider">
        <div class="container">
          <swiper
              :modules="modules"
              :slides-per-view="1"
              loop
              navigation>
            <swiper-slide v-for="slide in slides1">
              <TheImage alt="slide" :image="slide"/>
            </swiper-slide>
          </swiper>
          <div class="slider-text">
            <h2 class="slider-title title">Мы проделали долгий путь</h2>
            <p class="slider-description">Компания началась с нескольких человек
              и небольшой комнаты в Больнице №33. За 30 лет мы выросли, сейчас нас больше
              300 человек, мы занимаем целое здание, площадью
              2500 м2, а наши офисы находятся не только
              в Санкт-Петербурге, и даже не только в России.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import TheImage from "@/components/TheImage.vue";
import BgAboutTitle from "@/assets/img/about-title-bg.svg";
import AboutCoverImage from "@/assets/img/about-cover.webp";
import IconLogoBioline from "@/components/icons/IconLogoBioline.vue";
import IconLogoBioBaby from "@/components/icons/IconLogoBioBaby.vue";
import IconLogoBioMebel from "@/components/icons/IconLogoBioMebel.vue";
import IconLogoBioSystemy from "@/components/icons/IconLogoBioSystemy.vue";
import ImageAboutPhoto11 from "@/assets/img/about-photo-11.webp";
import ImageAboutPhoto12 from "@/assets/img/about-photo-12.webp"
import ImageAboutPhoto13 from "@/assets/img/about-photo-13.webp"
import ImageAboutPhoto14 from "@/assets/img/about-photo-14.webp"
import ImageAboutPhoto15 from "@/assets/img/about-photo-15.webp"
import ImageAboutPhoto16 from "@/assets/img/about-photo-16.webp"
import ImageAboutPhoto17 from "@/assets/img/about-photo-17.webp"

const slides1 = [
  ImageAboutPhoto11,
  ImageAboutPhoto12,
  ImageAboutPhoto13,
  ImageAboutPhoto14,
  ImageAboutPhoto15,
  ImageAboutPhoto16,
  ImageAboutPhoto17
];

const icons = {
  IconLogoBioline,
  IconLogoBioBaby,
  IconLogoBioMebel,
  IconLogoBioSystemy,
}

const logos = [
  {
    logo: icons.IconLogoBioline,
    text: "Диагностическое оборудование, реагенты и расходные материалы для клинических и научных исследований и фармразработок."
  },
  {
    logo: icons.IconLogoBioSystemy,
    text: "Общелабораторное и медицинское оборудование, расходные материалы."
  },
  {
    logo: icons.IconLogoBioMebel,
    text: "Производство лабораторной и медицинской мебели."
  },
  {
    logo: icons.IconLogoBioBaby,
    text: "Направление B2C, продукция для материнства и детства."
  }
]

const modules = [Navigation];
</script>

<style scoped>
.about-page-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media (min-width: 1280px) {
    aspect-ratio: 3/1;
    margin-bottom: 20px;
    flex-direction: column-reverse;
  }
}

.about-cover {
  margin-bottom: 16px;

  @media (min-width: 1280px) {
    position: absolute;
    margin-bottom: 0;
    width: 100%;
    height: 100%;
  }
}

h1.title {
  display: flex;
  justify-content: center;
  color: var(--white);
  background-color: var(--blue-dark);
  padding: 35px 0;
  margin-bottom: 0;
  font-size: 27px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;

  @media (min-width: 1280px) {
    width: 33%;
    font-size: 30px;
    -webkit-border-radius: 0 3px 0 0;
    -moz-border-radius: 0 3px 0 0;
    border-radius: 0 3px 0 0;
  }
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  background-color: var(--white);

  @media (min-width: 1280px) {
    padding: 140px 0;
    overflow: hidden;
    row-gap: 160px;
  }
}

.content .container {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
  padding: 0 10px;
  row-gap: 30px;
  width: 100%;

  @media (min-width: 1280px) {
    padding: 0;
  }
}

.content .container .swiper {
  width: 100%;
}

.about-slider .container {
  padding: 0;
}

.about-logos {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 16px;

  @media (min-width: 1280px) {
    flex-direction: row;
    column-gap: 20px;
    margin-bottom: 20px;
  }
}

.about-logo {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  background-color: var(--white);

  @media (min-width: 1280px) {
    flex: 1;
    padding: 6px 20px;
  }
}

.about-logo .logo {
  position: relative;
}

.about-logo .logo svg {
  max-width: 191px;
  max-height: 57px;
}

.about-logo .logo::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 130px;
  height: 1px;
  background-color: var(--gray-medium);
}

.about-logo > * {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.about-page-title {
  display: flex;
  position: relative;
  flex-direction: column;
  row-gap: 16px;
}

.bg-about-title {
  position: absolute;
  display: none;
  top: -100px;
  left: -2%;
  width: 104%;
  height: 200%;
  object-fit: contain;

  @media (min-width: 1280px) {
    display: block;
  }
}

.about-page-title span.blue {
  color: var(--blue-light);
  font-size: 40px;
  font-weight: 700;

  @media (min-width: 1280px) {
    font-size: 100px;
  }
}

.about-page-title .subtitle {
  font-size: 36px;
  color: var(--black);

  @media (min-width: 1280px) {
    font-size: 50px;
    padding-left: 300px;
  }
}

.about-page-title .description {
  font-size: 20px;
  @media (min-width: 1280px) {
    padding-left: 600px;
  }
}

.about-slider .container {
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 170px;
  }
}

.slider-text {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 56%;
  }
}

.slider-title {
  padding-bottom: 20px;
  color: var(--blue-dark);
  font-size: 30px;
  border-bottom: 2px solid var(--blue-light);
}

.slider-description {
  font-size: 16px;
}
</style>