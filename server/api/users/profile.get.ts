export default defineEventHandler(async () => {
  const { apiUrl, apiKey } = useRuntimeConfig();

  return await $fetch(`${apiUrl}/users/profile`, {
    headers: {
      "x-api-key": apiKey,
    },
    credentials: "include",
  });
});
