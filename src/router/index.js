import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Diensten from '../views/DienstenView.vue';
import DienstenDetail from '../views/DienstenDetail.vue';
import Partners from '../views/Partners.vue';
import Contact from '../views/ContactView.vue';
import Over from '../views/OverView.vue';
import Prismic from '../views/PrismicView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            hide: true  , // Show this route in the navigation
        },
    },
    {
        path: '/diensten',
        name: 'Diensten',
        component: Diensten,
        meta: {
            hide: false, // Show this route in the navigation
        },
    },
    {
        path: '/diensten/:uid',
        name: 'DienstenDetail',
        component: DienstenDetail,
        meta: {
            hide: true, // Hide this route in the navigation
        },
    },
    {
        path: '/partners',
        name: 'Partners',
        component: Partners,
        meta: {
            hide: false, // Show this route in the navigation
        },
    },
    {
        path: '/over',
        name: 'Over ons',
        component: Over,
        meta: {
            hide: false, // Show this route in the navigation
        },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            hide: false, // Show this route in the navigation
        },
    },
    {
        path: '/primic',
        name: 'Prismic Data',
        component: Prismic,
        meta: {
            hide: true, // Show this route in the navigation
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
