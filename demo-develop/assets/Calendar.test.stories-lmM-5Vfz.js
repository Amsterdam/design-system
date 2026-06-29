import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./renderComponentVariants-BbcMU-HA.js";import{rn as r,t as i}from"./src-CfsgRa_Q.js";import a,{n as o}from"./Calendar.stories-D8-EGyt1.js";var s,c=e((()=>{s=e=>{let t=Date,n=e.getTime(),r=new Proxy(t,{apply:()=>new t(n).toString(),construct:(e,r)=>r.length===0?new t(n):Reflect.construct(t,r),get:(e,t)=>t===`now`?()=>n:e[t]});return Object.defineProperty(globalThis,"Date",{configurable:!0,value:r,writable:!0}),()=>{Object.defineProperty(globalThis,"Date",{configurable:!0,value:t,writable:!0})}}})),l,u,d,f;e((()=>{i(),c(),n(),o(),l={...a,title:`Components/Navigation/Calendar`,argTypes:{...a.argTypes,locale:{control:!1,table:{disable:!0}}}},u=new Date(2026,11,31),d={args:{defaultMonth:new Date(u),locale:`nl`},beforeEach:()=>s(u),render:(e,n)=>t(r,{args:e},n),tags:[`!dev`,`!autodocs`]},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMonth: new Date(testDate),
    locale: 'nl'
  },
  beforeEach: () => mockDate(testDate),
  render: (args, context) => renderComponentVariants(Calendar, {
    args
  }, context),
  tags: ['!dev', '!autodocs']
}`,...d.parameters?.docs?.source}}},f=[`Test`]}))();export{d as Test,f as __namedExportsOrder,l as default};