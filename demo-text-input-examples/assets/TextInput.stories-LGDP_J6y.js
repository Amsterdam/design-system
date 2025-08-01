import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{F as z,d as j,P as I,E as S}from"./index.esm-CMapxPh_.js";import{c as F}from"./clsx-B-dksMZM.js";import{r as y}from"./index-G8LIXM5I.js";const n=y.forwardRef(({className:e,dir:r,invalid:t,type:i="text",...o},s)=>a.jsx("input",{...o,"aria-invalid":t||void 0,className:F("ams-text-input",e),dir:r??"auto",ref:s,type:i}));n.displayName="TextInput";try{n.displayName="TextInput",n.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const _=["email","tel","text","url"],T=y.forwardRef(({className:e,dir:r,invalid:t,type:i="text",...o},s)=>a.jsx("input",{...o,"aria-invalid":t||void 0,className:F("ams-text-input",e),dir:r??"auto",ref:s,type:i}));T.displayName="TextInput";T.__docgenInfo={description:"@see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-input--docs Text Input docs at Amsterdam Design System}",methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const N=(e,r)=>{const[t,i]=y.useState(r.value);y.useEffect(()=>{r.value!==t&&i(r.value)},[r.value]);const o=s=>{console.log("handleChange",s.target.value),i(s.target.value),r.onChange&&r.onChange(s)};return a.jsx(e,{...r,onChange:o,value:t})},P={title:"Components/Forms/Text Input",component:n,args:{disabled:!1,invalid:!1,value:"Amsterdam"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."},type:{control:{labels:{undefined:"text (default)"}},options:[void 0,..._.filter(e=>e!=="text")]}},decorators:[N]},l={},d={args:{size:32,type:"email",value:"designsystem@amsterdam.nl"}},c={args:{size:48,type:"url",value:"https://designsystem.amsterdam/"}},u={args:{size:16,type:"tel",value:"14020"}},p={args:{inputMode:"numeric",pattern:"[0-9]*",size:4,spellCheck:!1,value:"20"}},m={args:{pattern:"[0-9.,]*",size:4,spellCheck:!1,value:"12.75"}},v={args:{size:8,value:"1011 PN"}},g={args:{placeholder:"bijv. 06-12345678",size:16,value:""}},h={args:{invalid:!0,value:"Deze waarde is ongeldig"}},x={args:{disabled:!0,value:"Deze waarde kan niet veranderd worden"}},f={args:{value:""},render:e=>a.jsxs(z,{invalid:e.invalid,children:[a.jsx(j,{htmlFor:"input1",children:"Label"}),a.jsx(I,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(S,{id:"error1",children:"Foutmelding."}),a.jsx(n,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},b={args:{invalid:!0,value:""},render:e=>a.jsxs(z,{invalid:e.invalid,children:[a.jsx(j,{htmlFor:"input2",children:"Label"}),a.jsx(I,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(S,{id:"error2",children:"Foutmelding."}),a.jsx(n,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32,
    type: 'email',
    value: 'designsystem@amsterdam.nl'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 48,
    type: 'url',
    value: 'https://designsystem.amsterdam/'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 16,
    type: 'tel',
    value: '14020'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 4,
    spellCheck: false,
    value: '20'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    pattern: '[0-9.,]*',
    size: 4,
    spellCheck: false,
    value: '12.75'
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 8,
    value: '1011 PN'
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'bijv. 06-12345678',
    size: 16,
    value: ''
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    value: 'Deze waarde is ongeldig'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Deze waarde kan niet veranderd worden'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: ''
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    value: ''
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...b.parameters?.docs?.source}}};const E=["Default","EmailAddress","WebAddress","PhoneNumber","WholeNumber","DecimalNumber","Size","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],L=Object.freeze(Object.defineProperty({__proto__:null,DecimalNumber:m,Default:l,Disabled:x,EmailAddress:d,InAField:f,InAFieldWithValidation:b,Invalid:h,PhoneNumber:u,Placeholder:g,Size:v,WebAddress:c,WholeNumber:p,__namedExportsOrder:E,default:P},Symbol.toStringTag,{value:"Module"}));export{m as D,d as E,h as I,u as P,v as S,L as T,c as W,p as a,g as b,x as c,f as d,b as e};
