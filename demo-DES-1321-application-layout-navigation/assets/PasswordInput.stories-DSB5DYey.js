import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as n,d as t,P as l,E as c}from"./index.esm-DsOKWecX.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as h}from"./index-G8LIXM5I.js";const a=h.forwardRef(({className:r,dir:p,invalid:m,...u},g)=>e.jsx("input",{...u,"aria-invalid":m||void 0,autoCorrect:"off",className:v("ams-password-input",r),dir:p??"auto",ref:g,spellCheck:"false",type:"password"}));a.displayName="PasswordInput";try{a.displayName="PasswordInput",a.__docgenInfo={description:"",displayName:"PasswordInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const b={title:"Components/Forms/Password Input",component:a,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."}}},i={},s={args:{size:10}},d={render:r=>e.jsxs(n,{invalid:r.invalid,children:[e.jsx(t,{htmlFor:"input1",children:"Label"}),e.jsx(l,{id:"description1",size:"small",children:"Omschrijving."}),r.invalid&&e.jsx(c,{id:"error1",children:"Foutmelding."}),e.jsx(a,{"aria-describedby":`description1${r.invalid?" error1":""}`,id:"input1",...r})]})},o={args:{invalid:!0},render:r=>e.jsxs(n,{invalid:r.invalid,children:[e.jsx(t,{htmlFor:"input2",children:"Label"}),e.jsx(l,{id:"description2",size:"small",children:"Omschrijving."}),r.invalid&&e.jsx(c,{id:"error2",children:"Foutmelding."}),e.jsx(a,{"aria-describedby":`description2${r.invalid?" error2":""}`,id:"input2",...r})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 10
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...o.parameters?.docs?.source}}};const f=["Default","Size","InAField","InAFieldWithValidation"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InAField:d,InAFieldWithValidation:o,Size:s,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{d as I,y as P,s as S,o as a};
