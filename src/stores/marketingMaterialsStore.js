import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
  "marketingMaterials",
  () => {
    const materials = ref([]);
    const activeMaterials = ref([]);
    const activeCategory = ref({});

    const getMaterials = async (value = 1) => {
      try {
        const res = await axios.get('https://marketing-materials.trifonov.space/api/marketing-materials/show/all');
        materials.value = res.data;
        setActiveCategory(value);
      } catch (e) {
        console.log(e);
      }
    }

    const getActiveMaterials = (value) => {
      activeMaterials.value = materials.value
        .find(
          item => {
            return item.id === activeCategory.value.id
          }
        ).list;
    }

    const setActiveCategory = (tab) => {
      activeCategory.value = materials.value.find(el => el.id === tab);
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
      materials,
      activeMaterials,
      activeCategory,
      getMaterials,
      deleteMaterial,
      setActiveCategory,
    }
  })