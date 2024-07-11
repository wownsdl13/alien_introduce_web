import * as universal from '../entries/pages/categories/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/categories/_page.md.js')).default;
export { universal };
export const universal_id = "src/routes/categories/+page.js";
export const imports = ["_app/immutable/nodes/4.c4b7d1dc.js","_app/immutable/chunks/index.96fb6f30.js","_app/immutable/chunks/page.d9b4cea8.js","_app/immutable/chunks/Seo.b74416a3.js","_app/immutable/chunks/constants.008188b5.js","_app/immutable/chunks/PostItem.867ef2b7.js","_app/immutable/chunks/Categories.a9a6fec2.js"];
export const stylesheets = ["_app/immutable/assets/4.169e510d.css","_app/immutable/assets/PostItem.9f06bdb1.css","_app/immutable/assets/Categories.c54416ac.css"];
export const fonts = [];
