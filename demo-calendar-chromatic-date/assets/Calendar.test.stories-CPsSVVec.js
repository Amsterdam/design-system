import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./renderComponentVariants-B8Or7nNw.js";import{t as r,ut as i}from"./src-D1QJ4Ns0.js";import a,{n as o}from"./Calendar.stories-BElqaEv-.js";var s,c=e((()=>{s=e=>{let t=Date,n=e.getTime(),r=new Proxy(t,{apply:()=>new t(n).toString(),construct:(e,r)=>r.length===0?new t(n):Reflect.construct(t,r),get:(e,t)=>t===`now`?()=>n:e[t]});return Object.defineProperty(globalThis,`Date`,{configurable:!0,value:r,writable:!0}),()=>{Object.defineProperty(globalThis,`Date`,{configurable:!0,value:t,writable:!0})}}})),l,u,d;e((()=>{r(),c(),n(),o(),l={...a,title:`Components/Navigation/Calendar`,argTypes:{...a.argTypes,locale:{control:!1,table:{disable:!0}}}},u={args:{defaultMonth:new Date(2026,11,31),locale:`nl`},beforeEach:()=>s(new Date(2026,11,31)),render:(e,n)=>t(i,{args:e},n),tags:[`!dev`,`!autodocs`]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMonth: new Date(2026, 11, 31),
    locale: 'nl'
  },
  beforeEach: () => mockDate(new Date(2026, 11, 31)),
  render: (args, context) => renderComponentVariants(Calendar, {
    args
  }, context),
  tags: ['!dev', '!autodocs']
}`,...u.parameters?.docs?.source}}},d=[`Test`]}))();export{u as Test,d as __namedExportsOrder,l as default};