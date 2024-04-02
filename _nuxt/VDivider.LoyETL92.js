import{aG as Fe,b0 as Me,x as ve,b as M,M as W,aP as le,s as $,r as V,L as z,aD as de,h as L,aA as H,b1 as Qe,C as k,K as me,X as B,V as be,f as ye,b2 as Re,b3 as et,aC as ge,W as Ne,aU as Ee,aE as tt,I as j,aw as nt,a6 as De,aM as Ve,U as ot,b4 as _e,aW as at,v as He,J as rt,y as Ie,R as it,S as We,j as st,b5 as lt,Y as ct,$ as ut,Z as ft,F as vt}from"./entry.7MwUyWK9.js";import{G,a4 as dt,H as ce,a5 as mt,a6 as $e,_ as qe,a7 as xe,a8 as oe,a9 as ae,aa as Se,ab as re,ac as ke,ad as Oe,m as je,v as yt,e as gt,r as ht,B as wt,$ as bt,g as ze,M as Et,ae as xt,f as St}from"./VGrid.0XN4DNhA.js";const Z=new WeakMap;function kt(e,n){Object.keys(n).forEach(t=>{if(Fe(t)){const o=Me(t),a=Z.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),Z.has(e)||Z.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ot(e,n){Object.keys(n).forEach(t=>{if(Fe(t)){const o=Me(t),a=Z.get(e);a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function Ye(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Ct(e):he(e))return e;e=e.parentElement}return document.scrollingElement}function Q(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(he(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function he(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ct(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function At(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const pt=$({target:[Object,Array]},"v-dialog-transition"),ln=ve()({name:"VDialogTransition",props:pt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var w;await new Promise(h=>requestAnimationFrame(h)),await new Promise(h=>requestAnimationFrame(h)),a.style.visibility="";const{x:s,y:r,sx:c,sy:u,speed:f}=Ce(e.target,a),g=G(a,[{transform:"translate(".concat(s,"px, ").concat(r,"px) scale(").concat(c,", ").concat(u,")"),opacity:0},{}],{duration:225*f,easing:dt});(w=Pe(a))==null||w.forEach(h=>{G(h,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ce})}),g.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var w;await new Promise(h=>requestAnimationFrame(h));const{x:s,y:r,sx:c,sy:u,speed:f}=Ce(e.target,a);G(a,[{},{transform:"translate(".concat(s,"px, ").concat(r,"px) scale(").concat(c,", ").concat(u,")"),opacity:0}],{duration:125*f,easing:mt}).finished.then(()=>i()),(w=Pe(a))==null||w.forEach(h=>{G(h,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ce})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?M(le,W({name:"dialog-transition"},o,{css:!1}),t):M(le,{name:"dialog-transition"},t)}});function Pe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ce(e,n){const t=$e(e),o=qe(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(C=>parseFloat(C)),[s,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;s==="left"||r==="left"?c-=t.width/2:(s==="right"||r==="right")&&(c+=t.width/2);let u=t.top+t.height/2;s==="top"||r==="top"?u-=t.height/2:(s==="bottom"||r==="bottom")&&(u+=t.height/2);const f=t.width/o.width,g=t.height/o.height,w=Math.max(1,f,g),h=f/w||0,d=g/w||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),P=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:c-(a+o.left),y:u-(i+o.top),sx:h,sy:d,speed:P}}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Tt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ae(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ie({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:a,y:i},n)}return ie({x:n.width/2,y:n.height/2},n)}const Xe={static:Ft,connected:Rt},Bt=$({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Xe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Lt(e,n){const t=V({}),o=V();z&&de(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,r;L(()=>e.locationStrategy,i),H(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(r=Xe[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:t,updateLocation:o}}function Ft(){}function Mt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=qe(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Rt(e,n,t){(Array.isArray(e.target.value)||At(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=Qe(()=>{const d=xe(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?oe(d):xe(n.origin,e.isRtl.value);return d.side===v.side&&d.align===ae(v).align?{preferredAnchor:Se(d),preferredOrigin:Se(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,r,c,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>k(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=k(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const w=new ResizeObserver(()=>{g&&h()});L([e.target,e.contentEl],(d,v)=>{let[P,C]=d,[S,b]=v;S&&!Array.isArray(S)&&w.unobserve(S),P&&!Array.isArray(P)&&w.observe(P),b&&w.unobserve(b),C&&w.observe(C)},{immediate:!0}),H(()=>{w.disconnect()});function h(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const d=$e(e.target.value),v=Mt(e.contentEl.value,e.isRtl.value),P=Q(e.contentEl.value),C=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const S=P.reduce((O,E)=>{const m=E.getBoundingClientRect(),y=new re({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return O?new re({x:Math.max(O.left,y.left),y:Math.max(O.top,y.top),width:Math.min(O.right,y.right)-Math.max(O.left,y.left),height:Math.min(O.bottom,y.bottom)-Math.max(O.top,y.top)}):y},void 0);S.x+=C,S.y+=C,S.width-=C*2,S.height-=C*2;let b={anchor:a.value,origin:i.value};function I(O){const E=new re(v),m=Ae(O.anchor,d),y=Ae(O.origin,E);let{x:N,y:F}=Tt(m,y);switch(O.anchor.side){case"top":F-=f.value[0];break;case"bottom":F+=f.value[0];break;case"left":N-=f.value[0];break;case"right":N+=f.value[0];break}switch(O.anchor.align){case"top":F-=f.value[1];break;case"bottom":F+=f.value[1];break;case"left":N-=f.value[1];break;case"right":N+=f.value[1];break}return E.x+=N,E.y+=F,E.width=Math.min(E.width,c.value),E.height=Math.min(E.height,u.value),{overflows:Oe(E,S),x:N,y:F}}let R=0,A=0;const l={x:0,y:0},T={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:O,y:E,overflows:m}=I(b);R+=O,A+=E,v.x+=O,v.y+=E;{const y=ke(b.anchor),N=m.x.before||m.x.after,F=m.y.before||m.y.after;let Y=!1;if(["x","y"].forEach(p=>{if(p==="x"&&N&&!T.x||p==="y"&&F&&!T.y){const D={anchor:{...b.anchor},origin:{...b.origin}},U=p==="x"?y==="y"?ae:oe:y==="y"?oe:ae;D.anchor=U(D.anchor),D.origin=U(D.origin);const{overflows:q}=I(D);(q[p].before<=m[p].before&&q[p].after<=m[p].after||q[p].before+q[p].after<(m[p].before+m[p].after)/2)&&(b=D,Y=T[p]=!0)}}),Y)continue}m.x.before&&(R+=m.x.before,v.x+=m.x.before),m.x.after&&(R-=m.x.after,v.x-=m.x.after),m.y.before&&(A+=m.y.before,v.y+=m.y.before),m.y.after&&(A-=m.y.after,v.y-=m.y.after);{const y=Oe(v,S);l.x=S.width-y.x.before-y.x.after,l.y=S.height-y.y.before-y.y.after,R+=y.x.before,v.x+=y.x.before,A+=y.y.before,v.y+=y.y.before}break}const ne=ke(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":"".concat(b.anchor.side," ").concat(b.anchor.align),transformOrigin:"".concat(b.origin.side," ").concat(b.origin.align),top:B(se(A)),left:e.isRtl.value?void 0:B(se(R)),right:e.isRtl.value?B(se(-R)):void 0,minWidth:B(ne==="y"?Math.min(s.value,d.width):s.value),maxWidth:B(pe(be(l.x,s.value===1/0?0:s.value,c.value))),maxHeight:B(pe(be(l.y,r.value===1/0?0:r.value,u.value)))}),{available:l,contentBox:v}}return L(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>h()),me(()=>{const d=h();if(!d)return;const{available:v,contentBox:P}=d;P.height>v.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function pe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const ee=[];function Nt(e){!ue||ee.length?(ee.push(e),fe()):(ue=!1,e(),fe())}let Te=-1;function fe(){cancelAnimationFrame(Te),Te=requestAnimationFrame(()=>{const e=ee.shift();e&&e(),ee.length?fe():ue=!0})}const J={none:null,close:_t,block:Ht,reposition:It},Dt=$({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function Vt(e,n){if(!z)return;let t;ye(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Re(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=J[e.scrollStrategy])==null||o.call(J,n,e,t)}))}),H(()=>{t==null||t.stop()})}function _t(e){var t;function n(o){e.isActive.value=!1}Ge((t=e.targetEl.value)!=null?t:e.contentEl.value,n)}function Ht(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...Q(e.targetEl.value,n.contained?t:void 0),...Q(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>he(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,c)=>{r.style.setProperty("--v-body-scroll-x",B(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",B(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",B(a)),r.classList.add("v-overlay-scroll-blocked")}),H(()=>{o.forEach((r,c)=>{const u=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),g=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-u,r.scrollTop=-f,r.style.scrollBehavior=g}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function It(e,n,t){let o=!1,a=-1,i=-1;function s(r){Nt(()=>{var f,g;const c=performance.now();(g=(f=e.updateLocation).value)==null||g.call(f,r),o=(performance.now()-c)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{var r;Ge((r=e.targetEl.value)!=null?r:e.contentEl.value,c=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(c)})})):s(c)})})}),H(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function Ge(e,n){const t=[document,...Q(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),H(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Wt=Symbol.for("vuetify:v-menu"),$t=$({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function qt(e,n){let t=()=>{};function o(s){t==null||t();const r=Number(s?e.openDelay:e.closeDelay);return new Promise(c=>{t=et(r,()=>{n==null||n(s),c(s)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const jt=$({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...$t()},"VOverlay-activator");function zt(e,n){let{isActive:t,isTop:o}=n;const a=ge("useActivator"),i=V();let s=!1,r=!1,c=!0;const u=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:g,runCloseDelay:w}=qt(e,l=>{l===(e.openOnHover&&s||u.value&&r)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(c=!0),t.value=l)}),h=V(),d={onClick:l=>{l.stopPropagation(),i.value=l.currentTarget||l.target,t.value||(h.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var T;(T=l.sourceCapabilities)!=null&&T.firesTouchEvents||(s=!0,i.value=l.currentTarget||l.target,g())},onMouseleave:l=>{s=!1,w()},onFocus:l=>{tt(l.target,":focus-visible")!==!1&&(r=!0,l.stopPropagation(),i.value=l.currentTarget||l.target,g())},onBlur:l=>{r=!1,l.stopPropagation(),w()}},v=k(()=>{const l={};return f.value&&(l.onClick=d.onClick),e.openOnHover&&(l.onMouseenter=d.onMouseenter,l.onMouseleave=d.onMouseleave),u.value&&(l.onFocus=d.onFocus,l.onBlur=d.onBlur),l}),P=k(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,g()},l.onMouseleave=()=>{s=!1,w()}),u.value&&(l.onFocusin=()=>{r=!0,g()},l.onFocusout=()=>{r=!1,w()}),e.closeOnContentClick){const T=Ne(Wt,null);l.onClick=()=>{t.value=!1,T==null||T.closeParents()}}return l}),C=k(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{c&&(s=!0,c=!1,g())},l.onMouseleave=()=>{s=!1,w()}),l});L(o,l=>{l&&(e.openOnHover&&!s&&(!u.value||!r)||u.value&&!r&&(!e.openOnHover||!s))&&(t.value=!1)}),L(t,l=>{l||setTimeout(()=>{h.value=void 0})},{flush:"post"});const S=V();ye(()=>{S.value&&me(()=>{i.value=Ee(S.value)})});const b=V(),I=k(()=>e.target==="cursor"&&h.value?h.value:b.value?Ee(b.value):Ue(e.target,a)||i.value),R=k(()=>Array.isArray(I.value)?void 0:I.value);let A;return L(()=>!!e.activator,l=>{l&&z?(A=Re(),A.run(()=>{Yt(e,a,{activatorEl:i,activatorEvents:v})})):A&&A.stop()},{flush:"post",immediate:!0}),H(()=>{A==null||A.stop()}),{activatorEl:i,activatorRef:S,target:I,targetEl:R,targetRef:b,activatorEvents:v,contentEvents:P,scrimEvents:C}}function Yt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;L(()=>e.activator,(c,u)=>{if(u&&c!==u){const f=r(u);f&&s(f)}c&&me(()=>i())},{immediate:!0}),L(()=>e.activatorProps,()=>{i()}),H(()=>{s()});function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&kt(c,W(a.value,u))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Ot(c,W(a.value,u))}function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const u=Ue(c,n);return o.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:void 0,o.value}}function Ue(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Xt(){if(!z)return j(!1);const{ssr:e}=nt();if(e){const n=j(!1);return De(()=>{n.value=!0}),n}else return j(!0)}const Gt=$({eager:Boolean},"lazy");function Ut(e,n){const t=j(!1),o=k(()=>t.value||e.eager||n.value);L(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function Kt(){const n=ge("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Be=Symbol.for("vuetify:stack"),X=Ve([]);function Zt(e,n,t){const o=ge("useStack"),a=!t,i=Ne(Be,void 0),s=Ve({activeChildren:new Set});ot(Be,s);const r=j(+n.value);de(e,()=>{var g;const f=(g=X.at(-1))==null?void 0:g[1];r.value=f?f+10:+n.value,a&&X.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),H(()=>{if(a){const w=at(X).findIndex(h=>h[0]===o.uid);X.splice(w,1)}i==null||i.activeChildren.delete(o.uid)})});const c=j(!0);a&&ye(()=>{var g;const f=((g=X.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>c.value=f)});const u=k(()=>!s.activeChildren.size);return{globalTop:_e(c),localTop:u,stackStyles:k(()=>({zIndex:r.value}))}}function Jt(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!z)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Qt(){return!0}function Ke(e,n,t){if(!e||Ze(e,t)===!1)return!1;const o=Ye(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function Ze(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Qt)(e)}function en(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ke(e,n,t)&&setTimeout(()=>{Ze(e,t)&&o&&o(e)},0)}function Le(e,n){const t=Ye(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const tn={mounted(e,n){const t=a=>en(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ke(a,e,n)};Le(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Le(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function nn(e){const{modelValue:n,color:t,...o}=e;return M(le,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&M("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const on=$({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...jt(),...je(),...yt(),...Gt(),...Bt(),...Dt(),...He(),...gt()},"VOverlay"),cn=ve()({name:"VOverlay",directives:{ClickOutside:tn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...on()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=rt(e,"modelValue"),s=k({get:()=>i.value,set:x=>{x&&e.disabled||(i.value=x)}}),{teleportTarget:r}=Jt(k(()=>e.attach||e.contained)),{themeClasses:c}=Ie(e),{rtlClasses:u,isRtl:f}=it(),{hasContent:g,onAfterLeave:w}=Ut(e,s),h=ht(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:P}=Zt(s,We(e,"zIndex"),e._disableGlobalStack),{activatorEl:C,activatorRef:S,target:b,targetEl:I,targetRef:R,activatorEvents:A,contentEvents:l,scrimEvents:T}=zt(e,{isActive:s,isTop:v}),{dimensionStyles:te}=wt(e),ne=Xt(),{scopeId:O}=Kt();L(()=>e.disabled,x=>{x&&(s.value=!1)});const E=V(),m=V(),y=V(),{contentStyles:N,updateLocation:F}=Lt(e,{isRtl:f,contentEl:y,target:b,isActive:s});Vt(e,{root:E,contentEl:y,targetEl:I,isActive:s,updateLocation:F});function Y(x){a("click:outside",x),e.persistent?K():s.value=!1}function p(x){return s.value&&d.value&&(!e.scrim||x.target===m.value)}z&&L(s,x=>{x?window.addEventListener("keydown",D):window.removeEventListener("keydown",D)},{immediate:!0}),st(()=>{z&&window.removeEventListener("keydown",D)});function D(x){var _,we;x.key==="Escape"&&d.value&&(e.persistent?K():(s.value=!1,(_=y.value)!=null&&_.contains(document.activeElement)&&((we=C.value)==null||we.focus())))}const U=bt();de(()=>e.closeOnBack,()=>{xt(U,x=>{d.value&&s.value?(x(!1),e.persistent?K():s.value=!1):x()})});const q=V();L(()=>s.value&&(e.absolute||e.contained)&&r.value==null,x=>{if(x){const _=Pt(E.value);_&&_!==document.scrollingElement&&(q.value=_.scrollTop)}});function K(){e.noClickAnimation||y.value&&G(y.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ce})}function Je(){w(),a("afterLeave")}return ze(()=>{var x;return M(vt,null,[(x=t.activator)==null?void 0:x.call(t,{isActive:s.value,props:W({ref:S,targetRef:R},A.value,e.activatorProps)}),ne.value&&g.value&&M(lt,{disabled:!r.value,to:r.value},{default:()=>[M("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},c.value,u.value,e.class],style:[P.value,{"--v-overlay-opacity":e.opacity,top:B(q.value)},e.style],ref:E},O,o),[M(nn,W({color:h,modelValue:s.value&&!!e.scrim,ref:m},T.value),null),M(Et,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:Je},{default:()=>{var _;return[ct(M("div",W({ref:y,class:["v-overlay__content",e.contentClass],style:[te.value,N.value]},l.value,e.contentProps),[(_=t.default)==null?void 0:_.call(t,{isActive:s})]),[[ut,s.value],[ft("click-outside"),{handler:Y,closeConditional:p,include:()=>[C.value]}]])]}})])]})])}),{activatorEl:C,scrimEl:m,target:b,animateClick:K,contentEl:y,globalTop:d,localTop:v,updateLocation:F}}});function un(){const e=j(!1);return De(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:k(()=>e.value?void 0:{transition:"none !important"}),isBooted:_e(e)}}const an=$({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...je(),...He()},"VDivider"),fn=ve()({name:"VDivider",props:an(),setup(e,n){let{attrs:t}=n;const{themeClasses:o}=Ie(e),{textColorClasses:a,textColorStyles:i}=St(We(e,"color")),s=k(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=B(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=B(e.thickness)),r});return ze(()=>M("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,a.value,e.class],style:[s.value,i.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:"".concat(t.role||"separator")},null)),{}}});export{fn as V,cn as a,Gt as b,un as c,Ut as d,ln as e,Wt as f,Pt as g,on as m,Kt as u};
