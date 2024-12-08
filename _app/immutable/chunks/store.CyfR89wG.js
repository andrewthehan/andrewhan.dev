import{aa as T,X as k,ab as M,D as V,ac as P,H as $,ad as z,a6 as j,b as G,ae as U,h as g,af as H,ag as D,M as y,L as S,c as p,a7 as B,ah as N,ai as L,I as X,aj as x,ak as J,al as K,am as Q,an as Z,ao as ee,a as te,p as re,e as ae,j as ne,n as I,k as se,ap as ie,a3 as ue,m as oe,B as ce}from"./runtime.D4rtym7Z.js";import{b as le}from"./disclose-version.D7zSnEgs.js";function fe(e){var t=M,a=V;T(null),k(null);try{return e()}finally{T(t),k(a)}}const W=new Set,O=new Set;function Ee(e,t,a,n){function s(r){if(n.capture||w.call(t,r),!r.cancelBubble)return fe(()=>a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?z(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function me(e){for(var t=0;t<e.length;t++)W.add(e[t]);for(var a of O)a(e)}function w(e){var C;var t=this,a=t.ownerDocument,n=e.type,s=((C=e.composedPath)==null?void 0:C.call(e))||[],r=s[0]||e.target,f=0,b=e.__root;if(b){var d=s.indexOf(b);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var _=s.indexOf(t);if(_===-1)return;d<=_&&(f=d)}if(r=s[f]||e.target,r!==t){P(e,"currentTarget",{configurable:!0,get(){return r||a}});var A=M,c=V;T(null),k(null);try{for(var i,u=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var h=r["__"+n];if(h!==void 0&&!r.disabled)if($(h)){var[q,...F]=h;q.apply(r,[e,...F])}else h.call(r,e)}catch(E){i?u.push(E):i=E}if(e.cancelBubble||l===t||l===null)break;r=l}if(i){for(let E of u)queueMicrotask(()=>{throw E});throw i}}finally{e.__root=t,delete e.currentTarget,T(A),k(c)}}}let o;function de(){o=void 0}function Te(e){let t=null,a=g;var n;if(g){for(t=p,o===void 0&&(o=B(document.head));o!==null&&(o.nodeType!==8||o.data!==H);)o=D(o);o===null?y(!1):o=S(D(o))}g||(n=document.head.appendChild(j()));try{G(()=>e(n),U)}finally{a&&(y(!0),o=p,S(t))}}function ke(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const _e=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Se(e){return _e.includes(e)}const he={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function Ae(e){return e=e.toLowerCase(),he[e]??e}const pe=["touchstart","touchmove"];function be(e){return pe.includes(e)}function Le(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ve(e,t){return Y(e,t)}function De(e,t){N(),t.intro=t.intro??!1;const a=t.target,n=g,s=p;try{for(var r=B(a);r&&(r.nodeType!==8||r.data!==H);)r=D(r);if(!r)throw L;y(!0),S(r),X();const f=Y(e,{...t,anchor:r});if(p===null||p.nodeType!==8||p.data!==x)throw J(),L;return y(!1),f}catch(f){if(f===L)return t.recover===!1&&K(),N(),Q(a),y(!1),ve(e,t);throw f}finally{y(n),S(s),de()}}const v=new Map;function Y(e,{target:t,anchor:a,props:n={},events:s,context:r,intro:f=!0}){N();var b=new Set,d=c=>{for(var i=0;i<c.length;i++){var u=c[i];if(!b.has(u)){b.add(u);var l=be(u);t.addEventListener(u,w,{passive:l});var h=v.get(u);h===void 0?(document.addEventListener(u,w,{passive:l}),v.set(u,1)):v.set(u,h+1)}}};d(Z(W)),O.add(d);var _=void 0,A=ee(()=>{var c=a??t.appendChild(j());return te(()=>{if(r){re({});var i=ne;i.c=r}s&&(n.$$events=s),g&&le(c,null),_=e(c,n)||{},g&&(V.nodes_end=p),r&&ae()}),()=>{var l;for(var i of b){t.removeEventListener(i,w);var u=v.get(i);--u===0?(document.removeEventListener(i,w),v.delete(i)):v.set(i,u)}O.delete(d),R.delete(_),c!==a&&((l=c.parentNode)==null||l.removeChild(c))}});return R.set(_,A),_}let R=new WeakMap;function Ne(e){const t=R.get(e);t&&t()}function ye(e,t,a){if(e==null)return t(void 0),I;const n=se(()=>e.subscribe(t,a));return n.unsubscribe?()=>n.unsubscribe():n}let m=!1;function Ie(e,t,a){const n=a[t]??(a[t]={store:null,source:ue(void 0),unsubscribe:I});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=I;else{var s=!0;n.unsubscribe=ye(e,r=>{s?n.source.v=r:ce(n.source,r)}),s=!1}return oe(n.source)}function Oe(){const e={};return ie(()=>{for(var t in e)e[t].unsubscribe()}),e}function Re(e){var t=m;try{return m=!1,[e(),m]}finally{m=t}}export{Le as a,Ie as b,Re as c,Ee as d,me as e,Se as f,Te as g,De as h,ke as i,ve as m,Ae as n,Oe as s,Ne as u};
