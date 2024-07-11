

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/example-content/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/7.c8143515.js","_app/immutable/chunks/index.96fb6f30.js","_app/immutable/chunks/post.1e7780ce.js","_app/immutable/chunks/Seo.b74416a3.js","_app/immutable/chunks/Categories.a9a6fec2.js","_app/immutable/chunks/constants.008188b5.js"];
export const stylesheets = ["_app/immutable/assets/post.701847be.css","_app/immutable/assets/Categories.c54416ac.css"];
export const fonts = [];
