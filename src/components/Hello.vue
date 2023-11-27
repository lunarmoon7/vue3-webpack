<template>
  <h1>Hello.vue</h1>
  <div>{{ message }}</div>
  <div>{{ count }}</div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.msg;
    },
    count() {
      return this.$store.state.count;
    },
  },
};
</script>
