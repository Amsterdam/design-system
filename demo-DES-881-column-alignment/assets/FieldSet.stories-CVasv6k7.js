import{j as a}from"./jsx-runtime-BlAj40OV.js";import{F as n,R as i}from"./FieldSet-BB4WSoDJ.js";import{L as l}from"./Label-DNXaCjsW.js";import{T as s}from"./TextInput-jIMKXhRY.js";import{F as o}from"./Field-kaYbOqUn.js";import{E as r}from"./ErrorMessage-BV40jE7R.js";import{P as t}from"./Paragraph-BWS5kDPY.js";import{C as h}from"./Column-CKBz_S59.js";import{C as d}from"./Checkbox-DmLscak1.js";const L={title:"Components/Forms/Field Set",component:n,args:{invalid:!1,legend:"Wat is uw naam?"},decorators:[e=>a.jsx("form",{children:a.jsx(e,{})})]},m={render:e=>a.jsxs(n,{invalid:e.invalid,legend:e.legend,children:[a.jsxs(o,{className:"ams-mb--sm",children:[a.jsx(l,{htmlFor:"input-a1",children:"Voornaam"}),e.invalid&&a.jsx(r,{id:"error-a1",children:"Vul uw voornaam in."}),a.jsx(s,{"aria-describedby":e.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:e.invalid})]}),a.jsxs(o,{children:[a.jsx(l,{htmlFor:"input-a2",children:"Achternaam"}),e.invalid&&a.jsx(r,{id:"error-a2",children:"Vul uw achternaam in."}),a.jsx(s,{"aria-describedby":e.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:e.invalid})]})]})},u={render:e=>a.jsxs(n,{invalid:e.invalid,legend:e.legend,"aria-describedby":"description-b",children:[a.jsx(t,{id:"description-b",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),a.jsxs(o,{className:"ams-mb--sm",children:[a.jsx(l,{htmlFor:"input-b1",children:"Voornaam"}),e.invalid&&a.jsx(r,{id:"error-b1",children:"Vul uw voornaam in."}),a.jsx(s,{"aria-describedby":e.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:e.invalid})]}),a.jsxs(o,{children:[a.jsx(l,{htmlFor:"input-b2",children:"Achternaam"}),e.invalid&&a.jsx(r,{id:"error-b2",children:"Vul uw achternaam in."}),a.jsx(s,{"aria-describedby":e.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:e.invalid})]})]})},c={args:{invalid:!0},render:e=>a.jsxs(n,{invalid:e.invalid,legend:e.legend,"aria-describedby":"description-c",children:[a.jsx(t,{id:"description-c",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),a.jsxs(o,{className:"ams-mb--sm",children:[a.jsx(l,{htmlFor:"input-c1",children:"Voornaam"}),e.invalid&&a.jsx(r,{id:"error-c1",children:"Vul uw voornaam in."}),a.jsx(s,{"aria-describedby":e.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:e.invalid})]}),a.jsxs(o,{children:[a.jsx(l,{htmlFor:"input-c2",children:"Achternaam"}),e.invalid&&a.jsx(r,{id:"error-c2",children:"Vul uw achternaam in."}),a.jsx(s,{"aria-describedby":e.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:e.invalid})]})]})},v={args:{legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(n,{"aria-describedby":`description-d${e.invalid?" error-d":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,role:"radiogroup",children:[a.jsx(t,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(h,{gap:"extra-small",children:[a.jsx(i,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(i,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(i,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(i,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},b={args:{legend:"Waar gaat uw melding over?",invalid:!0},render:e=>a.jsxs(n,{"aria-describedby":`description-e${e.invalid?" error-e":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,role:"radiogroup",children:[a.jsx(t,{className:"ams-mb--sm",id:"description-e",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(h,{gap:"extra-small",children:[a.jsx(i,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(i,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(i,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(i,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},g={args:{legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(n,{"aria-labelledby":`fieldset-f description-f${e.invalid?" error-f":""}`,id:"fieldset-f",invalid:e.invalid,legend:e.legend,children:[a.jsx(t,{className:"ams-mb--sm",id:"description-f",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-f",children:"Geef aan waar uw melding over gaat."}),a.jsxs(h,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},p={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(n,{"aria-labelledby":`fieldset-g description-g${e.invalid?" error-g":""}`,id:"fieldset-g",invalid:e.invalid,legend:e.legend,children:[a.jsx(t,{id:"description-g",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-g",children:"Geef aan waar uw melding over gaat."}),a.jsxs(h,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};var x,j,f;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <FieldSet invalid={args.invalid} legend={args.legend}>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-a1">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a1' : undefined} aria-required="true" id="input-a1" invalid={args.invalid} />
      </Field>
      <Field>
        <Label htmlFor="input-a2">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a2' : undefined} aria-required="true" id="input-a2" invalid={args.invalid} />
      </Field>
    </FieldSet>
}`,...(f=(j=m.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var q,F,w;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(w=(F=u.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var E,C,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,N,R;v.parameters={...v.parameters,docs:{...(y=v.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(R=(N=v.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var M,V,k;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(k=(V=b.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var W,z,G;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(z=g.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var I,P,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const _=["Default","WithDescription","WithError","RadioGroup","RadioGroupWithError","CheckboxGroup","CheckboxGroupWithError"],U=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:g,CheckboxGroupWithError:p,Default:m,RadioGroup:v,RadioGroupWithError:b,WithDescription:u,WithError:c,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{g as C,U as F,v as R,u as W,c as a,b,p as c};
