// Vuex store
import { createStore } from 'vuex';
import message from './message';
import count from './count';

export default createStore({
  // data()와 유사
  state() {
    // component의 data()와 유사, 객체 자체로 선언하면 참조 문제가 발생
    return {
      msg: 'Hello Vue',
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    message,
    count
  },
});
