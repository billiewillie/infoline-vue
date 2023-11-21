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
                res.data.forEach(item => {
                    if (!categories.value.includes(item.title)) {
                        categories.value.push(item.title)
                    }
                });
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
            activeCategory.value = tab;
            getActiveMaterials();
        }

        const deleteMaterial = async (id) => {
            try {
                console.log('delete material')
                // await axios.delete(`https://marketing-materials.trifonov.space/api/marketing-materials/admin/material/${id}`);
                // await getMaterials();
            } catch (e) {
                console.log(e);
            }
        }

        return {
            activeMaterials,
            categories,
            activeCategory,
            getMaterials,
            deleteMaterial,
            setActiveCategory,
        }
    })