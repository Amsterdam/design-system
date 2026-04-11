import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{G as n,I as r,N as i,Rt as a,d as o,h as s,m as c,p as l,q as u,w as d}from"./iframe-BNZXMPxS.js";import{Z as f,t as p}from"./src-BzDhucBq.js";var m=t({DateTime:()=>v,Default:()=>_,Disabled:()=>b,InAField:()=>x,InAFieldWithValidation:()=>S,Invalid:()=>y,MemorableDate:()=>C,MemorableDateWithValidation:()=>w,__namedExportsOrder:()=>T,default:()=>g}),h,g,_,v,y,b,x,S,C,w,T,E=e((()=>{u(),p(),h=a(),g={title:`Components/Forms/Date Input`,component:f,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:`Prevents interaction. Avoid if possible.`}}},_={},v={args:{type:`datetime-local`}},y={args:{invalid:!0}},b={args:{disabled:!0}},x={render:e=>(0,h.jsxs)(c,{invalid:e.invalid,children:[(0,h.jsx)(d,{htmlFor:`input1`,children:`Label`}),(0,h.jsx)(i,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(l,{id:`error1`,children:`Foutmelding.`}),(0,h.jsx)(f,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},S={args:{invalid:!0},render:e=>(0,h.jsxs)(c,{invalid:e.invalid,children:[(0,h.jsx)(d,{htmlFor:`input2`,children:`Label`}),(0,h.jsx)(i,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(l,{id:`error2`,children:`Foutmelding.`}),(0,h.jsx)(f,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},C={render:e=>(0,h.jsxs)(s,{"aria-describedby":`description-a`,legend:`Wanneer ben je geboren?`,children:[(0,h.jsx)(i,{id:`description-a`,children:`Bijvoorbeeld 1 1 2000.`}),(0,h.jsxs)(r,{children:[(0,h.jsxs)(o,{gap:`small`,children:[(0,h.jsx)(d,{htmlFor:`input-a1`,inFieldSet:!0,children:`Dag`}),(0,h.jsx)(n,{autoComplete:`bday-day`,id:`input-a1`,inputMode:`numeric`,name:`dag`,size:2})]}),(0,h.jsxs)(o,{gap:`small`,children:[(0,h.jsx)(d,{htmlFor:`input-a2`,inFieldSet:!0,children:`Maand`}),(0,h.jsx)(n,{autoComplete:`bday-month`,id:`input-a2`,inputMode:`numeric`,name:`maand`,size:2})]}),(0,h.jsxs)(o,{gap:`small`,children:[(0,h.jsx)(d,{htmlFor:`input-a3`,inFieldSet:!0,children:`Jaar`}),(0,h.jsx)(n,{autoComplete:`bday-year`,id:`input-a3`,inputMode:`numeric`,name:`jaar`,size:4})]})]})]})},w={render:e=>(0,h.jsxs)(s,{"aria-describedby":`description-b error-b`,invalid:!0,legend:`Wanneer ben je geboren?`,children:[(0,h.jsx)(i,{id:`description-b`,children:`Bijvoorbeeld 1 1 2000.`}),(0,h.jsx)(l,{id:`error-b`,children:`De datum moet in het verleden liggen.`}),(0,h.jsxs)(r,{children:[(0,h.jsxs)(o,{gap:`small`,children:[(0,h.jsx)(d,{htmlFor:`input-b1`,inFieldSet:!0,children:`Dag`}),(0,h.jsx)(n,{autoComplete:`bday-day`,id:`input-b1`,inputMode:`numeric`,invalid:!0,name:`dag`,size:2})]}),(0,h.jsxs)(o,{gap:`small`,children:[(0,h.jsx)(d,{htmlFor:`input-b2`,inFieldSet:!0,children:`Maand`}),(0,h.jsx)(n,{autoComplete:`bday-month`,id:`input-b2`,inputMode:`numeric`,invalid:!0,name:`maand`,size:2})]}),(0,h.jsxs)(o,{gap:`small`,children:[(0,h.jsx)(d,{htmlFor:`input-b3`,inFieldSet:!0,children:`Jaar`}),(0,h.jsx)(n,{autoComplete:`bday-year`,id:`input-b3`,inputMode:`numeric`,invalid:!0,name:`jaar`,size:4})]})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  // Storybook needs a render function with an args parameter to correctly render Code view, even if we don't use it in this story.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => <FieldSet aria-describedby="description-a" legend="Wanneer ben je geboren?">
      <Paragraph id="description-a">Bijvoorbeeld 1 1 2000.</Paragraph>
      <Row>
        <Column gap="small">
          <Label htmlFor="input-a1" inFieldSet>
            Dag
          </Label>
          <TextInput autoComplete="bday-day" id="input-a1" inputMode="numeric" name="dag" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-a2" inFieldSet>
            Maand
          </Label>
          <TextInput autoComplete="bday-month" id="input-a2" inputMode="numeric" name="maand" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-a3" inFieldSet>
            Jaar
          </Label>
          <TextInput autoComplete="bday-year" id="input-a3" inputMode="numeric" name="jaar" size={4} />
        </Column>
      </Row>
    </FieldSet>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // Storybook needs a render function with an args parameter to correctly render Code view, even if we don't use it in this story.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => <FieldSet aria-describedby="description-b error-b" invalid legend="Wanneer ben je geboren?">
      <Paragraph id="description-b">Bijvoorbeeld 1 1 2000.</Paragraph>
      <ErrorMessage id="error-b">De datum moet in het verleden liggen.</ErrorMessage>
      <Row>
        <Column gap="small">
          <Label htmlFor="input-b1" inFieldSet>
            Dag
          </Label>
          <TextInput autoComplete="bday-day" id="input-b1" inputMode="numeric" invalid name="dag" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-b2" inFieldSet>
            Maand
          </Label>
          <TextInput autoComplete="bday-month" id="input-b2" inputMode="numeric" invalid name="maand" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-b3" inFieldSet>
            Jaar
          </Label>
          <TextInput autoComplete="bday-year" id="input-b3" inputMode="numeric" invalid name="jaar" size={4} />
        </Column>
      </Row>
    </FieldSet>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`DateTime`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`,`MemorableDate`,`MemorableDateWithValidation`]}));E();export{v as DateTime,_ as Default,b as Disabled,x as InAField,S as InAFieldWithValidation,y as Invalid,C as MemorableDate,w as MemorableDateWithValidation,T as __namedExportsOrder,g as default,E as n,m as t};