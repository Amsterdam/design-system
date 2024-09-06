import{j as e}from"./jsx-runtime-BlAj40OV.js";import{f as l,a as s,E as r,T as o,P as t,C as w,R as d,i as n}from"./index.esm-BXcx5UUI.js";import{c as Y}from"./clsx-B-dksMZM.js";import{r as Z}from"./index-Cs7sjTYM.js";import{H as y}from"./Hint-D4EIfW8U.js";const i=Z.forwardRef(({children:a,className:u,invalid:m,legend:c,hint:F,optional:J,...Q},X)=>{let q=null;return J?q=F?e.jsx(y,{hint:F}):e.jsx(y,{hint:"niet verplicht"}):F&&(q=e.jsx(y,{hint:F})),e.jsxs("fieldset",{...Q,ref:X,className:Y("ams-field-set",m&&"ams-field-set--invalid",u),children:[e.jsxs("legend",{className:"ams-field-set__legend",children:[c," ",q]}),a]})});i.displayName="FieldSet";try{i.displayName="FieldSet",i.__docgenInfo={description:"",displayName:"FieldSet",props:{invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides additional context to the user on some inline text element such as a Label. For example: a form field can be marked as optional. Keep the text brief, preferably no more than two words, as it doesn't break words to a new line.",name:"hint",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Components/Forms/Field Set",component:i,args:{invalid:!1,legend:"Wat is uw naam?",optional:!1,hint:""},decorators:[a=>e.jsx("form",{children:e.jsx(a,{})})]},v={render:({invalid:a,legend:u,hint:m,optional:c})=>e.jsxs(i,{invalid:a,legend:u,hint:m,optional:c,children:[e.jsxs(l,{className:"ams-mb--sm",children:[e.jsx(s,{htmlFor:"input-a1",children:"Voornaam"}),a&&e.jsx(r,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(o,{"aria-describedby":a?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:a})]}),e.jsxs(l,{children:[e.jsx(s,{htmlFor:"input-a2",children:"Achternaam"}),a&&e.jsx(r,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(o,{"aria-describedby":a?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:a})]})]})},b={render:a=>e.jsxs(i,{invalid:a.invalid,legend:a.legend,"aria-describedby":"description-b",children:[e.jsx(t,{id:"description-b",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(l,{className:"ams-mb--sm",children:[e.jsx(s,{htmlFor:"input-b1",children:"Voornaam"}),a.invalid&&e.jsx(r,{id:"error-b1",children:"Vul uw voornaam in."}),e.jsx(o,{"aria-describedby":a.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:a.invalid})]}),e.jsxs(l,{children:[e.jsx(s,{htmlFor:"input-b2",children:"Achternaam"}),a.invalid&&e.jsx(r,{id:"error-b2",children:"Vul uw achternaam in."}),e.jsx(o,{"aria-describedby":a.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:a.invalid})]})]})},g={args:{optional:!1,hint:"verplicht"},render:({invalid:a,legend:u,hint:m,optional:c})=>e.jsxs(i,{invalid:a,legend:u,optional:c,hint:m,children:[e.jsxs(l,{className:"ams-mb--sm",children:[e.jsx(s,{htmlFor:"input-b3",children:"Voornaam"}),a&&e.jsx(r,{id:"error-b3",children:"Vul uw voornaam in."}),e.jsx(o,{"aria-describedby":a?"error-b3":void 0,"aria-required":"true",id:"input-b3",invalid:a})]}),e.jsxs(l,{children:[e.jsx(s,{htmlFor:"input-b4",children:"Achternaam"}),a&&e.jsx(r,{id:"error-b4",children:"Vul uw achternaam in."}),e.jsx(o,{"aria-describedby":a?"error-b4":void 0,"aria-required":"true",id:"input-b4",invalid:a})]})]})},p={args:{invalid:!0},render:a=>e.jsxs(i,{invalid:a.invalid,legend:a.legend,"aria-describedby":"description-c",children:[e.jsx(t,{id:"description-c",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(l,{className:"ams-mb--sm",children:[e.jsx(s,{htmlFor:"input-c1",children:"Voornaam"}),a.invalid&&e.jsx(r,{id:"error-c1",children:"Vul uw voornaam in."}),e.jsx(o,{"aria-describedby":a.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:a.invalid})]}),e.jsxs(l,{children:[e.jsx(s,{htmlFor:"input-c2",children:"Achternaam"}),a.invalid&&e.jsx(r,{id:"error-c2",children:"Vul uw achternaam in."}),e.jsx(o,{"aria-describedby":a.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:a.invalid})]})]})},h={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-describedby":`description-d${a.invalid?" error-d":""}`,invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(t,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(w,{gap:"extra-small",children:[e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},x={args:{legend:"Waar gaat uw melding over?",invalid:!0},render:a=>e.jsxs(i,{"aria-describedby":`description-e${a.invalid?" error-e":""}`,invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(t,{className:"ams-mb--sm",id:"description-e",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb--sm",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(w,{gap:"extra-small",children:[e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},j={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-labelledby":`fieldset-f description-f${a.invalid?" error-f":""}`,id:"fieldset-f",invalid:a.invalid,legend:a.legend,children:[e.jsx(t,{className:"ams-mb--sm",id:"description-f",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb--sm",id:"error-f",children:"Geef aan waar uw melding over gaat."}),e.jsxs(w,{gap:"extra-small",children:[e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},f={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-labelledby":`fieldset-g description-g${a.invalid?" error-g":""}`,id:"fieldset-g",invalid:a.invalid,legend:a.legend,children:[e.jsx(t,{id:"description-g",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb--sm",id:"error-g",children:"Geef aan waar uw melding over gaat."}),e.jsxs(w,{gap:"extra-small",children:[e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};var V,E,C;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: ({
    invalid,
    legend,
    hint,
    optional
  }) => <FieldSet invalid={invalid} legend={legend} hint={hint} optional={optional}>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-a1">Voornaam</Label>
        {invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={invalid ? 'error-a1' : undefined} aria-required="true" id="input-a1" invalid={invalid} />
      </Field>
      <Field>
        <Label htmlFor="input-a2">Achternaam</Label>
        {invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={invalid ? 'error-a2' : undefined} aria-required="true" id="input-a2" invalid={invalid} />
      </Field>
    </FieldSet>
}`,...(C=(E=v.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var N,S,M;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} aria-describedby="description-b">
      <Paragraph id="description-b" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-b1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-b1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b1' : undefined} aria-required="true" id="input-b1" invalid={args.invalid} />
      </Field>
      <Field>
        <Label htmlFor="input-b2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-b2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b2' : undefined} aria-required="true" id="input-b2" invalid={args.invalid} />
      </Field>
    </FieldSet>
}`,...(M=(S=b.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var R,_,k;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    optional: false,
    hint: 'verplicht'
  },
  render: ({
    invalid,
    legend,
    hint,
    optional
  }) => <FieldSet invalid={invalid} legend={legend} optional={optional} hint={hint}>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-b3">Voornaam</Label>
        {invalid && <ErrorMessage id="error-b3">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={invalid ? 'error-b3' : undefined} aria-required="true" id="input-b3" invalid={invalid} />
      </Field>
      <Field>
        <Label htmlFor="input-b4">Achternaam</Label>
        {invalid && <ErrorMessage id="error-b4">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={invalid ? 'error-b4' : undefined} aria-required="true" id="input-b4" invalid={invalid} />
      </Field>
    </FieldSet>
}`,...(k=(_=g.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var W,I,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} aria-describedby="description-c">
      <Paragraph id="description-c" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-c1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-c1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-c1' : undefined} aria-required="true" id="input-c1" invalid={args.invalid} />
      </Field>
      <Field>
        <Label htmlFor="input-c2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-c2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-c2' : undefined} aria-required="true" id="input-c2" invalid={args.invalid} />
      </Field>
    </FieldSet>
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var z,A,G;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-describedby={\`description-d\${args.invalid ? ' error-d' : ''}\`} invalid={args.invalid} legend={args.legend} role="radiogroup">
      <Paragraph className="ams-mb--sm" id="description-d" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb--sm" id="error-d">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
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
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var P,H,D;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?',
    invalid: true
  },
  render: args => <FieldSet aria-describedby={\`description-e\${args.invalid ? ' error-e' : ''}\`} invalid={args.invalid} legend={args.legend} role="radiogroup">
      <Paragraph className="ams-mb--sm" id="description-e" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb--sm" id="error-e">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
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
}`,...(D=(H=x.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var T,$,O;j.parameters={...j.parameters,docs:{...(T=j.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-labelledby={\`fieldset-f description-f\${args.invalid ? ' error-f' : ''}\`} id="fieldset-f" invalid={args.invalid} legend={args.legend}>
      <Paragraph className="ams-mb--sm" id="description-f" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb--sm" id="error-f">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
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
}`,...(O=($=j.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var K,U,B;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    invalid: true,
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-labelledby={\`fieldset-g description-g\${args.invalid ? ' error-g' : ''}\`} id="fieldset-g" invalid={args.invalid} legend={args.legend}>
      <Paragraph id="description-g" size="small" className="ams-mb--sm">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb--sm" id="error-g">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
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
}`,...(B=(U=f.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const ae=["Default","WithDescription","WithHint","WithValidation","RadioGroup","RadioGroupWithValidation","CheckboxGroup","CheckboxGroupWithValidation"],se=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:j,CheckboxGroupWithValidation:f,Default:v,RadioGroup:h,RadioGroupWithValidation:x,WithDescription:b,WithHint:g,WithValidation:p,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{j as C,se as F,h as R,b as W,g as a,p as b,x as c,f as d};
