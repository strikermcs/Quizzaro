import"./_plugin-vue_export-helper.79fb6c6e.js";import{q as S}from"./quiz.service.7fcab847.js";/* empty css                */import"./QuizResultBoard.219635dc.js";/* empty css                    *//* empty css                  *//* empty css                  */import{Q as b}from"./QuizPlay.c1d0ec5f.js";import{_ as k}from"./RefreshButton.3dc83fb1.js";import{c as y,r as d,o as r,j as $,g as z,w as s,h as a,a2 as h,G as f,F as C,am as q,a5 as D,an as N,a7 as L,H as B,_ as E,ac as T,z as H,l as P}from"./index.c5b698de.js";/* empty css                */const V=y({__name:"QuizesList",props:{data:null},emits:["deleteSentQuiz"],setup(m,{emit:l}){const n=m,o=d(!1),u=d(),t=(e,v)=>{u.value=n.data[e].quiz,o.value=!0},i=()=>{o.value=!1},p=(e,v)=>{l("deleteSentQuiz",e)};return(e,v)=>{const _=q,Q=D,g=N;return r(),$(C,null,[o.value?(r(),z(b,{key:1,quiz:u.value},null,8,["quiz"])):(r(),z(g,{key:0,data:m.data,style:{width:"100%"}},{default:s(()=>[a(_,{label:e.$t("SentQuizesListQuizName"),prop:"quiz.name"},null,8,["label"]),a(_,{label:e.$t("SentQuizesListRecipient"),prop:"recipientName"},null,8,["label"]),a(_,{align:"right"},{default:s(c=>[a(Q,{size:"small",onClick:w=>t(c.$index,c.row)},{default:s(()=>[h(f(e.$t("SentQuizesPlay")),1)]),_:2},1032,["onClick"]),a(Q,{size:"small",type:"danger",onClick:w=>p(c.$index,c.row)},{default:s(()=>[h(f(e.$t("SentQuizesDelete")),1)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),a(k,{onClick:i})],64)}}}),U=y({__name:"SentQuizes",setup(m){const l=d(!0),n=d([]),o=L(),u=async t=>{l.value=!0;const i=n.value[t].sentQuizId;await S.sentQuizDelete(i),console.log(t,i),n.value.splice(t,1),l.value=!1,o.SetNofication("Success","ItemDeleteSuccessfully","success")};return B(async()=>{const t=await S.getSentQuizes();n.value=t,l.value=!1}),(t,i)=>{const p=E,e=T;return H((r(),z(p,{shadow:"hover",class:"card-listquiz"},{header:s(()=>[P("h3",null,f(t.$t("SentQuizzesList")),1)]),default:s(()=>[a(V,{data:n.value,onDeleteSentQuiz:u},null,8,["data"])]),_:1})),[[e,l.value]])}}});export{U as default};