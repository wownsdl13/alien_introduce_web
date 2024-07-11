import{S as D,i as j,s as N,C as $,D as F,E as Z,w as ee,F as te,k as p,a as E,y as q,l as g,m as v,c as y,h as _,z as P,n as h,b as U,G as d,A as H,H as se,I as le,g as z,d as S,B as V,J as Y,K as B,q as I,r as T,L as re,M as C,u as ae,f as ne,o as oe,N as ie,O as ce,P as ue,Q as fe,v as he}from"../chunks/index.96fb6f30.js";import{$ as de,w as _e}from"../chunks/i18n.65d516e5.js";import{w as pe}from"../chunks/index.0fead47c.js";import{f as J,m as ge,s as X}from"../chunks/constants.008188b5.js";import{e as R}from"../chunks/singletons.d967f97d.js";import{p as me}from"../chunks/stores.605e34d8.js";const ve=async({url:a})=>({supportedLangList:["en","ar","bg","zh","zh","hr","cs","da","nl","fi","fr","de","el","hi","it","ja","ko","no","pl","pt","ro","ru","es","sv"]}),Be=Object.freeze(Object.defineProperty({__proto__:null,load:ve},Symbol.toStringTag,{value:"Module"}));const A=pe(!1),be=a=>{const e=t=>{a&&!a.contains(t.target)&&!t.defaultPrevented&&a.dispatchEvent(new CustomEvent("click_outside",a))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}};function $e(a){let e,t;return{c:$,l:$,m(r,o){e||(t=[F(window,"touchstart",a[6]),F(window,"touchend",a[7])],e=!0)},p:$,i:$,o:$,d(r){e=!1,Z(t)}}}function we(a,e,t){let r=0,o=0,s=0,n=0,{direction:l}=e;const u=()=>{r-s>80&&t(5,l="left"),s-r>80&&t(5,l="right")},f=i=>{t(0,r=i.changedTouches[0].clientX),t(1,o=i.changedTouches[0].clientY)},c=i=>{t(2,s=i.changedTouches[0].clientX),t(3,n=i.changedTouches[0].clientY),u()};return a.$$set=i=>{"direction"in i&&t(5,l=i.direction)},[r,o,s,n,u,l,f,c]}class ke extends D{constructor(e){super(),j(this,e,we,$e,N,{direction:5})}}function Ee(a){let e,t,r,o,s,n,l,u,f,c,i,m,k,O,M;function x(b){a[4](b)}let G={};return a[0]!==void 0&&(G.direction=a[0]),i=new ke({props:G}),ee.push(()=>te(i,"direction",x)),{c(){e=p("div"),t=p("label"),r=p("input"),o=E(),s=p("span"),n=E(),l=p("span"),u=E(),f=p("span"),c=E(),q(i.$$.fragment),this.h()},l(b){e=g(b,"DIV",{class:!0});var L=v(e);t=g(L,"LABEL",{for:!0,class:!0});var w=v(t);r=g(w,"INPUT",{type:!0,id:!0,class:!0}),o=y(w),s=g(w,"SPAN",{class:!0}),v(s).forEach(_),n=y(w),l=g(w,"SPAN",{class:!0}),v(l).forEach(_),u=y(w),f=g(w,"SPAN",{class:!0}),v(f).forEach(_),w.forEach(_),L.forEach(_),c=y(b),P(i.$$.fragment,b),this.h()},h(){h(r,"type","checkbox"),h(r,"id","check"),h(r,"class","svelte-1rqzz57"),h(s,"class","svelte-1rqzz57"),h(l,"class","svelte-1rqzz57"),h(f,"class","svelte-1rqzz57"),h(t,"for","check"),h(t,"class","svelte-1rqzz57"),h(e,"class","sidebar-toggle svelte-1rqzz57")},m(b,L){U(b,e,L),d(e,t),d(t,r),r.checked=a[1],d(t,o),d(t,s),d(t,n),d(t,l),d(t,u),d(t,f),U(b,c,L),H(i,b,L),k=!0,O||(M=[F(r,"change",a[3]),se(be.call(null,e)),F(e,"click_outside",a[2])],O=!0)},p(b,[L]){L&2&&(r.checked=b[1]);const w={};!m&&L&1&&(m=!0,w.direction=b[0],le(()=>m=!1)),i.$set(w)},i(b){k||(z(i.$$.fragment,b),k=!0)},o(b){S(i.$$.fragment,b),k=!1},d(b){b&&_(e),b&&_(c),V(i,b),O=!1,Z(M)}}}function ye(a,e,t){let r;Y(a,A,u=>t(1,r=u));const o=()=>{console.log("open! handle"),r&&(B(A,r=!1,r),t(0,s=""))};let s;function n(){r=this.checked,A.set(r)}function l(u){s=u,t(0,s)}return a.$$.update=()=>{a.$$.dirty&1&&(s=="right"?(console.log("open!"),B(A,r=!0,r)):s=="left"&&(console.log("close!"),B(A,r=!1,r)))},[s,r,o,n,l]}class ze extends D{constructor(e){super(),j(this,e,ye,Ee,N,{})}}function Le(a){let e,t,r,o,s;return{c(){e=p("p"),t=I("© "),r=I(a[0]),o=I(". "),s=I(J),this.h()},l(n){e=g(n,"P",{class:!0});var l=v(e);t=T(l,"© "),r=T(l,a[0]),o=T(l,". "),s=T(l,J),l.forEach(_),this.h()},h(){h(e,"class","svelte-1ska8zb")},m(n,l){U(n,e,l),d(e,t),d(e,r),d(e,o),d(e,s)},p:$,i:$,o:$,d(n){n&&_(e)}}}function Se(a){return[new Date().getFullYear()]}class Ue extends D{constructor(e){super(),j(this,e,Se,Le,N,{})}}function K(a,e,t){const r=a.slice();return r[4]=e[t].title,r[5]=e[t].url,r[6]=e[t].target,r}function Q(a){let e,t,r=a[4]+"",o,s,n,l,u,f;return{c(){e=p("li"),t=p("a"),o=I(r),f=E(),this.h()},l(c){e=g(c,"LI",{});var i=v(e);t=g(i,"A",{rel:!0,"data-sveltekit-prefetch":!0,href:!0,target:!0,class:!0});var m=v(t);o=T(m,r),m.forEach(_),f=y(i),i.forEach(_),this.h()},h(){h(t,"rel",s=a[5].match("http")?"noopener noreferrer":""),h(t,"data-sveltekit-prefetch",n=a[5].match("http")?null:!0),h(t,"href",l=""+(R+a[5])),h(t,"target",u=a[6]),h(t,"class","svelte-z0j5wm"),C(t,"active",a[5]!=="/"?a[1].match(a[5]):a[5]===a[1])},m(c,i){U(c,e,i),d(e,t),d(t,o),d(e,f)},p(c,i){i&1&&r!==(r=c[4]+"")&&ae(o,r),i&1&&s!==(s=c[5].match("http")?"noopener noreferrer":"")&&h(t,"rel",s),i&1&&n!==(n=c[5].match("http")?null:!0)&&h(t,"data-sveltekit-prefetch",n),i&1&&l!==(l=""+(R+c[5]))&&h(t,"href",l),i&1&&u!==(u=c[6])&&h(t,"target",u),i&3&&C(t,"active",c[5]!=="/"?c[1].match(c[5]):c[5]===c[1])},d(c){c&&_(e)}}}function Ae(a){let e,t,r=a[0],o=[];for(let s=0;s<r.length;s+=1)o[s]=Q(K(a,r,s));return{c(){e=p("nav"),t=p("ul");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=g(s,"NAV",{class:!0});var n=v(e);t=g(n,"UL",{});var l=v(t);for(let u=0;u<o.length;u+=1)o[u].l(l);l.forEach(_),n.forEach(_),this.h()},h(){h(e,"class","svelte-z0j5wm")},m(s,n){U(s,e,n),d(e,t);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(t,null)},p(s,[n]){if(n&3){r=s[0];let l;for(l=0;l<r.length;l+=1){const u=K(s,r,l);o[l]?o[l].p(u,n):(o[l]=Q(u),o[l].c(),o[l].m(t,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},i:$,o:$,d(s){s&&_(e),re(o,s)}}}function Ie(a,e,t){let r,o,s;Y(a,me,l=>t(3,s=l));let{blogUrl:n}=e;return a.$$set=l=>{"blogUrl"in l&&t(2,n=l.blogUrl)},a.$$.update=()=>{a.$$.dirty&8&&t(1,r=s.url.pathname),a.$$.dirty&4&&t(0,o=ge.map(l=>l.title==="Blog"?{...l,url:n}:l))},[o,r,n,s]}class Te extends D{constructor(e){super(),j(this,e,Ie,Ae,N,{blogUrl:2})}}function De(a){let e,t,r,o,s,n,l,u,f,c;return n=new Te({props:{blogUrl:a[0]}}),f=new Ue({}),{c(){e=p("div"),t=p("div"),r=p("h1"),o=I(X),s=E(),q(n.$$.fragment),l=E(),u=p("div"),q(f.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var m=v(e);t=g(m,"DIV",{class:!0});var k=v(t);r=g(k,"H1",{class:!0});var O=v(r);o=T(O,X),O.forEach(_),k.forEach(_),s=y(m),P(n.$$.fragment,m),l=y(m),u=g(m,"DIV",{class:!0});var M=v(u);P(f.$$.fragment,M),M.forEach(_),m.forEach(_),this.h()},h(){h(r,"class","svelte-eudn9z"),h(t,"class","wrapper svelte-eudn9z"),h(u,"class","wrapper svelte-eudn9z"),h(e,"class","sidebar svelte-eudn9z"),C(e,"show",a[1])},m(i,m){U(i,e,m),d(e,t),d(t,r),d(r,o),d(e,s),H(n,e,null),d(e,l),d(e,u),H(f,u,null),c=!0},p(i,[m]){const k={};m&1&&(k.blogUrl=i[0]),n.$set(k),(!c||m&2)&&C(e,"show",i[1])},i(i){c||(z(n.$$.fragment,i),z(f.$$.fragment,i),c=!0)},o(i){S(n.$$.fragment,i),S(f.$$.fragment,i),c=!1},d(i){i&&_(e),V(n),V(f)}}}function je(a,e,t){let r;Y(a,A,s=>t(1,r=s));let{blogUrl:o}=e;return a.$$set=s=>{"blogUrl"in s&&t(0,o=s.blogUrl)},[o,r]}class Ne extends D{constructor(e){super(),j(this,e,je,De,N,{blogUrl:0})}}function Oe(a){let e,t,r,o,s;return{c(){e=p("div"),t=p("header"),r=p("a"),o=p("h1"),s=I(X),this.h()},l(n){e=g(n,"DIV",{class:!0});var l=v(e);t=g(l,"HEADER",{class:!0});var u=v(t);r=g(u,"A",{"data-sveltekit-prefetch":!0,href:!0,class:!0});var f=v(r);o=g(f,"H1",{class:!0});var c=v(o);s=T(c,X),c.forEach(_),f.forEach(_),u.forEach(_),l.forEach(_),this.h()},h(){h(o,"class","svelte-12a6kgj"),h(r,"data-sveltekit-prefetch",""),h(r,"href",R+"/"),h(r,"class","svelte-12a6kgj"),h(t,"class","container svelte-12a6kgj"),h(e,"class","header-container svelte-12a6kgj")},m(n,l){U(n,e,l),d(e,t),d(t,r),d(r,o),d(o,s)},p:$,i:$,o:$,d(n){n&&_(e)}}}class qe extends D{constructor(e){super(),j(this,e,null,Oe,N,{})}}function W(a){let e,t,r,o,s,n,l;t=new ze({}),o=new qe({});const u=a[7].default,f=ie(u,a,a[6],null);return{c(){e=p("main"),q(t.$$.fragment),r=E(),q(o.$$.fragment),s=E(),n=p("article"),f&&f.c(),this.h()},l(c){e=g(c,"MAIN",{class:!0});var i=v(e);P(t.$$.fragment,i),r=y(i),P(o.$$.fragment,i),s=y(i),n=g(i,"ARTICLE",{class:!0});var m=v(n);f&&f.l(m),m.forEach(_),i.forEach(_),this.h()},h(){h(n,"class","container svelte-ucxbhv"),h(e,"class","svelte-ucxbhv"),C(e,"show",a[2])},m(c,i){U(c,e,i),H(t,e,null),d(e,r),H(o,e,null),d(e,s),d(e,n),f&&f.m(n,null),l=!0},p(c,i){f&&f.p&&(!l||i&64)&&ce(f,u,c,c[6],l?fe(u,c[6],i,null):ue(c[6]),null),(!l||i&4)&&C(e,"show",c[2])},i(c){l||(z(t.$$.fragment,c),z(o.$$.fragment,c),z(f,c),l=!0)},o(c){S(t.$$.fragment,c),S(o.$$.fragment,c),S(f,c),l=!1},d(c){c&&_(e),V(t),V(o),f&&f.d(c)}}}function Pe(a){let e,t,r,o;t=new Ne({props:{blogUrl:a[0]}});let s=!a[1]&&W(a);return{c(){e=p("div"),q(t.$$.fragment),r=E(),s&&s.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var l=v(e);P(t.$$.fragment,l),r=y(l),s&&s.l(l),l.forEach(_),this.h()},h(){h(e,"class","wrapper overflow-hidden svelte-ucxbhv")},m(n,l){U(n,e,l),H(t,e,null),d(e,r),s&&s.m(e,null),o=!0},p(n,[l]){const u={};l&1&&(u.blogUrl=n[0]),t.$set(u),n[1]?s&&(he(),S(s,1,1,()=>{s=null}),ne()):s?(s.p(n,l),l&2&&z(s,1)):(s=W(n),s.c(),z(s,1),s.m(e,null))},i(n){o||(z(t.$$.fragment,n),z(s),o=!0)},o(n){S(t.$$.fragment,n),S(s),o=!1},d(n){n&&_(e),V(t),s&&s.d()}}}function He(a,e,t){let r,o;Y(a,de,i=>t(1,r=i)),Y(a,A,i=>t(2,o=i));let{$$slots:s={},$$scope:n}=e;async function l(){return _e()}let{data:u}=e,f="",c="";return oe(()=>{t(5,c=navigator.language.split("-")[0])}),a.$$set=i=>{"data"in i&&t(4,u=i.data),"$$scope"in i&&t(6,n=i.$$scope)},a.$$.update=()=>{a.$$.dirty&48&&t(0,f=u.supportedLangList.includes(c)?`https://alien.durumis.com/${c}`:"https://alien.durumis.com/en")},[f,r,o,l,u,c,n,s]}class Re extends D{constructor(e){super(),j(this,e,He,Pe,N,{preload:3,data:4})}get preload(){return this.$$.ctx[3]}}export{Re as component,Be as universal};