import{u as l,ae as n,af as c,ag as d,ah as o,ai as f,aj as R,ak as h,al as b}from"./index-Cmehh-cC.js";function S(s){var t;const a=l(),e=n(d(o,"quizesResults"),c("userId","==",(t=a.user)==null?void 0:t.uid));f(e,r=>{const u=[];r.forEach(i=>{u.push({id:i.id,...i.data()})}),s(u)})}async function g(s){const a=R(o,"quizesResults",s);await h(a,{isRead:!0})}const p=b("mail",{state:()=>({mail:null})});export{g as a,S as s,p as u};