<template>
  <Hello />
  <button @click="increase">Increase</button>
  <World />
  <button @click="fetchTodo">Click To Update</button>
</template>

<script>
import Hello from '@/components/Hello.vue';
import World from '@/components/World.vue';

export default {
  name: 'App',
  components: {
    Hello,
    World,
  },
  data() {
    return {
      msg: 'Hello Vue!',
    };
  },
  methods: {
    increase() {
      this.$store.commit('increment'); // store 내부의 increment 뮤테이션을 호출
    },
    fetchTodo() {
      // actions를 사용하고 싶다면, dispatch를 사용한다.
      this.$store.dispatch('fetchTodo'); // store 내부의 fetchTodo 액션을 호출
    },
  },
};
</script>
