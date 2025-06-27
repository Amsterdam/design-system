import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{F as X,c as Y,P as Z,E as ee}from"./index.esm-s5yvcob-.js";import{c as le}from"./clsx-B-dksMZM.js";import{r as ne}from"./index-G8LIXM5I.js";const r=ne.forwardRef(({className:e,dir:ae,invalid:re,type:se="text",...ie},te)=>a.jsx("input",{...ie,"aria-invalid":re||void 0,className:le("ams-text-input",e),dir:ae??"auto",ref:te,type:se}));r.displayName="TextInput";try{r.displayName="TextInput",r.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const de={title:"Components/Forms/Text Input",component:r,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."}}},s={},i={args:{defaultValue:"designsystem@amsterdam.nl",type:"email"}},t={args:{defaultValue:"https://designsystem.amsterdam/",type:"url"}},l={args:{defaultValue:"14020",type:"tel"}},n={args:{defaultValue:"1",inputMode:"numeric",pattern:"[0-9]*",size:5,spellCheck:!1}},d={args:{defaultValue:"1.99",pattern:"[0-9.,]*",size:5,spellCheck:!1}},o={args:{size:10}},c={args:{placeholder:"Placeholder text"}},u={args:{defaultValue:"Invalid value",invalid:!0}},p={args:{defaultValue:"Disabled input",disabled:!0}},m={render:e=>a.jsxs(X,{invalid:e.invalid,children:[a.jsx(Y,{htmlFor:"input1",children:"Label"}),a.jsx(Z,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(ee,{id:"error1",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},g={args:{invalid:!0},render:e=>a.jsxs(X,{invalid:e.invalid,children:[a.jsx(Y,{htmlFor:"input2",children:"Label"}),a.jsx(Z,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(ee,{id:"error2",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};var h,v,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,x,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    type: 'email'
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,F,V;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    type: 'url'
  }
}`,...(V=(F=t.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var I,S,P;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    type: 'tel'
  }
}`,...(P=(S=l.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var z,_,T;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    defaultValue: '1',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false
  }
}`,...(T=(_=n.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var E,N,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultValue: '1.99',
    pattern: '[0-9.,]*',
    size: 5,
    spellCheck: false
  }
}`,...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var D,L,W;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 10
  }
}`,...(W=(L=o.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var M,O,k;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text'
  }
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var C,$,q;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Invalid value',
    invalid: true
  }
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var w,R,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled input',
    disabled: true
  }
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const oe=["Default","EmailAddress","WebAddress","PhoneNumber","WholeNumber","DecimalNumber","Size","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],ge=Object.freeze(Object.defineProperty({__proto__:null,DecimalNumber:d,Default:s,Disabled:p,EmailAddress:i,InAField:m,InAFieldWithValidation:g,Invalid:u,PhoneNumber:l,Placeholder:c,Size:o,WebAddress:t,WholeNumber:n,__namedExportsOrder:oe,default:de},Symbol.toStringTag,{value:"Module"}));export{d as D,i as E,u as I,l as P,o as S,ge as T,t as W,n as a,c as b,p as c,m as d,g as e};
