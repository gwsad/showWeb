import{d as p,r as m,s as u,o as d,c as s,e as n,f as e,t,l as o,F as f,h as y,z as _}from"./index-95cec1c1.js";import{k as h}from"./home-95c8b9fc.js";import{u as v}from"./user-23d38e5e.js";const k={class:"promotion"},x={class:"promotion__title"},g={class:"promotion__body"},I=p({__name:"promotionDetails",setup(B){const l=m([]);m([{time:"2023-03-01 23:00:00",money:"0.00"},{time:"2023-03-01 23:00:00",money:"0.00"},{time:"2023-03-01 23:00:00",money:"0.00"},{time:"2023-03-01 23:00:00",money:"0.00"},{time:"2023-03-01 23:00:00",money:"0.00"}]);const a=u(()=>v().userInfo||{});return d(()=>{h().then(r=>{l.value=r.data})}),(r,D)=>(s(),n("div",k,[e("div",x,[e("span",null,t(o(_)(`新增收益+${o(a).cash.extend.total+""}`)),1),e("span",null,t(o(_)("进行提现")),1)]),e("div",g,[(s(!0),n(f,null,y(o(a).cash.extend.list,(i,c)=>(s(),n("div",{key:c,class:"promotion__body__item"},[e("span",null,t(i.time),1),e("span",null,"+"+t(i.amount),1)]))),128))])]))}});export{I as default};
