import{s as q,a as B,o as U,t as j,b as D}from"../chunks/scheduler.5TvDHJqZ.js";import{S as M,i as W,s as z,e as p,c as F,a as b,t as d,b as L,d as g,f as w,g as G,h as H,j as J,k as I,l as h,m as K,n as Q,o as X,p as y,q as v,r as E,u as O,v as R,w as P}from"../chunks/index.fuYcBV0e.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},k=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=Z(t,i),t in T)return;T[t]=!0;const r=t.endsWith(".css"),_=r?'[rel="stylesheet"]':"";if(!!i)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${_}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,i;var s=a[1][0];function c(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=v(s,c(a)),a[12](e)),{c(){e&&E(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){y();const l=e;d(l.$$.fragment,1,0,()=>{P(l,1)}),L()}s?(e=v(s,c(t)),t[12](e),E(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function c(t){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=v(s,c(a)),a[11](e)),{c(){e&&E(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){y();const l=e;d(l.$$.fragment,1,0,()=>{P(l,1)}),L()}s?(e=v(s,c(t)),t[11](e),E(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function c(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=v(s,c(a)),a[10](e)),{c(){e&&E(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){y();const l=e;d(l.$$.fragment,1,0,()=>{P(l,1)}),L()}s?(e=v(s,c(t)),t[10](e),E(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[10](null),e&&P(e,t)}}}function V(a){let e,n=a[6]&&A(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(w),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),h(e,"position","absolute"),h(e,"left","0"),h(e,"top","0"),h(e,"clip","rect(0 0 0 0)"),h(e,"clip-path","inset(50%)"),h(e,"overflow","hidden"),h(e,"white-space","nowrap"),h(e,"width","1px"),h(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function A(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,s,c;const t=[x,$],r=[];function _(o,u){return o[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let l=a[5]&&V(a);return{c(){n.c(),i=z(),l&&l.c(),s=p()},l(o){n.l(o),i=F(o),l&&l.l(o),s=p()},m(o,u){r[e].m(o,u),b(o,i,u),l&&l.m(o,u),b(o,s,u),c=!0},p(o,[u]){let m=e;e=_(o),e===m?r[e].p(o,u):(y(),d(r[m],1,1,()=>{r[m]=null}),L(),n=r[e],n?n.p(o,u):(n=r[e]=t[e](o),n.c()),g(n,1),n.m(i.parentNode,i)),o[5]?l?l.p(o,u):(l=V(o),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(o){c||(g(n),c=!0)},o(o){d(n),c=!1},d(o){o&&(w(i),w(s)),r[e].d(o),l&&l.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:l=null}=e;B(i.page.notify);let o=!1,u=!1,m=null;U(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,_=f.data_0),"data_1"in f&&n(4,l=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,c,r,_,l,o,u,m,i,s,N,S,C]}class oe extends M{constructor(e){super(),W(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>k(()=>import("../nodes/0.S7bzcUAi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),()=>k(()=>import("../nodes/1.zIZN9oWO.js"),__vite__mapDeps([8,1,2,3,4,5]),import.meta.url),()=>k(()=>import("../nodes/2.Nju9Emi-.js"),__vite__mapDeps([9,10,1,2,11,12,6,4,5,3,13]),import.meta.url),()=>k(()=>import("../nodes/3.Q-Y5YsUy.js"),__vite__mapDeps([14,11,12,10,1,2,15,16,5]),import.meta.url),()=>k(()=>import("../nodes/4.UGgieptx.js"),__vite__mapDeps([17,1,2,16]),import.meta.url),()=>k(()=>import("../nodes/5.xURRNzA7.js"),__vite__mapDeps([18,10,1,2,15,13]),import.meta.url)],le=[],fe={"/":[2],"/blog/[slug]":[3],"/kontakt":[4],"/o-mnie":[5]},ce={handleError:({error:a})=>{console.error(a)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.S7bzcUAi.js","../chunks/scheduler.5TvDHJqZ.js","../chunks/index.fuYcBV0e.js","../chunks/stores.Q7rit7Hd.js","../chunks/singletons.syBaqSVV.js","../chunks/paths.imaDlYD4.js","../chunks/bundle-mjs.iGZTyQCc.js","../assets/0.bhISUjx_.css","../nodes/1.zIZN9oWO.js","../nodes/2.Nju9Emi-.js","../chunks/CldImage.QXGykSmR.js","../chunks/convertDateToNumericString.Q0pHEDBh.js","../chunks/control.pJ1mnnAb.js","../chunks/BigArrowUp.HDhMBQJG.js","../nodes/3.Q-Y5YsUy.js","../chunks/customSanitization.BQ1Bxk-D.js","../chunks/BigArrowDown.-7Rl8SPG.js","../nodes/4.UGgieptx.js","../nodes/5.xURRNzA7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}