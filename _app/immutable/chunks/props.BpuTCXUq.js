import{S as D,D as q,F as j,G as g,I as G,J as b,U as v,K as N,l as P,L,M as Z,N as $,O as V,P as z,Q as H,R as J,T as Q,V as F,W,X,Y as k,Z as p,j as K,o as M,_ as ee,$ as re,a0 as ne,a1 as te,a2 as ae,a3 as ie}from"./runtime.C39u0-Yj.js";import{c as fe}from"./disclose-version.CxgJLR6i.js";function O(r,t=null,c){if(typeof r!="object"||r===null||D in r)return r;const y=$(r);if(y!==q&&y!==j)return r;var u=new Map,o=V(r),w=g(0);o&&u.set("length",g(r.length));var m;return new Proxy(r,{defineProperty(f,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&G();var i=u.get(e);return i===void 0?(i=g(n.value),u.set(e,i)):b(i,O(n.value,m)),!0},deleteProperty(f,e){var n=u.get(e);if(n===void 0)e in f&&u.set(e,g(v));else{if(o&&typeof e=="string"){var i=u.get("length"),a=Number(e);Number.isInteger(a)&&a<i.v&&b(i,a)}b(n,v),U(w)}return!0},get(f,e,n){var d;if(e===D)return r;var i=u.get(e),a=e in f;if(i===void 0&&(!a||(d=N(f,e))!=null&&d.writable)&&(i=g(O(a?f[e]:v,m)),u.set(e,i)),i!==void 0){var s=P(i);return s===v?void 0:s}return Reflect.get(f,e,n)},getOwnPropertyDescriptor(f,e){var n=Reflect.getOwnPropertyDescriptor(f,e);if(n&&"value"in n){var i=u.get(e);i&&(n.value=P(i))}else if(n===void 0){var a=u.get(e),s=a==null?void 0:a.v;if(a!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return n},has(f,e){var s;if(e===D)return!0;var n=u.get(e),i=n!==void 0&&n.v!==v||Reflect.has(f,e);if(n!==void 0||L!==null&&(!i||(s=N(f,e))!=null&&s.writable)){n===void 0&&(n=g(i?O(f[e],m):v),u.set(e,n));var a=P(n);if(a===v)return!1}return i},set(f,e,n,i){var R;var a=u.get(e),s=e in f;if(o&&e==="length")for(var d=n;d<a.v;d+=1){var I=u.get(d+"");I!==void 0?b(I,v):d in f&&(I=g(v),u.set(d+"",I))}a===void 0?(!s||(R=N(f,e))!=null&&R.writable)&&(a=g(void 0),b(a,O(n,m)),u.set(e,a)):(s=a.v!==v,b(a,O(n,m)));var _=Reflect.getOwnPropertyDescriptor(f,e);if(_!=null&&_.set&&_.set.call(i,n),!s){if(o&&typeof e=="string"){var S=u.get("length"),E=Number(e);Number.isInteger(E)&&E>=S.v&&b(S,E+1)}U(w)}return!0},ownKeys(f){P(w);var e=Reflect.ownKeys(f).filter(a=>{var s=u.get(a);return s===void 0||s.v!==v});for(var[n,i]of u)i.v!==v&&!(n in f)&&e.push(n);return e},setPrototypeOf(){Z()}})}function U(r,t=1){b(r,r.v+t)}const ue={get(r,t){if(!r.exclude.includes(t))return r.props[t]},set(r,t){return!1},getOwnPropertyDescriptor(r,t){if(!r.exclude.includes(t)&&t in r.props)return{enumerable:!0,configurable:!0,value:r.props[t]}},has(r,t){return r.exclude.includes(t)?!1:t in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(t=>!r.exclude.includes(t))}};function ve(r,t,c){return new Proxy({props:r,exclude:t},ue)}function Y(r){for(var t=L,c=L;t!==null&&!(t.f&(J|Q));)t=t.parent;try{return F(t),r()}finally{F(c)}}function de(r,t,c,y){var C;var u=(c&te)!==0,o=!W||(c&X)!==0,w=(c&k)!==0,m=(c&ae)!==0,f=!1,e;w?[e,f]=fe(()=>r[t]):e=r[t];var n=D in r||p in r,i=((C=N(r,t))==null?void 0:C.set)??(n&&w&&t in r?l=>r[t]=l:void 0),a=y,s=!0,d=!1,I=()=>(d=!0,s&&(s=!1,m?a=K(y):a=y),a);e===void 0&&y!==void 0&&(i&&o&&z(),e=I(),i&&i(e));var _;if(o)_=()=>{var l=r[t];return l===void 0?I():(s=!0,d=!1,l)};else{var S=Y(()=>(u?M:ee)(()=>r[t]));S.f|=H,_=()=>{var l=P(S);return l!==void 0&&(a=void 0),l===void 0?a:l}}if(!(c&re))return _;if(i){var E=r.$$legacy;return function(l,h){return arguments.length>0?((!o||!h||E||f)&&i(h?_():l),l):_()}}var R=!1,B=!1,A=ie(e),x=Y(()=>M(()=>{var l=_(),h=P(A);return R?(R=!1,B=!0,h):(B=!1,A.v=l)}));return u||(x.equals=ne),function(l,h){if(arguments.length>0){const T=h?P(x):o&&w?O(l):l;return x.equals(T)||(R=!0,b(A,T),d&&a!==void 0&&(a=T),K(()=>P(x))),l}return P(x)}}export{O as a,de as p,ve as r};
