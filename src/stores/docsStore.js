import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
  "docs",
  () => {

    const departments = ref([]);
    let departmentsTitles = ref(['Отдел рекламы', 'Бухгалтерия', 'Отдел персонала', 'Юридический отдел', 'Тендерный отдел', 'Секретариат', 'Отдел логистики', 'Финансовый раздел', 'Охрана труда', 'Отдел внешней и складской логистики', 'Отдел закупок']);
    let activeDepartment = ref({
      id: 1,
      title: 'Отдел рекламы',
    });
    const activeDocs = ref([]);

    const getDocs = async (value = 1) => {
      try {
        const res = await axios.get('https://regulations.trifonov.space/api/regulations/show/all');
        departments.value = res.data;
        activeDepartment.value = departments.value.find(el => el.id === value)
        activeDocs.value = activeDepartment.value.docs;
      } catch (e) {
        console.log(e);
      }
    }

    const setActiveDepartment = (value) => {
      console.log(value)
      activeDepartment.value = departments.value.find(el => el.id === value)
      setActiveDocs(value);
    }

    const setActiveDocs = (tab) => {
      activeDocs.value = departments.value.find(item => item.id === tab).docs;
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