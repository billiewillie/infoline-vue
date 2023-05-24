import {createRouter, createWebHistory} from "vue-router";

import Home from "@/pages/HomePage.vue";
import NotFound from "@/pages/NotFoundPage.vue";
import News from "@/pages/NewsPage.vue";
import Newbie from "@/pages/NewbiePage.vue";
import Gallery from "@/pages/GalleriesPage.vue";
import Team from "@/pages/TeamPage.vue";
import Docs from "@/pages/DocsPage.vue";
import Instructions from "@/pages/InstructionsPage.vue";
import Orders from "@/pages/OrdersPage.vue";
import ConferenceRoomBooking from "@/pages/ConferenceRoomBookingPage.vue";
import MarketingMaterials from "@/pages/MarketingMaterialsPage.vue";
import Learning from "@/pages/LearningPage.vue";
import User from "@/pages/UserPage.vue";

const routes = [
    {
        path: '/',
        components: {
            default: () => import('@/pages/HomePage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/login',
        components: {
            default: () => import('@/pages/LoginPage.vue'),
        },
    },
    {
        path: '/news',
        components: {
            default: () => import('@/pages/NewsPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/newbie',
        components: {
            default: () => import('@/pages/NewbiePage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/galleries',
        components: {
            default: () => import('@/pages/GalleriesPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/team',
        components: {
            default: () => import('@/pages/TeamPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/docs',
        components: {
            default: () => import('@/pages/DocsPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/instructions',
        components: {
            default: () => import('@/pages/InstructionsPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/orders',
        components: {
            default: () => import('@/pages/OrdersPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/conference-room-booking',
        components: {
            default: () => import('@/pages/ConferenceRoomBookingPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/marketing-materials',
        components: {
            default: () => import('@/pages/MarketingMaterialsPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/learning',
        components: {
            default: () => import('@/pages/LearningPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router