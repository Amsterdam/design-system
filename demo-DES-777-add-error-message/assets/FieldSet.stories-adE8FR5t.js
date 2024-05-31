import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{F as n,R as r}from"./FieldSet-OhsVVCgX.js";import{L as l}from"./Label-7rbJKFpg.js";import{T as s}from"./TextInput-uCUCYHBQ.js";import{C as d}from"./Column-2uDLEbFL.js";import{P as b}from"./Paragraph-C4jU4-Z4.js";import{E as p}from"./ErrorMessage-BIVZW8RN.js";import{C as i}from"./Checkbox-C-0AeTC0.js";const N={title:"Components/Forms/Field Set",component:n,args:{invalid:!1,legend:"Wat is uw naam?"},decorators:[a=>e.jsx("form",{children:e.jsx(a,{})})]},t={render:a=>e.jsx(n,{invalid:a.invalid,legend:a.legend,children:e.jsxs(d,{gap:"extra-small",style:{width:"100%"},children:[e.jsx(l,{htmlFor:"input1",children:"Voornaam"}),e.jsx(s,{id:"input1",invalid:a.invalid,"aria-required":"true"}),e.jsx(l,{htmlFor:"input2",children:"Achternaam"}),e.jsx(s,{id:"input2",invalid:a.invalid,"aria-required":"true"})]})})},o={render:a=>e.jsxs(n,{invalid:a.invalid,legend:a.legend,"aria-describedby":"description2",children:[e.jsx(b,{id:"description2",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(d,{gap:"extra-small",children:[e.jsx(l,{htmlFor:"input3",children:"Voornaam"}),e.jsx(s,{id:"input3",invalid:a.invalid,"aria-required":"true"}),e.jsx(l,{htmlFor:"input4",children:"Achternaam"}),e.jsx(s,{id:"input4",invalid:a.invalid,"aria-required":"true"})]})]})},u={args:{invalid:!0},render:a=>e.jsxs(n,{invalid:a.invalid,legend:a.legend,"aria-describedby":"description3",children:[e.jsx(b,{id:"description3",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(d,{gap:"extra-small",children:[e.jsx(l,{htmlFor:"input5",children:"Voornaam"}),a.invalid&&e.jsx(p,{id:"error1",children:"Vul uw voornaam in."}),e.jsx(s,{id:"input5","aria-describedby":"error1","aria-required":"true",invalid:a.invalid}),e.jsx(l,{htmlFor:"input6",children:"Achternaam"}),a.invalid&&e.jsx(p,{id:"error2",children:"Vul uw achternaam in."}),e.jsx(s,{id:"input6","aria-describedby":"error2","aria-required":"true",invalid:a.invalid})]})]})},m={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(n,{legend:a.legend,"aria-describedby":"description4",role:"radiogroup","aria-required":"true",invalid:a.invalid,children:[e.jsx(b,{id:"description4",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),e.jsxs(d,{gap:"extra-small",children:[e.jsx(r,{name:"about",value:"horeca",invalid:a.invalid,"aria-required":"true",children:"Horecabedrijf"}),e.jsx(r,{name:"about",value:"ander_bedrijf",invalid:a.invalid,"aria-required":"true",children:"Ander soort bedrijf"}),e.jsx(r,{name:"about",value:"evenement",invalid:a.invalid,"aria-required":"true",children:"Evenement"}),e.jsx(r,{name:"about",value:"anders",invalid:a.invalid,"aria-required":"true",children:"Iets anders"})]})]})},v={args:{legend:"Waar gaat uw melding over?",invalid:!0},render:a=>e.jsxs(n,{legend:a.legend,"aria-describedby":"description5 error3",role:"radiogroup","aria-required":"true",invalid:a.invalid,children:[e.jsx(b,{id:"description5",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(p,{className:"ams-mb--sm",id:"error3",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(d,{gap:"extra-small",children:[e.jsx(r,{name:"about",value:"horeca",invalid:a.invalid,"aria-required":"true",children:"Horecabedrijf"}),e.jsx(r,{name:"about",value:"ander_bedrijf",invalid:a.invalid,"aria-required":"true",children:"Ander soort bedrijf"}),e.jsx(r,{name:"about",value:"evenement",invalid:a.invalid,"aria-required":"true",children:"Evenement"}),e.jsx(r,{name:"about",value:"anders",invalid:a.invalid,"aria-required":"true",children:"Iets anders"})]})]})},c={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsx(n,{legend:a.legend,invalid:a.invalid,children:e.jsxs(d,{gap:"extra-small",style:{width:"100%"},children:[e.jsx(i,{name:"about",value:"horeca",invalid:a.invalid,"aria-required":"true",children:"Horecabedrijf"}),e.jsx(i,{name:"about",value:"ander_bedrijf",invalid:a.invalid,"aria-required":"true",children:"Ander soort bedrijf"}),e.jsx(i,{name:"about",value:"evenement",invalid:a.invalid,"aria-required":"true",children:"Evenement"}),e.jsx(i,{name:"about",value:"anders",invalid:a.invalid,"aria-required":"true",children:"Iets anders"})]})})},g={args:{invalid:!0,legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(n,{"aria-describedby":"error4","aria-errormessage":"error4",legend:a.legend,invalid:a.invalid,children:[a.invalid&&e.jsx(p,{className:"ams-mb--sm",id:"error4",children:"Geef aan waar uw melding over gaat."}),e.jsxs(d,{gap:"extra-small",style:{width:"100%"},children:[e.jsx(i,{name:"about",value:"horeca",invalid:a.invalid,"aria-required":"true",children:"Horecabedrijf"}),e.jsx(i,{name:"about",value:"ander_bedrijf",invalid:a.invalid,"aria-required":"true",children:"Ander soort bedrijf"}),e.jsx(i,{name:"about",value:"evenement",invalid:a.invalid,"aria-required":"true",children:"Evenement"}),e.jsx(i,{name:"about",value:"anders",invalid:a.invalid,"aria-required":"true",children:"Iets anders"})]})]})};var h,x,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <FieldSet invalid={args.invalid} legend={args.legend}>
      <Column gap="extra-small" style={{
      width: '100%'
    }}>
        <Label htmlFor="input1">Voornaam</Label>
        <TextInput id="input1" invalid={args.invalid} aria-required="true" />
        <Label htmlFor="input2">Achternaam</Label>
        <TextInput id="input2" invalid={args.invalid} aria-required="true" />
      </Column>
    </FieldSet>
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var q,f,C;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} aria-describedby="description2">
      <Paragraph id="description2" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Column gap="extra-small">
        <Label htmlFor="input3">Voornaam</Label>
        <TextInput id="input3" invalid={args.invalid} aria-required="true" />
        <Label htmlFor="input4">Achternaam</Label>
        <TextInput id="input4" invalid={args.invalid} aria-required="true" />
      </Column>
    </FieldSet>
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var w,F,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} aria-describedby="description3">
      <Paragraph id="description3" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Column gap="extra-small">
        <Label htmlFor="input5">Voornaam</Label>
        {args.invalid && <ErrorMessage id="error1">Vul uw voornaam in.</ErrorMessage>}
        <TextInput id="input5" aria-describedby="error1" aria-required="true" invalid={args.invalid} />
        <Label htmlFor="input6">Achternaam</Label>
        {args.invalid && <ErrorMessage id="error2">Vul uw achternaam in.</ErrorMessage>}
        <TextInput id="input6" aria-describedby="error2" aria-required="true" invalid={args.invalid} />
      </Column>
    </FieldSet>
}`,...(S=(F=u.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var E,R,y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet legend={args.legend} aria-describedby="description4" role="radiogroup" aria-required="true" invalid={args.invalid}>
      <Paragraph id="description4" size="small" className="ams-mb--sm">
        De laatstgenoemde melding.
      </Paragraph>
      <Column gap="extra-small">
        <Radio name="about" value="horeca" invalid={args.invalid} aria-required="true">
          Horecabedrijf
        </Radio>
        <Radio name="about" value="ander_bedrijf" invalid={args.invalid} aria-required="true">
          Ander soort bedrijf
        </Radio>
        <Radio name="about" value="evenement" invalid={args.invalid} aria-required="true">
          Evenement
        </Radio>
        <Radio name="about" value="anders" invalid={args.invalid} aria-required="true">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...(y=(R=m.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var k,W,I;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?',
    invalid: true
  },
  render: args => <FieldSet legend={args.legend} aria-describedby="description5 error3" role="radiogroup" aria-required="true" invalid={args.invalid}>
      <Paragraph id="description5" size="small" className="ams-mb--sm">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb--sm" id="error3">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
        <Radio name="about" value="horeca" invalid={args.invalid} aria-required="true">
          Horecabedrijf
        </Radio>
        <Radio name="about" value="ander_bedrijf" invalid={args.invalid} aria-required="true">
          Ander soort bedrijf
        </Radio>
        <Radio name="about" value="evenement" invalid={args.invalid} aria-required="true">
          Evenement
        </Radio>
        <Radio name="about" value="anders" invalid={args.invalid} aria-required="true">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...(I=(W=v.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var A,L,V;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet legend={args.legend} invalid={args.invalid}>
      <Column gap="extra-small" style={{
      width: '100%'
    }}>
        <Checkbox name="about" value="horeca" invalid={args.invalid} aria-required="true">
          Horecabedrijf
        </Checkbox>
        <Checkbox name="about" value="ander_bedrijf" invalid={args.invalid} aria-required="true">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox name="about" value="evenement" invalid={args.invalid} aria-required="true">
          Evenement
        </Checkbox>
        <Checkbox name="about" value="anders" invalid={args.invalid} aria-required="true">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
}`,...(V=(L=c.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,z,G;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    invalid: true,
    legend: 'Waar gaat uw melding over?'
  },
  render: args => <FieldSet aria-describedby="error4" aria-errormessage="error4" legend={args.legend} invalid={args.invalid}>
      {args.invalid && <ErrorMessage className="ams-mb--sm" id="error4">
          Geef aan waar uw melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small" style={{
      width: '100%'
    }}>
        <Checkbox name="about" value="horeca" invalid={args.invalid} aria-required="true">
          Horecabedrijf
        </Checkbox>
        <Checkbox name="about" value="ander_bedrijf" invalid={args.invalid} aria-required="true">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox name="about" value="evenement" invalid={args.invalid} aria-required="true">
          Evenement
        </Checkbox>
        <Checkbox name="about" value="anders" invalid={args.invalid} aria-required="true">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
}`,...(G=(z=g.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const P=["Default","WithDescription","WithError","RadioGroup","RadioGroupWithError","CheckboxGroup","CheckboxGroupWithError"],Q=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:c,CheckboxGroupWithError:g,Default:t,RadioGroup:m,RadioGroupWithError:v,WithDescription:o,WithError:u,__namedExportsOrder:P,default:N},Symbol.toStringTag,{value:"Module"}));export{c as C,Q as F,m as R,o as W,u as a,v as b,g as c};
