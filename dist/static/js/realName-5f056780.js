import{d as k,s as N,u as b,r as m,z as e,o as y,c as u,e as c,f as s,t as i,l as r,F as V,h as F,g as w,v as t}from"./index-2e3f701e.js";import{r as x}from"./home-cd0a2bf0.js";import{u as v}from"./user-9fd428c2.js";import{F as I}from"./index-e778bf14.js";import"./index-10732b5f.js";import"./use-route-c555ca3a.js";const z={class:"realName common-page"},B={class:"realName__content bg-fff"},T={class:"realName__content__title"},M=k({__name:"realName",setup(U){const d=N(()=>v().userInfo.identityInformation||{}),_=b(),a=m([{title:e("姓名"),value:d.value.name,placeholder:"请输入真实姓名"},{title:e("身份证"),value:d.value.id,placeholder:"请输入身份证号码"}]),o=m(""),f=()=>{switch(v().userInfo.region){case"中国大陆":o.value="zh";break;case"中国台湾":o.value="tw";break;case"中国香港":o.value="hk";break;case"中国澳门":o.value="am";break}};y(()=>{f()});const p=async()=>{if(!a.value[0].value)return t({message:e("请输入真实姓名"),duration:2e3});if(/^[0-9]*$/.test(a.value[0].value))return t({message:e("姓名不能包含数字"),duration:2e3});if(!a.value[1].value)return t({message:e("请输入身份证号码"),duration:2e3});const n=await x({name:a.value[0].value,id:a.value[1].value,region:o.value});n.code===200?(t({message:e("提交成功"),duration:2e3}),_.go(-1)):t({message:e(n.message),duration:2e3})};return(n,C)=>(u(),c("div",z,[s("div",B,[s("div",T,i(r(e)("基本信息")),1),(u(!0),c(V,null,F(a.value,(l,g)=>(u(),c("div",{key:g,class:"realName__content__body"},[s("div",null,i(r(e)(l.title)),1),w(r(I),{modelValue:l.value,"onUpdate:modelValue":h=>l.value=h,placeholder:l.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])]))),128))]),s("div",{class:"common-btn",onClick:p},[s("div",null,i(r(e)("确定提交")),1)])]))}});export{M as default};
