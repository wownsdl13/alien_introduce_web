

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/3.afc2845d.js","_app/immutable/chunks/index.96fb6f30.js","_app/immutable/chunks/page.d9b4cea8.js","_app/immutable/chunks/Seo.b74416a3.js","_app/immutable/chunks/constants.008188b5.js"];
export const stylesheets = [];
export const fonts = [];
