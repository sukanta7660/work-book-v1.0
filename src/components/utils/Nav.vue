<template>
  <v-app-bar color="info" density="compact">
    <v-app-bar-title>
      <v-btn>WorkBook</v-btn>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-dots-horizontal"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavComp',
};
</script>

<style scoped></style>
