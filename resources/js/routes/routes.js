import Vue from 'vue'
import VueRouter, {
    RouteConfig
} from 'vue-router'


import Layout from '../components/ExampleComponent.vue'




Vue.use(VueRouter);

const routes = [

    {
        path: '/',
        name: "Layout",
        component: Layout,
    },
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
