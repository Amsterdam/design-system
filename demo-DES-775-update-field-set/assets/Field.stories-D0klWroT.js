import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{T as t}from"./index.esm-DGjUpK3N.js";import{c as y}from"./clsx-B-dksMZM.js";import{r as W}from"./index-BwDkhjyp.js";import{L as s}from"./Label-7rbJKFpg.js";import{P as f}from"./Paragraph-C4jU4-Z4.js";const a=W.forwardRef(({children:i,className:x,invalid:j,...F},b)=>e.jsx("div",{...F,ref:b,className:y("ams-field",j&&"ams-field--invalid",x),children:i}));a.displayName="Field";try{a.displayName="Field",a.__docgenInfo={description:"",displayName:"Field",props:{invalid:{defaultValue:null,description:"Whether the field has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const _={title:"Components/Forms/Field",component:a,args:{invalid:!1}},r={render:i=>e.jsxs(a,{invalid:i.invalid,children:[e.jsx(s,{htmlFor:"input1",children:"Waar gaat het om?"}),e.jsx(t,{id:"input1","aria-invalid":i.invalid?!0:void 0})]})},n={render:i=>e.jsxs(a,{invalid:i.invalid,children:[e.jsx(s,{htmlFor:"input2",children:"Waar gaat het om?"}),e.jsx(f,{id:"description1",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(t,{id:"input2","aria-describedby":"description1","aria-invalid":i.invalid?!0:void 0})]})},d={args:{invalid:!0},render:i=>e.jsxs(a,{invalid:i.invalid,children:[e.jsx(s,{htmlFor:"input3",children:"Waar gaat het om?"}),e.jsx(f,{id:"description2",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(t,{id:"input3","aria-describedby":"description2","aria-invalid":i.invalid?!0:void 0})]})};var o,l,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Waar gaat het om?</Label>
      <TextInput id="input1" aria-invalid={args.invalid ? true : undefined} />
    </Field>
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Waar gaat het om?</Label>
      <Paragraph id="description1" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput id="input2" aria-describedby="description1" aria-invalid={args.invalid ? true : undefined} />
    </Field>
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,g,h;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input3">Waar gaat het om?</Label>
      <Paragraph id="description2" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput id="input3" aria-describedby="description2" aria-invalid={args.invalid ? true : undefined} />
    </Field>
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const T=["Default","WithDescription","WithError"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithDescription:n,WithError:d,__namedExportsOrder:T,default:_},Symbol.toStringTag,{value:"Module"}));export{D as F,n as W,d as a};
