import{J as A,D as S,K as I,L as o,M as v,N as y,O as T,d as w,g as t,I as x,P as O,Q as B,R as K,T as N,U as D,V as _,W as E}from"./index-2e3f701e.js";const[H,a]=A("action-sheet"),L=S({},I,{title:String,round:o,actions:v(),closeIcon:y("cross"),closeable:o,cancelText:String,description:String,closeOnPopstate:o,closeOnClickAction:Boolean,safeAreaInsetBottom:o}),U=[...T,"round","closeOnPopstate","safeAreaInsetBottom"];var V=w({name:H,props:L,emits:["select","cancel","update:show"],setup(n,{slots:c,emit:l}){const r=e=>l("update:show",e),i=()=>{r(!1),l("cancel")},m=()=>{if(n.title)return t("div",{class:a("header")},[n.title,n.closeable&&t(K,{name:n.closeIcon,class:[a("close"),N],onClick:i},null)])},f=()=>{if(c.cancel||n.cancelText)return[t("div",{class:a("gap")},null),t("button",{type:"button",class:a("cancel"),onClick:i},[c.cancel?c.cancel():n.cancelText])]},b=(e,s)=>e.loading?t(D,{class:a("loading-icon")},null):c.action?c.action({action:e,index:s}):[t("span",{class:a("name")},[e.name]),e.subname&&t("div",{class:a("subname")},[e.subname])],h=(e,s)=>{const{color:P,loading:d,callback:u,disabled:p,className:g}=e,k=()=>{p||d||(u&&u(e),n.closeOnClickAction&&r(!1),_(()=>l("select",e,s)))};return t("button",{type:"button",style:{color:P},class:[a("item",{loading:d,disabled:p}),g],onClick:k},[b(e,s)])},C=()=>{if(n.description||c.description){const e=c.description?c.description():n.description;return t("div",{class:a("description")},[e])}};return()=>t(B,x({class:a(),position:"bottom","onUpdate:show":r},O(n,U)),{default:()=>{var e;return[m(),C(),t("div",{class:a("content")},[n.actions.map(h),(e=c.default)==null?void 0:e.call(c)]),f()]}})}});const J=E(V);export{J as A};
