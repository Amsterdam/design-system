import{j as e}from"./jsx-runtime-BlAj40OV.js";import{a as d,H as c,P as m}from"./index.esm-DePqMAIc.js";import{H as a}from"./Hint-D4EIfW8U.js";const g={title:"Components/Text/Hint",component:a},t={args:{hint:"hint"},render:({hint:r})=>e.jsx(d,{hint:r,children:"Label"})},n={args:{hint:"hints inherit styling"},render:({hint:r})=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{level:2,children:["Level 2 heading ",e.jsx(a,{hint:r})]}),e.jsxs(m,{children:["It is not recommended to insert a Hint in a Paragraph, but it is possible and it will then also inherit the style ",e.jsx(a,{hint:"hint in a paragraph"}),"."]})]})};var i,s,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    hint: 'hint'
  },
  render: ({
    hint
  }) => <Label hint={hint}>Label</Label>
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var h,l,p;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    hint: 'hints inherit styling'
  },
  render: ({
    hint
  }) => <>
      <Heading level={2}>
        Level 2 heading <Hint hint={hint} />
      </Heading>

      <Paragraph>
        It is not recommended to insert a Hint in a Paragraph, but it is possible and it will then also inherit the
        style <Hint hint="hint in a paragraph" />.
      </Paragraph>
    </>
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const u=["Default","InCopy"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:t,InCopy:n,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{j as H,n as I};
