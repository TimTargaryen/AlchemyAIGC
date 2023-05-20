import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/I2T',
        name: 'I2T',
        component: () => import("@/views/I2T.vue"),
    },
    {
        path: '/T2I',
        name: 'T2I',
        component: () => import("@/views/T2I.vue"),
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import("@/views/Detail.vue"),
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: () => import("@/views/gallery.vue"),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login.vue"),
    },
    {
        path: '/user',
        name: "User",
        component: () => import("@/views/User.vue")
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})

export default router
