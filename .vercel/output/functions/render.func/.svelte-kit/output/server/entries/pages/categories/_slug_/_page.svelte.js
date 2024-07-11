import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../../chunks/index2.js";
import { P as PostItem } from "../../../../chunks/PostItem.js";
import { s as siteTitle } from "../../../../chunks/constants.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-16hzhw7{text-transform:capitalize}@media screen and (max-width: 800px){h1.svelte-16hzhw7{font-size:2rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts, title } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1 class="svelte-16hzhw7">Category: ${escape(title)}</h1>
${each(posts, (post) => {
    return `${validate_component(PostItem, "PostItem").$$render($$result, { post }, {}, {})}`;
  })}

${$$result.head += `<!-- HEAD_svelte-tb3hug_START -->${$$result.title = `<title>${escape(title)} | ${escape(siteTitle)}</title>`, ""}<meta name="description" content="Categories are found here"><!-- HEAD_svelte-tb3hug_END -->`, ""}`;
});
export {
  Page as default
};
