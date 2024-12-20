import{j as a}from"./jsx-runtime-BjgbQsUx.js";import{b as q,c as R,P as k,E as w}from"./index.esm-CMrPF3-k.js";import{c as K}from"./clsx-B-dksMZM.js";import{r as Q}from"./index-RigO-4kf.js";const r=Q.forwardRef(({className:e,dir:C,invalid:B,type:G="text",...H},J)=>a.jsx("input",{...H,"aria-invalid":B||void 0,className:K("ams-text-input",e),dir:C??"auto",ref:J,type:G}));r.displayName="TextInput";try{r.displayName="TextInput",r.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const U={title:"Components/Forms/Text Input",component:r,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."}}},s={},i={args:{defaultValue:"designsystem@amsterdam.nl",type:"email"}},t={args:{defaultValue:"https://designsystem.amsterdam/",type:"url"}},d={args:{defaultValue:"14020",type:"tel"}},l={args:{placeholder:"Placeholder text"}},n={args:{defaultValue:"Invalid value",invalid:!0}},o={args:{defaultValue:"Disabled input",disabled:!0}},c={render:e=>a.jsxs(q,{invalid:e.invalid,children:[a.jsx(R,{htmlFor:"input1",children:"Label"}),a.jsx(k,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(w,{id:"error1",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},u={args:{invalid:!0},render:e=>a.jsxs(q,{invalid:e.invalid,children:[a.jsx(R,{htmlFor:"input2",children:"Label"}),a.jsx(k,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(w,{id:"error2",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};var p,m,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,h,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    type: 'email'
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,x,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    type: 'url'
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,F,I;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    type: 'tel'
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var P,V,_;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text'
  }
}`,...(_=(V=l.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var E,S,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Invalid value',
    invalid: true
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var A,L,D;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled input',
    disabled: true
  }
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var O,W,M;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...(M=(W=c.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var N,z,$;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...($=(z=u.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const X=["Default","EmailAddress","WebAddress","PhoneNumber","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:o,EmailAddress:i,InAField:c,InAFieldWithValidation:u,Invalid:n,PhoneNumber:d,Placeholder:l,WebAddress:t,__namedExportsOrder:X,default:U},Symbol.toStringTag,{value:"Module"}));export{o as D,i as E,n as I,d as P,re as T,t as W,l as a,c as b,u as c};
