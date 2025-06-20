import{r as D,j as e,c as L,F as O,s as P,P as R}from"./iframe-C5QqADL7.js";const o=D.forwardRef(({className:n,...I},S)=>e.jsx("input",{...I,className:L("ams-file-input",n),ref:S,type:"file"}));o.displayName="FileInput";try{o.displayName="FileInput",o.__docgenInfo={description:"",displayName:"FileInput",props:{}}}catch{}const v={title:"Components/Forms/File Input",component:o,args:{accept:void 0,disabled:!1,multiple:!1},argTypes:{accept:{control:{type:"text"}},disabled:{control:{type:"boolean"}},multiple:{control:{type:"boolean"}}}},r={},a={args:{multiple:!0}},s={args:{accept:"application/pdf"}},t={args:{disabled:!0}},i={render:n=>e.jsxs(O,{children:[e.jsx(P,{htmlFor:"input1",children:"Label"}),e.jsx(R,{id:"description1",size:"small",children:"Omschrijving."}),e.jsx(o,{"aria-describedby":"description1",id:"input1",...n})]})};var p,c,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,F,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...(b=(F=s.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var y,f,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(_=(f=t.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var x,h,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const M=["Default","MultipleFiles","RestrictFileTypes","Disabled","InAField"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:t,InAField:i,MultipleFiles:a,RestrictFileTypes:s,__namedExportsOrder:M,default:v},Symbol.toStringTag,{value:"Module"}));export{t as D,T as F,i as I,a as M,s as R};
