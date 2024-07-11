import { c as create_ssr_component, f as each, b as add_attribute, e as escape } from "./index2.js";
const Categories_svelte_svelte_type_style_lang = "";
const css = {
  code: ".categories.svelte-zn3fov.svelte-zn3fov{display:flex;margin-bottom:1rem}.categories.svelte-zn3fov a.svelte-zn3fov{margin-right:1rem;padding:0.05rem 0.5rem;border-radius:0.2rem;text-decoration:none;font-size:0.9rem;font-weight:300;box-shadow:inset 0 0 5px var(--text-light);transition-duration:300ms}.categories.svelte-zn3fov a.svelte-zn3fov:hover{color:white;background-color:rgb(97, 97, 97)}",
  map: null
};
const Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categories } = $$props;
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  $$result.css.add(css);
  return `<ul class="categories svelte-zn3fov">${each(categories, (category) => {
    return `<li><a data-sveltekit-prefetch rel="external"${add_attribute("href", `/categories/${category}`, 0)} class="svelte-zn3fov">${escape(category)}</a>
    </li>`;
  })}
</ul>`;
});
export {
  Categories as C
};
