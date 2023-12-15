import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "users",
    () => {
        const user = ref({});
        const users = ref([]);
        const logedUser = ref({});

        const getUser = async (login) => {
            try {
                const res = await axios.get(`https://users.trifonov.space/api/show/user/${login}`);
                user.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        const getAllUsers = async () => {
            try {
                const res = await axios.get(`https://users.trifonov.space/api/show/all-users`);
                users.value = res.data;
            } catch (err) {
                console.error(err);
            }
        }

        const login = (obj) => {
            logedUser.value = obj;
        }

        return {
            user,
            users,
            logedUser,
            getUser,
            getAllUsers,
            login
        }
    })
