import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Logout from '@/components/Logout';
import Inventory from '@/components/Inventory';
import store from '../store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }, {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    }
  ]
});

router.beforeEach((to, from, next) => {
  // if user has JWT
  if (store.state.user || to.path === '/') {
    next();
  } else {
    next('/');
  }
});

export default router;
