import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{F as J,c as K,P as Q,E as U}from"./index.esm-C4Aaqgc8.js";import{c as re}from"./clsx-B-dksMZM.js";import{r as se}from"./index-G8LIXM5I.js";const r=se.forwardRef(({className:e,dir:X,invalid:Y,type:Z="text",...ee},ae)=>a.jsx("input",{...ee,"aria-invalid":Y||void 0,className:re("ams-text-input",e),dir:X??"auto",ref:ae,type:Z}));r.displayName="TextInput";try{r.displayName="TextInput",r.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const ie={title:"Components/Forms/Text Input",component:r,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."}}},s={},i={args:{defaultValue:"designsystem@amsterdam.nl",type:"email"}},t={args:{defaultValue:"https://designsystem.amsterdam/",type:"url"}},n={args:{defaultValue:"14020",type:"tel"}},d={args:{defaultValue:"0",inputMode:"numeric",pattern:"[0-9]*",size:5,spellCheck:!1,type:"text"}},l={args:{size:10}},o={args:{placeholder:"Placeholder text"}},c={args:{defaultValue:"Invalid value",invalid:!0}},u={args:{defaultValue:"Disabled input",disabled:!0}},p={render:e=>a.jsxs(J,{invalid:e.invalid,children:[a.jsx(K,{htmlFor:"input1",children:"Label"}),a.jsx(Q,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(U,{id:"error1",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},m={args:{invalid:!0},render:e=>a.jsxs(J,{invalid:e.invalid,children:[a.jsx(K,{htmlFor:"input2",children:"Label"}),a.jsx(Q,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(U,{id:"error2",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};var g,v,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,f,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    type: 'email'
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,j,F;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    type: 'url'
  }
}`,...(F=(j=t.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var I,S,V;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    type: 'tel'
  }
}`,...(V=(S=n.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var P,_,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultValue: '0',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false,
    type: 'text'
  }
}`,...(T=(_=d.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var z,E,A;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 10
  }
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,M,N;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text'
  }
}`,...(N=(M=o.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var D,O,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Invalid value',
    invalid: true
  }
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var $,k,C;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled input',
    disabled: true
  }
}`,...(C=(k=u.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var q,w,R;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...(R=(w=p.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var B,G,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const te=["Default","EmailAddress","WebAddress","PhoneNumber","Number","Size","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:u,EmailAddress:i,InAField:p,InAFieldWithValidation:m,Invalid:c,Number:d,PhoneNumber:n,Placeholder:o,Size:l,WebAddress:t,__namedExportsOrder:te,default:ie},Symbol.toStringTag,{value:"Module"}));export{u as D,i as E,c as I,n as P,l as S,ce as T,t as W,o as a,p as b,m as c};
