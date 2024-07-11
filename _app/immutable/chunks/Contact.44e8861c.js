import{s as P,n as T,e as j,j as w}from"./scheduler.eb429c0a.js";import{S as q,i as G,g as v,s as b,h as m,j as y,C as M,c as k,f as d,k as h,a as C,z as f,A as z,m as E,n as A,o as I,x as H}from"./index.c4f85b7b.js";import{e as D,a as W}from"./i18n.3cf7a270.js";function V(i,e,a){const c=i.slice();return c[6]=e[a],c}function X(i){let e,a,c,p,o,u,s=i[6].type+"",n,l;return{c(){e=v("a"),a=v("img"),o=b(),u=v("span"),n=E(s),this.h()},l(t){e=m(t,"A",{href:!0,target:!0,class:!0});var r=y(e);a=m(r,"IMG",{src:!0,alt:!0,class:!0}),o=k(r),u=m(r,"SPAN",{});var _=y(u);n=A(_,s),_.forEach(d),r.forEach(d),this.h()},h(){w(a.src,c=i[6].icon)||h(a,"src",c),h(a,"alt",p=i[6].type),h(a,"class","contact-icon svelte-1flvt0r"),h(e,"href",l=i[6].url),h(e,"target","_blank"),h(e,"class","contact-item svelte-1flvt0r")},m(t,r){C(t,e,r),f(e,a),f(e,o),f(e,u),f(u,n)},p(t,r){r&1&&!w(a.src,c=t[6].icon)&&h(a,"src",c),r&1&&p!==(p=t[6].type)&&h(a,"alt",p),r&1&&s!==(s=t[6].type+"")&&I(n,s),r&1&&l!==(l=t[6].url)&&h(e,"href",l)},d(t){t&&d(e)}}}function Y(i){let e,a,c,p,o,u,s=i[6].url+"",n,l,t;function r(){return i[3](i[6])}return{c(){e=v("div"),a=v("img"),o=b(),u=v("span"),n=E(s),this.h()},l(_){e=m(_,"DIV",{class:!0});var g=y(e);a=m(g,"IMG",{src:!0,alt:!0,class:!0}),o=k(g),u=m(g,"SPAN",{});var S=y(u);n=A(S,s),S.forEach(d),g.forEach(d),this.h()},h(){w(a.src,c=i[6].icon)||h(a,"src",c),h(a,"alt",p=i[6].type),h(a,"class","contact-icon svelte-1flvt0r"),h(e,"class","contact-item svelte-1flvt0r")},m(_,g){C(_,e,g),f(e,a),f(e,o),f(e,u),f(u,n),l||(t=H(e,"click",r),l=!0)},p(_,g){i=_,g&1&&!w(a.src,c=i[6].icon)&&h(a,"src",c),g&1&&p!==(p=i[6].type)&&h(a,"alt",p),g&1&&s!==(s=i[6].url+"")&&I(n,s)},d(_){_&&d(e),l=!1,t()}}}function N(i){let e,a,c,p=i[6].description+"",o,u;function s(t,r){return t[6].type==="Email"?Y:X}let n=s(i),l=n(i);return{c(){e=v("div"),l.c(),a=b(),c=v("p"),o=E(p),u=b(),this.h()},l(t){e=m(t,"DIV",{class:!0});var r=y(e);l.l(r),a=k(r),c=m(r,"P",{class:!0});var _=y(c);o=A(_,p),_.forEach(d),u=k(r),r.forEach(d),this.h()},h(){h(c,"class","contact-description svelte-1flvt0r"),h(e,"class","contact-item-wrapper svelte-1flvt0r")},m(t,r){C(t,e,r),l.m(e,null),f(e,a),f(e,c),f(c,o),f(e,u)},p(t,r){n===(n=s(t))&&l?l.p(t,r):(l.d(1),l=n(t),l&&(l.c(),l.m(e,a))),r&1&&p!==(p=t[6].description+"")&&I(o,p)},d(t){t&&d(e),l.d()}}}function B(i){let e,a,c="SNS & Contact",p,o,u=D(i[0]),s=[];for(let n=0;n<u.length;n+=1)s[n]=N(V(i,u,n));return{c(){e=v("div"),a=v("h1"),a.textContent=c,p=b(),o=v("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=m(n,"DIV",{class:!0});var l=y(e);a=m(l,"H1",{class:!0,"data-svelte-h":!0}),M(a)!=="svelte-1yk0cai"&&(a.textContent=c),p=k(l),o=m(l,"DIV",{class:!0});var t=y(o);for(let r=0;r<s.length;r+=1)s[r].l(t);t.forEach(d),l.forEach(d),this.h()},h(){h(a,"class","contact-title svelte-1flvt0r"),h(o,"class","contact-list svelte-1flvt0r"),h(e,"class","contact-container svelte-1flvt0r")},m(n,l){C(n,e,l),f(e,a),f(e,p),f(e,o);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(o,null)},p(n,[l]){if(l&3){u=D(n[0]);let t;for(t=0;t<u.length;t+=1){const r=V(n,u,t);s[t]?s[t].p(r,l):(s[t]=N(r),s[t].c(),s[t].m(o,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=u.length}},i:T,o:T,d(n){n&&d(e),z(s,n)}}}function F(i,e,a){let c;j(i,W,l=>a(4,c=l));let{lang:p}=e,o=[{type:"YouTube",url:"https://www.youtube.com/@AlienApp",icon:"/icons/youtube.png",description:c("우리 부부의 일상과 앱 개발등을 올리는 곳")},{type:"Threads",url:"",icon:"/icons/threads.png",description:c("앱 개발 기록 & 국제커플에 대한 의견")},{type:"X (Twitter)",url:"https://www.threads.net/@alien_application.global",icon:"/icons/x.png",description:c("앱 개발 기록 & 국제커플에 대한 의견 (영어)")},{type:"Email",url:"contact@alien-app.com",icon:"/icons/email.png",description:c("비즈니스 문의 및 궁금증은 여기로")}];function u(l){a(0,o=o.map(t=>t.type==="Threads"?{...t,url:l.startsWith("ko")?"https://www.threads.net/@alien_application":"https://www.threads.net/@alien_application.global"}:t))}function s(l){navigator.clipboard.writeText(l).then(()=>{alert(c("이메일이 클립보드에 복사되었습니다"))}).catch(t=>{console.error("클립보드 복사 실패: ",t)})}const n=l=>s(l.url);return i.$$set=l=>{"lang"in l&&a(2,p=l.lang)},i.$$.update=()=>{i.$$.dirty&4&&u(p)},[o,s,p,n]}class O extends q{constructor(e){super(),G(this,e,F,B,P,{lang:2})}}export{O as C};
