import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{T as c}from"./index.esm-DhCwAuY7.js";import{c as x}from"./clsx-B-dksMZM.js";import{r as j}from"./index-BwDkhjyp.js";import{L as m}from"./Label-7rbJKFpg.js";import{P as u}from"./Paragraph-C4jU4-Z4.js";const r=j.forwardRef(({children:i,className:v,invalid:g,...h},f)=>e.jsx("div",{...h,ref:f,className:x("ams-field",g&&"ams-field--invalid",v),children:i}));r.displayName="Field";try{r.displayName="Field",r.__docgenInfo={description:"",displayName:"Field",props:{invalid:{defaultValue:null,description:"Whether the field has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const y={title:"Components/Forms/Field",component:r,args:{invalid:!1},render:i=>e.jsxs(r,{invalid:i.invalid,children:[e.jsx(m,{htmlFor:"input1",children:"Waar gaat het om?"}),e.jsx(u,{id:"description1",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(c,{id:"input1","aria-describedby":"description1","aria-invalid":i.invalid?!0:void 0})]})},a={},n={args:{invalid:!0},render:i=>e.jsxs(r,{invalid:i.invalid,children:[e.jsx(m,{htmlFor:"input2",children:"Waar gaat het om?"}),e.jsx(u,{id:"description2",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(c,{id:"input2","aria-describedby":"description2","aria-invalid":i.invalid?!0:void 0})]})};var s,t,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(t=a.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var o,l,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Waar gaat het om?</Label>
      <Paragraph id="description2" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput id="input2" aria-describedby="description2" aria-invalid={args.invalid ? true : undefined} />
    </Field>
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const _=["Default","WithError"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithError:n,__namedExportsOrder:_,default:y},Symbol.toStringTag,{value:"Module"}));export{P as F,n as W};
