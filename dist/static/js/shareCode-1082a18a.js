import{Y as j,d as B,r as _,aa as T,C as D,ab as y,ac as M,ad as R,U as V,ae as F,o as N,a8 as P,i as d,af as h,$ as S,a1 as x,M as H,ag as O,X as E,a5 as X,a9 as Y,ah as q,e as A,f as G,v as r,h as v,t as f,s as $,z as c,D as J}from"./index-4a539bd9.js";const[K,m]=j("image"),Q={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:h,height:h,radius:h,lazyLoad:Boolean,iconSize:h,showError:S,errorIcon:x("photo-fail"),iconPrefix:String,showLoading:S,loadingIcon:x("photo")};var W=B({name:K,props:Q,emits:["load","error"],setup(o,{emit:u,slots:i}){const l=_(!1),s=_(!0),a=_(),{$Lazyload:n}=T().proxy,t=D(()=>{const e={width:y(o.width),height:y(o.height)};return M(o.radius)&&(e.overflow="hidden",e.borderRadius=y(o.radius)),e});R(()=>o.src,()=>{l.value=!1,s.value=!0});const w=e=>{s.value&&(s.value=!1,u("load",e))},C=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:a.value,enumerable:!0}),w(e)},I=e=>{l.value=!0,s.value=!1,u("error",e)},b=(e,g,z)=>z?z():d(X,{name:e,size:o.iconSize,class:g,classPrefix:o.iconPrefix},null),U=()=>{if(s.value&&o.showLoading)return d("div",{class:m("loading")},[b(o.loadingIcon,m("loading-icon"),i.loading)]);if(l.value&&o.showError)return d("div",{class:m("error")},[b(o.errorIcon,m("error-icon"),i.error)])},p=()=>{if(l.value||!o.src)return;const e={alt:o.alt,class:m("img"),style:{objectFit:o.fit,objectPosition:o.position}};return o.lazyLoad?H(d("img",E({ref:a},e),null),[[O("lazy"),o.src]]):d("img",E({ref:a,src:o.src,onLoad:w,onError:I},e),null)},k=({el:e})=>{const g=()=>{e===a.value&&s.value&&C()};a.value?g():P(g)},L=({el:e})=>{e===a.value&&!l.value&&I()};return n&&V&&(n.$on("loaded",k),n.$on("error",L),F(()=>{n.$off("loaded",k),n.$off("error",L)})),N(()=>{P(()=>{var e;(e=a.value)!=null&&e.complete&&C()})}),()=>{var e;return d("div",{class:m({round:o.round,block:o.block}),style:t.value},[p(),U(),(e=i.default)==null?void 0:e.call(i)])}}});const Z=Y(W),ee="/static/png/share-code-bg-7af99329.png",oe={class:"share__code"},ae={class:"share__code__num"},ne={class:"share__code__body"},re=B({__name:"shareCode",setup(o){const u=D(()=>J().userInfo||{});N(()=>{q().then(a=>{i.value=a.data.count})});const i=_(0),l=a=>{let n=a,t=document.createElement("input");t.value=n,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.remove(),$({message:c("复制成功"),duration:2e3})},s=a=>{let n=`http://www.hongkongshou.com/#/register?shareCode=${a}`,t=document.createElement("input");t.value=n,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.remove(),$({message:c("复制成功"),duration:2e3})};return(a,n)=>(A(),G("div",oe,[d(r(Z),{src:r(ee),alt:"",width:"100%",height:"100%"},null,8,["src"]),v("div",ae,f(r(c)(`-目前已经有${i.value}人获得奖励-`)),1),v("div",ne,[v("p",null,f(r(c)("我的邀请码")),1),v("span",null,f(r(c)(r(u).invitationCode)),1),v("div",{onClick:n[0]||(n[0]=t=>l(r(u).invitationCode))},f(r(c)("保存邀请码")),1),v("div",{onClick:n[1]||(n[1]=t=>s(r(u).invitationCode))},f(r(c)("分享链接给朋友")),1)])]))}});export{re as default};