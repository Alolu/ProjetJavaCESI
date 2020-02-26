import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueCookie from 'vue-cookie'

Vue.use(Router);
Vue.use(VueCookie);

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Hello },
        { path: '*', redirect: '/' }
    ]
});

export default router;