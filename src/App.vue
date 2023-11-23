<template>
  <h1 v-if="msg" class="message" @click="log">{{ msg }}</h1>
  <Hello />
</template>

<script>
import Hello from '@/components/Hello.vue';

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello WEbPAck!',
    };
  },
  methods: {
    log() {
      window.addEventListener();
      document.querySelector();
    },
  },
};
</script>
