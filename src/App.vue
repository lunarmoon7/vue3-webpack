<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <!-- RouterView는 RouterLink에 연결된 컴포넌트의 template을 보여준다. -->
  <RouterView /> 
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  components: {},
};
</script>
