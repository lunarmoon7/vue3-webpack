<template>
  <form @submit.prevent action="">
    <input v-model="userID" placeholder="type id..." type="text" />
    <input v-model="userPW" placeholder="type pw..." type="password" />
  </form>
  <button @click="logIn">Log in</button>
</template>

<script>
export default {
  data() {
    return {
      userID: '',
      userPW: '',
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch('user/logIn', {
        id: this.userID,
        pw: this.userPW,
      });
    },
  },
};
</script>
