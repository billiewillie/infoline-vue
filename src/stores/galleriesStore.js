import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "galleries",
    () => {
        const galleries = ref([]);
        const galleriesIndexPage = ref([]);
        const galleryTitle = ref("");
        const galleryLink = ref("");

        const getGalleries = async () => {
            try {
                const res = await axios.get('http://gallery.trifonov.space/api/gallery/show/all');
                galleries.value = res.data;
            } catch (e) {
                console.log(e);
            }
        }

        const getGalleriesIndexPage = async () => {
            try {
                const res = await axios.get('http://gallery.trifonov.space/api/gallery/show/hidden-pool');
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

        return {
            galleries,
            galleriesIndexPage,
            galleryTitle,
            galleryLink,
            getGalleriesIndexPage,
            setGalleryTitle,
            setGalleryLink,
            getGalleries
        }
    })