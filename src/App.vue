<template>
  <NavComp />
  <RouterView />
  <FooterComp />
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavComp from './layouts/Nav.vue';
import FooterComp from './layouts/Footer.vue';
</script>

<style scoped></style>
