import{j as a}from"./jsx-runtime-BlAj40OV.js";import{F as l,e as s,E as i,T as t,P as o,C as j,R as d,h as n}from"./index.esm-CPhDHx4F.js";import{c as ie}from"./clsx-B-dksMZM.js";import{r as re}from"./index-Cs7sjTYM.js";const F=({hint:e})=>a.jsxs("span",{className:"ams-hint",children:["(",e,")"]}),r=re.forwardRef(({children:e,className:U,invalid:X,legend:Y,hint:f,optional:Z,...ee},ae)=>{let q=null;return Z?q=f?a.jsx(F,{hint:f}):a.jsx(F,{hint:"niet verplicht"}):f&&(q=a.jsx(F,{hint:f})),a.jsxs("fieldset",{...ee,ref:ae,className:ie("ams-field-set",X&&"ams-field-set--invalid",U),children:[a.jsxs("legend",{className:"ams-field-set__legend",children:[Y," ",q]}),e]})});r.displayName="FieldSet";try{r.displayName="FieldSet",r.__docgenInfo={description:"",displayName:"FieldSet",props:{invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},optional:{defaultValue:null,description:"Whether the associated input is optional. Will render the value of the hint prop or 'niet verplicht'. Make sure that the hint communicates field optionality this prop is `true` and vice versa.",name:"optional",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides additional context to the user, i.e. whether the associated form field is optional or required. Make sure that this prop communicates field optionality if the `optional` prop is `true` and vice versa.",name:"hint",required:!1,type:{name:"string"}}}}}catch{}const de={title:"Components/Forms/Field Set",component:r,args:{invalid:!1,legend:"Wat is uw naam?",optional:!1,hint:""},decorators:[e=>a.jsx("form",{children:a.jsx(e,{})})]},u={render:e=>a.jsxs(r,{invalid:e.invalid,legend:e.legend,hint:e.hint,optional:e.optional,children:[a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-a1",children:"Voornaam"}),e.invalid&&a.jsx(i,{id:"error-a1",children:"Vul uw voornaam in."}),a.jsx(t,{"aria-describedby":e.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-a2",children:"Achternaam"}),e.invalid&&a.jsx(i,{id:"error-a2",children:"Vul uw achternaam in."}),a.jsx(t,{"aria-describedby":e.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:e.invalid})]})]})},m={render:e=>a.jsxs(r,{invalid:e.invalid,legend:e.legend,"aria-describedby":"description-b",children:[a.jsx(o,{id:"description-b",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-b1",children:"Voornaam"}),e.invalid&&a.jsx(i,{id:"error-b1",children:"Vul uw voornaam in."}),a.jsx(t,{"aria-describedby":e.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-b2",children:"Achternaam"}),e.invalid&&a.jsx(i,{id:"error-b2",children:"Vul uw achternaam in."}),a.jsx(t,{"aria-describedby":e.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:e.invalid})]})]})},c={args:{optional:!1,hint:"verplicht"},render:e=>a.jsxs(r,{invalid:e.invalid,legend:e.legend,optional:e.optional,hint:e.hint,children:[a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-a1",children:"Voornaam"}),e.invalid&&a.jsx(i,{id:"error-a1",children:"Vul uw voornaam in."}),a.jsx(t,{"aria-describedby":e.invalid?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-a2",children:"Achternaam"}),e.invalid&&a.jsx(i,{id:"error-a2",children:"Vul uw achternaam in."}),a.jsx(t,{"aria-describedby":e.invalid?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:e.invalid})]})]})},v={args:{invalid:!0},render:e=>a.jsxs(r,{invalid:e.invalid,legend:e.legend,"aria-describedby":"description-c",children:[a.jsx(o,{id:"description-c",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-c1",children:"Voornaam"}),e.invalid&&a.jsx(i,{id:"error-c1",children:"Vul uw voornaam in."}),a.jsx(t,{"aria-describedby":e.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-c2",children:"Achternaam"}),e.invalid&&a.jsx(i,{id:"error-c2",children:"Vul uw achternaam in."}),a.jsx(t,{"aria-describedby":e.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:e.invalid})]})]})},g={args:{legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(r,{"aria-describedby":`description-d${e.invalid?" error-d":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,role:"radiogroup",children:[a.jsx(o,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(i,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(j,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},p={args:{hint:"niet verplicht",legend:"Waar gaat uw melding over?",optional:!0},render:e=>a.jsxs(r,{"aria-describedby":`description-d${e.invalid?" error-d":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,hint:e.hint,optional:e.optional,role:"radiogroup",children:[a.jsx(o,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(i,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(j,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},b={args:{legend:"Waar gaat uw melding over?",invalid:!0},render:e=>a.jsxs(r,{"aria-describedby":`description-e${e.invalid?" error-e":""}`,"aria-required":"true",invalid:e.invalid,legend:e.legend,role:"radiogroup",children:[a.jsx(o,{className:"ams-mb--sm",id:"description-e",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(i,{className:"ams-mb--sm",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(j,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},h={args:{legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(r,{"aria-labelledby":`fieldset-f description-f${e.invalid?" error-f":""}`,id:"fieldset-f",invalid:e.invalid,legend:e.legend,children:[a.jsx(o,{className:"ams-mb--sm",id:"description-f",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(i,{className:"ams-mb--sm",id:"error-f",children:"Geef aan waar uw melding over gaat."}),a.jsxs(j,{gap:"extra-small",children:[a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},x={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(r,{"aria-labelledby":`fieldset-g description-g${e.invalid?" error-g":""}`,id:"fieldset-g",invalid:e.invalid,legend:e.legend,children:[a.jsx(o,{id:"description-g",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(i,{className:"ams-mb--sm",id:"error-g",children:"Geef aan waar uw melding over gaat."}),a.jsxs(j,{gap:"extra-small",children:[a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};var w,y,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} hint={args.hint} optional={args.optional}>
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
}`,...(E=(y=u.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var N,V,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(S=(V=m.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var C,R,M;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    optional: false,
    hint: 'verplicht'
  },
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} optional={args.optional} hint={args.hint}>
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
}`,...(M=(R=c.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var W,_,k;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=(_=v.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var G,I,z;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(I=g.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var A,L,P;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    hint: 'niet verplicht',
    legend: 'Waar gaat uw melding over?',
    optional: true
  },
  render: args => <FieldSet aria-describedby={\`description-d\${args.invalid ? ' error-d' : ''}\`} aria-required="true" invalid={args.invalid} legend={args.legend} hint={args.hint} optional={args.optional} role="radiogroup">
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
}`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var H,D,T;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(T=(D=b.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var $,O,B;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(B=(O=h.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ne=["Default","WithDescription","WithHint","WithValidation","RadioGroup","RadioGroupWithHint","RadioGroupWithValidation","CheckboxGroup","CheckboxGroupWithValidation"],ue=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:h,CheckboxGroupWithValidation:x,Default:u,RadioGroup:g,RadioGroupWithHint:p,RadioGroupWithValidation:b,WithDescription:m,WithHint:c,WithValidation:v,__namedExportsOrder:ne,default:de},Symbol.toStringTag,{value:"Module"}));export{h as C,ue as F,g as R,m as W,c as a,v as b,p as c,b as d,x as e};
