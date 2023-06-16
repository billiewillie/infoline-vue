<template>
  <div class="basepage">
    <h1 class="title">Наша команда</h1>
    <div class="content">
      <div class="row row-head">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Семенов</span> Александр Владимирович</h2>
          <p class="position">Генеральный директор БиоЛайн</p>
        </router-link>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Дулаева</span> Оксана Евгеньевна</h2>
          <p class="position">Заместитель генерального директора по маркетингу и продажам БиоСистемы</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Отдел по работе с клиентами БС</router-link>
          <router-link to="/" class="department rounded">Отдел госпитального оборудования и мебели</router-link>
          <router-link to="/" class="department rounded">Отдел продукции для материнства и детcтва</router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Дмитриева</span> Марина Олеговна</h2>
          <p class="position">Директор по маркетингу и продажам общелабораторного оборудования</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Отдел общелабораторного оборудования</router-link>
          <router-link to="/" class="department rounded">Отдел лабораторной мебели</router-link>
          <router-link to="/" class="department rounded">Отдел преаналитических систем и расходных материалов
          </router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Солнцева</span> Ольга Станиславовна</h2>
          <p class="position">Заместитель генерального директора по маркетингу и продажам БиоЛайна</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Отдел по работе с клиентами БС</router-link>
          <router-link to="/" class="department rounded">Отдел госпитального оборудования и мебели</router-link>
          <router-link to="/" class="department rounded">Отдел продукции для материнства и детcтва</router-link>
          <router-link to="/" class="department rounded">
            Отдел оптической микроскопии, анализа изображений и спектрометрии в научных исследованиях
          </router-link>
        </div>
      </div>
      <div class="row row-inner">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Евтеев</span> Андрей Владимирович</h2>
          <p class="position">Директор по развитию продукции для научных исследований</p>
        </router-link>
      </div>
      <div class="row row-inner">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Кислов</span> Павел Владимирович</h2>
          <p class="position">Директор по маркетингу и продажам продукции для гистологии/цитологии</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Отдел цитологии</router-link>
          <router-link to="/" class="department rounded">Отдел оборудования для клинической микроскопии и цифровой
            патологии
          </router-link>
          <router-link to="/" class="department rounded">Отдел молекурярной диагностики в патоморфологии</router-link>
          <router-link to="/" class="department rounded">Отдел иммуногистохимии</router-link>
          <router-link to="/" class="department rounded">Отдел гистологии</router-link>
          <router-link to="/" class="department rounded">Отдел продаж гистологических/цитологических расходных
            материалов,
            реагентов и оборудования
          </router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Каюкова</span> Людмила Леонидовна</h2>
          <p class="position">Заместитель генерального директора по сопровождению корпоративного бизнеса</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Отдел персонала</router-link>
          <router-link to="/" class="department rounded">Отдел рекламы</router-link>
          <router-link to="/" class="department rounded">Тендерный отдел</router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <div class="card-content">
            <h2 class="name title"><span class="surname">Коденюк</span> Владимир Анатольевич</h2>
            <p class="position">Директор по административно-хозяйственным вопросам</p>
          </div>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Автохозяйство</router-link>
          <router-link to="/" class="department rounded">Секретариат</router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <div class="card-content">
            <h2 class="name title"><span class="surname">Шубаев</span> Павел Андреевич</h2>
            <p class="position">Директор по логистике</p>
          </div>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Склад</router-link>
          <router-link to="/" class="department rounded">Отдел логистики</router-link>
          <router-link to="/" class="department rounded">Отдел импорта</router-link>
          <router-link to="/" class="department rounded">Отдел закупок</router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Гусева</span> Наталья Константиновна</h2>
          <p class="position">Директор по правовым вопросам</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Отдел регистрации медицинских изделий</router-link>
          <router-link to="/" class="department rounded">Юридический отдел</router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Белинович</span> Вадим Игоревич</h2>
          <p class="position">Заместитель генерального директора по маркетингу и продажам БиоСистемы</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Отдел по работе с клиентами БС</router-link>
          <router-link to="/" class="department rounded">Отдел госпитального оборудования и мебели</router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Гвоздарев</span> Андрей Владимирович</h2>
          <p class="position">Директор IT</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">IT отдел</router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Заруцкий</span> Дмитрий Михайлович</h2>
          <p class="position">Заместитель генерального директора по маркетингу и продажам БиоСистемы</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Служба технического сервиса</router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Абрамов</span> Максим Николаевич</h2>
          <p class="position">Финансовый директор</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">Экономический отдел</router-link>
          <router-link to="/" class="department rounded">Финансовый отдел</router-link>
        </div>
      </div>
      <div class="row row-only-department">
        <div class="department-group">
          <router-link to="/" class="department rounded">Отдел комплексных проектов и поставок</router-link>
        </div>
      </div>
      <div class="row row-only-department">
        <div class="department-group">
          <router-link to="/" class="department rounded">Бухгалтерия</router-link>
        </div>
      </div>
      <div class="row row-special">
        <router-link to="/" class="card shadow rounded">
          <div class="image overflow-hidden">
            <picture>
              <source :srcset="`@/assets/img/lazareva.webp`" type="image/webp">
              <img :src="`@/assets/img/lazareva.jpg`" alt="news" loading="lazy"/>
            </picture>
          </div>
          <h2 class="name title"><span class="surname">Семенов</span> Алексей Александрович</h2>
          <p class="position">Генеральный директор БиоСистемы</p>
        </router-link>
        <div class="department-group">
          <router-link to="/" class="department rounded">ООО "БиоБеби"</router-link>
          <router-link to="/" class="department rounded">Филиал г. Нижний Новгород</router-link>
          <router-link to="/" class="department rounded">Филиал г. Москва</router-link>
          <router-link to="/" class="department rounded">Филиал г. Новосибирск</router-link>
          <router-link to="/" class="department rounded">Филиал г. Ростов-на-Дону</router-link>
          <router-link to="/" class="department rounded">Филиал г. Казань</router-link>
          <router-link to="/" class="department rounded">Филиал г. Краснодар</router-link>
          <router-link to="/" class="department rounded">Филиал г. Уфа</router-link>
          <router-link to="/" class="department rounded">Филиал г. Хабаровск</router-link>
          <router-link to="/" class="department rounded">Филиал г. Самара</router-link>
          <router-link to="/" class="department rounded">Филиал г. ТОО «БиоЛайн-Казахстан»</router-link>
          <router-link to="/" class="department rounded">Филиал г. Екатеринбург</router-link>
          <router-link to="/" class="department rounded">БиоЛайн-БС (Республика Беларусь)</router-link>
          <router-link to="/" class="department rounded">ООО "BLUBIOMEDICAL"</router-link>
        </div>
      </div>
      <div class="row row-only-department">
        <div class="department-group">
          <router-link to="/" class="department rounded">ООО «БИОМЕБЕЛЬ»</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  margin-bottom: 60px;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
  }

  @media (min-width: 1920px) {
    padding-left: 153px;
  }
}

.row:last-child {
  margin-bottom: 0;
}

.row.row-inner {
  @media (min-width: 1280px) {
    padding-left: 150px;
  }

  @media (min-width: 1920px) {
    padding-left: 200px;
  }
}

.row.row-special {
  padding-left: 0;
  @media (min-width: 1280px) {
    flex-direction: column;
  }
}

.row.row-head {
  justify-content: center;
  padding-left: 0;
}

.row-only-department {
  justify-content: flex-end;
}

.department-group {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.row.row-special .department-group {
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 120px;
  }

  @media (min-width: 1920px) {
    column-gap: 173px;
  }
}

.department {
  border: 1px solid var(--blue-light);
  background-color: var(--white);
  width: 100%;
  max-width: 436px;
  text-align: center;
  padding: 15px 30px;
  color: var(--black);
  font-size: 17px;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    width: 350px;
    min-height: 52px;
    font-size: 12px;
    text-align: left;
    padding: 10px;
  }

  @media (min-width: 1920px) {
    width: 436px;
    font-size: 17px;
  }
}

.card {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  background-color: var(--white);
  padding-bottom: 20px;
  max-width: 500px;
  transition: box-shadow 0.3s ease-in-out;

  @media (min-width: 1280px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(2, 1fr);
    padding-bottom: 0;
    padding-right: 30px;
    row-gap: 0;
    column-gap: 30px;
    height: 180px;
  }

  @media (min-width: 1920px) {
    max-width: 729px;
    height: 212px;
  }
}

.card:hover {
  box-shadow: 0 1px 14px var(--blue-light);
}

.card .image {
  width: 100%;
  height: 370px;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;

  @media (min-width: 1280px) {
    grid-row-start: 1;
    grid-row-end: 3;
    height: 100%;
    display: flex;
    width: 150px;
    -webkit-border-radius: 3px 0 0 3px;
    -moz-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
    align-items: stretch;
  }

  @media (min-width: 1920px) {
    width: 212px;
  }
}

.card .image picture {
  width: 100%;
}

.card .image img {
  object-position: top center;
}

.card .name {
  display: flex;
  color: var(--blue-dark);
  padding-bottom: 20px;
  font-size: 27px;
  border-bottom: 1px solid var(--gray-medium);
  text-align: center;
  width: 100%;

  @media (min-width: 1280px) {
    justify-content: center;
    flex-direction: column;
    text-align: left;
    font-size: 20px;
    padding-bottom: 0;
  }

  @media (min-width: 1920px) {
    font-size: 27px;
  }
}

.card .surname {
  font-weight: 700;
  display: block;
  text-align: center;

  @media (min-width: 1280px) {
    text-align: left;
  }
}

.card .position {
  display: flex;
  font-size: 18px;
  text-align: center;
  color: var(--gray-dark);

  @media (min-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    text-align: left;
    font-size: 14px;
  }

  @media (min-width: 1920px) {
    font-size: 18px;
  }
}
</style>