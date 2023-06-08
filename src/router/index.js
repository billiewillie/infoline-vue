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
        path: '/users',
        redirect: '/birthdays',
    },
    {
        path: '/users/:id',
        name: 'User',
        props: true,
        components: {
            default: () => import('@/pages/UserPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
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
        path: '/news/:id',
        components: {
            default: () => import('@/pages/NewsDetailPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
    },
    {
        path: '/birthdays',
        components: {
            default: () => import('@/pages/BirthdaysPage.vue'),
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
        path: '/galleries/:id',
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
        path: '/team/:id',
        name: 'Team',
        props: true,
        components: {
            default: () => import('@/pages/DepartmentPage.vue'),
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
    {
        path: '/:pathMatch(.*)*',
        components: {
            default: () => import('@/pages/NotFoundPage.vue'),
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({top: 0})
            }, 500)
        })
    }
})

export default router