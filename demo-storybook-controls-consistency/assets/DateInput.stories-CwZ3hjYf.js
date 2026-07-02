import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-BTu_umhU.js";import{t as i}from"./jsx-runtime-BCDDjCIb.js";import{n as a,t as o}from"./iframe-yVVtvaQN.js";import{J as s,K as c,L as l,P as u,f as d,m as f,p,u as m,w as h}from"./index.esm-CXl0WGPA.js";import{Ht as g,t as _}from"./src-Dk4zeSri.js";import{f as v,s as y}from"./argTypes-K2rctYNz.js";var b,x,S,C,w=t((()=>{b=i(),a(),x=n(r()),S=[`date`,`datetime-local`],C=(0,x.forwardRef)(({className:e,invalid:t,type:n=`date`,...r},i)=>(0,b.jsx)(`input`,{...r,"aria-invalid":t||void 0,className:o(`ams-date-input`,e),ref:i,type:n})),C.displayName=`DateInput`,C.__docgenInfo={description:`Helps users enter a date.

@see {@link https://designsystem.amsterdam/?path=/docs/components-forms-date-input--docs Date Input docs at Amsterdam Design System}`,methods:[],displayName:`DateInput`,props:{type:{defaultValue:{value:`'date'`,computed:!1},required:!1}}}})),T=e({DateTime:()=>k,Default:()=>O,Disabled:()=>j,InAField:()=>M,InAFieldWithValidation:()=>N,Invalid:()=>A,MemorableDate:()=>P,MemorableDateWithValidation:()=>F,__namedExportsOrder:()=>I,default:()=>D}),E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{s(),w(),_(),v(),E=i(),D={title:`Components/Forms/Date Input`,component:g,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:y,onChange:{table:{disable:!1}},type:{control:{labels:{undefined:`date (default)`},type:`radio`},options:[void 0,...S.filter(e=>e!==`date`)]}}},O={},k={args:{type:`datetime-local`}},A={args:{invalid:!0}},j={args:{disabled:!0}},M={render:e=>(0,E.jsxs)(p,{invalid:e.invalid,children:[(0,E.jsx)(h,{htmlFor:`input1`,children:`Label`}),(0,E.jsx)(u,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,E.jsx)(d,{id:`error1`,children:`Foutmelding.`}),(0,E.jsx)(g,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},N={args:{invalid:!0},render:e=>(0,E.jsxs)(p,{invalid:e.invalid,children:[(0,E.jsx)(h,{htmlFor:`input2`,children:`Label`}),(0,E.jsx)(u,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,E.jsx)(d,{id:`error2`,children:`Foutmelding.`}),(0,E.jsx)(g,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},P={render:e=>(0,E.jsxs)(f,{"aria-describedby":`description-a`,legend:`Wanneer ben je geboren?`,children:[(0,E.jsx)(u,{id:`description-a`,children:`Bijvoorbeeld 1 1 2000.`}),(0,E.jsxs)(l,{children:[(0,E.jsxs)(m,{gap:`small`,children:[(0,E.jsx)(h,{htmlFor:`input-a1`,inFieldSet:!0,children:`Dag`}),(0,E.jsx)(c,{autoComplete:`bday-day`,id:`input-a1`,inputMode:`numeric`,name:`dag`,size:2})]}),(0,E.jsxs)(m,{gap:`small`,children:[(0,E.jsx)(h,{htmlFor:`input-a2`,inFieldSet:!0,children:`Maand`}),(0,E.jsx)(c,{autoComplete:`bday-month`,id:`input-a2`,inputMode:`numeric`,name:`maand`,size:2})]}),(0,E.jsxs)(m,{gap:`small`,children:[(0,E.jsx)(h,{htmlFor:`input-a3`,inFieldSet:!0,children:`Jaar`}),(0,E.jsx)(c,{autoComplete:`bday-year`,id:`input-a3`,inputMode:`numeric`,name:`jaar`,size:4})]})]})]})},F={render:e=>(0,E.jsxs)(f,{"aria-describedby":`description-b error-b`,invalid:!0,legend:`Wanneer ben je geboren?`,children:[(0,E.jsx)(u,{id:`description-b`,children:`Bijvoorbeeld 1 1 2000.`}),(0,E.jsx)(d,{id:`error-b`,children:`Vul alle drie de velden in.`}),(0,E.jsxs)(l,{children:[(0,E.jsxs)(m,{gap:`small`,children:[(0,E.jsx)(h,{htmlFor:`input-b1`,inFieldSet:!0,children:`Dag`}),(0,E.jsx)(c,{autoComplete:`bday-day`,defaultValue:16,id:`input-b1`,inputMode:`numeric`,name:`dag`,size:2})]}),(0,E.jsxs)(m,{gap:`small`,children:[(0,E.jsx)(h,{htmlFor:`input-b2`,inFieldSet:!0,children:`Maand`}),(0,E.jsx)(c,{autoComplete:`bday-month`,defaultValue:8,id:`input-b2`,inputMode:`numeric`,name:`maand`,size:2})]}),(0,E.jsxs)(m,{gap:`small`,children:[(0,E.jsx)(h,{htmlFor:`input-b3`,inFieldSet:!0,children:`Jaar`}),(0,E.jsx)(c,{autoComplete:`bday-year`,id:`input-b3`,inputMode:`numeric`,invalid:!0,name:`jaar`,size:4})]})]})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`Default`,`DateTime`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`,`MemorableDate`,`MemorableDateWithValidation`]}));L();export{k as DateTime,O as Default,j as Disabled,M as InAField,N as InAFieldWithValidation,A as Invalid,P as MemorableDate,F as MemorableDateWithValidation,I as __namedExportsOrder,D as default,L as n,T as t};