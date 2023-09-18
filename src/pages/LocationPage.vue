<template>
  <div class="basepage centered-page">
    <div class="page-container">
      <h1 class="title">{{ location.title }}</h1>
      <section>
        <div class="content">
          <div
              class="card shadow rounded"
              v-for="user in location.users_not_part_group"
              :key="user.id">
            <TheImage
                :alt="`${user.firstname} ${user.lastname}`"
                :fallback="PlaceholderPerson"
                :image="`https://users.trifonov.space/images/users/${user.login}/gallery_1.webp`"/>
            <router-link
                class="title name"
                :to="`/users/${user.login}`">
              <span class="surname">{{ user.lastname }}</span>{{ user.firstname }} {{ user.middlename }}
            </router-link>
            <p class="position">{{ user.position }}</p>
            <div class="contacts">
              <div class="contacts-item">
                <div class="icon">
                  <IconPhoneBlue/>
                </div>
                <span>Мест. телефон:</span>
                <span v-if="user.localphone">{{ user.localphone }}</span>
                <span v-else>нет номера</span>
              </div>
              <div class="contacts-item">
                <span class="icon">
                  <IconMobileBlue/>
                </span>
                <span>Мобильный:</span>
                <div class="copy-contact">
                  <a
                      :href="`tel:+${user.phone}`"
                      v-if="user.phone">{{ formatPhoneNumber(user.phone) }}</a>
                  <span v-else>нет номера</span>
                  <span class="icon copy" v-if="user.phone.length > 0">
                    <IconCopy @click="copyPhone(user.phone)"/>
                    <span class="tooltip">Копировать</span>
                  </span>
                </div>
              </div>
              <div class="contacts-item">
                <span class="icon">
                  <IconEmailBlue/>
                </span>
                <span>E-mail:</span>
                <div class="copy-contact">
                  <a :href="`mailto:${user.email}`" v-if="user.email">{{ user.email }}</a>
                  <span v-else>нет электронной почты</span>
                  <span class="icon copy" v-if="user.email.length > 0">
                    <IconCopy @click="copyMail(user.email)"/>
                    <span class="tooltip">Копировать</span>
                  </span>
                </div>
              </div>
              <div class="contacts-item">
                <span class="icon">
                  <IconGiftBlue/>
                </span>
                <span>День рождения:</span>
                <span>{{ user.day }} {{ getMonthName(user.month) }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-for="item in location.departments" :key="item.id">
        <template v-if="item?.users.length > 0">
          <h2 class="title group-title">{{ item.title }}</h2>
          <div class="content">
            <div class="card shadow rounded" v-for="user in item.users" :key="user.id">
              <TheImage
                  :alt="`${user.firstname} ${user.lastname}`"
                  :fallback="PlaceholderPerson"
                  :image="`https://users.trifonov.space/images/users/${user.login}/gallery_1.webp`"/>
              <router-link :to="`/users/${user.login}`" class="title name">
                <span class="surname">{{ user.lastname }}</span>{{ user.firstname }} {{ user.middlename }}
              </router-link>
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
                  <div class="copy-contact">
                    <a :href="`tel:+${user.phone}`" v-if="user.phone">{{ formatPhoneNumber(user.phone) }}</a>
                    <span v-else>нет номера</span>
                    <span class="icon copy" v-if="user.phone.length > 0">
                      <IconCopy @click="copyPhone(user.phone)"/>
                      <span class="tooltip">Копировать</span>
                    </span>
                  </div>
                </div>
                <div class="contacts-item">
                  <span class="icon">
                    <IconEmailBlue/>
                  </span>
                  <span>E-mail:</span>
                  <div class="copy-contact">
                    <a :href="`mailto:${user.email}`" v-if="user.email">{{ user.email }}</a>
                    <span v-else>нет электронной почты</span>
                    <span class="icon copy" v-if="user.email.length > 0">
                      <IconCopy @click="copyMail(user.email)"/>
                      <span class="tooltip">Копировать</span>
                    </span>
                  </div>
                </div>
                <div class="contacts-item">
                <span class="icon">
                  <IconGiftBlue/>
                </span>
                  <span>День рождения:</span>
                  <span>{{ user.day }} {{ getMonthName(user.month) }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </section>
      <section v-for="item in location.groups" :key="item.id">
        <template v-if="item?.users.length > 0">
          <h2 class="title group-title">{{ item.title }}</h2>
          <div class="content">
            <div class="card shadow rounded" v-for="user in item.users" :key="user.id">
              <TheImage
                  :alt="`${user.firstname} ${user.lastname}`"
                  :fallback="PlaceholderPerson"
                  :image="`https://users.trifonov.space/images/users/${user.login}/gallery_1.webp`"/>
              <router-link :to="`/users/${user.login}`" class="title name">
                <span class="surname">{{ user.lastname }}</span>{{ user.firstname }} {{ user.middlename }}
              </router-link>
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
                  <div class="copy-contact">
                    <a :href="`tel:+${user.phone}`" v-if="user.phone">{{ formatPhoneNumber(user.phone) }}</a>
                    <span v-else>нет номера</span>
                    <span class="icon copy" v-if="user.phone.length > 0">
                      <IconCopy @click="copyPhone(user.phone)"/>
                      <span class="tooltip">Копировать</span>
                    </span>
                  </div>
                </div>
                <div class="contacts-item">
                  <span class="icon">
                    <IconEmailBlue/>
                  </span>
                  <span>E-mail:</span>
                  <div class="copy-contact">
                    <a :href="`mailto:${user.email}`" v-if="user.email">{{ user.email }}</a>
                    <span v-else>нет электронной почты</span>
                    <span class="icon copy" v-if="user.email.length > 0">
                      <IconCopy @click="copyMail(user.email)"/>
                      <span class="tooltip">Копировать</span>
                    </span>
                  </div>
                </div>
                <div class="contacts-item">
                <span class="icon">
                  <IconGiftBlue/>
                </span>
                  <span>День рождения:</span>
                  <span>{{ user.day }} {{ getMonthName(user.month) }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </section>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import "vue-toastification/dist/index.css";
import {useToast} from "vue-toastification";
import TheImage from "@/components/TheImage.vue";
import {useRootStore} from "@/stores/locationStore";
import {getMonthName} from "@/functions/getMonthName";
import IconCopy from "@/components/icons/IconCopy.vue";
import IconGiftBlue from "@/components/icons/IconGiftBlue.vue";
import {formatPhoneNumber} from "@/functions/formatPhoneNumber";
import IconPhoneBlue from "@/components/icons/IconPhoneBlue.vue";
import IconEmailBlue from "@/components/icons/IconEmailBlue.vue";
import PlaceholderPerson from "@/assets/img/person-fallback.webp";
import IconMobileBlue from "@/components/icons/IconMobileBlue.vue";

const toast = useToast();
const params = useRoute().params;

const copyMail = (email) => {
  navigator.clipboard.writeText(email);
  toast.success('скопировано', {
    timeout: 2000
  })
}

const copyPhone = (phone) => {
  navigator.clipboard.writeText(`+${phone}`);
  toast.success('скопировано', {
    timeout: 2000
  })
}

const locationStore = useRootStore();
locationStore.getLocation(params.id);
const {location} = storeToRefs(locationStore);
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
    row-gap: 26px;
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
    width: 18px;
    height: 18px;
    cursor: pointer;
    opacity: 1;
    transition: opacity .3s ease-in-out;
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
  cursor: pointer;

  @media (min-width: 1280px) {
    font-size: 14px;
    display: flex;
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

.copy-contact {
  display: flex;
  gap: 18px;
}

.contacts-item span.icon.copy .tooltip {
  position: absolute;
  bottom: 130%;
  width: 70px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px !important;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.contacts-item span.icon.copy:hover .tooltip {
  opacity: 1;
}
</style>