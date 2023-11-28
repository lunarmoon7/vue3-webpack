import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';
import LogIn from './LogIn.vue';

export default createRouter({
  history: createWebHistory(), // HTML5 History 모드, 새로고침 시 페이지를 찾을 수 없다는 에러 발생
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
      meta: {
        requiresAuth: true, // meta는 어떤 기능을 수행하는 게 아님, 단순 정보를 나타내는 것
      },
    },
    {
      path: '/login',
      component: LogIn,
    },
  ],
});
