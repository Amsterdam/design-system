import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{e as L,f as S,P,E as O}from"./index.esm-CfNUYwVi.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as V}from"./index-RigO-4kf.js";const a=V.forwardRef(({className:e,invalid:M,type:z="date",...A},T)=>r.jsx("input",{...A,"aria-invalid":M||void 0,className:N("ams-date-input",e),ref:T,type:z}));a.displayName="DateInput";try{a.displayName="DateInput",a.__docgenInfo={description:"",displayName:"DateInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"date"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"datetime-local"'}]}}}}}catch{}const $={title:"Components/Forms/Date Input",component:a,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},i={},s={args:{type:"datetime-local"}},t={args:{invalid:!0}},d={args:{disabled:!0}},n={render:e=>r.jsxs(L,{invalid:e.invalid,children:[r.jsx(S,{htmlFor:"input1",children:"Label"}),r.jsx(P,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(O,{id:"error1",children:"Foutmelding."}),r.jsx(a,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},o={args:{invalid:!0},render:e=>r.jsxs(L,{invalid:e.invalid,children:[r.jsx(S,{htmlFor:"input2",children:"Label"}),r.jsx(P,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(O,{id:"error2",children:"Foutmelding."}),r.jsx(a,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,h,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,j,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var F,x,I;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var D,_,E;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const W=["Default","DateTime","Invalid","Disabled","InAField","InAFieldWithValidation"],C=Object.freeze(Object.defineProperty({__proto__:null,DateTime:s,Default:i,Disabled:d,InAField:n,InAFieldWithValidation:o,Invalid:t,__namedExportsOrder:W,default:$},Symbol.toStringTag,{value:"Module"}));export{C as D,t as I,s as a,d as b,n as c,o as d};
