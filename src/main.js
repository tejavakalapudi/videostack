import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import store from './store';
import Template from './components/Template';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', component: Template }
    ]
})
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');