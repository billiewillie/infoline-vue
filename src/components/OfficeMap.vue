<template>
  <div class="user-location shadow rounded">
    <header class="user-location__header">
      <div class="left">
        <span>этаж <b>{{ location.floor ? location.floor : 1 }}</b></span>,
        <span>кабинет <b>{{ location.office ? location.office : 1 }}</b></span>
      </div>
      <div
          class="icon"
          v-if="location?.city === 'Санкт-Петербург'"
          @click="isMapShow = true;scrollView(floors[location?.floor][location?.office].xLg)">
        <IconExpand/>
      </div>
    </header>
  </div>
  <div
      v-if="location?.city === 'Санкт-Петербург'"
      class="map-overlay"
      :class="{expand: isMapShow}">
    <div
        class="map-container"
        ref="map">
      <div
          class="map"
          :style="{
            left: !isMapShow ? `${floors[location?.floor][location?.office].xLgDecreased}px` : '0',
            top: !isMapShow ? `${floors[location?.floor][location?.office].yLgDecreased}px` : '0'
          }">
        <img
            :src="setFloorImage()"
            alt="floor"/>
        <div
            class="spot"
            :style="{top: `${spot.yLg}px`,left: `${spot.xLg}px`}"
            v-for="spot in floors[location?.floor]">
          <i
              class="icon"
              :style="{opacity: spot.number === location?.office && spot.floor === location?.floor ? 1 : 0}">
            <IconPin/>
          </i>
          <span
              :style="{backgroundColor: spot.number === location?.office ? 'var(--blue-light)' : 'var(--gray-medium)'}"
              class="number">{{ spot.number }}</span>
          <span class="name">{{ spot.name }}</span>
        </div>
      </div>
    </div>
    <div
        class="map-close"
        :class="{hidden: !isMapShow}"
        @click="closeMap">
      <span></span>
      <span></span>
    </div>
    <div class="text"
         :class="{hidden: !isMapShow}"
         :style="{opacity: isMapShow ? 1 : 0}">
      <h2 class="title">{{ location?.floor }} этаж</h2>
      <div class="row">
        <span>кабинет: </span><span>{{ location?.office }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Floor1 from "@/assets/img/floor-1.svg";
import Floor2 from "@/assets/img/floor-2.svg";
import Floor3 from "@/assets/img/floor-3.svg";
import IconPin from "@/components/icons/IconPin.vue";
import IconExpand from "@/components/icons/IconExpand.vue";

const map = ref(null);
const isMapShow = ref(false);

const floors = {
  1: {
    113: {
      number: 113,
      floor: 1,
      name: "Импорт Автохозяйство",
      xLg: 150,
      yLg: 20,
      xLgDecreased: 0,
      yLgDecreased: 320,
    },
    115: {
      number: 115,
      floor: 1,
      name: "Отдел персонала",
      xLg: 410,
      yLg: 10,
      xLgDecreased: -250,
      yLgDecreased: 360,
    },
    116: {
      number: 116,
      floor: 1,
      name: "Отдел закупок",
      xLg: 530,
      yLg: 170,
      xLgDecreased: -400,
      yLgDecreased: 170,
    },
    122: {
      number: 122,
      floor: 1,
      name: "Отдел рекламы",
      xLg: 980,
      yLg: 160,
      xLgDecreased: -900,
      yLgDecreased: 180,
    },
    126: {
      number: 126,
      floor: 1,
      name: "Заруцкий Д.М.",
      xLg: 803,
      yLg: 440,
      xLgDecreased: -630,
      yLgDecreased: -350,
    },
    127: {
      number: 127,
      floor: 1,
      name: "Техсервис",
      xLg: 660,
      yLg: 400,
      xLgDecreased: -410,
      yLgDecreased: -330,
    },
    129: {
      number: 129,
      floor: 1,
      name: "Коденюк В.А.",
      xLg: 520,
      yLg: 320,
      xLgDecreased: -340,
      yLgDecreased: -140,
    },
    128: {
      number: 128,
      floor: 1,
      name: "Логистика",
      xLg: 490,
      yLg: 440,
      xLgDecreased: -315,
      yLgDecreased: -320,
    },
    130: {
      number: 130,
      floor: 1,
      name: "Шубаев П.А.",
      xLg: 380,
      yLg: 440,
      xLgDecreased: -200,
      yLgDecreased: -340,
    },
    131: {
      number: 131,
      floor: 1,
      name: "Учебная комната",
      xLg: 180,
      yLg: 440,
      xLgDecreased: 0,
      yLgDecreased: -400,
    }
  },
  2: {
    201: {
      number: 201,
      floor: 2,
      name: "Главные бухгалтеры",
      xLg: 10,
      yLg: 290,
      xLgDecreased: 0,
      yLgDecreased: -50,
    },
    204: {
      number: 204,
      floor: 2,
      name: "Бухгалтерия БС",
      xLg: 50,
      yLg: 0,
      xLgDecreased: 0,
      yLgDecreased: 350,
    },
    205: {
      number: 205,
      floor: 2,
      name: "Бухгалтерия БЛ",
      xLg: 190,
      yLg: 0,
      xLgDecreased: 0,
      yLgDecreased: 350,
    },
    207: {
      number: 207,
      floor: 2,
      name: "Ген. дир. БС",
      xLg: 440,
      yLg: 0,
      xLgDecreased: -300,
      yLgDecreased: 350,
    },
    208: {
      number: 208,
      floor: 2,
      name: "Ген. дир. Семенов А.В.",
      xLg: 520,
      yLg: 160,
      xLgDecreased: -350,
      yLgDecreased: 100,
    },
    209: {
      number: 209,
      floor: 2,
      name: "Помощник ген. директора",
      xLg: 593,
      yLg: 160,
      xLgDecreased: -420,
      yLgDecreased: 130,
    },
    210: {
      number: 210,
      floor: 2,
      name: "IT отдел",
      xLg: 680,
      yLg: 160,
      xLgDecreased: -460,
      yLgDecreased: 130,
    },
    211: {
      number: 211,
      floor: 2,
      name: "Гвоздарев А.",
      xLg: 744,
      yLg: 160,
      xLgDecreased: -540,
      yLgDecreased: 135,
    },
    212: {
      number: 212,
      floor: 2,
      name: "IT отдел",
      xLg: 824,
      yLg: 160,
      xLgDecreased: -640,
      yLgDecreased: 125,
    },
    213: {
      number: 213,
      floor: 2,
      name: "Гусева Н.К.",
      xLg: 896,
      yLg: 160,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    214: {
      number: 214,
      floor: 2,
      name: "Юридический отдел",
      xLg: 980,
      yLg: 160,
      xLgDecreased: -750,
      yLgDecreased: 130,
    },
    224: {
      number: 224,
      floor: 2,
      name: "Отдел регистрации",
      xLg: 770,
      yLg: 400,
      xLgDecreased: -600,
      yLgDecreased: -325,
    },
    225: {
      number: 225,
      floor: 2,
      name: "Отдел продукции для материнства и детства",
      xLg: 630,
      yLg: 400,
      xLgDecreased: -600,
      yLgDecreased: -325,
    },
    226: {
      number: 226,
      floor: 2,
      name: "Финансовый отдел",
      xLg: 525,
      yLg: 400,
      xLgDecreased: -380,
      yLgDecreased: -325,
    },
    227: {
      number: 227,
      floor: 2,
      name: "Абрамов М.Н.",
      xLg: 462,
      yLg: 400,
      xLgDecreased: -310,
      yLgDecreased: -325,
    },
    228: {
      number: 228,
      floor: 2,
      name: "Экономический отдел",
      xLg: 380,
      yLg: 400,
      xLgDecreased: -230,
      yLgDecreased: -325,
    },
    229: {
      number: 229,
      floor: 2,
      name: "Каюкова Л.Л.",
      xLg: 320,
      yLg: 400,
      xLgDecreased: -230,
      yLgDecreased: -325,
    },
    230: {
      number: 230,
      floor: 2,
      name: "ОКП",
      xLg: 260,
      yLg: 400,
      xLgDecreased: -120,
      yLgDecreased: -325,
    },
    231: {
      number: 231,
      floor: 2,
      name: "Тендерный отдел",
      xLg: 128,
      yLg: 400,
      xLgDecreased: -50,
      yLgDecreased: -325,
    },
  },
  3: {
    302: {
      number: 302,
      floor: 3,
      name: "Гистология Цитология",
      xLg: 46,
      yLg: 50,
      xLgDecreased: 0,
      yLgDecreased: 350,
    },
    303: {
      number: 303,
      floor: 3,
      name: "ПРК БЛ",
      xLg: 204,
      yLg: 50,
      xLgDecreased: 0,
      yLgDecreased: 350,
    },
    306: {
      number: 306,
      floor: 3,
      name: "Ген. дир. БС",
      xLg: 446,
      yLg: 0,
      xLgDecreased: -300,
      yLgDecreased: 350,
    },
    307: {
      number: 307,
      floor: 3,
      name: "Отдел ДИЗ",
      xLg: 520,
      yLg: 160,
      xLgDecreased: -350,
      yLgDecreased: 100,
    },
    308: {
      number: 308,
      floor: 3,
      name: "Мед. мебель",
      xLg: 604,
      yLg: 160,
      xLgDecreased: -420,
      yLgDecreased: 130,
    },
    309: {
      number: 309,
      floor: 3,
      name: "Дулаева Оксана",
      xLg: 666,
      yLg: 160,
      xLgDecreased: -460,
      yLgDecreased: 130,
    },
    310: {
      number: 310,
      floor: 3,
      name: "Дмитриева М.",
      xLg: 744,
      yLg: 160,
      xLgDecreased: -540,
      yLgDecreased: 135,
    },
    311: {
      number: 311,
      floor: 3,
      name: "Преаналитика Продажи ОЛО и РМ",
      xLg: 840,
      yLg: 160,
      xLgDecreased: -640,
      yLgDecreased: 125,
    },
    315: {
      number: 315,
      floor: 3,
      name: "Лаб. мебель",
      xLg: 1020,
      yLg: 160,
      xLgDecreased: -750,
      yLgDecreased: 130,
    },
    329: {
      number: 329,
      floor: 3,
      name: "ОЛО",
      xLg: 790,
      yLg: 400,
      xLgDecreased: -600,
      yLgDecreased: -325,
    },
    330: {
      number: 330,
      floor: 2,
      name: "ПРК БС",
      xLg: 680,
      yLg: 400,
      xLgDecreased: -600,
      yLgDecreased: -325,
    },
    331: {
      number: 331,
      floor: 3,
      name: "ИГХ",
      xLg: 610,
      yLg: 400,
      xLgDecreased: -380,
      yLgDecreased: -325,
    },
    332: {
      number: 332,
      floor: 3,
      name: "Отдел оптической микроскопии",
      xLg: 490,
      yLg: 400,
      xLgDecreased: -310,
      yLgDecreased: -325,
    },
    333: {
      number: 333,
      floor: 3,
      name: "Солнцева Ольга",
      xLg: 383,
      yLg: 400,
      xLgDecreased: -230,
      yLgDecreased: -325,
    },
    334: {
      number: 334,
      floor: 3,
      name: "Павел Кислов",
      xLg: 316,
      yLg: 400,
      xLgDecreased: -120,
      yLgDecreased: -325,
    },
    335: {
      number: 335,
      floor: 2,
      name: "Отдел КИМ / Молекулярная диагностика",
      xLg: 170,
      yLg: 400,
      xLgDecreased: -50,
      yLgDecreased: -325,
    },
  }
}

const closeMap = () => {
  isMapShow.value = false;
  setTimeout(() => {
    map.value.scrollLeft = 0;
  }, 400)
}

const props = defineProps({
  location: {
    type: Object,
    default: {},
  }
});

const scrollView = (value) => {
  setTimeout(() => {
    if (value > 200 && value < 600) {
      map.value.scrollLeft += value / 2;
    } else if (value > 600) {
      map.value.scrollLeft += (value / 2 + 200);
    }
  }, 400)
};

const setFloorImage = () => {
  switch (props.location?.floor) {
    case 1:
      return Floor1;
    case 2:
      return Floor2;
    case 3:
      return Floor3;
  }
};
</script>

<style>
.user-location__header {
  z-index: 3;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: var(--blue-dark);
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
  padding: 0 0 0 10px;
  height: 32px;
  font-size: 16px;
}

.user-location__header .icon {
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-light);
  cursor: pointer;
}

.user-location__header .icon svg {
  width: 24px;
  height: 24px;
}

.map-close {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 20px;
  top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-close span {
  position: absolute;
  width: 30px;
  height: 1px;
  background-color: var(--black);
  transform: rotate(45deg);
  transform-origin: center center;
}

.map-close span:nth-child(2) {
  transform: rotate(-45deg);
}

.map-close.hidden {
  display: none;
}

.map-overlay {
  position: absolute;
  display: flex;
  bottom: 10px;
  right: 10px;
  z-index: 2;
  height: 260px;
  overflow: hidden;
  justify-content: center;
  width: calc(100% - 20px);
  background-color: var(--white);
  transition: all 0.3s ease-in-out;

  @media (min-width: 1280px) {
    width: calc(33% - 46px);
    height: 33%;
    bottom: 16px;
    right: 16px;
  }

  @media (min-width: 1920px) {
    bottom: 20px;
    right: 20px;
    height: 31%;
  }
}

.map-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
}

.map-overlay .text {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media (min-width: 1280px) {
    top: 80px;
    transform: none;
  }

  @media (min-width: 1920px) {
    top: 180px;
  }
}

.map-overlay .text span:first-child {
  color: var(--gray-dark);
}

.map-overlay .text.hidden {
  opacity: 0;
}

.map-overlay.expand {
  position: fixed;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  right: 0;
  bottom: 0;

  @media (min-width: 1280px) {
    width: calc(100vw - 82px);
    height: calc(100vh - 82px);
    right: 16px;
    bottom: 16px;
  }

  @media (min-width: 1920px) {
    width: calc(100vw - 110px);
    height: calc(100vh - 110px);
    right: 20px;
    bottom: 20px;
  }
}

.map-overlay .map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 1100px;
  height: 600px;
  transition: all 0.3s ease-in-out;

  @media (min-width: 1280px) {
    width: 1100px;
    height: 600px;
  }
}

.map-overlay .map img {
  object-fit: contain;
}

.spot {
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 8px;
}

.spot .number {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-medium);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-weight: 700;
  width: 42px;
  height: 25px;
  line-height: 1;
}

.spot .name {
  font-size: 9px;
  max-width: 80px;
  text-align: center;
}

.spot .pin {
  position: absolute;
}

.spot .icon {
  width: 39px;
  height: 49px;
}

.user-location {
  background-color: var(--white);
  min-height: 260px;
}

.user-location img {
  object-fit: contain;
}
</style>