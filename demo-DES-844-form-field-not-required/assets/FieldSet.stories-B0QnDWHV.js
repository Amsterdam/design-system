import{j as r}from"./jsx-runtime-BlAj40OV.js";import{F as l,f as s,E as a,T as o,P as t,C as x,R as d,g as n}from"./index.esm-DrSuRrJm.js";import{c as ee}from"./clsx-B-dksMZM.js";import{r as re}from"./index-Cs7sjTYM.js";import{a as ae}from"./Label-CMN0RcpO.js";const i=re.forwardRef(({children:e,className:K,invalid:Q,legend:U,required:X,notRequiredLabel:j="niet verplicht",...Y},Z)=>r.jsxs("fieldset",{...Y,ref:Z,className:ee("ams-field-set",Q&&"ams-field-set--invalid",K),children:[r.jsxs("legend",{className:"ams-field-set__legend",children:[U,X===!1&&j&&r.jsx(ae,{notRequiredLabel:j})]}),e]}));i.displayName="FieldSet";try{i.displayName="FieldSet",i.__docgenInfo={description:"",displayName:"FieldSet",props:{invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},notRequiredLabel:{defaultValue:{value:"niet verplicht"},description:"Text to inform the user that the field is explicitely not required.",name:"notRequiredLabel",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Whether the field set is required.",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Components/Forms/Field Set",component:i,args:{invalid:!1,legend:"Wat is uw naam?",notRequiredLabel:"niet verplicht",required:void 0},decorators:[e=>r.jsx("form",{children:r.jsx(e,{})})]},u={render:e=>r.jsxs(i,{invalid:e.invalid,legend:e.legend,required:e.required,notRequiredLabel:e.notRequiredLabel,children:[r.jsxs(l,{className:"ams-mb--sm",children:[r.jsx(s,{htmlFor:"input-a1",required:e.required,notRequiredLabel:"",children:"Voornaam"}),e.invalid&&r.jsx(a,{id:"error-a1",children:"Vul uw voornaam in."}),r.jsx(o,{"aria-describedby":e.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:e.invalid})]}),r.jsxs(l,{children:[r.jsx(s,{htmlFor:"input-a2",required:e.required,notRequiredLabel:"",children:"Achternaam"}),e.invalid&&r.jsx(a,{id:"error-a2",children:"Vul uw achternaam in."}),r.jsx(o,{"aria-describedby":e.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:e.invalid})]})]})},m={render:e=>r.jsxs(i,{invalid:e.invalid,legend:e.legend,required:e.required,"aria-describedby":"description-b",children:[r.jsx(t,{id:"description-b",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),r.jsxs(l,{className:"ams-mb--sm",children:[r.jsx(s,{htmlFor:"input-b1",required:e.required,notRequiredLabel:"",children:"Voornaam"}),e.invalid&&r.jsx(a,{id:"error-b1",children:"Vul uw voornaam in."}),r.jsx(o,{"aria-describedby":e.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:e.invalid})]}),r.jsxs(l,{children:[r.jsx(s,{htmlFor:"input-b2",required:e.required,notRequiredLabel:"",children:"Achternaam"}),e.invalid&&r.jsx(a,{id:"error-b2",children:"Vul uw achternaam in."}),r.jsx(o,{"aria-describedby":e.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:e.invalid})]})]})},c={args:{required:!0,notRequiredLabel:"niet verplicht"},render:e=>r.jsxs(i,{invalid:e.invalid,legend:e.legend,required:e.required,notRequiredLabel:e.notRequiredLabel,children:[r.jsxs(l,{className:"ams-mb--sm",children:[r.jsx(s,{htmlFor:"input-a1",required:e.required,notRequiredLabel:"",children:"Voornaam"}),e.invalid&&r.jsx(a,{id:"error-a1",children:"Vul uw voornaam in."}),r.jsx(o,{"aria-describedby":e.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:e.invalid})]}),r.jsxs(l,{children:[r.jsx(s,{htmlFor:"input-a2",required:e.required,notRequiredLabel:"",children:"Achternaam"}),e.invalid&&r.jsx(a,{id:"error-a2",children:"Vul uw achternaam in."}),r.jsx(o,{"aria-describedby":e.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:e.invalid})]})]})},v={args:{invalid:!0},render:e=>r.jsxs(i,{invalid:e.invalid,legend:e.legend,required:e.required,"aria-describedby":"description-c",children:[r.jsx(t,{id:"description-c",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),r.jsxs(l,{className:"ams-mb--sm",children:[r.jsx(s,{htmlFor:"input-c1",required:e.required,notRequiredLabel:"",children:"Voornaam"}),e.invalid&&r.jsx(a,{id:"error-c1",children:"Vul uw voornaam in."}),r.jsx(o,{"aria-describedby":e.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:e.invalid})]}),r.jsxs(l,{children:[r.jsx(s,{htmlFor:"input-c2",required:e.required,notRequiredLabel:"",children:"Achternaam"}),e.invalid&&r.jsx(a,{id:"error-c2",children:"Vul uw achternaam in."}),r.jsx(o,{"aria-describedby":e.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:e.invalid})]})]})},b={args:{legend:"Waar gaat uw melding over?"},render:e=>r.jsxs(i,{"aria-describedby":`description-d${e.invalid?" error-d":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,required:e.required,role:"radiogroup",children:[r.jsx(t,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&r.jsx(a,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),r.jsxs(x,{gap:"extra-small",children:[r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},g={args:{legend:"Waar gaat uw melding over?",required:!0,notRequiredLabel:"niet verplicht"},render:e=>r.jsxs(i,{"aria-describedby":`description-d${e.invalid?" error-d":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,required:e.required,role:"radiogroup",children:[r.jsx(t,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&r.jsx(a,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),r.jsxs(x,{gap:"extra-small",children:[r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},p={args:{legend:"Waar gaat uw melding over?",invalid:!0},render:e=>r.jsxs(i,{"aria-describedby":`description-e${e.invalid?" error-e":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,required:e.required,role:"radiogroup",children:[r.jsx(t,{className:"ams-mb--sm",id:"description-e",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&r.jsx(a,{className:"ams-mb--sm",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),r.jsxs(x,{gap:"extra-small",children:[r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),r.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},h={args:{legend:"Waar gaat uw melding over?"},render:e=>r.jsxs(i,{"aria-labelledby":`fieldset-f description-f${e.invalid?" error-f":""}`,id:"fieldset-f",invalid:e.invalid,legend:e.legend,required:e.required,children:[r.jsx(t,{className:"ams-mb--sm",id:"description-f",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&r.jsx(a,{className:"ams-mb--sm",id:"error-f",children:"Geef aan waar uw melding over gaat."}),r.jsxs(x,{gap:"extra-small",children:[r.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),r.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),r.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),r.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},q={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:e=>r.jsxs(i,{"aria-labelledby":`fieldset-g description-g${e.invalid?" error-g":""}`,id:"fieldset-g",invalid:e.invalid,legend:e.legend,required:e.required,children:[r.jsx(t,{id:"description-g",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),e.invalid&&r.jsx(a,{className:"ams-mb--sm",id:"error-g",children:"Geef aan waar uw melding over gaat."}),r.jsxs(x,{gap:"extra-small",children:[r.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),r.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),r.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),r.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};var f,R,F;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} required={args.required} notRequiredLabel={args.notRequiredLabel}>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-a1" required={args.required} notRequiredLabel="">
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a1' : undefined} aria-required="true" id="input-a1" invalid={args.invalid} />
      </Field>
      <Field>
        <Label htmlFor="input-a2" required={args.required} notRequiredLabel="">
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a2' : undefined} aria-required="true" id="input-a2" invalid={args.invalid} />
      </Field>
    </FieldSet>
}`,...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var w,L,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} required={args.required} aria-describedby="description-b">
      <Paragraph id="description-b" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-b1" required={args.required} notRequiredLabel="">
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b1' : undefined} aria-required="true" id="input-b1" invalid={args.invalid} />
      </Field>
      <Field>
        <Label htmlFor="input-b2" required={args.required} notRequiredLabel="">
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-b2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-b2' : undefined} aria-required="true" id="input-b2" invalid={args.invalid} />
      </Field>
    </FieldSet>
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var y,N,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    required: true,
    notRequiredLabel: 'niet verplicht'
  },
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} required={args.required} notRequiredLabel={args.notRequiredLabel}>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-a1" required={args.required} notRequiredLabel="">
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a1' : undefined} aria-required="true" id="input-a1" invalid={args.invalid} />
      </Field>
      <Field>
        <Label htmlFor="input-a2" required={args.required} notRequiredLabel="">
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-a2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-a2' : undefined} aria-required="true" id="input-a2" invalid={args.invalid} />
      </Field>
    </FieldSet>
}`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var C,V,M;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} required={args.required} aria-describedby="description-c">
      <Paragraph id="description-c" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Field className="ams-mb--sm">
        <Label htmlFor="input-c1" required={args.required} notRequiredLabel="">
          Voornaam
        </Label>
        {args.invalid && <ErrorMessage id="error-c1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-c1' : undefined} aria-required="true" id="input-c1" invalid={args.invalid} />
      </Field>
      <Field>
        <Label htmlFor="input-c2" required={args.required} notRequiredLabel="">
          Achternaam
        </Label>
        {args.invalid && <ErrorMessage id="error-c2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput aria-describedby={args.invalid ? 'error-c2' : undefined} aria-required="true" id="input-c2" invalid={args.invalid} />
      </Field>
    </FieldSet>
}`,...(M=(V=v.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var W,_,k;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-describedby={\`description-d\${args.invalid ? ' error-d' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} required={args.required} role="radiogroup">
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
}`,...(k=(_=b.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var G,I,z;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?',
    required: true,
    notRequiredLabel: 'niet verplicht'
  },
  render: args => <FieldSet aria-describedby={\`description-d\${args.invalid ? ' error-d' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} required={args.required} role="radiogroup">
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
}`,...(z=(I=g.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var A,P,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?',
    invalid: true
  },
  render: args => <FieldSet aria-describedby={\`description-e\${args.invalid ? ' error-e' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} required={args.required} role="radiogroup">
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
}`,...(D=(P=p.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var T,H,$;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-labelledby={\`fieldset-f description-f\${args.invalid ? ' error-f' : ''}\`} id="fieldset-f" invalid={args.invalid} legend={args.legend} required={args.required}>
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
}`,...($=(H=h.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var O,B,J;q.parameters={...q.parameters,docs:{...(O=q.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    invalid: true,
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-labelledby={\`fieldset-g description-g\${args.invalid ? ' error-g' : ''}\`} id="fieldset-g" invalid={args.invalid} legend={args.legend} required={args.required}>
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
}`,...(J=(B=q.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};const de=["Default","WithDescription","WithNotRequiredLabel","WithError","RadioGroup","RadioGroupWithNotRequiredLabel","RadioGroupWithError","CheckboxGroup","CheckboxGroupWithError"],ue=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:h,CheckboxGroupWithError:q,Default:u,RadioGroup:b,RadioGroupWithError:p,RadioGroupWithNotRequiredLabel:g,WithDescription:m,WithError:v,WithNotRequiredLabel:c,__namedExportsOrder:de,default:ie},Symbol.toStringTag,{value:"Module"}));export{h as C,ue as F,b as R,m as W,c as a,v as b,g as c,p as d,q as e};
