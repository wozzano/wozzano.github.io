import{ab as S,z as L,C as x,ac as R,r as C,a6 as T,ad as B,ae as E,j as N,af as w,ag as P,ah as U,ai as j,aj as I,ak as D,al as F,am as O,an as q,ao as V,ap as z,aq as H}from"./entry.7MwUyWK9.js";async function k(t,r=S()){const{path:s,matched:e}=r.resolve(t);if(!e.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(s)))return;const l=r._preloadPromises=r._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>k(t,r));r._routePreloaded.add(s);const i=e.map(u=>{var a;return(a=u.components)==null?void 0:a.default}).filter(u=>typeof u=="function");for(const u of i){const a=Promise.resolve(u()).catch(()=>{}).finally(()=>l.splice(l.indexOf(a)));l.push(a)}await Promise.all(l)}const M=(...t)=>t.find(r=>r!==void 0),$="noopener noreferrer";function Q(t){const r=t.componentName||"NuxtLink",s=(e,l)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return _(e,t.trailingSlash);const i="path"in e?e.path:l(e).path;return{...e,name:void 0,path:_(i,t.trailingSlash)}};return L({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=S(),u=O(),a=x(()=>{const n=e.to||e.href||"";return s(n,i.resolve)}),d=x(()=>typeof a.value=="string"&&R(a.value,{acceptRelative:!0})),v=x(()=>e.external||e.target&&e.target!=="_self"?!0:typeof a.value=="object"?!1:a.value===""||d.value),b=C(!1),h=C(null),A=n=>{var f;h.value=e.custom?(f=n==null?void 0:n.$el)==null?void 0:f.nextElementSibling:n==null?void 0:n.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!X()){const f=q();let m,o=null;T(()=>{const p=W();B(()=>{m=E(()=>{var g;(g=h==null?void 0:h.value)!=null&&g.tagName&&(o=p.observe(h.value,async()=>{o==null||o(),o=null;const y=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",y).catch(()=>{}),!v.value&&k(a.value,i).catch(()=>{})]),b.value=!0}))})})}),N(()=>{m&&w(m),o==null||o(),o=null})}return()=>{var p,g,y;if(!v.value){const c={ref:A,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(b.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),P(U("RouterLink"),c,l.default)}const n=typeof a.value=="object"?(g=(p=i.resolve(a.value))==null?void 0:p.href)!=null?g:null:a.value&&!e.external&&!d.value?s(j(u.app.baseURL,a.value),i.resolve):a.value||null,f=e.target||null,m=e.noRel?null:M(e.rel,t.externalRelAttribute,n?$:"")||null,o=()=>V(n,{replace:e.replace});return e.custom?l.default?l.default({href:n,navigate:o,get route(){if(!n)return;const c=I(n);return{path:c.pathname,fullPath:c.pathname,get query(){return D(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}},rel:m,target:f,isExternal:v.value,isActive:!1,isExactActive:!1}):null:P("a",{ref:h,href:n,rel:m,target:f},(y=l.default)==null?void 0:y.call(l))}}})}const J=Q(F);function _(t,r){const s=r==="append"?z:H;return R(t)&&!t.startsWith("http")?t:s(t,!0)}function W(){const t=q();if(t._observer)return t._observer;let r=null;const s=new Map,e=(i,u)=>(r||(r=new IntersectionObserver(a=>{for(const d of a){const v=s.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&v&&v()}})),s.set(i,u),r.observe(i),()=>{s.delete(i),r.unobserve(i),s.size===0&&(r.disconnect(),r=null)});return t._observer={observe:e}}function X(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{J as _};
