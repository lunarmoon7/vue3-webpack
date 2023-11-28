<template>
  <header>
    <RouterLink to="/"> Home.. </RouterLink>
    <RouterLink to="/about"> About.. </RouterLink>
  </header>
  <section>
    <!-- <RouterView /> is a component that renders the component's <template> that matches the current URL. -->
    <RouterView /> 
  </section>
</template>

<style>
header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
}
section {
  margin-top: 80px;
}
</style>

<script>
export default {};
</script>
