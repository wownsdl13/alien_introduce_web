import * as universal from '../entries/pages/categories/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/categories/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/categories/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.2a1a2aee.js","_app/immutable/chunks/index.96fb6f30.js","_app/immutable/chunks/PostItem.867ef2b7.js","_app/immutable/chunks/Categories.a9a6fec2.js","_app/immutable/chunks/constants.008188b5.js"];
export const stylesheets = ["_app/immutable/assets/5.6970a261.css","_app/immutable/assets/PostItem.9f06bdb1.css","_app/immutable/assets/Categories.c54416ac.css"];
export const fonts = [];
