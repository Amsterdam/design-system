import{w as c,j as r,g as m}from"./index.esm-wLIUzz-f.js";const b={title:"Forms/Switch",component:c,argTypes:{disabled:{control:"boolean"}}},e={args:{"aria-label":"Default",disabled:!1}},a={render:d=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:[r.jsx(m,{htmlFor:"switch-with-label",children:"Label"}),r.jsx(c,{...d,id:"switch-with-label"})]}),args:{disabled:!1}};var s,t,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default',
    disabled: false
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var o,i,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '5rem'
  }}>
      <FormLabel htmlFor="switch-with-label">Label</FormLabel>
      <Switch {...args} id="switch-with-label" />
    </div>,
  args: {
    disabled: false
  }
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const p=["Default","WithFormLabel"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithFormLabel:a,__namedExportsOrder:p,default:b},Symbol.toStringTag,{value:"Module"}));export{e as D,g as S,a as W};
