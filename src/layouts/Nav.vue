<template>
  <h1>Nav Bar</h1>
</template>

<script>
import { onMounted, reactive } from 'vue';

export default {
  name: 'NavComp',
  components: {},
  setup: function () {
    const state = reactive({});

    onMounted(() => {
      //
    });
    return {
      state,
    };
  },
};
</script>

<style scoped></style>
