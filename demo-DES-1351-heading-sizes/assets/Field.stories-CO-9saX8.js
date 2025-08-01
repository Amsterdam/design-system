import{r as g,j as e,c as u,v as d,T as t,P as l,E as v}from"./iframe-C9wbfKto.js";const i=g.forwardRef(({children:a,className:o,invalid:p,...c},m)=>e.jsx("div",{...c,className:u("ams-field",p&&"ams-field--invalid",o),ref:m,children:a}));i.displayName="Field";try{i.displayName="Field",i.__docgenInfo={description:"",displayName:"Field",props:{invalid:{defaultValue:null,description:"Whether the field has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const h={title:"Components/Forms/Field",component:i,args:{invalid:!1}},r={render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(d,{htmlFor:"input1",children:"Waar gaat het om?"}),e.jsx(t,{id:"input1",invalid:a.invalid})]})},n={render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(d,{htmlFor:"input2",children:"Waar gaat het om?"}),e.jsx(l,{id:"description1",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(t,{"aria-describedby":"description1",id:"input2",invalid:a.invalid})]})},s={args:{invalid:!0},render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(d,{htmlFor:"input3",children:"Waar gaat het om?"}),e.jsx(l,{id:"description2",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(v,{id:"error",children:"Geef aan waar het om gaat."}),e.jsx(t,{"aria-describedby":"description2 error","aria-required":!0,id:"input3",invalid:a.invalid})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Waar gaat het om?</Label>
      <TextInput id="input1" invalid={args.invalid} />
    </Field>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Waar gaat het om?</Label>
      <Paragraph id="description1" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput aria-describedby="description1" id="input2" invalid={args.invalid} />
    </Field>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input3">Waar gaat het om?</Label>
      <Paragraph id="description2" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <ErrorMessage id="error">Geef aan waar het om gaat.</ErrorMessage>
      <TextInput aria-describedby="description2 error" aria-required id="input3" invalid={args.invalid} />
    </Field>
}`,...s.parameters?.docs?.source}}};const x=["Default","WithDescription","WithValidation"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithDescription:n,WithValidation:s,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{j as F,n as W,s as a};
