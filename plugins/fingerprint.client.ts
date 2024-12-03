import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default defineNuxtPlugin(async (nuxtApp) => {
  // FingerprintJS'i başlat
  const fp = await FingerprintJS.load();

  // Benzersiz ID'yi al
  const fingerprint = await fp.get();
  console.log("PLUGİN ÇALIŞTI", fingerprint);
  // Fingerprint'i global bir yardımcı fonksiyon olarak kullanıma sun
  nuxtApp.provide("fingerprint", fingerprint);
});
