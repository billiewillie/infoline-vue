import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "contest",
    () => {
        const contestData = ref({});
        const selectedImages = ref([]);
        const totalLimit = ref(0);
        const contestTitle = ref('');
        const galleryImgs = ref([]);

        const getContestData = async (id) => {
            try {
                const res = await axios.get(`https://competition.trifonov.space/api/competition/${id}`);
                contestData.value = res.data;
                contestTitle.value = contestData.value.contest_name;
                selectedImages.value = contestData.value.list.map((item) => {
                    return {
                        category: item.category,
                        likedImages: item.likedImages
                    };
                });
                totalLimit.value = contestData.value.list.reduce((acc, item) => acc + item.limit, 0);
                galleryImgs.value = contestData.value.list[0].data.map(item => item.src);
            } catch (e) {
                console.log(e);
            }
        }

        const sendLikedImages = async (user_id) => {
            console.log({ user_id, list: selectedImages.value})
            axios
                .post('https://competition.trifonov.space/api/competition/like', {
                    user_id,
                    list: selectedImages.value
                })
                .then(response => console.log(selectedImages.value))
                .catch(error => console.log(error));
        }

        const removeImageFromSelectedImages = (item, category) => {
            selectedImages.value.find(el => el.category === category).likedImages = selectedImages.value
                .find(el => el.category === category).likedImages
                .filter(el => el !== item);
        }

        const addImageToSelectedImages = (item, category, user_id) => {
            if (selectedImages.value.find(el => el.category === category).likedImages.length < contestData.value.list.find(el => el.category === category).limit
                && !selectedImages.value.find(el => el.category === category).likedImages.includes(item.id)
                && Number(user_id) !== item.author_id
            ) {
                selectedImages.value.find(el => el.category === category).likedImages.push(item.id);
                sendLikedImages(user_id);
            } else if (selectedImages.value.find(el => el.category === category).likedImages.includes(item.id)) {
                selectedImages.value.find(el => el.category === category).likedImages = selectedImages.value
                    .find(el => el.category === category).likedImages
                    .filter(el => el !== item.id);
                sendLikedImages(user_id);
            }
        }

        return {
            totalLimit,
            contestData,
            selectedImages,
            contestTitle,
            galleryImgs,
            getContestData,
            sendLikedImages,
            addImageToSelectedImages,
            removeImageFromSelectedImages
        }
    })