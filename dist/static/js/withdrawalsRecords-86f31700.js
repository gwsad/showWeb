import{d as g,r as i,o as x,c as t,e as a,f as e,F as L,h as f,n as k,t as o,l as _,m as I,z as r,_ as z}from"./index-95cec1c1.js";import{t as B}from"./table-chose-07a74e81.js";import{m as N}from"./home-95c8b9fc.js";const R={class:"orderList"},$={class:"orderList__tab"},F=["onClick"],T=["src"],V={class:"orderList__body"},A={class:"orderList__body__item__info"},D={class:"orderList__body__item__desc"},E=g({__name:"withdrawalsRecords",setup(G){const w=i([{name:"正在审批",value:1},{name:"审批失败",value:2},{name:"打款成功",value:3}]),u=i([]),d=i(1),C=c=>{d.value=c,v()};x(async()=>{v()});const v=async()=>{const c=await N({status:d.value});u.value=c.data};return(c,H)=>(t(),a("div",R,[e("div",$,[(t(!0),a(L,null,f(w.value,(s,n)=>(t(),a("div",{class:"orderList__tab__item",key:n,onClick:l=>C(s.value)},[e("div",{class:k({"tab-chose":d.value===s.value})},o(_(r)(s.name)),3),d.value===s.value?(t(),a("img",{key:0,src:_(B),alt:""},null,8,T)):I("",!0)],8,F))),128))]),e("div",V,[(t(!0),a(L,null,f(u.value,(s,n)=>{var l,m,b,h,y,p;return t(),a("div",{class:"orderList__body__item",key:n},[e("div",A,[e("div",null,o(_(r)(((m=(l=s.accountInfo)==null?void 0:l.usdt)==null?void 0:m.name)||((h=(b=s.accountInfo)==null?void 0:b.bank)==null?void 0:h.card)||((p=(y=s.accountInfo)==null?void 0:y.alipay)==null?void 0:p.accountName)))+" - "+o(`${s.amount}HK$`),1),e("div",null,o(_(r)(s.createdAt||"")),1)]),e("div",D,[e("div",null,o(s.price),1),e("div",{class:k(["orderList__body__item__desc__common",{orderList__body__item__desc__1:s.status.code===1,orderList__body__item__desc__2:s.status.code===2,orderList__body__item__desc__3:s.status.code===3}])},o(_(r)(s.status.code===1?"审批中":s.status.code===2?"审批失败":"已完成")),3)])])}),128))])]))}});const W=z(E,[["__scopeId","data-v-200be1ed"]]);export{W as default};
