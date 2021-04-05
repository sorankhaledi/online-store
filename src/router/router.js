import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Pricing from '../components/Pricing.vue'
import About from '../components/About.vue'
import More from '../components/More.vue'


Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
        
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/more',
        name: 'More',
        component: More
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router