export default defineEventHandler(async (event) => {
  const { apiUrl, apiKey } = useRuntimeConfig();
  const body = await readBody(event);

  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json", // JSON gönderiyorsanız bu gerekli
      },
      credentials: "include", // credentials, headers dışında tanımlanmalı
      body: JSON.stringify(body), // body'nin JSON formatına dönüştürülmesi gerekebilir
    });

    if (!response.ok) {
      // HTTP hataları için kontrol
      const error = await response.json();
      console.error("Error:", error);
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json(); // Cevap başarılıysa JSON'u al
    console.log("response :>> ", response);
    console.log("Login response:", data);
    // const cookies = response.headers.getSetCookie();
    // for (const cookie of cookies) {
    //   console.log("cookie :>> ", cookie);
    //   appendResponseHeader(event, "set-cookie", cookie);
    // }
    return data; // Gerekirse veriyi döndür
  } catch (e) {
    console.error("Fetch error:", e);
    throw e; // Hatanın üst seviyeye fırlatılması gerekiyorsa
  }
});

// export default defineEventHandler(async (event) => {
//   const { apiUrl, apiKey } = useRuntimeConfig();
//   const body = await readBody(event);

//   const response = await $fetch.raw(`${apiUrl}/auth/login`, {
//     method: "POST",
//     headers: {
//       "x-api-key": apiKey,
//     },
//     body,
//   });
//   const cookies = response.headers.getSetCookie();
//   for (const cookie of cookies) {
//     appendResponseHeader(event, "set-cookie", cookie);
//   }
//   const accessToken = getCookie(event, "accessToken");
//   console.log("accessToken :>> ", accessToken);
//   const refreshToken = getCookie(event, "refreshToken");
//   console.log("refreshToken :>> ", refreshToken);

//   setCookie(event, "counter", "TESTSSS");
//   const counter = getCookie(event, "counter");
//   console.log("counter :>> ", counter);

//   return response._data;
// });
