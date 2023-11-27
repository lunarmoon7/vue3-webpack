<template>
  <h1>Hello.vue</h1>
  <div>Count module: {{ count }}</div>
  <!-- count 모듈 안에 들어있는 increaseCount mutation을 사용한다. -->
  <button @click="increaseCount">+</button>
  <button @click="decreaseCount">-</button>
  <div>{{ message }} / {{ reversedMessage }}</div>
  <button @click="fetchTodo">Reverse it!</button>
  <div>{{ msg }}</div>
</template>

<script>
import { reverse } from 'lodash';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

// map을 사용하면, 일일히 this.$store.모듈이름 에 접근하지 않아도 되는 장점이 있다.
export default {
  computed: {
    ...mapState(['msg']), // 전역으로 설정된 state는 모듈 이름을 생략할 수 있다.
    ...mapState('count', ['count']), // (모듈 이름, 가져오려는 state 이름 배열로)
    ...mapState('message', ['message']),
    ...mapGetters('message', ['reversedMessage']), // (모듈 이름, 가져오려는 getter 이름 배열로)
  },
  methods: {
    ...mapMutations('count', ['increaseCount', 'decreaseCount']), // (모듈 이름, 가져오려는 mutation 이름 배열로)
    ...mapActions('message', ['fetchTodo']), // (모듈 이름, 가져오려는 action 이름 배열로)
  },
};
</script>
