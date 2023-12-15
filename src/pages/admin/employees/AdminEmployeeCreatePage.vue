<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class="title">Добавить сотрудника</h1>
    </div>
    <div class="content shadow rounded">
      <FormKitSchema :schema="schema" :data="data"/>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import axios from "axios";
import router from "@/router";

const data = reactive({
  addItem: (node) => () => node.input(node._value.concat([''])),
  stringify: JSON.stringify,
})

const sports = ref([
  {id: 1, name: 'Football'},
  {id: 2, name: 'Ice hockey'},
]);

const schema = {
  $formkit: 'form',
  children: [
    {
      $formkit: 'list',
      name: 'links',
      value: sports.value, // 👈 Starts with an empty item
      dynamic: true,
      children: [
        {
          $el: 'li',
          for: ['item', 'index', '$items'], // 👈 $items is in the slot’s scope
          children: [
            {
              $el: 'p',
              for: {"item.id": 'id', "item.name": 'name'},
              children: '$: $id - $name',
            },
          ],
        },
        {
          $formkit: 'button',
          onClick: '$addItem($node)', // 👈 Call $addItem from data
          children: 'Add a link',
        },
      ],
    },
    {
      $el: 'pre',
      children: '$stringify($value)',
    },
  ],
}

async function submitHandler(credentials) {
  console.log(credentials);
}
</script>

<style scoped>
.admin-page {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  justify-content: center;
  background-color: var(--white);
  padding: 16px;
  flex: auto;
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (min-width: 1280px) {
    min-width: 360px;
  }
}
</style>