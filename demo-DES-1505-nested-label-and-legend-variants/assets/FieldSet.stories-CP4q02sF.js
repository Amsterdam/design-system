import{r as q,j as e,c as g,F as a,v as r,E as d,T as l,P as x,D as L,C as M,J as F}from"./iframe-EkBBJOoa.js";import{f as _,d as T}from"./exampleContent-DRope23M.js";import{H as I}from"./Hint-D11GHJDi.js";const n=q.forwardRef(({children:i,className:j,hint:f,inFieldSet:p,invalid:S,legend:y,legendIsPageHeading:V,optional:w,...N},E)=>{const b=e.jsxs(e.Fragment,{children:[y," ",e.jsx(I,{hint:f,inFieldSet:p,optional:w})]});return e.jsxs("fieldset",{...N,className:g("ams-field-set",S&&"ams-field-set--invalid",j),ref:E,children:[e.jsx("legend",{className:g("ams-field-set__legend",p&&"ams-field-set__legend--in-fieldset"),children:V?e.jsx("h1",{className:"ams-field-set__heading",children:b}):b}),i]})});n.displayName="FieldSet";try{n.displayName="FieldSet",n.__docgenInfo={description:"",displayName:"FieldSet",props:{inFieldSet:{defaultValue:null,description:`Whether the fieldset is nested inside another fieldset.
This will show the legend in a lighter style.`,name:"inFieldSet",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error.",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},legendIsPageHeading:{defaultValue:null,description:`Render a level 1 heading in the legend.
Set this if the Field Set is the only content of the page.`,name:"legendIsPageHeading",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}const h=T(),v=_(),W={title:"Components/Forms/Field Set",component:n,args:{hint:"",invalid:!1,legend:"Wat is uw naam?",optional:!1},decorators:[i=>e.jsx("form",{children:e.jsx(i,{})})]},s={render:i=>e.jsxs(n,{...i,children:[e.jsxs(a,{className:"ams-mb-s",children:[e.jsx(r,{htmlFor:"input-a1",inFieldSet:!0,children:"Voornaam"}),i.invalid&&e.jsx(d,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:i.invalid,value:v})]}),e.jsxs(a,{children:[e.jsx(r,{htmlFor:"input-a2",inFieldSet:!0,children:"Achternaam"}),i.invalid&&e.jsx(d,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:i.invalid,value:h})]})]})},t={render:i=>e.jsxs(n,{"aria-describedby":"description-b",...i,children:[e.jsx(x,{className:"ams-mb-s",id:"description-b",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(a,{className:"ams-mb-s",children:[e.jsx(r,{htmlFor:"input-b1",inFieldSet:!0,children:"Voornaam"}),i.invalid&&e.jsx(d,{id:"error-b1",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:i.invalid,value:v})]}),e.jsxs(a,{children:[e.jsx(r,{htmlFor:"input-b2",inFieldSet:!0,children:"Achternaam"}),i.invalid&&e.jsx(d,{id:"error-b2",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:i.invalid,value:h})]})]})},o={args:{hint:"verplicht",optional:!1},render:i=>e.jsxs(n,{...i,children:[e.jsxs(a,{className:"ams-mb-s",children:[e.jsx(r,{htmlFor:"input-b3",inFieldSet:!0,children:"Voornaam"}),i.invalid&&e.jsx(d,{id:"error-b3",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-b3":void 0,"aria-required":"true",id:"input-b3",invalid:i.invalid,value:v})]}),e.jsxs(a,{children:[e.jsx(r,{htmlFor:"input-b4",inFieldSet:!0,children:"Achternaam"}),i.invalid&&e.jsx(d,{id:"error-b4",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-b4":void 0,"aria-required":"true",id:"input-b4",invalid:i.invalid,value:h})]})]})},u={args:{invalid:!0},render:i=>e.jsxs(n,{"aria-describedby":"description-c",invalid:i.invalid,legend:i.legend,children:[e.jsx(x,{className:"ams-mb-s",id:"description-c",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(a,{className:"ams-mb-s",children:[e.jsx(r,{htmlFor:"input-c1",inFieldSet:!0,children:"Voornaam"}),i.invalid&&e.jsx(d,{id:"error-c1",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:i.invalid,value:""})]}),e.jsxs(a,{children:[e.jsx(r,{htmlFor:"input-c2",inFieldSet:!0,children:"Achternaam"}),i.invalid&&e.jsx(d,{id:"error-c2",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:i.invalid,value:""})]})]})},c={args:{legendIsPageHeading:!0},render:i=>e.jsxs(n,{...i,children:[e.jsxs(a,{className:"ams-mb-s",children:[e.jsx(r,{htmlFor:"input-h1",inFieldSet:!0,children:"Voornaam"}),i.invalid&&e.jsx(d,{id:"error-h1",children:"Vul uw voornaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-h1":void 0,"aria-required":"true",id:"input-h1",invalid:i.invalid,value:v})]}),e.jsxs(a,{children:[e.jsx(r,{htmlFor:"input-h2",inFieldSet:!0,children:"Achternaam"}),i.invalid&&e.jsx(d,{id:"error-h2",children:"Vul uw achternaam in."}),e.jsx(l,{"aria-describedby":i.invalid?"error-h2":void 0,"aria-required":"true",id:"input-h2",invalid:i.invalid,value:h})]})]})},m={args:{legend:"Contact"},render:i=>e.jsxs(n,{...i,children:[e.jsxs(a,{className:"ams-mb-m",children:[e.jsx(r,{htmlFor:"input-i1",inFieldSet:!0,children:"Waarover wilt u contact opnemen?"}),e.jsx(L,{cols:42,id:"input-i1",invalid:i.invalid})]}),e.jsx(n,{id:"fieldset-i2",inFieldSet:!0,invalid:i.invalid,legend:"Hoe wilt u benaderd worden?",children:e.jsxs(M,{gap:"x-small",children:[e.jsx(F,{invalid:i.invalid,name:"preferred-contact",value:"tel",children:"Telefoon"}),e.jsx(F,{invalid:i.invalid,name:"preferred-contact",value:"email",children:"E-mail"})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet {...args}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-a1" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a1' : undefined} aria-required="true" id="input-a1" invalid={args.invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-a2" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a2' : undefined} aria-required="true" id="input-a2" invalid={args.invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet aria-describedby="description-b" {...args}>
      <Paragraph className="ams-mb-s" id="description-b">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb-s">
        <Label htmlFor="input-b1" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b1' : undefined} aria-required="true" id="input-b1" invalid={args.invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-b2" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b2' : undefined} aria-required="true" id="input-b2" invalid={args.invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'verplicht',
    optional: false
  },
  render: args => <FieldSet {...args}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-b3" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b3">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b3' : undefined} aria-required="true" id="input-b3" invalid={args.invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-b4" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b4">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b4' : undefined} aria-required="true" id="input-b4" invalid={args.invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldSet aria-describedby="description-c" invalid={args.invalid} legend={args.legend}>
      <Paragraph className="ams-mb-s" id="description-c">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb-s">
        <Label htmlFor="input-c1" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-c1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-c1' : undefined} aria-required="true" id="input-c1" invalid={args.invalid} value="" />
      </Field>
      <Field>
        <Label htmlFor="input-c2" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-c2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-c2' : undefined} aria-required="true" id="input-c2" invalid={args.invalid} value="" />
      </Field>
    </FieldSet>
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    legendIsPageHeading: true
  },
  render: args => <FieldSet {...args}>
      <Field className="ams-mb-s">
        <Label htmlFor="input-h1" inFieldSet>
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-h1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-h1' : undefined} aria-required="true" id="input-h1" invalid={args.invalid} value={givenName} />
      </Field>
      <Field>
        <Label htmlFor="input-h2" inFieldSet>
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-h2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-h2' : undefined} aria-required="true" id="input-h2" invalid={args.invalid} value={familyName} />
      </Field>
    </FieldSet>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Contact'
  },
  render: args => <FieldSet {...args}>
      <Field className="ams-mb-m">
        <Label htmlFor="input-i1" inFieldSet>
          Waarover wilt u contact opnemen?
        </Label>
        <TextArea cols={42} id="input-i1" invalid={args.invalid} />
      </Field>
      <FieldSet id="fieldset-i2" inFieldSet invalid={args.invalid} legend="Hoe wilt u benaderd worden?">
        <Column gap="x-small">
          <Checkbox invalid={args.invalid} name="preferred-contact" value="tel">
            Telefoon
          </Checkbox>
          <Checkbox invalid={args.invalid} name="preferred-contact" value="email">
            E-mail
          </Checkbox>
        </Column>
      </FieldSet>
    </FieldSet>
}`,...m.parameters?.docs?.source}}};const A=["Default","WithDescription","WithHint","WithValidation","WithHeadingInLegend","WithANestedFieldSet"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithANestedFieldSet:m,WithDescription:t,WithHeadingInLegend:c,WithHint:o,WithValidation:u,__namedExportsOrder:A,default:W},Symbol.toStringTag,{value:"Module"}));export{n as F,t as W,k as a,o as b,u as c,c as d,m as e,W as m};
