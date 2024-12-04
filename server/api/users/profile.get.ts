// export default defineEventHandler(async (event) => {
//   const accessToken = getCookie(event, "accessToken");
//   console.log("accessToken :>> ", accessToken);
//   const { apiUrl, apiKey } = useRuntimeConfig();

//   return await $fetch(`${apiUrl}/users/profile`, {
//     headers: {
//       "x-api-key": apiKey,
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
// });
import { H3Event } from "h3";
import { serverApi } from "../utils/serverApi";

import { defineEventHandler, createError } from "h3";

// Remove the duplicate import statement
// import { serverApi } from '../utils/serverApi'

export default defineEventHandler(async (event: H3Event): Promise<any> => {
  const api = serverApi(event);

  try {
    // Do the actual request to the external API
    const user = await api.get<any>("/users/profile");

    return user;
  } catch (err) {
    console.log(err);
    return createError("An error occurred while fetching the data.");
  }
});
