<script setup>
import toast from "@/utils/toast";

const authStore = useAuthStore();
const route = useRoute();
const { token } = route.query;
const { data, error } = await authStore.verifyEmail(token);
if (!error.value) {
  const router = useRouter();
  router.push("/auth");
  toast.addToast("Email is verified successfully", { type: "success" });
}
</script>

<template>
  <div class="w-full h-screen flex flex-col items-center justify-center gap-4">
    <h1>Sorry, Token is expired</h1>
    <NuxtLink to="/auth/signup" class="bg-blue-400 rounded p-2"
      >Go back to register page</NuxtLink
    >
  </div>
</template>

<style lang="scss" scoped></style>
