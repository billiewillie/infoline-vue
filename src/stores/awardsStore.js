import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import AboutDanilova from "@/assets/img/about-danilova.webp";
import award from "@/assets/img/award.png";

export const useRootStore = defineStore(
    "awardsStore",
    () => {

        const menu = ref([
            {
                title: 'Дебют года',
                people: [
                    {
                        id: 1,
                        name: "Ivan",
                        surname: "Ivanov",
                        position: "specialist specialistspecialist specialistspecialist specialist",
                        city: "Санкт-Петербург",
                        image: AboutDanilova
                    },
                    {
                        id: 2,
                        name: "Петр",
                        surname: "Петров",
                        position: "специалист чего-то",
                        city: "Санкт-Петербург",
                        image: AboutDanilova
                    }
                ],
                departments: [],
                statueImage: award,
                innerMenu: []
            },
            {
                title: 'Специалист года',
                people: [],
                departments: [],
                statueImage: "",
                innerMenu: [
                    {
                        title: 'Сотрудник года',
                        subtitle: 'Складская логистика',
                        statueImage: award,
                        people: [
                            {
                                id: 21,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 22,
                                name: "Станислав",
                                surname: "Лиджи",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Сотрудник года',
                        subtitle: 'ООО "БиоЛайн"',
                        statueImage: award,
                        people: [
                            {
                                id: 212,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 222,
                                name: "Станислав",
                                surname: "Лиджи",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Логист года',
                        subtitle: 'Внутрення и внешняя логистика',
                        statueImage: award,
                        people: [
                            {
                                id: 243,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 227,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Инженер года',
                        subtitle: 'Технический сервис',
                        statueImage: award,
                        people: [
                            {
                                id: 2431,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 2271,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Бухгалтер/экономист/финансист года',
                        subtitle: 'Бухгалтерия и финансы',
                        statueImage: award,
                        people: [
                            {
                                id: 2471,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 22271,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Специалист года',
                        subtitle: 'Реклама и продвижение',
                        statueImage: award,
                        people: [
                            {
                                id: 24301,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 20271,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Специалист года',
                        subtitle: 'Информационные технологии',
                        statueImage: award,
                        people: [
                            {
                                id: 24631,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 26271,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Специалист года',
                        subtitle: 'Маркетинг и продажи. БЛ и БС отдельно.',
                        statueImage: award,
                        people: [
                            {
                                id: 264631,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 262791,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Менеджер по продажам года',
                        subtitle: 'Маркетинг и продажи. БЛ и БС отдельно.',
                        statueImage: award,
                        people: [
                            {
                                id: 2674631,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 2612791,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Ведущий специалист года',
                        subtitle: 'Маркетинг и продажи. БЛ и БС отдельно.',
                        statueImage: award,
                        people: [
                            {
                                id: 2604631,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 2862791,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Руководитель года',
                        subtitle: 'Сопровождение бизнеса',
                        statueImage: award,
                        people: [
                            {
                                id: 265631,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 212791,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                    {
                        title: 'Руководитель года',
                        subtitle: 'Маркетинг и продажи',
                        statueImage: award,
                        people: [
                            {
                                id: 264631,
                                name: "Олег",
                                surname: "Горяев",
                                position: "Ведущий специалист отдел микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 262795,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист ний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            }
                        ],
                        departments: [],
                    },
                ]
            },
            {
                title: 'Проект года',
                people: [],
                departments: [],
                statueImage: "",
                innerMenu: [
                    {
                        title: 'Сопровождение бизнеса',
                        subtitle: '',
                        departments: [],
                        statueImage: award,
                        people: [
                            {
                                id: 31,
                                name: "Станислав",
                                surname: "Лиджи-Горяев",
                                position: "Ведущий специалист отдел оптической микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 32,
                                name: "Станислав",
                                surname: "Лиджи-Горяев",
                                position: "Ведущий специалист отдел оптической микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                        ],
                    },
                    {
                        title: 'Маркетинг и продажи',
                        subtitle: '',
                        departments: [],
                        statueImage: award,
                        people: [
                            {
                                id: 331,
                                name: "Петр",
                                surname: "Петров",
                                position: "специалист отдел оптической микроскопии для научных исследований",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                            {
                                id: 332,
                                name: "Станислав",
                                surname: "Короваев",
                                position: "Ведущий специалист отдел оптичваний",
                                city: "Санкт-Петербург",
                                image: AboutDanilova
                            },
                        ],
                    },
                ]
            },
            {
                title: 'Команда года',
                people: [],
                departments: [],
                statueImage: "",
                innerMenu: [
                    {
                        title: 'Сопровождение бизнеса',
                        subtitle: '"Поддерживающий" отдел',
                        statueImage: award,
                        people: [],
                        departments: [
                            "Отдел логистики",
                            "Отдел внешней и складской логистики",
                            "Отдел информационных технологий",
                            "Отдел регистрации медицинских изделий",
                            "Отдел технического сервиса",
                            'Объединенная бухгалтерия ООО "БиоЛайн" и ООО "БиоСистемы"',
                        ]
                    },
                    {
                        title: 'Маркетинг и продажи',
                        subtitle: 'Профильный отдел маркетинга и продаж',
                        statueImage: award,
                        people: [],
                        departments: [
                            "Отдел диагностики инфекционных заболеваний",
                            "Отдел молекулярной диагностики в патоморфологии",
                            "Отдел продаж расходных материалов",
                            "Отдел общелабораторного оборудования",
                        ]
                    },
                ]
            },
            {
                title: 'Менеджер года',
                statueImage: award,
                innerMenu: [],
                people: [
                    {
                        id: 51,
                        name: "Станислав",
                        surname: "Лиджи-Горяев",
                        position: "Ведущий специалист отдел оптической микроскопии для научных исследований",
                        city: "Санкт-Петербург",
                        image: AboutDanilova
                    },
                    {
                        id: 52,
                        name: "Станислав",
                        surname: "Лиджи-Горяев",
                        position: "Ведущий специалист отдел оптической микроскопии для научных исследований",
                        city: "Санкт-Петербург",
                        image: AboutDanilova
                    },
                    {
                        id: 53,
                        name: "Станислав",
                        surname: "Лиджи-Горяев",
                        position: "Ведущий специалист отдел оптической микроскопии для научных исследований",
                        city: "Санкт-Петербург",
                        image: AboutDanilova
                    }
                ],
                departments: []
            }
        ]);

        const getData = async (id) => {
            try {
                const res = await axios.get(``);
                menu.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        return {
            menu,
            getData
        }
    })