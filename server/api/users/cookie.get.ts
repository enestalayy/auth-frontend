export default defineEventHandler(async (event) => {
  const accessToken = getCookie(event, "accessToken");
  console.log("accessToken :>> ", accessToken);
  const resfreshToken = getCookie(event, "resfreshToken");
  console.log("resfreshToken :>> ", resfreshToken);

  setCookie(event, "counter", "TESTSSS");
  const counter = getCookie(event, "counter");
  console.log("counter :>> ", counter);
  // const { apiUrl, apiKey } = useRuntimeConfig();

  // return await $fetch(`${apiUrl}/users/profile`, {
  //   headers: {
  //     "x-api-key": apiKey,
  //   },
  // });
});
