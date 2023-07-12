import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "news",
    () => {
        const departmentsList = ref([]);

        const departmentsTitles = ref([]);

        const activeDepartment = ref('');

        const categoriesTitles = ref([]);

        const activeCategory = ref('');

        const activeTypesList = ref([]);

        const getInstructions = async () => {
            try {
                const res = await axios.get('http://instructions.trifonov.space/api/instructions/show/all');
                departmentsList.value = res.data;
                departmentsTitles.value = departmentsList.value.map(item => item.title);
                activeDepartment.value = departmentsTitles.value[0];
                categoriesTitles.value = departmentsList.value[0].subcategories.map(item => item.title);
                activeCategory.value = categoriesTitles.value[0];
                activeTypesList.value = departmentsList.value[0].subcategories[0].typesList;
            } catch (e) {
                console.log(e);
            }
        }

        return {

        }
    })