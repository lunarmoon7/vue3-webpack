// Vuex store
import { createStore } from 'vuex';

export default createStore({
  // data()와 유사
  state() {
    // component의 data()와 유사, 객체 자체로 선언하면 참조 문제가 발생
    return {
      msg: 'Hello Vue',
      count: 1,
    };
  },
  // computed()를 참조하는 역할
  getters: {
    reversedMsg(state) {
      return state.msg.split('').reverse().join('');
    },
  },
  // 데이터(state)를 변경하는 역할
  mutations: {
    increment(state) {
      // 첫 번째 인자로 state를 넘겨주면, createStore의 state에 접근할 수 있음. 직접적 접근 불가
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    updateMsg(state, newMsg) {
      state.msg = newMsg;
    },
  },
  // 그 외 비동기 로직을 담당하는 역할
  actions: {
    // context => state, getters, commit, dispatch 제공
    // mutation을 사용하고 싶다면, commit을 사용하면 된다.
    // 구조분해 할당 context => { state, getters, commit, dispatch }
    async fetchTodo({ commit }) {
      const todo = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      ).then((res) => res.json());
      commit('updateMsg', todo.title); // (실행 시키려는 mutation 이름, 전달하려는 데이터)
    },
  },
});
