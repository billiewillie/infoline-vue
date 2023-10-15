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
            <swiper-slide v-for="slide in slides1" :key="slide">
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
          <span class="blue">Наша миссия</span>
          <p class="subtitle">поиск, внедрение и адаптация новых технологий в диагностику, медицину и науку.</p>
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
            <swiper-slide v-for="slide in slides2" :key="slide">
              <TheImage alt="slide" :image="slide"/>
            </swiper-slide>
          </swiper>
          <div class="slider-text">
            <h2 class="slider-title title">Команда профессионалов</h2>
            <p class="slider-description">Многие наши сотрудники – профессионалы в своей области, получившие образование
              в биологии
              и медицине, и имеют опыт работы в лабораториях.
              Мы регулярно проводим повышение квалификации, чтобы оставаться конкурентоспособными
              на непростом рынке.</p>
          </div>
        </div>
      </div>
      <div class="timeline">
        <h2 class="title">История компании</h2>
        <swiper
            :modules="[FreeMode]"
            :freeMode="true"
            slidesOffsetBefore="10"
            :slides-per-view="'auto'"
            :breakpoints="{
                '768': {
                  slidesPerView: 2
                },
                '1280': {
                  slidesPerView: 3
                },
                '1900': {
                  slidesPerView: 4,
                  slidesOffsetBefore: 120
                }
              }">
          <swiper-slide
              class="timeline-slide"
              v-for="slide in timelineSlides">
            <div class="dot">
              <span></span>
            </div>
            <h2 class="year title">{{ slide.year }}</h2>
            <p class="text">{{ slide.text }}</p>
          </swiper-slide>
        </swiper>
      </div>
      <div class="about-page-title">
        <img class="bg-about-title" :src="BgAboutTitle" alt="bg-about-title">
        <div class="container">
          <span class="blue">Наша продукция</span>
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
            <swiper-slide v-for="slide in slides3">
              <TheImage alt="slide" :image="slide"/>
            </swiper-slide>
          </swiper>
          <div class="slider-text">
            <h2 class="slider-title title">Имидж компании на высоте</h2>
            <p class="slider-description">Ежегодно мы участвуем в главных выставочных проектах в сфере здравоохранения,
              также в небольших региональных конференциях, проводим симпозиумы, мастер-классы и вебинары для
              пользователей нашего оборудования.</p>
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
<!--      <div class="about-slider about__success">-->
<!--        <h2 class="title">Истории успеха</h2>-->
<!--        <swiper-->
<!--            :modules="modules"-->
<!--            :slides-per-view="1"-->
<!--            loop-->
<!--            navigation>-->
<!--          <swiper-slide v-for="slide in slides4">-->
<!--            <TheImage alt="slide" :image="slide"/>-->
<!--            <div class="slider-text">-->
<!--              <h2 class="slider-title title">Первые полтора месяца были как в тумане...</h2>-->
<!--              <p class="slider-description">«Первые полтора месяца были, как в тумане - информации было просто море,-->
<!--                коллег еще больше, кому-то критически не понравилась доверенность за номером 69, что я помню-->
<!--                до сих пор. И самое яркое воспоминание - как постоянно звонил телефон, без остановки.-->
<!--                Я думала, что после аттестации будет проще, информации меньше и объемы работы перестанут так-->
<!--                восприниматься. Но нет - прошло почти шесть лет, а телефон все также без перерыва звонит. Работа по-->
<!--                подготовке доп. соглашений и доверенностей превратилась в…. теперь я могу заниматься вообще всем – и-->
<!--                представлением интересов компании в судах, ФАСах, госзаказом, таможенными спорами и чем угодно, что ты-->
<!--                еще придумаешь. В начале этого года я стала заместителем руководителя. И у меня такое ощущение, что я-->
<!--                так ничего и не узнала из того моря, которое может мне пригодиться».</p>-->
<!--              <p class="slider-name">Маргарита Данилова</p>-->
<!--              <p class="slider-position">Заместитель руководителя юридического отдела</p>-->
<!--            </div>-->
<!--          </swiper-slide>-->
<!--        </swiper>-->
<!--      </div>-->
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
            <swiper-slide v-for="slide in slides5">
              <TheImage alt="slide" :image="slide"/>
            </swiper-slide>
          </swiper>
          <div class="slider-text">
            <h2 class="slider-title title">Отдыхаем со смыслом</h2>
            <p class="slider-description">Вместе мы не только энергично работаем, но и круто отдыхаем несколько раз в
              год. Ежегодно проводим для сотрудников 3-4 крупных мероприятия и несколько небольших, камерных, если
              появляется повод для праздника. Традиционные события – осенний День здоровья, зимний Вечер подведения
              итогов года, Детский новогодний утренник и Вечеринка в честь юбиляров – тех, кто работает с нами 5, 10, 15
              и более лет.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation, FreeMode} from 'swiper';
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
import ImagePro1 from "@/assets/img/pro-1.webp"
import ImagePro2 from "@/assets/img/pro-2.webp"
import ImagePro3 from "@/assets/img/pro-3.webp"
import ImagePro4 from "@/assets/img/pro-4.webp"
import ImagePro5 from "@/assets/img/pro-5.webp"
import ImagePro6 from "@/assets/img/pro-6.webp"
import ImageAboutImage1 from "@/assets/img/image-1.webp"
import ImageAboutImage2 from "@/assets/img/image-2.webp"
import ImageAboutImage3 from "@/assets/img/image-3.webp"
import ImageAboutImage4 from "@/assets/img/image-4.webp"
import ImageAboutImage5 from "@/assets/img/image-5.webp"
import ImageAboutImage6 from "@/assets/img/image-6.webp"
import ImageRelax1 from "@/assets/img/relax-1.webp"
import ImageRelax2 from "@/assets/img/relax-2.webp"
import ImageRelax3 from "@/assets/img/relax-3.webp"
import ImageRelax5 from "@/assets/img/relax-5.webp"
import ImageRelax6 from "@/assets/img/relax-6.webp"
import ImageRelax7 from "@/assets/img/relax-7.webp"
import AboutDanilova from "@/assets/img/about-danilova.webp";

const slides1 = [
  ImageAboutPhoto11,
  ImageAboutPhoto12,
  ImageAboutPhoto13,
  ImageAboutPhoto14,
  ImageAboutPhoto15,
  ImageAboutPhoto16,
  ImageAboutPhoto17
];

const slides2 = [
  ImagePro1,
  ImagePro2,
  ImagePro3,
  ImagePro4,
  ImagePro5,
  ImagePro6
];

const slides3 = [
  ImageAboutImage1,
  ImageAboutImage2,
  ImageAboutImage3,
  ImageAboutImage4,
  ImageAboutImage5,
  ImageAboutImage6
];

const slides4 = [
  AboutDanilova,
  AboutDanilova
];

const slides5 = [
  ImageRelax1,
  ImageRelax2,
  ImageRelax3,
  ImageRelax5,
  ImageRelax6,
  ImageRelax7
];

const timelineSlides = [
  {
    year: 1992,
    text: 'электронные дозаторы "Biohit"'
  },
  {
    year: 1999,
    text: 'Открытие производства лабораторной мебели “БиоМебель”'
  },
  {
    year: 2000,
    text: 'Проточные цитофлуориметры Becton Dickinson, реагенты для иммуногистохимии Novocastra'
  },
  {
    year: 2001,
    text: 'вакуумные системы для взятия крови Becton Dickinson'
  },
  {
    year: 2006,
    text: 'общелабораторное оборудование для медицинских и фармацевтических предприятий'
  },
  {
    year: 2007,
    text: 'медицинская и госпитальная мебель:медицинские функциональные кровати'
  },
  {
    year: 2008,
    text: 'оборудование для стандартизации преаналитического этапа гистологического исследования Milestone'
  },
  {
    year: 2010,
    text: 'комплексные решения для гистологии Leica'
  },
  {
    year: 2013,
    text: 'оборудование для автоматизации переаналитического этапа лабораторных исследований'
  },
  {
    year: 2014,
    text: 'инновационные решения для оснащения моргов LEEC'
  },
  {
    year: 2015,
    text: 'автоматические системы для исследований в молекулярной онкологии Biocartis'
  },
  {
    year: 2018,
    text: 'микроскопия высокого разрешения Leica Microsystems'
  },
  {
    year: 2019,
    text: 'продукция для материнства и детства B2C'
  },
  {
    year: 2020,
    text: 'локализация производства медицинских функциональных кроватей Pardo на базе компании “Биомебель”'
  },
];

const icons = {
  IconLogoBioline,
  IconLogoBioBaby,
  IconLogoBioMebel,
  IconLogoBioSystemy,
};

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
];

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
  max-width: 1600px;
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

  @media (min-width: 1280px) {
    padding: 0 10px;
  }
}

.about-slider.about__success {
  width: 100%;
  max-width: 1600px;
  margin: auto;
}

.about-slider.about__success .image {
  margin-bottom: 30px;

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
}

.about-slider.about__success .swiper-slide {
  padding: 0 10px;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    column-gap: 75px;
  }

  @media (min-width: 1920px) {
    column-gap: 175px;
    padding: 0 100px;
  }
}

.about-slider.about__success .swiper-slide .slider-text::before,
.about-slider.about__success .swiper-slide .slider-text::after {
  content: '“';
  position: absolute;
  font-size: 144px;
  color: var(--blue-light);
  line-height: 1;
}

.about-slider.about__success .swiper-slide .slider-text::before {
  top: -15px;
  left: 0;
}

.about-slider.about__success .swiper-slide .slider-text::after {
  transform-origin: 50%;
  transform: rotate(180deg);
  bottom: 180px;
  right: 0;
}

.about-slider.about__success > .title {
  text-align: center;
  margin-bottom: 25px;

  @media (min-width: 1280px) {
    margin-bottom: 80px;
    font-size: 30px;
  }
}

.about-slider.about__success .swiper-slide .slider-text {
  position: relative;

  @media (min-width: 1280px) {
    padding: 60px 20px 0 0;
  }

  @media (min-width: 1920px) {
    padding: 60px 60px 0 0;
  }
}

@media (min-width: 1280px) {
  .about-slider.about__success .swiper-slide .slider-text::before,
  .about-slider.about__success .swiper-slide .slider-text::after {
    display: block;
  }
}

@media (min-width: 1920px) {
  .about-slider.about__success .swiper-slide .slider-text::before {
    left: -50px;
  }

  .about-slider.about__success .swiper-slide .slider-text::after {
    right:  10px;
    bottom: 240px;
  }
}

.about-slider.about__success .swiper-slide .slider-name {
  font-weight: 700;
  font-size: 17px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid var(--gray-medium);
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
    column-gap: 100px;
  }

  @media (min-width: 1920px) {
    column-gap: 175px;
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

.timeline {
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 30px;
  width: 100%;
  margin: auto;

  @media (min-width: 1280px) {
    row-gap: 70px;
  }
}

.timeline .swiper {
  width: 100%;
}

.timeline .title {
  font-size: 30px;
}

.timeline-slide {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  text-align: left;
  padding: 25px 10px 0;
  z-index: 10;
  background-image: url('@/assets/img/timeline.webp');
  background-repeat: repeat-x;
  background-position: 0 2px;
  cursor: grab;

  @media (min-width: 1280px) {
    padding: 25px 70px 0 10px;
  }
}

.timeline-slide .dot {
  position: absolute;
  background-color: var(--white);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  top: 0;
  left: 0;
}

.timeline-slide .dot span {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: var(--white);
  border: 5px solid var(--blue-light);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.timeline-slide:last-child {
  background-image: none;
}

.timeline-slide .year {
  padding-bottom: 20px;
  border-bottom: 2px solid var(--blue-light);
  color: var(--blue-dark);
}
</style>