import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{rn as r,t as i}from"./src-D3TVYFk-.js";import{c as a,n as o,r as s,s as c,t as l}from"./locale-DHGYXuaN.js";var u=e({DatesWithoutLinks:()=>g,Default:()=>h,__namedExportsOrder:()=>_,default:()=>m}),d,f,p,m,h,g,_,v=t((()=>{i(),c(),d=n(),f=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,p=({onClick:e,...t})=>(0,d.jsx)(`a`,{...t,onClick:t=>{t.preventDefault(),e?.(t)}}),m={title:`Components/Navigation/Calendar`,component:r,args:{linkComponent:p,linkTemplate:e=>`?date=${f(e)}`},argTypes:{...o,defaultMonth:{control:!1},linkComponent:{control:!1},linkTemplate:{control:!1}},decorators:[l],parameters:{localeVariant:`calendar`},render:e=>(0,d.jsx)(r,{...e,...s(e.locale)})},h={parameters:{docs:{source:{transform:a(`Calendar`,`calendar`,["linkTemplate={(date: Date): string | undefined => `?date=${formatDate(date)}`}"])}}}},g={args:{linkTemplate:e=>e.getDay()===0||e.getDay()===6?void 0:`?date=${f(e)}`},parameters:{docs:{source:{transform:a(`Calendar`,`calendar`,["linkTemplate={(date: Date) =>\n    date.getDay() === 0 || date.getDay() === 6 ? undefined : `?date=${formatDate(date)}`\n  }"])}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform('Calendar', 'calendar', ['linkTemplate={(date: Date): string | undefined => \`?date=\${formatDate(date)}\`}'])
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    linkTemplate: (date: Date) => date.getDay() === 0 || date.getDay() === 6 ? undefined : \`?date=\${formatDate(date)}\`
  },
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform('Calendar', 'calendar', ['linkTemplate={(date: Date) =>\\n    date.getDay() === 0 || date.getDay() === 6 ? undefined : \`?date=\${formatDate(date)}\`\\n  }'])
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`DatesWithoutLinks`]}));v();export{g as DatesWithoutLinks,h as Default,_ as __namedExportsOrder,m as default,v as n,u as t};