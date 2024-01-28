export const formatWord = (word) => {
  return word
    .replace(/_/g, ' ') // Mengganti semua underscore dengan spasi
    .replace(/\b\w/g, (match) => match.toUpperCase()); // Mengubah huruf pertama setiap kata menjadi kapital
};