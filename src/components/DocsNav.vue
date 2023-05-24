<template>
  <ul class="docs-nav__menu">
    <li v-for="item in navList" :key="item.title" class="docs-nav__item">
      <router-link class="docs-nav__link" :to="`${item.path}`">
        <span class="docs-nav__title">
          {{ item.title }}
        </span>
        <span class="docs-nav__icon">
          {{ item.icon }}
        </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DocsNav',
  data() {
    return {
      navList: [
        {
          title: 'Документы',
          path: '/docs',
          icon: ''
        },
        {
          title: 'Инструкции',
          path: '/instructions',
          icon: ''
        },
        {
          title: 'Заявки',
          path: '/orders',
          icon: ''
        },
        {
          title: 'Бронирование переговорок',
          path: '/conference-room-booking',
          icon: ''
        },
        {
          title: 'Маркетинговые материалы',
          path: '/marketing-materials',
          icon: ''
        },
        {
          title: 'Обучение',
          path: '/learning',
          icon: ''
        }
      ]
    }
  }
}
</script>

<style scoped></style>