import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { P as Post } from "../../../../chunks/post.js";
const metadata = {
  "layout": "post",
  "title": "The most beautiful things in the world cannot be seen",
  "description": "Welcome to Earth. It’s hot in the summer and cold in the winter. It’s round and wet and crowded. On the outside, babies, you’ve got a hundred years here.",
  "categories": ["nature", "bird"],
  "date": "1st May 2021",
  "edit": "https://github.com/sharu725/yuyutsu/blob/master/src/routes/posts/third-post/%2Bpage.md",
  "image": "https://picsum.photos/id/656/800/350"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p>Truly it was a great journey, and in it I met with many, whom to know was to love; but whom never could I see again; for life has not space enough; and each must do his duty to the security and well-being of the Redoubt. Yet, for all that I have set down, we travelled much, always; but there were so many millions, and so few years.</p>
<p>Atticus said to Jem one day, “I’d rather you shot at tin cans in the backyard, but I know you’ll go after birds. Shoot all the blue jays you want, if you can hit ‘em, but remember it’s a sin to kill a mockingbird.” That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it. “Your father’s right,” she said. “Mockingbirds don’t do one thing except make music for us to enjoy. They don’t eat up people’s gardens, don’t nest in corn cribs, they don’t do one thing but sing their hearts out for us. That’s why it’s a sin to kill a mockingbird.</p>
<p>I took a deep breath and listened to the old brag of my heart. I am, I am, I am.</p>
<p>We believe that we can change the things around us in accordance with our desires—we believe it because otherwise we can see no favourable outcome. We do not think of the outcome which generally comes to pass and is also favourable: we do not succeed in changing things in accordance with our desires, but gradually our desires change. The situation that we hoped to change because it was intolerable becomes unimportant to us. We have failed to surmount the obstacle, as we were absolutely determined to do, but life has taken us round it, led us beyond it, and then if we turn round to gaze into the distance of the past, we can barely see it, so imperceptible has it become.</p>
<p>The most beautiful things in the world cannot be seen or touched, they are felt with the heart.</p>
<p>Hello babies. Welcome to Earth. It’s hot in the summer and cold in the winter. It’s round and wet and crowded. On the outside, babies, you’ve got a hundred years here. There’s only one rule that I know of, babies-“God damn it, you’ve got to be kind.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
