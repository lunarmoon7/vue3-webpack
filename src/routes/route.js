import { createRouter, createWebHistory } from 'vue-router';
import About from '@/components/About.vue';

export default createRouter({
  history: createWebHistory(), // HTML5 History 모드, 새로고침 시 페이지를 찾을 수 없다는 에러 발생
  routes: [
    {
      path: '/about',
      component: About,
    },
  ],
});
