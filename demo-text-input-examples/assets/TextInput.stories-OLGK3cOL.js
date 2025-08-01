import{r as f,j as a,c as y,F as z,u as I,P as j,E as S}from"./iframe-CK1_HIgV.js";const t=f.forwardRef(({className:e,dir:r,invalid:i,type:s="text",...n},d)=>a.jsx("input",{...n,"aria-invalid":i||void 0,className:y("ams-text-input",e),dir:r??"auto",ref:d,type:s}));t.displayName="TextInput";try{t.displayName="TextInput",t.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const T=["email","tel","text","url"],F=f.forwardRef(({className:e,dir:r,invalid:i,type:s="text",...n},d)=>a.jsx("input",{...n,"aria-invalid":i||void 0,className:y("ams-text-input",e),dir:r??"auto",ref:d,type:s}));F.displayName="TextInput";F.__docgenInfo={description:"@see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-input--docs Text Input docs at Amsterdam Design System}",methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,E=(e,{args:r})=>{const[,i]=P(),s=r._value||"",n=d=>{i({_value:d.target.value})};return a.jsx(e,{args:{...r,_value:s,defaultValue:s,onChange:n}})},N={title:"Components/Forms/Text Input",component:t,args:{_value:"Amsterdam",disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."},type:{control:{labels:{undefined:"text (default)"}},options:[void 0,...T.filter(e=>e!=="text")]}},decorators:[E]},l={},o={args:{_value:"designsystem@amsterdam.nl",size:32,type:"email"}},c={args:{_value:"https://designsystem.amsterdam/",size:48,type:"url"}},u={args:{_value:"14020",size:16,type:"tel"}},p={args:{_value:"20",inputMode:"numeric",pattern:"[0-9]*",size:4,spellCheck:!1}},m={args:{_value:"12.75",pattern:"[0-9.,]*",size:4,spellCheck:!1}},v={args:{_value:"1011 PN",size:8}},g={args:{_value:"",placeholder:"bijv. 06-12345678",size:16}},h={args:{_value:"Deze waarde is ongeldig",invalid:!0}},_={args:{_value:"Deze waarde kan niet veranderd worden",disabled:!0}},x={args:{_value:""},render:e=>a.jsxs(z,{invalid:e.invalid,children:[a.jsx(I,{htmlFor:"input1",children:"Label"}),a.jsx(j,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(S,{id:"error1",children:"Foutmelding."}),a.jsx(t,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},b={args:{_value:"",invalid:!0},render:e=>a.jsxs(z,{invalid:e.invalid,children:[a.jsx(I,{htmlFor:"input2",children:"Label"}),a.jsx(j,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(S,{id:"error2",children:"Foutmelding."}),a.jsx(t,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    _value: 'designsystem@amsterdam.nl',
    size: 32,
    type: 'email'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    _value: 'https://designsystem.amsterdam/',
    size: 48,
    type: 'url'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    _value: '14020',
    size: 16,
    type: 'tel'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    _value: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 4,
    spellCheck: false
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    _value: '12.75',
    pattern: '[0-9.,]*',
    size: 4,
    spellCheck: false
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    _value: '1011 PN',
    size: 8
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    _value: '',
    placeholder: 'bijv. 06-12345678',
    size: 16
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    _value: 'Deze waarde is ongeldig',
    invalid: true
  }
}`,...h.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    _value: 'Deze waarde kan niet veranderd worden',
    disabled: true
  }
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    _value: ''
  },
  render: args => <Field invalid={args['invalid']}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args['invalid'] && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args['invalid'] ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    _value: '',
    invalid: true
  },
  render: args => <Field invalid={args['invalid']}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args['invalid'] && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description2\${args['invalid'] ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...b.parameters?.docs?.source}}};const A=["Default","EmailAddress","WebAddress","PhoneNumber","WholeNumber","DecimalNumber","Size","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],O=Object.freeze(Object.defineProperty({__proto__:null,DecimalNumber:m,Default:l,Disabled:_,EmailAddress:o,InAField:x,InAFieldWithValidation:b,Invalid:h,PhoneNumber:u,Placeholder:g,Size:v,WebAddress:c,WholeNumber:p,__namedExportsOrder:A,default:N},Symbol.toStringTag,{value:"Module"}));export{m as D,o as E,h as I,u as P,v as S,O as T,c as W,p as a,g as b,_ as c,x as d,b as e};
