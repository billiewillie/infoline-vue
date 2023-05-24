<template>
    <div class="header-profile">
        <div class="header-profile__avatar">
            <picture>
                <source srcset="@/assets/img/avatar.webp" type="image/webp">
                <img src="@/assets/img/avatar.jpg" alt="">
            </picture>
        </div>
        <span class="header-profile__arrow"></span>
    </div>
</template>

<script>
export default {
    name: "HeaderProfile",

}
</script>

<style scoped>
.header-profile {
    display: none;

    @media (min-width: 1280px) {
        display: flex;
    }
}

.header-profile__avatar {
    border-radius: 50%;
    overflow: hidden;
    width: 30px;
    height: 30px;
}

.header-profile__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>