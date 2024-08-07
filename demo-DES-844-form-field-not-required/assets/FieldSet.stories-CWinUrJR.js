import{j as a}from"./jsx-runtime-BlAj40OV.js";import{F as l,f as s,E as r,T as o,P as t,C as q,R as d,g as n}from"./index.esm-BF58LKzl.js";import{c as ee}from"./clsx-B-dksMZM.js";import{r as ae}from"./index-Cs7sjTYM.js";import{a as re}from"./Label-nD_f5r9k.js";const i=ae.forwardRef(({children:e,className:K,invalid:Q,legend:U,required:X,notRequiredLabel:j="niet verplicht",...Y},Z)=>a.jsxs("fieldset",{...Y,ref:Z,className:ee("ams-field-set",Q&&"ams-field-set--invalid",K),children:[a.jsxs("legend",{className:"ams-field-set__legend",children:[U,!X&&j&&a.jsx(re,{notRequiredLabel:j})]}),e]}));i.displayName="FieldSet";try{i.displayName="FieldSet",i.__docgenInfo={description:"",displayName:"FieldSet",props:{invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},notRequiredLabel:{defaultValue:{value:"niet verplicht"},description:"Text to inform the user that the field is explicitely not required.",name:"notRequiredLabel",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Whether the field set is required.",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Components/Forms/Field Set",component:i,args:{invalid:!1,legend:"Wat is uw naam?"},decorators:[e=>a.jsx("form",{children:a.jsx(e,{})})]},u={render:e=>a.jsxs(i,{invalid:e.invalid,legend:e.legend,notRequired:e.notRequired,children:[a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-a1",children:"Voornaam"}),e.invalid&&a.jsx(r,{id:"error-a1",children:"Vul uw voornaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-a2",children:"Achternaam"}),e.invalid&&a.jsx(r,{id:"error-a2",children:"Vul uw achternaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:e.invalid})]})]})},m={render:e=>a.jsxs(i,{invalid:e.invalid,legend:e.legend,notRequired:e.notRequired,"aria-describedby":"description-b",children:[a.jsx(t,{id:"description-b",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-b1",children:"Voornaam"}),e.invalid&&a.jsx(r,{id:"error-b1",children:"Vul uw voornaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-b2",children:"Achternaam"}),e.invalid&&a.jsx(r,{id:"error-b2",children:"Vul uw achternaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:e.invalid})]})]})},c={args:{notRequired:!0,notRequiredLabel:"niet verplicht"},render:e=>a.jsxs(i,{invalid:e.invalid,legend:e.legend,notRequired:e.notRequired,children:[a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-a1",children:"Voornaam"}),e.invalid&&a.jsx(r,{id:"error-a1",children:"Vul uw voornaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-a2",children:"Achternaam"}),e.invalid&&a.jsx(r,{id:"error-a2",children:"Vul uw achternaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:e.invalid})]})]})},v={args:{invalid:!0},render:e=>a.jsxs(i,{invalid:e.invalid,legend:e.legend,notRequired:e.notRequired,"aria-describedby":"description-c",children:[a.jsx(t,{id:"description-c",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-c1",children:"Voornaam"}),e.invalid&&a.jsx(r,{id:"error-c1",children:"Vul uw voornaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-c2",children:"Achternaam"}),e.invalid&&a.jsx(r,{id:"error-c2",children:"Vul uw achternaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:e.invalid})]})]})},g={args:{legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(i,{"aria-describedby":`description-d${e.invalid?" error-d":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,notRequired:e.notRequired,role:"radiogroup",children:[a.jsx(t,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},b={args:{legend:"Waar gaat uw melding over?",notRequired:!0,notRequiredLabel:"niet verplicht"},render:e=>a.jsxs(i,{"aria-describedby":`description-d${e.invalid?" error-d":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,notRequired:e.notRequired,role:"radiogroup",children:[a.jsx(t,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},p={args:{legend:"Waar gaat uw melding over?",invalid:!0},render:e=>a.jsxs(i,{"aria-describedby":`description-e${e.invalid?" error-e":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,notRequired:e.notRequired,role:"radiogroup",children:[a.jsx(t,{className:"ams-mb--sm",id:"description-e",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},h={args:{legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(i,{"aria-labelledby":`fieldset-f description-f${e.invalid?" error-f":""}`,id:"fieldset-f",invalid:e.invalid,legend:e.legend,notRequired:e.notRequired,children:[a.jsx(t,{className:"ams-mb--sm",id:"description-f",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-f",children:"Geef aan waar uw melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},x={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(i,{"aria-labelledby":`fieldset-g description-g${e.invalid?" error-g":""}`,id:"fieldset-g",invalid:e.invalid,legend:e.legend,notRequired:e.notRequired,children:[a.jsx(t,{id:"description-g",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-g",children:"Geef aan waar uw melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};var f,R,F;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} notRequired={args.notRequired}>
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
}`,...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var w,E,y;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} notRequired={args.notRequired} aria-describedby="description-b">
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
}`,...(y=(E=m.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var N,S,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    notRequired: true,
    notRequiredLabel: 'niet verplicht'
  },
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} notRequired={args.notRequired}>
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
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var V,M,L;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} notRequired={args.notRequired} aria-describedby="description-c">
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
}`,...(L=(M=v.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var W,_,k;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-describedby={\`description-d\${args.invalid ? ' error-d' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} notRequired={args.notRequired} role="radiogroup">
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
}`,...(k=(_=g.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var G,I,z;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?',
    notRequired: true,
    notRequiredLabel: 'niet verplicht'
  },
  render: args => <FieldSet aria-describedby={\`description-d\${args.invalid ? ' error-d' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} notRequired={args.notRequired} role="radiogroup">
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
}`,...(z=(I=b.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var A,P,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?',
    invalid: true
  },
  render: args => <FieldSet aria-describedby={\`description-e\${args.invalid ? ' error-e' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} notRequired={args.notRequired} role="radiogroup">
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
  render: args => <FieldSet aria-labelledby={\`fieldset-f description-f\${args.invalid ? ' error-f' : ''}\`} id="fieldset-f" invalid={args.invalid} legend={args.legend} notRequired={args.notRequired}>
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
}`,...($=(H=h.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var O,B,J;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    invalid: true,
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-labelledby={\`fieldset-g description-g\${args.invalid ? ' error-g' : ''}\`} id="fieldset-g" invalid={args.invalid} legend={args.legend} notRequired={args.notRequired}>
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
}`,...(J=(B=x.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};const de=["Default","WithDescription","WithNotRequiredLabel","WithError","RadioGroup","RadioGroupWithNotRequiredLabel","RadioGroupWithError","CheckboxGroup","CheckboxGroupWithError"],ue=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:h,CheckboxGroupWithError:x,Default:u,RadioGroup:g,RadioGroupWithError:p,RadioGroupWithNotRequiredLabel:b,WithDescription:m,WithError:v,WithNotRequiredLabel:c,__namedExportsOrder:de,default:ie},Symbol.toStringTag,{value:"Module"}));export{h as C,ue as F,g as R,m as W,c as a,v as b,b as c,p as d,x as e};
