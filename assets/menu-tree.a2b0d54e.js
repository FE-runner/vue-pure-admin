var g=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var h=(n,e,t)=>e in n?g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,x=(n,e)=>{for(var t in e||(e={}))I.call(e,t)&&h(n,t,e[t]);if(f)for(var t of f(e))N.call(e,t)&&h(n,t,e[t]);return n},b=(n,e)=>B(n,D(e));import{m as T,u as w,n as P,t as R}from"./index.095600db.js";import{u as q}from"./hooks.3596d18a.js";import{d as z,bH as d,bG as H,r as s,o as K,c as M,w as u,bF as c,a as i,bO as l,bJ as O,bK as p}from"./vendor.1b62b168.js";const S={class:"card-header"},G={class:"font-medium"},J=p("\u83DC\u5355\u6811\u7ED3\u6784\uFF08\u91C7\u7528element-plus\u7684 "),L=p("Tree V2"),Q=p("\u7EC4\u4EF6\u5E76\u652F\u6301\u56FD\u9645\u5316\uFF09"),U={name:"reMenuTree"},X=z(b(x({},U),{setup(n){const e=d("");let t=d({value:"uniqueId",children:"children"});const m=d();let _=H(()=>T(w().menusTree)),k=P(_.value);const v=o=>{m.value.filter(o)},F=(o,a)=>R(a.meta.title,a.meta.i18n).indexOf(o)!==-1;return(o,a)=>{const C=s("el-link"),y=s("el-input"),E=s("el-tree-v2"),V=s("el-card");return K(),M(V,null,{header:u(()=>[c("div",S,[c("span",G,[J,i(C,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:l(q)("node-tree"),style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:u(()=>[L]),_:1},8,["icon"]),Q])])]),default:u(()=>[i(y,{class:"mb-4",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u627E",clearable:"",onInput:v},null,8,["modelValue"]),i(E,{ref_key:"treeRef",ref:m,data:l(_),props:l(t),"show-checkbox":"",height:500,"filter-method":F,"default-expanded-keys":l(k)},{default:u(({data:r})=>[c("span",null,O(o.$t(r.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}}));export{X as default};
