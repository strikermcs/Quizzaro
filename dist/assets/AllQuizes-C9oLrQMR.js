import"./_plugin-vue_export-helper-CtXoblKC.js";import{q as g}from"./quiz.service-BbSLNhP5.js";/* empty css                */import{_ as y}from"./RefreshButton-BN9E1bva.js";import"./QuizResultBoard-hs6AWMMd.js";/* empty css                    *//* empty css                  *//* empty css                  */import{Q as k}from"./QuizPlay-C82OfWCh.js";import{c as d,r as i,o as s,j as w,g as u,w as l,h as t,R as b,G as f,F as C,a6 as q,V as B,a7 as $,H as A,A as E,O as L,a0 as N,l as S}from"./index-Cmehh-cC.js";const V=d({__name:"QuizesListAll",props:{data:{}},setup(c){const o=c,a=i(!1),n=i(),_=(e,v)=>{n.value=o.data[e],a.value=!0},r=()=>{a.value=!1};return(e,v)=>{const m=q,z=B,h=$,Q=y;return s(),w(C,null,[a.value?(s(),u(k,{key:1,quiz:n.value},null,8,["quiz"])):(s(),u(h,{key:0,data:e.data,style:{width:"100%"}},{default:l(()=>[t(m,{label:e.$t("SentQuizesListQuizName"),prop:"name"},null,8,["label"]),t(m,{align:"right"},{default:l(p=>[t(z,{size:"small",onClick:P=>_(p.$index,p.row)},{default:l(()=>[b(f(e.$t("SentQuizesPlay")),1)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),t(Q,{onClick:r})],64)}}}),I=d({__name:"AllQuizes",setup(c){const o=i(!0),a=i([]);return A(async()=>{a.value=await g.getAllQuizes(),o.value=!1}),(n,_)=>{const r=L,e=N;return E((s(),u(r,{shadow:"hover",class:"card-listquiz"},{header:l(()=>[S("h3",null,f(n.$t("AllQuizes")),1)]),default:l(()=>[t(V,{data:a.value},null,8,["data"])]),_:1})),[[e,o.value]])}}});export{I as default};