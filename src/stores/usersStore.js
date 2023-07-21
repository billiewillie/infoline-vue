import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "users",
    () => {
        const user = ref({});

        const getUser = async (login) => {
            try {
                const res = await axios.get(`http://users.trifonov.space/api/show/user/${login}`);
                user.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        return {
            user,
            getUser
        }
    })