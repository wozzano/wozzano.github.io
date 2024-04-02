import{V as y,a as u,b as m}from"./VRow.BQodIuk0.js";import{V,a as x}from"./VTable.9dqi_KeA.js";import{V as s}from"./VGrid.0XN4DNhA.js";import{V as g}from"./VDialog.q0VDYU8Q.js";import{V as v,c as A,d as b}from"./VCard.lCqAsZe6.js";import{V as D}from"./VSelect.AqpO2Gbg.js";import{V as C}from"./VSpacer.EljRKTKC.js";import{r as S,c as r,b as e,w as a,F as p,a as t,d as l,o as n,u as f,n as k,t as c}from"./entry.7MwUyWK9.js";import"./VDivider.LoyETL92.js";import"./VMenu.2WHYAwEk.js";import"./VCheckboxBtn.adQJ5cgH.js";const T=t("h1",null,"Data",-1),B=t("p",{class:"text-body-2"},[l(" Agent에서 사용될 Data를 등록합니다. 등록된 Data는 AI Backend Platform의 Vector Store에 저장되며,"),t("br"),l(" Agent의 모듈에서 데이터 소스로 활용될 수 있습니다. ")],-1),E=t("h3",null,"Data Source List",-1),F={class:"my-5"},w=t("span",{class:"text-red"},"*",-1),N={class:"my-5"},P=t("span",{class:"text-red"},"*",-1),R=t("colgroup",null,[t("col"),t("col"),t("col"),t("col"),t("col",{style:{width:"170px"}})],-1),z=t("thead",null,[t("tr",null,[t("th",null,"Data Source"),t("th",null,"Type"),t("th",null,"등록·갱신일"),t("th",null,"등록·갱신자"),t("th")])],-1),I={key:0},L={class:"text-right"},O={key:1},U=t("tr",null,[t("td",{class:"text-center",colspan:"5"},"등록된 Data가 없습니다.")],-1),$=[U],tt={__name:"index",setup(W){const _=S(Array(15).fill(0).map((h,d)=>({name:"ABP 이용 가이드_v".concat(d),type:["API","File(PDF)","URL","File(Excel)"][d%4],updatedAt:new Date().toISOString().slice(0,16).replace(/-/g,".").replace(/T/g," "),updatedBy:["신윤철","윤서희"][d%2]})));return(h,d)=>(n(),r(p,null,[T,B,e(y,{class:"mt-5 mb-0 align-center"},{default:a(()=>[e(u,{cols:"12"},{default:a(()=>[E]),_:1}),e(u,{cols:"12",md:"5"},{default:a(()=>[e(m,{density:"compact",dirty:"",label:"키워드",placeholder:"키워드 입력"},{append:a(()=>[e(s,{variant:"outlined"},{default:a(()=>[l("검색")]),_:1})]),_:1})]),_:1}),e(u,{class:"text-right",cols:"12",md:"7"},{default:a(()=>[e(s,{color:"primary",flat:"","prepend-icon":"mdi-plus"},{default:a(()=>[l(" NEW DATA RESOURCE "),e(g,{activator:"parent",width:"640"},{default:a(({isActive:o})=>[e(v,{title:"NEW DATA SOURCE"},{default:a(()=>[e(A,null,{default:a(()=>[t("div",F,[e(m,{dirty:"","model-value":"A. FAQ"},{label:a(()=>[l(" Data Source Name "),w]),_:1})]),t("div",N,[e(D,{dirty:"","model-value":"선택"},{label:a(()=>[l(" Type "),P]),_:1})])]),_:1}),e(b,null,{default:a(()=>[e(C),e(s,{color:"primary",variant:"flat",onClick:i=>o.value=!1},{default:a(()=>[l(" 등록 ")]),_:2},1032,["onClick"]),e(s,{variant:"text",onClick:i=>o.value=!1},{default:a(()=>[l(" 취소 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{class:"table-bordered"},{default:a(()=>[R,z,f(_).length?(n(),r("tbody",I,[(n(!0),r(p,null,k(f(_),(o,i)=>(n(),r("tr",{key:i},[t("td",null,c(o.name),1),t("td",null,c(o.type),1),t("td",null,c(o.updatedAt),1),t("td",null,c(o.updatedBy),1),t("td",L,[e(s,{icon:"mdi-magnify",size:"small",variant:"text"}),e(s,{icon:"mdi-delete",size:"small",variant:"text"}),e(s,{icon:"mdi-cached",size:"small",variant:"text"})])]))),128))])):(n(),r("tbody",O,$))]),_:1}),e(x,{length:5,"model-value":1,rounded:"circle"})],64))}};export{tt as default};
