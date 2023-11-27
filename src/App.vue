<template>
  <Hello />
  <World />
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
};
</script>
