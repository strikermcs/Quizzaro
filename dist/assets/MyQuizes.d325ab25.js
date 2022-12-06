import{_ as A}from"./_plugin-vue_export-helper.79fb6c6e.js";/* empty css                */import{q as M}from"./quiz.service.7fcab847.js";import"./QuizResultBoard.219635dc.js";/* empty css                    *//* empty css                  *//* empty css                  *//* empty css                 */import{c as Q,o as m,g as w,w as C,l as n,h as i,a2 as E,G as b,a5 as N,ah as J,u as K,r as k,a7 as P,a1 as Z,t as V,H as j,j as y,z as G,i as _,ai as ee,aj as se,ak as te,al as ne,ab as oe,F as D,am as ae,a3 as F,an as le,ac as O,v as ie,ao as R,B as q,ap as L,aq as re,E as ue,ar as de,as as ce,at as _e,_ as me,D as pe}from"./index.c5b698de.js";import{U as B,g as H,Q as ve}from"./QuizPlay.c1d0ec5f.js";/* empty css                */const fe={class:"dialog-footer"},he=Q({__name:"QuestionDialog",props:{visible:{type:Boolean,required:!0},title:{type:String,default:"Warning"},text:{type:String}},emits:["sendAnswer"],setup(z,{emit:v}){const l=t=>{v("sendAnswer",t)};return(t,e)=>{const p=N,f=J;return m(),w(f,{"model-value":z.visible,title:t.$t(z.title),width:"30%",center:"","show-close":!1},{footer:C(()=>[n("span",fe,[i(p,{onClick:e[0]||(e[0]=d=>l(!1))},{default:C(()=>[E(b(t.$t("Cansel")),1)]),_:1}),i(p,{type:"primary",onClick:e[1]||(e[1]=d=>l(!0))},{default:C(()=>[E(b(t.$t("Confirm")),1)]),_:1})])]),default:C(()=>[n("span",null,b(z.text),1)]),_:1},8,["model-value","title"])}}}),Ce={class:"control-buttons"},ze=Q({__name:"MyQuizzesList",emits:["sendCommand"],setup(z,{emit:v}){const l=K(),t=k(""),e=k(!0),p=k(!1),f=P();let d;const a=Z({Quizzes:[]}),g=V(()=>a.Quizzes.filter(r=>!t.value||r.name.toLowerCase().includes(t.value.toLowerCase())));j(async()=>{var u;const r=await M.getQuizzesByUser((u=l.user)==null?void 0:u.uid);a.Quizzes.push(...r),e.value=!1});const $=async(r,u)=>{const I=`${document.URL}/urlpath/${u.id}`;navigator.clipboard.writeText(I),f.SetNofication("Success","QuizUrlIsCopyToClipboard","success")},s=async(r,u)=>{v("sendCommand",{command:"EditQuiz",data:u})},o=(r,u)=>{d=u.id,p.value=!0},S=async(r,u)=>{v("sendCommand",{command:"TestQuiz",data:u})},x=async(r,u)=>{v("sendCommand",{command:"SendQuiz",data:u})},c=async r=>{p.value=!1,r&&(e.value=!0,await M.deleteQuizById(d),a.Quizzes=a.Quizzes.filter(u=>u.id!==d),f.SetNofication("Success","ItemDeleteSuccessfully","success"),e.value=!1)};return(r,u)=>{const I=ae,W=F,U=N,X=le,Y=O;return m(),y(D,null,[G((m(),w(X,{data:_(g),style:{width:"100%"}},{default:C(()=>[i(I,{label:r.$t("MyQuizzesTableItemName"),prop:"name"},null,8,["label"]),i(I,{align:"right","min-width":140},{header:C(()=>[i(W,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=h=>t.value=h),size:"small",placeholder:r.$t("MyQuizzesTableSearchPlaceholder")},null,8,["modelValue","placeholder"])]),default:C(h=>[n("div",Ce,[i(U,{circle:"",onClick:T=>$(h.$index,h.row),icon:_(ee)},null,8,["onClick","icon"]),i(U,{type:"primary",circle:"",onClick:T=>s(h.$index,h.row),icon:_(se)},null,8,["onClick","icon"]),i(U,{type:"success",circle:"",onClick:T=>S(h.$index,h.row),icon:_(te)},null,8,["onClick","icon"]),i(U,{type:"warning",circle:"",onClick:T=>x(h.$index,h.row),icon:_(ne)},null,8,["onClick","icon"]),i(U,{type:"danger",circle:"",icon:_(oe),onClick:T=>o(h.$index,h.row)},null,8,["icon","onClick"])])]),_:1})]),_:1},8,["data"])),[[Y,e.value]]),i(he,{visible:p.value,text:r.$t("QuestionDoYouReallyWantToDelete"),onSendAnswer:c},null,8,["visible","text"])],64)}}});const ye=A(ze,[["__scopeId","data-v-f05e35a5"]]),ge={class:"items-add-content"},$e={class:"items-list-add-group"},be={class:"items-add-search"},ke={class:"items-add-list"},we={class:"items-list"},Qe=["onDragstart"],Se=["onClick"],xe={class:"checked-items"},Ue={class:"item-check"},De=["onClick"],Ie=Q({__name:"FindAndChoose",props:{users:null},emits:["usersChoosen"],setup(z,{emit:v}){const l=z,t=k(""),e=k([]),p=V(()=>t.value.trim()!=""?e.value.filter(s=>s.username.toLowerCase().includes(t.value.toLowerCase())&&s.list==1):e.value.filter(s=>s.list===1)),f=V(()=>{let s=e.value.filter(o=>o.list===2);return v("usersChoosen",B(s)),s}),d=(s,o)=>{s.dataTransfer.dropEffect="move",s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("itemID",o.userId)},a=(s,o)=>{const S=s.dataTransfer.getData("itemID"),x=e.value.find(c=>c.userId==S);x.list=o},g=s=>{s.list=1},$=s=>{s.list==1?s.list=2:s.list=1};return ie(()=>l.users,s=>{e.value=s}),(s,o)=>{const S=F,x=ue;return m(),y("div",ge,[n("div",$e,[n("div",be,[i(S,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=c=>t.value=c),class:"w-50 m-2",placeholder:"Please Input","prefix-icon":_(R)},null,8,["modelValue","prefix-icon"])]),n("div",ke,[n("ul",we,[(m(!0),y(D,null,q(_(p),c=>(m(),y("li",{key:c.username,draggable:"true",onDragstart:r=>d(r,c)},[n("div",{onClick:L(r=>$(c),["prevent"]),class:"item"},[n("span",null,b(c.username),1),i(x,null,{default:C(()=>[i(_(re))]),_:1})],8,Se)],40,Qe))),128))])])]),n("div",xe,[n("ul",{class:"checked-items-list",onDrop:o[1]||(o[1]=c=>a(c,2)),onDragover:o[2]||(o[2]=L(()=>{},["prevent"])),onDragenter:o[3]||(o[3]=L(()=>{},["prevent"]))},[(m(!0),y(D,null,q(_(f),c=>(m(),y("li",{class:"checked-item",key:c.username},[n("div",Ue,[E(b(c.username)+" ",1),n("span",{onClick:r=>g(c)},"X",8,De)])]))),128))],32)])])}}});const Te=A(Ie,[["__scopeId","data-v-3ea90b75"]]),Ee={class:"items-add-content"},Ve={class:"items-list-add-group"},Ae={class:"items-add-search"},Le={class:"items-add-list"},Me=Q({__name:"FindAndChooseMobile",props:{users:null},emits:["usersChoosen"],setup(z,{emit:v}){const l=z,t=k(""),e=k([]),p=V(()=>t.value.trim()!=""?l.users.filter(d=>d.username.toLowerCase().includes(t.value.toLowerCase())):l.users),f=()=>{const d=[];if(e.value.length>0){e.value.forEach(a=>{let g;g=l.users.find($=>$.username===a),d.push(g)}),v("usersChoosen",B(d));return}v("usersChoosen",B(d))};return(d,a)=>{const g=F,$=de,s=ce;return m(),y("div",Ee,[n("div",Ve,[n("div",Ae,[i(g,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o),class:"w-50 m-2",placeholder:"Please Input","prefix-icon":_(R)},null,8,["modelValue","prefix-icon"])]),n("div",Le,[i(s,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value=o),class:"user-list",onChange:f},{default:C(()=>[(m(!0),y(D,null,q(_(p),o=>(m(),w($,{key:o.id,label:o.username,size:"large",border:""},null,8,["label"]))),128))]),_:1},8,["modelValue"])])])])}}});const qe=A(Me,[["__scopeId","data-v-2d2260b4"]]),Be={class:"send-quiz-header"},Ne={class:"sendQuiz"},Fe={class:"column"},He={class:"users-add-header"},Pe={class:"find-users"},je={class:"find-users-mobile"},Ge={class:"column send-button"},Oe=Q({__name:"SendQuiz",props:["quiz"],setup(z){const v=z,l=k(!0),t=P();let e=[],p;const f=a=>{e=a},d=async()=>{if(e.length>0){l.value=!0,console.log(e.length);for await(const a of e)await M.sendQuizToUser(a,v.quiz);l.value=!1,t.SetNofication("Success","SendQuizToUsersSuccess","success");return}t.SetNofication("Error","SendQuizErrorUsers","error")};return j(async()=>{p=await _e.getAllUsers(),l.value=!1}),(a,g)=>{const $=N,s=O;return m(),y(D,null,[n("div",Be,[n("h3",null,b(a.$t("SendQuizHeader")),1)]),G((m(),y("div",Ne,[n("div",Fe,[n("div",He,b(a.$t("SendQuizSelectUsers")),1),n("div",Pe,[i(Te,{users:_(H)(_(p)),onUsersChoosen:f},null,8,["users"])]),n("div",je,[i(qe,{users:_(H)(_(p)),onUsersChoosen:f},null,8,["users"])])]),n("div",Ge,[i($,{type:"primary",onClick:d},{default:C(()=>[E(b(a.$t("SendQuizToUsersButton")),1)]),_:1})])])),[[s,l.value]])],64)}}});const Re=A(Oe,[["__scopeId","data-v-11a24b35"]]),as=Q({__name:"MyQuizes",setup(z){const v={TestQuiz:ve,SendQuiz:Re},l=k(null),t=e=>{l.value=e};return(e,p)=>{const f=me;return m(),w(f,{shadow:"hover",class:"card-listquiz"},{header:C(()=>[n("h3",null,b(e.$t("MyQuizzesList")),1)]),default:C(()=>[l.value?(m(),w(pe(v[l.value.command]),{key:1,quiz:l.value.data},null,8,["quiz"])):(m(),w(ye,{key:0,onSendCommand:t}))]),_:1})}}});export{as as default};