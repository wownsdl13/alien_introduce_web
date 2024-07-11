import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "./index2.js";
import { S as Seo } from "./Seo.js";
import { C as Categories } from "./Categories.js";
import { s as siteTitle } from "./constants.js";
const post_svelte_svelte_type_style_lang = "";
const css = {
  code: ".date.svelte-xreirr.svelte-xreirr{font-size:1rem;color:var(--text-color);opacity:0.8;margin-bottom:0.5rem}.edit.svelte-xreirr.svelte-xreirr{display:flex}.edit.svelte-xreirr a.svelte-xreirr{margin-left:auto}img.svelte-xreirr.svelte-xreirr{object-fit:cover;object-position:center}@media screen and (max-width: 800px){h1.svelte-xreirr.svelte-xreirr{font-size:2rem}img.svelte-xreirr.svelte-xreirr{height:200px;object-fit:contain;object-position:center}}",
  map: null
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { title, description, date, categories, edit, image } = $$props;
  const seo = {
    title: `${title} | ${siteTitle}`,
    description,
    image
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0)
    $$bindings.edit(edit);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css);
  data.posts;
  return `${validate_component(Seo, "Seo").$$render($$result, Object.assign({}, seo), {}, {})}

<h1 class="svelte-xreirr">${escape(title)}</h1>
<p class="date svelte-xreirr">${escape(date)}</p>
${validate_component(Categories, "Categories").$$render($$result, { categories }, {}, {})}
<img width="800" height="300"${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="svelte-xreirr">
${slots.default ? slots.default({}) : ``}
<p class="edit svelte-xreirr"><a${add_attribute("href", edit, 0)} target="_blank" class="svelte-xreirr">Edit this page</a></p>`;
});
export {
  Post as P
};
