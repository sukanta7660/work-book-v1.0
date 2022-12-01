<template>
  <h1>Register Page</h1>
</template>

<script>
import { onMounted } from 'vue';
import { reactive } from 'vue';
export default {
  name: 'RegisterComp',
  components: {},
  setup: function () {
    const state = reactive({
      registerForm: {
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
