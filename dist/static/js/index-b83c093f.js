import{Y as g,T as S,Z as v,$ as o,a0 as I,a1 as y,a2 as T,d as w,i as a,X as x,a3 as B,a4 as O,a5 as K,a6 as N,a7 as _,a8 as D,a9 as E}from"./index-9bf8ecff.js";const[H,t]=g("action-sheet"),F=S({},v,{title:String,round:o,actions:I(),closeIcon:y("cross"),closeable:o,cancelText:String,description:String,closeOnPopstate:o,closeOnClickAction:Boolean,safeAreaInsetBottom:o}),L=[...T,"round","closeOnPopstate","safeAreaInsetBottom"];var U=w({name:H,props:F,emits:["select","cancel","update:show"],setup(n,{slots:c,emit:i}){const l=e=>i("update:show",e),r=()=>{l(!1),i("cancel")},m=()=>{if(n.title)return a("div",{class:t("header")},[n.title,n.closeable&&a(K,{name:n.closeIcon,class:[t("close"),N],onClick:r},null)])},f=()=>{if(c.cancel||n.cancelText)return[a("div",{class:t("gap")},null),a("button",{type:"button",class:t("cancel"),onClick:r},[c.cancel?c.cancel():n.cancelText])]},b=(e,s)=>e.loading?a(_,{class:t("loading-icon")},null):c.action?c.action({action:e,index:s}):[a("span",{class:t("name")},[e.name]),e.subname&&a("div",{class:t("subname")},[e.subname])],h=(e,s)=>{const{color:k,loading:d,callback:u,disabled:p,className:A}=e,P=()=>{p||d||(u&&u(e),n.closeOnClickAction&&l(!1),D(()=>i("select",e,s)))};return a("button",{type:"button",style:{color:k},class:[t("item",{loading:d,disabled:p}),A],onClick:P},[b(e,s)])},C=()=>{if(n.description||c.description){const e=c.description?c.description():n.description;return a("div",{class:t("description")},[e])}};return()=>a(O,x({class:t(),position:"bottom","onUpdate:show":l},B(n,L)),{default:()=>{var e;return[m(),C(),a("div",{class:t("content")},[n.actions.map(h),(e=c.default)==null?void 0:e.call(c)]),f()]}})}});const X=E(U);export{X as A};
