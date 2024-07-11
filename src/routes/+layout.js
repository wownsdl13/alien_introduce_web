export const prerender = true;
export const load = async ({ url }) => {
  const supportedLangList = [
    'en', 'ar', 'bg', 'zh', 'zh', 'hr', 'cs', 'da', 'nl', 'fi', 'fr', 'de',
    'el', 'hi', 'it', 'ja', 'ko', 'no', 'pl', 'pt', 'ro', 'ru', 'es', 'sv'
  ];
  return {
    supportedLangList
  };
};
