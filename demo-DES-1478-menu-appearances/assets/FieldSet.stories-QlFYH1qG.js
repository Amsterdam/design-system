import{r as I,j as e,c as _,F as d,t as n,E as r,T as l,P as o,C as j,y as s,z as t}from"./iframe-Ds8MUNER.js";import{f as R,d as L}from"./exampleContent-DRope23M.js";import{H as W}from"./Hint-Bzk4Tsl3.js";const i=I.forwardRef(({children:a,className:w,hint:y,invalid:N,legend:V,legendIsPageHeading:E,optional:S,...C},M)=>{const q=e.jsxs(e.Fragment,{children:[V," ",e.jsx(W,{hint:y,optional:S})]});return e.jsxs("fieldset",{...C,className:_("ams-field-set",N&&"ams-field-set--invalid",w),ref:M,children:[e.jsx("legend",{className:"ams-field-set__legend",children:E?e.jsx("h1",{className:"ams-field-set__heading",children:q}):q}),a]})});i.displayName="FieldSet";try{i.displayName="FieldSet",i.__docgenInfo={description:"",displayName:"FieldSet",props:{hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error.",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},legendIsPageHeading:{defaultValue:null,description:`Render a level 1 heading in the legend.
Set this if the Field Set is the only content of the page.`,name:"legendIsPageHeading",required:!1,type:{name:"boolean"}}}}}catch{}const f=L(),F=R(),k={title:"Components/Forms/Field Set",component:i,args:{hint:"",invalid:!1,legend:"Wat is uw naam?",optional:!1},decorators:[a=>e.jsx("form",{children:e.jsx(a,{})})]},u={render:a=>e.jsxs(i,{...a,children:[e.jsxs(d,{className:"ams-mb-s",children:[e.jsx(n,{htmlFor:"input-a1",children:"Voornaam"}),a.invalid&&e.jsx(r,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:a.invalid,value:F})]}),e.jsxs(d,{children:[e.jsx(n,{htmlFor:"input-a2",children:"Achternaam"}),a.invalid&&e.jsx(r,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:a.invalid,value:f})]})]})},m={render:a=>e.jsxs(i,{"aria-describedby":"description-b",...a,children:[e.jsx(o,{className:"ams-mb-s",id:"description-b",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(d,{className:"ams-mb-s",children:[e.jsx(n,{htmlFor:"input-b1",children:"Voornaam"}),a.invalid&&e.jsx(r,{id:"error-b1",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:a.invalid,value:F})]}),e.jsxs(d,{children:[e.jsx(n,{htmlFor:"input-b2",children:"Achternaam"}),a.invalid&&e.jsx(r,{id:"error-b2",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:a.invalid,value:f})]})]})},c={args:{hint:"verplicht",optional:!1},render:a=>e.jsxs(i,{...a,children:[e.jsxs(d,{className:"ams-mb-s",children:[e.jsx(n,{htmlFor:"input-b3",children:"Voornaam"}),a.invalid&&e.jsx(r,{id:"error-b3",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-b3":void 0,"aria-required":"true",id:"input-b3",invalid:a.invalid,value:F})]}),e.jsxs(d,{children:[e.jsx(n,{htmlFor:"input-b4",children:"Achternaam"}),a.invalid&&e.jsx(r,{id:"error-b4",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-b4":void 0,"aria-required":"true",id:"input-b4",invalid:a.invalid,value:f})]})]})},v={args:{invalid:!0},render:a=>e.jsxs(i,{"aria-describedby":"description-c",invalid:a.invalid,legend:a.legend,children:[e.jsx(o,{className:"ams-mb-s",id:"description-c",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(d,{className:"ams-mb-s",children:[e.jsx(n,{htmlFor:"input-c1",children:"Voornaam"}),a.invalid&&e.jsx(r,{id:"error-c1",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:a.invalid,value:""})]}),e.jsxs(d,{children:[e.jsx(n,{htmlFor:"input-c2",children:"Achternaam"}),a.invalid&&e.jsx(r,{id:"error-c2",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:a.invalid,value:""})]})]})},b={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-describedby":`description-d${a.invalid?" error-d":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(o,{className:"ams-mb-s",id:"description-d",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb-s",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(j,{gap:"x-small",children:[e.jsx(s,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(s,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(s,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(s,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},g={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-describedby":`description-e${a.invalid?" error-e":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(o,{className:"ams-mb-s",id:"description-e",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb-s",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(j,{gap:"x-small",children:[e.jsx(s,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(s,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(s,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(s,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},p={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-labelledby":`fieldset-f description-f${a.invalid?" error-f":""}`,id:"fieldset-f",invalid:a.invalid,legend:a.legend,children:[e.jsx(o,{className:"ams-mb-s",id:"description-f",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb-s",id:"error-f",children:"Geef aan waar uw melding over gaat."}),e.jsxs(j,{gap:"x-small",children:[e.jsx(t,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(t,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(t,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(t,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},h={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-labelledby":`fieldset-g description-g${a.invalid?" error-g":""}`,id:"fieldset-g",invalid:a.invalid,legend:a.legend,children:[e.jsx(o,{className:"ams-mb-s",id:"description-g",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb-s",id:"error-g",children:"Geef aan waar uw melding over gaat."}),e.jsxs(j,{gap:"x-small",children:[e.jsx(t,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(t,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(t,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(t,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},x={args:{legendIsPageHeading:!0},render:a=>e.jsxs(i,{...a,children:[e.jsxs(d,{className:"ams-mb-s",children:[e.jsx(n,{htmlFor:"input-a1",children:"Voornaam"}),a.invalid&&e.jsx(r,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:a.invalid,value:F})]}),e.jsxs(d,{children:[e.jsx(n,{htmlFor:"input-a2",children:"Achternaam"}),a.invalid&&e.jsx(r,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":a.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:a.invalid,value:f})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet {...args}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-a1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a1' : undefined} aria-required="true" id="input-a1" invalid={args.invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-a2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a2' : undefined} aria-required="true" id="input-a2" invalid={args.invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet aria-describedby="description-b" {...args}>
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'verplicht',
    optional: false
  },
  render: args => <FieldSet {...args}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-b3">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-b3">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b3' : undefined} aria-required="true" id="input-b3" invalid={args.invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-b4">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-b4">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b4' : undefined} aria-required="true" id="input-b4" invalid={args.invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    legendIsPageHeading: true
  },
  render: args => <FieldSet {...args}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-a1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a1' : undefined} aria-required="true" id="input-a1" invalid={args.invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-a2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a2' : undefined} aria-required="true" id="input-a2" invalid={args.invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...x.parameters?.docs?.source}}};const A=["Default","WithDescription","WithHint","WithValidation","RadioGroup","RadioGroupWithValidation","CheckboxGroup","CheckboxGroupWithValidation","WithHeadingInLegend"],T=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:p,CheckboxGroupWithValidation:h,Default:u,RadioGroup:b,RadioGroupWithValidation:g,WithDescription:m,WithHeadingInLegend:x,WithHint:c,WithValidation:v,__namedExportsOrder:A,default:k},Symbol.toStringTag,{value:"Module"}));export{p as C,T as F,b as R,m as W,c as a,v as b,g as c,h as d,x as e};
