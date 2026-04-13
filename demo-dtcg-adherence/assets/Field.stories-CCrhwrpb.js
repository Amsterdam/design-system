import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-GmyBfqKJ.js";import{H as r,S as i,W as a,d as o,j as s,p as c}from"./index.esm-BrHaSFqk.js";import{K as l,t as u}from"./src-DVAS6rfi.js";import{a as d,i as f,m as p}from"./exampleContent-up3wPRrW.js";var m=t({Default:()=>y,InAFieldSet:()=>S,WithDescription:()=>b,WithValidation:()=>x,__namedExportsOrder:()=>C,default:()=>v}),h,g,_,v,y,b,x,S,C,w=e((()=>{a(),u(),p(),h=n(),g=d(),_=f(),v={title:`Components/Forms/Field`,component:l,args:{invalid:!1}},y={render:e=>(0,h.jsxs)(l,{invalid:e.invalid,children:[(0,h.jsx)(i,{htmlFor:`input1`,children:`Wat is uw achternaam?`}),(0,h.jsx)(r,{id:`input1`,invalid:e.invalid,value:_})]})},b={render:e=>(0,h.jsxs)(l,{invalid:e.invalid,children:[(0,h.jsx)(i,{htmlFor:`input2`,children:`Wat is uw achternaam?`}),(0,h.jsx)(s,{id:`description1`,children:`Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.`}),(0,h.jsx)(r,{"aria-describedby":`description1`,id:`input2`,invalid:e.invalid,value:`van den Heuvel`})]})},x={args:{invalid:!0},render:e=>(0,h.jsxs)(l,{invalid:e.invalid,children:[(0,h.jsx)(i,{htmlFor:`input3`,children:`Wat is uw achternaam?`}),(0,h.jsx)(s,{id:`description2`,children:`Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.`}),(0,h.jsx)(o,{id:`error`,children:`Vul uw achternaam in`}),(0,h.jsx)(r,{"aria-describedby":`description2 error`,"aria-required":!0,id:`input3`,invalid:e.invalid,value:``})]})},S={render:e=>(0,h.jsxs)(c,{legend:`Wat is uw naam?`,children:[(0,h.jsxs)(l,{...e,children:[(0,h.jsx)(i,{htmlFor:`input-a1`,inFieldSet:!0,children:`Voornaam`}),e.invalid&&(0,h.jsx)(o,{id:`error-a1`,children:`Vul uw voornaam in.`}),(0,h.jsx)(r,{"aria-describedby":e.invalid?`error-a1`:void 0,"aria-required":`true`,id:`input-a1`,invalid:e.invalid,value:g})]}),(0,h.jsxs)(l,{...e,children:[(0,h.jsx)(i,{htmlFor:`input-a2`,inFieldSet:!0,children:`Achternaam`}),e.invalid&&(0,h.jsx)(o,{id:`error-a2`,children:`Vul uw achternaam in.`}),(0,h.jsx)(r,{"aria-describedby":e.invalid?`error-a2`:void 0,"aria-required":`true`,id:`input-a2`,invalid:e.invalid,value:_})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithDescription`,`WithValidation`,`InAFieldSet`]}));w();export{y as Default,S as InAFieldSet,b as WithDescription,x as WithValidation,C as __namedExportsOrder,v as default,w as n,m as t};