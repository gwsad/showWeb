import{d as N,r as d,u as C,v as a,A as b,e as V,f as A,h as s,t as r,M as v,P as h,i as D,N as T,s as l,z as e,D as m,Q as I,n as S,R as M,p as O,m as R,_ as z}from"./index-1c2e86ec.js";import{l as G}from"./project-logo-72cb1144.js";import{m as H}from"./project-more-48b6ca7f.js";import{s as J}from"./function-call-7e2796a2.js";import{A as j}from"./index-69cfe9ab.js";import"./Dialog-4af56cf7.js";import"./use-route-3496a739.js";const q=u=>(O("data-v-97a1d812"),u=u(),R(),u),E={class:"register"},L={class:"register__head"},P=["src"],Q=q(()=>s("span",null,"选择地区：",-1)),$=["src"],F={class:"register__info"},K={class:"register__info__item"},W=["placeholder"],X={class:"register__info__item"},Y=["placeholder"],Z={class:"register__info__item"},ee=["placeholder"],oe={class:"common-btn"},se=N({__name:"registerIndex",setup(u){const c=d(!1),_=d(!0),{currentRoute:k}=C(),{query:g}=a(k),o=d({phone:"",invitationCode:"",password:""}),f=C(),p=d("中国大陆"),y=d([{name:"中国大陆"},{name:"中国台湾"},{name:"中国香港"},{name:"中国澳门"}]),x=()=>{c.value=!0,_.value=!1},w=()=>{c.value=!1,_.value=!0},U=n=>{p.value=n.name,w()};b(()=>{if(g.shareCode&&(o.value.invitationCode=g.shareCode),window.localStorage.getItem("accountInfo")!==null){const n=JSON.parse(window.localStorage.getItem("accountInfo")||"");o.value.phone=n.phone,o.value.password=n.password}});const B=async()=>{if(!o.value.phone)return l({message:e("请输入手机号码"),duration:2e3});if(!o.value.password)return l({message:e("请输入密码"),duration:2e3});switch(p.value){case e("中国大陆"):if(o.value.phone.length!==11)return l({message:e("请输入正确的手机号码"),duration:2e3});break;case e("中国台湾"):if(o.value.phone.length!==10)return l({message:e("请输入正确的手机号码"),duration:2e3});break;case(e("香港特别行政区")||e("澳门特别行政区")):if(o.value.phone.length!==8)return l({message:e("请输入正确的手机号码"),duration:2e3});break}try{let n=await m().loginByUsername({phone:o.value.phone,password:o.value.password});I(n.data.token),await S().setCouponCat(),await m().handleGetUserInfo(),window.localStorage.setItem("accountInfo",JSON.stringify(o.value)),f.push({path:"/enter/home"})}catch(n){n.code===20002&&l({message:e("密码输入错误"),duration:2e3}),n.code===20006&&J({message:"未检测到账户，平台将会使用该号码注册账号，是否确认？"}).then(async()=>{o.value.invitationCode=String(o.value.invitationCode);let t=await M(Object.assign(o.value,{region:p.value}));t.code===200?(I(t.data.token),await S().setCouponCat(),await m().handleGetUserInfo(),f.push({path:"/enter/home"})):l({message:e(t.message),duration:2e3})})}};return(n,t)=>(V(),A("div",E,[s("div",L,[s("img",{src:a(G),alt:""},null,8,P),s("span",null,r(a(e)("欢迎来到港回收")),1)]),s("div",{class:"register__address",onClick:t[0]||(t[0]=i=>x())},[s("div",null,[Q,s("span",null,r(a(e)(p.value)),1)]),s("img",{src:a(H),alt:""},null,8,$)]),s("div",F,[s("div",K,[s("div",null,r(a(e)("手机号码：")),1),v(s("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>o.value.phone=i),type:"phone",maxlength:"11",minlength:"5",placeholder:a(e)("请输入手机号码")},null,8,W),[[h,o.value.phone]])]),s("div",X,[s("div",null,r(a(e)("邀请码：")),1),v(s("input",{"onUpdate:modelValue":t[2]||(t[2]=i=>o.value.invitationCode=i),type:"text",placeholder:a(e)("请输入邀请码")},null,8,Y),[[h,o.value.invitationCode]])]),s("div",Z,[s("div",null,r(a(e)("密码：")),1),v(s("input",{"onUpdate:modelValue":t[3]||(t[3]=i=>o.value.password=i),type:"text",placeholder:a(e)("请输入密码")},null,8,ee),[[h,o.value.password]])])]),D(a(j),{show:c.value,"onUpdate:show":t[4]||(t[4]=i=>c.value=i),actions:y.value,onSelect:U,title:a(e)("选择地区"),onClose:w},null,8,["show","actions","title"]),v(s("div",oe,[s("div",{onClick:B},r(a(e)("确定")),1)],512),[[T,_.value]])]))}});const ue=z(se,[["__scopeId","data-v-97a1d812"]]);export{ue as default};
