import{t as k,h,Z as e,_ as E,a0 as I}from"./runtime.DkP24cSa.js";import{g as b,i as B}from"./disclose-version.LHDEgC10.js";import{a as M,n as q,b as z}from"./utils.DW_b4ELl.js";function D(s,i){if(i){const r=document.body;s.autofocus=!0,k(()=>{document.activeElement===r&&s.focus()})}}function G(s,i,r,a){var c=s.__attributes??(s.__attributes={});h&&(c[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||c[i]!==(c[i]=r)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[E]=r),r==null?s.removeAttribute(i):typeof r!="string"&&A(s).includes(i)?s[i]=r:s.setAttribute(i,r))}function Y(s,i,r,a,c=!1,n=!1,K=!1){var u=i||{},$=s.tagName==="OPTION";for(var d in i)d in r||(r[d]=null);a!==void 0&&(r.class=r.class?r.class+" "+a:a);var w=A(s),L=s.__attributes??(s.__attributes={});for(const o in r){let f=r[o];if($&&o==="value"&&f==null){s.value=s.__value="",u[o]=f;continue}var y=u[o];if(f!==y){u[o]=f;var g=o[0]+o[1];if(g!=="$$"){if(g==="on"){const v={},p="$$"+o;let t=o.slice(2);var l=z(t);if(M(t)&&(t=t.slice(0,-7),v.capture=!0),!l&&y){if(f!=null)continue;s.removeEventListener(t,u[p],v),u[p]=null}if(f!=null)if(l)s[`__${t}`]=f,B([t]);else{let O=function(T){u[o].call(this,T)};u[p]=b(t,s,O,v)}else l&&(s[`__${t}`]=void 0)}else if(o==="style"&&f!=null)s.style.cssText=f+"";else if(o==="autofocus")D(s,!!f);else if(o==="__value"||o==="value"&&f!=null)s.value=s[o]=s.__value=f;else{var _=o;c||(_=q(_)),f==null&&!n?(L[o]=null,s.removeAttribute(o)):w.includes(_)&&(n||typeof f!="string")?s[_]=f:typeof f!="function"&&(h&&(_==="src"||_==="href"||_==="srcset")||G(s,_,f))}o==="style"&&"__styles"in s&&(s.__styles={})}}}return u}var N=new Map;function A(s){var i=N.get(s.nodeName);if(i)return i;N.set(s.nodeName,i=[]);for(var r,a=e(s),c=Element.prototype;c!==a;){r=I(a);for(var n in r)r[n].set&&i.push(n);a=e(a)}return i}export{G as a,Y as s};
