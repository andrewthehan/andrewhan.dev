function o(t,e,r,l){var s=t.__styles??(t.__styles={});s[e]!==r&&(s[e]=r,r==null?t.style.removeProperty(e):t.style.setProperty(e,r,""))}var n=(t=>(t.ACHIEVEMENTS="ACHIEVEMENTS",t.ROCK_COUNT="ROCK_COUNT",t.GOBLIN_HEALTH="GOBLIN_HEALTH",t.CHEST_KEY="CHEST_KEY",t))(n||{});function a(t){localStorage.removeItem(t)}function u(t,e){const r=localStorage.getItem(t);return r==null?e:JSON.parse(r)}function c(t,e){localStorage.setItem(t,JSON.stringify(e))}function g(t,e){const r=localStorage.getItem(t);return r==null?e:Number(r)}function i(t,e){localStorage.setItem(t,String(e))}export{n as G,i as a,u as b,c,g,a as r,o as s};
