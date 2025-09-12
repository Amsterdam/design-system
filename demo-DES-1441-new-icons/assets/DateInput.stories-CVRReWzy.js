import{r as C,j as e,c as D,F as h,u as r,P as b,E as g,v as j,R as v,C as i,T as n}from"./iframe-BMkNnuEk.js";const s=C.forwardRef(({className:a,invalid:x,type:y="date",...F},M)=>e.jsx("input",{...F,"aria-invalid":x||void 0,className:D("ams-date-input",a),ref:M,type:y}));s.displayName="DateInput";try{s.displayName="DateInput",s.__docgenInfo={description:"",displayName:"DateInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"date"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"datetime-local"'}]}}}}}catch{}const I={title:"Components/Forms/Date Input",component:s,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},t={},d={args:{type:"datetime-local"}},l={args:{invalid:!0}},o={args:{disabled:!0}},m={render:a=>e.jsxs(h,{invalid:a.invalid,children:[e.jsx(r,{htmlFor:"input1",children:"Label"}),e.jsx(b,{id:"description1",children:"Omschrijving."}),a.invalid&&e.jsx(g,{id:"error1",children:"Foutmelding."}),e.jsx(s,{"aria-describedby":`description1${a.invalid?" error1":""}`,id:"input1",...a})]})},p={args:{invalid:!0},render:a=>e.jsxs(h,{invalid:a.invalid,children:[e.jsx(r,{htmlFor:"input2",children:"Label"}),e.jsx(b,{id:"description2",children:"Omschrijving."}),a.invalid&&e.jsx(g,{id:"error2",children:"Foutmelding."}),e.jsx(s,{"aria-describedby":`description2${a.invalid?" error2":""}`,id:"input2",...a})]})},u={render:()=>e.jsxs(j,{"aria-describedby":"description-a",legend:"Wanneer ben je geboren?",children:[e.jsx(b,{className:"ams-mb-s",id:"description-a",children:"Bijvoorbeeld 1 1 2000."}),e.jsxs(v,{children:[e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-a1",children:"Dag"}),e.jsx(n,{autoComplete:"bday-day",id:"input-a1",inputMode:"numeric",name:"dag",size:2})]}),e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-a2",children:"Maand"}),e.jsx(n,{autoComplete:"bday-month",id:"input-a2",inputMode:"numeric",name:"maand",size:2})]}),e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-a3",children:"Jaar"}),e.jsx(n,{autoComplete:"bday-year",id:"input-a3",inputMode:"numeric",name:"jaar",size:4})]})]})]})},c={render:()=>e.jsxs(j,{"aria-describedby":"description-b error-b",invalid:!0,legend:"Wanneer ben je geboren?",children:[e.jsx(b,{className:"ams-mb-s",id:"description-b",children:"Bijvoorbeeld 1 1 2000."}),e.jsx(g,{className:"ams-mb-s",id:"error-b",children:"De datum moet in het verleden liggen."}),e.jsxs(v,{children:[e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-b1",children:"Dag"}),e.jsx(n,{autoComplete:"bday-day",id:"input-b1",inputMode:"numeric",invalid:!0,name:"dag",size:2})]}),e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-b2",children:"Maand"}),e.jsx(n,{autoComplete:"bday-month",id:"input-b2",inputMode:"numeric",invalid:!0,name:"maand",size:2})]}),e.jsxs(i,{gap:"small",children:[e.jsx(r,{htmlFor:"input-b3",children:"Jaar"}),e.jsx(n,{autoComplete:"bday-year",id:"input-b3",inputMode:"numeric",invalid:!0,name:"jaar",size:4})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet aria-describedby="description-a" legend="Wanneer ben je geboren?">
      <Paragraph className="ams-mb-s" id="description-a">
        Bijvoorbeeld 1 1 2000.
      </Paragraph>
      <Row>
        <Column gap="small">
          <Label htmlFor="input-a1">Dag</Label>
          <TextInput autoComplete="bday-day" id="input-a1" inputMode="numeric" name="dag" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-a2">Maand</Label>
          <TextInput autoComplete="bday-month" id="input-a2" inputMode="numeric" name="maand" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-a3">Jaar</Label>
          <TextInput autoComplete="bday-year" id="input-a3" inputMode="numeric" name="jaar" size={4} />
        </Column>
      </Row>
    </FieldSet>
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet aria-describedby="description-b error-b" invalid legend="Wanneer ben je geboren?">
      <Paragraph className="ams-mb-s" id="description-b">
        Bijvoorbeeld 1 1 2000.
      </Paragraph>
      <ErrorMessage className="ams-mb-s" id="error-b">
        De datum moet in het verleden liggen.
      </ErrorMessage>
      <Row>
        <Column gap="small">
          <Label htmlFor="input-b1">Dag</Label>
          <TextInput autoComplete="bday-day" id="input-b1" inputMode="numeric" invalid name="dag" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-b2">Maand</Label>
          <TextInput autoComplete="bday-month" id="input-b2" inputMode="numeric" invalid name="maand" size={2} />
        </Column>
        <Column gap="small">
          <Label htmlFor="input-b3">Jaar</Label>
          <TextInput autoComplete="bday-year" id="input-b3" inputMode="numeric" invalid name="jaar" size={4} />
        </Column>
      </Row>
    </FieldSet>
}`,...c.parameters?.docs?.source}}};const L=["Default","DateTime","Invalid","Disabled","InAField","InAFieldWithValidation","MemorableDate","MemorableDateWithValidation"],S=Object.freeze(Object.defineProperty({__proto__:null,DateTime:d,Default:t,Disabled:o,InAField:m,InAFieldWithValidation:p,Invalid:l,MemorableDate:u,MemorableDateWithValidation:c,__namedExportsOrder:L,default:I},Symbol.toStringTag,{value:"Module"}));export{S as D,l as I,u as M,c as a,d as b,o as c,m as d,p as e};
