import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "departments",
    () => {
        const department = ref({});

        const getDepartment = async (id) => {
            try {
                const res = await axios.get(`https://users.trifonov.space/api/show/department/${id}`);
                department.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        return {
            department,
            getDepartment
        }
    })