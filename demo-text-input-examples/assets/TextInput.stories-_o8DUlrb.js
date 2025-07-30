import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{F as z,d as I,P as j,E as _}from"./index.esm-CMapxPh_.js";import{c as A}from"./clsx-B-dksMZM.js";import{r as T}from"./index-G8LIXM5I.js";const n=T.forwardRef(({className:e,dir:r,invalid:s,type:t="text",...b},f)=>a.jsx("input",{...b,"aria-invalid":s||void 0,className:A("ams-text-input",e),dir:r??"auto",ref:f,type:t}));n.displayName="TextInput";try{n.displayName="TextInput",n.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const C=["email","tel","text","url"],S=T.forwardRef(({className:e,dir:r,invalid:s,type:t="text",...b},f)=>a.jsx("input",{...b,"aria-invalid":s||void 0,className:A("ams-text-input",e),dir:r??"auto",ref:f,type:t}));S.displayName="TextInput";S.__docgenInfo={description:"@see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-input--docs Text Input docs at Amsterdam Design System}",methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,E={title:"Components/Forms/Text Input",component:n,args:{disabled:!1,invalid:!1,value:"Amsterdam"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."},type:{control:{labels:{undefined:"text (default)"}},options:[void 0,...C.filter(e=>e!=="text")]}},render:e=>{const[,r]=y(),s=t=>{r({value:t.target.value})};return a.jsx(n,{onChange:s,...e})}},i={},o={args:{size:32,type:"email",value:"designsystem@amsterdam.nl"}},l={args:{size:48,type:"url",value:"https://designsystem.amsterdam/"}},d={args:{size:16,type:"tel",value:"14020"}},c={args:{inputMode:"numeric",pattern:"[0-9]*",size:4,spellCheck:!1,value:"20"}},u={args:{pattern:"[0-9.,]*",size:4,spellCheck:!1,value:"12.75"}},p={args:{size:8,value:"1011 PN"}},m={args:{placeholder:"bijv. 06-12345678",size:16,value:""}},g={args:{invalid:!0,value:"Deze waarde is ongeldig"}},v={args:{disabled:!0,value:"Deze waarde kan niet veranderd worden"}},h={args:{value:""},render:e=>{const[,r]=y(),s=t=>{r({value:t.target.value})};return a.jsxs(z,{invalid:e.invalid,children:[a.jsx(I,{htmlFor:"input1",children:"Label"}),a.jsx(j,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(_,{id:"error1",children:"Foutmelding."}),a.jsx(n,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",onChange:s,...e})]})}},x={args:{invalid:!0,value:""},render:e=>{const[,r]=y(),s=t=>{r({value:t.target.value})};return a.jsxs(z,{invalid:e.invalid,children:[a.jsx(I,{htmlFor:"input2",children:"Label"}),a.jsx(j,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(_,{id:"error2",children:"Foutmelding."}),a.jsx(n,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",onChange:s,...e})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32,
    type: 'email',
    value: 'designsystem@amsterdam.nl'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 48,
    type: 'url',
    value: 'https://designsystem.amsterdam/'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 16,
    type: 'tel',
    value: '14020'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 4,
    spellCheck: false,
    value: '20'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    pattern: '[0-9.,]*',
    size: 4,
    spellCheck: false,
    value: '12.75'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 8,
    value: '1011 PN'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  render: args => {
    const [, setArgs] = useArgs();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setArgs({
        value: event.target.value
      });
    };
    return <Field invalid={args.invalid}>
        <Label htmlFor="input1">Label</Label>
        <Paragraph id="description1" size="small">
          Omschrijving.
        </Paragraph>
        {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
        <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" onChange={handleChange} {...args} />
      </Field>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    value: ''
  },
  render: args => {
    const [, setArgs] = useArgs();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setArgs({
        value: event.target.value
      });
    };
    return <Field invalid={args.invalid}>
        <Label htmlFor="input2">Label</Label>
        <Paragraph id="description2" size="small">
          Omschrijving.
        </Paragraph>
        {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
        <TextInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" onChange={handleChange} {...args} />
      </Field>;
  }
}`,...x.parameters?.docs?.source}}};const F=["Default","EmailAddress","WebAddress","PhoneNumber","WholeNumber","DecimalNumber","Size","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],M=Object.freeze(Object.defineProperty({__proto__:null,DecimalNumber:u,Default:i,Disabled:v,EmailAddress:o,InAField:h,InAFieldWithValidation:x,Invalid:g,PhoneNumber:d,Placeholder:m,Size:p,WebAddress:l,WholeNumber:c,__namedExportsOrder:F,default:E},Symbol.toStringTag,{value:"Module"}));export{u as D,o as E,g as I,d as P,p as S,M as T,l as W,c as a,m as b,v as c,h as d,x as e};
