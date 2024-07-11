import { c as create_ssr_component, e as escape, b as add_attribute, f as each } from "./index2.js";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { image = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `${$$result.head += `<!-- HEAD_svelte-iwjmyp_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``}<meta name="robots"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}><meta name="googlebot"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}>${description ? `<meta name="description"${add_attribute("content", description, 0)}>` : ``}${image ? `<meta property="og:image"${add_attribute("content", image, 0)}>
    <meta property="og:image:alt"${add_attribute("content", title, 0)}>` : ``}${canonical ? `<link rel="canonical"${add_attribute("href", canonical, 0)}>` : ``}${keywords ? `<meta name="keywords"${add_attribute("content", keywords, 0)}>` : ``}${openGraph ? `${openGraph.title ? `<meta property="og:title"${add_attribute("content", openGraph.title, 0)}>` : ``}

    ${openGraph.description ? `<meta property="og:description"${add_attribute("content", openGraph.description, 0)}>` : ``}

    ${openGraph.url || canonical ? `<meta property="og:url"${add_attribute("content", openGraph.url || canonical, 0)}>` : ``}

    ${openGraph.type ? `<meta property="og:type"${add_attribute("content", openGraph.type.toLowerCase(), 0)}>` : ``}

    ${openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="article:published_time"${add_attribute("content", openGraph.article.publishedTime, 0)}>` : ``}

      ${openGraph.article.modifiedTime ? `<meta property="article:modified_time"${add_attribute("content", openGraph.article.modifiedTime, 0)}>` : ``}

      ${openGraph.article.expirationTime ? `<meta property="article:expiration_time"${add_attribute("content", openGraph.article.expirationTime, 0)}>` : ``}

      ${openGraph.article.section ? `<meta property="article:section"${add_attribute("content", openGraph.article.section, 0)}>` : ``}

      ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="article:author"${add_attribute("content", author, 0)}>`;
  })}` : ``}

      ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="article:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : ``}` : ``}${twitter ? `<meta name="twitter:card"${add_attribute("content", twitter.card || "summary_large_image", 0)}>
    ${twitter.site ? `<meta name="twitter:site"${add_attribute("content", twitter.site, 0)}>` : ``}
    ${twitter.title ? `<meta name="twitter:title"${add_attribute("content", twitter.title, 0)}>` : ``}
    ${twitter.description ? `<meta name="twitter:description"${add_attribute("content", twitter.description, 0)}>` : ``}
    ${twitter.image ? `<meta name="twitter:image"${add_attribute("content", twitter.image, 0)}>` : ``}
    ${twitter.imageAlt ? `<meta name="twitter:image:alt"${add_attribute("content", twitter.imageAlt, 0)}>` : ``}
    ${twitter.player ? `<meta name="twitter:player"${add_attribute("content", twitter.player, 0)}>` : ``}
    ${twitter.playerWidth ? `<meta name="twitter:player:width"${add_attribute("content", twitter.playerWidth, 0)}>` : ``}
    ${twitter.playerHeight ? `<meta name="twitter:player:height"${add_attribute("content", twitter.playerHeight, 0)}>` : ``}` : ``}${slots.default ? slots.default({}) : ``}<!-- HEAD_svelte-iwjmyp_END -->`, ""}`;
});
export {
  Seo as S
};
