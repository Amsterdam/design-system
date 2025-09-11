import{r as y,j as a,c as V,F as j,u as z,P as I,E as F}from"./iframe-DEjDzSdV.js";const r=y.forwardRef(({className:e,dir:f,invalid:h,type:v="text",...b},x)=>a.jsx("input",{...b,"aria-invalid":h||void 0,className:V("ams-text-input",e),dir:f??"auto",ref:x,type:v}));r.displayName="TextInput";try{r.displayName="TextInput",r.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const T=["email","tel","text","url"],S=y.forwardRef(({className:e,dir:f,invalid:h,type:v="text",...b},x)=>a.jsx("input",{...b,"aria-invalid":h||void 0,className:V("ams-text-input",e),dir:f??"auto",ref:x,type:v}));S.displayName="TextInput";S.__docgenInfo={description:"@see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-input--docs Text Input docs at Amsterdam Design System}",methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const _={title:"Components/Forms/Text Input",component:r,args:{defaultValue:"Amsterdam",disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."},type:{control:{labels:{undefined:"text (default)"}},options:[void 0,...T.filter(e=>e!=="text")]}}},s={},t={args:{defaultValue:"designsystem@amsterdam.nl",size:32,type:"email"}},i={args:{defaultValue:"https://designsystem.amsterdam/",size:48,type:"url"}},n={args:{defaultValue:"14020",size:16,type:"tel"}},d={args:{defaultValue:"20",inputMode:"numeric",pattern:"[0-9]*",size:4,spellCheck:!1}},l={args:{defaultValue:"12.75",pattern:"[0-9.,]*",size:4,spellCheck:!1}},o={args:{defaultValue:"1011 PN",size:8}},u={args:{defaultValue:"",placeholder:"bijv. 06-12345678",size:16}},c={args:{defaultValue:"Deze waarde is ongeldig",invalid:!0}},p={args:{defaultValue:"Deze waarde kan niet veranderd worden",disabled:!0}},m={args:{defaultValue:""},render:e=>a.jsxs(j,{invalid:e.invalid,children:[a.jsx(z,{htmlFor:"input1",children:"Label"}),a.jsx(I,{id:"description1",children:"Omschrijving."}),e.invalid&&a.jsx(F,{id:"error1",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},g={args:{defaultValue:"",invalid:!0},render:e=>a.jsxs(j,{invalid:e.invalid,children:[a.jsx(z,{htmlFor:"input2",children:"Label"}),a.jsx(I,{id:"description2",children:"Omschrijving."}),e.invalid&&a.jsx(F,{id:"error2",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    size: 32,
    type: 'email'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    size: 48,
    type: 'url'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    size: 16,
    type: 'tel'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 4,
    spellCheck: false
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '12.75',
    pattern: '[0-9.,]*',
    size: 4,
    spellCheck: false
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1011 PN',
    size: 8
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    placeholder: 'bijv. 06-12345678',
    size: 16
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde is ongeldig',
    invalid: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde kan niet veranderd worden',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ''
  },
  render: args => <Field invalid={args['invalid']}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args['invalid'] && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args['invalid'] ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    invalid: true
  },
  render: args => <Field invalid={args['invalid']}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args['invalid'] && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description2\${args['invalid'] ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...g.parameters?.docs?.source}}};const N=["Default","EmailAddress","WebAddress","PhoneNumber","WholeNumber","DecimalNumber","Size","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],D=Object.freeze(Object.defineProperty({__proto__:null,DecimalNumber:l,Default:s,Disabled:p,EmailAddress:t,InAField:m,InAFieldWithValidation:g,Invalid:c,PhoneNumber:n,Placeholder:u,Size:o,WebAddress:i,WholeNumber:d,__namedExportsOrder:N,default:_},Symbol.toStringTag,{value:"Module"}));export{l as D,t as E,c as I,n as P,o as S,D as T,i as W,d as a,u as b,p as c,m as d,g as e};
