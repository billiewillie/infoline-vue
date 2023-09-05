import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "users",
    () => {
        const user = ref({});
        const logedUser = ref({});

        const getUser = async (login) => {
            try {
                const res = await axios.get(`https://users.trifonov.space/api/show/user/${login}`);
                user.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        const setLogin = (login, password) => {
            if (login === 'test' && password === 'test') {
                localStorage.setItem('isLoggedIn', '1')
            }
        }

        const login = (obj) => {
            logedUser.value = obj;
        }

        return {
            user,
            logedUser,
            getUser,
            login,
            setLogin
        }
    })
