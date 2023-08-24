<template>
  <div class="basepage centered-page">
    <div class="page-container">
      <h1 class="title">Наша команда</h1>
      <div class="content">
        <div class="row row-head">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Семенов А. В." :image="SemenovAVWebp"/>
            <h2 class="name title"><span class="surname">Семенов</span> Александр Владимирович</h2>
            <p class="position">Генеральный директор БиоЛайн</p>
          </router-link>
        </div>
        <div class="row">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Дулаева О. Е." :image="DulaevaWebp"/>
            <h2 class="name title"><span class="surname">Дулаева</span> Оксана Евгеньевна</h2>
            <p class="position">Заместитель генерального директора по маркетингу и продажам БиоСистемы</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">Отдел по работе с клиентами БС
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел госпитального оборудования и
              мебели
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел продукции для материнства и
              детcтва
            </router-link>
          </div>
        </div>
        <div class="row row-inner-one">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Дмитриева М. О." :image="DmitrievaWebp"/>
            <h2 class="name title"><span class="surname">Дмитриева</span> Марина Олеговна</h2>
            <p class="position">Директор по маркетингу и продажам общелабораторного оборудования</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">Отдел общелабораторного оборудования
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел лабораторной мебели
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел преаналитических систем и
              расходных
              материалов
            </router-link>
          </div>
        </div>
        <div class="row row-above-multiple-employees">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Солнцева О. С." :image="SolntsevaWebp"/>
            <h2 class="name title"><span class="surname">Солнцева</span> Ольга Станиславовна</h2>
            <p class="position">Заместитель генерального директора по маркетингу и продажам БиоЛайна</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">Отдел по работе с клиентами БС
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел госпитального оборудования и
              мебели
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел продукции для материнства и
              детcтва
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">
              Отдел оптической микроскопии, анализа изображений и спектрометрии в научных исследованиях
            </router-link>
          </div>
        </div>
        <div class="row row-inner no-departments">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Евтеев А. В." :image="EvteevWebp"/>
            <h2 class="name title"><span class="surname">Евтеев</span> Андрей Владимирович</h2>
            <p class="position">Директор по развитию продукции для научных исследований</p>
          </router-link>
        </div>
        <div class="row row-inner">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Кислов П. В." :image="KislovWebp"/>
            <h2 class="name title"><span class="surname">Кислов</span> Павел Владимирович</h2>
            <p class="position">Директор по маркетингу и продажам продукции для гистологии/цитологии</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">Отдел цитологии</router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел оборудования для клинической
              микроскопии
              и цифровой
              патологии
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел молекурярной диагностики в
              патоморфологии
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел иммуногистохимии</router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел гистологии</router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел продаж
              гистологических/цитологических
              расходных
              материалов,
              реагентов и оборудования
            </router-link>
          </div>
        </div>
        <div class="row">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Каюкова Л. Л." :image="KaukovaWebp"/>
            <h2 class="name title"><span class="surname">Каюкова</span> Людмила Леонидовна</h2>
            <p class="position">Заместитель генерального директора по сопровождению корпоративного бизнеса</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">Отдел персонала</router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел рекламы</router-link>
            <router-link to="/departments/advertising" class="department rounded">Тендерный отдел</router-link>
          </div>
        </div>
        <div class="row row-inner-one">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Коденюк В. А." :image="KodenukWebp"/>
            <h2 class="name title"><span class="surname">Коденюк</span> Владимир Анатольевич</h2>
            <p class="position">Директор по административно-хозяйственным вопросам</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">Автохозяйство</router-link>
            <router-link to="/departments/advertising" class="department rounded">Секретариат</router-link>
          </div>
        </div>
        <div class="row">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Шубаев П. А." :image="ShubaevWebp"/>
            <h2 class="name title"><span class="surname">Шубаев</span> Павел Андреевич</h2>
            <p class="position">Директор по логистике</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">Склад</router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел логистики</router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел импорта</router-link>
            <router-link to="/departments/advertising" class="department rounded">Отдел закупок</router-link>
          </div>
        </div>
        <div class="row">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Гусева Н. К." :image="GusevaWebp"/>
            <h2 class="name title"><span class="surname">Гусева</span> Наталья Константиновна</h2>
            <p class="position">Директор по правовым вопросам</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">Отдел регистрации медицинских изделий
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Юридический отдел</router-link>
          </div>
        </div>
        <div class="row">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Гвоздарев А. В." :image="GvozdarevWebp"/>
            <h2 class="name title"><span class="surname">Гвоздарев</span> Андрей Владимирович</h2>
            <p class="position">Директор IT</p>
          </router-link>
          <div class="department-group one-group">
            <router-link to="/departments/advertising" class="department rounded">IT отдел</router-link>
          </div>
        </div>
        <div class="row">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Заруцкий Д. М." :image="ZarutskyiWebp"/>
            <h2 class="name title"><span class="surname">Заруцкий</span> Дмитрий Михайлович</h2>
            <p class="position">Заместитель генерального директора по маркетингу и продажам БиоСистемы</p>
          </router-link>
          <div class="department-group one-group">
            <router-link to="/departments/advertising" class="department rounded">Служба технического сервиса
            </router-link>
          </div>
        </div>
        <div class="row">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Абрамов М. Н." :image="AbramovWebp"/>
            <h2 class="name title"><span class="surname">Абрамов</span> Максим Николаевич</h2>
            <p class="position">Финансовый директор</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">Экономический отдел</router-link>
            <router-link to="/departments/advertising" class="department rounded">Финансовый отдел</router-link>
          </div>
        </div>
        <div class="row row-only-department">
          <div class="department-group one-group">
            <router-link to="/departments/advertising" class="department rounded">Отдел комплексных проектов и поставок
            </router-link>
          </div>
        </div>
        <div class="row row-only-department">
          <div class="department-group one-group">
            <router-link to="/departments/advertising" class="department rounded">Бухгалтерия</router-link>
          </div>
        </div>
        <div class="row row-special">
          <router-link to="/users/belinovich" class="card shadow rounded">
            <TheImage alt="Семенов А. А." :image="SemenovZaminWebp"/>
            <h2 class="name title"><span class="surname">Семенов</span> Алексей Александрович</h2>
            <p class="position">Генеральный директор БиоСистемы</p>
          </router-link>
          <div class="department-group">
            <router-link to="/departments/advertising" class="department rounded">ООО "БиоБеби"</router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Нижний Новгород
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Москва</router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Новосибирск</router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Ростов-на-Дону</router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Казань</router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Краснодар</router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Уфа</router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Хабаровск</router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Самара</router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. ТОО «БиоЛайн-Казахстан»
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">Филиал г. Екатеринбург</router-link>
            <router-link to="/departments/advertising" class="department rounded">БиоЛайн-БС (Республика Беларусь)
            </router-link>
            <router-link to="/departments/advertising" class="department rounded">ООО "BLUBIOMEDICAL"</router-link>
          </div>
        </div>
        <div class="row row-only-department">
          <div class="department-group one-group">
            <router-link to="/departments/advertising" class="department rounded">ООО «БИОМЕБЕЛЬ»</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SemenovAV from '@/assets/img/users/semenov.jpg';
import SemenovAVWebp from '@/assets/img/users/semenov.webp';
import Dulaeva from '@/assets/img/users/dulaeva.jpg';
import DulaevaWebp from '@/assets/img/users/dulaeva.webp';
import Dmitrieva from '@/assets/img/users/dmitrieva.jpg';
import DmitrievaWebp from '@/assets/img/users/dmitrieva.webp';
import Solntseva from '@/assets/img/users/solntseva.jpg';
import SolntsevaWebp from '@/assets/img/users/solntseva.webp';
import Evteev from '@/assets/img/users/evteev.jpg';
import EvteevWebp from '@/assets/img/users/evteev.webp';
import Kislov from '@/assets/img/users/kislov.jpg';
import KislovWebp from '@/assets/img/users/kislov.webp';
import Kaukova from '@/assets/img/users/kaukova.jpg';
import KaukovaWebp from '@/assets/img/users/kaukova.webp';
import Kodenuk from '@/assets/img/users/kodenuk.jpg';
import KodenukWebp from '@/assets/img/users/kodenuk.webp';
import Shubaev from '@/assets/img/users/shubaev.jpg';
import ShubaevWebp from '@/assets/img/users/shubaev.webp';
import Guseva from '@/assets/img/users/guseva.jpg';
import GusevaWebp from '@/assets/img/users/guseva.webp';
import Gvozdarev from '@/assets/img/users/gvozdarev.jpg';
import GvozdarevWebp from '@/assets/img/users/gvozdarev.webp';
import Zarutskyi from '@/assets/img/users/zarutskiy.jpg';
import ZarutskyiWebp from '@/assets/img/users/zarutskiy.webp';
import Abramov from '@/assets/img/users/abramov.jpg';
import AbramovWebp from '@/assets/img/users/abramov.webp';
import SemenovZamin from '@/assets/img/users/semenov-zam.jpg';
import SemenovZaminWebp from '@/assets/img/users/semenov-zam.webp';
import TheImage from "@/components/TheImage.vue";
</script>

<style scoped>
.content {
  position: relative;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.content::before {
  content: '';
  display: none;
  position: absolute;
  top: 106px;
  left: 0;
  width: 73%;
  height: calc(100% - 132px);
  border-left: 2px solid var(--blue-light);
  border-top: 2px solid var(--blue-light);
  border-bottom: 2px solid var(--blue-light);
  -webkit-border-radius: 20px 0 0 20px;
  -moz-border-radius: 20px 0 0 20px;
  border-radius: 20px 0 0 20px;
}

.row {
  display: flex;
  position: relative;
  flex-direction: column;
  row-gap: 35px;
  margin-bottom: 70px;

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

.row::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 2px;
  background-color: var(--blue-light);
  display: none;
}

.row.row-inner-one::before {
  left: 153px;
  width: calc(100% - 153px);
}

.row.row-inner-one .card::before {
  display: none;
  content: '';
  position: absolute;
  width: 2px;
  background-color: var(--blue-light);

  @media (min-width: 1920px) {
    left: 106px;
    top: -87px;
    height: 87px;
  }
}

.row:last-child {
  margin-bottom: 0;
}

.row:first-child::before,
.row:last-child::before {
  display: none;
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
    row-gap: 100px;
  }
}

.row.row-head {
  justify-content: center;
  padding-left: 0;
}

.row-only-department {
  justify-content: flex-end;
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

.department-group {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  position: relative;
}

.department-group::before {
  content: '';
  position: absolute;
  display: none;
  top: 0;
  bottom: 0;
  left: -40px;
  margin: auto;
  width: calc(100% + 40px);
  height: calc(100% - 52px);
  background-color: var(--gray-light);
  border-left: 2px solid var(--blue-light);
  border-bottom: 2px solid var(--blue-light);
  border-top: 2px solid var(--blue-light);
  -webkit-border-radius: 20px 0 0 20px;
  -moz-border-radius: 20px 0 0 20px;
  border-radius: 20px 0 0 20px;
}

.row.row-special .department {
  position: relative;
}

.row.row-special .department:nth-child(odd)::before,
.row.row-special .department:nth-child(even)::before {
  display: none;
  content: '';
  position: absolute;
  height: 2px;
  width: 88px;
  background-color: var(--blue-light);
}

.row.row-special .department:nth-child(odd)::before {
  right: -88px;
}

.row.row-special .department:nth-child(even)::before {
  left: -88px;
}

.department-group.one-group::before {
  display: none;
}

.row-special .department-group::before {
  width: 2px;
  height: calc(100% + 73px);
  left: 0;
  right: 0;
  bottom: 27px;
  top: inherit;
}

.department {
  border: 2px solid var(--blue-light);
  background-color: var(--white);
  width: 100%;
  max-width: 436px;
  justify-content: center;
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
    min-height: 56px;
    width: 436px;
    font-size: 14px;
  }
}

.department:hover {
  background-color: var(--blue-light);
}

.card {
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  row-gap: 20px;
  background-color: var(--white);
  padding-bottom: 20px;
  width: 100%;
  max-width: 600px;
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
  flex-direction: column;
  align-items: center;
  color: var(--blue-dark);
  padding-bottom: 20px;
  font-size: 27px;
  border-bottom: 1px solid var(--gray-medium);
  text-align: center;
  width: 100%;

  @media (min-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    font-size: 20px;
    padding-bottom: 0;
  }

  @media (min-width: 1920px) {
    font-size: 22px;
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
  justify-content: center;
  color: var(--gray-dark);

  @media (min-width: 1280px) {
    flex-direction: column;
    text-align: left;
    font-size: 14px;
  }

  @media (min-width: 1920px) {
    font-size: 16px;
  }
}

.row.row-inner::before {
  left: 100px;
  width: 80%;
}

.row.row-above-multiple-employees .card::before {
  content: '';
  position: absolute;
  display: none;
  height: 580px;
  width: 2px;
  top: 100%;
  background-color: var(--blue-light);
}

@media (min-width: 1280px) {
  .content::before {
    display: block;
  }

  .row::before {
    display: block;
  }

  .row.row-special::before {
    margin: inherit;
    top: 90px;
    width: 50%;
  }

  .row.no-departments::before {
    width: 20%;
  }

  .row.row-special .department:nth-child(odd)::before,
  .row.row-special .department:nth-child(even)::before {
    display: block;
  }

  .row.row-special .department:nth-child(odd)::before {
    right: -88px;
  }

  .row.row-special .department:nth-child(even)::before {
    left: -88px;
  }

  .department-group::before {
    display: block;
  }

  .row.row-above-multiple-employees .card::before {
    display: block;
  }

  .row.row-inner-one .card::before {
    display: block;
    height: 87px;
    top: -87px;
    left: 75px;
  }
}

@media (min-width: 1920px) {
  .row.row-special::before {
    top: 106px;
  }

  .row.row-inner::before {
    left: 153px;
  }

  .row.row-above-multiple-employees .card::before {
    height: 608px;
  }


  .row.row-inner-one .card::before {
    left: 106px;
    top: -70px;
    height: 70px;
  }
}
</style>