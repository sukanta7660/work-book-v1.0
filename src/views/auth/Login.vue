<template>
  <h1>Login Page</h1>
</template>

<script>
import { onMounted, reactive } from 'vue';

export default {
  name: 'LoginComp',
  components: {},
  setup: function () {
    const state = reactive({
      loginForm: {
        name: '',
        email: '',
        phone: '',
      },
    });

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
