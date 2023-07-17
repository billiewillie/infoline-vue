import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "birthdays",
    () => {
        const birthdaysIndexPage = ref([]);
        const birthdays = ref([]);

        const getBirthdays = async () => {
            try {
                const res = await axios.get('http://users.trifonov.space/api/show/all-birthdays');
                birthdays.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        const getBirthdaysIndexPage = async () => {
            try {
                const res = await axios.get('http://users.trifonov.space/api/show/upcoming-birthdays/4');
                birthdaysIndexPage.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        return {
            birthdays,
            birthdaysIndexPage,
            getBirthdays,
            getBirthdaysIndexPage
        }
    })