const load = async ({ parent }) => {
  const { posts } = await parent();
  const groupByCategory = posts.reduce((group, post) => {
    const { categories } = post;
    for (let category of categories) {
      group[category] = group[category] ?? [];
      group[category].push(post);
    }
    return group;
  }, {});
  const groupedPosts = Object.entries(groupByCategory);
  return {
    groupedPosts
  };
};
export {
  load
};
