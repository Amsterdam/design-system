import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{$ as r,D as i,g as a,tt as o,v as s,z as c}from"./index.esm-CaN24872.js";import{n as l,t as u}from"./Field-ziYLXIpP.js";import{g as d,o as f,s as p}from"./exampleContent-IbnonNTi.js";var m=t({Default:()=>y,InAFieldSet:()=>S,InAFieldSetWithValidation:()=>C,WithDescription:()=>b,WithValidation:()=>x,__namedExportsOrder:()=>w,default:()=>v}),h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{o(),l(),d(),h=n(),g=p(),_=f(),v={title:`Components/Forms/Field`,component:u,args:{invalid:!1}},y={render:e=>(0,h.jsxs)(u,{invalid:e.invalid,children:[(0,h.jsx)(i,{htmlFor:`input1`,children:`Wat is uw achternaam?`}),(0,h.jsx)(r,{id:`input1`,invalid:e.invalid,value:_})]})},b={render:e=>(0,h.jsxs)(u,{invalid:e.invalid,children:[(0,h.jsx)(i,{htmlFor:`input2`,children:`Wat is uw achternaam?`}),(0,h.jsx)(c,{id:`description1`,children:`Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.`}),(0,h.jsx)(r,{"aria-describedby":`description1`,id:`input2`,invalid:e.invalid,value:`van den Heuvel`})]})},x={args:{invalid:!0},render:e=>(0,h.jsxs)(u,{invalid:e.invalid,children:[(0,h.jsx)(i,{htmlFor:`input3`,children:`Wat is uw achternaam?`}),(0,h.jsx)(c,{id:`description2`,children:`Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.`}),(0,h.jsx)(a,{id:`error`,children:`Vul uw achternaam in`}),(0,h.jsx)(r,{"aria-describedby":`description2 error`,"aria-required":!0,id:`input3`,invalid:e.invalid,value:``})]})},S={render:e=>(0,h.jsxs)(s,{legend:`Wat is uw naam?`,children:[(0,h.jsxs)(u,{...e,children:[(0,h.jsx)(i,{htmlFor:`input-a1`,inFieldSet:!0,children:`Voornaam`}),e.invalid&&(0,h.jsx)(a,{id:`error-a1`,children:`Vul uw voornaam in.`}),(0,h.jsx)(r,{"aria-describedby":e.invalid?`error-a1`:void 0,"aria-required":`true`,id:`input-a1`,invalid:e.invalid,value:g})]}),(0,h.jsxs)(u,{...e,children:[(0,h.jsx)(i,{htmlFor:`input-a2`,inFieldSet:!0,children:`Achternaam`}),e.invalid&&(0,h.jsx)(a,{id:`error-a2`,children:`Vul uw achternaam in.`}),(0,h.jsx)(r,{"aria-describedby":e.invalid?`error-a2`:void 0,"aria-required":`true`,id:`input-a2`,invalid:e.invalid,value:_})]})]})},C={args:{invalid:!0},render:({invalid:e,...t})=>(0,h.jsxs)(s,{legend:`Wat is uw naam?`,children:[(0,h.jsxs)(u,{...t,children:[(0,h.jsx)(i,{htmlFor:`input-b1`,inFieldSet:!0,children:`Voornaam`}),(0,h.jsx)(r,{"aria-required":`true`,defaultValue:g,id:`input-b1`})]}),(0,h.jsxs)(u,{...t,invalid:e,children:[(0,h.jsx)(i,{htmlFor:`input-b2`,inFieldSet:!0,children:`Achternaam`}),e&&(0,h.jsx)(a,{id:`error-b2`,children:`Vul uw achternaam in.`}),(0,h.jsx)(r,{"aria-describedby":e?`error-b2`:void 0,"aria-required":`true`,id:`input-b2`,invalid:e})]})]})},w=[`Default`,`WithDescription`,`WithValidation`,`InAFieldSet`,`InAFieldSetWithValidation`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Wat is uw achternaam?</Label>
      <TextInput id="input1" invalid={args.invalid} value={familyName} />
    </Field>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Wat is uw achternaam?</Label>
      <Paragraph id="description1">
        Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.
      </Paragraph>
      <TextInput aria-describedby="description1" id="input2" invalid={args.invalid} value="van den Heuvel" />
    </Field>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet legend="Wat is uw naam?">
      <Field {...args}>
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: ({
    invalid,
    ...args
  }) => <FieldSet legend="Wat is uw naam?">
      <Field {...args}>
        <Label htmlFor="input-b1" inFieldSet>
          Voornaam
        </Label>
        <TextInput aria-required="true" defaultValue={givenName} id="input-b1" />
      </Field>
      <Field {...args} invalid={invalid}>
        <Label htmlFor="input-b2" inFieldSet>
          Achternaam
        </Label>
        {invalid && <ErrorMessage id="error-b2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={invalid ? 'error-b2' : undefined} aria-required="true" id="input-b2" invalid={invalid} />
      </Field>
    </FieldSet>
}`,...C.parameters?.docs?.source}}}})))()}export{x as a,b as i,S as n,T as o,C as r,v as s,m as t};