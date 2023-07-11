import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore("root", () => {
    const news = ref([]);
    const newsCategories = ref(["Все", "Юбиляры", "Конкурсы", "Человек года", "Выставка"]);
    const birthdays = ref([]);

    const getNews = async () => {
        try {
            const res = await axios.get('http://news.trifonov.space/api/posts');
            news.value = res.data.data;
        } catch (e) {
            console.log(e);
        }
    }

    const getBirthdays = async () => {
        try {
            const res = await axios.get('http://users.trifonov.space/api/show/all-users');
            news.value = res.data.data;
        } catch (e) {
            console.log(e);
        }
    }

    const getNewsCategories = async () => {
        try {
            const res = await axios.get('http://news.trifonov.space/api/posts');
            news.value = res.data.data;
        } catch (e) {
            console.log(e);
        }
    }

    getNews();
    getBirthdays();
    // getNewsCategories();

    return {
        news,
        newsCategories,
        birthdays
    }
})