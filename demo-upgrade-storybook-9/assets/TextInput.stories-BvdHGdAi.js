import{r as Y,j as a,c as Z,F as C,s as B,P as G,E as H}from"./iframe-CmHy-vHF.js";const r=Y.forwardRef(({className:e,dir:J,invalid:K,type:Q="text",...U},X)=>a.jsx("input",{...U,"aria-invalid":K||void 0,className:Z("ams-text-input",e),dir:J??"auto",ref:X,type:Q}));r.displayName="TextInput";try{r.displayName="TextInput",r.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}const ee={title:"Components/Forms/Text Input",component:r,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},size:{control:{min:0,type:"number"},description:"The width, expressed in the average number of characters."}}},s={},i={args:{defaultValue:"designsystem@amsterdam.nl",type:"email"}},t={args:{defaultValue:"https://designsystem.amsterdam/",type:"url"}},d={args:{defaultValue:"14020",type:"tel"}},l={args:{size:10}},n={args:{placeholder:"Placeholder text"}},o={args:{defaultValue:"Invalid value",invalid:!0}},c={args:{defaultValue:"Disabled input",disabled:!0}},u={render:e=>a.jsxs(C,{invalid:e.invalid,children:[a.jsx(B,{htmlFor:"input1",children:"Label"}),a.jsx(G,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(H,{id:"error1",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},p={args:{invalid:!0},render:e=>a.jsxs(C,{invalid:e.invalid,children:[a.jsx(B,{htmlFor:"input2",children:"Label"}),a.jsx(G,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&a.jsx(H,{id:"error2",children:"Foutmelding."}),a.jsx(r,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};var m,g,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,b,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    type: 'email'
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,y,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    type: 'url'
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var F,I,S;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    type: 'tel'
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var P,V,_;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 10
  }
}`,...(_=(V=l.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var T,E,z;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text'
  }
}`,...(z=(E=n.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var A,L,D;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Invalid value',
    invalid: true
  }
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var O,W,M;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled input',
    disabled: true
  }
}`,...(M=(W=c.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var N,$,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var w,R,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(R=p.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const ae=["Default","EmailAddress","WebAddress","PhoneNumber","Size","Placeholder","Invalid","Disabled","InAField","InAFieldWithValidation"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:c,EmailAddress:i,InAField:u,InAFieldWithValidation:p,Invalid:o,PhoneNumber:d,Placeholder:n,Size:l,WebAddress:t,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{c as D,i as E,o as I,d as P,l as S,se as T,t as W,n as a,u as b,p as c};
