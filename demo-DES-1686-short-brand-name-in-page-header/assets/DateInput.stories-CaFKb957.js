import{r as C,j as e,c as M,Y as h,i as r,P as b,Z as g,$ as v,R as j,C as i,a0 as n}from"./iframe-R1Uzw9bu.js";const t=C.forwardRef(({className:a,invalid:x,type:y="date",...F},S)=>e.jsx("input",{...F,"aria-invalid":x||void 0,className:M("ams-date-input",a),ref:S,type:y}));t.displayName="DateInput";try{t.displayName="DateInput",t.__docgenInfo={description:"",displayName:"DateInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"date"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"datetime-local"'}]}}}}}catch{}const D={title:"Components/Forms/Date Input",component:t,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},d={},s={args:{type:"datetime-local"}},o={args:{invalid:!0}},l={args:{disabled:!0}},p={render:a=>e.jsxs(h,{invalid:a.invalid,children:[e.jsx(r,{htmlFor:"input1",children:"Label"}),e.jsx(b,{id:"description1",children:"Omschrijving."}),a.invalid&&e.jsx(g,{id:"error1",children:"Foutmelding."}),e.jsx(t,{"aria-describedby":`description1${a.invalid?" error1":""}`,id:"input1",...a})]})},u={args:{invalid:!0},render:a=>e.jsxs(h,{invalid:a.invalid,children:[e.jsx(r,{htmlFor:"input2",children:"Label"}),e.jsx(b,{id:"description2",children:"Omschrijving."}),a.invalid&&e.jsx(g,{id:"error2",children:"Foutmelding."}),e.jsx(t,{"aria-describedby":`description2${a.invalid?" error2":""}`,id:"input2",...a})]})},m={render:a=>e.jsxs(v,{"aria-describedby":"description-a",legend:"Wanneer ben je geboren?",children:[e.jsx(b,{id:"description-a",children:"Bijvoorbeeld 1 1 2000."}),e.jsxs(j,{children:[e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-a1",inFieldSet:!0,children:"Dag"}),e.jsx(n,{autoComplete:"bday-day",id:"input-a1",inputMode:"numeric",name:"dag",size:2})]}),e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-a2",inFieldSet:!0,children:"Maand"}),e.jsx(n,{autoComplete:"bday-month",id:"input-a2",inputMode:"numeric",name:"maand",size:2})]}),e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-a3",inFieldSet:!0,children:"Jaar"}),e.jsx(n,{autoComplete:"bday-year",id:"input-a3",inputMode:"numeric",name:"jaar",size:4})]})]})]})},c={render:a=>e.jsxs(v,{"aria-describedby":"description-b error-b",invalid:!0,legend:"Wanneer ben je geboren?",children:[e.jsx(b,{id:"description-b",children:"Bijvoorbeeld 1 1 2000."}),e.jsx(g,{id:"error-b",children:"De datum moet in het verleden liggen."}),e.jsxs(j,{children:[e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-b1",inFieldSet:!0,children:"Dag"}),e.jsx(n,{autoComplete:"bday-day",id:"input-b1",inputMode:"numeric",invalid:!0,name:"dag",size:2})]}),e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-b2",inFieldSet:!0,children:"Maand"}),e.jsx(n,{autoComplete:"bday-month",id:"input-b2",inputMode:"numeric",invalid:!0,name:"maand",size:2})]}),e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-b3",inFieldSet:!0,children:"Jaar"}),e.jsx(n,{autoComplete:"bday-year",id:"input-b3",inputMode:"numeric",invalid:!0,name:"jaar",size:4})]})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const f=["Default","DateTime","Invalid","Disabled","InAField","InAFieldWithValidation","MemorableDate","MemorableDateWithValidation"],L=Object.freeze(Object.defineProperty({__proto__:null,DateTime:s,Default:d,Disabled:l,InAField:p,InAFieldWithValidation:u,Invalid:o,MemorableDate:m,MemorableDateWithValidation:c,__namedExportsOrder:f,default:D},Symbol.toStringTag,{value:"Module"}));export{t as D,o as I,m as M,L as a,c as b,s as c,l as d,p as e,u as f,D as m};
