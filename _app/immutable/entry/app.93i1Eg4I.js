const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CikZM4WH.js","../chunks/disclose-version.C52qxYCZ.js","../chunks/runtime.3ZyRG4DK.js","../chunks/legacy.Dg0MYOYO.js","../chunks/render.CaY2xJ_H.js","../chunks/GameText.-IkJGGt7.js","../chunks/attributes.BXtMJita.js","../assets/GameText.L8YwAmTB.css","../chunks/achievements.GvtALlsv.js","../chunks/index.BFyNArcK.js","../chunks/svelte-component.CbJ6nQK9.js","../chunks/storage.B5XexylO.js","../assets/achievements.B3TJyREl.css","../chunks/if.Bqc2PfN0.js","../chunks/index-client.DxhlTF6E.js","../chunks/entry.CBGLlUUl.js","../assets/0.5ajCg4eP.css","../assets/app.DA3gI9GN.css","../nodes/1.KqI9NyXh.js","../chunks/SequenceListener.Aac4EYqq.js","../assets/1.Cpp_i1N5.css","../nodes/2.BqlcimAt.js","../assets/2.DfaqIllx.css","../nodes/3.CgDgu1Fw.js","../chunks/GameButton.DSszrA_j.js","../assets/GameButton.CGOR1V1w.css","../assets/3.Czq4gvnW.css","../nodes/4.DWIolG2p.js","../nodes/5.BpthVIVt.js","../nodes/6.CUy4WAWx.js","../nodes/7.DZjxpCDK.js","../nodes/8.CuRctu2S.js","../assets/8.BDAWlbH1.css","../nodes/9.DAvuYqzy.js","../nodes/10.BZBbdFcM.js","../nodes/11.Byin-ohR.js","../nodes/12.CrF_rfn7.js","../assets/12.PRuKBYVb.css","../nodes/13.D0Z3ViiI.js","../assets/13.BJQXWN65.css","../nodes/14.BndOmXiI.js","../assets/14.mVIYjfv-.css"])))=>i.map(i=>d[i]);
var z=e=>{throw TypeError(e)};var F=(e,t,s)=>t.has(e)||z("Cannot "+s);var l=(e,t,s)=>(F(e,t,"read from private field"),s?s.call(e):t.get(e)),V=(e,t,s)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),b=(e,t,s,i)=>(F(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);import{ak as Q,ah as X,t as Z,F as N,al as $,v as E,am as tt,af as D,an as et,ao as rt,U as st,p as at,a1 as ot,u as it,f as w,a as nt,ae as k,ap as ct,s as ut,x as lt,z as mt,a5 as x,y as _t}from"../chunks/runtime.3ZyRG4DK.js";import{h as ft,m as dt,u as ht,s as vt}from"../chunks/render.CaY2xJ_H.js";import{p as S,a as O,b as H,m as Et,c as C,t as gt}from"../chunks/disclose-version.C52qxYCZ.js";import{i as q}from"../chunks/if.Bqc2PfN0.js";import{c as B}from"../chunks/svelte-component.CbJ6nQK9.js";import{o as yt}from"../chunks/index-client.DxhlTF6E.js";function G(e,t){return e===t||(e==null?void 0:e[$])===t}function j(e={},t,s,i){return Q(()=>{var o,n;return X(()=>{o=n,n=[],Z(()=>{e!==s(...n)&&(t(e,...n),o&&G(s(...o),e)&&t(null,...o))})}),()=>{N(()=>{n&&G(s(...n),e)&&t(null,...n)})}}),e}function Pt(e){return class extends Rt{constructor(t){super({component:e,...t})}}}var g,_;class Rt{constructor(t){V(this,g);V(this,_);var n;var s=new Map,i=(a,r)=>{var f=st(r);return s.set(a,f),f};const o=new Proxy({...t.props||{},$$events:{}},{get(a,r){return E(s.get(r)??i(r,Reflect.get(a,r)))},has(a,r){return r===tt?!0:(E(s.get(r)??i(r,Reflect.get(a,r))),Reflect.has(a,r))},set(a,r,f){return D(s.get(r)??i(r,f),f),Reflect.set(a,r,f)}});b(this,_,(t.hydrate?ft:dt)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((n=t==null?void 0:t.props)!=null&&n.$$host)||t.sync===!1)&&et(),b(this,g,o.$$events);for(const a of Object.keys(l(this,_)))a==="$set"||a==="$destroy"||a==="$on"||rt(this,a,{get(){return l(this,_)[a]},set(r){l(this,_)[a]=r},enumerable:!0});l(this,_).$set=a=>{Object.assign(o,a)},l(this,_).$destroy=()=>{ht(l(this,_))}}$set(t){l(this,_).$set(t)}$on(t,s){l(this,g)[t]=l(this,g)[t]||[];const i=(...o)=>s.call(this,...o);return l(this,g)[t].push(i),()=>{l(this,g)[t]=l(this,g)[t].filter(o=>o!==i)}}$destroy(){l(this,_).$destroy()}}g=new WeakMap,_=new WeakMap;const Lt="modulepreload",Ot=function(e,t){return new URL(e,t).href},W={},u=function(t,s,i){let o=Promise.resolve();if(s&&s.length>0){const a=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),f=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(s.map(m=>{if(m=Ot(m,i),m in W)return;W[m]=!0;const y=m.endsWith(".css"),I=y?'[rel="stylesheet"]':"";if(!!i)for(let P=a.length-1;P>=0;P--){const c=a[P];if(c.href===m&&(!y||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${I}`))return;const h=document.createElement("link");if(h.rel=y?"stylesheet":Lt,y||(h.as="script"),h.crossOrigin="",h.href=m,f&&h.setAttribute("nonce",f),document.head.appendChild(h),y)return new Promise((P,c)=>{h.addEventListener("load",P),h.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${m}`)))})}))}function n(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return o.then(a=>{for(const r of a||[])r.status==="rejected"&&n(r.reason);return t().catch(n)})},Ct={};var At=H('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Tt=H("<!> <!>",1);function pt(e,t){at(t,!0);let s=S(t,"components",23,()=>[]),i=S(t,"data_0",3,null),o=S(t,"data_1",3,null);ot(()=>t.stores.page.set(t.page)),it(()=>{t.stores,t.page,t.constructors,s(),t.form,i(),o(),t.stores.page.notify()});let n=k(!1),a=k(!1),r=k(null);yt(()=>{const c=t.stores.page.subscribe(()=>{E(n)&&(D(a,!0),ct().then(()=>{D(r,Et(document.title||"untitled page"))}))});return D(n,!0),c});const f=x(()=>t.constructors[1]);var m=Tt(),y=w(m);{var I=c=>{var v=C();const A=x(()=>t.constructors[0]);var T=w(v);B(T,()=>E(A),(R,L)=>{j(L(R,{get data(){return i()},get form(){return t.form},children:(d,wt)=>{var Y=C(),J=w(Y);B(J,()=>E(f),(K,M)=>{j(M(K,{get data(){return o()},get form(){return t.form}}),p=>s()[1]=p,()=>{var p;return(p=s())==null?void 0:p[1]})}),O(d,Y)},$$slots:{default:!0}}),d=>s()[0]=d,()=>{var d;return(d=s())==null?void 0:d[0]})}),O(c,v)},U=c=>{var v=C();const A=x(()=>t.constructors[0]);var T=w(v);B(T,()=>E(A),(R,L)=>{j(L(R,{get data(){return i()},get form(){return t.form}}),d=>s()[0]=d,()=>{var d;return(d=s())==null?void 0:d[0]})}),O(c,v)};q(y,c=>{t.constructors[1]?c(I):c(U,!1)})}var h=ut(y,2);{var P=c=>{var v=At(),A=lt(v);{var T=R=>{var L=gt();_t(()=>vt(L,E(r))),O(R,L)};q(A,R=>{E(a)&&R(T)})}mt(v),O(c,v)};q(h,c=>{E(n)&&c(P)})}O(e,m),nt()}const qt=Pt(pt),Bt=[()=>u(()=>import("../nodes/0.CikZM4WH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url),()=>u(()=>import("../nodes/1.KqI9NyXh.js"),__vite__mapDeps([18,1,2,3,15,9,19,20]),import.meta.url),()=>u(()=>import("../nodes/2.BqlcimAt.js"),__vite__mapDeps([21,1,2,3,13,6,4,15,9,5,7,19,8,10,11,12,22,17]),import.meta.url),()=>u(()=>import("../nodes/3.CgDgu1Fw.js"),__vite__mapDeps([23,1,2,3,15,9,8,6,4,10,11,5,7,12,24,25,26]),import.meta.url),()=>u(()=>import("../nodes/4.DWIolG2p.js"),__vite__mapDeps([27,1,2,4,13,6,24,3,5,7,11,25,15,9]),import.meta.url),()=>u(()=>import("../nodes/5.BpthVIVt.js"),__vite__mapDeps([28,1,2,3,5,4,6,7]),import.meta.url),()=>u(()=>import("../nodes/6.CUy4WAWx.js"),__vite__mapDeps([29,1,2,3,15,9,24,5,4,6,7,11,25]),import.meta.url),()=>u(()=>import("../nodes/7.DZjxpCDK.js"),__vite__mapDeps([30,1,2,3,5,4,6,7]),import.meta.url),()=>u(()=>import("../nodes/8.CuRctu2S.js"),__vite__mapDeps([31,1,2,3,4,13,8,9,6,10,11,5,7,12,32]),import.meta.url),()=>u(()=>import("../nodes/9.DAvuYqzy.js"),__vite__mapDeps([33,1,2,13,8,3,9,6,4,10,11,5,7,12,24,25]),import.meta.url),()=>u(()=>import("../nodes/10.BZBbdFcM.js"),__vite__mapDeps([34,1,2,3,8,9,6,4,10,11,5,7,12]),import.meta.url),()=>u(()=>import("../nodes/11.Byin-ohR.js"),__vite__mapDeps([35,1,2,3,8,9,6,4,10,11,5,7,12]),import.meta.url),()=>u(()=>import("../nodes/12.CrF_rfn7.js"),__vite__mapDeps([36,1,2,3,4,6,37]),import.meta.url),()=>u(()=>import("../nodes/13.D0Z3ViiI.js"),__vite__mapDeps([38,1,2,3,6,4,15,9,5,7,39]),import.meta.url),()=>u(()=>import("../nodes/14.BndOmXiI.js"),__vite__mapDeps([40,1,2,3,8,9,6,4,10,11,5,7,12,41]),import.meta.url)],jt=[],Ut={"/":[2],"/400":[3],"/401":[4],"/402":[5],"/403":[6],"/404":[7],"/achievements":[8],"/answer/revealed":[9],"/cow":[10],"/mimic":[11],"/music":[12],"/squares":[13],"/treasure":[14]},Yt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Ut as dictionary,Yt as hooks,Ct as matchers,Bt as nodes,qt as root,jt as server_loads};