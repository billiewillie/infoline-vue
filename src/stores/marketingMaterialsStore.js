import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "marketingMaterials",
    () => {
        const materials = ref([]);
        const activeMaterials = ref([]);
        const categories = ref(['Проточная цитометрия', 'Патоморфология', 'FISH', 'Научные исследования', 'ОЛО', 'Взятие проб', 'Штрихкодирование', 'Медицинское оборудование', 'Материнство и детство']);
        const activeCategory = ref(categories.value[0]);

        const getMaterials = async () => {
            try {
                const res = await axios
                    .get('https://marketing-materials.trifonov.space/api/marketing-materials/show/all');
                materials.value = res.data;
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