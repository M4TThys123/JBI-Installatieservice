import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Diensten from '../views/DienstenView.vue'
import DienstenDetail from '../views/DienstenDetail.vue'
import Partners from '../views/Partners.vue'
import Contact from '../views/ContactView.vue'
import Over from '../views/OverView.vue'
import Prismic from '../views/PrismicView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/diensten',
        name: 'Diensten',
        component: Diensten
    },
    {
        path: '/diensten/:uid',
        name: 'DienstenDetail',
        component: DienstenDetail
    },
    {
        path: '/partners',
        name: 'Partners',
        component: Partners

    },
    {
        path: '/over',
        name: 'Over ons',
        component: Over
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/primic',
        name: 'Prismic Data',
        component: Prismic
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
