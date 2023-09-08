<template>
  <div
      v-if="location?.city === 'Санкт-Петербург'"
      class="map-overlay"
      :class="{expand: isMapShow}">
    <div class="map-container">
      <div class="text" :class="{hidden: !isMapShow}" :style="{opacity: isMapShow ? 1 : 0}">
        <h2 class="title">{{ location?.floor }} этаж</h2>
        <div class="row">
          <span>{{ location?.office }} кабинет</span>
        </div>
      </div>
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
          <i class="icon" :style="{opacity: spot.number === location?.office ? 1 : 0}">
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
        @click="emit('closeMap')">x
    </div>
  </div>
</template>

<script setup>
import Floor1 from "@/assets/img/floor-1.svg";
import Floor2 from "@/assets/img/floor-2.svg";
import Floor3 from "@/assets/img/floor-3.svg";
import IconPin from "@/components/icons/IconPin.vue";

const floors = {
  1: {
    106: {
      number: 106,
      name: "Кухня",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    113: {
      number: 113,
      name: "Импорт",
      xLg: 170,
      yLg: 30,
      xLgDecreased: 170,
      yLgDecreased: 300,
    },
    115: {
      number: 115,
      name: "Отдел персонала",
      xLg: 410,
      yLg: 10,
      xLgDecreased: 410,
      yLgDecreased: 10,
    },
    116: {
      number: 116,
      name: "Отдел закупок",
      xLg: 530,
      yLg: 170,
      xLgDecreased: -400,
      yLgDecreased: 170,
    },
    118: {
      number: 118,
      name: "Комната для собеседований",
      xLg: 658,
      yLg: 170,
      xLgDecreased: -520,
      yLgDecreased: 170,
    },
    122: {
      number: 122,
      name: "Отдел рекламы",
      xLg: 980,
      yLg: 160,
      xLgDecreased: -980,
      yLgDecreased: 160,
    },
    126: {
      number: 126,
      name: "Заруцкий Д.М.",
      xLg: 803,
      yLg: 440,
      xLgDecreased: -673,
      yLgDecreased: 440,
    },
    127: {
      number: 127,
      name: "Техсервис",
      xLg: 675,
      yLg: 400,
      xLgDecreased: -540,
      yLgDecreased: 440,
    },
    129: {
      number: 129,
      name: "Коденюк В.А.",
      xLg: 520,
      yLg: 320,
      xLgDecreased: -400,
      yLgDecreased: 440,
    },
    128: {
      number: 128,
      name: "Логистика",
      xLg: 495,
      yLg: 440,
      xLgDecreased: -365,
      yLgDecreased: 440,
    },
    130: {
      number: 130,
      name: "Шубаев П.А.",
      xLg: 380,
      yLg: 440,
      xLgDecreased: -250,
      yLgDecreased: 440,
    },
    131: {
      number: 131,
      name: "Учебная комната",
      xLg: 180,
      yLg: 440,
      xLgDecreased: -250,
      yLgDecreased: 440,
    }
  },
  2: {
    201: {
      number: 201,
      name: "Главные бухгалтеры",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    204: {
      number: 204,
      name: "Бухгалтерия БС",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    205: {
      number: 205,
      name: "Бухгалтерия БЛ",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    207: {
      number: 207,
      name: "Ген. дир. БС",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    208: {
      number: 201,
      name: "Ген. дир. Семенов А.В.",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    209: {
      number: 209,
      name: "Помощник ген. директора",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    210: {
      number: 210,
      name: "IT отдел",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    211: {
      number: 201,
      name: "Гвоздарев А.",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    212: {
      number: 212,
      name: "IT отдела",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    213: {
      number: 213,
      name: "Гусева Н.К.",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    214: {
      number: 214,
      name: "Юридический отдел",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    224: {
      number: 224,
      name: "Регистрация",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    225: {
      number: 225,
      name: "Отдел продукции для материнства и детства",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    226: {
      number: 226,
      name: "Финанс. отдел",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    227: {
      number: 227,
      name: "Абрамов М.Н.",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    228: {
      number: 228,
      name: "Экономич. отдел",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    229: {
      number: 229,
      name: "Каюкова Л.Л.",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    230: {
      number: 230,
      name: "ОКП",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
    231: {
      number: 231,
      name: "Тендерный отдел",
      xLg: 25,
      yLg: 290,
      xLgDecreased: 290,
      yLgDecreased: 25,
    },
  }
}

const props = defineProps({
  location: {
    type: Object,
    default: {},
  },
  isMapShow: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['closeMap']);

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
.map-close {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 30px;
  top: 30px;
  cursor: pointer;
}

.map-close.hidden {
  display: none;
}

.map-overlay {
  position: absolute;
  display: flex;
  bottom: 16px;
  right: 16px;
  justify-content: center;
  z-index: 2;
  background-color: var(--white);
  width: calc(33% - 46px);
  height: calc(30% - 10px);
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  @media (min-width: 1920px) {
    bottom: 20px;
    right: 20px;
  }
}

.map-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.map-overlay .text {
  position: absolute;
  left: 50%;
  top: 80px;
  transition: opacity 0.5s ease-in-out;
}

.map-overlay .text.hidden {
  opacity: 0;
}

.map-overlay.expand {
  z-index: 4;
  width: calc(100vw - 82px);
  height: calc(100vh - 82px);

  @media (min-width: 1920px) {
    width: calc(100vw - 110px);
    height: calc(100vh - 110px);
  }
}

.map-overlay .map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 600px;
  height: 400px;
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
</style>