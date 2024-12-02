import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    profile: null,
  }),
  getters: {},
  actions: {
    async signup(payload) {
      try {
        const { data, error } = await useFetch("/api/auth/register", {
          method: "POST",
          body: payload,
        });
        return { data, error };
      } catch (error) {
        throw error;
      }
    },
    async verifyEmail(tokenId) {
      try {
        const { data, error } = await useFetch("/api/auth/verify-email", {
          method: "POST",
          body: {
            tokenId,
          },
        });
        return { data, error };
      } catch (error) {
        console.log(error);
      }
    },
    async login(payload) {
      try {
        const { data, error } = await useFetch("/api/auth/login", {
          method: "POST",
          credentials: "include",
          body: payload,
        });
        return { data, error };
      } catch (error) {
        throw error;
      }
    },
    async getProfile() {
      try {
        const { data, error } = await useFetch("/api/users/profile", {
          method: "GET",
          credentials: "include", // Cookie'leri otomatik gönder
        });
        return { data, error };
      } catch (error) {
        throw error;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
