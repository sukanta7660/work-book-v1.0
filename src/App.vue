<template>
  <NavComp />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavComp from './components/utils/Nav.vue';
</script>

<style scoped></style>
