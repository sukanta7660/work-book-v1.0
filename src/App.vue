<template>
  <v-card class="mx-auto" outlined="false">
    <v-layout>
      <NavComp />
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavComp from './components/utils/Nav.vue';
</script>

<style scoped></style>
