import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';
import NotFound from './NotFound.vue';

const route = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:notFound(.*)', component: NotFound }, // 해당하는 페이지가 없을 경우 리다이렉트
];

export default createRouter({
  history: createWebHashHistory(),
  routes: route,
});
