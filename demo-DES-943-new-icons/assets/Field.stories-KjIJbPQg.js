import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{c as d,T as t,P as f,E as y}from"./index.esm-DpWS3VnT.js";import{c as W}from"./clsx-B-dksMZM.js";import{r as _}from"./index-D7uoVdV3.js";const a=_.forwardRef(({children:i,className:x,invalid:j,...F},b)=>e.jsx("div",{...F,ref:b,className:W("ams-field",j&&"ams-field--invalid",x),children:i}));a.displayName="Field";try{a.displayName="Field",a.__docgenInfo={description:"",displayName:"Field",props:{invalid:{defaultValue:null,description:"Whether the field has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"Components/Forms/Field",component:a,args:{invalid:!1}},r={render:i=>e.jsxs(a,{invalid:i.invalid,children:[e.jsx(d,{htmlFor:"input1",children:"Waar gaat het om?"}),e.jsx(t,{id:"input1",invalid:i.invalid})]})},n={render:i=>e.jsxs(a,{invalid:i.invalid,children:[e.jsx(d,{htmlFor:"input2",children:"Waar gaat het om?"}),e.jsx(f,{id:"description1",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(t,{id:"input2","aria-describedby":"description1",invalid:i.invalid})]})},s={args:{invalid:!0},render:i=>e.jsxs(a,{invalid:i.invalid,children:[e.jsx(d,{htmlFor:"input3",children:"Waar gaat het om?"}),e.jsx(f,{id:"description2",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(y,{id:"error",children:"Geef aan waar het om gaat."}),e.jsx(t,{id:"input3","aria-describedby":"description2 error","aria-required":!0,invalid:i.invalid})]})};var o,l,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Waar gaat het om?</Label>
      <TextInput id="input1" invalid={args.invalid} />
    </Field>
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Waar gaat het om?</Label>
      <Paragraph id="description1" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput id="input2" aria-describedby="description1" invalid={args.invalid} />
    </Field>
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,v,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const z=["Default","WithDescription","WithValidation"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithDescription:n,WithValidation:s,__namedExportsOrder:z,default:T},Symbol.toStringTag,{value:"Module"}));export{I as F,n as W,s as a};
