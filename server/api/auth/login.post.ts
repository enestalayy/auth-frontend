export default defineEventHandler(async (event) => {
  const { apiUrl, apiKey } = useRuntimeConfig();
  const body = await readBody(event);

  return await $fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
    },
    credentials: "include",
    body,
  });
});