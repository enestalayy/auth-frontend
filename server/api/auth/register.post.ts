export default defineEventHandler(async (event) => {
  const { apiUrl, apiKey } = useRuntimeConfig();
  const body = await readBody(event);

  return await $fetch(`${apiUrl}/auth/register`, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
    },
    body,
  });
});
