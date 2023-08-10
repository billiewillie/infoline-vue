import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "news",
    () => {
        const news = ref([]);
        const newsIndexPage = ref([]);
        const newsCategories = ref(["Все", "Юбиляры", "Конкурсы", "Человек года", "Выставка"]);
        const activeCategory = ref(newsCategories.value[0]);
        const activeNews = ref([]);

        const getNews = async () => {
            try {
                const res = await axios.get(`https://news.trifonov.space/api/posts`);
                news.value = res.data.data;
                activeNews.value = news.value;
            } catch (e) {
                console.log(e);
            }
        }

        const getNewsIndexPage = async () => {
            try {
                const res = await axios.get('https://news.trifonov.space/api/posts?page=1&limit=5');
                newsIndexPage.value = res.data.data;
            } catch (e) {
                console.log(e);
            }
        }

        const setActiveCategory = (value) => {
            activeCategory.value = value;
            activeNews.value = news.value.filter((item) => {
                if (value === newsCategories.value[0]) {
                    return true;
                } else {
                    return item.category.title === value;
                }
            });
        }

        return {
            news,
            newsCategories,
            activeCategory,
            newsIndexPage,
            activeNews,
            getNews,
            getNewsIndexPage,
            setActiveCategory
        }
    })