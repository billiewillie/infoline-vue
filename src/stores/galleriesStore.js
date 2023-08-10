import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "galleries",
    () => {
        const gallery = ref({});
        const galleries = ref([]);
        const galleriesIndexPage = ref([]);
        const galleryTitle = ref("");
        const galleryLink = ref("");
        const years = ref(['Все']);
        const activeYear = ref('');
        const activeGalleries = ref({});
        const galleryImgs = ref([]);

        const getGalleries = async () => {
            try {
                const res = await axios.get('https://gallery.trifonov.space/api/gallery/show/all');
                galleries.value = res.data;
                galleries.value.forEach(item => {
                    const published_year = String(new Date(item.published_date).getFullYear());
                    years.value.push(published_year);
                });
                years.value = [...new Set(years.value)];
                activeYear.value = years.value[0];
                years.value.sort((a, b) => b - a);
                activeGalleries.value = galleries.value.filter(item => {
                    if (activeYear.value === 'Все') {
                        return true;
                    } else {
                        const published_year = String(new Date(item.published_date).getFullYear());
                        return published_year === activeYear.value;
                    }
                })
            } catch (e) {
                console.log(e);
            }
        }

        const getGallery = async (id) => {
            try {
                const res = await axios.get(`https://gallery.trifonov.space/api/gallery/show/${id}`);
                gallery.value = res.data;
                galleryImgs.value = gallery.value.media.map(item => `https://gallery.trifonov.space/upload/galleries/${gallery.value.id}/${item.src}.webp`)
            } catch (e) {
                console.log(e);
            }
        }

        const getGalleriesIndexPage = async () => {
            try {
                const res = await axios.get('https://gallery.trifonov.space/api/gallery/show/hidden-pool');
                galleriesIndexPage.value = res.data;
                galleryLink.value = galleriesIndexPage.value[0].url;
                galleryTitle.value = galleriesIndexPage.value[0].title;
            } catch (e) {
                console.log(e);
            }
        }

        const setGalleryTitle = (index) => {
            galleryTitle.value = galleriesIndexPage.value[index].title;
        }

        const setGalleryLink = (index) => {
            galleryLink.value = galleriesIndexPage.value[index].url;
        }

        const setActiveYear = (year) => {
            activeYear.value = year;
            activeGalleries.value = galleries.value.filter(item => {
                if (activeYear.value === 'Все') {
                    return true;
                } else {
                    const published_year = String(new Date(item.published_date).getFullYear());
                    return published_year === activeYear.value;
                }
            });
        }

        return {
            galleries,
            gallery,
            galleryImgs,
            years,
            galleriesIndexPage,
            galleryTitle,
            activeGalleries,
            galleryLink,
            activeYear,
            getGalleriesIndexPage,
            setGalleryTitle,
            setGalleryLink,
            getGalleries,
            setActiveYear,
            getGallery
        }
    })