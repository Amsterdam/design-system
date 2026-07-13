import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{J as r,P as i,X as a,f as o,m as s,w as c}from"./index.esm-CGKJ42vs.js";import{Ft as l,t as u}from"./src-BE3mV4H6.js";import{a as d,i as f,m as p}from"./exampleContent-Cni407gr.js";import{n as m,t as h}from"./decorators-C0fl23KJ.js";var g=t({Default:()=>x,InAFieldSet:()=>w,WithDescription:()=>S,WithValidation:()=>C,__namedExportsOrder:()=>T,default:()=>b}),_,v,y,b,x,S,C,w,T,E=e((()=>{a(),u(),h(),p(),_=n(),v=d(),y=f(),b={title:`Components/Forms/Field`,component:l,args:{invalid:!1},decorators:[m(`7-of-12-columns`)]},x={render:e=>(0,_.jsxs)(l,{invalid:e.invalid,children:[(0,_.jsx)(c,{htmlFor:`input1`,children:`Wat is uw achternaam?`}),(0,_.jsx)(r,{id:`input1`,invalid:e.invalid,value:y})]})},S={render:e=>(0,_.jsxs)(l,{invalid:e.invalid,children:[(0,_.jsx)(c,{htmlFor:`input2`,children:`Wat is uw achternaam?`}),(0,_.jsx)(i,{id:`description1`,children:`Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.`}),(0,_.jsx)(r,{"aria-describedby":`description1`,id:`input2`,invalid:e.invalid,value:`van den Heuvel`})]})},C={args:{invalid:!0},render:e=>(0,_.jsxs)(l,{invalid:e.invalid,children:[(0,_.jsx)(c,{htmlFor:`input3`,children:`Wat is uw achternaam?`}),(0,_.jsx)(i,{id:`description2`,children:`Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.`}),(0,_.jsx)(o,{id:`error`,children:`Vul uw achternaam in`}),(0,_.jsx)(r,{"aria-describedby":`description2 error`,"aria-required":!0,id:`input3`,invalid:e.invalid,value:``})]})},w={render:e=>(0,_.jsxs)(s,{legend:`Wat is uw naam?`,children:[(0,_.jsxs)(l,{...e,children:[(0,_.jsx)(c,{htmlFor:`input-a1`,inFieldSet:!0,children:`Voornaam`}),e.invalid&&(0,_.jsx)(o,{id:`error-a1`,children:`Vul uw voornaam in.`}),(0,_.jsx)(r,{"aria-describedby":e.invalid?`error-a1`:void 0,"aria-required":`true`,id:`input-a1`,invalid:e.invalid,value:v})]}),(0,_.jsxs)(l,{...e,children:[(0,_.jsx)(c,{htmlFor:`input-a2`,inFieldSet:!0,children:`Achternaam`}),e.invalid&&(0,_.jsx)(o,{id:`error-a2`,children:`Vul uw achternaam in.`}),(0,_.jsx)(r,{"aria-describedby":e.invalid?`error-a2`:void 0,"aria-required":`true`,id:`input-a2`,invalid:e.invalid,value:y})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Wat is uw achternaam?</Label>
      <TextInput id="input1" invalid={args.invalid} value={familyName} />
    </Field>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Wat is uw achternaam?</Label>
      <Paragraph id="description1">
        Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.
      </Paragraph>
      <TextInput aria-describedby="description1" id="input2" invalid={args.invalid} value="van den Heuvel" />
    </Field>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithDescription`,`WithValidation`,`InAFieldSet`]}));E();export{x as Default,w as InAFieldSet,S as WithDescription,C as WithValidation,T as __namedExportsOrder,b as default,E as n,g as t};