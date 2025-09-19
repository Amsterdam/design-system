import{r as S,j as e,c as C,F as s,t as o,E as i,T as t,P as u,C as F,y as n,z as l}from"./iframe-Bj_Wf9T1.js";import{f as M,d as R}from"./exampleContent-DRope23M.js";import{H as _}from"./Hint-dyrEH7Le.js";const d=S.forwardRef(({children:a,className:r,hint:m,invalid:c,legend:y,optional:N,...V},E)=>e.jsxs("fieldset",{...V,className:C("ams-field-set",c&&"ams-field-set--invalid",r),ref:E,children:[e.jsxs("legend",{className:"ams-field-set__legend",children:[y," ",e.jsx(_,{hint:m,optional:N})]}),a]}));d.displayName="FieldSet";try{d.displayName="FieldSet",d.__docgenInfo={description:"",displayName:"FieldSet",props:{hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}}}}}catch{}const q=R(),w=M(),k={title:"Components/Forms/Field Set",component:d,args:{hint:"",invalid:!1,legend:"Wat is uw naam?",optional:!1},decorators:[a=>e.jsx("form",{children:e.jsx(a,{})})]},v={render:({hint:a,invalid:r,legend:m,optional:c})=>e.jsxs(d,{hint:a,invalid:r,legend:m,optional:c,children:[e.jsxs(s,{className:"ams-mb-s",children:[e.jsx(o,{htmlFor:"input-a1",children:"Voornaam"}),r&&e.jsx(i,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(t,{"aria-describedby":r?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:r,value:w})]}),e.jsxs(s,{children:[e.jsx(o,{htmlFor:"input-a2",children:"Achternaam"}),r&&e.jsx(i,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(t,{"aria-describedby":r?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:r,value:q})]})]})},b={render:a=>e.jsxs(d,{"aria-describedby":"description-b",invalid:a.invalid,legend:a.legend,children:[e.jsx(u,{className:"ams-mb-s",id:"description-b",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(s,{className:"ams-mb-s",children:[e.jsx(o,{htmlFor:"input-b1",children:"Voornaam"}),a.invalid&&e.jsx(i,{id:"error-b1",children:"Vul uw voornaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:a.invalid,value:w})]}),e.jsxs(s,{children:[e.jsx(o,{htmlFor:"input-b2",children:"Achternaam"}),a.invalid&&e.jsx(i,{id:"error-b2",children:"Vul uw achternaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:a.invalid,value:q})]})]})},g={args:{hint:"verplicht",optional:!1},render:({hint:a,invalid:r,legend:m,optional:c})=>e.jsxs(d,{hint:a,invalid:r,legend:m,optional:c,children:[e.jsxs(s,{className:"ams-mb-s",children:[e.jsx(o,{htmlFor:"input-b3",children:"Voornaam"}),r&&e.jsx(i,{id:"error-b3",children:"Vul uw voornaam in."}),e.jsx(t,{"aria-describedby":r?"error-b3":void 0,"aria-required":"true",id:"input-b3",invalid:r,value:w})]}),e.jsxs(s,{children:[e.jsx(o,{htmlFor:"input-b4",children:"Achternaam"}),r&&e.jsx(i,{id:"error-b4",children:"Vul uw achternaam in."}),e.jsx(t,{"aria-describedby":r?"error-b4":void 0,"aria-required":"true",id:"input-b4",invalid:r,value:q})]})]})},p={args:{invalid:!0},render:a=>e.jsxs(d,{"aria-describedby":"description-c",invalid:a.invalid,legend:a.legend,children:[e.jsx(u,{className:"ams-mb-s",id:"description-c",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(s,{className:"ams-mb-s",children:[e.jsx(o,{htmlFor:"input-c1",children:"Voornaam"}),a.invalid&&e.jsx(i,{id:"error-c1",children:"Vul uw voornaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:a.invalid,value:""})]}),e.jsxs(s,{children:[e.jsx(o,{htmlFor:"input-c2",children:"Achternaam"}),a.invalid&&e.jsx(i,{id:"error-c2",children:"Vul uw achternaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:a.invalid,value:""})]})]})},h={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-describedby":`description-d${a.invalid?" error-d":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(u,{className:"ams-mb-s",id:"description-d",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb-s",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(F,{gap:"x-small",children:[e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},x={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-describedby":`description-e${a.invalid?" error-e":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(u,{className:"ams-mb-s",id:"description-e",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb-s",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(F,{gap:"x-small",children:[e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},j={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-labelledby":`fieldset-f description-f${a.invalid?" error-f":""}`,id:"fieldset-f",invalid:a.invalid,legend:a.legend,children:[e.jsx(u,{className:"ams-mb-s",id:"description-f",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb-s",id:"error-f",children:"Geef aan waar uw melding over gaat."}),e.jsxs(F,{gap:"x-small",children:[e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},f={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-labelledby":`fieldset-g description-g${a.invalid?" error-g":""}`,id:"fieldset-g",invalid:a.invalid,legend:a.legend,children:[e.jsx(u,{className:"ams-mb-s",id:"description-g",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb-s",id:"error-g",children:"Geef aan waar uw melding over gaat."}),e.jsxs(F,{gap:"x-small",children:[e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: ({
    hint,
    invalid,
    legend,
    optional
  }) => <FieldSet hint={hint} invalid={invalid} legend={legend} optional={optional}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-a1">Voornaam</Label>
        {invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={invalid ? 'error-a1' : undefined} aria-required="true" id="input-a1" invalid={invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-a2">Achternaam</Label>
        {invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={invalid ? 'error-a2' : undefined} aria-required="true" id="input-a2" invalid={invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet aria-describedby="description-b" invalid={args.invalid} legend={args.legend}>
      <Paragraph className="ams-mb-s" id="description-b">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb-s">
        <Label htmlFor="input-b1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-b1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b1' : undefined} aria-required="true" id="input-b1" invalid={args.invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-b2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-b2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b2' : undefined} aria-required="true" id="input-b2" invalid={args.invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'verplicht',
    optional: false
  },
  render: ({
    hint,
    invalid,
    legend,
    optional
  }) => <FieldSet hint={hint} invalid={invalid} legend={legend} optional={optional}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-b3">Voornaam</Label>
        {invalid && <ErrorMessage id="error-b3">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={invalid ? 'error-b3' : undefined} aria-required="true" id="input-b3" invalid={invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-b4">Achternaam</Label>
        {invalid && <ErrorMessage id="error-b4">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={invalid ? 'error-b4' : undefined} aria-required="true" id="input-b4" invalid={invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldSet aria-describedby="description-c" invalid={args.invalid} legend={args.legend}>
      <Paragraph className="ams-mb-s" id="description-c">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb-s">
        <Label htmlFor="input-c1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-c1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-c1' : undefined} aria-required="true" id="input-c1" invalid={args.invalid} value="" />
      </Field>
      <Field>
        <Label htmlFor="input-c2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-c2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-c2' : undefined} aria-required="true" id="input-c2" invalid={args.invalid} value="" />
      </Field>
    </FieldSet>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-describedby={\`description-d\${args.invalid ? ' error-d' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} role="radiogroup">
      <Paragraph className="ams-mb-s" id="description-d">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb-s" id="error-d">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="x-small">
        <Radio aria-required="true" invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-describedby={\`description-e\${args.invalid ? ' error-e' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} role="radiogroup">
      <Paragraph className="ams-mb-s" id="description-e">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb-s" id="error-e">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="x-small">
        <Radio aria-required="true" invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio aria-required="true" invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-labelledby={\`fieldset-f description-f\${args.invalid ? ' error-f' : ''}\`} id="fieldset-f" invalid={args.invalid} legend={args.legend}>
      <Paragraph className="ams-mb-s" id="description-f">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb-s" id="error-f">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>}
      <Column gap="x-small">
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-labelledby={\`fieldset-g description-g\${args.invalid ? ' error-g' : ''}\`} id="fieldset-g" invalid={args.invalid} legend={args.legend}>
      <Paragraph className="ams-mb-s" id="description-g">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb-s" id="error-g">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>}
      <Column gap="x-small">
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Checkbox>
        <Checkbox aria-required="true" invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
}`,...f.parameters?.docs?.source}}};const W=["Default","WithDescription","WithHint","WithValidation","RadioGroup","RadioGroupWithValidation","CheckboxGroup","CheckboxGroupWithValidation"],L=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:j,CheckboxGroupWithValidation:f,Default:v,RadioGroup:h,RadioGroupWithValidation:x,WithDescription:b,WithHint:g,WithValidation:p,__namedExportsOrder:W,default:k},Symbol.toStringTag,{value:"Module"}));export{j as C,L as F,h as R,b as W,g as a,p as b,x as c,f as d};
