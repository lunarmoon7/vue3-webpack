<template>
  <h1>{{ msg }}</h1>
  <h2>{{ storeMsg }}</h2>
  <h2>{{ storeMessage }}</h2>
  <Hello />
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
  computed: {
    storeMsg() {
      return this.$store.state.msg;
    },
    storeMessage() {
      // 모듈로 만든 message를 사용하기
      return this.$store.state.message.message;
    },
  },
};
</script>
