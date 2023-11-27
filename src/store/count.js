export default {
  namespaced: true,
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    increaseCount(state) {
      state.count++;
    },
    decreaseCount(state) {
      state.count--;
    },
  },
};
