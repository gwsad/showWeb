import{d as L,r as i,q as b,c as t,e as o,f as s,l as _,F as v,h as m,n as h,t as r,m as f,z as d,_ as g}from"./index-411323ad.js";import{o as k}from"./order-bg-2806a00b.js";import{t as x}from"./table-chose-07a74e81.js";import{c as C}from"./home-f9d3d4ef.js";const B={class:"orderList"},I=["src"],z={class:"orderList__tab"},F=["onClick"],N=["src"],O={key:0,class:"orderList__body"},T={class:"orderList__body__item__info"},V={class:"orderList__body__item__desc"},$=L({__name:"orderIndex",setup(q){const p=i([{name:"正在处理",value:1},{name:"交易成功",value:2},{name:"交易失败",value:3}]),c=i([]),n=i(1),y=a=>{n.value=a,u()};b(()=>{u()});const u=async()=>{try{const a=await C(n.value);c.value=a.data}catch{return!1}};return(a,w)=>(t(),o("div",B,[s("img",{class:"orderList__bg",src:_(k),alt:""},null,8,I),s("div",z,[(t(!0),o(v,null,m(p.value,(e,l)=>(t(),o("div",{class:"orderList__tab__item",key:l,onClick:A=>y(e.value)},[s("div",{class:h({"tab-chose":n.value===e.value})},r(_(d)(e.name)),3),n.value===e.value?(t(),o("img",{key:0,src:_(x),alt:""},null,8,N)):f("",!0)],8,F))),128))]),c.value.length!==0?(t(),o("div",O,[(t(!0),o(v,null,m(c.value,(e,l)=>(t(),o("div",{class:"orderList__body__item",key:l},[s("div",T,[s("div",null,r(_(d)(e.cardName)),1),s("div",null,r(_(d)(e.updatedAt)),1)]),s("div",V,[s("div",null,r(_(d)("HK$"+e.amount*(e.discount/100))),1),s("div",{class:h(["orderList__body__item__desc__common",{orderList__body__item__desc__finished:e.status.code===2,orderList__body__item__desc__error:e.status.code===3}])},r(_(d)(e.status.code===1?"处理中":e.status.code===2?"交易成功":"交易失败")),3)])]))),128))])):f("",!0)]))}});const M=g($,[["__scopeId","data-v-77995d1d"]]);export{M as default};
