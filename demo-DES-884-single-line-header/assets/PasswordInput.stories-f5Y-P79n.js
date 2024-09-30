import{j as e}from"./jsx-runtime-BlAj40OV.js";import{e as v,f as h,P as b,E as f}from"./index.esm-BSTcZ1WW.js";import{c as y}from"./clsx-B-dksMZM.js";import{r as I}from"./index-Cs7sjTYM.js";const i=I.forwardRef(({className:r,dir:j,invalid:F,...x},P)=>e.jsx("input",{...x,"aria-invalid":F||void 0,autoCorrect:"off",className:y("ams-password-input",r),dir:j??"auto",ref:P,spellCheck:"false",type:"password"}));i.displayName="PasswordInput";try{i.displayName="PasswordInput",i.__docgenInfo={description:"",displayName:"PasswordInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const _={title:"Components/Forms/Password Input",component:i,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},a={},s={render:r=>e.jsxs(v,{invalid:r.invalid,children:[e.jsx(h,{htmlFor:"input1",children:"Label"}),e.jsx(b,{id:"description1",size:"small",children:"Omschrijving."}),r.invalid&&e.jsx(f,{id:"error1",children:"Foutmelding."}),e.jsx(i,{"aria-describedby":`description1${r.invalid?" error1":""}`,id:"input1",...r})]})},d={args:{invalid:!0},render:r=>e.jsxs(v,{invalid:r.invalid,children:[e.jsx(h,{htmlFor:"input2",children:"Label"}),e.jsx(b,{id:"description2",size:"small",children:"Omschrijving."}),r.invalid&&e.jsx(f,{id:"error2",children:"Foutmelding."}),e.jsx(i,{"aria-describedby":`description2${r.invalid?" error2":""}`,id:"input2",...r})]})};var o,n,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var l,p,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=d.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const w=["Default","InAField","InAFieldWithValidation"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InAField:s,InAFieldWithValidation:d,__namedExportsOrder:w,default:_},Symbol.toStringTag,{value:"Module"}));export{s as I,S as P,d as a};
