import Vue from 'vue';
import VueRouter from 'vue-router';
import SimpleCovid from '../views/SimpleCovid.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SimpleCovid',
    component: SimpleCovid
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
