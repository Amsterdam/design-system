import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as j,d as F,P as x,E as P}from"./index.esm-Dc4dH97g.js";import{c as z}from"./clsx-B-dksMZM.js";import{r as S}from"./index-G8LIXM5I.js";const a=S.forwardRef(({className:r,dir:y,invalid:I,..._},w)=>e.jsx("input",{..._,"aria-invalid":I||void 0,autoCorrect:"off",className:z("ams-password-input",r),dir:y??"auto",ref:w,spellCheck:"false",type:"password"}));a.displayName="PasswordInput";try{a.displayName="PasswordInput",a.__docgenInfo={description:"",displayName:"PasswordInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"Components/Forms/Password Input",component:a,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."}}},i={},s={args:{size:10}},d={render:r=>e.jsxs(j,{invalid:r.invalid,children:[e.jsx(F,{htmlFor:"input1",children:"Label"}),e.jsx(x,{id:"description1",size:"small",children:"Omschrijving."}),r.invalid&&e.jsx(P,{id:"error1",children:"Foutmelding."}),e.jsx(a,{"aria-describedby":`description1${r.invalid?" error1":""}`,id:"input1",...r})]})},o={args:{invalid:!0},render:r=>e.jsxs(j,{invalid:r.invalid,children:[e.jsx(F,{htmlFor:"input2",children:"Label"}),e.jsx(x,{id:"description2",size:"small",children:"Omschrijving."}),r.invalid&&e.jsx(P,{id:"error2",children:"Foutmelding."}),e.jsx(a,{"aria-describedby":`description2${r.invalid?" error2":""}`,id:"input2",...r})]})};var n,t,l;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(t=i.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 10
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,v;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...(v=(g=d.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,b,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const L=["Default","Size","InAField","InAFieldWithValidation"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InAField:d,InAFieldWithValidation:o,Size:s,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{d as I,$ as P,s as S,o as a};
