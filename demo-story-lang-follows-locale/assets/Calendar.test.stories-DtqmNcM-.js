import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{rn as n,t as r}from"./src-CT6c9PnZ.js";import{l as i,r as a,s as o}from"./locale-DHGYXuaN.js";import s,{n as c}from"./Calendar.stories-C-mq1EGB.js";var l,u=e((()=>{l=e=>{let t=Date,n=e.getTime(),r=new Proxy(t,{apply:()=>new t(n).toString(),construct:(e,r)=>r.length===0?new t(n):Reflect.construct(t,r),get:(e,t)=>t===`now`?()=>n:e[t]});return Object.defineProperty(globalThis,"Date",{configurable:!0,value:r,writable:!0}),()=>{Object.defineProperty(globalThis,"Date",{configurable:!0,value:t,writable:!0})}}})),d,f,p,m,h;e((()=>{r(),o(),u(),c(),d=t(),f={...s,title:`Components/Navigation/Calendar`,argTypes:{...s.argTypes,locale:{control:!1,table:{disable:!0}}}},p=new Date(2026,11,31),m={args:{defaultMonth:new Date(p)},beforeEach:()=>l(p),render:e=>(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--ams-space-l)`},children:i.map(({locale:t})=>(0,d.jsx)(n,{...e,...a(t),locale:t},t??`nl-NL`))}),tags:[`!dev`,`!autodocs`]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  tags: ['!dev', '!autodocs']
}`,...m.parameters?.docs?.source}}},h=[`Test`]}))();export{m as Test,h as __namedExportsOrder,f as default};