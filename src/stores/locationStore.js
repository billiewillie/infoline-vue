import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "locations",
    () => {
        const location = ref({});

        const getLocation = async (id) => {
            try {
                const res = await axios.get(`https://users.trifonov.space/api/show/location/${id}`);
                location.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        return {
            location,
            getLocation
        }
    })