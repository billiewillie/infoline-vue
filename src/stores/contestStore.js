import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "contest",
    () => {
        const contestData = ref({});
        const activeGallery = ref({});
        const selectedImages = ref([]);
        const totalLimit = ref(0);

        const getContestData = async (id) => {
            try {
                const res = await axios.get(`https://competition.trifonov.space/api/competition/${id}`);
                contestData.value = res.data;
                activeGallery.value = contestData.value.list[0];
                selectedImages.value = contestData.value.list.map((item) => {
                    return {
                        category: item.category,
                        data: item.likedImages
                    };
                });
                totalLimit.value = contestData.value.list.reduce((acc, item) => acc + item.limit, 0);
            } catch (e) {
                console.log(e);
            }
        }

        const setActiveGallery = (category) => {
            activeGallery.value = contestData.value.list.find(item => item.category === category);
        }

        const sendLikedImages = async (user_id) => {
            axios
                .post('https://competition.trifonov.space/api/competition/like', {
                    user_id,
                    list: selectedImages.value
                })
                .then(response => console.log(response))
                .catch(error => console.log(error));
        }

        const removeImageFromSelectedImages = (item, category) => {
            selectedImages.value = selectedImages.value
                .find(el => el.category === category).data
                .filter(el => el !== item.id);
        }

        const addImageToSelectedImages = (item, category) => {
            const selectedImagesOfCategory = selectedImages.value.find(el => el.category === category);
            if (selectedImagesOfCategory.data.length < selectedImagesOfCategory.limit
                && !selectedImagesOfCategory.data.includes(item.id)) {
                selectedImagesOfCategory.data.push(item.id);
            } else if (selectedImagesOfCategory.data.includes(item.id)) {
                removeImageFromSelectedImages(item, category);
            }
        }

        return {
            totalLimit,
            contestData,
            activeGallery,
            selectedImages,
            getContestData,
            setActiveGallery,
            sendLikedImages,
            addImageToSelectedImages,
            removeImageFromSelectedImages
        }
    })