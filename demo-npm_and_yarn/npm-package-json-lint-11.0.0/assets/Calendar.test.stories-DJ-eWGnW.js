import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{l as n,r,s as i}from"./locale-CW3GDn2D.js";import{a,i as o,o as s,r as c}from"./Calendar.stories-B5P_weMq.js";var l;function u(){return(u=e((()=>{l=e=>{let t=Date,n=e.getTime(),r=new Proxy(t,{apply:()=>new t(n).toString(),construct:(e,r)=>r.length===0?new t(n):Reflect.construct(t,r),get:(e,t)=>t===`now`?()=>n:e[t]});return Object.defineProperty(globalThis,"Date",{configurable:!0,value:r,writable:!0}),()=>{Object.defineProperty(globalThis,"Date",{configurable:!0,value:t,writable:!0})}}})))()}var d,f,p,m,h;function g(){return(g=e((()=>{s(),i(),u(),c(),d=t(),f={...o,title:`Components/Navigation/Calendar`,argTypes:{...o.argTypes,locale:{control:!1,table:{disable:!0}}}},p=new Date(2026,11,31),m={args:{defaultMonth:new Date(p)},beforeEach:()=>l(p),render:e=>(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--ams-space-l)`},children:n.map(({locale:t})=>(0,d.jsx)(a,{...e,...r(t),locale:t},t??`nl-NL`))}),tags:[`!dev`,`!autodocs`,`!manifest`]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMonth: new Date(testDate)
  },
  beforeEach: () => mockDate(testDate),
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--ams-space-l)'
  }}>
      {localeTranslations.map(({
      locale
    }) => <Calendar key={locale ?? 'nl-NL'} {...args} {...calendarLocaleProps(locale)} locale={locale} />)}
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...m.parameters?.docs?.source}}},h=[`Test`]})))()}g();export{m as Test,h as __namedExportsOrder,f as default};