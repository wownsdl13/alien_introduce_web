import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../chunks/index2.js";
import { P as Page$1 } from "../../../chunks/page.js";
import { P as PostItem } from "../../../chunks/PostItem.js";
const _page_md_svelte_type_style_lang = "";
const css = {
  code: ".category-container.svelte-1fiu8rg{border:1px solid var(--bg-light);padding:1rem;margin-bottom:1.5rem}.grid.svelte-1fiu8rg{display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem}h2.svelte-1fiu8rg{text-transform:capitalize}@media screen and (max-width: 800px){.grid.svelte-1fiu8rg{grid-template-columns:1fr}}",
  map: null
};
const metadata = {
  "layout": "page",
  "title": "Categories",
  "description": "All categories in one place"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { groupedPosts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Page$1, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${each(groupedPosts, ([category, posts]) => {
        return `<div class="category-container svelte-1fiu8rg"><h2 class="svelte-1fiu8rg">${escape(category)}:</h2>
    <div class="grid svelte-1fiu8rg">${each(posts, (post) => {
          return `${validate_component(PostItem, "PostItem").$$render($$result, { post }, {}, {})}`;
        })}</div>
  </div>`;
      })}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
