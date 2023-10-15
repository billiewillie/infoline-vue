import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useRootStore = defineStore(
    "contest",
    () => {
        const contestData = ref({
                contest: "vote-for-calendar",
                list: [
                    {
                        category: "calendar-1",
                        gallery: [
                            {
                                id: 1,
                                author_id: 1,
                                url: "https://loremflickr.com/900/600/zoo",
                                title: "title 1",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 1",
                            },
                            {
                                id: 2,
                                author_id: 2,
                                url: "https://loremflickr.com/900/600/elephant",
                                title: "title 2",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 2",
                            },
                            {
                                id: 3,
                                author_id: 3,
                                url: "https://loremflickr.com/900/600/paris",
                                title: "title 3",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 3",
                            },
                            {
                                id: 4,
                                author_id: 4,
                                url: "https://loremflickr.com/900/600/girl",
                                title: "title 4",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 4",
                            },
                            {
                                id: 5,
                                author_id: 5,
                                url: "https://loremflickr.com/900/600/rio",
                                title: "title 5",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 5",
                            },
                            {
                                id: 6,
                                author_id: 6,
                                url: "https://loremflickr.com/900/600/cat",
                                title: "title 6",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 6",
                            },
                            {
                                id: 7,
                                author_id: 7,
                                url: "https://loremflickr.com/900/600/dog",
                                title: "title 7",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 7",
                            },
                        ],
                        limit: 1
                    },
                    {
                        category: "calendar-2",
                        gallery: [
                            {
                                id: 11,
                                author_id: 11,
                                url: "https://loremflickr.com/900/600/zoo",
                                title: "title 11",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 11",
                            },
                            {
                                id: 22,
                                author_id: 22,
                                url: "https://loremflickr.com/900/600/elephant",
                                title: "title 22",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 22",
                            },
                            {
                                id: 33,
                                author_id: 33,
                                url: "https://loremflickr.com/900/600/paris",
                                title: "title 33",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 33",
                            },
                            {
                                id: 44,
                                author_id: 44,
                                url: "https://loremflickr.com/900/600/girl",
                                title: "title 44",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 44",
                            },
                            {
                                id: 55,
                                author_id: 55,
                                url: "https://loremflickr.com/900/600/rio",
                                title: "title 55",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 55",
                            },
                            {
                                id: 66,
                                author_id: 66,
                                url: "https://loremflickr.com/900/600/cat",
                                title: "title 66",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 66",
                            },
                            {
                                id: 77,
                                author_id: 77,
                                url: "https://loremflickr.com/900/600/dog",
                                title: "title 77",
                                description: "hello hello sdfds sdf dsf sdf sdf sdafkkj dsdsflj sdjdsjf sj",
                                location: "location 77",
                            },
                        ],
                        limit: 1
                    },
                ]
            });
        const activeGallery = ref(contestData.value.list[0]);

        const getContestData = async () => {
            try {
                // const res = await axios.get(`https://news.trifonov.space/api/posts`);
                // contestData.value = res.data.data;
                console.log(1)
            } catch (e) {
                console.log(e);
            }
        }

        const setActiveGallery = (category) => {
            activeGallery.value = contestData.value.list.find(item => item.category === category).gallery
        }

        return {
            contestData,
            activeGallery,
            getContestData,
            setActiveGallery
        }
    })