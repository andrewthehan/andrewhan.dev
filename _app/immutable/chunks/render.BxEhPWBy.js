import{N as m,C as A,O as L,M as b,P as g,e as h,d as E,c as C,k as _,D as H,Q as I,R as M,z as S,q as Y,S as k,l as V,i as $,p as j,h as w,u as q,a as z,T as P}from"./runtime.DkP24cSa.js";import{c as Q,r as N,h as p,d as W}from"./disclose-version.LHDEgC10.js";import{r as B}from"./svelte-head.fkyMfxi9.js";import{i as F}from"./utils.DW_b4ELl.js";function Z(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function G(t,e){return D(t,e)}function x(t,e){m(),e.intro=e.intro??!1;const n=e.target,l=w,u=_;try{for(var r=A(n);r&&(r.nodeType!==8||r.data!==L);)r=b(r);if(!r)throw g;h(!0),E(r),C();const o=D(t,{...e,anchor:r});if(_===null||_.nodeType!==8||_.data!==H)throw I(),g;return h(!1),o}catch(o){if(o===g)return e.recover===!1&&M(),m(),S(n),h(!1),G(t,e);throw o}finally{h(l),E(u),B()}}const i=new Map;function D(t,{target:e,anchor:n,props:l={},events:u,context:r,intro:o=!0}){m();var y=new Set,v=d=>{for(var a=0;a<d.length;a++){var s=d[a];if(!y.has(s)){y.add(s);var f=F(s);e.addEventListener(s,p,{passive:f});var T=i.get(s);T===void 0?(document.addEventListener(s,p,{passive:f}),i.set(s,1)):i.set(s,T+1)}}};v(Y(Q)),N.add(v);var c=void 0,O=k(()=>{var d=n??e.appendChild(V());return $(()=>{if(r){j({});var a=P;a.c=r}u&&(l.$$events=u),w&&W(d,null),c=t(d,l)||{},w&&(q.nodes_end=_),r&&z()}),()=>{var f;for(var a of y){e.removeEventListener(a,p);var s=i.get(a);--s===0?(document.removeEventListener(a,p),i.delete(a)):i.set(a,s)}N.delete(v),R.delete(c),d!==n&&((f=d.parentNode)==null||f.removeChild(d))}});return R.set(c,O),c}let R=new WeakMap;function ee(t){const e=R.get(t);e&&e()}export{x as h,G as m,Z as s,ee as u};
