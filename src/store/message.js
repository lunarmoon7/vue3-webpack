export default {
  namespaced: true, // namespace를 사용하면 모듈화된 store를 사용할 때 모듈명을 함께 사용해야 한다.
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
