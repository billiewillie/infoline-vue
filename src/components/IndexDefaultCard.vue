<template>
    <router-link
            to="/" class="default-card shadow rounded"
            :style="{ background: `linear-gradient(180deg, #FFFFFF 67.11%, ${background} 100%)` }"
    >
        <h2 class="title">
            {{ title }}
        </h2>
        <p class="text">
            {{ text }}
        </p>
    </router-link>
</template>

<script>
export default {
    name: "IndexDefaultCard",
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        background: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.default-card {
    padding: 10px;

    @media (min-width: 1280px) {
        padding: 35px 25px;
    }
}
</style>