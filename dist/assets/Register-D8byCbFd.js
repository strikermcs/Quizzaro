import"./_plugin-vue_export-helper-CtXoblKC.js";/* empty css                     *//* empty css                  *//* empty css                 *//* empty css                        */import{A as b}from"./authTemplate-DVQQiwRZ.js";import{c as V,P as _,f as F,u as $,r as L,Q as w,v as E,g as U,w as o,z as k,o as q,R as m,G as p,h as a,i as v,y as S,S as B,U as I,V as A,W as D}from"./index-Cmehh-cC.js";/* empty css                */import"./ToggleThemeButton-B7wOgFeN.js";const N="/assets/dog1-CDMX4gt7.jpeg",K=V({__name:"Register",setup(T){const{t:l}=_(),f=F(),u=$(),g=L(),s=w({username:"",email:"",password:"",rePassword:""}),c=(e,r,d)=>{r===""?d(new Error("Please input the password again")):r!==s.password?d(new Error(l("rePassword-sameAs"))):d()},h=w({username:[{type:"string",required:!0,message:l("username-required")}],email:[{type:"email",required:!0,message:l("email-email"),trigger:"change"}],password:[{type:"string",required:!0,message:l("password-required"),trigger:"change"},{min:6,message:l("password-minLength"),trigger:"change"}],rePassword:[{type:"string",required:!0,message:l("password-required"),trigger:"change"},{validator:c,trigger:"change"}]}),R=async e=>{e&&await e.validate((r,d)=>{r&&u.register(s.username,s.email,s.password)})};return E(()=>u.user,e=>{e&&f.push("/")}),(e,r)=>{const d=S,n=B,i=I,P=A,y=D,C=k("RouterLink");return q(),U(b,null,{"card-header":o(()=>[m(p(e.$t("RegisterCardHeader")),1)]),"content-image":o(()=>[a(d,{style:{height:"400px"},src:v(N)},null,8,["src"])]),"content-form":o(()=>[a(y,{ref_key:"registerFormRef",ref:g,"label-position":"top","label-width":"100px",model:s,rules:h,style:{"min-width":"300px"}},{default:o(()=>[a(i,{label:e.$t("RegisterCardUsernameFieldLabel"),prop:"username"},{default:o(()=>[a(n,{type:"text",placeholder:e.$t("RegisterCardUsernameFieldPlaceholder"),modelValue:s.username,"onUpdate:modelValue":r[0]||(r[0]=t=>s.username=t)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),a(i,{label:e.$t("RegisterCardEmailFieldLabel"),prop:"email"},{default:o(()=>[a(n,{type:"email",placeholder:e.$t("RegisterCardEmailFieldPlaceholder"),modelValue:s.email,"onUpdate:modelValue":r[1]||(r[1]=t=>s.email=t)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),a(i,{label:e.$t("RegisterCardPasswordFieldLabel"),prop:"password"},{default:o(()=>[a(n,{type:"password",placeholder:e.$t("RegisterCardPasswordFieldPlaceholder"),modelValue:s.password,"onUpdate:modelValue":r[2]||(r[2]=t=>s.password=t),"show-password":""},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),a(i,{label:e.$t("RegisterCardRepeadPasswordFieldLabel"),prop:"rePassword"},{default:o(()=>[a(n,{type:"password",placeholder:e.$t("RegisterCardRepeadPasswordFieldPlaceholder"),modelValue:s.rePassword,"onUpdate:modelValue":r[3]||(r[3]=t=>s.rePassword=t),"show-password":""},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),a(i,null,{default:o(()=>[a(P,{type:"primary",onClick:r[4]||(r[4]=t=>R(g.value))},{default:o(()=>[m(p(e.$t("RegisterCardSubmitButton")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),"content-link":o(()=>[a(C,{to:"/user/login"},{default:o(()=>[m(p(e.$t("RegisterCardLoginLink")),1)]),_:1})]),_:1})}}});export{K as default};
