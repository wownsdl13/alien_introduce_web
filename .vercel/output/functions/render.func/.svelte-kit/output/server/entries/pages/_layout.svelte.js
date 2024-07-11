import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, d as set_store_value, e as escape, f as each } from "../../chunks/index2.js";
import { $ as $isLoading, w as waitLocale } from "../../chunks/i18n.js";
import { w as writable } from "../../chunks/index.js";
import { f as footerText, m as menu, s as siteTitle } from "../../chunks/constants.js";
import { b as base } from "../../chunks/paths.js";
import { p as page } from "../../chunks/stores.js";
const reset = "";
const global = "";
const syntaxHighlight = "";
const isSidebarOpen = writable(false);
const Swipe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { direction } = $$props;
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  return ``;
});
const SidebarToggle_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.sidebar-toggle.svelte-1rqzz57.svelte-1rqzz57{position:absolute;display:inline-block;margin:1rem 2rem}label.svelte-1rqzz57.svelte-1rqzz57{display:flex;flex-direction:column;width:40px;cursor:pointer}label.svelte-1rqzz57 span.svelte-1rqzz57{background:var(--headers-color);border-radius:5px;height:3px;margin:5px 0;transition:0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)}span.svelte-1rqzz57.svelte-1rqzz57:nth-of-type(1){width:50%}span.svelte-1rqzz57.svelte-1rqzz57:nth-of-type(2){width:100%}span.svelte-1rqzz57.svelte-1rqzz57:nth-of-type(3){width:75%}input[type="checkbox"].svelte-1rqzz57.svelte-1rqzz57{display:none}input[type="checkbox"].svelte-1rqzz57:checked~span.svelte-1rqzz57{color:white}input[type="checkbox"].svelte-1rqzz57:checked~span.svelte-1rqzz57:nth-of-type(1){transform-origin:bottom;transform:rotatez(45deg) translate(6px, 2px)}input[type="checkbox"].svelte-1rqzz57:checked~span.svelte-1rqzz57:nth-of-type(2){transform-origin:top;transform:rotatez(-45deg)}input[type="checkbox"].svelte-1rqzz57:checked~span.svelte-1rqzz57:nth-of-type(3){transform-origin:bottom;width:50%;transform:translate(17px, -6px) rotatez(45deg)}@media screen and (max-width: 800px){.sidebar-toggle.svelte-1rqzz57.svelte-1rqzz57{margin:1.5rem}label.svelte-1rqzz57.svelte-1rqzz57{width:32px}label.svelte-1rqzz57 span.svelte-1rqzz57{height:2px;margin:3px 0}input[type="checkbox"].svelte-1rqzz57:checked~span.svelte-1rqzz57:nth-of-type(1){transform:rotatez(45deg) translate(4px, 0px)}input[type="checkbox"].svelte-1rqzz57:checked~span.svelte-1rqzz57:nth-of-type(3){transform:translate(13px, -3px) rotatez(45deg)}}',
  map: null
};
const SidebarToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isSidebarOpen, $$unsubscribe_isSidebarOpen;
  $$unsubscribe_isSidebarOpen = subscribe(isSidebarOpen, (value) => $isSidebarOpen = value);
  let direction;
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (direction == "right") {
        console.log("open!");
        set_store_value(isSidebarOpen, $isSidebarOpen = true, $isSidebarOpen);
      } else if (direction == "left") {
        console.log("close!");
        set_store_value(isSidebarOpen, $isSidebarOpen = false, $isSidebarOpen);
      }
    }
    $$rendered = `<div class="sidebar-toggle svelte-1rqzz57"><label for="check" class="svelte-1rqzz57"><input type="checkbox" id="check" class="svelte-1rqzz57"${add_attribute("checked", $isSidebarOpen, 1)}>
    <span class="svelte-1rqzz57"></span>
    <span class="svelte-1rqzz57"></span>
    <span class="svelte-1rqzz57"></span></label></div>
${validate_component(Swipe, "Swipe").$$render(
      $$result,
      { direction },
      {
        direction: ($$value) => {
          direction = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_isSidebarOpen();
  return $$rendered;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "p.svelte-1ska8zb{color:#ddd;font-size:0.9rem}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  $$result.css.add(css$4);
  return `<p class="svelte-1ska8zb">© ${escape(year)}. ${escape(footerText)}</p>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-z0j5wm ul li a.svelte-z0j5wm{padding:1rem 2rem;border-bottom:1px solid var(--text-color)}nav.svelte-z0j5wm ul li:first-child a.svelte-z0j5wm{border-top:1px solid var(--text-color)}nav.svelte-z0j5wm ul li a.svelte-z0j5wm:hover,.active.svelte-z0j5wm.svelte-z0j5wm{background-color:var(--text-color)}a.svelte-z0j5wm.svelte-z0j5wm{display:block;color:#ddd;text-decoration:none}a.svelte-z0j5wm.svelte-z0j5wm:hover{text-decoration:none}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathname;
  let updatedMenu;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { blogUrl } = $$props;
  if ($$props.blogUrl === void 0 && $$bindings.blogUrl && blogUrl !== void 0)
    $$bindings.blogUrl(blogUrl);
  $$result.css.add(css$3);
  pathname = $page.url.pathname;
  updatedMenu = menu.map((item) => item.title === "Blog" ? { ...item, url: blogUrl } : item);
  $$unsubscribe_page();
  return `<nav class="svelte-z0j5wm"><ul>${each(updatedMenu, ({ title, url, target }) => {
    return `<li><a${add_attribute("rel", url.match("http") ? "noopener noreferrer" : "", 0)}${add_attribute("data-sveltekit-prefetch", url.match("http") ? null : true, 0)} href="${escape(base, true) + escape(url, true)}"${add_attribute("target", target, 0)} class="${[
      "svelte-z0j5wm",
      (url !== "/" ? pathname.match(url) : url === pathname) ? "active" : ""
    ].join(" ").trim()}">${escape(title)}</a>
            </li>`;
  })}
        
        </ul>
</nav>`;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".sidebar.svelte-eudn9z{position:fixed;display:flex;flex-direction:column;left:-18rem;width:18rem;height:100vh;background-color:var(--sidebar-bg);font-size:1rem;z-index:9999}h1.svelte-eudn9z{color:#ddd;font-weight:bold;font-size:2rem}.show.svelte-eudn9z{transform:translateX(18rem);box-shadow:0 10px 5px var(--sidebar-bg)}.wrapper.svelte-eudn9z{padding:2rem}@media screen and (max-width: 800px){.sidebar.svelte-eudn9z{left:-16rem;width:16rem}.show.svelte-eudn9z{transform:translateX(16rem)}}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isSidebarOpen, $$unsubscribe_isSidebarOpen;
  $$unsubscribe_isSidebarOpen = subscribe(isSidebarOpen, (value) => $isSidebarOpen = value);
  let { blogUrl } = $$props;
  if ($$props.blogUrl === void 0 && $$bindings.blogUrl && blogUrl !== void 0)
    $$bindings.blogUrl(blogUrl);
  $$result.css.add(css$2);
  $$unsubscribe_isSidebarOpen();
  return `<div class="${["sidebar svelte-eudn9z", $isSidebarOpen ? "show" : ""].join(" ").trim()}"><div class="wrapper svelte-eudn9z"><h1 class="svelte-eudn9z">${escape(siteTitle)}</h1></div>
  ${validate_component(Nav, "Nav").$$render($$result, { blogUrl }, {}, {})}
  <div class="wrapper svelte-eudn9z">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".header-container.svelte-12a6kgj.svelte-12a6kgj{border-bottom:1px solid var(--bg-light)}header.svelte-12a6kgj h1.svelte-12a6kgj{font-size:2rem;margin:0.5rem 0;font-weight:600;text-align:center}header.svelte-12a6kgj a.svelte-12a6kgj{text-decoration:none}@media screen and (max-width: 800px){header.svelte-12a6kgj h1.svelte-12a6kgj{text-align:center;margin:0.35rem 0}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="header-container svelte-12a6kgj"><header class="container svelte-12a6kgj"><a data-sveltekit-prefetch href="${escape(base, true) + "/"}" class="svelte-12a6kgj"><h1 class="svelte-12a6kgj">${escape(siteTitle)}</h1></a></header>
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-ucxbhv{display:flex;overflow:hidden}main.svelte-ucxbhv{width:100%}article.svelte-ucxbhv{margin:2rem auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading$1, $$unsubscribe_isLoading;
  let $isSidebarOpen, $$unsubscribe_isSidebarOpen;
  $$unsubscribe_isLoading = subscribe($isLoading, (value) => $isLoading$1 = value);
  $$unsubscribe_isSidebarOpen = subscribe(isSidebarOpen, (value) => $isSidebarOpen = value);
  async function preload() {
    return waitLocale();
  }
  let { data } = $$props;
  let blogUrl = "";
  let lang = "";
  if ($$props.preload === void 0 && $$bindings.preload && preload !== void 0)
    $$bindings.preload(preload);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    {
      blogUrl = data.supportedLangList.includes(lang) ? `https://alien.durumis.com/${lang}` : "https://alien.durumis.com/en";
    }
  }
  $$unsubscribe_isLoading();
  $$unsubscribe_isSidebarOpen();
  return `<div class="wrapper overflow-hidden svelte-ucxbhv">${validate_component(Sidebar, "Sidebar").$$render($$result, { blogUrl }, {}, {})}
  ${!$isLoading$1 ? `<main class="${["svelte-ucxbhv", $isSidebarOpen ? "show" : ""].join(" ").trim()}">${validate_component(SidebarToggle, "SidebarToggle").$$render($$result, {}, {}, {})}
      ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
      <article class="container svelte-ucxbhv">${slots.default ? slots.default({}) : ``}</article></main>` : ``}
</div>`;
});
export {
  Layout as default
};
