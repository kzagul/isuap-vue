import Vue from 'vue';
import Router from 'vue-router';
import Table from './pages/TablePage.vue';
import Home from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
// import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'Home',
        redirect: "/login",
        component: Home
    },
    {
        path: '/table',
        name: 'Table',
        component: Table
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
  ]
});

