import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{F as n,R as m}from"./FieldSet-OhsVVCgX.js";import{T as r}from"./TextInput-uCUCYHBQ.js";import{C as u}from"./Column-2uDLEbFL.js";import{L as i}from"./Label-7rbJKFpg.js";import{P as p}from"./Paragraph-C4jU4-Z4.js";import{C as c}from"./Checkbox-C-0AeTC0.js";const k={title:"Components/Forms/Field Set",component:n,args:{invalid:!1,legend:"Wat is uw naam?"},decorators:[a=>e.jsx("form",{children:e.jsx(a,{})})]},d={render:a=>e.jsx(n,{invalid:a.invalid,legend:a.legend,children:e.jsxs(u,{gap:"extra-small",style:{width:"100%"},children:[e.jsx(i,{htmlFor:"input1",children:"Voornaam"}),e.jsx(r,{id:"input1",invalid:a.invalid,"aria-required":"true"}),e.jsx(i,{htmlFor:"input2",children:"Achternaam"}),e.jsx(r,{id:"input2",invalid:a.invalid,"aria-required":"true"})]})})},l={render:a=>e.jsxs(n,{invalid:a.invalid,legend:a.legend,"aria-describedby":"description2",children:[e.jsx(p,{id:"description2",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(u,{gap:"extra-small",children:[e.jsx(i,{htmlFor:"input3",children:"Voornaam"}),e.jsx(r,{id:"input3",invalid:a.invalid,"aria-required":"true"}),e.jsx(i,{htmlFor:"input4",children:"Achternaam"}),e.jsx(r,{id:"input4",invalid:a.invalid,"aria-required":"true"})]})]})},t={args:{invalid:!0},render:a=>e.jsxs(n,{invalid:a.invalid,legend:a.legend,"aria-describedby":"description3",children:[e.jsx(p,{id:"description3",size:"small",className:"ams-mb--sm",children:"Vul uw naam in zoals in uw paspoort staat."}),e.jsxs(u,{gap:"extra-small",children:[e.jsx(i,{htmlFor:"input5",children:"Voornaam"}),e.jsx(r,{id:"input5",invalid:a.invalid,"aria-required":"true"}),e.jsx(i,{htmlFor:"input6",children:"Achternaam"}),e.jsx(r,{id:"input6",invalid:a.invalid,"aria-required":"true"})]})]})},s={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsxs(n,{legend:a.legend,"aria-describedby":"description4",role:"radiogroup","aria-required":"true",invalid:a.invalid,children:[e.jsx(p,{id:"description4",size:"small",className:"ams-mb--sm",children:"De laatstgenoemde melding."}),e.jsxs(u,{gap:"extra-small",children:[e.jsx(m,{name:"about",value:"horeca",invalid:a.invalid,"aria-required":"true",children:"Horecabedrijf"}),e.jsx(m,{name:"about",value:"ander_bedrijf",invalid:a.invalid,"aria-required":"true",children:"Ander soort bedrijf"}),e.jsx(m,{name:"about",value:"evenement",invalid:a.invalid,"aria-required":"true",children:"Evenement"}),e.jsx(m,{name:"about",value:"anders",invalid:a.invalid,"aria-required":"true",children:"Iets anders"})]})]})},o={args:{legend:"Waar gaat uw melding over?"},render:a=>e.jsx(n,{legend:a.legend,invalid:a.invalid,children:e.jsxs(u,{gap:"extra-small",style:{width:"100%"},children:[e.jsx(c,{name:"about",value:"horeca",invalid:a.invalid,"aria-required":"true",children:"Horecabedrijf"}),e.jsx(c,{name:"about",value:"ander_bedrijf",invalid:a.invalid,"aria-required":"true",children:"Ander soort bedrijf"}),e.jsx(c,{name:"about",value:"evenement",invalid:a.invalid,"aria-required":"true",children:"Evenement"}),e.jsx(c,{name:"about",value:"anders",invalid:a.invalid,"aria-required":"true",children:"Iets anders"})]})})};var v,g,h;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(x=l.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var q,F,f;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldSet invalid={args.invalid} legend={args.legend} aria-describedby="description3">
      <Paragraph id="description3" size="small" className="ams-mb--sm">
        Vul uw naam in zoals in uw paspoort staat.
      </Paragraph>
      <Column gap="extra-small">
        <Label htmlFor="input5">Voornaam</Label>
        <TextInput id="input5" invalid={args.invalid} aria-required="true" />
        <Label htmlFor="input6">Achternaam</Label>
        <TextInput id="input6" invalid={args.invalid} aria-required="true" />
      </Column>
    </FieldSet>
}`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var C,S,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var L,R,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(y=(R=o.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const z=["Default","WithDescription","WithError","RadioGroup","CheckboxGroup"],E=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:o,Default:d,RadioGroup:s,WithDescription:l,WithError:t,__namedExportsOrder:z,default:k},Symbol.toStringTag,{value:"Module"}));export{o as C,E as F,s as R,l as W,t as a};
