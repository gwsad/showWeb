import{d as L,r as i,q as b,c as t,e as a,f as s,l as o,F as v,h as m,n as f,t as _,m as h,z as d,_ as g}from"./index-95cec1c1.js";import{o as k}from"./order-bg-2806a00b.js";import{t as x}from"./table-chose-07a74e81.js";import{c as C}from"./home-95c8b9fc.js";const B={class:"orderList"},I=["src"],z={class:"orderList__tab"},F=["onClick"],N=["src"],O={key:0,class:"orderList__body"},T={class:"orderList__body__item__info"},V={class:"orderList__body__item__desc"},$=L({__name:"orderIndex",setup(q){const p=i([{name:"全部订单",value:0},{name:"正在处理",value:1},{name:"处理完成",value:2}]),c=i([]),n=i(0),y=r=>{n.value=r,u()};b(()=>{u()});const u=async()=>{try{const r=await C(n.value);c.value=r.data}catch{return!1}};return(r,w)=>(t(),a("div",B,[s("img",{class:"orderList__bg",src:o(k),alt:""},null,8,I),s("div",z,[(t(!0),a(v,null,m(p.value,(e,l)=>(t(),a("div",{class:"orderList__tab__item",key:l,onClick:A=>y(e.value)},[s("div",{class:f({"tab-chose":n.value===e.value})},_(o(d)(e.name)),3),n.value===e.value?(t(),a("img",{key:0,src:o(x),alt:""},null,8,N)):h("",!0)],8,F))),128))]),c.value.length!==0?(t(),a("div",O,[(t(!0),a(v,null,m(c.value,(e,l)=>(t(),a("div",{class:"orderList__body__item",key:l},[s("div",T,[s("div",null,_(o(d)(e.cardName)),1),s("div",null,_(o(d)(e.updatedAt)),1)]),s("div",V,[s("div",null,_(o(d)("HK$"+e.facevalue*(e.discount/100)*e.cardInfos.length)),1),s("div",{class:f(["orderList__body__item__desc__common",{orderList__body__item__desc__finished:e.status!==1}])},_(o(d)(e.status===1?"处理中":"已完成")),3)])]))),128))])):h("",!0)]))}});const M=g($,[["__scopeId","data-v-977d2f46"]]);export{M as default};
