import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.d60111ad.js","_app/immutable/chunks/index.96fb6f30.js","_app/immutable/chunks/i18n.65d516e5.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.0fead47c.js","_app/immutable/chunks/constants.008188b5.js","_app/immutable/chunks/singletons.d967f97d.js","_app/immutable/chunks/stores.605e34d8.js"];
export const stylesheets = ["_app/immutable/assets/0.b58267cb.css"];
export const fonts = [];
