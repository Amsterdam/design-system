import{j as r}from"./jsx-runtime-BlAj40OV.js";import{g as y,h as _,P as T,E}from"./index.esm-Di-LCyJU.js";import{c as O}from"./clsx-B-dksMZM.js";import{r as M}from"./index-Cs7sjTYM.js";const i=M.forwardRef(({className:e,invalid:L,...P},S)=>r.jsx("input",{...P,"aria-invalid":L||void 0,className:O("ams-time-input",e),ref:S,type:"time"}));i.displayName="TimeInput";try{i.displayName="TimeInput",i.__docgenInfo={description:"",displayName:"TimeInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Components/Forms/Time Input",component:i,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},a={},s={args:{invalid:!0}},d={args:{disabled:!0}},n={render:e=>r.jsxs(y,{invalid:e.invalid,children:[r.jsx(_,{htmlFor:"input1",children:"Label"}),r.jsx(T,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(E,{id:"error1",children:"Foutmelding."}),r.jsx(i,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},t={args:{invalid:!0},render:e=>r.jsxs(y,{invalid:e.invalid,children:[r.jsx(_,{htmlFor:"input2",children:"Label"}),r.jsx(T,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(E,{id:"error2",children:"Foutmelding."}),r.jsx(i,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};var o,l,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,j,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var F,x,I;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const A=["Default","Invalid","Disabled","InAField","InAFieldWithValidation"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disabled:d,InAField:n,InAFieldWithValidation:t,Invalid:s,__namedExportsOrder:A,default:z},Symbol.toStringTag,{value:"Module"}));export{d as D,s as I,W as T,n as a,t as b};
