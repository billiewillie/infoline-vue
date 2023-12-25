<template>
  <div class="default-card-wrapper">
    <div class="default-card shadow rounded">
      <img :src="AwardImage" alt="award">
      <h2 class="title">{{ title }}</h2>
      <span>шорт-лист</span>
      <router-link :to="`${link}`">
        <ButtonComponent class="btn">Подробнее</ButtonComponent>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import IconMarketingDocs from "@/components/icons/IconMarketingDocs.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import AwardImage from "@/assets/img/award-template.png";

const props = defineProps({
  title: String,
  background: String,
  component: String,
  link: String
});

function renderIcon(icon) {
  switch (icon) {
    case "IconMarketingDocs":
      return IconMarketingDocs
  }
}
</script>

<style scoped>
.default-card-wrapper {
  @media (min-width: 1280px) {
    padding-bottom: 5px;
  }
}

.default-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  text-align: center;
  align-items: center;
  background: radial-gradient(50% 50% at 50% 50%, #2659FF 0%, rgba(43, 54, 90, 1) 100%);
  justify-content: center;
  row-gap: 12px;
}

.default-card img {
  width: auto;
  height: 60%;
}

span {
  color: var(--white);
  line-height: 1;
  top: -3px;
  font-size: 18px;
}

span.icon {
  width: 60px;
  height: 60px;
  margin: auto;
}

span.icon svg {
  width: 100%;
  height: 100%;
}

h2.title {
  position: relative;
  font-size: 26px;
  line-height: 1;
  font-weight: 700;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  text-transform: uppercase;

  @media (min-width: 1280px) {
    font-size: 22px;
    padding-top: 0;
  }
  @media (min-width: 1920px) {
    font-size: 28px;
  }
}

h2.title .line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 180px;
  height: 2px;
  opacity: 0.8;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background-color: var(--blue-light);

  @media (min-width: 1280px) {
    width: 100%;
  }
}

p.text {
  font-size: 15px;
  font-weight: 400;
  color: var(--color-text);

  @media (min-width: 1280px) {
    font-size: 11px;
    padding-right: 50px;

  }

  @media (min-width: 1920px) {
    font-size: 14px;
    padding-right: 130px;
  }
}

.btn {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.btn span.icon {
  position: relative;
}
</style>