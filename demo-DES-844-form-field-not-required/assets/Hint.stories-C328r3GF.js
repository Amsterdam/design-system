import{j as e}from"./jsx-runtime-BlAj40OV.js";import{C as c,a as r,F as m,H as g,P as u}from"./index.esm-C0OPxfeR.js";import{H as i}from"./Hint-D4Fy8YuO.js";const b={title:"Components/Text/Hint",component:i},a={args:{hint:"hint"},render:({hint:t})=>e.jsxs(c,{children:[e.jsxs(r,{children:["Label ",e.jsx(i,{hint:t})]}),e.jsx(r,{hint:t,children:"Labels have a hint prop"}),e.jsx(m,{legend:"Field Sets also have a hint prop",hint:t})]})},n={args:{hint:"hints inherit styling"},render:({hint:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(g,{level:2,children:["Level 2 heading ",e.jsx(i,{hint:t})]}),e.jsxs(u,{children:["It is not recommended to insert a Hint in a Paragraph, but it is possible and it will then also inherit the style ",e.jsx(i,{hint:"hint in a paragraph"}),"."]})]})};var s,o,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    hint: 'hint'
  },
  render: ({
    hint
  }) => <Column>
      <Label>
        Label <Hint hint={hint} />
      </Label>

      <Label hint={hint}>Labels have a hint prop</Label>

      <FieldSet legend="Field Sets also have a hint prop" hint={hint}></FieldSet>
    </Column>
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var h,d,p;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Default","InCopy"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InCopy:n,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{S as H,n as I};
