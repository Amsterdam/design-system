import{r as m,j as e,c as v,t as d,T as t,P as l,E as h}from"./iframe-k_XWJsh-.js";import{d as g}from"./exampleContent-DRope23M.js";const i=m.forwardRef(({children:a,className:o,invalid:c,...u},p)=>e.jsx("div",{...u,className:v("ams-field",c&&"ams-field--invalid",o),ref:p,children:a}));i.displayName="Field";try{i.displayName="Field",i.__docgenInfo={description:"",displayName:"Field",props:{invalid:{defaultValue:null,description:"Whether the field has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const f=g(),x={title:"Components/Forms/Field",component:i,args:{invalid:!1}},r={render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(d,{htmlFor:"input1",children:"Wat is uw achternaam?"}),e.jsx(t,{id:"input1",invalid:a.invalid,value:f})]})},n={render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(d,{htmlFor:"input2",children:"Wat is uw achternaam?"}),e.jsx(l,{id:"description1",children:"Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin."}),e.jsx(t,{"aria-describedby":"description1",id:"input2",invalid:a.invalid,value:"van den Heuvel"})]})},s={args:{invalid:!0},render:a=>e.jsxs(i,{invalid:a.invalid,children:[e.jsx(d,{htmlFor:"input3",children:"Wat is uw achternaam?"}),e.jsx(l,{id:"description2",children:"Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin."}),e.jsx(h,{id:"error",children:"Vul uw achternaam in"}),e.jsx(t,{"aria-describedby":"description2 error","aria-required":!0,id:"input3",invalid:a.invalid,value:""})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Wat is uw achternaam?</Label>
      <TextInput id="input1" invalid={args.invalid} value={familyName} />
    </Field>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Wat is uw achternaam?</Label>
      <Paragraph id="description1">
        Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.
      </Paragraph>
      <TextInput aria-describedby="description1" id="input2" invalid={args.invalid} value="van den Heuvel" />
    </Field>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input3">Wat is uw achternaam?</Label>
      <Paragraph id="description2">
        Heeft uw naam een tussenvoegsel, zoals ‘van der’, schrijf die dan aan het begin.
      </Paragraph>
      <ErrorMessage id="error">Vul uw achternaam in</ErrorMessage>
      <TextInput aria-describedby="description2 error" aria-required id="input3" invalid={args.invalid} value="" />
    </Field>
}`,...s.parameters?.docs?.source}}};const b=["Default","WithDescription","WithValidation"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithDescription:n,WithValidation:s,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{y as F,n as W,s as a};
