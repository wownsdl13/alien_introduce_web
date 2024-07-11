

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.71615d54.js","_app/immutable/chunks/index.96fb6f30.js","_app/immutable/chunks/stores.605e34d8.js","_app/immutable/chunks/singletons.d967f97d.js","_app/immutable/chunks/index.0fead47c.js"];
export const stylesheets = [];
export const fonts = [];
