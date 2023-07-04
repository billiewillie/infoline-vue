<template>
  <div class="basepage centered-page">
    <div class="page-container">
      <h1 class="title" v-if="users.title">{{ users.title }}</h1>
      <section>
        <div class="content">
          <router-link :to="`/users/belinovich`"
                       class="card shadow rounded"
                       v-for="user in users.users_not_part_group"
                       :key="user.id">
            <div class="image overflow-hidden">
              <picture>
                <source :srcset="imageWeb" type="image/webp"/>
                <img :src="image" alt="news" loading="lazy"/>
              </picture>
            </div>
            <p class="title name"><span class="surname">{{ user.lastname }}</span>{{ user.firstname }}
              {{ user.middlename }}</p>
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
                <a :href="`tel:+${user.phone}`">{{ formatPhoneNumber(user.phone) }}</a>
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
          </router-link>
        </div>
      </section>
      <section v-for="item in users.groups" :key="item.id">
        <h2 class="title group-title">{{ item.title }}</h2>
        <div class="content">
          <router-link :to="`/users/belinovich`" class="card shadow rounded" v-for="user in item.users" :key="user.id">
            <div class="image overflow-hidden">
              <picture>
                <source :srcset="imageWeb" type="image/webp"/>
                <img :src="image" alt="news" loading="lazy"/>
              </picture>
            </div>
            <p class="title name"><span class="surname">{{ user.lastname }}</span>{{ user.firstname }}
              {{ user.middlename }}</p>
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
                <a :href="`tel:+${user.phone}`">{{ formatPhoneNumber(user.phone) }}</a>
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
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import IconCopy from "@/components/icons/IconCopy.vue";
import {ref} from "vue";
import IconPhoneBlue from "@/components/icons/IconPhoneBlue.vue";
import IconMobileBlue from "@/components/icons/IconMobileBlue.vue";
import IconEmailBlue from "@/components/icons/IconEmailBlue.vue";
import IconGiftBlue from "@/components/icons/IconGiftBlue.vue";
import {getMonthName} from "@/functions/getMonthName";
import imageWeb from '@/assets/img/lazareva.webp';
import image from '@/assets/img/lazareva.jpg';
import {formatPhoneNumber} from "@/functions/formatPhoneNumber";

const users = ref({
      "id": 53,
      "company_id": 2,
      "title": "Отдел рекламы",
      "email": "",
      "url": "advertising",
      "sort": 500,
      "groups": [
        {
          "id": 5,
          "department_id": 20,
          "title": "Группа рекламы и корпоративных мероприятий",
          "email": "",
          "url": "",
          "sort": 500,
          "users": [
            {
              "id": 5,
              "token": "2414242gserg",
              "login": "rodionova",
              "email": "rodionova@bioline.ru",
              "firstname": "Евгения",
              "middlename": "Павловна",
              "lastname": "Родионова",
              "avatar": "rodionova",
              "localphone": 159,
              "sort": 550,
              "phone": "79311003870",
              "position": "Ведущий специалист",
              "month": 11,
              "day": 21
            },
            {
              "id": 6,
              "token": "resg4gh54ey3",
              "login": "kulakova_an",
              "email": "kulakova@bioline.ru",
              "firstname": "Анна",
              "middlename": "Юрьевна",
              "lastname": "Кулакова",
              "avatar": "kulakova",
              "localphone": 257,
              "sort": 500,
              "phone": "79319669093",
              "position": "Специалист",
              "month": 12,
              "day": 12
            },
            {
              "id": 7,
              "token": "345yt54ywq4g",
              "login": "izmaylova",
              "email": "izmaylova@bioline.ru",
              "firstname": "Любовь",
              "middlename": "Владимировна",
              "lastname": "Измайлова",
              "avatar": "izmaylova",
              "localphone": 158,
              "sort": 475,
              "phone": "79046036365",
              "position": "Старший дизайнер",
              "month": 6,
              "day": 11
            },
            {
              "id": 8,
              "token": "erg543y62gdg",
              "login": "apkhanova",
              "email": "apkhanova@bioline.ru",
              "firstname": "Алина",
              "middlename": "Александровна",
              "lastname": "Апханова",
              "avatar": "apkhanova",
              "localphone": 261,
              "sort": 350,
              "phone": "79313948389",
              "position": "Smm-специалист",
              "month": 7,
              "day": 11
            }
          ]
        },
        {
          "id": 2,
          "department_id": 20,
          "title": "Группа web-разработки",
          "email": "",
          "url": "web",
          "sort": 300,
          "users": [
            {
              "id": 1,
              "token": "uvB5Fnc0xm7eJsbR5U2VX8",
              "login": "trifonov",
              "email": "trifonov@bioline.ru",
              "firstname": "Артем",
              "middlename": "Петрович",
              "lastname": "Трифонов",
              "avatar": "trifonov",
              "localphone": 259,
              "sort": 700,
              "phone": "79046036365",
              "position": "Руководитель группы",
              "month": 8,
              "day": 23
            },
            {
              "id": 2,
              "token": "aiofueoiuf8312kfsj",
              "login": "senin",
              "email": "senin@bioline.ru",
              "firstname": "Егор",
              "middlename": "Юрьевич",
              "lastname": "Сенин",
              "avatar": "senin",
              "localphone": 256,
              "sort": 450,
              "phone": "79046036365",
              "position": "Web-дизайнер",
              "month": 8,
              "day": 10
            },
            {
              "id": 79,
              "token": "etwe4t21452341f",
              "login": "belinovich",
              "email": "belinovich@bioline.ru",
              "firstname": "Вадим",
              "middlename": "Игоревич",
              "lastname": "Белинович",
              "avatar": "belinovich.webp",
              "localphone": 259,
              "sort": 500,
              "phone": "79214088648",
              "position": "web-программист",
              "month": 12,
              "day": 8
            }
          ]
        }
      ],
      "users_not_part_group": [
        {
          "id": 4,
          "token": "8c43hof4iuh3f8h38fn483",
          "login": "lazareva",
          "email": "lazareva@bioline.ru",
          "firstname": "Марина",
          "middlename": "Руслановна",
          "lastname": "Лазарева",
          "avatar": "lazareva",
          "localphone": 155,
          "sort": 800,
          "position": "Руководитель отдела",
          "phone": "79216408996",
          "month": 10,
          "day": 11
        }
      ]
    }
);
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
    justify-content: space-between;
    row-gap: 0;
    width: 37%;
    -webkit-border-radius: 0 3px 3px 0;
    -moz-border-radius: 0 3px 3px 0;
    border-radius: 0 3px 3px 0;
  }

  @media (min-width: 1920px) {
    padding: 35px 26px;
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