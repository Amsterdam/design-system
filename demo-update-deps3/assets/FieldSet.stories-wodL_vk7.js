import{j as e}from"./jsx-runtime-BlAj40OV.js";import{e as l,f as s,E as r,T as t,P as o,C as F,R as d,h as n}from"./index.esm-DkeNw4DX.js";import{c as Q}from"./clsx-B-dksMZM.js";import{r as X}from"./index-Cs7sjTYM.js";import{H as Y}from"./Hint-D4Fy8YuO.js";const i=X.forwardRef(({children:a,className:u,hint:m,invalid:c,legend:U,optional:B,...J},K)=>e.jsxs("fieldset",{...J,ref:K,className:Q("ams-field-set",c&&"ams-field-set--invalid",u),children:[e.jsxs("legend",{className:"ams-field-set__legend",children:[U," ",e.jsx(Y,{hint:m,optional:B})]}),a]}));i.displayName="FieldSet";try{i.displayName="FieldSet",i.__docgenInfo={description:"",displayName:"FieldSet",props:{invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Forms/Field Set",component:i,args:{invalid:!1,legend:"Wat is uw naam?",optional:!1,hint:""},decorators:[a=>e.jsx("form",{children:e.jsx(a,{})})]},v={render:({invalid:a,legend:u,hint:m,optional:c})=>e.jsxs(i,{hint:m,invalid:a,legend:u,optional:c,children:[e.jsxs(l,{className:"ams-mb--sm",children:[e.jsx(s,{htmlFor:"input-a1",children:"Voornaam"}),a&&e.jsx(r,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(t,{"aria-describedby":a?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:a})]}),e.jsxs(l,{children:[e.jsx(s,{htmlFor:"input-a2",children:"Achternaam"}),a&&e.jsx(r,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(t,{"aria-describedby":a?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:a})]})]})},b={render:a=>e.jsxs(i,{"aria-describedby":"description-b",invalid:a.invalid,legend:a.legend,children:[e.jsx(o,{id:"description-b",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(l,{className:"ams-mb--sm",children:[e.jsx(s,{htmlFor:"input-b1",children:"Voornaam"}),a.invalid&&e.jsx(r,{id:"error-b1",children:"Vul uw voornaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:a.invalid})]}),e.jsxs(l,{children:[e.jsx(s,{htmlFor:"input-b2",children:"Achternaam"}),a.invalid&&e.jsx(r,{id:"error-b2",children:"Vul uw achternaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:a.invalid})]})]})},g={args:{optional:!1,hint:"verplicht"},render:({invalid:a,legend:u,hint:m,optional:c})=>e.jsxs(i,{hint:m,invalid:a,legend:u,optional:c,children:[e.jsxs(l,{className:"ams-mb--sm",children:[e.jsx(s,{htmlFor:"input-b3",children:"Voornaam"}),a&&e.jsx(r,{id:"error-b3",children:"Vul uw voornaam in."}),e.jsx(t,{"aria-describedby":a?"error-b3":void 0,"aria-required":"true",id:"input-b3",invalid:a})]}),e.jsxs(l,{children:[e.jsx(s,{htmlFor:"input-b4",children:"Achternaam"}),a&&e.jsx(r,{id:"error-b4",children:"Vul uw achternaam in."}),e.jsx(t,{"aria-describedby":a?"error-b4":void 0,"aria-required":"true",id:"input-b4",invalid:a})]})]})},p={args:{invalid:!0},render:a=>e.jsxs(i,{"aria-describedby":"description-c",invalid:a.invalid,legend:a.legend,children:[e.jsx(o,{id:"description-c",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(l,{className:"ams-mb--sm",children:[e.jsx(s,{htmlFor:"input-c1",children:"Voornaam"}),a.invalid&&e.jsx(r,{id:"error-c1",children:"Vul uw voornaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:a.invalid})]}),e.jsxs(l,{children:[e.jsx(s,{htmlFor:"input-c2",children:"Achternaam"}),a.invalid&&e.jsx(r,{id:"error-c2",children:"Vul uw achternaam in."}),e.jsx(t,{"aria-describedby":a.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:a.invalid})]})]})},h={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-describedby":`description-d${a.invalid?" error-d":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(o,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(F,{gap:"extra-small",children:[e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},x={args:{legend:"Waar gaat uw melding over?",invalid:!0},render:a=>e.jsxs(i,{"aria-describedby":`description-e${a.invalid?" error-e":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(o,{className:"ams-mb--sm",id:"description-e",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb--sm",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(F,{gap:"extra-small",children:[e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(d,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},j={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-labelledby":`fieldset-f description-f${a.invalid?" error-f":""}`,id:"fieldset-f",invalid:a.invalid,legend:a.legend,children:[e.jsx(o,{className:"ams-mb--sm",id:"description-f",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb--sm",id:"error-f",children:"Geef aan waar uw melding over gaat."}),e.jsxs(F,{gap:"extra-small",children:[e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},f={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{"aria-labelledby":`fieldset-g description-g${a.invalid?" error-g":""}`,id:"fieldset-g",invalid:a.invalid,legend:a.legend,children:[e.jsx(o,{id:"description-g",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(r,{className:"ams-mb--sm",id:"error-g",children:"Geef aan waar uw melding over gaat."}),e.jsxs(F,{gap:"extra-small",children:[e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};var q,w,y;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ({
    invalid,
    legend,
    hint,
    optional
  }) => <FieldSet hint={hint} invalid={invalid} legend={legend} optional={optional}>
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
}`,...(y=(w=v.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var V,E,S;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <FieldSet aria-describedby="description-b" invalid={args.invalid} legend={args.legend}>
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
}`,...(S=(E=b.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var C,N,M;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    optional: false,
    hint: 'verplicht'
  },
  render: ({
    invalid,
    legend,
    hint,
    optional
  }) => <FieldSet hint={hint} invalid={invalid} legend={legend} optional={optional}>
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
}`,...(M=(N=g.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var R,_,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldSet aria-describedby="description-c" invalid={args.invalid} legend={args.legend}>
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
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var W,I,z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-describedby={\`description-d\${args.invalid ? ' error-d' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} role="radiogroup">
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
}`,...(z=(I=h.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var A,L,G;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?',
    invalid: true
  },
  render: args => <FieldSet aria-describedby={\`description-e\${args.invalid ? ' error-e' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} role="radiogroup">
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
}`,...(G=(L=x.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var P,D,H;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(D=j.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var T,$,O;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=($=f.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const ee=["Default","WithDescription","WithHint","WithValidation","RadioGroup","RadioGroupWithValidation","CheckboxGroup","CheckboxGroupWithValidation"],le=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:j,CheckboxGroupWithValidation:f,Default:v,RadioGroup:h,RadioGroupWithValidation:x,WithDescription:b,WithHint:g,WithValidation:p,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{j as C,le as F,h as R,b as W,g as a,p as b,x as c,f as d};
