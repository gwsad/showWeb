import{d as f,u as g,o as b,n as y,r as u,q as k,e as l,f as r,h as s,v as t,F as x,k as I,x as B,t as _,y as z,i as L,z as d,_ as N}from"./index-ef6f809e.js";import{o as T}from"./order-bg-2806a00b.js";import{t as V}from"./table-chose-07a74e81.js";import{h as q}from"./home-hot-752321a9.js";import{c as D}from"./cardList-631ebea4.js";const F={class:"coupons"},S=["src"],$={class:"coupons__tab"},w=["onClick"],E=["src"],H={class:"coupons__title"},M=["src"],O={class:"coupons__content"},R=f({__name:"couponsIndex",setup(j){const v=g();b(async()=>{o.value=y().couponCat,p(o.value[0]._id)});const o=u([]),i=u([]),a=u(1),m=(e,c)=>{a.value=e,p(c)},h=e=>{v.push({path:"/couponsSell",query:{card:e._id}})},p=async e=>{const c=await k(e);i.value=c.data};return(e,c)=>(l(),r("div",F,[s("img",{class:"coupons__bg",src:t(T),alt:""},null,8,S),s("div",$,[(l(!0),r(x,null,I(o.value,(n,C)=>(l(),r("div",{class:"coupons__tab__item",key:C,onClick:A=>m(n.order,n._id)},[s("div",{class:B({"tab-chose":a.value===n.order})},_(t(d)(n.name)),3),a.value===n.order?(l(),r("img",{key:0,src:t(V),alt:""},null,8,E)):z("",!0)],8,w))),128))]),s("div",H,[s("div",null,[s("img",{src:t(q),alt:""},null,8,M),s("span",null,_(t(d)(o.value[a.value-1]?o.value[a.value-1].name+"":"")),1)]),s("span",null,_(t(d)(`高价回收${o.value[a.value-1]?o.value[a.value-1].name+"":""}卡`)),1)]),s("div",O,[L(D,{list:i.value,onOnChoseCard:h},null,8,["list"])])]))}});const U=N(R,[["__scopeId","data-v-954694ad"]]);export{U as default};
