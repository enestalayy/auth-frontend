<script setup>
import toast from "@/utils/toast";

const toasts = computed(() => toast.state.toasts);

const toastClasses = (type) => {
  switch (type) {
    case "success":
      return "bg-green-400 text-white";
    case "error":
      return "bg-red-400 text-white";
    case "info":
    default:
      return "bg-gray-800 text-white";
  }
};

const removeToast = (id) => {
  toast.removeToast(id);
};
</script>
<template>
  <div class="fixed top-4 right-4 space-y-4">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="flex items-center px-4 py-2 rounded shadow-lg transition-opacity duration-300"
      :class="toastClasses(toast.type)"
    >
      <span class="mr-2">{{ toast.message }}</span>
      <button
        @click="removeToast(toast.id)"
        class="ml-auto text-white hover:text-white"
      >
        ✖
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind CSS sınıfları zaten responsive bir görünüm sağlıyor */
</style>
