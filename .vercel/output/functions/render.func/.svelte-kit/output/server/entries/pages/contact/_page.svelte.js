import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { C as Contact } from "../../../chunks/Contact.js";
import "../../../chunks/i18n.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lang = "en";
  return `${validate_component(Contact, "Contact").$$render($$result, { lang }, {}, {})}`;
});
export {
  Page as default
};
