<script setup>
import Navbar from "./components/Navbar.vue";

const authStore = useAuthStore(); // Kullanıcı bilgilerini önbellekte sakla
// const { data, error } = await authStore.getProfile();
onMounted(() => {
  console.log("APP MOUNTED");
});
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navbar />
    <NuxtPage />
    <ToastContainer />
  </div>
</template>
