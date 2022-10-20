// export const urlApi = "https://sdhangtuah7sby.com/adm/wp-json/hangtuahapi";
// export const urlApi = "http://localhost/sdhangtuah7/wp-json/hangtuahapi";
export const urlApi = "http://127.0.0.1:8000/api";
export const urlMedia = "http://127.0.0.1:8000/storage";
export const urlInstagram =
  "https://instagram.com/sd_hang_tuah_7_surabaya?igshid=YmMyMTA2M2Y=";
export const urlYoutube =
  "https://youtube.com/channel/UCL75J6T2xeBhssWcV6PoF0w";
export const urlFb = "https://www.facebook.com/sdhang.tuahtujuhsurabaya";
export const urlPendaftaran = "https://bit.ly/3S5W0wE";
export const urlPerpustakaan = "https://bit.ly/3r1lsHP";

export function generateDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
