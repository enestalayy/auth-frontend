export default defineEventHandler(async () => {
  const { apiUrl, apiKey } = useRuntimeConfig();

  return await $fetch.raw(`${apiUrl}/users/profile`, {
    headers: {
      "x-api-key": apiKey,
    },
    credentials: "include",
  });
});
