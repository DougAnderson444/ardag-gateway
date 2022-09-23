import{_ as se}from"./chunks/preload-helper-aa6bc0ce.js";import{S as Ke,i as xe,s as Ge,a as Me,e as B,c as He,b as G,g as ie,t as J,d as le,f as z,h as F,j as We,o as be,k as Xe,l as Ye,m as Qe,n as ge,p as D,q as Ze,r as et,u as tt,v as M,w as Se,x as H,y as W,z as Te}from"./chunks/index-40d14adf.js";import{g as De,f as qe,s as x,a as ve,b as nt,i as rt}from"./chunks/singletons-06864101.js";class we{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ce{constructor(e,t){this.status=e,this.location=t}}function at(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function st(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ot=["href","pathname","search","searchParams","toString","toJSON"];function it(a,e){const t=new URL(a);for(const c of ot){let l=t[c];Object.defineProperty(t,c,{get(){return e(),l},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,l,p)=>p(a,l),lt(t),t}function lt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ct(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;oe.delete(c)}return Re(a,e)};const oe=new Map;function ft(a,e,t){let l=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;t&&typeof t.body=="string"&&(l+=`[data-hash="${ct(t.body)}"]`);const p=document.querySelector(l);if(p!=null&&p.textContent){const{body:n,...u}=JSON.parse(p.textContent),w=p.getAttribute("data-ttl");return w&&oe.set(e,{body:n,init:u,ttl:1e3*Number(w)}),Promise.resolve(new Response(n,u))}return Re(a,t)}function ut(a,e){const t=oe.get(a);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(a)}return Re(a,e)}const dt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function pt(a){const e=[],t=[];let c=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(ht).map((p,n,u)=>{const w=decodeURIComponent(p),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const y=n===u.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map(($,v)=>{if(v%2){const q=dt.exec($);if(!q)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,A,K]=q;return e.push(A),t.push(K),N?"(.*?)":"([^/]+?)"}return y&&$.includes(".")&&(c=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function ht(a){return!/^\([^)]+\)$/.test(a)}function mt(a,e,t,c){const l={};for(let p=0;p<e.length;p+=1){const n=e[p],u=t[p],w=a[p+1]||"";if(u){const _=c[u];if(!_)throw new Error(`Missing "${u}" param matcher`);if(!_(w))return}l[n]=w}return l}function _t(a,e,t,c){const l=new Set(e);return Object.entries(t).map(([u,[w,_,y]])=>{const{pattern:$,names:v,types:q}=pt(u),N={id:u,exec:A=>{const K=$.exec(A);if(K)return mt(K,v,q,c)},errors:[1,...y||[]].map(A=>a[A]),layouts:[0,..._||[]].map(n),leaf:p(w)};return N.errors.length=N.layouts.length=Math.max(N.errors.length,N.layouts.length),N});function p(u){const w=u<0;return w&&(u=~u),[w,a[u]]}function n(u){return u===void 0?u:[l.has(u),a[u]]}}function gt(a){let e,t,c;var l=a[0][0];function p(n){return{props:{data:n[2],form:n[1]}}}return l&&(e=new l(p(a))),{c(){e&&M(e.$$.fragment),t=B()},l(n){e&&Se(e.$$.fragment,n),t=B()},m(n,u){e&&H(e,n,u),G(n,t,u),c=!0},p(n,u){const w={};if(u&4&&(w.data=n[2]),u&2&&(w.form=n[1]),l!==(l=n[0][0])){if(e){ie();const _=e;J(_.$$.fragment,1,0,()=>{W(_,1)}),le()}l?(e=new l(p(n)),M(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else l&&e.$set(w)},i(n){c||(e&&z(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&F(t),e&&W(e,n)}}}function wt(a){let e,t,c;var l=a[0][0];function p(n){return{props:{data:n[2],$$slots:{default:[yt]},$$scope:{ctx:n}}}}return l&&(e=new l(p(a))),{c(){e&&M(e.$$.fragment),t=B()},l(n){e&&Se(e.$$.fragment,n),t=B()},m(n,u){e&&H(e,n,u),G(n,t,u),c=!0},p(n,u){const w={};if(u&4&&(w.data=n[2]),u&523&&(w.$$scope={dirty:u,ctx:n}),l!==(l=n[0][0])){if(e){ie();const _=e;J(_.$$.fragment,1,0,()=>{W(_,1)}),le()}l?(e=new l(p(n)),M(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else l&&e.$set(w)},i(n){c||(e&&z(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&F(t),e&&W(e,n)}}}function yt(a){let e,t,c;var l=a[0][1];function p(n){return{props:{data:n[3],form:n[1]}}}return l&&(e=new l(p(a))),{c(){e&&M(e.$$.fragment),t=B()},l(n){e&&Se(e.$$.fragment,n),t=B()},m(n,u){e&&H(e,n,u),G(n,t,u),c=!0},p(n,u){const w={};if(u&8&&(w.data=n[3]),u&2&&(w.form=n[1]),l!==(l=n[0][1])){if(e){ie();const _=e;J(_.$$.fragment,1,0,()=>{W(_,1)}),le()}l?(e=new l(p(n)),M(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else l&&e.$set(w)},i(n){c||(e&&z(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&F(t),e&&W(e,n)}}}function Ve(a){let e,t=a[5]&&Be(a);return{c(){e=Xe("div"),t&&t.c(),this.h()},l(c){e=Ye(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=Qe(e);t&&t.l(l),l.forEach(F),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(c,l){G(c,e,l),t&&t.m(e,null)},p(c,l){c[5]?t?t.p(c,l):(t=Be(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&F(e),t&&t.d()}}}function Be(a){let e;return{c(){e=Ze(a[6])},l(t){e=et(t,a[6])},m(t,c){G(t,e,c)},p(t,c){c&64&&tt(e,t[6])},d(t){t&&F(e)}}}function bt(a){let e,t,c,l,p;const n=[wt,gt],u=[];function w(y,$){return y[0][1]?0:1}e=w(a),t=u[e]=n[e](a);let _=a[4]&&Ve(a);return{c(){t.c(),c=Me(),_&&_.c(),l=B()},l(y){t.l(y),c=He(y),_&&_.l(y),l=B()},m(y,$){u[e].m(y,$),G(y,c,$),_&&_.m(y,$),G(y,l,$),p=!0},p(y,[$]){let v=e;e=w(y),e===v?u[e].p(y,$):(ie(),J(u[v],1,1,()=>{u[v]=null}),le(),t=u[e],t?t.p(y,$):(t=u[e]=n[e](y),t.c()),z(t,1),t.m(c.parentNode,c)),y[4]?_?_.p(y,$):(_=Ve(y),_.c(),_.m(l.parentNode,l)):_&&(_.d(1),_=null)},i(y){p||(z(t),p=!0)},o(y){J(t),p=!1},d(y){u[e].d(y),y&&F(c),_&&_.d(y),y&&F(l)}}}function vt(a,e,t){let{stores:c}=e,{page:l}=e,{components:p}=e,{form:n}=e,{data_0:u=null}=e,{data_1:w=null}=e;We(c.page.notify);let _=!1,y=!1,$=null;return be(()=>{const v=c.page.subscribe(()=>{_&&(t(5,y=!0),t(6,$=document.title||"untitled page"))});return t(4,_=!0),v}),a.$$set=v=>{"stores"in v&&t(7,c=v.stores),"page"in v&&t(8,l=v.page),"components"in v&&t(0,p=v.components),"form"in v&&t(1,n=v.form),"data_0"in v&&t(2,u=v.data_0),"data_1"in v&&t(3,w=v.data_1)},a.$$.update=()=>{a.$$.dirty&384&&c.page.set(l)},[p,n,u,w,_,y,$,c,l]}class kt extends Ke{constructor(e){super(),xe(this,e,vt,bt,Ge,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Et={},ce=[()=>se(()=>import("./chunks/0-eeebd710.js"),["chunks\\0-eeebd710.js","components\\pages\\_layout.svelte-334ca9ae.js","assets\\_layout-ccccf84c.css","chunks\\index-40d14adf.js"],import.meta.url),()=>se(()=>import("./chunks/1-2de26e12.js"),["chunks\\1-2de26e12.js","components\\error.svelte-be359b2a.js","chunks\\index-40d14adf.js","chunks\\singletons-06864101.js"],import.meta.url),()=>se(()=>import("./chunks/2-dd7cf1e5.js"),["chunks\\2-dd7cf1e5.js","components\\pages\\_page.svelte-f9c4dfc3.js","assets\\_page-e1bedd54.css","chunks\\preload-helper-aa6bc0ce.js","chunks\\index-40d14adf.js"],import.meta.url)],St=[],Rt={"":[2]},$t={handleError:({error:a})=>(console.error(a),{message:"Internal Error"})},Lt="/__data.js",Fe="sveltekit:scroll",V="sveltekit:index",ne=_t(ce,St,Rt,Et),ke=ce[0],Ee=ce[1];ke();Ee();let Z={};try{Z=JSON.parse(sessionStorage[Fe])}catch{}function ye(a){Z[a]=ve()}function Ot({target:a,base:e,trailing_slash:t}){var Ae;const c=[];let l=null;const p={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},u=!1,w=!0,_=!1,y=!1,$,v=(Ae=history.state)==null?void 0:Ae[V];v||(v=Date.now(),history.replaceState({...history.state,[V]:v},"",location.href));const q=Z[v];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let N=!1,A,K,ee;async function $e(){ee=ee||Promise.resolve(),await ee,ee=null;const r=new URL(location.href),o=pe(r,!0);l=null,await Oe(o,r,[])}async function fe(r,{noscroll:o=!1,replaceState:d=!1,keepfocus:s=!1,state:i={}},h,m){return typeof r=="string"&&(r=new URL(r,De(document))),he({url:r,scroll:o?ve():null,keepfocus:s,redirect_chain:h,details:{state:i,replaceState:d},nav_token:m,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(r){const o=pe(r,!1);if(!o)throw new Error("Attempted to prefetch a URL that does not belong to this app");return l={id:o.id,promise:Ie(o)},l.promise}async function Oe(r,o,d,s,i={},h){var k,S;K=i;let m=r&&await Ie(r);if(!m&&o.origin===location.origin&&o.pathname===location.pathname&&(m=await te({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!m)return await Y(o),!1;if(o=(r==null?void 0:r.url)||o,K!==i)return!1;if(m.type==="redirect")if(d.length>10||d.includes(o.pathname))m=await te({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return fe(new URL(m.location,o).href,{},[...d,o.pathname],i),!1;else((S=(k=m.props)==null?void 0:k.page)==null?void 0:S.status)>=400&&await x.updated.check()&&await Y(o);if(c.length=0,y=!1,_=!0,s&&s.details){const{details:b}=s,g=b.replaceState?0:1;b.state[V]=v+=g,history[b.replaceState?"replaceState":"pushState"](b.state,"",o)}if(l=null,u){n=m.state,m.props.page&&(m.props.page.url=o);const b=ae();$.$set(m.props),b()}else Pe(m);if(s){const{scroll:b,keepfocus:g}=s;if(!g){const E=document.body,O=E.getAttribute("tabindex");E.tabIndex=-1,E.focus({preventScroll:!0}),setTimeout(()=>{var P;(P=getSelection())==null||P.removeAllRanges()}),O!==null?E.setAttribute("tabindex",O):E.removeAttribute("tabindex")}if(await Te(),w){const E=o.hash&&document.getElementById(o.hash.slice(1));b?scrollTo(b.x,b.y):E?E.scrollIntoView():scrollTo(0,0)}}else await Te();w=!0,m.props.page&&(A=m.props.page),h&&h(),_=!1}function Pe(r){var i,h;n=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),A=r.props.page;const d=ae();$=new kt({target:a,props:{...r.props,stores:x},hydrate:!0}),d();const s={from:null,to:re("to",{params:n.params,routeId:(h=(i=n.route)==null?void 0:i.id)!=null?h:null,url:new URL(location.href)}),type:"load"};p.after_navigate.forEach(m=>m(s)),u=!0}async function X({url:r,params:o,branch:d,status:s,error:i,route:h,form:m}){var O;const k=d.filter(Boolean),S={type:"loaded",state:{url:r,params:o,branch:d,error:i,route:h},props:{components:k.map(P=>P.node.component)}};m!==void 0&&(S.props.form=m);let b={},g=!A;for(let P=0;P<k.length;P+=1){const I=k[P];b={...b,...I.data},(g||!n.branch.some(U=>U===I))&&(S.props[`data_${P}`]=b,g=g||Object.keys((O=I.data)!=null?O:{}).length>0)}if(g||(g=Object.keys(A.data).length!==Object.keys(b).length),!n.url||r.href!==n.url.href||n.error!==i||g){S.props.page={error:i,params:o,routeId:h&&h.id,status:s,url:r,data:g?b:A.data};const P=(I,U)=>{Object.defineProperty(S.props.page,I,{get:()=>{throw new Error(`$page.${I} has been replaced by $page.url.${U}`)}})};P("origin","origin"),P("path","pathname"),P("query","searchParams")}return S}async function ue({loader:r,parent:o,url:d,params:s,routeId:i,server_data_node:h}){var b,g,E,O,P;let m=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},S=await r();if((b=S.shared)!=null&&b.load){let I=function(...f){for(const R of f){const{href:j}=new URL(R,d);k.dependencies.add(j)}};const U={};for(const f in s)Object.defineProperty(U,f,{get(){return k.params.add(f),s[f]},enumerable:!0});const C={routeId:i,params:U,data:(g=h==null?void 0:h.data)!=null?g:null,url:it(d,()=>{k.url=!0}),async fetch(f,R){let j;typeof f=="string"?j=f:(j=f.url,R={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...R});const L=new URL(j,d).href;return I(L),u?ut(L,R):ft(j,L,R)},setHeaders:()=>{},depends:I,parent(){return k.parent=!0,o()}};Object.defineProperties(C,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(E=await S.shared.load.call(null,C))!=null?E:null}return{node:S,loader:r,server:h,shared:(O=S.shared)!=null&&O.load?{type:"data",data:m,uses:k}:null,data:(P=m!=null?m:h==null?void 0:h.data)!=null?P:null}}function je(r,o,d){if(y)return!0;if(!d)return!1;if(d.parent&&o||r.url&&d.url)return!0;for(const s of r.params)if(d.params.has(s))return!0;for(const s of d.dependencies)if(c.some(i=>i(new URL(s))))return!0;return!1}function de(r,o){var d,s;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((d=r.uses.dependencies)!=null?d:[]),params:new Set((s=r.uses.params)!=null?s:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&o!=null?o:null}async function Ie({id:r,invalidating:o,url:d,params:s,route:i}){var C;if((l==null?void 0:l.id)===r)return l.promise;const{errors:h,layouts:m,leaf:k}=i,S=n.url&&{url:r!==n.url.pathname+n.url.search,params:Object.keys(s).filter(f=>n.params[f]!==s[f])},b=[...m,k];h.forEach(f=>f==null?void 0:f().catch(()=>{})),b.forEach(f=>f==null?void 0:f[1]().catch(()=>{}));let g=null;const E=b.reduce((f,R,j)=>{var T;const L=n.branch[j],Q=!!(R!=null&&R[0])&&((L==null?void 0:L.loader)!==R[1]||je(S,f.some(Boolean),(T=L.server)==null?void 0:T.uses));return f.push(Q),f},[]);if(E.some(Boolean)){try{g=await Je(d,E)}catch(f){return te({status:500,error:f,url:d,routeId:i.id})}if(g.type==="redirect")return g}const O=g==null?void 0:g.nodes;let P=!1;const I=b.map(async(f,R)=>{var T;if(!f)return;const j=n.branch[R],L=O==null?void 0:O[R];if((!L||L.type==="skip")&&f[1]===(j==null?void 0:j.loader)&&!je(S,P,(T=j.shared)==null?void 0:T.uses))return j;if(P=!0,(L==null?void 0:L.type)==="error")throw L;return ue({loader:f[1],url:d,params:s,routeId:i.id,parent:async()=>{var Ne;const me={};for(let _e=0;_e<R;_e+=1)Object.assign(me,(Ne=await I[_e])==null?void 0:Ne.data);return me},server_data_node:de(L===void 0&&f[0]?{type:"skip"}:L!=null?L:null,j==null?void 0:j.server)})});for(const f of I)f.catch(()=>{});const U=[];for(let f=0;f<b.length;f+=1)if(b[f])try{U.push(await I[f])}catch(R){if(R instanceof Ce)return{type:"redirect",location:R.location};let j=500,L;for(O!=null&&O.includes(R)?(j=(C=R.status)!=null?C:j,L=R.error):R instanceof we?(j=R.status,L=R.body):L=ze(R,{params:s,url:d,routeId:i.id});f--;)if(h[f]){let Q,T=f;for(;!U[T];)T-=1;try{return Q={node:await h[f](),loader:h[f],data:{},server:null,shared:null},await X({url:d,params:s,branch:U.slice(0,T+1).concat(Q),status:j,error:L,route:i})}catch{continue}}await Y(d);return}else U.push(void 0);return await X({url:d,params:s,branch:U,status:200,error:null,route:i,form:o?void 0:null})}async function te({status:r,error:o,url:d,routeId:s}){var b;const i={},h=await ke();let m=null;if(h.server)try{const g=await Je(d,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=(b=g.nodes[0])!=null?b:null}catch{await Y(d);return}const k=await ue({loader:ke,url:d,params:i,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(m)}),S={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await X({url:d,params:i,branch:[k,S],status:r,error:o instanceof we?o.body:ze(o,{url:d,params:i,routeId:null}),route:null})}function pe(r,o){if(Ue(r))return;const d=decodeURI(r.pathname.slice(e.length)||"/");for(const s of ne){const i=s.exec(d);if(i){const h=new URL(r.origin+at(r.pathname,t)+r.search+r.hash);return{id:h.pathname+h.search,invalidating:o,route:s,params:st(i),url:h}}}}function Ue(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}async function he({url:r,scroll:o,keepfocus:d,redirect_chain:s,details:i,type:h,delta:m,nav_token:k,accepted:S,blocked:b}){var I,U,C,f;let g=!1;const E=pe(r,!1),O={from:re("from",{params:n.params,routeId:(U=(I=n.route)==null?void 0:I.id)!=null?U:null,url:n.url}),to:re("to",{params:(C=E==null?void 0:E.params)!=null?C:null,routeId:(f=E==null?void 0:E.route.id)!=null?f:null,url:r}),type:h};m!==void 0&&(O.delta=m);const P={...O,cancel:()=>{g=!0}};if(p.before_navigate.forEach(R=>R(P)),g){b();return}ye(v),S(),u&&x.navigating.set(O),await Oe(E,r,s,{scroll:o,keepfocus:d,details:i},k,()=>{p.after_navigate.forEach(R=>R(O)),x.navigating.set(null)})}function Y(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{be(()=>(p.after_navigate.push(r),()=>{const o=p.after_navigate.indexOf(r);p.after_navigate.splice(o,1)}))},before_navigate:r=>{be(()=>(p.before_navigate.push(r),()=>{const o=p.before_navigate.indexOf(r);p.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!u)&&(w=!1)},goto:(r,o={})=>fe(r,o,[]),invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")c.push(r);else{const{href:o}=new URL(r,location.href);c.push(d=>d.href===o)}return $e()},invalidateAll:()=>(y=!0,$e()),prefetch:async r=>{const o=new URL(r,De(document));await Le(o)},prefetch_routes:async r=>{const d=(r?ne.filter(s=>r.some(i=>s.exec(i))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(i=>i==null?void 0:i[1]())));await Promise.all(d)},apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:d,route:s}=n;if(!s)return;let i=n.branch.length;for(;i--;)if(s.errors[i]){let h,m=i;for(;!d[m];)m-=1;try{h={node:await s.errors[i](),loader:s.errors[i],data:{},server:null,shared:null};const k=await X({url:o,params:n.params,branch:d.slice(0,m+1).concat(h),status:500,error:r.error,route:s});n=k.state;const S=ae();$.$set(k.props),S();return}catch{continue}}}else if(r.type==="redirect")fe(r.location,{},[]);else{const o={form:r.data};r.status!==A.status&&(o.page={...A,status:r.status});const d=ae();$.$set(o),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,k;let i=!1;const h={from:re("from",{params:n.params,routeId:(k=(m=n.route)==null?void 0:m.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>i=!0};p.before_navigate.forEach(S=>S(h)),i?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(v);try{sessionStorage[Fe]=JSON.stringify(Z)}catch{}}});const r=s=>{const{url:i,options:h}=qe(s);if(i&&h.prefetch){if(Ue(i))return;Le(i)}};let o;const d=s=>{clearTimeout(o),o=setTimeout(()=>{var i;(i=s.target)==null||i.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:i,url:h,options:m}=qe(s);if(!i||!h)return;const k=i instanceof SVGAElement;if(!k&&!(h.protocol==="https:"||h.protocol==="http:"))return;const S=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||S.includes("external")||m.reload||(k?i.target.baseVal:i.target))return;const[b,g]=h.href.split("#");if(g!==void 0&&b===location.href.split("#")[0]){N=!0,ye(v),n.url=h,x.page.set({...A,url:h}),x.page.notify();return}he({url:h,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[V]===v)return;const i=s.state[V]-v;he({url:new URL(location.href),scroll:Z[s.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{v=s.state[V]},blocked:()=>{history.go(-i)},type:"popstate",delta:i})}}),addEventListener("hashchange",()=>{N&&(N=!1,history.replaceState({...history.state,[V]:++v},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&x.navigating.set(null)})},_hydrate:async({status:r,error:o,node_ids:d,params:s,routeId:i,data:h,form:m})=>{var b;const k=new URL(location.href);let S;try{const g=d.map(async(E,O)=>{const P=h[O];return ue({loader:ce[E],url:k,params:s,routeId:i,parent:async()=>{const I={};for(let U=0;U<O;U+=1)Object.assign(I,(await g[U]).data);return I},server_data_node:de(P)})});S=await X({url:k,params:s,branch:await Promise.all(g),status:r,error:o,form:m,route:(b=ne.find(E=>E.id===i))!=null?b:null})}catch(g){const E=g;if(E instanceof Ce){await Y(new URL(g.location,location.href));return}S=await te({status:E instanceof we?E.status:500,error:E,url:k,routeId:i})}Pe(S)}}}let Pt=1;async function Je(a,e){const t=new URL(a);t.pathname=a.pathname.replace(/\/$/,"")+Lt,t.searchParams.set("__invalid",e.map(l=>l?"y":"n").join("")),t.searchParams.set("__id",String(Pt++)),await se(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function ze(a,e){var t;return(t=$t.handleError({error:a,event:e}))!=null?t:{message:e.routeId?"Internal Error":"Not Found"}}const jt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(a,e){for(const t of jt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)},enumerable:!1});return e}function ae(){return()=>{}}async function Nt({env:a,hydrate:e,paths:t,target:c,trailing_slash:l}){nt(t);const p=Ot({target:c,base:t.base,trailing_slash:l});rt({client:p}),e?await p._hydrate(e):p.goto(location.href,{replaceState:!0}),p._start_router()}export{Nt as start};
