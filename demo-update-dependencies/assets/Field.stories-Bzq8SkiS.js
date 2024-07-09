import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{L as t,T as d,E as x}from"./index.esm-D-8Z0FST.js";import{F as s}from"./Field-7IRG3ycG.js";import{P as j}from"./Paragraph-DpVlyIEJ.js";const b={title:"Components/Forms/Field",component:s,args:{invalid:!1}},i={render:r=>e.jsxs(s,{invalid:r.invalid,children:[e.jsx(t,{htmlFor:"input1",children:"Waar gaat het om?"}),e.jsx(d,{id:"input1",invalid:r.invalid})]})},a={render:r=>e.jsxs(s,{invalid:r.invalid,children:[e.jsx(t,{htmlFor:"input2",children:"Waar gaat het om?"}),e.jsx(j,{id:"description1",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(d,{id:"input2","aria-describedby":"description1",invalid:r.invalid})]})},n={args:{invalid:!0},render:r=>e.jsxs(s,{invalid:r.invalid,children:[e.jsx(t,{htmlFor:"input3",children:"Waar gaat het om?"}),e.jsx(j,{id:"description2",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(x,{id:"error",children:"Geef aan waar het om gaat."}),e.jsx(d,{id:"input3","aria-describedby":"description2 error","aria-required":!0,invalid:r.invalid})]})};var o,l,p;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Waar gaat het om?</Label>
      <TextInput id="input1" invalid={args.invalid} />
    </Field>
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Waar gaat het om?</Label>
      <Paragraph id="description1" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput id="input2" aria-describedby="description1" invalid={args.invalid} />
    </Field>
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,v,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input3">Waar gaat het om?</Label>
      <Paragraph id="description2" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <ErrorMessage id="error">Geef aan waar het om gaat.</ErrorMessage>
      <TextInput id="input3" aria-describedby="description2 error" aria-required invalid={args.invalid} />
    </Field>
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const F=["Default","WithDescription","WithError"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithDescription:a,WithError:n,__namedExportsOrder:F,default:b},Symbol.toStringTag,{value:"Module"}));export{z as F,a as W,n as a};
