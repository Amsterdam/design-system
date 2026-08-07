import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{D as r,Q as i,R as a,V as o,_ as s,et as c,f as l,g as u,h as d}from"./index.esm-BhvXtb6N.js";import{n as f,r as p,t as m}from"./DateInput-Z_rZFgEd.js";import{d as h,s as g}from"./argTypes-CTYEle7b.js";var _=t({DateTime:()=>x,Default:()=>b,Disabled:()=>C,InAField:()=>w,InAFieldWithValidation:()=>T,Invalid:()=>S,MemorableDate:()=>E,MemorableDateWithValidation:()=>D,__namedExportsOrder:()=>O,default:()=>y}),v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{c(),p(),h(),v=n(),y={title:`Components/Forms/Date Input`,component:m,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:g,onChange:{table:{disable:!1}},type:{control:{labels:{undefined:`date (default)`},type:`radio`},options:[void 0,...f.filter(e=>e!==`date`)]}}},b={},x={args:{type:`datetime-local`}},S={args:{invalid:!0}},C={args:{disabled:!0}},w={render:e=>(0,v.jsxs)(u,{invalid:e.invalid,children:[(0,v.jsx)(r,{htmlFor:`input1`,children:`Label`}),(0,v.jsx)(a,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,v.jsx)(d,{id:`error1`,children:`Foutmelding.`}),(0,v.jsx)(m,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},T={args:{invalid:!0},render:e=>(0,v.jsxs)(u,{invalid:e.invalid,children:[(0,v.jsx)(r,{htmlFor:`input2`,children:`Label`}),(0,v.jsx)(a,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,v.jsx)(d,{id:`error2`,children:`Foutmelding.`}),(0,v.jsx)(m,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},E={render:e=>(0,v.jsxs)(s,{"aria-describedby":`description-a`,legend:`Wanneer ben je geboren?`,children:[(0,v.jsx)(a,{id:`description-a`,children:`Bijvoorbeeld 1 1 2000.`}),(0,v.jsxs)(o,{children:[(0,v.jsxs)(l,{gap:`small`,children:[(0,v.jsx)(r,{htmlFor:`input-a1`,inFieldSet:!0,children:`Dag`}),(0,v.jsx)(i,{autoComplete:`bday-day`,id:`input-a1`,inputMode:`numeric`,name:`dag`,size:2})]}),(0,v.jsxs)(l,{gap:`small`,children:[(0,v.jsx)(r,{htmlFor:`input-a2`,inFieldSet:!0,children:`Maand`}),(0,v.jsx)(i,{autoComplete:`bday-month`,id:`input-a2`,inputMode:`numeric`,name:`maand`,size:2})]}),(0,v.jsxs)(l,{gap:`small`,children:[(0,v.jsx)(r,{htmlFor:`input-a3`,inFieldSet:!0,children:`Jaar`}),(0,v.jsx)(i,{autoComplete:`bday-year`,id:`input-a3`,inputMode:`numeric`,name:`jaar`,size:4})]})]})]})},D={render:e=>(0,v.jsxs)(s,{"aria-describedby":`description-b error-b`,invalid:!0,legend:`Wanneer ben je geboren?`,children:[(0,v.jsx)(a,{id:`description-b`,children:`Bijvoorbeeld 1 1 2000.`}),(0,v.jsx)(d,{id:`error-b`,children:`Vul alle drie de velden in.`}),(0,v.jsxs)(o,{children:[(0,v.jsxs)(l,{gap:`small`,children:[(0,v.jsx)(r,{htmlFor:`input-b1`,inFieldSet:!0,children:`Dag`}),(0,v.jsx)(i,{autoComplete:`bday-day`,defaultValue:16,id:`input-b1`,inputMode:`numeric`,name:`dag`,size:2})]}),(0,v.jsxs)(l,{gap:`small`,children:[(0,v.jsx)(r,{htmlFor:`input-b2`,inFieldSet:!0,children:`Maand`}),(0,v.jsx)(i,{autoComplete:`bday-month`,defaultValue:8,id:`input-b2`,inputMode:`numeric`,name:`maand`,size:2})]}),(0,v.jsxs)(l,{gap:`small`,children:[(0,v.jsx)(r,{htmlFor:`input-b3`,inFieldSet:!0,children:`Jaar`}),(0,v.jsx)(i,{autoComplete:`bday-year`,id:`input-b3`,inputMode:`numeric`,invalid:!0,name:`jaar`,size:4})]})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  // Storybook needs a render function with an args parameter to correctly render Code view, even if we don't use it in this story.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => <FieldSet aria-describedby="description-b error-b" invalid legend="Wanneer ben je geboren?">
      <Paragraph id="description-b">Bijvoorbeeld 1 1 2000.</Paragraph>
      <ErrorMessage id="error-b">Vul alle drie de velden in.</ErrorMessage>
      <Row>
        <Column gap="small">
          <Label htmlFor="input-b1" inFieldSet>
            Dag
          </Label>
          <TextInput autoComplete="bday-day" defaultValue={16} id="input-b1" inputMode="numeric" name="dag" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-b2" inFieldSet>
            Maand
          </Label>
          <TextInput autoComplete="bday-month" defaultValue={8} id="input-b2" inputMode="numeric" name="maand" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-b3" inFieldSet>
            Jaar
          </Label>
          <TextInput autoComplete="bday-year" id="input-b3" inputMode="numeric" invalid name="jaar" size={4} />
        </Column>
      </Row>
    </FieldSet>
}`,...D.parameters?.docs?.source}}},O=[`Default`,`DateTime`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`,`MemorableDate`,`MemorableDateWithValidation`]})))()}export{T as a,D as c,w as i,k as l,x as n,S as o,C as r,E as s,_ as t,y as u};