import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{F as l,c,P as p,E as m}from"./index.esm-BvC9Tys5.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as f}from"./index-G8LIXM5I.js";const a=f.forwardRef(({className:e,invalid:u,type:g="date",...v},h)=>r.jsx("input",{...v,"aria-invalid":u||void 0,className:b("ams-date-input",e),ref:h,type:g}));a.displayName="DateInput";try{a.displayName="DateInput",a.__docgenInfo={description:"",displayName:"DateInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"date"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"datetime-local"'}]}}}}}catch{}const j={title:"Components/Forms/Date Input",component:a,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},i={},s={args:{type:"datetime-local"}},t={args:{invalid:!0}},d={args:{disabled:!0}},n={render:e=>r.jsxs(l,{invalid:e.invalid,children:[r.jsx(c,{htmlFor:"input1",children:"Label"}),r.jsx(p,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(m,{id:"error1",children:"Foutmelding."}),r.jsx(a,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},o={args:{invalid:!0},render:e=>r.jsxs(l,{invalid:e.invalid,children:[r.jsx(c,{htmlFor:"input2",children:"Label"}),r.jsx(p,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(m,{id:"error2",children:"Foutmelding."}),r.jsx(a,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...o.parameters?.docs?.source}}};const F=["Default","DateTime","Invalid","Disabled","InAField","InAFieldWithValidation"],_=Object.freeze(Object.defineProperty({__proto__:null,DateTime:s,Default:i,Disabled:d,InAField:n,InAFieldWithValidation:o,Invalid:t,__namedExportsOrder:F,default:j},Symbol.toStringTag,{value:"Module"}));export{_ as D,t as I,s as a,d as b,n as c,o as d};
