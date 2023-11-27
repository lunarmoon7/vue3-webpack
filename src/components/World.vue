<template>
  <h1>World.vue</h1>
  <div>{{ reversedMsg }}</div>
  <div @click="decreaseCount">{{ count }}</div>
</template>

<script>
import { state, mutations, getters } from '@/store';

export default {
  data() {
    return state;
  },
  computed: {
    reversedMsg: getters.reversedMsg,
  },
  methods: {
    decreaseCount: mutations.decreaseCount,
  },
};
</script>
