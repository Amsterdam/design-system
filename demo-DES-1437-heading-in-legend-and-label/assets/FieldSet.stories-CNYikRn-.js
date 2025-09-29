import{r as I,j as e,c as _,F as n,t as l,E as i,T as s,P as c,C as w,y as o,z as u}from"./iframe--hvgZlKJ.js";import{f as R,d as L}from"./exampleContent-DRope23M.js";import{H as E}from"./Hint-D6rCvXCG.js";const d=I.forwardRef(({children:a,className:r,hint:t,invalid:m,legend:q,legendIsPageHeading:S,optional:V,...C},M)=>e.jsxs("fieldset",{...C,className:_("ams-field-set",m&&"ams-field-set--invalid",r),ref:M,children:[e.jsx("legend",{className:"ams-field-set__legend",children:S?e.jsxs("h1",{className:"ams-field-set__heading",children:[q," ",e.jsx(E,{hint:t,optional:V})]}):e.jsxs(e.Fragment,{children:[q," ",e.jsx(E,{hint:t,optional:V})]})}),a]}));d.displayName="FieldSet";try{d.displayName="FieldSet",d.__docgenInfo={description:"",displayName:"FieldSet",props:{hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},legendIsPageHeading:{defaultValue:null,description:"Use a level 1 heading in the legend",name:"legendIsPageHeading",required:!1,type:{name:"boolean"}}}}}catch{}const y=L(),N=R(),W={title:"Components/Forms/Field Set",component:d,args:{hint:"",invalid:!1,legend:"Wat is uw naam?",optional:!1},decorators:[a=>e.jsx("form",{children:e.jsx(a,{})})]},v={render:({hint:a,invalid:r,legend:t,optional:m})=>e.jsxs(d,{hint:a,invalid:r,legend:t,optional:m,children:[e.jsxs(n,{className:"ams-mb-s",children:[e.jsx(l,{htmlFor:"input-a1",children:"Voornaam"}),r&&e.jsx(i,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(s,{"aria-describedby":r?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:r,value:N})]}),e.jsxs(n,{children:[e.jsx(l,{htmlFor:"input-a2",children:"Achternaam"}),r&&e.jsx(i,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(s,{"aria-describedby":r?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:r,value:y})]})]})},g={render:a=>e.jsxs(d,{"aria-describedby":"description-b",invalid:a.invalid,legend:a.legend,children:[e.jsx(c,{className:"ams-mb-s",id:"description-b",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(n,{className:"ams-mb-s",children:[e.jsx(l,{htmlFor:"input-b1",children:"Voornaam"}),a.invalid&&e.jsx(i,{id:"error-b1",children:"Vul uw voornaam in."}),e.jsx(s,{"aria-describedby":a.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:a.invalid,value:N})]}),e.jsxs(n,{children:[e.jsx(l,{htmlFor:"input-b2",children:"Achternaam"}),a.invalid&&e.jsx(i,{id:"error-b2",children:"Vul uw achternaam in."}),e.jsx(s,{"aria-describedby":a.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:a.invalid,value:y})]})]})},b={args:{hint:"verplicht",optional:!1},render:({hint:a,invalid:r,legend:t,optional:m})=>e.jsxs(d,{hint:a,invalid:r,legend:t,optional:m,children:[e.jsxs(n,{className:"ams-mb-s",children:[e.jsx(l,{htmlFor:"input-b3",children:"Voornaam"}),r&&e.jsx(i,{id:"error-b3",children:"Vul uw voornaam in."}),e.jsx(s,{"aria-describedby":r?"error-b3":void 0,"aria-required":"true",id:"input-b3",invalid:r,value:N})]}),e.jsxs(n,{children:[e.jsx(l,{htmlFor:"input-b4",children:"Achternaam"}),r&&e.jsx(i,{id:"error-b4",children:"Vul uw achternaam in."}),e.jsx(s,{"aria-describedby":r?"error-b4":void 0,"aria-required":"true",id:"input-b4",invalid:r,value:y})]})]})},p={args:{invalid:!0},render:a=>e.jsxs(d,{"aria-describedby":"description-c",invalid:a.invalid,legend:a.legend,children:[e.jsx(c,{className:"ams-mb-s",id:"description-c",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(n,{className:"ams-mb-s",children:[e.jsx(l,{htmlFor:"input-c1",children:"Voornaam"}),a.invalid&&e.jsx(i,{id:"error-c1",children:"Vul uw voornaam in."}),e.jsx(s,{"aria-describedby":a.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:a.invalid,value:""})]}),e.jsxs(n,{children:[e.jsx(l,{htmlFor:"input-c2",children:"Achternaam"}),a.invalid&&e.jsx(i,{id:"error-c2",children:"Vul uw achternaam in."}),e.jsx(s,{"aria-describedby":a.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:a.invalid,value:""})]})]})},h={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-describedby":`description-d${a.invalid?" error-d":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(c,{className:"ams-mb-s",id:"description-d",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb-s",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(w,{gap:"x-small",children:[e.jsx(o,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(o,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(o,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(o,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},x={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-describedby":`description-e${a.invalid?" error-e":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(c,{className:"ams-mb-s",id:"description-e",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb-s",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(w,{gap:"x-small",children:[e.jsx(o,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(o,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(o,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(o,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},j={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-labelledby":`fieldset-f description-f${a.invalid?" error-f":""}`,id:"fieldset-f",invalid:a.invalid,legend:a.legend,children:[e.jsx(c,{className:"ams-mb-s",id:"description-f",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb-s",id:"error-f",children:"Geef aan waar uw melding over gaat."}),e.jsxs(w,{gap:"x-small",children:[e.jsx(u,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(u,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(u,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(u,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},f={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-labelledby":`fieldset-g description-g${a.invalid?" error-g":""}`,id:"fieldset-g",invalid:a.invalid,legend:a.legend,children:[e.jsx(c,{className:"ams-mb-s",id:"description-g",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb-s",id:"error-g",children:"Geef aan waar uw melding over gaat."}),e.jsxs(w,{gap:"x-small",children:[e.jsx(u,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(u,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(u,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(u,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},F={args:{legendIsPageHeading:!0},render:({hint:a,invalid:r,legend:t,legendIsPageHeading:m,optional:q})=>e.jsxs(d,{hint:a,invalid:r,legend:t,legendIsPageHeading:m,optional:q,children:[e.jsxs(n,{className:"ams-mb-s",children:[e.jsx(l,{htmlFor:"input-a1",children:"Voornaam"}),r&&e.jsx(i,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(s,{"aria-describedby":r?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:r,value:N})]}),e.jsxs(n,{children:[e.jsx(l,{htmlFor:"input-a2",children:"Achternaam"}),r&&e.jsx(i,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(s,{"aria-describedby":r?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:r,value:y})]})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    legendIsPageHeading: true
  },
  render: ({
    hint,
    invalid,
    legend,
    legendIsPageHeading,
    optional
  }) => <FieldSet hint={hint} invalid={invalid} legend={legend} legendIsPageHeading={legendIsPageHeading} optional={optional}>
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
}`,...F.parameters?.docs?.source}}};const P=["Default","WithDescription","WithHint","WithValidation","RadioGroup","RadioGroupWithValidation","CheckboxGroup","CheckboxGroupWithValidation","WithHeadingInLegend"],G=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:j,CheckboxGroupWithValidation:f,Default:v,RadioGroup:h,RadioGroupWithValidation:x,WithDescription:g,WithHeadingInLegend:F,WithHint:b,WithValidation:p,__namedExportsOrder:P,default:W},Symbol.toStringTag,{value:"Module"}));export{j as C,G as F,h as R,g as W,b as a,p as b,x as c,f as d,F as e};
