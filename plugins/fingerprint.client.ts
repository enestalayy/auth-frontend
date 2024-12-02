import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default defineNuxtPlugin(async (nuxtApp) => {
  // FingerprintJS'i başlat
  const fp = await FingerprintJS.load();

  // Benzersiz ID'yi al
  const fingerprint = await fp.get();

  // Fingerprint'i global bir yardımcı fonksiyon olarak kullanıma sun
  nuxtApp.provide("fingerprint", fingerprint);
});
