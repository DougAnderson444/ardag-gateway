import{_ as N}from"./preload-helper-aa6bc0ce.js";import{S as T,i as B,s as F,a as L,e as k,c as R,b as p,f as u,g as h,t as m,d as y,h as g,o as H,B as J,C as K,D as Q,E as U,k as E,v as A,l as M,m as P,w as W,n as G,F as X,x as I,y as q,T as Y}from"./index-dee658ab.js";const Z=r=>({tagNode:r&8,data:r&16}),C=r=>({tagNode:r[3],data:r[4]});function O(r){let s;const l=r[10].default,e=J(l,r,r[9],C);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,a){e&&e.m(t,a),s=!0},p(t,a){e&&e.p&&(!s||a&536)&&K(e,l,t,t[9],s?U(l,t[9],a,Z):Q(t[9]),C)},i(t){s||(u(e,t),s=!0)},o(t){m(e,t),s=!1},d(t){e&&e.d(t)}}}function S(r){let s,l,e,t;var a=r[0];function o(n){return{props:{esModule:n[1],props:n[2]}}}return a&&(e=new a(o(r)),e.$on("change",r[11]),e.$on("change",r[12])),{c(){s=E("div"),l=E("div"),e&&A(e.$$.fragment),this.h()},l(n){s=M(n,"DIV",{class:!0});var f=P(s);l=M(f,"DIV",{class:!0});var _=P(l);e&&W(e.$$.fragment,_),_.forEach(g),f.forEach(g),this.h()},h(){G(l,"class","flex-1 w-full my-0 mx-auto box-border justify-start svelte-18psq5z"),G(s,"class","flex-1 flex flex-col svelte-18psq5z")},m(n,f){p(n,s,f),X(s,l),e&&I(e,l,null),t=!0},p(n,f){const _={};if(f&2&&(_.esModule=n[1]),f&4&&(_.props=n[2]),a!==(a=n[0])){if(e){h();const d=e;m(d.$$.fragment,1,0,()=>{q(d,1)}),y()}a?(e=new a(o(n)),e.$on("change",n[11]),e.$on("change",n[12]),A(e.$$.fragment),u(e.$$.fragment,1),I(e,l,null)):e=null}else a&&e.$set(_)},i(n){t||(e&&u(e.$$.fragment,n),t=!0)},o(n){e&&m(e.$$.fragment,n),t=!1},d(n){n&&g(s),e&&q(e)}}}function x(r){let s,l,e,t=r[3]&&O(r),a=r[0]&&(r[1]||r[2]&&r[1])&&S(r);return{c(){t&&t.c(),s=L(),a&&a.c(),l=k()},l(o){t&&t.l(o),s=R(o),a&&a.l(o),l=k()},m(o,n){t&&t.m(o,n),p(o,s,n),a&&a.m(o,n),p(o,l,n),e=!0},p(o,[n]){o[3]?t?(t.p(o,n),n&8&&u(t,1)):(t=O(o),t.c(),u(t,1),t.m(s.parentNode,s)):t&&(h(),m(t,1,1,()=>{t=null}),y()),o[0]&&(o[1]||o[2]&&o[1])?a?(a.p(o,n),n&7&&u(a,1)):(a=S(o),a.c(),u(a,1),a.m(l.parentNode,l)):a&&(h(),m(a,1,1,()=>{a=null}),y())},i(o){e||(u(t),u(a),e=!0)},o(o){m(t),m(a),e=!1},d(o){t&&t.d(o),o&&g(s),a&&a.d(o),o&&g(l)}}}function $(r,s,l){let{$$slots:e={},$$scope:t}=s,{owner:a}=s,{tag:o}=s,{ardag:n}=s,{dag:f}=s,_,d,w,c,v;H(async()=>{l(0,{Gateway:_}=await N(()=>import("./index-6b2c008e.js"),["index-6b2c008e.js","..\\assets\\index-041e767e.css","index-dee658ab.js","preload-helper-aa6bc0ce.js"],import.meta.url),_)});async function V(){try{const i=await n.load({dagOwner:a,dag:f});l(3,c=(await f.get(i,{path:`${o}/obj/`})).value)}catch(i){throw new Error(i)}try{l(2,w=await D(c)),l(1,d=await b(c))}catch{if(!c.dappowner)throw new Error("No DApp or DApp owner found. Do not know where to fetch DApp from.");await n.load({dagOwner:c.dappowner,dag:f}),l(2,w=await D(c)),l(1,d=await b(c))}}async function b(i){return(await f.get(i.compiled)).value.value}async function D(i){return i!=null&&i.data?(await f.get(i.data)).value.value:{}}function j(i){Y.call(this,r,i)}const z=i=>l(4,v=i.detail);return r.$$set=i=>{"owner"in i&&l(5,a=i.owner),"tag"in i&&l(6,o=i.tag),"ardag"in i&&l(7,n=i.ardag),"dag"in i&&l(8,f=i.dag),"$$scope"in i&&l(9,t=i.$$scope)},r.$$.update=()=>{r.$$.dirty&480&&n&&a&&o&&f&&V()},[_,d,w,c,v,a,o,n,f,t,e,j,z]}class ae extends T{constructor(s){super(),B(this,s,$,x,F,{owner:5,tag:6,ardag:7,dag:8})}}export{ae as A};
