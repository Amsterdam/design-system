import{r as g,j as e,c as b,v as l,T as t,P as u,E as o,w as F}from"./iframe-EkBBJOoa.js";import{d as x,f}from"./exampleContent-DRope23M.js";const i=g.forwardRef(({children:a,className:m,invalid:p,...v},h)=>e.jsx("div",{...v,className:b("ams-field",p&&"ams-field--invalid",m),ref:h,children:a}));i.displayName="Field";try{i.displayName="Field",i.__docgenInfo={description:"",displayName:"Field",props:{invalid:{defaultValue:null,description:"Whether the field has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const j=f(),c=x(),w={title:"Components/Forms/Field",component:i,args:{invalid:!1}},r={render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(l,{htmlFor:"input1",children:"Wat is uw achternaam?"}),e.jsx(t,{id:"input1",invalid:a.invalid,value:c})]})},n={render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(l,{htmlFor:"input2",children:"Wat is uw achternaam?"}),e.jsx(u,{id:"description1",children:"Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin."}),e.jsx(t,{"aria-describedby":"description1",id:"input2",invalid:a.invalid,value:"van den Heuvel"})]})},d={args:{invalid:!0},render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(l,{htmlFor:"input3",children:"Wat is uw achternaam?"}),e.jsx(u,{id:"description2",children:"Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin."}),e.jsx(o,{id:"error",children:"Vul uw achternaam in"}),e.jsx(t,{"aria-describedby":"description2 error","aria-required":!0,id:"input3",invalid:a.invalid,value:""})]})},s={render:a=>e.jsxs(F,{legend:"Wat is uw naam?",children:[e.jsxs(i,{className:"ams-mb-s",...a,children:[e.jsx(l,{htmlFor:"input-a1",inFieldSet:!0,children:"Voornaam"}),a.invalid&&e.jsx(o,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:a.invalid,value:j})]}),e.jsxs(i,{...a,children:[e.jsx(l,{htmlFor:"input-a2",inFieldSet:!0,children:"Achternaam"}),a.invalid&&e.jsx(o,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:a.invalid,value:c})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Wat is uw achternaam?</Label>
      <TextInput id="input1" invalid={args.invalid} value={familyName} />
    </Field>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Wat is uw achternaam?</Label>
      <Paragraph id="description1">
        Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.
      </Paragraph>
      <TextInput aria-describedby="description1" id="input2" invalid={args.invalid} value="van den Heuvel" />
    </Field>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input3">Wat is uw achternaam?</Label>
      <Paragraph id="description2">
        Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.
      </Paragraph>
      <ErrorMessage id="error">Vul uw achternaam in</ErrorMessage>
      <TextInput aria-describedby="description2 error" aria-required id="input3" invalid={args.invalid} value="" />
    </Field>
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet legend="Wat is uw naam?">
      <Field className="ams-mb-s" {...args}>
        <Label htmlFor="input-a1" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a1' : undefined} aria-required="true" id="input-a1" invalid={args.invalid} value={givenName} />
      </Field>
      <Field {...args}>
        <Label htmlFor="input-a2" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a2' : undefined} aria-required="true" id="input-a2" invalid={args.invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...s.parameters?.docs?.source}}};const y=["Default","WithDescription","WithValidation","InAFieldSet"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InAFieldSet:s,WithDescription:n,WithValidation:d,__namedExportsOrder:y,default:w},Symbol.toStringTag,{value:"Module"}));export{i as F,s as I,n as W,_ as a,d as b,w as m};
