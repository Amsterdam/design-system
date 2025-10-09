import{r as x,j as a,c as y,F as V,t as I,P as j,E as z}from"./iframe-CCvFtYJ5.js";const r=x.forwardRef(({className:e,dir:g,invalid:f,type:h="text",...v},b)=>a.jsx("input",{...v,"aria-invalid":f||void 0,className:y("ams-text-input",e),dir:g??"auto",ref:b,type:h}));r.displayName="TextInput";try{r.displayName="TextInput",r.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const S=["email","tel","text","url"],F=x.forwardRef(({className:e,dir:g,invalid:f,type:h="text",...v},b)=>a.jsx("input",{...v,"aria-invalid":f||void 0,className:y("ams-text-input",e),dir:g??"auto",ref:b,type:h}));F.displayName="TextInput";F.__docgenInfo={description:"@see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-input--docs Text Input docs at Amsterdam Design System}",methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const T={title:"Components/Forms/Text Input",component:r,args:{defaultValue:"Amsterdam",disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."},type:{control:{labels:{undefined:"text (default)"},type:"radio"},options:[void 0,...S.filter(e=>e!=="text")]}}},s={},t={args:{defaultValue:"designsystem@amsterdam.nl",size:30,type:"email"}},i={args:{defaultValue:"https://designsystem.amsterdam/",size:40,type:"url"}},n={args:{defaultValue:"14020",size:15,type:"tel"}},d={args:{defaultValue:"20",inputMode:"numeric",pattern:"[0-9]*",size:5,spellCheck:!1}},l={args:{defaultValue:"12.75",pattern:"[0-9.,]*",size:5,spellCheck:!1}},o={args:{defaultValue:"1011 PN",size:7}},u={args:{defaultValue:"Deze waarde is ongeldig",invalid:!0}},c={args:{defaultValue:"Deze waarde kan niet veranderd worden",disabled:!0}},p={args:{defaultValue:""},render:e=>a.jsxs(V,{invalid:e.invalid,children:[a.jsx(I,{htmlFor:"input1",children:"Label"}),a.jsx(j,{id:"description1",children:"Omschrijving."}),e.invalid&&a.jsx(z,{id:"error1",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},m={args:{defaultValue:"",invalid:!0},render:e=>a.jsxs(V,{invalid:e.invalid,children:[a.jsx(I,{htmlFor:"input2",children:"Label"}),a.jsx(j,{id:"description2",children:"Omschrijving."}),e.invalid&&a.jsx(z,{id:"error2",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    size: 30,
    type: 'email'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    size: 40,
    type: 'url'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    size: 15,
    type: 'tel'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '12.75',
    pattern: '[0-9.,]*',
    size: 5,
    spellCheck: false
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1011 PN',
    size: 7
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde is ongeldig',
    invalid: true
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde kan niet veranderd worden',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ''
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...m.parameters?.docs?.source}}};const _=["Default","EmailAddress","WebAddress","PhoneNumber","WholeNumber","DecimalNumber","Size","Invalid","Disabled","InAField","InAFieldWithValidation"],P=Object.freeze(Object.defineProperty({__proto__:null,DecimalNumber:l,Default:s,Disabled:c,EmailAddress:t,InAField:p,InAFieldWithValidation:m,Invalid:u,PhoneNumber:n,Size:o,WebAddress:i,WholeNumber:d,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{l as D,t as E,u as I,n as P,o as S,P as T,i as W,d as a,c as b,p as c,m as d};
