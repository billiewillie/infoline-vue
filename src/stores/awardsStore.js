import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "awardsStore",
    () => {

        const menu = ref([]);
        const activeMenu = ref({});
        const openAsideMenu = ref('');

        const getData = async () => {
            try {
                const res = await axios.get(`https://trifonov.space/api/show/all`);
                menu.value = res.data;
                activeMenu.value = menu.value[0];
                openAsideMenu.value = menu?.value[0]?.title;
            } catch (err) {
                console.error(err);
            }
        }

        return {
            menu,
            activeMenu,
            openAsideMenu,
            getData
        }
    }
)