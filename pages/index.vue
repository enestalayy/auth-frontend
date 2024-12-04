<script setup lang="ts">
const { $fingerprint } = useNuxtApp();

// Fingerprint verisini kullan
console.log($fingerprint);
const authStore = useAuthStore();
</script>
<template>
  <div class="card min-h-screen flex flex-col items-center justify-center">
    <h1>Home</h1>
    <button @click="authStore.getProfile">GET PROFILE</button>
  </div>
</template>

<style lang="scss" scoped></style>
