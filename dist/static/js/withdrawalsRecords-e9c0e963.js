import{d as g,r as i,o as x,as as I,e as a,f as t,h as e,F as p,j as f,v as k,t as _,s as o,x as z,z as n,_ as B}from"./index-a80349be.js";import{t as N}from"./table-chose-07a74e81.js";const R={class:"orderList"},$={class:"orderList__tab"},F=["onClick"],T=["src"],V={class:"orderList__body"},j={class:"orderList__body__item__info"},A={class:"orderList__body__item__desc"},D=g({__name:"withdrawalsRecords",setup(E){const w=i([{name:"正在审批",value:1},{name:"审批失败",value:2},{name:"打款成功",value:3}]),u=i([]),d=i(1),C=c=>{d.value=c,v()};x(async()=>{v()});const v=async()=>{const c=await I({status:d.value});u.value=c.data};return(c,G)=>(a(),t("div",R,[e("div",$,[(a(!0),t(p,null,f(w.value,(s,r)=>(a(),t("div",{class:"orderList__tab__item",key:r,onClick:l=>C(s.value)},[e("div",{class:k({"tab-chose":d.value===s.value})},_(o(n)(s.name)),3),d.value===s.value?(a(),t("img",{key:0,src:o(N),alt:""},null,8,T)):z("",!0)],8,F))),128))]),e("div",V,[(a(!0),t(p,null,f(u.value,(s,r)=>{var l,b,m,h,y,L;return a(),t("div",{class:"orderList__body__item",key:r},[e("div",j,[e("div",null,_(o(n)(((b=(l=s.accountInfo)==null?void 0:l.usdt)==null?void 0:b.name)||((h=(m=s.accountInfo)==null?void 0:m.bank)==null?void 0:h.card)||((L=(y=s.accountInfo)==null?void 0:y.alipay)==null?void 0:L.accountName)))+" - "+_(`${s.amount}HK$`),1),e("div",null,_(o(n)(s.createdAt||"")),1)]),e("div",A,[e("div",null,_(s.price),1),e("div",{class:k(["orderList__body__item__desc__common",{orderList__body__item__desc__1:s.status.code===1,orderList__body__item__desc__2:s.status.code===2,orderList__body__item__desc__3:s.status.code===3}])},_(o(n)(s.status.code===1?"审批中":s.status.code===2?"审批失败":"已完成")),3)])])}),128))])]))}});const M=B(D,[["__scopeId","data-v-200be1ed"]]);export{M as default};
