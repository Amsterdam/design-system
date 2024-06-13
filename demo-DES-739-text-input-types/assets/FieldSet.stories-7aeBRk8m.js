import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{F as i,R as r}from"./FieldSet-DkgxHA-T.js";import{L as n}from"./Label-BnSmP98q.js";import{T as d}from"./TextInput-2kjh8O1z.js";import{C as l}from"./Column-BRryplre.js";import{P as p}from"./Paragraph-DpVlyIEJ.js";import{E as g}from"./ErrorMessage-bGWcoafk.js";import{C as v}from"./Checkbox-DRBoUL7U.js";const A={title:"Components/Forms/Field Set",component:i,args:{invalid:!1,legend:"Wat is uw naam?"},decorators:[a=>e.jsx("form",{children:e.jsx(a,{})})]},s={render:a=>e.jsx(i,{invalid:a.invalid,legend:a.legend,children:e.jsxs(l,{gap:"extra-small",style:{width:"100%"},children:[e.jsx(n,{htmlFor:"input1",children:"Voornaam"}),e.jsx(d,{id:"input1",invalid:a.invalid,"aria-required":"true"}),e.jsx(n,{htmlFor:"input2",children:"Achternaam"}),e.jsx(d,{id:"input2",invalid:a.invalid,"aria-required":"true"})]})})},t={render:a=>e.jsxs(i,{invalid:a.invalid,legend:a.legend,"aria-describedby":"description2",children:[e.jsx(p,{id:"description2",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(l,{gap:"extra-small",children:[e.jsx(n,{htmlFor:"input3",children:"Voornaam"}),e.jsx(d,{id:"input3",invalid:a.invalid,"aria-required":"true"}),e.jsx(n,{htmlFor:"input4",children:"Achternaam"}),e.jsx(d,{id:"input4",invalid:a.invalid,"aria-required":"true"})]})]})},o={args:{invalid:!0},render:a=>e.jsxs(i,{invalid:a.invalid,legend:a.legend,"aria-describedby":"description3",children:[e.jsx(p,{id:"description3",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(l,{gap:"extra-small",children:[e.jsx(n,{htmlFor:"input5",children:"Voornaam"}),a.invalid&&e.jsx(g,{id:"error1",children:"Vul uw voornaam in."}),e.jsx(d,{id:"input5","aria-describedby":"error1","aria-required":"true",invalid:a.invalid}),e.jsx(n,{htmlFor:"input6",children:"Achternaam"}),a.invalid&&e.jsx(g,{id:"error2",children:"Vul uw achternaam in."}),e.jsx(d,{id:"input6","aria-describedby":"error2","aria-required":"true",invalid:a.invalid})]})]})},u={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(i,{legend:a.legend,"aria-describedby":"description4",role:"radiogroup","aria-required":"true",invalid:a.invalid,children:[e.jsx(p,{id:"description4",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),e.jsxs(l,{gap:"extra-small",children:[e.jsx(r,{name:"about",value:"horeca",invalid:a.invalid,"aria-required":"true",children:"Horecabedrijf"}),e.jsx(r,{name:"about",value:"ander_bedrijf",invalid:a.invalid,"aria-required":"true",children:"Ander soort bedrijf"}),e.jsx(r,{name:"about",value:"evenement",invalid:a.invalid,"aria-required":"true",children:"Evenement"}),e.jsx(r,{name:"about",value:"anders",invalid:a.invalid,"aria-required":"true",children:"Iets anders"})]})]})},m={args:{legend:"Waar gaat uw melding over?",invalid:!0},render:a=>e.jsxs(i,{legend:a.legend,"aria-describedby":"description5 error3",role:"radiogroup","aria-required":"true",invalid:a.invalid,children:[e.jsx(p,{id:"description5",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(g,{className:"ams-mb--sm",id:"error3",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(l,{gap:"extra-small",children:[e.jsx(r,{name:"about",value:"horeca",invalid:a.invalid,"aria-required":"true",children:"Horecabedrijf"}),e.jsx(r,{name:"about",value:"ander_bedrijf",invalid:a.invalid,"aria-required":"true",children:"Ander soort bedrijf"}),e.jsx(r,{name:"about",value:"evenement",invalid:a.invalid,"aria-required":"true",children:"Evenement"}),e.jsx(r,{name:"about",value:"anders",invalid:a.invalid,"aria-required":"true",children:"Iets anders"})]})]})},c={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsx(i,{legend:a.legend,invalid:a.invalid,children:e.jsxs(l,{gap:"extra-small",style:{width:"100%"},children:[e.jsx(v,{name:"about",value:"horeca",invalid:a.invalid,"aria-required":"true",children:"Horecabedrijf"}),e.jsx(v,{name:"about",value:"ander_bedrijf",invalid:a.invalid,"aria-required":"true",children:"Ander soort bedrijf"}),e.jsx(v,{name:"about",value:"evenement",invalid:a.invalid,"aria-required":"true",children:"Evenement"}),e.jsx(v,{name:"about",value:"anders",invalid:a.invalid,"aria-required":"true",children:"Iets anders"})]})})};var b,h,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,q,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(f=(q=t.parameters)==null?void 0:q.docs)==null?void 0:f.source}}};var F,C,w;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var R,S,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var y,L,V;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var W,z,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const _=["Default","WithDescription","WithError","RadioGroup","RadioGroupWithError","CheckboxGroup"],O=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:c,Default:s,RadioGroup:u,RadioGroupWithError:m,WithDescription:t,WithError:o,__namedExportsOrder:_,default:A},Symbol.toStringTag,{value:"Module"}));export{c as C,O as F,u as R,t as W,o as a,m as b};
