const load = async ({ url }) => {
  const lang = url.searchParams.get("lang") || "en";
  return {
    lang
  };
};
export {
  load
};
