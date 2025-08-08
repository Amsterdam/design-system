import{r as f,j as r,c as j,F as m,u as g,P as v,E as h}from"./iframe-B7hbChfh.js";import{b as F}from"./exampleContent-B7cDFRSs.js";const a=f.forwardRef(({className:e,dir:b,invalid:x,resize:p,...u},z)=>r.jsx("textarea",{...u,"aria-invalid":x||void 0,className:j("ams-text-area",p&&`ams-text-area--resize-${p}`,u.cols&&"ams-text-area--cols",e),dir:b??"auto",ref:z}));a.displayName="TextArea";try{a.displayName="TextArea",a.__docgenInfo={description:"",displayName:"TextArea",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},resize:{defaultValue:null,description:"Allows the user to resize the text box. The default is resizing in both directions.",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const y=F(),A={title:"Components/Forms/Text Area",component:a,args:{defaultValue:y,disabled:!1,invalid:!1},argTypes:{cols:{control:{type:"number"},description:"The width, expressed in the average number of characters."},defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},resize:{control:{labels:{horizontal:"horizontal",none:"none",undefined:"default",vertical:"vertical"},type:"radio"},options:[void 0,"none","horizontal","vertical"]},rows:{control:{type:"number"},description:"The number of lines to show"}}},i={},s={args:{resize:"vertical"}},o={args:{resize:"horizontal"}},t={args:{resize:"none"}},n={args:{invalid:!0}},d={args:{disabled:!0}},l={render:e=>r.jsxs(m,{invalid:e.invalid,children:[r.jsx(g,{htmlFor:"input1",children:"Label"}),r.jsx(v,{id:"description1",children:"Omschrijving."}),e.invalid&&r.jsx(h,{id:"error1",children:"Foutmelding."}),r.jsx(a,{"aria-describedby":`description1${e.invalid?" error1":""}`,id:"input1",...e})]})},c={args:{invalid:!0},render:e=>r.jsxs(m,{invalid:e.invalid,children:[r.jsx(g,{htmlFor:"input2",children:"Label"}),r.jsx(v,{id:"description2",children:"Omschrijving."}),e.invalid&&r.jsx(h,{id:"error2",children:"Foutmelding."}),r.jsx(a,{"aria-describedby":`description2${e.invalid?" error2":""}`,id:"input2",...e})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...c.parameters?.docs?.source}}};const T=["Default","VerticalResize","HorizontalResize","NoResize","Invalid","Disabled","InAField","InAFieldWithValidation"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:d,HorizontalResize:o,InAField:l,InAFieldWithValidation:c,Invalid:n,NoResize:t,VerticalResize:s,__namedExportsOrder:T,default:A},Symbol.toStringTag,{value:"Module"}));export{d as D,o as H,n as I,t as N,E as T,s as V,l as a,c as b};
