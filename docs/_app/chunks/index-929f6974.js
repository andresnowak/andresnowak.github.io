function O(){}function L(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t&&typeof t=="object"&&typeof t.then=="function"}function P(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(P)}function J(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function ft(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function K(t){return Object.keys(t).length===0}function dt(t,e,n,c){if(t){const r=T(t,e,n,c);return t[0](r)}}function T(t,e,n,c){return t[1]&&c?L(n.ctx.slice(),t[1](c(e))):n.ctx}function _t(t,e,n,c){if(t[2]&&c){const r=t[2](c(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(e.dirty.length,r.length);for(let u=0;u<l;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function ht(t,e,n,c,r,s){if(r){const l=T(e,n,c,s);t.p(l,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let c=0;c<n;c++)e[c]=-1;return e}return-1}let w=!1;function W(){w=!0}function Q(){w=!1}function R(t,e,n,c){for(;t<e;){const r=t+(e-t>>1);n(r)<=c?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),c=new Int32Array(e.length);n[0]=-1;let r=0;for(let i=0;i<e.length;i++){const o=e[i].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:R(1,r,_=>e[n[_]].claim_order,o))-1;c[i]=n[f]+1;const a=f+1;n[a]=i,r=Math.max(a,r)}const s=[],l=[];let u=e.length-1;for(let i=n[r]+1;i!=0;i=c[i-1]){for(s.push(e[i-1]);u>=i;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);s.reverse(),l.sort((i,o)=>i.claim_order-o.claim_order);for(let i=0,o=0;i<l.length;i++){for(;o<s.length&&l[i].claim_order>=s[o].claim_order;)o++;const f=o<s.length?s[o]:null;t.insertBefore(l[i],f)}}function V(t,e){if(w){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){w&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function gt(){return N(" ")}function xt(){return N("")}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,c,r=!1){et(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,r||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,r?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return c()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function D(t,e,n,c){return z(t,r=>r.nodeName===e,r=>{const s=[];for(let l=0;l<r.attributes.length;l++){const u=r.attributes[l];n[u.name]||s.push(u.name)}s.forEach(l=>r.removeAttribute(l))},()=>c(e))}function kt(t,e,n){return D(t,e,n,Y)}function wt(t,e,n){return D(t,e,n,Z)}function nt(t,e){return z(t,n=>n.nodeType===3,n=>{const c=""+e;if(n.data.startsWith(c)){if(n.data.length!==c.length)return n.splitText(c.length)}else n.data=c},()=>N(e),!0)}function $t(t){return nt(t," ")}function vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Et(t,e,n,c){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,c?"important":"")}let p;function d(t){p=t}function $(){if(!p)throw new Error("Function called outside component initialization");return p}function jt(t){$().$$.on_mount.push(t)}function Nt(t){$().$$.after_update.push(t)}function St(t,e){$().$$.context.set(t,e)}const m=[],q=[],b=[],B=[],F=Promise.resolve();let E=!1;function H(){E||(E=!0,F.then(S))}function At(){return H(),F}function j(t){b.push(t)}const v=new Set;let x=0;function S(){const t=p;do{for(;x<m.length;){const e=m[x];x++,d(e),ct(e.$$)}for(d(null),m.length=0,x=0;q.length;)q.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];v.has(n)||(v.add(n),n())}b.length=0}while(m.length);for(;B.length;)B.pop()();E=!1,v.clear(),d(t)}function ct(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const k=new Set;let h;function rt(){h={r:0,c:[],p:h}}function it(){h.r||y(h.c),h=h.p}function I(t,e){t&&t.i&&(k.delete(t),t.i(e))}function lt(t,e,n,c){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),c&&(n&&t.d(1),c())}),t.o(e)}}function Ct(t,e){const n=e.token={};function c(r,s,l,u){if(e.token!==n)return;e.resolved=u;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=u);const o=r&&(e.current=r)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==s&&a&&(rt(),lt(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),it())}):e.block.d(1),o.c(),I(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[s]=o),f&&S()}if(G(t)){const r=$();if(t.then(s=>{d(r),c(e.then,1,e.value,s),d(null)},s=>{if(d(r),c(e.catch,2,e.error,s),d(null),!e.hasCatch)throw s}),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved=t}}function Mt(t,e,n){const c=e.slice(),{resolved:r}=t;t.current===t.then&&(c[t.value]=r),t.current===t.catch&&(c[t.error]=r),t.block.p(c,n)}function qt(t,e){const n={},c={},r={$$scope:1};let s=t.length;for(;s--;){const l=t[s],u=e[s];if(u){for(const i in l)i in u||(c[i]=1);for(const i in u)r[i]||(n[i]=u[i],r[i]=1);t[s]=u}else for(const i in l)r[i]=1}for(const l in c)l in n||(n[l]=void 0);return n}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t){t&&t.c()}function Pt(t,e){t&&t.l(e)}function ut(t,e,n,c){const{fragment:r,on_mount:s,on_destroy:l,after_update:u}=t.$$;r&&r.m(e,n),c||j(()=>{const i=s.map(P).filter(J);l?l.push(...i):y(i),t.$$.on_mount=[]}),u.forEach(j)}function ot(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(m.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Tt(t,e,n,c,r,s,l,u=[-1]){const i=p;d(t);const o=t.$$={fragment:null,ctx:null,props:s,update:O,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...A)=>{const C=A.length?A[0]:_;return o.ctx&&r(o.ctx[a],o.ctx[a]=C)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](C),f&&st(t,a)),_}):[],o.update(),f=!0,y(o.before_update),o.fragment=c?c(o.ctx):!1,e.target){if(e.hydrate){W();const a=tt(e.target);o.fragment&&o.fragment.l(a),a.forEach(X)}else o.fragment&&o.fragment.c();e.intro&&I(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),Q(),S()}d(i)}class zt{$destroy(){ot(this,1),this.$destroy=O}$on(e,n){const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const r=c.indexOf(n);r!==-1&&c.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{qt as A,Bt as B,ot as C,L as D,At as E,dt as F,ht as G,mt as H,_t as I,V as J,Z as K,wt as L,Ct as M,ft as N,Mt as O,yt as P,zt as S,tt as a,bt as b,kt as c,X as d,Y as e,Et as f,pt as g,nt as h,Tt as i,vt as j,gt as k,xt as l,$t as m,O as n,rt as o,lt as p,it as q,I as r,at as s,N as t,St as u,Nt as v,jt as w,Ot as x,Pt as y,ut as z};