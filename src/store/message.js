export default {
  namespaced: true, // namespaced를 사용하면 store를 모듈화 할 수 있다.
  state() {
    return {
      message: 'Hello Store Module',
    };
  },
  getters: {
    reversedMessage(state) {
      return state.message.split('').reverse().join('');
    },
  },
  mutations: {
    updateMessage(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    async fetchTodo({ commit }) {
      const todo = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      ).then((res) => res.json());
      commit('updateMessage', todo.title);
    },
  },
};
