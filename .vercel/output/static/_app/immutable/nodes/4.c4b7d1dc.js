import{S as F,i as J,s as K,X as j,y as G,z as H,A as L,Y as Q,Z as B,g,d as p,B as M,_ as C,e as S,b as N,v as T,f as X,L as Y,h as y,k as $,q as E,a as I,l as P,m as x,r as O,c as q,n as k,G as m,C as R}from"../chunks/index.96fb6f30.js";import{P as U}from"../chunks/page.d9b4cea8.js";import{P as W}from"../chunks/PostItem.867ef2b7.js";const ee=async({parent:f})=>{const{posts:e}=await f(),o=e.reduce((t,s)=>{const{categories:l}=s;for(let n of l)t[n]=t[n]??[],t[n].push(s);return t},{});return{groupedPosts:Object.entries(o)}},re=Object.freeze(Object.defineProperty({__proto__:null,load:ee},Symbol.toStringTag,{value:"Module"}));function z(f,e,o){const a=f.slice();return a[3]=e[o][0],a[4]=e[o][1],a}function A(f,e,o){const a=f.slice();return a[7]=e[o],a}function D(f){let e,o;return e=new W({props:{post:f[7]}}),{c(){G(e.$$.fragment)},l(a){H(e.$$.fragment,a)},m(a,t){L(e,a,t),o=!0},p:R,i(a){o||(g(e.$$.fragment,a),o=!0)},o(a){p(e.$$.fragment,a),o=!1},d(a){M(e,a)}}}function V(f){let e,o,a=f[3]+"",t,s,l,n,r,h,d=f[4],c=[];for(let u=0;u<d.length;u+=1)c[u]=D(A(f,d,u));const Z=u=>p(c[u],1,1,()=>{c[u]=null});return{c(){e=$("div"),o=$("h2"),t=E(a),s=E(":"),l=I(),n=$("div");for(let u=0;u<c.length;u+=1)c[u].c();r=I(),this.h()},l(u){e=P(u,"DIV",{class:!0});var _=x(e);o=P(_,"H2",{class:!0});var i=x(o);t=O(i,a),s=O(i,":"),i.forEach(y),l=q(_),n=P(_,"DIV",{class:!0});var v=x(n);for(let b=0;b<c.length;b+=1)c[b].l(v);v.forEach(y),r=q(_),_.forEach(y),this.h()},h(){k(o,"class","svelte-1fiu8rg"),k(n,"class","grid svelte-1fiu8rg"),k(e,"class","category-container svelte-1fiu8rg")},m(u,_){N(u,e,_),m(e,o),m(o,t),m(o,s),m(e,l),m(e,n);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(n,null);m(e,r),h=!0},p(u,_){if(_&1){d=u[4];let i;for(i=0;i<d.length;i+=1){const v=A(u,d,i);c[i]?(c[i].p(v,_),g(c[i],1)):(c[i]=D(v),c[i].c(),g(c[i],1),c[i].m(n,null))}for(T(),i=d.length;i<c.length;i+=1)Z(i);X()}},i(u){if(!h){for(let _=0;_<d.length;_+=1)g(c[_]);h=!0}},o(u){c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)p(c[_]);h=!1},d(u){u&&y(e),Y(c,u)}}}function te(f){let e,o,a=f[0],t=[];for(let l=0;l<a.length;l+=1)t[l]=V(z(f,a,l));const s=l=>p(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=S()},l(l){for(let n=0;n<t.length;n+=1)t[n].l(l);e=S()},m(l,n){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(l,n);N(l,e,n),o=!0},p(l,n){if(n&1){a=l[0];let r;for(r=0;r<a.length;r+=1){const h=z(l,a,r);t[r]?(t[r].p(h,n),g(t[r],1)):(t[r]=V(h),t[r].c(),g(t[r],1),t[r].m(e.parentNode,e))}for(T(),r=a.length;r<t.length;r+=1)s(r);X()}},i(l){if(!o){for(let n=0;n<a.length;n+=1)g(t[n]);o=!0}},o(l){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)p(t[n]);o=!1},d(l){Y(t,l),l&&y(e)}}}function le(f){let e,o;const a=[f[1],w];let t={$$slots:{default:[te]},$$scope:{ctx:f}};for(let s=0;s<a.length;s+=1)t=j(t,a[s]);return e=new U({props:t}),{c(){G(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,l){L(e,s,l),o=!0},p(s,[l]){const n=l&2?Q(a,[l&2&&B(s[1]),l&0&&B(w)]):{};l&1024&&(n.$$scope={dirty:l,ctx:s}),e.$set(n)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){p(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}const w={layout:"page",title:"Categories",description:"All categories in one place"};function ae(f,e,o){let{data:a}=e;const{groupedPosts:t}=a;return f.$$set=s=>{o(1,e=j(j({},e),C(s))),"data"in s&&o(2,a=s.data)},e=C(e),[t,e,a]}class ce extends F{constructor(e){super(),J(this,e,ae,le,K,{data:2})}}export{ce as component,re as universal};
