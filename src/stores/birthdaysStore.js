import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "birthdays",
    () => {
        const birthdaysIndexPage = ref([]);
        const birthdays = ref([]);

        const getBirthdaysIndexPage = async () => {
            try {
                const res = await axios.get('http://users.trifonov.space/api/show/upcoming-birthdays/4');
                birthdaysIndexPage.value = res.data;
                console.log(birthdaysIndexPage.value);
            } catch (e) {
                console.log(e);
            }
        }

        return {
            birthdaysIndexPage,
            getBirthdaysIndexPage
        }
    })