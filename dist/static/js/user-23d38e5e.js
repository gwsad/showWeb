import{X as o,C as r,Y as a}from"./index-95cec1c1.js";import{q as i,t as f}from"./home-95c8b9fc.js";const u=o({id:"pure-user",state:()=>({userInfo:{},cashInfo:{type:null}}),actions:{async loginByUsername(t){return new Promise((n,e)=>{i(t).then(s=>{s.code===200?(r(s.data.token),n(s)):e(s)}).catch(s=>{e(s)})})},async handleGetUserInfo(){return new Promise((t,n)=>{f().then(e=>{this.userInfo=e.data,t(e.data)}).catch(e=>{n(e)})})},setCashInfo(t){this.cashInfo=t}}});function m(){return u(a)}export{m as u};
