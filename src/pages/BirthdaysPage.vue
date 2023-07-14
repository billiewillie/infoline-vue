<template>
  <div class="basepage">
    <h1 class="title">Дни рождения</h1>
    <TheTabs
        :tabs="months"
        :activeTab="activeMonth"
        @setActiveTab="setActiveMonth"
    />
    <div class="content">
      <div class="month">
        <h2 class="month-title title subtitle">{{ activeMonth }}</h2>
        <div class="list">
          <router-link to="/" class="card rounded shadow" v-for="item in data[activeMonthNumber]">
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
import TheTabs from "@/components/TheTabs.vue";
import {ref} from "vue";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const data = ref([
      [
        {
          "token": "aiofueoiuf8312kfsj",
          "login": "senin",
          "firstname": "Егор",
          "middlename": "Юрьевич",
          "lastname": "Сенин",
          "avatar": "senin",
          "month": 8,
          "day": 10
        },
        {
          "token": "m3o2ijfd82jfn892hfn8431lkm3",
          "login": "kopylova",
          "firstname": "Татьяна",
          "middlename": "Александровна",
          "lastname": "Копылова",
          "avatar": "kopylova.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "nrnv83likajv84ohjvao32t43g",
          "login": "orlova_au",
          "firstname": "Анастасия",
          "middlename": "Юрьевна",
          "lastname": "Орлова",
          "avatar": "orlova_au.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "n9u32h09df2oij12lkfn09824f",
          "login": "dulaeva",
          "firstname": "Оксана",
          "middlename": "Евгеньевна",
          "lastname": "Дулаева",
          "avatar": "dulaeva.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "56hj5j23wgsmi98#fwgfqwe342",
          "login": "dmitrieva_mo",
          "firstname": "Марина",
          "middlename": "Олеговна",
          "lastname": "Дмитриева",
          "avatar": "dmitrieva_mo.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "c3tqb4qym5wynj4g5ya4b",
          "login": "hozyainova",
          "firstname": "Арина",
          "middlename": "Анатольевна",
          "lastname": "Хозяинова",
          "avatar": "hozyainova.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "nbynt654wy3qagas5gws45bg",
          "login": "rotko",
          "firstname": "Валерия",
          "middlename": "Олеговна",
          "lastname": "Ротко",
          "avatar": "rotko.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "h564whjwg4h6w54h6q345g4h",
          "login": "shurupova",
          "firstname": "Валерия",
          "middlename": "Михайловна",
          "lastname": "Шурупова",
          "avatar": "shurupova.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "gw4jm897ls34ategawfws",
          "login": "leshchauskene",
          "firstname": "Елена",
          "middlename": "Николевна",
          "lastname": "Лешчаускене",
          "avatar": "leshchauskene.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "ytj76k7r6kjrag4s5gs5rhs4r",
          "login": "faraizova",
          "firstname": "Ляйсан",
          "middlename": "Ильдаровна",
          "lastname": "Фараизова",
          "avatar": "faraizova.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "gaer4g4ash54ha34ggag4",
          "login": "dmitrieva_ev",
          "firstname": "Елена",
          "middlename": "Витальевна",
          "lastname": "Дмитриева",
          "avatar": "dmitrieva_ev.jpg",
          "month": 8,
          "day": 15
        },
        {
          "token": "894qa3iogfj48aq48fjoj83",
          "login": "artamonov",
          "firstname": "Герман",
          "middlename": "Владимирович",
          "lastname": "Артамонов",
          "avatar": "artamonov.jpg",
          "month": 8,
          "day": 16
        },
        {
          "token": "m120dm192jd8jf3829f",
          "login": "prihodko",
          "firstname": "Олеся",
          "middlename": "Николаевна",
          "lastname": "Приходько",
          "avatar": "prihodko.jpg",
          "month": 8,
          "day": 16
        },
        {
          "token": "fh328fj290jf84398fj",
          "login": "razheva",
          "firstname": "Екатерина",
          "middlename": "Владимировна",
          "lastname": "Ражева",
          "avatar": "razheva.jpg",
          "month": 8,
          "day": 16
        },
        {
          "token": "5w4gw45hsa4agase43g",
          "login": "isakova",
          "firstname": "Олеся",
          "middlename": "Владимировна",
          "lastname": "Исакова",
          "avatar": "isakova.jpg",
          "month": 8,
          "day": 16
        },
        {
          "token": "4g439gjk94eg232f",
          "login": "martynenko",
          "firstname": "Снежана",
          "middlename": "Сергеевна",
          "lastname": "Мартыненко",
          "avatar": "martynenko.jpg",
          "month": 8,
          "day": 16
        },
        {
          "token": "j08934jg89j2f8j1fsedf",
          "login": "mikhailova_dv",
          "firstname": "Диана",
          "middlename": "Вадимовна",
          "lastname": "Михайлова",
          "avatar": "mikhailova_dv.jpg",
          "month": 8,
          "day": 16
        },
        {
          "token": "iwuf8342wuf82ufsf82f82",
          "login": "solntseva",
          "firstname": "Ольга",
          "middlename": "Станиславовна",
          "lastname": "Солнцева",
          "avatar": "solntseva.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "eg4q3yh6w5jkr8jsw45h",
          "login": "kuprova",
          "firstname": "Любовь",
          "middlename": "Андреевна",
          "lastname": "Купрова",
          "avatar": "kuprova.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "4q3gb65hq3f",
          "login": "sazonova",
          "firstname": "Елена",
          "middlename": "Петровна",
          "lastname": "Сазонова",
          "avatar": "sazonova.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "089evjw90vjsse",
          "login": "potemkina",
          "firstname": "Ангелина",
          "middlename": "Денисовна",
          "lastname": "Потёмкина",
          "avatar": "potemkina.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "432qtq3f4qf4q34fq34t",
          "login": "eliseeva",
          "firstname": "Елена",
          "middlename": "Вячеславовна",
          "lastname": "Елисеева",
          "avatar": "eliseeva.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "12olk1po3k0912ek32d1",
          "login": "dyakova",
          "firstname": "Дарья",
          "middlename": "Владимировна",
          "lastname": "Дьякова",
          "avatar": "dyakova.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "i23jt43038jtgiwej",
          "login": "putintseva",
          "firstname": "Людмила",
          "middlename": "Валерьевна",
          "lastname": "Путинцева",
          "avatar": "putintseva.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "89usas9evj8hj298",
          "login": "zhogina",
          "firstname": "Ирина",
          "middlename": "Александровна",
          "lastname": "Жогина",
          "avatar": "zhogina.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "09e90wkev9wv0w",
          "login": "frolova",
          "firstname": "Инна",
          "middlename": "Александровна",
          "lastname": "Фролова",
          "avatar": "frolova.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "jf382fg4387hfgwh8f332",
          "login": "biktimirova",
          "firstname": "Марина",
          "middlename": "Веняминовна",
          "lastname": "Биктимирова",
          "avatar": "biktimirova.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "jf4398gfpaijhf48",
          "login": "vishniakova",
          "firstname": "Мария",
          "middlename": "Андреевна",
          "lastname": "Вишнякова",
          "avatar": "vishniakova.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "8f9jpf98jq8f98324hf",
          "login": "stanishevskaya",
          "firstname": "Виктория",
          "middlename": "Викторовна",
          "lastname": "Станишевская",
          "avatar": "stanishevskaya.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "832jw8ghj98wev",
          "login": "rymareva",
          "firstname": "Наталья",
          "middlename": "Олеговна",
          "lastname": "Рымарева",
          "avatar": "rymareva.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "8ijfi29348fj2891jf",
          "login": "efimova@bioline.ru",
          "firstname": "Ирина",
          "middlename": "Николаевна",
          "lastname": "Ефимова",
          "avatar": "efimova.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "v4w3h5w4h4w5hjw5j",
          "login": "papko",
          "firstname": "Александр",
          "middlename": "Вадимович",
          "lastname": "Папко",
          "avatar": "papko.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "09j439fj0439394jkg90",
          "login": "lushas",
          "firstname": "Артем",
          "middlename": "Сергеевич",
          "lastname": "Лушас",
          "avatar": "lushas.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "mik35mc2lkam3534cie",
          "login": "gusikhina",
          "firstname": "Ольга",
          "middlename": "Игоревна",
          "lastname": "Гусихина",
          "avatar": "gusikhina.jpg",
          "month": 8,
          "day": 17
        },
        {
          "token": "vuij9rea8v7h2oi83f",
          "login": "kislov",
          "firstname": "Павел",
          "middlename": "Владимирович",
          "lastname": "Кислов",
          "avatar": "kislov.jpg",
          "month": 8,
          "day": 21
        },
        {
          "token": "ne8f9whfoih38w2fhlks",
          "login": "gavrilova",
          "firstname": "Ольга",
          "middlename": "Александровна",
          "lastname": "Гаврилова",
          "avatar": "gavrilova.jpg",
          "month": 8,
          "day": 21
        },
        {
          "token": "h37892hf890f89whf8",
          "login": "ipatieva",
          "firstname": "Полина",
          "middlename": "Евгеньевна",
          "lastname": "Ипатьева",
          "avatar": "ipatieva.jpg",
          "month": 8,
          "day": 21
        },
        {
          "token": "hoif328fh82hfhskfjh3482982",
          "login": "pavlov",
          "firstname": "Иван",
          "middlename": "Сергеевич",
          "lastname": "Павлов",
          "avatar": "pavlov.jpg",
          "month": 8,
          "day": 21
        },
        {
          "token": "ghjkgkj3hg5kjh3gkjh32",
          "login": "litvinchuk_us",
          "firstname": "Юлия",
          "middlename": "Спартаковна",
          "lastname": "Литвинчук",
          "avatar": "litvinchuk_us.jpg",
          "month": 8,
          "day": 21
        },
        {
          "token": "43pjh8f9q3ph98fhqp9hf4",
          "login": "blohin@bioline.ru",
          "firstname": "Константин",
          "middlename": "Сергеевич",
          "lastname": "Блохин",
          "avatar": "blohin.jpg",
          "month": 8,
          "day": 21
        },
        {
          "token": "n2982nf892n98n2f2f3",
          "login": "polyakova",
          "firstname": "Юлия",
          "middlename": "Константиновна",
          "lastname": "Полякова",
          "avatar": "polyakova.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "n8493vjeiojr",
          "login": "serova",
          "firstname": "Екатерина",
          "middlename": "Александровна",
          "lastname": "Серова",
          "avatar": "serova.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "nv8jv4098j0vw94jv",
          "login": "pimenov",
          "firstname": "Александр",
          "middlename": "Юрьевич",
          "lastname": "Пименов",
          "avatar": "pimenov.png",
          "month": 8,
          "day": 22
        },
        {
          "token": "fj8324jf893f893298",
          "login": "brovkina",
          "firstname": "Анна",
          "middlename": "Станиславовна",
          "lastname": "Бровкина",
          "avatar": "brovkina.png",
          "month": 8,
          "day": 22
        },
        {
          "token": "3ty453y4rsgf3qatg453weg",
          "login": "begas",
          "firstname": "Ольга",
          "middlename": "Сергеевна",
          "lastname": "Бегас",
          "avatar": "begas.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "d8923f8743029jf2lkjwf93",
          "login": "saarik",
          "firstname": "Ирина",
          "middlename": "Васильевна",
          "lastname": "Саарик",
          "avatar": "saarik.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "jf983wj9fjwa9jf39w2jf",
          "login": "nosova",
          "firstname": "Александра",
          "middlename": "Андреевна",
          "lastname": "Носова",
          "avatar": "nosova.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "fn832fpuihskjf",
          "login": "dolinina",
          "firstname": "Елена",
          "middlename": "Олеговна",
          "lastname": "Долинина",
          "avatar": "dolinina.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "itu30u0349jg",
          "login": "neverova",
          "firstname": "Мария",
          "middlename": "Викторовна",
          "lastname": "Неверова",
          "avatar": "neverova.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "hnf94832f02jf843jf892",
          "login": "hovanskiy",
          "firstname": "Алексей",
          "middlename": "Сергеевич",
          "lastname": "Хованский",
          "avatar": "hovanskiy.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "efiuh289823h4983h",
          "login": "petrova_ad",
          "firstname": "Анастасия",
          "middlename": "Дмитриевна",
          "lastname": "Петрова",
          "avatar": "petrova_ad.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "shcueh29h9f82h983",
          "login": "kosyh",
          "firstname": "Александра",
          "middlename": "Сергеевна",
          "lastname": "Косых",
          "avatar": "kosyh.png",
          "month": 8,
          "day": 22
        },
        {
          "token": "fawoijfi8209fjlkasjf",
          "login": "vasilevskaya",
          "firstname": "Елена",
          "middlename": "Владимировна",
          "lastname": "Василевская",
          "avatar": "vasilevskaya.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "h83hp298hf928hf3p982",
          "login": "belskaya",
          "firstname": "Татьяна",
          "middlename": "Викторовна",
          "lastname": "Бельская",
          "avatar": "belskaya.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "u24hiu2h490821hr",
          "login": "fedosova",
          "firstname": "Елена",
          "middlename": "Сергеевна",
          "lastname": "Федосова",
          "avatar": "fedosova.jpg",
          "month": 8,
          "day": 22
        },
        {
          "token": "uhijhlkjbrl2378raf",
          "login": "usova",
          "firstname": "Наталья",
          "middlename": "Алексеевна",
          "lastname": "Усова",
          "avatar": "usova.png",
          "month": 8,
          "day": 22
        },
        {
          "token": "uvB5Fnc0xm7eJsbR5U2VX8",
          "login": "trifonov",
          "firstname": "Артем",
          "middlename": "Петрович",
          "lastname": "Трифонов",
          "avatar": "trifonov",
          "month": 8,
          "day": 23
        },
        {
          "token": "nfcij0389j2jf091fhkjfhskjfs",
          "login": "sorokina",
          "firstname": "Алина",
          "middlename": "Юрьевна",
          "lastname": "Сорокина",
          "avatar": "sorokina.jpg",
          "month": 8,
          "day": 24
        },
        {
          "token": "kjerf8923jfij89f23jf",
          "login": "sokolova",
          "firstname": "Анна",
          "middlename": "Сергеевна",
          "lastname": "Соколова",
          "avatar": "sokolova.jpg",
          "month": 8,
          "day": 24
        },
        {
          "token": "h23jh4782hkj2lkjh",
          "login": "amoyan",
          "firstname": "Хане",
          "middlename": "Мамеевна",
          "lastname": "Амоян",
          "avatar": "amoyam.jpg",
          "month": 8,
          "day": 24
        },
        {
          "token": "neiouah89ehahv9a8",
          "login": "savchuk",
          "firstname": "Кристина",
          "middlename": "Эдуардовна",
          "lastname": "Савчук",
          "avatar": "savchuk.jpeg",
          "month": 8,
          "day": 25
        },
        {
          "token": "euwhf7892h3f8hsfhsdkj",
          "login": "sokolova_uv",
          "firstname": "Юлия",
          "middlename": "Вячеславовна",
          "lastname": "Соколова",
          "avatar": "sokolova_uv.jpg",
          "month": 8,
          "day": 25
        },
        {
          "token": "jh2149328hf809wh3fjksf",
          "login": "kajukova",
          "firstname": "Людмила",
          "middlename": "Леонидовна",
          "lastname": "Каюкова",
          "avatar": "kajukova.jpg",
          "month": 8,
          "day": 25
        },
        {
          "token": "fj3h2lkhf8hw98fh98wf",
          "login": "kodenuk",
          "firstname": "Владимир",
          "middlename": "Анатольевич",
          "lastname": "Коденюк",
          "avatar": "kodenuk.jpg",
          "month": 8,
          "day": 25
        }
      ],
      [
        {
          "token": "2414242gserg",
          "login": "rodionova",
          "firstname": "Евгения",
          "middlename": "Павловна",
          "lastname": "Родионова",
          "avatar": "rodionova",
          "month": 11,
          "day": 21
        }
      ],
      [
        {
          "token": "h49f38folwjw832fj4li38fj",
          "login": "lapina",
          "firstname": "Анастасия",
          "middlename": "Эдуардовна",
          "lastname": "Лапина",
          "avatar": "lapina.jpg",
          "month": 11,
          "day": 15
        },
        {
          "token": "2414242gserg",
          "login": "rodionova",
          "firstname": "Евгения",
          "middlename": "Павловна",
          "lastname": "Родионова",
          "avatar": "rodionova",
          "month": 11,
          "day": 21
        },
        {
          "token": "h49f38folwjw832fj4li38fj",
          "login": "lapina",
          "firstname": "Анастасия",
          "middlename": "Эдуардовна",
          "lastname": "Лапина",
          "avatar": "lapina.jpg",
          "month": 11,
          "day": 15
        },
        {
          "token": "2414242gserg",
          "login": "rodionova",
          "firstname": "Евгения",
          "middlename": "Павловна",
          "lastname": "Родионова",
          "avatar": "rodionova",
          "month": 11,
          "day": 21
        }
      ],
      [
        {
          "token": "eiwup324098215ifw",
          "login": "semenov",
          "firstname": "Александр",
          "middlename": "Владимирович",
          "lastname": "Семенов",
          "avatar": "semenov",
          "month": 7,
          "day": 11
        },
        {
          "token": "erg543y62gdg",
          "login": "apkhanova",
          "firstname": "Алина",
          "middlename": "Александровна",
          "lastname": "Апханова",
          "avatar": "apkhanova",
          "month": 7,
          "day": 11
        }
      ],
      [
        {
          "token": "etwe4t21452341f",
          "login": "belinovich",
          "firstname": "Вадим",
          "middlename": "Игоревич",
          "lastname": "Белинович",
          "avatar": "belinovich.webp",
          "month": 12,
          "day": 8
        },
        {
          "token": "resg4gh54ey3",
          "login": "kulakova_an",
          "firstname": "Анна",
          "middlename": "Юрьевна",
          "lastname": "Кулакова",
          "avatar": "kulakova",
          "month": 12,
          "day": 12
        }
      ],
      [
        {
          "token": "345yt54ywq4g",
          "login": "izmaylova",
          "firstname": "Любовь",
          "middlename": "Владимировна",
          "lastname": "Измайлова",
          "avatar": "izmaylova",
          "month": 6,
          "day": 11
        }
      ],
      [
        {
          "token": "eiwup324098215ifw",
          "login": "semenov",
          "firstname": "Александр",
          "middlename": "Владимирович",
          "lastname": "Семенов",
          "avatar": "semenov",
          "month": 7,
          "day": 11
        },
        {
          "token": "erg543y62gdg",
          "login": "apkhanova",
          "firstname": "Алина",
          "middlename": "Александровна",
          "lastname": "Апханова",
          "avatar": "apkhanova",
          "month": 7,
          "day": 11
        }
      ],
      [
        {
          "token": "uvB5Fnc0xm7eJsbR5U2VX8",
          "login": "trifonov",
          "firstname": "Артем",
          "middlename": "Петрович",
          "lastname": "Трифонов",
          "avatar": "trifonov",
          "month": 8,
          "day": 23
        },
        {
          "token": "nfcij0389j2jf091fhkjfhskjfs",
          "login": "sorokina",
          "firstname": "Алина",
          "middlename": "Юрьевна",
          "lastname": "Сорокина",
          "avatar": "sorokina.jpg",
          "month": 8,
          "day": 24
        },
        {
          "token": "kjerf8923jfij89f23jf",
          "login": "sokolova",
          "firstname": "Анна",
          "middlename": "Сергеевна",
          "lastname": "Соколова",
          "avatar": "sokolova.jpg",
          "month": 8,
          "day": 24
        },
        {
          "token": "h23jh4782hkj2lkjh",
          "login": "amoyan",
          "firstname": "Хане",
          "middlename": "Мамеевна",
          "lastname": "Амоян",
          "avatar": "amoyam.jpg",
          "month": 8,
          "day": 24
        },
        {
          "token": "neiouah89ehahv9a8",
          "login": "savchuk",
          "firstname": "Кристина",
          "middlename": "Эдуардовна",
          "lastname": "Савчук",
          "avatar": "savchuk.jpeg",
          "month": 8,
          "day": 25
        },
        {
          "token": "euwhf7892h3f8hsfhsdkj",
          "login": "sokolova_uv",
          "firstname": "Юлия",
          "middlename": "Вячеславовна",
          "lastname": "Соколова",
          "avatar": "sokolova_uv.jpg",
          "month": 8,
          "day": 25
        },
        {
          "token": "jh2149328hf809wh3fjksf",
          "login": "kajukova",
          "firstname": "Людмила",
          "middlename": "Леонидовна",
          "lastname": "Каюкова",
          "avatar": "kajukova.jpg",
          "month": 8,
          "day": 25
        },
        {
          "token": "fj3h2lkhf8hw98fh98wf",
          "login": "kodenuk",
          "firstname": "Владимир",
          "middlename": "Анатольевич",
          "lastname": "Коденюк",
          "avatar": "kodenuk.jpg",
          "month": 8,
          "day": 25
        }
      ],
      [
        {
          "token": "h49f38folwjw832fj4li38fj",
          "login": "lapina",
          "firstname": "Анастасия",
          "middlename": "Эдуардовна",
          "lastname": "Лапина",
          "avatar": "lapina.jpg",
          "month": 11,
          "day": 15
        },
        {
          "token": "2414242gserg",
          "login": "rodionova",
          "firstname": "Евгения",
          "middlename": "Павловна",
          "lastname": "Родионова",
          "avatar": "rodionova",
          "month": 11,
          "day": 21
        }
      ],
      [
        {
          "token": "8c43hof4iuh3f8h38fn483",
          "login": "lazareva",
          "firstname": "Марина",
          "middlename": "Руслановна",
          "lastname": "Лазарева",
          "avatar": "lazareva",
          "month": 10,
          "day": 11
        },
        {
          "token": "8c43hof4iuh3f8h38fn483",
          "login": "lazareva",
          "firstname": "Марина",
          "middlename": "Руслановна",
          "lastname": "Лазарева",
          "avatar": "lazareva",
          "month": 10,
          "day": 11
        },
        {
          "token": "8c43hof4iuh3f8h38fn483",
          "login": "lazareva",
          "firstname": "Марина",
          "middlename": "Руслановна",
          "lastname": "Лазарева",
          "avatar": "lazareva",
          "month": 10,
          "day": 11
        },
        {
          "token": "8c43hof4iuh3f8h38fn483",
          "login": "lazareva",
          "firstname": "Марина",
          "middlename": "Руслановна",
          "lastname": "Лазарева",
          "avatar": "lazareva",
          "month": 10,
          "day": 11
        }
      ],
      [
        {
          "token": "2414242gserg",
          "login": "rodionova",
          "firstname": "Евгения",
          "middlename": "Павловна",
          "lastname": "Родионова",
          "avatar": "rodionova",
          "month": 11,
          "day": 21
        }
      ],
      [
        {
          "token": "etwe4t21452341f",
          "login": "belinovich",
          "firstname": "Вадим",
          "middlename": "Игоревич",
          "lastname": "Белинович",
          "avatar": "belinovich.webp",
          "month": 12,
          "day": 8
        },
        {
          "token": "etwe4t21452341f",
          "login": "belinovich",
          "firstname": "Вадим",
          "middlename": "Игоревич",
          "lastname": "Белинович",
          "avatar": "belinovich.webp",
          "month": 12,
          "day": 8
        },
        {
          "token": "resg4gh54ey3",
          "login": "kulakova_an",
          "firstname": "Анна",
          "middlename": "Юрьевна",
          "lastname": "Кулакова",
          "avatar": "kulakova",
          "month": 12,
          "day": 12
        }
      ]
    ]
)

const date = new Date();
const activeMonth = ref(months[date.getMonth()]);
const activeMonthNumber = ref(date.getMonth())

const setActiveMonth = (month) => {
  activeMonth.value = month;
  activeMonthNumber.value = months.indexOf(month);
};
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
  display: grid;
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