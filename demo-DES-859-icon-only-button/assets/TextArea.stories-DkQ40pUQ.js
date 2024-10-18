import{j as r}from"./jsx-runtime-BlAj40OV.js";import{e as w,f as D,P as $,E as H}from"./index.esm-BCitb0wE.js";import{b as k}from"./exampleContent-hIIPvEhU.js";import{c as B}from"./clsx-B-dksMZM.js";import{r as G}from"./index-Cs7sjTYM.js";const a=G.forwardRef(({className:e,dir:W,invalid:q,resize:p,...m},C)=>r.jsx("textarea",{...m,"aria-invalid":q||void 0,className:B("ams-text-area",p&&`ams-text-area--resize-${p}`,m.cols&&"ams-text-area--cols",e),dir:W??"auto",ref:C}));a.displayName="TextArea";try{a.displayName="TextArea",a.__docgenInfo={description:"",displayName:"TextArea",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},resize:{defaultValue:null,description:"Allows the user to resize the text box. The default is resizing in both directions.",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const J=k(),K={title:"Components/Forms/Text Area",component:a,args:{defaultValue:J,disabled:!1,invalid:!1},argTypes:{cols:{control:{type:"number"},description:"The width, expressed in the average number of characters."},defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},resize:{control:{type:"radio",labels:{undefined:"default",none:"none",horizontal:"horizontal",vertical:"vertical"}},options:[void 0,"none","horizontal","vertical"]},rows:{control:{type:"number"},description:"The number of lines to show"}}},i={},s={args:{resize:"vertical"}},o={args:{resize:"horizontal"}},t={args:{resize:"none"}},n={args:{invalid:!0}},l={args:{disabled:!0}},d={render:e=>r.jsxs(w,{invalid:e.invalid,children:[r.jsx(D,{htmlFor:"input1",children:"Label"}),r.jsx($,{id:"description1",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(H,{id:"error1",children:"Foutmelding."}),r.jsx(a,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},c={args:{invalid:!0},render:e=>r.jsxs(w,{invalid:e.invalid,children:[r.jsx(D,{htmlFor:"input2",children:"Label"}),r.jsx($,{id:"description2",size:"small",children:"Omschrijving."}),e.invalid&&r.jsx(H,{id:"error2",children:"Foutmelding."}),r.jsx(a,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};var u,g,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,b,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var z,f,j;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var F,y,A;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var T,_,S;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(S=(_=n.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var E,L,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var I,P,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var N,O,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...(M=(O=c.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const Q=["Default","VerticalResize","HorizontalResize","NoResize","Invalid","Disabled","InAField","InAFieldWithValidation"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:l,HorizontalResize:o,InAField:d,InAFieldWithValidation:c,Invalid:n,NoResize:t,VerticalResize:s,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{l as D,o as H,n as I,t as N,re as T,s as V,d as a,c as b};
