function x(){}const M=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function A(){return Object.create(null)}function j(t){t.forEach(w)}function D(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(E(n,e))}function U(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function C(t,n,e,o,r,l){if(r){const f=y(n,e,o,l);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let a;function d(t){a=t}function p(){if(!a)throw new Error("Function called outside component initialization");return a}function I(t){p().$$.on_mount.push(t)}function J(t){p().$$.after_update.push(t)}function K(t){p().$$.on_destroy.push(t)}const i=[],b=[];let s=[];const g=[],m=Promise.resolve();let h=!1;function v(){h||(h=!0,m.then(q))}function L(){return v(),m}function O(t){s.push(t)}const _=new Set;let c=0;function q(){if(c!==0)return;const t=a;do{try{for(;c<i.length;){const n=i[c];c++,d(n),z(n.$$)}}catch(n){throw i.length=0,c=0,n}for(d(null),i.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];_.has(e)||(_.add(e),e())}s.length=0}while(i.length);for(;g.length;)g.pop()();h=!1,_.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function N(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{v as A,J as a,b,S as c,U as d,B as e,O as f,G as g,K as h,M as i,k as j,H as k,D as l,A as m,x as n,I as o,q as p,P as q,j as r,F as s,L as t,C as u,N as v,a as w,d as x,w as y,i as z};
