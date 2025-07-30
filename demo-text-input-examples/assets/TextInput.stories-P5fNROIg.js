import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{F as y,d as z,P as I,E as j}from"./index.esm-CMapxPh_.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as S}from"./index-G8LIXM5I.js";const r=S.forwardRef(({className:e,dir:s,invalid:t,type:i="text",...b},f)=>a.jsx("input",{...b,"aria-invalid":t||void 0,className:_("ams-text-input",e),dir:s??"auto",ref:f,type:i}));r.displayName="TextInput";try{r.displayName="TextInput",r.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const T=["email","tel","text","url"],F=S.forwardRef(({className:e,dir:s,invalid:t,type:i="text",...b},f)=>a.jsx("input",{...b,"aria-invalid":t||void 0,className:_("ams-text-input",e),dir:s??"auto",ref:f,type:i}));F.displayName="TextInput";F.__docgenInfo={description:"@see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-input--docs Text Input docs at Amsterdam Design System}",methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,E={title:"Components/Forms/Text Input",component:r,args:{disabled:!1,invalid:!1,value:"Amsterdam"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."},type:{control:{labels:{undefined:"text (default)"}},options:[void 0,...T.filter(e=>e!=="text")]}},render:e=>{const[,s]=P(),t=i=>{s({value:i.target.value})};return a.jsx(r,{onChange:t,...e})}},n={},d={args:{size:32,type:"email",value:"designsystem@amsterdam.nl"}},o={args:{size:48,type:"url",value:"https://designsystem.amsterdam/"}},l={args:{size:16,type:"tel",value:"14020"}},c={args:{inputMode:"numeric",pattern:"[0-9]*",size:4,spellCheck:!1,value:"20"}},p={args:{pattern:"[0-9.,]*",size:4,spellCheck:!1,value:"12.75"}},u={args:{size:8,value:"1011 PN"}},m={args:{placeholder:"bijv. 06-12345678",size:16,value:""}},g={args:{invalid:!0,value:"Deze waarde is ongeldig"}},v={args:{disabled:!0,value:"Deze waarde kan niet veranderd worden"}},h={args:{value:""},render:e=>a.jsxs(y,{invalid:e.invalid,children:[a.jsx(z,{htmlFor:"input1",children:"Label"}),a.jsx(I,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(j,{id:"error1",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},x={args:{invalid:!0,value:""},render:e=>a.jsxs(y,{invalid:e.invalid,children:[a.jsx(z,{htmlFor:"input2",children:"Label"}),a.jsx(I,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(j,{id:"error2",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32,
    type: 'email',
    value: 'designsystem@amsterdam.nl'
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 48,
    type: 'url',
    value: 'https://designsystem.amsterdam/'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 16,
    type: 'tel',
    value: '14020'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 4,
    spellCheck: false,
    value: '20'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    pattern: '[0-9.,]*',
    size: 4,
    spellCheck: false,
    value: '12.75'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 8,
    value: '1011 PN'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'bijv. 06-12345678',
    size: 16,
    value: ''
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    value: 'Deze waarde is ongeldig'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Deze waarde kan niet veranderd worden'
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const N=["Default","EmailAddress","WebAddress","PhoneNumber","WholeNumber","DecimalNumber","Size","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],W=Object.freeze(Object.defineProperty({__proto__:null,DecimalNumber:p,Default:n,Disabled:v,EmailAddress:d,InAField:h,InAFieldWithValidation:x,Invalid:g,PhoneNumber:l,Placeholder:m,Size:u,WebAddress:o,WholeNumber:c,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{p as D,d as E,g as I,l as P,u as S,W as T,o as W,c as a,m as b,v as c,h as d,x as e};
