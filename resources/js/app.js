require('./bootstrap');

import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './routes/routes';
import vuetify from './plugins/vuetify'
import store from './store/index'

// import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

window.Vue = require('vue').default;



Vue.use(VueRouter);



const app = new Vue({
    el: '#app',
    router: router,
    vuetify,
    store,
    iconfont: 'mdi' || 'md',
    render: h => h(App),
});

