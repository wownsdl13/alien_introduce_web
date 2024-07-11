import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { P as Page$1 } from "../../../chunks/page.js";
const metadata = {
  "layout": "page",
  "title": "About",
  "description": "Yuyutsu was the only son of Dhritarashtra who survived the Kurukshetra war."
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page$1, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p>Yuyutsu was the only son of Dhritarashtra who survived the Kurukshetra war.</p>
<a target="_blank" href="https://github.com/sharu725/yuyutsu"><button>Star this project</button></a>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
