import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { P as Post } from "../../../../chunks/post.js";
const metadata = {
  "layout": "post",
  "title": "Example HTML Content",
  "description": "They don’t eat up people’s gardens, don’t nest in corn cribs, they don’t do one thing but sing their hearts out for us. That’s why it’s a sin to kill a mockingbird.",
  "categories": ["nature", "html"],
  "date": "10th April 2021",
  "edit": "https://github.com/sharu725/yuyutsu/blob/master/src/routes/posts/example-content/%2Bpage.md",
  "image": "https://picsum.photos/id/1083/800/350"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p>Cum sociis natoque penatibus et magnis <a href="/">dis parturient montes</a>, nascetur ridiculus mus. <em>Aenean eu leo quam.</em> Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
<blockquote><p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></blockquote>
<p>Etiam porta <strong>sem malesuada magna</strong> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
<h2>Inline HTML elements</h2>
<p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" rel="nofollow">Mozilla Developer Network</a>.</p>
<ul><li><strong>To bold text</strong>, use <code>**</code>.</li>
<li><em>To italicize text</em>, use <code>_</code>.</li>
<li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use <code>&lt;abbr&gt;</code>, with an optional <code>title</code> attribute for the full phrase.</li>
<li>Citations, like <cite>— Yuyustsu</cite>, should use <code>&lt;cite&gt;</code>.</li>
<li><del>Deleted</del> text should use \`<del>\` and <ins>inserted</ins> text should use \`<ins>\`.</ins></del></li>
<li>Superscript <sup>text</sup> uses <code>&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code>&lt;sub&gt;</code>.</li></ul>
<p>Most of these elements are styled by browsers with few modifications on our part.</p>
<h2>Headings</h2>
<h1>A header</h1>
<h2>A header</h2>
<h3>A header</h3>
<h4>A header</h4>
<h5>A header</h5>
<h6>A header</h6>
<p>Vivamus sagittis lacus vel augue rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<h3>Code</h3>
<p>Cum sociis natoque penatibus et magnis dis <code>code element</code> montes, nascetur ridiculus mus.</p>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// Example can be run directly in your JavaScript console</span>

<span class="token comment">// Create a function that takes two arguments and returns the sum of those arguments</span>
<span class="token keyword">var</span> adder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"return a + b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Call the function</span>
<span class="token function">adder</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// > 8</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
<h3>Lists</h3>
<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
<ul><li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
<li>Donec id elit non mi porta gravida at eget metus.</li>
<li>Nulla vitae elit libero, a pharetra augue.</li></ul>
<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
<ol><li>Vestibulum id ligula porta felis euismod semper.</li>
<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
<li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li></ol>
<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
<dl><dt>HyperText Markup Language (HTML)</dt><dd>The language used to describe and define the content of a Web page</dd><dt>Cascading Style Sheets (CSS)</dt><dd>Used to describe the appearance of Web content</dd><dt>JavaScript (JS)</dt><dd>The programming language used to build advanced Web sites and applications</dd></dl>
<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
<h3>Tables</h3>
<p>Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<table><thead><tr><th>Name</th>
      <th>Upvotes</th>
      <th>Downvotes</th></tr></thead>
  <tfoot><tr><td>Totals</td>
      <td>21</td>
      <td>23</td></tr></tfoot>
  <tbody><tr><td>Alice</td>
      <td>10</td>
      <td>11</td></tr>
    <tr><td>Bob</td>
      <td>4</td>
      <td>3</td></tr>
    <tr><td>Charlie</td>
      <td>7</td>
      <td>9</td></tr></tbody></table>
<p>Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
<hr>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
