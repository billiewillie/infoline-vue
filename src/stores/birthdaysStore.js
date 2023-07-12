import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "birthdays",
    () => {
        const birthdays = ref([]);

        const getBirthdays = async () => {
            try {
                const res = await axios.get('http://users.trifonov.space/api/show/upcoming-birthdays/4');
                birthdays.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        return {
            birthdays,
            getBirthdays
        }
    })