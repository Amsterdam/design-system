import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Wt as n}from"./iframe-Dak--dB-.js";import{t as r,ut as i}from"./src-Tti4jVCE.js";var a=t({DatesWithoutLinks:()=>d,Default:()=>u,__namedExportsOrder:()=>f,default:()=>l}),o,s,c,l,u,d,f,p=e((()=>{r(),o=n(),s=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,c=({onClick:e,...t})=>(0,o.jsx)(`a`,{...t,onClick:t=>{t.preventDefault(),e?.(t)}}),l={title:`Components/Navigation/Calendar`,component:i,args:{linkComponent:c,linkTemplate:e=>`?date=${s(e)}`},argTypes:{defaultMonth:{control:!1},linkComponent:{control:!1},linkTemplate:{control:!1},locale:{control:!1}}},u={parameters:{docs:{source:{code:"<Calendar linkTemplate={(date: Date): string | undefined => `?date=${formatDate(date)}`} />"}}}},d={args:{linkTemplate:e=>e.getDay()===0||e.getDay()===6?void 0:`?date=${s(e)}`},parameters:{docs:{source:{code:`<Calendar
  linkTemplate={(date: Date) =>
    date.getDay() === 0 || date.getDay() === 6 ? undefined : \`?date=\${formatDate(date)}\`
  }
/>`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Calendar linkTemplate={(date: Date): string | undefined => \\\`?date=\\\${formatDate(date)}\\\`} />\`
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    linkTemplate: (date: Date) => date.getDay() === 0 || date.getDay() === 6 ? undefined : \`?date=\${formatDate(date)}\`
  },
  parameters: {
    docs: {
      source: {
        code: \`<Calendar
  linkTemplate={(date: Date) =>
    date.getDay() === 0 || date.getDay() === 6 ? undefined : \\\`?date=\\\${formatDate(date)}\\\`
  }
/>\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`DatesWithoutLinks`]}));p();export{d as DatesWithoutLinks,u as Default,f as __namedExportsOrder,l as default,p as n,a as t};