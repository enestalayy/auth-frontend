export default defineNuxtRouteMiddleware(async (to, from) => {
  // const publicRoutes = ["/auth", "/auth/register"]; // Korumasız rotalar
  // const isProtected = !publicRoutes.includes(to.path); // Koruma gerektirip gerektirmediği
  const authStore = useAuthStore(); // Kullanıcı bilgilerini önbellekte sakla

  console.log("MİDDLEWARE ÇALIŞTI :>> ", authStore?.profile);

  // if (isProtected && !authStore.profile) {
  //   try {
  //     const { data, error } = await authStore.getProfile();
  //     console.log("data :>> ", data.value);
  //     console.log("error :>> ", error.value);
  //   } catch (error) {
  //     return navigateTo("/auth"); // Hata durumunda giriş sayfasına yönlendir
  //   }
  // }

  // // Eğer giriş yapılmış kullanıcı giriş veya kayıt sayfasına gitmek isterse ana sayfaya yönlendir
  // if (authStore.profile && publicRoutes.includes(to.path)) {
  //   return navigateTo("/");
  // }
});
