import{l as j,b as ee,m as X,h as w,d as b,c as ae,o as re,q as P,H as ne,r as F,e as k,k as N,I as D,g as Q,i as W,j as ie,t as fe,u as G,v as L,w as J,x as y,y as le,z as ue,A as se,B as te,C as ve,D as de,F as _e,G as oe,J as ce,K,L as he,M as Ee}from"./runtime.DkP24cSa.js";function xe(l,e){return e}function pe(l,e,a,t){for(var v=[],_=e.length,s=0;s<_;s++)le(e[s].e,v,!0);var o=_>0&&v.length===0&&a!==null;if(o){var A=a.parentNode;ue(A),A.append(a),t.clear(),m(l,e[0].prev,e[_-1].next)}se(v,()=>{for(var h=0;h<_;h++){var d=e[h];o||(t.delete(d.k),m(l,d.prev,d.next)),te(d.e,!o)}})}function me(l,e,a,t,v,_=null){var s=l,o={flags:e,items:new Map,first:null},A=(e&X)!==0;if(A){var h=l;s=w?b(ve(h)):h.appendChild(j())}w&&ae();var d=null,C=!1;ee(()=>{var r=a(),u=re(r)?r:r==null?[]:P(r),f=u.length;if(C&&f===0)return;C=f===0;let T=!1;if(w){var E=s.data===ne;E!==(f===0)&&(s=F(),b(s),k(!1),T=!0)}if(w){for(var p=null,I,c=0;c<f;c++){if(N.nodeType===8&&N.data===de){s=N,T=!0,k(!1);break}var n=u[c],i=t(n,c);I=Z(N,o,p,null,n,i,c,v,e),o.items.set(i,I),p=I}f>0&&b(F())}if(!w){var M=_e;Ae(u,o,s,v,e,(M.f&D)!==0,t)}_!==null&&(f===0?d?Q(d):d=W(()=>_(s)):d!==null&&ie(d,()=>{d=null})),T&&k(!0),a()}),w&&(s=N)}function Ae(l,e,a,t,v,_,s){var q,B,V,Y;var o=(v&oe)!==0,A=(v&(L|y))!==0,h=l.length,d=e.items,C=e.first,r=C,u,f=null,T,E=[],p=[],I,c,n,i;if(o)for(i=0;i<h;i+=1)I=l[i],c=s(I,i),n=d.get(c),n!==void 0&&((q=n.a)==null||q.measure(),(T??(T=new Set)).add(n));for(i=0;i<h;i+=1){if(I=l[i],c=s(I,i),n=d.get(c),n===void 0){var M=r?r.e.nodes_start:a;f=Z(M,e,f,f===null?e.first:f.next,I,c,i,t,v),d.set(c,f),E=[],p=[],r=f.next;continue}if(A&&Ie(n,I,i,v),n.e.f&D&&(Q(n.e),o&&((B=n.a)==null||B.unfix(),(T??(T=new Set)).delete(n))),n!==r){if(u!==void 0&&u.has(n)){if(E.length<p.length){var g=p[0],x;f=g.prev;var O=E[0],R=E[E.length-1];for(x=0;x<E.length;x+=1)U(E[x],g,a);for(x=0;x<p.length;x+=1)u.delete(p[x]);m(e,O.prev,R.next),m(e,f,O),m(e,R,g),r=g,f=R,i-=1,E=[],p=[]}else u.delete(n),U(n,r,a),m(e,n.prev,n.next),m(e,n,f===null?e.first:f.next),m(e,f,n),f=n;continue}for(E=[],p=[];r!==null&&r.k!==c;)(_||!(r.e.f&D))&&(u??(u=new Set)).add(r),p.push(r),r=r.next;if(r===null)continue;n=r}E.push(n),f=n,r=n.next}if(r!==null||u!==void 0){for(var H=u===void 0?[]:P(u);r!==null;)(_||!(r.e.f&D))&&H.push(r),r=r.next;var S=H.length;if(S>0){var $=v&X&&h===0?a:null;if(o){for(i=0;i<S;i+=1)(V=H[i].a)==null||V.measure();for(i=0;i<S;i+=1)(Y=H[i].a)==null||Y.fix()}pe(e,H,$,d)}}o&&fe(()=>{var z;if(T!==void 0)for(n of T)(z=n.a)==null||z.apply()}),G.first=e.first&&e.first.e,G.last=f&&f.e}function Ie(l,e,a,t){t&L&&J(l.v,e),t&y?J(l.i,a):l.i=a}function Z(l,e,a,t,v,_,s,o,A){var h=(A&L)!==0,d=(A&he)===0,C=h?d?ce(v):K(v):v,r=A&y?K(s):s,u={i:r,v:C,k:_,a:null,e:null,prev:a,next:t};try{return u.e=W(()=>o(l,C,r),w),u.e.prev=a&&a.e,u.e.next=t&&t.e,a===null?e.first=u:(a.next=u,a.e.next=u.e),t!==null&&(t.prev=u,t.e.prev=u.e),u}finally{}}function U(l,e,a){for(var t=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==t;){var s=Ee(_);v.before(_),_=s}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{me as e,xe as i};
