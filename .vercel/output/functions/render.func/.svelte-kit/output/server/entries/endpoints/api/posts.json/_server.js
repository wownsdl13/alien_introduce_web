const GET = async ({ url }) => {
  const modules = /* @__PURE__ */ Object.assign({ "../../posts/example-content/+page.md": () => import("../../../pages/posts/example-content/_page.md.js"), "../../posts/second-post/+page.md": () => import("../../../pages/posts/second-post/_page.md.js"), "../../posts/third-post/+page.md": () => import("../../../pages/posts/third-post/_page.md.js") });
  const postPromises = [];
  const limit = Number(url.searchParams.get("limit") ?? Infinity);
  if (Number.isNaN(limit)) {
    return {
      status: 400
    };
  }
  for (let [path, resolver] of Object.entries(modules)) {
    const slug = path.replace("../../posts/", "").replace("/+page.md", "");
    const promise = resolver().then((post) => ({
      slug,
      ...post.metadata
    }));
    postPromises.push(promise);
  }
  const posts = await Promise.all(postPromises);
  const publishedPosts = posts.filter((post) => post.published !== false).slice(0, limit);
  publishedPosts.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);
  const data = publishedPosts.slice(0, limit);
  return new Response(JSON.stringify(data));
};
export {
  GET
};
