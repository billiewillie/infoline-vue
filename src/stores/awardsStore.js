import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "awardsStore",
    () => {

        const menu = ref([]);
        const activeMenu = ref({});
        const openAsideMenu = ref('');
        const content = ref([]);

        const getData = async () => {
            try {
                const res = await axios.get(`https://trifonov.space/api/show/all`);
                menu.value = res.data;
                activeMenu.value = menu.value[0];
                openAsideMenu.value = menu?.value[0]?.title;
                setContent(menu.value[0]);
            } catch (err) {
                console.error(err);
            }
        }

        const setContent = (item) => {
            if (item.id !== activeMenu.value) {

                if (item.people && item.people.length > 0) {

                    content.value = item.people

                } else if (item.innerMenu && item.innerMenu.length > 0) {

                    content.value = [];

                    item.innerMenu.forEach(el => {
                            if (el.people && el.people.length > 0) {

                                el.people.forEach(person => {
                                    return content.value.push(person)
                                })

                            } else if (el.departments && el.departments.length > 0) {

                                el.departments.forEach(department => {
                                    return content.value.push(department)
                                })

                            }
                        }
                    )

                } else if (item.departments && item.departments.length > 0) {

                    content.value = item.departments

                }

                console.log(content.value)
            }
        }

        return {
            menu,
            activeMenu,
            openAsideMenu,
            content,
            getData,
            setContent
        }
    }
)