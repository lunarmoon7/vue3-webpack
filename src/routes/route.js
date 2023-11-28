import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';

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
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 페이지가 바뀔 때 스크롤 위치를 맨 위(top: 0)로 초기화
    return { top: 0 };

    // 스크롤에 딜레이 걸기
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ left: 0, top: 0});
    //   }, 500);
    // });
  },
});
