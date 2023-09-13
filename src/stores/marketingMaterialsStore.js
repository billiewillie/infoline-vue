import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "marketingMaterials",
    () => {
        const materials = ref([]);
        const activeMaterials = ref([]);
        const categories = ref([]);
        const activeCategory = ref();

        const getMaterials = async () => {
            try {
                const res = await axios.get('https://marketing-materials.trifonov.space/api/marketing-materials/show/all');
                materials.value = res.data;
                res.data.forEach(item => categories.value.push(item.title));
                activeCategory.value = categories.value[0];
                getActiveMaterials();
            } catch (e) {
                console.log(e);
            }
        }

        const getActiveMaterials = () => {
            activeMaterials.value = materials.value.filter(item => item.title === activeCategory.value)[0].list;
        }

        const setActiveCategory = (tab) => {
            console.log(tab)
            activeCategory.value = tab;
            getActiveMaterials();
        }

        return {
            activeMaterials,
            categories,
            activeCategory,
            getMaterials,
            setActiveCategory
        }
    })