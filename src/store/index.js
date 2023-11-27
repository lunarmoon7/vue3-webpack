import { reactive } from 'vue'; // state에 반응성을 부여하기 위해 reactive를 import합니다.

// 서로 관계가 없는 컴포넌트끼리 데이터를 공유하기 위한 Vuex의 store를 생성합니다.
export const state = reactive({
  msg: 'Hello Vuex',
  count: 1,
});

export const getters = {
  reversedMsg() {
    return state.msg.split('').reverse().join('');
  },
};

// mutations는 state를 변경하는 메서드입니다.(데이터 변경/추적)
export const mutations = {
  increaseCount() {
    state.count++;
  },
  decreaseCount() {
    state.count--;
  },
  updateMsg(newMsg) {
    state.msg = newMsg;
  },
};

// actions는 비동기 로직을 선언하는 메서드입니다.(데이터 변경/추적 제외)
export const actions = {
  async fetchTodo() {
    const todo = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    ).then((res) => res.json());
    mutations.updateMsg(todo.title); // mutations를 호출하여 state를 변경합니다. (직접 변경 X, state.msg = todo.title)
  },
};
