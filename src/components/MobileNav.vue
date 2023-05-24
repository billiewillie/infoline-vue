<script>
import BaseNav from "@/components/BaseNav.vue";
import DocsNav from "@/components/DocsNav.vue";

export default {
    components: {
        BaseNav,
        DocsNav
    }
}
</script>

<template>
    <div class="mobile-nav">
        <BaseNav/>
        <DocsNav/>
    </div>
</template>

<style scoped>
.mobile-nav {
    @media (min-width: 1280px) {
        display: none;
    }
}
</style>