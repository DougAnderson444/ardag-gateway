import{_ as u}from"./preload-helper-aa6bc0ce.js";import{initializeArDag as f}from"./ardag-6cdad32f.js";let a;async function p(e){let t={address:"",jwk:void 0};return t.jwk=await e.wallets.generate(),t.address=await e.wallets.getAddress(t.jwk),t.getActiveAddress=()=>t.address,t}async function m(e,t){await e.api.get(`/mint/${t}/1000000000000`)}async function d(){await a.api.get("mine")}async function j(e={}){let t=await u(()=>import("./arweave-72f544d0.js"),[],import.meta.url);console.log("Arweave",t,t==null?void 0:t.init),t!=null&&t.default&&(t=t.default),t!=null&&t.default&&(t=t.default);let r,g="http://localhost:1984",{host:i,port:l,protocol:o}=new URL(g);i=i.replace(`:${l}`,"")||"localhost",l=l||443,o=o.replace(":",""),console.log({host:i,port:l,protocol:o,Arweave:t}),a=(e==null?void 0:e.arweave)||t.init({host:i,port:l,protocol:o,timeout:2e4,logging:!1});let s=await(e.wallet||await p(a)).getActiveAddress();console.log({address:s}),await m(a,s),await d();const w=a.transactions.post.bind(a.transactions);return r=async n=>{try{const c=await w(n);return await d(),logger.log(`Mined ${n.id}`),c}catch{return!1}},{ardag:f({arweave:a,post:r}),arweave:a}}export{p as generateWallet,d as mine,j as setupDev,m as triggerFaucet};
