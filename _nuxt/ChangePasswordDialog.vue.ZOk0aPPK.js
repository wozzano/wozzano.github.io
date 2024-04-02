import{g as T,j as Y,V as C,s as le,c as G,R as se,d as O,h as ie,i as ue,m as z,b as re,u as U,M as ce,a as de}from"./VGrid.0XN4DNhA.js";import{s as B,x as P,H as N,b as l,C as h,Y as A,Z as q,ar as J,v as ve,y as fe,R as me,r as E,I as $,h as he,U as ye,G as be,W as K,J as ge,M as R,$ as pe,X as L,K as Se,as as Ve,at as xe,E as M,a3 as ke,F as we,z as _e,o as Ie,q as Ce,w,u as Te,a5 as Be,d as X,a as Pe}from"./entry.7MwUyWK9.js";import{b as We,c as Xe,d as Ee,V as $e}from"./VDivider.LoyETL92.js";import{m as Ae,V as F}from"./VSheet.FMB62zbd.js";import{b as W}from"./VRow.BQodIuk0.js";import{V as Re}from"./VDialog.q0VDYU8Q.js";const Z=B({color:String,disabled:{type:[Boolean,String],default:!1},prevText:{type:String,default:"$vuetify.stepper.prev"},nextText:{type:String,default:"$vuetify.stepper.next"}},"VStepperActions"),He=P()({name:"VStepperActions",props:Z(),emits:{"click:prev":()=>!0,"click:next":()=>!0},setup(e,o){let{emit:t,slots:n}=o;const{t:s}=N();function i(){t("click:prev")}function a(){t("click:next")}return T(()=>{const u={onClick:i},v={onClick:a};return l("div",{class:"v-stepper-actions"},[l(Y,{defaults:{VBtn:{disabled:["prev",!0].includes(e.disabled),text:s(e.prevText),variant:"text"}}},{default:()=>{var r,m;return[(m=(r=n.prev)==null?void 0:r.call(n,{props:u}))!=null?m:l(C,u,null)]}}),l(Y,{defaults:{VBtn:{color:e.color,disabled:["next",!0].includes(e.disabled),text:s(e.nextText),variant:"tonal"}}},{default:()=>{var r,m;return[(m=(r=n.next)==null?void 0:r.call(n,{props:v}))!=null?m:l(C,v,null)]}})])}),{}}}),Ye=le("v-stepper-header"),Le=B({color:String,title:String,subtitle:String,complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},error:Boolean,errorIcon:{type:String,default:"$error"},icon:String,ripple:{type:[Boolean,Object],default:!0},rules:{type:Array,default:()=>[]},...G()},"VStepperItem"),Me=P()({name:"VStepperItem",directives:{Ripple:se},props:Le(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=O(e,ae,!0),s=h(()=>{var b;return(b=n==null?void 0:n.value.value)!=null?b:e.value}),i=h(()=>e.rules.every(b=>b()===!0)),a=h(()=>!e.disabled&&e.editable),u=h(()=>e.error||!i.value),v=h(()=>e.complete||e.rules.length>0&&i.value),r=h(()=>u.value?e.errorIcon:v.value?e.completeIcon:e.editable?e.editIcon:e.icon),m=h(()=>({canEdit:a.value,hasError:u.value,hasCompleted:v.value,title:e.title,subtitle:e.subtitle,step:s.value,value:e.value}));return T(()=>{var V,g,x,_,I;const b=(!n||n.isSelected.value||v.value||a.value)&&!u.value&&!e.disabled,p=!!(e.title!=null||t.title),S=!!(e.subtitle!=null||t.subtitle);function c(){n==null||n.toggle()}return A(l("button",{class:["v-stepper-item",{"v-stepper-item--complete":v.value,"v-stepper-item--disabled":e.disabled,"v-stepper-item--error":u.value},n==null?void 0:n.selectedClass.value],disabled:!e.editable,onClick:c},[l(ie,{key:"stepper-avatar",class:"v-stepper-item__avatar",color:b?e.color:void 0,size:24},{default:()=>{var f,d;return[(d=(f=t.icon)==null?void 0:f.call(t,m.value))!=null?d:r.value?l(ue,{icon:r.value},null):s.value]}}),l("div",{class:"v-stepper-item__content"},[p&&l("div",{key:"title",class:"v-stepper-item__title"},[(g=(V=t.title)==null?void 0:V.call(t,m.value))!=null?g:e.title]),S&&l("div",{key:"subtitle",class:"v-stepper-item__subtitle"},[(_=(x=t.subtitle)==null?void 0:x.call(t,m.value))!=null?_:e.subtitle]),(I=t.default)==null?void 0:I.call(t,m.value)])]),[[q("ripple"),e.ripple&&e.editable,null]])}),{}}}),Fe=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:s}=e,i=.5,a=16;e.offsetX=t-o,e.offsetY=s-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<o-a&&e.left(e),e.right&&t>o+a&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&s<n-a&&e.up(e),e.down&&s>n+a&&e.down(e))};function De(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function je(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),Fe(o)}function Ge(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function Oe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>De(t,o),touchend:t=>je(t,o),touchmove:t=>Ge(t,o)}}function ze(e,o){var u,v,r;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,s=(u=t==null?void 0:t.options)!=null?u:{passive:!0},i=(v=o.instance)==null?void 0:v.$.uid;if(!n||!i)return;const a=Oe(o.value);n._touchHandlers=(r=n._touchHandlers)!=null?r:Object.create(null),n._touchHandlers[i]=a,J(a).forEach(m=>{n.addEventListener(m,a[m],s)})}function Ue(e,o){var i,a;const t=(i=o.value)!=null&&i.parent?e.parentElement:e,n=(a=o.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const s=t._touchHandlers[n];J(s).forEach(u=>{t.removeEventListener(u,s[u])}),delete t._touchHandlers[n]}const Q={mounted:ze,unmounted:Ue},Ne=Q,ee=Symbol.for("vuetify:v-window"),te=Symbol.for("vuetify:v-window-group"),ne=B({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...z(),...re(),...ve()},"VWindow"),D=P()({name:"VWindow",directives:{Touch:Q},props:ne(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=fe(e),{isRtl:s}=me(),{t:i}=N(),a=U(e,te),u=E(),v=h(()=>s.value?!e.reverse:e.reverse),r=$(!1),m=h(()=>{const f=e.direction==="vertical"?"y":"x",y=(v.value?!r.value:r.value)?"-reverse":"";return"v-window-".concat(f).concat(y,"-transition")}),b=$(0),p=E(void 0),S=h(()=>a.items.value.findIndex(f=>a.selected.value.includes(f.id)));he(S,(f,d)=>{const y=a.items.value.length,k=y-1;y<=2?r.value=f<d:f===k&&d===0?r.value=!0:f===0&&d===k?r.value=!1:r.value=f<d}),ye(ee,{transition:m,isReversed:r,transitionCount:b,transitionHeight:p,rootRef:u});const c=h(()=>e.continuous||S.value!==0),V=h(()=>e.continuous||S.value!==a.items.value.length-1);function g(){c.value&&a.prev()}function x(){V.value&&a.next()}const _=h(()=>{const f=[],d={icon:s.value?e.nextIcon:e.prevIcon,class:"v-window__".concat(v.value?"right":"left"),onClick:a.prev,"aria-label":i("$vuetify.carousel.prev")};f.push(c.value?t.prev?t.prev({props:d}):l(C,d,null):l("div",null,null));const y={icon:s.value?e.prevIcon:e.nextIcon,class:"v-window__".concat(v.value?"left":"right"),onClick:a.next,"aria-label":i("$vuetify.carousel.next")};return f.push(V.value?t.next?t.next({props:y}):l(C,y,null):l("div",null,null)),f}),I=h(()=>e.touch===!1?e.touch:{...{left:()=>{v.value?g():x()},right:()=>{v.value?x():g()},start:d=>{let{originalEvent:y}=d;y.stopPropagation()}},...e.touch===!0?{}:e.touch});return T(()=>A(l(e.tag,{ref:u,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var f,d;return[l("div",{class:"v-window__container",style:{height:p.value}},[(f=t.default)==null?void 0:f.call(t,{group:a}),e.showArrows!==!1&&l("div",{class:"v-window__controls"},[_.value])]),(d=t.additional)==null?void 0:d.call(t,{group:a})]}}),[[q("touch"),I.value]])),{group:a}}}),qe=Symbol.for("vuetify:v-stepper"),Je=B({...be(ne(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VStepperWindow"),Ke=P()({name:"VStepperWindow",props:Je(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=K(qe,null),s=ge(e,"modelValue"),i=h({get(){var a;return s.value!=null||!n?s.value:(a=n.items.value.find(u=>n.selected.value.includes(u.id)))==null?void 0:a.value},set(a){s.value=a}});return T(()=>{const a=D.filterProps(e);return l(D,R({_as:"VStepperWindow"},a,{modelValue:i.value,"onUpdate:modelValue":u=>i.value=u,class:"v-stepper-window",mandatory:!1,touch:!1}),t)}),{}}}),oe=B({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...z(),...G(),...We()},"VWindowItem"),j=P()({name:"VWindowItem",directives:{Touch:Ne},props:oe(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=K(ee),s=O(e,te),{isBooted:i}=Xe();if(!n||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=$(!1),u=h(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function v(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function r(){var c;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=L((c=n.rootRef.value)==null?void 0:c.clientHeight)),n.transitionCount.value+=1)}function m(){v()}function b(c){a.value&&Se(()=>{!u.value||!a.value||!n||(n.transitionHeight.value=L(c.clientHeight))})}const p=h(()=>{const c=n.isReversed.value?e.reverseTransition:e.transition;return u.value?{name:typeof c!="string"?n.transition.value:c,onBeforeEnter:r,onAfterEnter:v,onEnterCancelled:m,onBeforeLeave:r,onAfterLeave:v,onLeaveCancelled:m,onEnter:b}:!1}),{hasContent:S}=Ee(e,s.isSelected);return T(()=>l(ce,{transition:p.value,disabled:!i.value},{default:()=>{var c;return[A(l("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[S.value&&((c=t.default)==null?void 0:c.call(t))]),[[pe,s.isSelected.value]])]}})),{groupItem:s}}}),Ze=B({...oe()},"VStepperWindowItem"),Qe=P()({name:"VStepperWindowItem",props:Ze(),setup(e,o){let{slots:t}=o;return T(()=>{const n=j.filterProps(e);return l(j,R({_as:"VStepperWindowItem"},n,{class:"v-stepper-window-item"}),t)}),{}}}),ae=Symbol.for("vuetify:v-stepper"),et=B({altLabels:Boolean,bgColor:String,editable:Boolean,hideActions:Boolean,items:{type:Array,default:()=>[]},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},mobile:Boolean,nonLinear:Boolean,flat:Boolean,...de({mandatory:"force",selectedClass:"v-stepper-item--selected"}),...Ae(),...Ve(Z(),["prevText","nextText"])},"VStepper"),tt=P()({name:"VStepper",props:et(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{items:n,next:s,prev:i,selected:a}=U(e,ae),{color:u,editable:v,prevText:r,nextText:m}=xe(e),b=h(()=>e.items.map((c,V)=>{const g=M(c,e.itemTitle,c),x=M(c,e.itemValue,V+1);return{title:g,value:x,raw:c}})),p=h(()=>n.value.findIndex(c=>a.value.includes(c.id))),S=h(()=>e.disabled?e.disabled:p.value===0?"prev":p.value===n.value.length-1?"next":!1);return ke({VStepperItem:{editable:v,prevText:r,nextText:m},VStepperActions:{color:u,disabled:S,prevText:r,nextText:m}}),T(()=>{const c=F.filterProps(e),V=!!(t.header||e.items.length),g=e.items.length>0,x=!e.hideActions&&!!(g||t.actions);return l(F,R(c,{color:e.bgColor,class:["v-stepper",{"v-stepper--alt-labels":e.altLabels,"v-stepper--flat":e.flat,"v-stepper--non-linear":e.nonLinear,"v-stepper--mobile":e.mobile},e.class],style:e.style}),{default:()=>{var _,I,f;return[V&&l(Ye,{key:"stepper-header"},{default:()=>[b.value.map((d,y)=>{var k;return l(we,null,[!!y&&l($e,null,null),l(Me,d,{default:(k=t["header-item.".concat(d.value)])!=null?k:t.header,icon:t.icon,title:t.title,subtitle:t.subtitle})])})]}),g&&l(Ke,{key:"stepper-window"},{default:()=>[b.value.map(d=>l(Qe,{value:d.value},{default:()=>{var y,k,H;return(H=(y=t["item.".concat(d.value)])==null?void 0:y.call(t,d))!=null?H:(k=t.item)==null?void 0:k.call(t,d)}}))]}),(_=t.default)==null?void 0:_.call(t,{prev:i,next:s}),x&&((f=(I=t.actions)==null?void 0:I.call(t,{next:s,prev:i}))!=null?f:l(He,{key:"stepper-actions","onClick:prev":i,"onClick:next":s},t))]}})}),{prev:i,next:s}}}),nt=Pe("p",{class:"text-orange"},"4분 59초 남았습니다.",-1),rt=_e({__name:"ChangePasswordDialog",setup(e){const o=E(1),t=()=>{o.value=2};return(n,s)=>(Ie(),Ce(Re,{activator:"parent",width:"640"},{default:w(({isActive:i})=>[l(tt,{modelValue:Te(o),"onUpdate:modelValue":s[0]||(s[0]=a=>Be(o)?o.value=a:null),items:["본인 확인","비밀번호 재설정"],"hide-actions":""},{"item.1":w(()=>[l(W,{class:"my-5",dirty:"",label:"이메일 주소",placeholder:"backend@sktelecom.com"},{append:w(()=>[l(C,{color:"primary",flat:""},{default:w(()=>[X("인증 요청")]),_:1})]),_:1}),l(W,{rules:[()=>"실패"],class:"my-5",dirty:"",label:"인증번호 입력",placeholder:"XXXXXX"},{details:w(()=>[nt]),_:1}),l(C,{block:"",color:"primary",onClick:t},{default:w(()=>[X("제출")]),_:1})]),"item.2":w(()=>[l(W,{class:"my-5",dirty:"",label:"새 비밀번호 입력",type:"password"}),l(W,{class:"my-5",dirty:"",label:"새 비밀번호 재입력",type:"password"}),l(C,{block:"",color:"primary",onClick:a=>i.value=!1},{default:w(()=>[X(" 확인 ")]),_:2},1032,["onClick"])]),_:2},1032,["modelValue"])]),_:1}))}});export{rt as _};
