import{d as C,u as g,o as b,n as y,r as u,q as k,e as l,f as r,h as s,v as t,F as x,k as I,x as B,t as _,y as z,i as L,z as d,_ as N}from"./index-7338b424.js";import{o as T}from"./order-bg-2806a00b.js";import{t as V}from"./table-chose-07a74e81.js";import{h as q}from"./home-hot-752321a9.js";import{c as D}from"./cardList-3475e087.js";const F={class:"coupons"},S=["src"],$={class:"coupons__tab"},w=["onClick"],E=["src"],H={class:"coupons__title"},M=["src"],O={class:"coupons__content"},R=C({__name:"couponsIndex",setup(j){const v=g();b(async()=>{o.value=y().couponCat,p(o.value[0]._id)});const o=u([]),i=u([]),e=u(1),m=(a,c)=>{e.value=a,p(c)},h=a=>{v.push({path:"/couponsSell",query:{card:a._id}})},p=async a=>{const c=await k(a);i.value=c.data};return(a,c)=>(l(),r("div",F,[s("img",{class:"coupons__bg",src:t(T),alt:""},null,8,S),s("div",$,[(l(!0),r(x,null,I(o.value,(n,f)=>(l(),r("div",{class:"coupons__tab__item",key:f,onClick:A=>m(n.order,n._id)},[s("div",{class:B({"tab-chose":e.value===n.order})},_(t(d)(n.name)),3),e.value===n.order?(l(),r("img",{key:0,src:t(V),alt:""},null,8,E)):z("",!0)],8,w))),128))]),s("div",H,[s("div",null,[s("img",{src:t(q),alt:""},null,8,M),s("span",null,_(t(d)(o.value[e.value-1]?o.value[e.value-1].name+"":"")),1)]),s("span",null,_(t(d)(`高价回收${o.value[e.value-1]?o.value[e.value-1].name+"":""}卡`)),1)]),s("div",O,[L(D,{list:i.value,onOnChoseCard:h},null,8,["list"])])]))}});const U=N(R,[["__scopeId","data-v-87c37e7f"]]);export{U as default};