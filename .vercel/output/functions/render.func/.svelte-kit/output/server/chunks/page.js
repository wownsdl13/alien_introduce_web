import { c as create_ssr_component, v as validate_component } from "./index2.js";
import { S as Seo } from "./Seo.js";
import { s as siteTitle } from "./constants.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { title, description } = $$props;
  const seo = {
    title: `${title} | ${siteTitle}`,
    description
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `${validate_component(Seo, "Seo").$$render($$result, Object.assign({}, seo), {}, {})}


${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as P
};
