<template>
  <h1>DocumentsId.vue</h1>
  <h2>{{ $route.params.id }}</h2>
</template>

<script>
export default {
  created() {
    console.log(this.$route); // $route.params.id를 통해 id를 가져올 수 있다. 이때 id는 다른 값으로 변경될 수 있다. 설정하는 것에 따라 달라진다.
  },
};
</script>
