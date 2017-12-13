import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const baseIndex = resolve => require(['pages/index'], resolve)
const homePage = resolve => require(['pages/homePage'], resolve)

const routeConfig = {
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'baseIndex',
    component: baseIndex,
    redirect: '/homePage',
    children: [{ path: '/homePage', name: 'homePage', component: homePage }]
  }]
};
export default new Router(routeConfig);
