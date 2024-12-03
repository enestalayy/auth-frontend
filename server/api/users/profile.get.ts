export default defineEventHandler(async (event) => {
  const accessToken = getCookie(event, "accessToken");
  console.log("accessToken :>> ", accessToken);
  const { apiUrl, apiKey } = useRuntimeConfig();

  return await $fetch(`${apiUrl}/users/profile`, {
    headers: {
      "x-api-key": apiKey,
      Authorization: `Bearer ${accessToken}`,
    },
  });
});
