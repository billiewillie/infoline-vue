import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "docs",
    () => {

        const departments = ref([]);
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