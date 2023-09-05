import {createRouter, createWebHistory} from "vue-router";
import {useRootStore} from "@/stores/usersStore";
import {storeToRefs} from "pinia";

const getLoginPage = () => {
    const usersStore = useRootStore();
    const {isLoggedIn} = storeToRefs(usersStore);
    if (localStorage.getItem('isLoggedIn') !== '1') {
        return {
            path: '/login'
        }
    }
}

const routes = [
    {
        path: '/',
        components: {
            default: () => import('@/pages/HomePage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/login',
        components: {
            default: () => import('@/pages/LoginPage.vue'),
        },
        beforeEnter: () => {
            if (localStorage.getItem('isLoggedIn') === '1') {
                return {
                    path: '/'
                }
            }
        }
    },
    {
        path: '/users',
        redirect: '/birthdays',
        beforeEnter: getLoginPage
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
        beforeEnter: getLoginPage
    },
    {
        path: '/news',
        components: {
            default: () => import('@/pages/NewsPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/news/:id',
        components: {
            default: () => import('@/pages/NewsDetailPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/about',
        components: {
            default: () => import('@/pages/AboutPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/departments/:id',
        components: {
            default: () => import('@/pages/DepartmentPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/birthdays',
        components: {
            default: () => import('@/pages/BirthdaysPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/newbie',
        components: {
            default: () => import('@/pages/NewbiePage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/galleries',
        components: {
            default: () => import('@/pages/GalleriesPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/galleries/:id',
        components: {
            default: () => import('@/pages/GalleryDetailPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/team',
        components: {
            default: () => import('@/pages/TeamPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/docs',
        components: {
            default: () => import('@/pages/DocsPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/instructions',
        components: {
            default: () => import('@/pages/InstructionsPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/instructions/:id',
        components: {
            default: () => import('@/pages/InstructionDetailPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/orders',
        components: {
            default: () => import('@/pages/OrdersPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/calendar',
        components: {
            default: () => import('@/pages/CalendarPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
    },
    {
        path: '/marketing-materials',
        components: {
            default: () => import('@/pages/MarketingMaterialsPage.vue'),
            Header: () => import('@/components/TheHeader.vue'),
            Sidebar: () => import('@/components/TheSidebar.vue'),
        },
        beforeEnter: getLoginPage
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
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    top: 0
                })
            }, 500)
        })
    }
})

export default router