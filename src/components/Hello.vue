<template>
  <h1>Hello.vue</h1>
  <div>Count module: {{ count }}</div>
  <!-- count 모듈 안에 들어있는 increaseCount mutation을 사용한다. -->
  <button @click="increaseCount">+</button>
  <button @click="decreaseCount">-</button>
  <div>{{ message }} / {{ reversedMessage }}</div>
  <button @click="fetchTodo">Reverse it!</button>
</template>

<script>
import { reverse } from 'lodash';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    count() {
      return this.$store.state.count.count;
    },
    message() {
      return this.$store.state.message.message;
    },
    reversedMessage() {
      return this.$store.getters['message/reversedMessage'];
    },
  },
  methods: {
    increaseCount() {
      this.$store.commit('count/increaseCount');
    },
    decreaseCount() {
      this.$store.commit('count/decreaseCount');
    },
    fetchTodo() {
      this.$store.dispatch('message/fetchTodo');
    },
  },
};
</script>
