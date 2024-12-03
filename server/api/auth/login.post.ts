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
  return response._data;
});
// export default defineEventHandler(async (event) => {
//   const { apiUrl, apiKey } = useRuntimeConfig();
//   const body = await readBody(event);

//   // $fetch.raw ile tam yanıt alın
//   const response = await $fetch.raw(`${apiUrl}/auth/login`, {
//     method: "POST",
//     headers: {
//       "x-api-key": apiKey,
//     },
//     credentials: "include",
//     body,
//   });

//   // Yanıt başlıklarını loglayın
//   console.log("Response Headers:", response.headers);
//   const cookies = response.headers.getSetCookie();

//   // Set-Cookie başlığını alın
//   console.log("Set-Cookie:", cookies);
//   for (const cookie of cookies) {
//     appendResponseHeader(event, "set-cookie", cookie);
//   }

//   // Gerekirse yanıt verilerini döndürün
//   return {
//     data: response._data,
//     cookies,
//   };
// });
