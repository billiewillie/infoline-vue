import axios from "axios";
import {defineStore} from "pinia";
import {ref, shallowRef} from "vue";
import {setDaysEvents} from "@/functions/setDaysEvents";
import {setMonthsEvents} from "@/functions/setMonthsEvents";

export const useRootStore = defineStore(
    "calendar",
    () => {
        const date = new Date();
        const data = ref({});
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
                highlight: 'green',
                dates: [],
            },
            {
                highlight: 'red',
                dates: [],
            },
            {
                highlight: 'blue',
                dates: [],
            }
        ]);

        const attributesIndexPage = ref([]);

        const fullDate = ref([
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()].join('-'));
        const activeDate = ref(fullDate.value);

        const getDates = (item) => {
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
        }

        const getData = async () => {
            try {
                const res = await axios.get('https://calendar.trifonov.space/api/calendar/show/all');
                data.value = res.data;
                countries.value = Object.keys(data.value);
                activeCategory.value = categories.value[3];
                setActiveCountry(countries.value[0]);
                setActiveEvents();
                setIndexPageEvents("Россия");
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

        const setIndexPageEvents = (country) => {
            attributesIndexPage.value = data.value[country].map(item => {
                const getColor = () => {
                    if (item.category === 'Производственный календарь') {
                        return 'red';
                    } else if (item.category === 'Корпоративные мероприятия') {
                        return 'blue';
                    } else {
                        return 'green';
                    }
                }

                const datesOfEventStart = () => {
                    const dateStart = String(new Date(item?.date_start).getDate()).padStart(2, '0');
                    const monthStart = String(new Date(item?.date_start).getMonth()).padStart(2, '0');
                    return [dateStart, monthStart].join('.');
                }

                const datesOfEventEnd = () => {
                    const dateEnd = String(new Date(item?.date_end).getDate()).padStart(2, '0');
                    const monthEnd = String(new Date(item?.date_end).getMonth()).padStart(2, '0');
                    return [dateEnd, monthEnd].join('.');
                }

                const isEqualDates = () => {
                    const date1 = datesOfEventStart();
                    const date2 = datesOfEventEnd();

                    if(date1 === date2) {
                        return `(${datesOfEventStart()}) ${item.title}`;
                    } else {
                        return `(${datesOfEventStart()}-${datesOfEventEnd()}) ${item.title}`
                    }
                }

                return {
                    dates: getDates(item),
                    dot: {
                        color: getColor(),
                    },
                    popover: {
                        label: isEqualDates()
                    }
                }
            })
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
                        .filter(item => item.category === 'Выставки и семинары')
                        .map(getDates)
                ].flat();

                attributes.value[1].dates = [
                    ...data
                        .value[activeCountry.value]
                        .filter(item => item.category === 'Производственный календарь')
                        .map(getDates)
                ].flat();

                attributes.value[2].dates = [
                    ...data
                        .value[activeCountry.value]
                        .filter(item => item.category === 'Корпоративные мероприятия')
                        .map(getDates)
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
                        .map(getDates)
                ].flat();

                attributes.value[1].dates = [
                    ...data
                        .value[activeCountry.value]
                        .filter(item => {
                            if (activeCategory.value.title === 'Производственный календарь') {
                                return item.category === 'Производственный календарь'
                            }
                        })
                        .map(getDates)
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
            attributesIndexPage,
            getData,
            toggleDate,
            toggleMonth,
            toggleCategory,
            setActiveCountry,
        }
    })