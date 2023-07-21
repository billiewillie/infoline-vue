import {defineStore} from "pinia";
import {ref, shallowRef} from "vue";
import axios from "axios";
import {setDaysEvents} from "@/functions/setDaysEvents";
import {setMonthsEvents} from "@/functions/setMonthsEvents";

export const useRootStore = defineStore(
    "calendar",
    () => {
        const date = new Date();
        const data = ref({
            "Россия": [
                {
                    "id": 1,
                    "title": "Здравоохранение - TIHE 2023 руддщ вавыа ва ыаы выа",
                    "url": "/news/nurses-day-2023",
                    "description": "13-15 апреля группа компаний «БиоЛайн» примет участие в ключевом событии для медицинского сообщества Узбекистана – международной выставке TIHE-2023.\r\n</p>\r\n<p>\r\nМероприятие является не только демонстрационной платформой, но и включает в себя обширную научно-практическую программу с участием ведущих специалистов, посвященную современным технологиям в Здравоохранении.",
                    "date_start": "2023-6-5",
                    "date_end": "2023-6-6",
                    "time_start": "10",
                    "time_end": "19",
                    "day": 2,
                    "month": 6,
                    "category": "Корпоративные мероприятия",
                    "city": "Москва",
                    "timetable": [
                        {
                            "date": "2023-6-5",
                            "time_start": "10:00",
                            "time_end": "12:00"
                        },
                        {
                            "date": "2023-6-6",
                            "time_start": "11:00",
                            "time_end": "14:00"
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "День России выаыв выавыа выав ыаываы вавыа",
                    "url": "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BD%D1%8C_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8",
                    "description": "Праздник День России",
                    "date_start": "2023-6-12",
                    "date_end": "2023-6-12",
                    "time_start": null,
                    "time_end": null,
                    "day": 12,
                    "month": 6,
                    "category": "Производственный календарь",
                    "city": null,
                    "timetable": [
                        {
                            "date": "2023-6-12",
                            "time_start": "10:00",
                            "time_end": "12:00"
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Здравоохранение - TIHE 2024",
                    "url": "https://bioline.ru/news/nurses-day-2023",
                    "description": "«БиоЛайн» примет участие в ключевом событии для медицинского сообщества Узбекистана – международной выставке TIHE-2023.\r\n</p>\r\n<p>\r\nМероприятие является не только демонстрационной платформой, но и включает в себя обширную научно-практическую программу с участием ведущих специалистов, посвященную современным технологиям в Здравоохранении.",
                    "date_start": "2023-07-05",
                    "date_end": "2023-07-06",
                    "time_start": 12,
                    "time_end": 14,
                    "day": 2,
                    "month": 6,
                    "category": "Выставки и семинары",
                    "city": "Санкт-Петербург",
                    "timetable": [
                        {
                            "date": "2023-07-05",
                            "time_start": "12:00",
                            "time_end": "14:00"
                        },
                        {
                            "date": "2023-07-06",
                            "time_start": "13:00",
                            "time_end": "15:00"
                        }
                    ]
                },
            ],
            "Казахстан": [],
            "Узбекистан": [],
            "Беларусь": [],
        });
        const countries = ref([]);
        const categories = shallowRef([
            {
                title: 'Производственный календарь'
            },
            {
                title: 'Корпоративные мероприятия'
            },
            {
                title: 'Выставки и семинары'
            },
            {
                title: 'Все события'
            }
        ]);
        const activeCategory = ref({});
        const activeCountry = ref('');
        const dayEvents = ref([]);
        const monthEvents = ref([]);
        const attributes = ref([
            {
                highlight: 'blue',
                dates: [],
            },
            {
                highlight: 'red',
                dates: [],
            }
        ]);
        const fullDate = ref([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
        const activeDate = ref(fullDate.value);

        const getData = async () => {
            try {
                const res = await axios.get('http://calendar.trifonov.space/api/calendar/show/all');
                data.value = res.data;
                countries.value = Object.keys(data.value);
                activeCategory.value = categories.value[3];
                setActiveCountry(countries.value[0]);
                setActiveEvents();
            } catch (e) {
                console.log(e);
            }
        }

        const toggleDate = (value) => {
            activeDate.value = value;
            dayEvents.value = data
                .value[activeCountry.value]
                .filter(item => setDaysEvents(item.date_start, item.date_end, activeDate.value));
        }

        const toggleMonth = (result) => {
            activeDate.value = result;
            setActiveEvents();
        }

        const setActiveCountry = (country) => {
            activeCountry.value = country;
            setActiveEvents();
        }

        const setActiveEvents = () => {
            if (activeCategory.value.title === "Все события") {

                dayEvents.value = data
                    .value[activeCountry.value]
                    .filter(item => setDaysEvents(item.date_start, item.date_end, activeDate.value));

                monthEvents.value = data
                    .value[activeCountry.value]
                    .filter(item => setMonthsEvents(item.date_start, item.date_end, activeDate.value));

                attributes.value[0].dates = [
                    new Date(),
                    ...data
                        .value[activeCountry.value]
                        .filter(item => item.category !== 'Производственный календарь')
                        .map(item => {
                            if (item.date_start !== item.date_end) {
                                const dateStart = new Date(item.date_start);
                                const dateEnd = new Date(item.date_end);
                                const dates = [];

                                while (dateStart <= dateEnd) {
                                    dates.push(new Date(dateStart));
                                    dateStart.setDate(dateStart.getDate() + 1);
                                }
                                return dates;
                            } else {
                                return new Date(item.date_start);
                            }
                        })
                ].flat();

                attributes.value[1].dates = [
                    ...data
                        .value[activeCountry.value]
                        .filter(item => item.category === 'Производственный календарь')
                        .map(item => {
                            if (item.date_start !== item.date_end) {
                                const dateStart = new Date(item.date_start);
                                const dateEnd = new Date(item.date_end);
                                const dates = [];

                                while (dateStart <= dateEnd) {
                                    dates.push(new Date(dateStart));
                                    dateStart.setDate(dateStart.getDate() + 1);
                                }
                                return dates;
                            } else {
                                return new Date(item.date_start);
                            }
                        })
                ].flat();

            } else {
                dayEvents.value = data
                    .value[activeCountry.value]
                    .filter(item => item.category === activeCategory.value.title)
                    .filter(item => setDaysEvents(item.date_start, item.date_end, activeDate.value));

                monthEvents.value = data
                    .value[activeCountry.value]
                    .filter(item => item.category === activeCategory.value.title)
                    .filter(item => setMonthsEvents(item.date_start, item.date_end, activeDate.value));

                attributes.value[0].dates = [
                    new Date(),
                    ...data
                        .value[activeCountry.value]
                        .filter(item => {
                            if (activeCategory.value.title === 'Корпоративные мероприятия') {
                                return item.category === 'Корпоративные мероприятия'
                            } else if (activeCategory.value.title === 'Выставки и семинары') {
                                return item.category === 'Выставки и семинары'
                            }
                        })
                        .map(item => {
                            if (item.date_start !== item.date_end) {
                                const dateStart = new Date(item.date_start);
                                const dateEnd = new Date(item.date_end);
                                const dates = [];

                                while (dateStart <= dateEnd) {
                                    dates.push(new Date(dateStart));
                                    dateStart.setDate(dateStart.getDate() + 1);
                                }
                                return dates;
                            } else {
                                return new Date(item.date_start);
                            }
                        })
                ].flat();

                attributes.value[1].dates = [
                    ...data
                        .value[activeCountry.value]
                        .filter(item => {
                            if (activeCategory.value.title === 'Производственный календарь') {
                                return item.category === 'Производственный календарь'
                            }
                        })
                        .map(item => {
                            if (item.date_start !== item.date_end) {
                                const dateStart = new Date(item.date_start);
                                const dateEnd = new Date(item.date_end);
                                const dates = [];

                                while (dateStart <= dateEnd) {
                                    dates.push(new Date(dateStart));
                                    dateStart.setDate(dateStart.getDate() + 1);
                                }
                                return dates;
                            } else {
                                return new Date(item.date_start);
                            }
                        })
                ].flat();
            }
        }

        const toggleCategory = (category) => {
            activeCategory.value = category;
            setActiveEvents();
        }

        return {
            data,
            dayEvents,
            countries,
            attributes,
            categories,
            activeDate,
            monthEvents,
            activeCountry,
            activeCategory,
            getData,
            toggleDate,
            toggleMonth,
            toggleCategory,
            setActiveCountry,
        }
    })