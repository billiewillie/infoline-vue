import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "docs",
    () => {

        const departments = ref([
            {
                name: 'Отдел рекламы',
                docs: [
                    {
                        id: 1,
                        name: 'Акт с перевозчиком - повреждение груза',
                        ext: 'doc',
                        link: 'https://infoline.bioline.ru/docs/1-1.pdf',
                    },
                    {
                        id: 2,
                        name: 'БЛ + БС Комбинированный Логотип (ENG)',
                        ext: 'jpg',
                        link: 'https://infoline.bioline.ru/docs/1-1.jpg',
                    },
                    {
                        id: 3,
                        name: 'БЛ + БС Комбинированный Логотип (RU)',
                        ext: 'jpg',
                        link: 'https://infoline.bioline.ru/docs/1-1.jpg',
                    },
                    {
                        id: 4,
                        name: 'БЛ Логотип (ENG)',
                        ext: 'jpg',
                        link: 'https://infoline.bioline.ru/docs/1-1.jpg',
                    },
                    {
                        id: 5,
                        name: 'БЛ Логотип (RU)',
                        ext: 'jpg',
                        link: 'https://infoline.bioline.ru/docs/1-1.jpg',
                    },
                ]
            },
            {
                name: 'Бухгалтерия',
                docs: [
                    {
                        id: 1,
                        name: 'файл 1',
                        ext: 'mp3',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл 2',
                        ext: 'mp3',
                        link: '/',
                    }
                ]
            },
            {
                name: 'Отдел персноала',
                docs: [
                    {
                        id: 1,
                        name: 'файл ИТ отделИТ отдел 1',
                        ext: 'pdf',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл ИТ отдел 2',
                        ext: 'pdf',
                        link: '/',
                    },
                    {
                        id: 3,
                        name: 'файл ИТ отделИТ отдел 3',
                        ext: 'pdf',
                        link: '/',
                    },
                ]
            },
            {
                name: 'Юридический отдел',
                docs: [
                    {
                        id: 1,
                        name: 'файл 1',
                        ext: 'mp3',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл 2',
                        ext: 'mp3',
                        link: '/',
                    }
                ]
            },
            {
                name: 'Тендерный отдел',
                docs: [
                    {
                        id: 1,
                        name: 'файл 1',
                        ext: 'mp3',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл 2',
                        ext: 'mp3',
                        link: '/',
                    }
                ]
            },
            {
                name: 'Секретариат',
                docs: [
                    {
                        id: 1,
                        name: 'файл 1',
                        ext: 'mp3',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл 2',
                        ext: 'mp3',
                        link: '/',
                    }
                ]
            },
            {
                name: 'Отдел логистики',
                docs: [
                    {
                        id: 1,
                        name: 'файл 1',
                        ext: 'mp3',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл 2',
                        ext: 'mp3',
                        link: '/',
                    }
                ]
            },
            {
                name: 'Финансовый раздел',
                docs: [
                    {
                        id: 1,
                        name: 'файл 1',
                        ext: 'mp3',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл 2',
                        ext: 'mp3',
                        link: '/',
                    }
                ]
            },
            {
                name: 'Охрана труда',
                docs: [
                    {
                        id: 1,
                        name: 'файл 1',
                        ext: 'mp3',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл 2',
                        ext: 'mp3',
                        link: '/',
                    }
                ]
            },
            {
                name: 'Отдел внешней и складской логистики',
                docs: [
                    {
                        id: 1,
                        name: 'файл 1',
                        ext: 'mp3',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл 2',
                        ext: 'mp3',
                        link: '/',
                    }
                ]
            },
            {
                name: 'Отдел закупок',
                docs: [
                    {
                        id: 1,
                        name: 'файл 1',
                        ext: 'mp3',
                        link: '/',
                    },
                    {
                        id: 2,
                        name: 'файл 2',
                        ext: 'mp3',
                        link: '/',
                    }
                ]
            }
        ]);
        let departmentsTitles = ref(['Отдел рекламы', 'Бухгалтерия', 'Отдел персонала', 'Юридический отдел', 'Тендерный отдел', 'Секретариат', 'Отдел логистики', 'Финансовый раздел', 'Охрана труда', 'Отдел внешней и складской логистики', 'Отдел закупок']);
        let activeDepartment = ref('');
        const activeDocs = ref([]);

        const getDocs = async () => {
            try {
                const res = await axios.get('https://regulations.trifonov.space/api/regulations/show/all');
                departments.value = res.data;
                activeDepartment.value = departments.value[0].name;
                activeDocs.value = departments.value[0].docs;
            } catch (e) {
                console.log(e);
            }
        }

        const setActiveDepartment = (tab) => {
            activeDepartment.value = tab;
            setActiveDocs(tab);
        }

        const setActiveDocs = (tab) => {
            activeDocs.value = departments.value.filter(item => item.name === tab)[0].docs;
        }


        return {
            departments,
            departmentsTitles,
            activeDepartment,
            activeDocs,
            getDocs,
            setActiveDepartment
        }
    })