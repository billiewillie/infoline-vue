<template>
  <div class="basepage admin-page">
    <div class="admin-page-header">
      <h1 class="title">Админка сотрудников</h1>
    </div>

    <router-link to="/admin/employees/create" class="btn rounded">Новый сотрудник</router-link>
    <div class="content shadow rounded">
      <header class="events-header">
        <div>Имя</div>
        <div>Действия</div>
      </header>
      <ul class="events-list">
        <li class="event-item" v-for="user in users" :key="user.id">
          <p class="event-title">{{ user.firstname }} {{ user.lastname }}</p>
          <div class="event-btns">
            <router-link
                :to="`/admin/users/edit/${user.id}`"
                class="btn btn-green rounded">Редактировать</router-link>
          </div>
        </li>
      </ul>
      <div class="pagination"></div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useRootStore} from "@/stores/usersStore";
import {ref} from "vue";

const sortedData = ref([]);

const usersStore = useRootStore();
usersStore.getAllUsers();

const {
  user,
  users,
  logedUser
} = storeToRefs(usersStore);
</script>

<style scoped>
.content {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
}

.events-list {
  display: flex;
  flex-direction: column;
}

.event-item,
.events-header {
  display: grid;
  align-items: flex-start;
  grid-template-columns: 3fr 1fr;
  gap: 8px;
}

.events-header {
  padding: 24px 16px;
}

.event-item:nth-child(odd) {
  background-color: var(--gray-light);
}

.event-item {
  padding: 16px;
}

.events-header div {
  font-weight: 700;
}

.event-title,
.event-date,
.event-category {
  font-size: 14px;
}

.event-btns {
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
}

.event-btns .btn {
  display: flex;
  margin-bottom: 0;
  flex: 1 1 0;
  justify-content: center;
  font-size: 14px;
}

.btn {
  background-color: var(--blue-light);
  color: var(--black);
  padding: 10px 20px;
  margin-bottom: 24px;
  display: inline-flex;
  line-height: 1;
  font-size: 16px;
}

.btn-red {
  background-color: var(--orange);
  border: 1px solid var(--orange);
  cursor: pointer;
}
</style>