import { reactive } from "vue";

const state = reactive({
  toasts: [],
});

const addToast = (message, options = {}) => {
  const id = Date.now();
  const toast = {
    id,
    message,
    type: options.type || "info", // "info", "success", "error", vb.
    duration: options.duration || 3000, // Varsayılan olarak 3 saniye
  };
  state.toasts.push(toast);

  // Belirtilen süreden sonra toast'ı kaldır
  setTimeout(() => removeToast(id), toast.duration);
};

const removeToast = (id) => {
  state.toasts = state.toasts.filter((toast) => toast.id !== id);
};

// Kullanımı kolaylaştırmak için bir global fonksiyon döndürüyoruz
export default {
  state,
  addToast,
  removeToast,
};
