import * as universal from '../entries/pages/contact/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/6.47d8eeca.js","_app/immutable/chunks/index.96fb6f30.js","_app/immutable/chunks/Contact.2b8bc42e.js","_app/immutable/chunks/i18n.65d516e5.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.0fead47c.js"];
export const stylesheets = ["_app/immutable/assets/Contact.15293e38.css"];
export const fonts = [];
