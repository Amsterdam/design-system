import{j as r}from"./jsx-runtime-CKrituN3.js";import{R as c,n as d}from"./index.esm-DZliMoJT.js";const p={title:"Components/Forms/Switch",component:c,args:{disabled:!1},argTypes:{disabled:{control:"boolean"}}},e={args:{"aria-label":"Default"}},a={render:m=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:[r.jsx(d,{htmlFor:"switch-with-label",children:"Label"}),r.jsx(c,{...m,id:"switch-with-label"})]})};var t,s,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default'
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var o,i,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '5rem'
  }}>
      <FormLabel htmlFor="switch-with-label">Label</FormLabel>
      <Switch {...args} id="switch-with-label" />
    </div>
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const b=["Default","WithFormLabel"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithFormLabel:a,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{e as D,g as S,a as W};
