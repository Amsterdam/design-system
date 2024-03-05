import{j as e}from"./jsx-runtime-CKrituN3.js";import{R as d,n as m}from"./index.esm-B1Oe-0Ls.js";const p={title:"Components/Forms/Switch",component:d,args:{disabled:!1},argTypes:{disabled:{control:"boolean"}}},r={args:{"aria-label":"Default"}},a={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:e.jsx(t,{})})],render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(d,{...t,id:"switch-with-label"})]})};var s,o,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default'
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '5rem'
  }}>
        <Story />
      </div>],
  render: args => <>
      <FormLabel htmlFor="switch-with-label">Label</FormLabel>
      <Switch {...args} id="switch-with-label" />
    </>
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Default","WithLabel"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithLabel:a,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{r as D,u as S,a as W};
