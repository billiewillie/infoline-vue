<template>
  <div class="basepage centered-page">
    <div class="page-container">
      <h1 class="title" v-if="users.title">{{ users.title }}</h1>
      <section>
        <div class="content">
          <a href="/users/belinovich" class="card shadow rounded">
            <div class="image overflow-hidden">
              <picture>
                <source srcset="http://users.trifonov.space/images/users/belinovich/1.webp" type="image/webp">
                <img src="http://users.trifonov.space/images/users/belinovich/1.jpg" alt="Белинович">
              </picture>
            </div>
            <p class="title name"><span class="surname">Белинович</span>Вадим Игоревич</p>
            <p class="position">Заместитель генерального директора по маркетингу и продажам БиоСистемы</p>
            <div class="contacts">
              <div class="contacts-item">
              <span class="icon">
                <IconPhoneBlue/>
              </span>
                <span>Мест. телефон:</span>
                <span>155</span>
              </div>
              <div class="contacts-item">
              <span class="icon">
                <IconMobileBlue/>
              </span>
                <span>Мобильный:</span>
                <a>+7 (921) 222-22-22</a>
                <span class="icon copy">
                <IconCopy/>
              </span>
              </div>
              <div class="contacts-item">
              <span class="icon">
                <IconEmailBlue/>
              </span>
                <span>E-mail:</span>
                <a>lidzhi-goryaev@bioline.ru</a>
                <span class="icon copy">
                <IconCopy/>
              </span>
              </div>
              <div class="contacts-item">
              <span class="icon">
                <IconGiftBlue/>
              </span>
                <span>День рождения:</span>
                <span>27 мая</span>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section v-for="item in users.groups" :key="item.id">
        <h2 class="title group-title">{{ item.title }}</h2>
        <div class="content">
          <a :href="`/users/${user.login}`" class="card shadow rounded" v-for="user in item.users" :key="user.id">
            <div class="image overflow-hidden">
              <picture>
                <source srcset="http://users.trifonov.space/images/users/belinovich/1.webp" type="image/webp">
                <img src="http://users.trifonov.space/images/users/belinovich/1.jpg" alt="Белинович">
              </picture>
            </div>
            <p class="title name"><span class="surname">{{ user.lastname }}</span>{{ user.firstname }} {{ user.middlename }}</p>
            <p class="position">{{ user.position }}</p>
            <div class="contacts">
              <div class="contacts-item">
              <span class="icon">
                <IconPhoneBlue/>
              </span>
                <span>Мест. телефон:</span>
                <span>{{ user.localphone }}</span>
              </div>
              <div class="contacts-item">
              <span class="icon">
                <IconMobileBlue/>
              </span>
                <span>Мобильный:</span>
                <a :href="`tel:+${user.phone}`">+{{ user.phone }}</a>
                <span class="icon copy">
                <IconCopy/>
              </span>
              </div>
              <div class="contacts-item">
              <span class="icon">
                <IconEmailBlue/>
              </span>
                <span>E-mail:</span>
                <a>{{ user.email }}</a>
                <span class="icon copy">
                <IconCopy/>
              </span>
              </div>
              <div class="contacts-item">
              <span class="icon">
                <IconGiftBlue/>
              </span>
                <span>День рождения:</span>
                <span>{{ user.day }} {{ getMonthName(user.month) }}</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import IconPhone from "@/components/icons/IconPhone.vue";
import IconCopy from "@/components/icons/IconCopy.vue";
import {ref} from "vue";
import axios from "axios";
import IconPhoneBlue from "@/components/icons/IconPhoneBlue.vue";
import IconMobileBlue from "@/components/icons/IconMobileBlue.vue";
import IconEmailBlue from "@/components/icons/IconEmailBlue.vue";
import IconGiftBlue from "@/components/icons/IconGiftBlue.vue";
import {getMonthName} from "@/functions/getMonthName";

const users = ref([]);

axios
    .get(`http://users.trifonov.space/api/show/department/advertising`)
    .then((response) => {
      users.value = response.data;
    })
    .then(() => {
      console.log(users.value);
    })
    .catch((error) => {
      console.log(error);
    });
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  row-gap: 20px;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    row-gap: 0;
    align-items: stretch;
  }
}

.group-title {
  font-size: 20px;
  padding-bottom: 20px;
  color: var(--gray-dark);
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--gray-medium);

  @media (min-width: 1280px) {
    font-size: 24px;
  }
}

.image {
  height: 100%;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;

  @media (min-width: 1280px) {
    height: auto;
    width: 11%;
    -webkit-border-radius: 3px 0 0 3px;
    -moz-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
  }
}

.image img {
  object-position: top center;
}

.contacts {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  background-color: var(--blue-dark);
  padding: 30px 17px;
  -webkit-border-radius: 0 0 3px 3px;
  -moz-border-radius: 0 0 3px 3px;
  border-radius: 0 0 3px 3px;

  @media (min-width: 1280px) {
    padding: 26px;
    width: 37%;
    -webkit-border-radius: 0 3px 3px 0;
    -moz-border-radius: 0 3px 3px 0;
    border-radius: 0 3px 3px 0;
  }
}

.contacts-item {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.contacts-item .icon {
  width: 18px;
  height: 18px;
}

.contacts-item .icon svg {
  width: 100%;
  height: 100%;
}

.contacts-item span {
  color: var(--white);
  font-size: 13px;

  @media (min-width: 1280px) {
    font-size: 14px;
  }
}

.contacts-item span.icon.copy {
  display: none;

  @media (min-width: 1280px) {
    display: flex;
  }
}

.contacts-item span:nth-child(2) {
  width: 110px;

  @media (min-width: 1280px) {
    width: 130px;
  }
}

.contacts-item a {
  color: var(--blue-light);
  text-decoration: underline;
  text-underline-offset: 3px;
  font-size: 13px;

  @media (min-width: 1280px) {
    font-size: 14px;
  }
}

.name {
  padding-bottom: 20px;
  font-size: 27px;
  color: var(--blue-dark);
  text-align: center;
  width: 92%;
  border-bottom: 1px solid var(--gray-medium);

  @media (min-width: 1280px) {
    align-self: center;
    border-right: 1px solid var(--gray-medium);
    border-bottom: none;
    padding: 16px 10px 16px 20px;
    text-align: left;
    font-size: 22px;
    width: 25%;
  }
}

.surname {
  display: block;
  text-align: center;
  font-weight: 700;

  @media (min-width: 1280px) {
    text-align: left;
  }
}

.position {
  text-align: center;
  width: 92%;
  font-size: 18px;
  color: var(--gray-dark);

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 27%;
    text-align: left;
    padding: 16px 20px;
  }
}

section {
  margin-bottom: 40px;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>