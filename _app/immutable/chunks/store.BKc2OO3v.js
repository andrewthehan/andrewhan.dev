import{aa as m,X as E,ab as V,D as I,ac as H,H as W,ad as Y,ae as S,a7 as q,af as P,ag as $,ah as k,M as g,L as R,I as z,c as b,ai as G,aj as U,ak as X,al as x,am as F,an as J,a6 as K,a as Q,p as Z,h as L,e as ee,j as te,n as A,k as re,ao as ae,a3 as ne,m as se,B as ue}from"./runtime.Di6TJ3Bq.js";import{b as ie}from"./disclose-version.CIapI_nK.js";function oe(e){var t=V,a=I;m(null),E(null);try{return e()}finally{m(t),E(a)}}const M=new Set,N=new Set;function ve(e,t,a,n){function s(r){if(n.capture||v.call(t,r),!r.cancelBubble)return oe(()=>a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Y(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function ye(e){for(var t=0;t<e.length;t++)M.add(e[t]);for(var a of N)a(e)}function v(e){var O;var t=this,a=t.ownerDocument,n=e.type,s=((O=e.composedPath)==null?void 0:O.call(e))||[],r=s[0]||e.target,l=0,p=e.__root;if(p){var f=s.indexOf(p);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var d=s.indexOf(t);if(d===-1)return;f<=d&&(l=f)}if(r=s[l]||e.target,r!==t){H(e,"currentTarget",{configurable:!0,get(){return r||a}});var T=V,o=I;m(null),E(null);try{for(var u,i=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+n];if(_!==void 0&&!r.disabled)if(W(_)){var[B,...C]=_;B.apply(r,[e,...C])}else _.call(r,e)}catch(y){u?i.push(y):u=y}if(e.cancelBubble||c===t||c===null)break;r=c}if(u){for(let y of i)queueMicrotask(()=>{throw y});throw u}}finally{e.__root=t,delete e.currentTarget,m(T),E(o)}}}function ge(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ce=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function we(e){return ce.includes(e)}const le={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function me(e){return e=e.toLowerCase(),le[e]??e}const fe=["touchstart","touchmove"];function de(e){return fe.includes(e)}function Ee(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function _e(e,t){return j(e,t)}function Te(e,t){S(),t.intro=t.intro??!1;const a=t.target,n=L,s=b;try{for(var r=q(a);r&&(r.nodeType!==8||r.data!==P);)r=$(r);if(!r)throw k;g(!0),R(r),z();const l=j(e,{...t,anchor:r});if(b===null||b.nodeType!==8||b.data!==G)throw U(),k;return g(!1),l}catch(l){if(l===k)return t.recover===!1&&X(),S(),x(a),g(!1),_e(e,t);throw l}finally{g(n),R(s)}}const h=new Map;function j(e,{target:t,anchor:a,props:n={},events:s,context:r,intro:l=!0}){S();var p=new Set,f=o=>{for(var u=0;u<o.length;u++){var i=o[u];if(!p.has(i)){p.add(i);var c=de(i);t.addEventListener(i,v,{passive:c});var _=h.get(i);_===void 0?(document.addEventListener(i,v,{passive:c}),h.set(i,1)):h.set(i,_+1)}}};f(F(M)),N.add(f);var d=void 0,T=J(()=>{var o=a??t.appendChild(K());return Q(()=>{if(r){Z({});var u=te;u.c=r}s&&(n.$$events=s),L&&ie(o,null),d=e(o,n)||{},L&&(I.nodes_end=b),r&&ee()}),()=>{var c;for(var u of p){t.removeEventListener(u,v);var i=h.get(u);--i===0?(document.removeEventListener(u,v),h.delete(u)):h.set(u,i)}N.delete(f),D.delete(d),o!==a&&((c=o.parentNode)==null||c.removeChild(o))}});return D.set(d,T),d}let D=new WeakMap;function ke(e){const t=D.get(e);t&&t()}function pe(e,t,a){if(e==null)return t(void 0),A;const n=re(()=>e.subscribe(t,a));return n.unsubscribe?()=>n.unsubscribe():n}let w=!1;function Se(e,t,a){const n=a[t]??(a[t]={store:null,source:ne(void 0),unsubscribe:A});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=A;else{var s=!0;n.unsubscribe=pe(e,r=>{s?n.source.v=r:ue(n.source,r)}),s=!1}return se(n.source)}function Le(){const e={};return ae(()=>{for(var t in e)e[t].unsubscribe()}),e}function Ae(e){var t=w;try{return w=!1,[e(),w]}finally{w=t}}export{Ee as a,Se as b,Ae as c,ve as d,ye as e,we as f,Te as h,ge as i,_e as m,me as n,Le as s,ke as u};