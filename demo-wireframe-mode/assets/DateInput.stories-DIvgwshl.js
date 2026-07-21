import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{J as r,L as i,P as a,X as o,f as s,m as c,p as l,u,w as d}from"./index.esm-J5SVTEED.js";import{Jt as f,Kt as p,qt as m,t as h}from"./src-DySMor-7.js";import{d as g,s as _}from"./argTypes-CQXDxDHP.js";var v=t({DateTime:()=>S,Default:()=>x,Disabled:()=>w,InAField:()=>T,InAFieldWithValidation:()=>E,Invalid:()=>C,MemorableDate:()=>D,MemorableDateWithValidation:()=>O,__namedExportsOrder:()=>k,default:()=>b}),y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{o(),h(),f(),g(),y=n(),b={title:`Components/Forms/Date Input`,component:p,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:_,onChange:{table:{disable:!1}},type:{control:{labels:{undefined:`date (default)`},type:`radio`},options:[void 0,...m.filter(e=>e!==`date`)]}}},x={},S={args:{type:`datetime-local`}},C={args:{invalid:!0}},w={args:{disabled:!0}},T={render:e=>(0,y.jsxs)(l,{invalid:e.invalid,children:[(0,y.jsx)(d,{htmlFor:`input1`,children:`Label`}),(0,y.jsx)(a,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,y.jsx)(s,{id:`error1`,children:`Foutmelding.`}),(0,y.jsx)(p,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},E={args:{invalid:!0},render:e=>(0,y.jsxs)(l,{invalid:e.invalid,children:[(0,y.jsx)(d,{htmlFor:`input2`,children:`Label`}),(0,y.jsx)(a,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,y.jsx)(s,{id:`error2`,children:`Foutmelding.`}),(0,y.jsx)(p,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},D={render:e=>(0,y.jsxs)(c,{"aria-describedby":`description-a`,legend:`Wanneer ben je geboren?`,children:[(0,y.jsx)(a,{id:`description-a`,children:`Bijvoorbeeld 1 1 2000.`}),(0,y.jsxs)(i,{children:[(0,y.jsxs)(u,{gap:`small`,children:[(0,y.jsx)(d,{htmlFor:`input-a1`,inFieldSet:!0,children:`Dag`}),(0,y.jsx)(r,{autoComplete:`bday-day`,id:`input-a1`,inputMode:`numeric`,name:`dag`,size:2})]}),(0,y.jsxs)(u,{gap:`small`,children:[(0,y.jsx)(d,{htmlFor:`input-a2`,inFieldSet:!0,children:`Maand`}),(0,y.jsx)(r,{autoComplete:`bday-month`,id:`input-a2`,inputMode:`numeric`,name:`maand`,size:2})]}),(0,y.jsxs)(u,{gap:`small`,children:[(0,y.jsx)(d,{htmlFor:`input-a3`,inFieldSet:!0,children:`Jaar`}),(0,y.jsx)(r,{autoComplete:`bday-year`,id:`input-a3`,inputMode:`numeric`,name:`jaar`,size:4})]})]})]})},O={render:e=>(0,y.jsxs)(c,{"aria-describedby":`description-b error-b`,invalid:!0,legend:`Wanneer ben je geboren?`,children:[(0,y.jsx)(a,{id:`description-b`,children:`Bijvoorbeeld 1 1 2000.`}),(0,y.jsx)(s,{id:`error-b`,children:`Vul alle drie de velden in.`}),(0,y.jsxs)(i,{children:[(0,y.jsxs)(u,{gap:`small`,children:[(0,y.jsx)(d,{htmlFor:`input-b1`,inFieldSet:!0,children:`Dag`}),(0,y.jsx)(r,{autoComplete:`bday-day`,defaultValue:16,id:`input-b1`,inputMode:`numeric`,name:`dag`,size:2})]}),(0,y.jsxs)(u,{gap:`small`,children:[(0,y.jsx)(d,{htmlFor:`input-b2`,inFieldSet:!0,children:`Maand`}),(0,y.jsx)(r,{autoComplete:`bday-month`,defaultValue:8,id:`input-b2`,inputMode:`numeric`,name:`maand`,size:2})]}),(0,y.jsxs)(u,{gap:`small`,children:[(0,y.jsx)(d,{htmlFor:`input-b3`,inFieldSet:!0,children:`Jaar`}),(0,y.jsx)(r,{autoComplete:`bday-year`,id:`input-b3`,inputMode:`numeric`,invalid:!0,name:`jaar`,size:4})]})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`DateTime`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`,`MemorableDate`,`MemorableDateWithValidation`]}));A();export{S as DateTime,x as Default,w as Disabled,T as InAField,E as InAFieldWithValidation,C as Invalid,D as MemorableDate,O as MemorableDateWithValidation,k as __namedExportsOrder,b as default,A as n,v as t};