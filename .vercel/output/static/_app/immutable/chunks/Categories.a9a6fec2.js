import{S as C,i as x,s as b,k as _,l as u,m as g,h,n as o,b as k,C as v,L as y,q as E,a as L,r as q,c as z,G as f,u as S}from"./index.96fb6f30.js";function m(i,l,s){const e=i.slice();return e[1]=l[s],e}function p(i){let l,s,e=i[1]+"",t,r,a;return{c(){l=_("li"),s=_("a"),t=E(e),a=L(),this.h()},l(n){l=u(n,"LI",{});var c=g(l);s=u(c,"A",{"data-sveltekit-prefetch":!0,rel:!0,href:!0,class:!0});var d=g(s);t=q(d,e),d.forEach(h),a=z(c),c.forEach(h),this.h()},h(){o(s,"data-sveltekit-prefetch",""),o(s,"rel","external"),o(s,"href",r=`/categories/${i[1]}`),o(s,"class","svelte-zn3fov")},m(n,c){k(n,l,c),f(l,s),f(s,t),f(l,a)},p(n,c){c&1&&e!==(e=n[1]+"")&&S(t,e),c&1&&r!==(r=`/categories/${n[1]}`)&&o(s,"href",r)},d(n){n&&h(l)}}}function $(i){let l,s=i[0],e=[];for(let t=0;t<s.length;t+=1)e[t]=p(m(i,s,t));return{c(){l=_("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=u(t,"UL",{class:!0});var r=g(l);for(let a=0;a<e.length;a+=1)e[a].l(r);r.forEach(h),this.h()},h(){o(l,"class","categories svelte-zn3fov")},m(t,r){k(t,l,r);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,null)},p(t,[r]){if(r&1){s=t[0];let a;for(a=0;a<s.length;a+=1){const n=m(t,s,a);e[a]?e[a].p(n,r):(e[a]=p(n),e[a].c(),e[a].m(l,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=s.length}},i:v,o:v,d(t){t&&h(l),y(e,t)}}}function A(i,l,s){let{categories:e}=l;return i.$$set=t=>{"categories"in t&&s(0,e=t.categories)},[e]}class I extends C{constructor(l){super(),x(this,l,A,$,b,{categories:0})}}export{I as C};