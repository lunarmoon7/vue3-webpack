import router from './route.js';
import store from '@/store';

// from : 이전 페이지, next: 리턴 키워드(vue router v4에서는 선택 옵션)
router.beforeEach((to) => {
  console.log(store);
  if (to.meta.requiresAuth && !store.state.user.isLoggedIn) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }, // to.fullPath = '/about'
    };
  }
}); // from, next는 잘 사용하지 않는다.
