import{C as r,a as p,b as v,c as f,d as C,e as y}from"./index.esm.b280d0eb.js";import{_ as F}from"./index.095600db.js";import{d as g,r as c,ch as I,o as a,bE as d,bX as E,a as t,w as e,bM as x,bN as w,b$ as A,c0 as S,bK as o,c as l,bJ as N,bF as D}from"./vendor.1b62b168.js";const V=g({name:"ExampleDynamic",components:{[r.name]:r,[p.name]:p,[v.name]:v,[f.name]:f,[C.name]:C},directives:{contextmenu:y},data(){return{extra:[]}},methods:{addItem(n="item"){this.extra.push(n)},removeItem(){this.extra.pop()}}}),h=n=>(A("data-v-f86b82d4"),n=n(),S(),n),G=h(()=>D("h1",null,"\u52A8\u6001\u83DC\u5355",-1)),J={class:"wrapper"},K=h(()=>D("code",null,"\u53F3\u952E\u70B9\u51FB\u6B64\u533A\u57DF",-1)),L=[K],M=o("\u6DFB\u52A0\u83DC\u5355"),T=o("\u6DFB\u52A0\u83DC\u5355\u7EC4"),X=o("\u6DFB\u52A0\u5B50\u83DC\u5355"),j=o("\u5220\u9664"),q=o("\u83DC\u53551"),z=o("\u83DC\u53552"),H=o("\u83DC\u53553"),O=o("\u83DC\u53551"),P=o("\u83DC\u53552"),Q=o("\u83DC\u53553");function R(n,s,U,W,Y,Z){const u=c("v-contextmenu-item"),m=c("v-contextmenu-group"),b=c("v-contextmenu-divider"),k=c("v-contextmenu-submenu"),B=c("v-contextmenu"),$=I("contextmenu");return a(),d("div",null,[G,E((a(),d("div",J,L)),[[$,void 0,"contextmenu"]]),t(B,{ref:"contextmenu"},{default:e(()=>[t(m,{title:"\u64CD\u4F5C"},{default:e(()=>[t(u,{"hide-on-click":!1,onClick:s[0]||(s[0]=_=>n.extra.push("item"))},{default:e(()=>[M]),_:1}),t(u,{"hide-on-click":!1,onClick:s[1]||(s[1]=_=>n.extra.push("group"))},{default:e(()=>[T]),_:1}),t(u,{"hide-on-click":!1,onClick:s[2]||(s[2]=_=>n.extra.push("submenu"))},{default:e(()=>[X]),_:1}),t(u,{"hide-on-click":!1,onClick:s[3]||(s[3]=_=>n.extra.pop())},{default:e(()=>[j]),_:1})]),_:1}),(a(!0),d(x,null,w(n.extra,(_,i)=>(a(),d(x,{key:i},[t(b),_==="group"?(a(),l(m,{key:0,title:`\u83DC\u5355\u7EC4 ${i+1}`},{default:e(()=>[t(u,null,{default:e(()=>[q]),_:1}),t(u,null,{default:e(()=>[z]),_:1}),t(u,null,{default:e(()=>[H]),_:1})]),_:2},1032,["title"])):_==="submenu"?(a(),l(k,{key:1,title:`\u5B50\u83DC\u5355 ${i+1}`},{default:e(()=>[t(u,null,{default:e(()=>[O]),_:1}),t(u,null,{default:e(()=>[P]),_:1}),t(u,null,{default:e(()=>[Q]),_:1})]),_:2},1032,["title"])):(a(),l(u,{key:2},{default:e(()=>[o("\u83DC\u5355 "+N(i+1),1)]),_:2},1024))],64))),128))]),_:1},512)])}var ue=F(V,[["render",R],["__scopeId","data-v-f86b82d4"]]);export{ue as default};
