import{i as p}from"./index-e6c15f70.js";import{A as o}from"./index-4f95dd81.js";let e;async function u(a){let t={address:"",jwk:void 0};return t.jwk=await a.wallets.generate(),t.address=await a.wallets.getAddress(t.jwk),t}async function m(a,t){await a.api.get(`/mint/${t.address}/1000000000000`)}async function l(){await e.api.get("mine")}async function A(a={}){let t,s,c="http://localhost:1984",{host:i,port:n,protocol:r}=new URL(c);i=i.replace(`:${n}`,"")||"localhost",n=n||443,r=r.replace(":",""),console.log({host:i,port:n,protocol:r,Arweave:o}),e=(a==null?void 0:a.arweave)||o.init({host:i,port:n,protocol:r,timeout:2e4,logging:!1}),s=await u(e),await m(e,s),await l();const w=e.transactions.post.bind(e.transactions);return t=async d=>{const g=await w(d);return await l(),g},{ardag:p({arweave:e,post:t}),wallet:s,arweave:e}}export{u as generateWallet,A as setupDev};