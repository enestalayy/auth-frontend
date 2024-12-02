<template>
  <div class="card">
    <h1 class="">Home</h1>
  </div>
</template>

<script setup lang="ts">
const { $fingerprint } = useNuxtApp();

// Fingerprint verisini kullan
console.log($fingerprint);
</script>

<style lang="scss" scoped></style>
