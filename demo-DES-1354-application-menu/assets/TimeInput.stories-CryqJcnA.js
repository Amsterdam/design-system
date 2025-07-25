import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{F as o,d as l,P as c,E as p}from"./index.esm-DDzNsyt1.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as b}from"./index-G8LIXM5I.js";const i=b.forwardRef(({className:e,invalid:m,...u},g)=>r.jsx("input",{...u,"aria-invalid":m||void 0,className:v("ams-time-input",e),ref:g,type:"time"}));i.displayName="TimeInput";try{i.displayName="TimeInput",i.__docgenInfo={description:"",displayName:"TimeInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const h={title:"Components/Forms/Time Input",component:i,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},a={},s={args:{invalid:!0}},d={args:{disabled:!0}},n={render:e=>r.jsxs(o,{invalid:e.invalid,children:[r.jsx(l,{htmlFor:"input1",children:"Label"}),r.jsx(c,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(p,{id:"error1",children:"Foutmelding."}),r.jsx(i,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},t={args:{invalid:!0},render:e=>r.jsxs(o,{invalid:e.invalid,children:[r.jsx(l,{htmlFor:"input2",children:"Label"}),r.jsx(c,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(p,{id:"error2",children:"Foutmelding."}),r.jsx(i,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      <TimeInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...t.parameters?.docs?.source}}};const j=["Default","Invalid","Disabled","InAField","InAFieldWithValidation"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disabled:d,InAField:n,InAFieldWithValidation:t,Invalid:s,__namedExportsOrder:j,default:h},Symbol.toStringTag,{value:"Module"}));export{d as D,s as I,y as T,n as a,t as b};
