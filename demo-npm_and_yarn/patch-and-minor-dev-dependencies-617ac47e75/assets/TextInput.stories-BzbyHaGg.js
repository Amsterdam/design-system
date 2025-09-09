import{r as I,j as a,c as S,F as h,u as v,P as b,E as f}from"./iframe-BJHrSXXD.js";const r=I.forwardRef(({className:e,dir:x,invalid:y,type:j="text",...F},V)=>a.jsx("input",{...F,"aria-invalid":y||void 0,className:S("ams-text-input",e),dir:x??"auto",ref:V,type:j}));r.displayName="TextInput";try{r.displayName="TextInput",r.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const P={title:"Components/Forms/Text Input",component:r,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."}}},s={},i={args:{defaultValue:"designsystem@amsterdam.nl",type:"email"}},t={args:{defaultValue:"https://designsystem.amsterdam/",type:"url"}},n={args:{defaultValue:"14020",type:"tel"}},d={args:{defaultValue:"1",inputMode:"numeric",pattern:"[0-9]*",size:5,spellCheck:!1}},l={args:{defaultValue:"1.99",pattern:"[0-9.,]*",size:5,spellCheck:!1}},o={args:{size:10}},c={args:{placeholder:"Placeholder text"}},u={args:{defaultValue:"Invalid value",invalid:!0}},p={args:{defaultValue:"Disabled input",disabled:!0}},m={render:e=>a.jsxs(h,{invalid:e.invalid,children:[a.jsx(v,{htmlFor:"input1",children:"Label"}),a.jsx(b,{id:"description1",children:"Omschrijving."}),e.invalid&&a.jsx(f,{id:"error1",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},g={args:{invalid:!0},render:e=>a.jsxs(h,{invalid:e.invalid,children:[a.jsx(v,{htmlFor:"input2",children:"Label"}),a.jsx(b,{id:"description2",children:"Omschrijving."}),e.invalid&&a.jsx(f,{id:"error2",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    type: 'email'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    type: 'url'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    type: 'tel'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1.99',
    pattern: '[0-9.,]*',
    size: 5,
    spellCheck: false
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 10
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Invalid value',
    invalid: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled input',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...g.parameters?.docs?.source}}};const _=["Default","EmailAddress","WebAddress","PhoneNumber","WholeNumber","DecimalNumber","Size","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],E=Object.freeze(Object.defineProperty({__proto__:null,DecimalNumber:l,Default:s,Disabled:p,EmailAddress:i,InAField:m,InAFieldWithValidation:g,Invalid:u,PhoneNumber:n,Placeholder:c,Size:o,WebAddress:t,WholeNumber:d,__namedExportsOrder:_,default:P},Symbol.toStringTag,{value:"Module"}));export{l as D,i as E,u as I,n as P,o as S,E as T,t as W,d as a,c as b,p as c,m as d,g as e};
