function x(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function K(){return Object.create(null)}function $(t){t.forEach(Z)}function G(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function It(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function pt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(yt(e,n))}function Kt(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let c=0;c<r;c+=1)o[c]=e.dirty[c]|s[c];return o}return e.dirty|s}return e.dirty}function Ut(t,e,n,i,s,o){if(s){const r=tt(e,n,i,o);t.p(r,s)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){return t==null?"":t}function Yt(t,e,n){return t.set(n),e}function Zt(t){return t&&G(t.destroy)?t.destroy:x}const et=typeof window<"u";let gt=et?()=>window.performance.now():()=>Date.now(),I=et?t=>requestAnimationFrame(t):x;const b=new Set;function nt(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&I(nt)}function bt(t){let e;return b.size===0&&I(nt),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let L=!1;function wt(){L=!0}function xt(){L=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:$t(1,s,u=>e[n[u]].claim_order,a))-1;i[l]=n[d]+1;const f=d+1;n[f]=l,s=Math.max(f,s)}const o=[],r=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<o.length&&r[l].claim_order>=o[a].claim_order;)a++;const d=a<o.length?o[a]:null;t.insertBefore(r[l],d)}}function it(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=q("style");return At(st(t),e),e.sheet}function At(t,e){return it(t.head||t,e),e.sheet}function Nt(t,e){if(L){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){t.insertBefore(e,n||null)}function Tt(t,e,n){L&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function q(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function ee(){return J(" ")}function ne(){return J("")}function Q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ie(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function St(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,s=!1){ot(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ct(t,e,n,i){return lt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function re(t,e,n){return ct(t,e,n,q)}function oe(t,e,n){return ct(t,e,n,rt)}function Ct(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function le(t){return Ct(t," ")}function U(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ce(t,e){const n=U(t,"HTML_TAG_START",0),i=U(t,"HTML_TAG_END",n);if(n===i)return new V(void 0,e);ot(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(o,e)}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e){t.value=e==null?"":e}function fe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let S;function Mt(){if(S===void 0){S=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{S=!0}}return S}function de(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=q("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Mt();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=Q(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=Q(i.contentWindow,"resize",e)}),it(t,i),()=>{(s||o&&i.contentWindow)&&o(),w(i)}}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function he(t,e=document.body){return Array.from(e.querySelectorAll(t))}class jt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=rt(n.nodeName):this.e=q(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class V extends jt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}}const z=new Map;let D=0;function zt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:Et(e),rules:{}};return z.set(t,n),n}function X(t,e,n,i,s,o,r,c=0){const l=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*o(p);a+=p*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${zt(d)}_${c}`,u=st(t),{stylesheet:_,rules:h}=z.get(u)||Dt(u,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,D+=1,f}function Ht(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),D-=s,D||Lt())}function Lt(){I(()=>{D||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&w(e)}),z.clear())})}let N;function A(t){N=t}function P(){if(!N)throw new Error("Function called outside component initialization");return N}function me(t){P().$$.on_mount.push(t)}function pe(t){P().$$.after_update.push(t)}function ye(t){P().$$.on_destroy.push(t)}function ge(){const t=P();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=at(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function be(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const E=[],Y=[],M=[],W=[],ut=Promise.resolve();let F=!1;function ft(){F||(F=!0,ut.then(dt))}function we(){return ft(),ut}function H(t){M.push(t)}function xe(t){W.push(t)}const R=new Set;let C=0;function dt(){const t=N;do{for(;C<E.length;){const e=E[C];C++,A(e),qt(e.$$)}for(A(null),E.length=0,C=0;Y.length;)Y.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];R.has(n)||(R.add(n),n())}M.length=0}while(E.length);for(;W.length;)W.pop()();F=!1,R.clear(),A(t)}function qt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let v;function Pt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function B(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const j=new Set;let m;function $e(){m={r:0,c:[],p:m}}function ve(){m.r||$(m.c),m=m.p}function Ot(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Ee(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),m.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function Ae(t,e,n,i){let s=e(t,n),o=i?0:1,r=null,c=null,l=null;function a(){l&&Ht(t,l)}function d(u,_){const h=u.b-o;return _*=Math.abs(h),{a:o,b:u.b,d:h,duration:_,start:u.start,end:u.start+_,group:u.group}}function f(u){const{delay:_=0,duration:h=300,easing:y=ht,tick:p=x,css:g}=s||Rt,O={start:gt()+_,b:u};u||(O.group=m,m.r+=1),r||c?c=O:(g&&(a(),l=X(t,o,u,h,_,y,g)),u&&p(0,1),r=d(O,h),H(()=>B(t,u,"start")),bt(k=>{if(c&&k>c.start&&(r=d(c,h),c=null,B(t,r.b,"start"),g&&(a(),l=X(t,o,r.b,r.duration,0,y,s.css))),r){if(k>=r.end)p(o=r.b,1-o),B(t,r.b,"end"),c||(r.b?a():--r.group.r||$(r.group.c)),r=null;else if(k>=r.start){const _t=k-r.start;o=r.a+r.d*y(_t/r.duration),p(o,1-o)}}return!!(r||c)}))}return{run(u){G(s)?Pt().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=c=null}}}const Ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ke(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Te(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:s,on_mount:o,on_destroy:r,after_update:c}=t.$$;s&&s.m(e,n),i||H(()=>{const l=o.map(Z).filter(G);r?r.push(...l):$(l),t.$$.on_mount=[]}),c.forEach(H)}function Wt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(E.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ce(t,e,n,i,s,o,r,c=[-1]){const l=N;A(t);const a=t.$$={fragment:null,ctx:null,props:o,update:x,not_equal:s,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:K(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,u,..._)=>{const h=_.length?_[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),d&&Ft(t,f)),u}):[],a.update(),d=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){wt();const f=St(e.target);a.fragment&&a.fragment.l(f),f.forEach(w)}else a.fragment&&a.fragment.c();e.intro&&Ot(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),xt(),dt()}A(l)}class Me{$destroy(){Wt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{It as $,x as A,Kt as B,Ut as C,Vt as D,Qt as E,Nt as F,Jt as G,ue as H,Q as I,$ as J,te as K,mt as L,gt as M,bt as N,ht as O,H as P,Xt as Q,Yt as R,Me as S,be as T,rt as U,oe as V,se as W,_e as X,Zt as Y,ge as Z,Ae as _,ee as a,de as a0,G as a1,Ne as a2,Y as a3,ke as a4,xe as a5,V as a6,he as a7,ce as a8,ye as a9,Tt as b,le as c,ve as d,ne as e,Ot as f,$e as g,w as h,Ce as i,pe as j,q as k,re as l,St as m,ie as n,me as o,fe as p,J as q,Ct as r,Gt as s,Ee as t,ae as u,Te as v,Se as w,Bt as x,Wt as y,we as z};
