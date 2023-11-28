import router from '@/routes/route.js';

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    updateLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    initialize({ commit }) {
      if (localStorage.getItem('isLoggedIn')) {
        commit('updateLoggedIn', true);
      }
    },
    logIn({ commit }, payload) {
      const { id, pw } = payload;
      if (id && pw) {
        localStorage.setItem('isLoggedIn', true);
        commit('updateLoggedIn', true);

        const { redirect } = router.currentRoute.value.query;
        if (redirect) {
          router.push(redirect);
        } else {
          router.push('/');
        }
      }
    },
    logOut({ commit }) {
      // 로그아웃 했을 시 현재 페이지가 로그인이 필요한 페이지라면 메인 페이지로 이동
      localStorage.removeItem('isLoggedIn');
      commit('updateLoggedIn', false);
      const { requiresAuth } = router.currentRoute.value.meta;
      if (requiresAuth) {
        router.push('/login');
      }
    },
  },
};
