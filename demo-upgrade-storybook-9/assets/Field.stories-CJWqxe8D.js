import{r as y,j as e,c as W,s as d,T as t,P as x,E as _}from"./iframe-De3IwJlC.js";const i=y.forwardRef(({children:a,className:f,invalid:j,...F},b)=>e.jsx("div",{...F,className:W("ams-field",j&&"ams-field--invalid",f),ref:b,children:a}));i.displayName="Field";try{i.displayName="Field",i.__docgenInfo={description:"",displayName:"Field",props:{invalid:{defaultValue:null,description:"Whether the field has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"Components/Forms/Field",component:i,args:{invalid:!1}},r={render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(d,{htmlFor:"input1",children:"Waar gaat het om?"}),e.jsx(t,{id:"input1",invalid:a.invalid})]})},n={render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(d,{htmlFor:"input2",children:"Waar gaat het om?"}),e.jsx(x,{id:"description1",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(t,{"aria-describedby":"description1",id:"input2",invalid:a.invalid})]})},s={args:{invalid:!0},render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(d,{htmlFor:"input3",children:"Waar gaat het om?"}),e.jsx(x,{id:"description2",size:"small",children:"Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u."}),e.jsx(_,{id:"error",children:"Geef aan waar het om gaat."}),e.jsx(t,{"aria-describedby":"description2 error","aria-required":!0,id:"input3",invalid:a.invalid})]})};var l,o,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Waar gaat het om?</Label>
      <TextInput id="input1" invalid={args.invalid} />
    </Field>
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Waar gaat het om?</Label>
      <Paragraph id="description1" size="small">
        Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
      </Paragraph>
      <TextInput aria-describedby="description1" id="input2" invalid={args.invalid} />
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
      <TextInput aria-describedby="description2 error" aria-required id="input3" invalid={args.invalid} />
    </Field>
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const z=["Default","WithDescription","WithValidation"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithDescription:n,WithValidation:s,__namedExportsOrder:z,default:T},Symbol.toStringTag,{value:"Module"}));export{L as F,n as W,s as a};
