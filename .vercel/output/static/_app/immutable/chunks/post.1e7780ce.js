import{S as K,i as L,s as U,X as V,N as W,y as Y,a as S,k,q as O,z as Z,c as q,l as A,m as z,r as Q,h as r,n as f,R as y,A as D,b as c,G as B,Y as x,Z as $,u as F,O as ee,P as te,Q as se,g as R,d as T,B as J}from"./index.96fb6f30.js";import{S as ie}from"./Seo.b74416a3.js";import{C as ae}from"./Categories.a9a6fec2.js";import{s as le}from"./constants.008188b5.js";function re(i){let l,_,g,v,d,o,h,E,n,P,a,w,s,G,b,p,H,u;const I=[i[5]];let M={};for(let e=0;e<I.length;e+=1)M=V(M,I[e]);l=new ie({props:M}),n=new ae({props:{categories:i[2]}});const N=i[9].default,m=W(N,i,i[8],null);return{c(){Y(l.$$.fragment),_=S(),g=k("h1"),v=O(i[0]),d=S(),o=k("p"),h=O(i[1]),E=S(),Y(n.$$.fragment),P=S(),a=k("img"),s=S(),m&&m.c(),G=S(),b=k("p"),p=k("a"),H=O("Edit this page"),this.h()},l(e){Z(l.$$.fragment,e),_=q(e),g=A(e,"H1",{class:!0});var t=z(g);v=Q(t,i[0]),t.forEach(r),d=q(e),o=A(e,"P",{class:!0});var j=z(o);h=Q(j,i[1]),j.forEach(r),E=q(e),Z(n.$$.fragment,e),P=q(e),a=A(e,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),s=q(e),m&&m.l(e),G=q(e),b=A(e,"P",{class:!0});var C=z(b);p=A(C,"A",{href:!0,target:!0,class:!0});var X=z(p);H=Q(X,"Edit this page"),X.forEach(r),C.forEach(r),this.h()},h(){f(g,"class","svelte-xreirr"),f(o,"class","date svelte-xreirr"),f(a,"width","800"),f(a,"height","300"),y(a.src,w=i[4])||f(a,"src",w),f(a,"alt",i[0]),f(a,"class","svelte-xreirr"),f(p,"href",i[3]),f(p,"target","_blank"),f(p,"class","svelte-xreirr"),f(b,"class","edit svelte-xreirr")},m(e,t){D(l,e,t),c(e,_,t),c(e,g,t),B(g,v),c(e,d,t),c(e,o,t),B(o,h),c(e,E,t),D(n,e,t),c(e,P,t),c(e,a,t),c(e,s,t),m&&m.m(e,t),c(e,G,t),c(e,b,t),B(b,p),B(p,H),u=!0},p(e,[t]){const j=t&32?x(I,[$(e[5])]):{};l.$set(j),(!u||t&1)&&F(v,e[0]),(!u||t&2)&&F(h,e[1]);const C={};t&4&&(C.categories=e[2]),n.$set(C),(!u||t&16&&!y(a.src,w=e[4]))&&f(a,"src",w),(!u||t&1)&&f(a,"alt",e[0]),m&&m.p&&(!u||t&256)&&ee(m,N,e,e[8],u?se(N,e[8],t,null):te(e[8]),null),(!u||t&8)&&f(p,"href",e[3])},i(e){u||(R(l.$$.fragment,e),R(n.$$.fragment,e),R(m,e),u=!0)},o(e){T(l.$$.fragment,e),T(n.$$.fragment,e),T(m,e),u=!1},d(e){J(l,e),e&&r(_),e&&r(g),e&&r(d),e&&r(o),e&&r(E),J(n,e),e&&r(P),e&&r(a),e&&r(s),m&&m.d(e),e&&r(G),e&&r(b)}}}function fe(i,l,_){let{$$slots:g={},$$scope:v}=l,{data:d}=l,{title:o,description:h,date:E,categories:n,edit:P,image:a}=l;const w={title:`${o} | ${le}`,description:h,image:a};return i.$$set=s=>{"data"in s&&_(6,d=s.data),"title"in s&&_(0,o=s.title),"description"in s&&_(7,h=s.description),"date"in s&&_(1,E=s.date),"categories"in s&&_(2,n=s.categories),"edit"in s&&_(3,P=s.edit),"image"in s&&_(4,a=s.image),"$$scope"in s&&_(8,v=s.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&d.posts},[o,E,n,P,a,w,d,h,v,g]}class ue extends K{constructor(l){super(),L(this,l,fe,re,U,{data:6,title:0,description:7,date:1,categories:2,edit:3,image:4})}}export{ue as P};