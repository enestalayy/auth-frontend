export default defineEventHandler(async (event) => {
  const { apiUrl, apiKey } = useRuntimeConfig();
  const body = await readBody(event);

  const response = await $fetch.raw(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
    },
    credentials: "include",
    body,
  });
  const cookies = response.headers.getSetCookie();
  for (const cookie of cookies) {
    appendResponseHeader(event, "set-cookie", cookie);
  }
  const accessToken = getCookie(event, "accessToken");
  console.log("accessToken :>> ", accessToken);
  const resfreshToken = getCookie(event, "resfreshToken");
  console.log("resfreshToken :>> ", resfreshToken);

  setCookie(event, "counter", "TESTSSS");
  const counter = getCookie(event, "counter");
  console.log("counter :>> ", counter);

  return response._data;
});
