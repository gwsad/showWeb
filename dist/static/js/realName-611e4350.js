import{d as k,B as N,u as b,r as m,z as e,o as y,e as u,f as c,h as o,t as i,s as n,F as V,j as F,i as I,C as v,E as t,I as w}from"./index-5197e93b.js";import{F as x}from"./index-195a8726.js";import"./index-b221dfb8.js";import"./use-route-9b01f12a.js";const B={class:"realName common-page"},z={class:"realName__content bg-fff"},C={class:"realName__content__title"},j=k({__name:"realName",setup(T){const d=N(()=>v().userInfo.identityInformation||{}),_=b(),a=m([{title:e("姓名"),value:d.value.name,placeholder:"请输入真实姓名"},{title:e("身份证"),value:d.value.id,placeholder:"请输入身份证号码"}]),s=m(""),f=()=>{switch(v().userInfo.region){case"中国大陆":s.value="zh";break;case"中国台湾":s.value="tw";break;case"中国香港":s.value="hk";break;case"中国澳门":s.value="am";break}};y(()=>{f()});const p=async()=>{if(!a.value[0].value)return t({message:e("请输入真实姓名"),duration:2e3});if(/^[0-9]*$/.test(a.value[0].value))return t({message:e("姓名不能包含数字"),duration:2e3});if(!a.value[1].value)return t({message:e("请输入身份证号码"),duration:2e3});const r=await w({name:a.value[0].value,id:a.value[1].value,region:s.value});r.code===200?(t({message:e("提交成功"),duration:2e3}),_.go(-1)):t({message:e(r.message),duration:2e3})};return(r,U)=>(u(),c("div",B,[o("div",z,[o("div",C,i(n(e)("基本信息")),1),(u(!0),c(V,null,F(a.value,(l,h)=>(u(),c("div",{key:h,class:"realName__content__body"},[o("div",null,i(n(e)(l.title)),1),I(n(x),{modelValue:l.value,"onUpdate:modelValue":g=>l.value=g,placeholder:l.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])]))),128))]),o("div",{class:"common-btn",onClick:p},[o("div",null,i(n(e)("确定提交")),1)])]))}});export{j as default};