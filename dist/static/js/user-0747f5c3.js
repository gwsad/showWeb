import{aV as o,aW as r,P as a,aX as i,aY as u}from"./index-ab8829a0.js";const c=o({id:"pure-user",state:()=>({userInfo:{},cashInfo:{type:null}}),actions:{async loginByUsername(n){return new Promise((t,e)=>{r(n).then(s=>{s.code===200?(a(s.data.token),t(s)):e(s)}).catch(s=>{e(s)})})},async handleGetUserInfo(){return new Promise((n,t)=>{i().then(e=>{this.userInfo=e.data,n(e.data)}).catch(e=>{t(e)})})},setCashInfo(n){this.cashInfo=n}}});function h(){return c(u)}export{h as u};
