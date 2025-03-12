import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as s,d as t,E as i,T as o,P as u,C as F,f as n,g as l}from"./index.esm-C2z5RhTs.js";import{c as Q}from"./clsx-B-dksMZM.js";import{r as X}from"./index-C0MU9AHG.js";import{H as Y}from"./Hint-cnUvFidQ.js";const d=X.forwardRef(({children:a,className:r,hint:m,invalid:c,legend:U,optional:B,...J},K)=>e.jsxs("fieldset",{...J,className:Q("ams-field-set",c&&"ams-field-set--invalid",r),ref:K,children:[e.jsxs("legend",{className:"ams-field-set__legend",children:[U," ",e.jsx(Y,{hint:m,optional:B})]}),a]}));d.displayName="FieldSet";try{d.displayName="FieldSet",d.__docgenInfo={description:"",displayName:"FieldSet",props:{invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Forms/Field Set",component:d,args:{hint:"",invalid:!1,legend:"Wat is uw naam?",optional:!1},decorators:[a=>e.jsx("form",{children:e.jsx(a,{})})]},v={render:({hint:a,invalid:r,legend:m,optional:c})=>e.jsxs(d,{hint:a,invalid:r,legend:m,optional:c,children:[e.jsxs(s,{className:"ams-mb--sm",children:[e.jsx(t,{htmlFor:"input-a1",children:"Voornaam"}),r&&e.jsx(i,{id:"error-a1",children:"Vul uw voornaam in."}),e.jsx(o,{"aria-describedby":r?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:r})]}),e.jsxs(s,{children:[e.jsx(t,{htmlFor:"input-a2",children:"Achternaam"}),r&&e.jsx(i,{id:"error-a2",children:"Vul uw achternaam in."}),e.jsx(o,{"aria-describedby":r?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:r})]})]})},b={render:a=>e.jsxs(d,{"aria-describedby":"description-b",invalid:a.invalid,legend:a.legend,children:[e.jsx(u,{className:"ams-mb--sm",id:"description-b",size:"small",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(s,{className:"ams-mb--sm",children:[e.jsx(t,{htmlFor:"input-b1",children:"Voornaam"}),a.invalid&&e.jsx(i,{id:"error-b1",children:"Vul uw voornaam in."}),e.jsx(o,{"aria-describedby":a.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:a.invalid})]}),e.jsxs(s,{children:[e.jsx(t,{htmlFor:"input-b2",children:"Achternaam"}),a.invalid&&e.jsx(i,{id:"error-b2",children:"Vul uw achternaam in."}),e.jsx(o,{"aria-describedby":a.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:a.invalid})]})]})},g={args:{hint:"verplicht",optional:!1},render:({hint:a,invalid:r,legend:m,optional:c})=>e.jsxs(d,{hint:a,invalid:r,legend:m,optional:c,children:[e.jsxs(s,{className:"ams-mb--sm",children:[e.jsx(t,{htmlFor:"input-b3",children:"Voornaam"}),r&&e.jsx(i,{id:"error-b3",children:"Vul uw voornaam in."}),e.jsx(o,{"aria-describedby":r?"error-b3":void 0,"aria-required":"true",id:"input-b3",invalid:r})]}),e.jsxs(s,{children:[e.jsx(t,{htmlFor:"input-b4",children:"Achternaam"}),r&&e.jsx(i,{id:"error-b4",children:"Vul uw achternaam in."}),e.jsx(o,{"aria-describedby":r?"error-b4":void 0,"aria-required":"true",id:"input-b4",invalid:r})]})]})},p={args:{invalid:!0},render:a=>e.jsxs(d,{"aria-describedby":"description-c",invalid:a.invalid,legend:a.legend,children:[e.jsx(u,{className:"ams-mb--sm",id:"description-c",size:"small",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(s,{className:"ams-mb--sm",children:[e.jsx(t,{htmlFor:"input-c1",children:"Voornaam"}),a.invalid&&e.jsx(i,{id:"error-c1",children:"Vul uw voornaam in."}),e.jsx(o,{"aria-describedby":a.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:a.invalid})]}),e.jsxs(s,{children:[e.jsx(t,{htmlFor:"input-c2",children:"Achternaam"}),a.invalid&&e.jsx(i,{id:"error-c2",children:"Vul uw achternaam in."}),e.jsx(o,{"aria-describedby":a.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:a.invalid})]})]})},h={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-describedby":`description-d${a.invalid?" error-d":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(u,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(F,{gap:"extra-small",children:[e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},x={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-describedby":`description-e${a.invalid?" error-e":""}`,"aria-required":"true",invalid:a.invalid,legend:a.legend,role:"radiogroup",children:[e.jsx(u,{className:"ams-mb--sm",id:"description-e",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb--sm",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(F,{gap:"extra-small",children:[e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(n,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},j={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-labelledby":`fieldset-f description-f${a.invalid?" error-f":""}`,id:"fieldset-f",invalid:a.invalid,legend:a.legend,children:[e.jsx(u,{className:"ams-mb--sm",id:"description-f",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb--sm",id:"error-f",children:"Geef aan waar uw melding over gaat."}),e.jsxs(F,{gap:"extra-small",children:[e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},f={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(d,{"aria-labelledby":`fieldset-g description-g${a.invalid?" error-g":""}`,id:"fieldset-g",invalid:a.invalid,legend:a.legend,children:[e.jsx(u,{className:"ams-mb--sm",id:"description-g",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(i,{className:"ams-mb--sm",id:"error-g",children:"Geef aan waar uw melding over gaat."}),e.jsxs(F,{gap:"extra-small",children:[e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(l,{"aria-required":"true",invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};var q,w,y;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ({
    hint,
    invalid,
    legend,
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
      <Paragraph className="ams-mb--sm" id="description-b" size="small">
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
    hint: 'verplicht',
    optional: false
  },
  render: ({
    hint,
    invalid,
    legend,
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
      <Paragraph className="ams-mb--sm" id="description-c" size="small">
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
    invalid: true,
    legend: 'Waar gaat uw melding over?'
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
      <Paragraph className="ams-mb--sm" id="description-g" size="small">
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
