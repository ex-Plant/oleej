import{s as H,n as y,c as S}from"../chunks/scheduler.GmCa24-t.js";import{S as w,i as A,g as h,m as g,s as j,h as m,j as x,n as b,f as p,c as C,y as D,k as v,a as $,x as f,o as q}from"../chunks/index.GnFekBD4.js";import{p as I}from"../chunks/stores.kYdFzOrq.js";function E(o){let e,a=o[0].error.message+"",s;return{c(){e=h("h1"),s=g(a)},l(r){e=m(r,"H1",{});var i=x(e);s=b(i,a),i.forEach(p)},m(r,i){$(r,e,i),f(e,s)},p(r,i){i&1&&a!==(a=r[0].error.message+"")&&q(s,a)},d(r){r&&p(e)}}}function V(o){let e,a,s=o[0].status+"",r,i,u,d,c,k="wróc do bloga",t=o[0].error&&E(o);return{c(){e=h("div"),a=h("h1"),r=g(s),i=g(": coś jest nie tak..."),u=j(),t&&t.c(),d=j(),c=h("a"),c.textContent=k,this.h()},l(l){e=m(l,"DIV",{class:!0});var n=x(e);a=m(n,"H1",{});var _=x(a);r=b(_,s),i=b(_,": coś jest nie tak..."),_.forEach(p),u=C(n),t&&t.l(n),d=C(n),c=m(n,"A",{class:!0,href:!0,"data-svelte-h":!0}),D(c)!=="svelte-dqx3ae"&&(c.textContent=k),n.forEach(p),this.h()},h(){v(c,"class","pointer-events-auto"),v(c,"href","/"),v(e,"class","pointer-events-none fixed inset-0 flex flex-col items-center justify-center space-y-2 pt-20")},m(l,n){$(l,e,n),f(e,a),f(a,r),f(a,i),f(e,u),t&&t.m(e,null),f(e,d),f(e,c)},p(l,[n]){n&1&&s!==(s=l[0].status+"")&&q(r,s),l[0].error?t?t.p(l,n):(t=E(l),t.c(),t.m(e,d)):t&&(t.d(1),t=null)},i:y,o:y,d(l){l&&p(e),t&&t.d()}}}function z(o,e,a){let s;return S(o,I,r=>a(0,s=r)),o.$$.update=()=>{o.$$.dirty&1&&console.error(s.error)},[s]}class J extends w{constructor(e){super(),A(this,e,z,V,H,{})}}export{J as component};
