import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "news",
    () => {
        const news = ref([]);
        const newsIndexPage = ref([]);
        const newsCategories = ref(["Все", "Юбиляры", "Конкурсы", "Человек года", "Выставка"]);

        const getNews = async () => {
            try {
                const res = await axios.get('http://news.trifonov.space/api/posts');
                news.value = res.data.data;
                console.log(news.value)
            } catch (e) {
                console.log(e);
            }
        }

        const getNewsIndexPage = async () => {
            try {
                const res = await axios.get('http://news.trifonov.space/api/posts');
                newsIndexPage.value = res.data.data.slice(0, 5);
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

        return {
            news,
            newsIndexPage,
            getNews,
            getNewsIndexPage,
        }
    })