import{j as a}from"./jsx-runtime-BlAj40OV.js";import{f as l,a as s,E as r,T as o,P as t,C as q,R as d,i as n}from"./index.esm-BXcx5UUI.js";import{c as re}from"./clsx-B-dksMZM.js";import{r as ie}from"./index-Cs7sjTYM.js";import{H as E}from"./Hint-D4EIfW8U.js";const i=ie.forwardRef(({children:e,className:m,invalid:u,legend:c,hint:F,optional:Z,...ee},ae)=>{let y=null;return Z?y=F?a.jsx(E,{hint:F}):a.jsx(E,{hint:"niet verplicht"}):F&&(y=a.jsx(E,{hint:F})),a.jsxs("fieldset",{...ee,ref:ae,className:re("ams-field-set",u&&"ams-field-set--invalid",m),children:[a.jsxs("legend",{className:"ams-field-set__legend",children:[c," ",y]}),e]})});i.displayName="FieldSet";try{i.displayName="FieldSet",i.__docgenInfo={description:"",displayName:"FieldSet",props:{invalid:{defaultValue:null,description:"Whether the field set has an input with a validation error",name:"invalid",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"The text for the caption.",name:"legend",required:!0,type:{name:"string"}},optional:{defaultValue:null,description:"Whether the associated inputs are optional. Will append the text '(niet verplicht)' to the label if no hint is provided.",name:"optional",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides additional context to the user on some inline text element such as a Label. For example: a form field can be marked as optional. Keep the text brief, preferably no more than two words, as it doesn't break words to a new line.",name:"hint",required:!1,type:{name:"string"}}}}}catch{}const de={title:"Components/Forms/Field Set",component:i,args:{invalid:!1,legend:"Wat is uw naam?",optional:!1,hint:""},decorators:[e=>a.jsx("form",{children:a.jsx(e,{})})]},v={render:({invalid:e,legend:m,hint:u,optional:c})=>a.jsxs(i,{invalid:e,legend:m,hint:u,optional:c,children:[a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-a1",children:"Voornaam"}),e&&a.jsx(r,{id:"error-a1",children:"Vul uw voornaam in."}),a.jsx(o,{"aria-describedby":e?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:e})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-a2",children:"Achternaam"}),e&&a.jsx(r,{id:"error-a2",children:"Vul uw achternaam in."}),a.jsx(o,{"aria-describedby":e?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:e})]})]})},b={render:e=>a.jsxs(i,{invalid:e.invalid,legend:e.legend,"aria-describedby":"description-b",children:[a.jsx(t,{id:"description-b",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-b1",children:"Voornaam"}),e.invalid&&a.jsx(r,{id:"error-b1",children:"Vul uw voornaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-b1":void 0,"aria-required":"true",id:"input-b1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-b2",children:"Achternaam"}),e.invalid&&a.jsx(r,{id:"error-b2",children:"Vul uw achternaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-b2":void 0,"aria-required":"true",id:"input-b2",invalid:e.invalid})]})]})},g={args:{optional:!1,hint:"verplicht"},render:({invalid:e,legend:m,hint:u,optional:c})=>a.jsxs(i,{invalid:e,legend:m,optional:c,hint:u,children:[a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-a1",children:"Voornaam"}),e&&a.jsx(r,{id:"error-a1",children:"Vul uw voornaam in."}),a.jsx(o,{"aria-describedby":e?"error-a1":void 0,"aria-required":"true",id:"input-a1",invalid:e})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-a2",children:"Achternaam"}),e&&a.jsx(r,{id:"error-a2",children:"Vul uw achternaam in."}),a.jsx(o,{"aria-describedby":e?"error-a2":void 0,"aria-required":"true",id:"input-a2",invalid:e})]})]})},p={args:{invalid:!0},render:e=>a.jsxs(i,{invalid:e.invalid,legend:e.legend,"aria-describedby":"description-c",children:[a.jsx(t,{id:"description-c",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),a.jsxs(l,{className:"ams-mb--sm",children:[a.jsx(s,{htmlFor:"input-c1",children:"Voornaam"}),e.invalid&&a.jsx(r,{id:"error-c1",children:"Vul uw voornaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-c1":void 0,"aria-required":"true",id:"input-c1",invalid:e.invalid})]}),a.jsxs(l,{children:[a.jsx(s,{htmlFor:"input-c2",children:"Achternaam"}),e.invalid&&a.jsx(r,{id:"error-c2",children:"Vul uw achternaam in."}),a.jsx(o,{"aria-describedby":e.invalid?"error-c2":void 0,"aria-required":"true",id:"input-c2",invalid:e.invalid})]})]})},h={args:{legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(i,{"aria-describedby":`description-d${e.invalid?" error-d":""}`,invalid:e.invalid,legend:e.legend,role:"radiogroup",children:[a.jsx(t,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},x={args:{hint:"niet verplicht",legend:"Waar gaat uw melding over?",optional:!0},render:e=>a.jsxs(i,{"aria-describedby":`description-d${e.invalid?" error-d":""}`,invalid:e.invalid,legend:e.legend,hint:e.hint,optional:e.optional,role:"radiogroup",children:[a.jsx(t,{className:"ams-mb--sm",id:"description-d",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-d",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"false",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"false",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"false",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"false",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},j={args:{legend:"Waar gaat uw melding over?",invalid:!0},render:e=>a.jsxs(i,{"aria-describedby":`description-e${e.invalid?" error-e":""}`,invalid:e.invalid,legend:e.legend,role:"radiogroup",children:[a.jsx(t,{className:"ams-mb--sm",id:"description-e",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-e",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(d,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},f={args:{legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(i,{"aria-labelledby":`fieldset-f description-f${e.invalid?" error-f":""}`,id:"fieldset-f",invalid:e.invalid,legend:e.legend,children:[a.jsx(t,{className:"ams-mb--sm",id:"description-f",size:"small",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-f",children:"Geef aan waar uw melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},w={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:e=>a.jsxs(i,{"aria-labelledby":`fieldset-g description-g${e.invalid?" error-g":""}`,id:"fieldset-g",invalid:e.invalid,legend:e.legend,children:[a.jsx(t,{id:"description-g",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),e.invalid&&a.jsx(r,{className:"ams-mb--sm",id:"error-g",children:"Geef aan waar uw melding over gaat."}),a.jsxs(q,{gap:"extra-small",children:[a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"evenement",children:"Evenement"}),a.jsx(n,{"aria-required":"true",invalid:e.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};var V,N,S;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(S=(N=v.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var C,R,M;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(R=b.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var W,_,k;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=(_=g.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var G,I,z;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(I=p.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var A,L,P;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(L=h.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var H,D,T;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    hint: 'niet verplicht',
    legend: 'Waar gaat uw melding over?',
    optional: true
  },
  render: args => <FieldSet aria-describedby={\`description-d\${args.invalid ? ' error-d' : ''}\`} invalid={args.invalid} legend={args.legend} hint={args.hint} optional={args.optional} role="radiogroup">
      <Paragraph className="ams-mb--sm" id="description-d" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb--sm" id="error-d">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
        <Radio aria-required="false" invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio aria-required="false" invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio aria-required="false" invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio aria-required="false" invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...(T=(D=x.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var $,O,K;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(O=j.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var B,J,Q;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ne=["Default","WithDescription","WithHint","WithValidation","RadioGroup","RadioGroupWithHint","RadioGroupWithValidation","CheckboxGroup","CheckboxGroupWithValidation"],ue=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:f,CheckboxGroupWithValidation:w,Default:v,RadioGroup:h,RadioGroupWithHint:x,RadioGroupWithValidation:j,WithDescription:b,WithHint:g,WithValidation:p,__namedExportsOrder:ne,default:de},Symbol.toStringTag,{value:"Module"}));export{f as C,ue as F,h as R,b as W,g as a,p as b,x as c,j as d,w as e};
