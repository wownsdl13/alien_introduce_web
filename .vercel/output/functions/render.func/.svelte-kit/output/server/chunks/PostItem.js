import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "./index2.js";
import { C as Categories } from "./Categories.js";
const PostItem_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-item.svelte-s2j719{margin-bottom:3rem}.title.svelte-s2j719{text-decoration:none}.title.svelte-s2j719:hover{text-decoration:underline}h2.svelte-s2j719{font-size:1.8rem}img.svelte-s2j719{object-fit:cover;object-position:center}@media screen and (max-width: 768px){img.svelte-s2j719{height:200px;object-fit:contain;object-position:center}}",
  map: null
};
const PostItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let description;
  let slug;
  let categories;
  let image;
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  ({ title, description, slug, categories, image } = post);
  return `<div class="post-item svelte-s2j719"><a data-sveltekit-prefetch class="title svelte-s2j719" href="${"/posts/" + escape(slug, true)}"><h2 class="svelte-s2j719">${escape(title)}</h2></a>
  <img width="800" height="300"${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="svelte-s2j719">
  ${validate_component(Categories, "Categories").$$render($$result, { categories }, {}, {})}
  <p>${escape(description)}</p>
</div>`;
});
export {
  PostItem as P
};
