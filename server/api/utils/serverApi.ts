import { H3Event } from "h3";
import Client from "~/utils/api/client";

// server composable for calling the external API through Nitro Server
export const serverApi = (event: H3Event) => {
  const { apiUrl, apiKey } = useRuntimeConfig();

  const accessToken = getCookie(event, "accessToken");
  const refreshToken = getCookie(event, "refreshToken");

  console.log("accessToken :>> ", accessToken);
  console.log("refreshToken :>> ", refreshToken);
  console.log("apiUrl :>> ", apiUrl);
  const client = new Client(apiUrl as string, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Refresh-Token": `Bearer ${refreshToken}`,
    } as HeadersInit,
  });

  return client;
};
