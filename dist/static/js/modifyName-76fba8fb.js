import{d,u as _,C as f,r as p,e as v,f as g,i as y,v as s,h as o,t as r,s as t,z as a,H as N,D as k,_ as h}from"./index-1c2e86ec.js";import{F as x}from"./index-b02f4837.js";import"./index-1a4e63f2.js";import"./use-route-3496a739.js";const V={class:"modifyName common-page"},B={class:"modifyName__desc"},C=d({__name:"modifyName",setup(I){const m=_(),c=f(()=>k().userInfo||{}),e=p(c.value.nickname),i=async()=>{if(e.value.length<4)return t({message:a("昵称最少4个字符"),duration:2e3});if(!e.value)return t({message:a("请输入昵称"),duration:2e3});(await N({nickname:e.value})).code===200&&(t({message:a("修改成功"),duration:2e3}),m.go(-1))};return(l,n)=>(v(),g("div",V,[y(s(x),{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=u=>e.value=u),maxlength:"20",placeholder:"请输入"},null,8,["modelValue"]),o("div",B,r(s(a)("4-20个字符，可由中英文、数字组成")),1),o("div",{class:"common-btn",onClick:i},[o("div",null,r(s(a)("确定修改")),1)])]))}});const F=h(C,[["__scopeId","data-v-0067a08c"]]);export{F as default};