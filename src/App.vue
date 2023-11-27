<template>
  <RouterLink
    :to="{
      name: 'documents-id',
      params: { id: '777' },
      query: { name: 'hwisik' },
    }"
    >Documents ID</RouterLink
  >
  <button @click="$router.push({ name: 'home' })">Home</button>
  <button @click="$router.push({ name: 'about' })">About</button>
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
