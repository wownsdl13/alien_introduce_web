const load = async ({ url }) => {
  const lang = url.searchParams.get("lang") || "en";
  const supportedLangs = ["en", "ar", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "it", "ja", "ko", "no", "pl", "pt", "ro", "ru", "es", "sv"];
  const blogUrl = supportedLangs.includes(lang) ? `https://alien.durumis.com/${lang}` : "https://alien.durumis.com";
  return {
    lang,
    blogUrl
  };
};
export {
  load
};
