<template>
  <div class="basepage">
    <h1 class="title">Дни рождения</h1>
    <div class="content">
      <div class="month">
        <h2 class="month-title title subtitle">Январь</h2>
        <div class="list">
          <router-link to="/" class="card rounded shadow">
            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">Семенов Александр</p>
            <footer class="card-footer">
              <div class="icon rounded">
                <IconGift/>
              </div>
              <span class="date">21 марта</span>
            </footer>
          </router-link>
          <router-link to="/" class="card rounded shadow">
            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">Семенов Александр</p>
            <footer class="card-footer">
              <div class="icon rounded">
                <IconGift/>
              </div>
              <span class="date">21 марта</span>
            </footer>
          </router-link>
          <router-link to="/" class="card rounded shadow">
            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">Семенов Александр</p>
            <footer class="card-footer">
              <div class="icon rounded">
                <IconGift/>
              </div>
              <span class="date">21 марта</span>
            </footer>
          </router-link>
          <router-link to="/" class="card rounded shadow">
            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">Семенов Александр</p>
            <footer class="card-footer">
              <div class="icon rounded">
                <IconGift/>
              </div>
              <span class="date">21 марта</span>
            </footer>
          </router-link>
          <router-link to="/" class="card rounded shadow">
            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">Семенов Александр</p>
            <footer class="card-footer">
              <div class="icon rounded">
                <IconGift/>
              </div>
              <span class="date">21 марта</span>
            </footer>
          </router-link>
        </div>
      </div>
      <div class="month">
        <h2 class="month-title title subtitle">Февраль</h2>
        <div class="list">
          <router-link to="/" class="card rounded shadow">
            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">Семенов Александр</p>
            <footer class="card-footer">
              <div class="icon rounded">
                <IconGift/>
              </div>
              <span class="date">21 марта</span>
            </footer>
          </router-link>
          <router-link to="/" class="card rounded shadow">
            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">Семенов Александр</p>
            <footer class="card-footer">
              <div class="icon rounded">
                <IconGift/>
              </div>
              <span class="date">21 марта</span>
            </footer>
          </router-link>
          <router-link to="/" class="card rounded shadow">
            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">Семенов Александр</p>
            <footer class="card-footer">
              <div class="icon rounded">
                <IconGift/>
              </div>
              <span class="date">21 марта</span>
            </footer>
          </router-link>
          <router-link to="/" class="card rounded shadow">
            <div class="photo">
              <picture>
                <source srcset="@/assets/img/gallery-2.webp" type="image/webp">
                <img src="@/assets/img/gallery-1.jpeg" alt="">
              </picture>
            </div>
            <p class="title name">Семенов Александр</p>
            <footer class="card-footer">
              <div class="icon rounded">
                <IconGift/>
              </div>
              <span class="date">21 марта</span>
            </footer>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconGiftBlue from "@/components/icons/IconGiftBlue.vue";
import IconGift from "@/components/icons/IconGift.vue";
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
.month-title {
  margin-bottom: 20px;
  color: var(--gray-dark);

  @media (min-width: 1280px) {
    display: block;
  }
}

.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 45px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  row-gap: 30px;

  @media (min-width: 1280px) {
    display: grid;
    flex-direction: initial;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    padding-right: 20px;
    column-gap: 20px;
    row-gap: 0;
    transition: box-shadow 0.3s ease-in-out;
  }
}

.card:hover {
  box-shadow: 0 1px 14px #57E8DF;
}

.photo {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;

  @media (min-width: 1280px) {
    grid-row-start: 1;
    grid-row-end: 3;
    width: 132px;
    -webkit-border-radius: 3px 0 0 3px;
    -moz-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
  }
}

.title {
  font-size: 27px;
  text-align: center;
  color: var(--blue-dark);
}

.subtitle {
  color: var(--gray-dark);
  border-bottom: 1px solid var(--gray-medium);
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.name {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    font-size: 18px;
  }
}

.card-footer {
  display: flex;
  align-items: center;
  border-top: 1px solid var(--gray-medium);

  @media (min-width: 1280px) {
    column-gap: 15px;
  }
}

.date {
  display: flex;
  flex: auto;
  justify-content: center;
  font-weight: 700;
  font-size: 27px;
  color: var(--black);

  @media (min-width: 1280px) {
    justify-content: flex-start;
    font-size: 18px;
  }
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  background-color: var(--blue-light);

  @media (min-width: 1280px) {
    width: 35px;
    height: 35px;
  }
}
</style>