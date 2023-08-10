import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "instructions",
    () => {
        const departmentsList = ref([]);

        const departmentsTitles = ref([]);

        const activeDepartment = ref('');

        const categoriesTitles = ref([]);

        const activeCategory = ref('');

        const activeTypesList = ref([]);

        const getInstructions = async () => {
            try {
                const res = await axios.get('https://instructions.trifonov.space/api/instructions/show/all');
                departmentsList.value = res.data;
                departmentsTitles.value = departmentsList.value.map(item => item.title);
                setActiveDepartment(departmentsTitles.value[0]);
            } catch (e) {
                console.log(e);
            }
        }

        const setActiveDepartment = (tab) => {
            activeDepartment.value = tab;
            categoriesTitles.value = departmentsList
                .value
                .filter(item => item.title === tab)[0]
                .categoriesList
                .map(item => item.category);
            setActiveCategory(categoriesTitles.value[0]);
        }

        const setActiveCategory = (category) => {
            activeCategory.value = category;
            setActiveTypesList();
        }

        const setActiveTypesList = () => {
            activeTypesList.value = departmentsList.value
                .filter(item => item.title === activeDepartment.value)[0]
                .categoriesList
                .filter(item => item.category === activeCategory.value)[0]
                .typesList;
        }

        return {
            departmentsList,
            departmentsTitles,
            activeDepartment,
            categoriesTitles,
            activeCategory,
            activeTypesList,
            getInstructions,
            setActiveDepartment,
            setActiveCategory
        }
    })