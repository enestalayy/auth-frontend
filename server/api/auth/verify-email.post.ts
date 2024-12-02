export default defineEventHandler(async (event) => {
  const { apiUrl, apiKey } = useRuntimeConfig();
  const { tokenId } = await readBody(event);

  console.log("ÇALIŞTIM");

  return await $fetch(`${apiUrl}/auth/verify-email`, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
    },
    body: {
      tokenId,
    },
  });
});
