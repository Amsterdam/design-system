import{j as e}from"./jsx-runtime-CKrituN3.js";import{n as o,o as g,T as x,p as b,P as h,U as r}from"./index.esm-DR37Ho0-.js";const D={title:"Components/Forms/Form Field Description",component:o,args:{children:"Hint text"}},s={},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[e.jsx(g,{htmlFor:"about","aria-describedby":"aboutDescription",children:"Waar gaat het om?"}),e.jsx(o,{id:"aboutDescription",children:"Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd"}),e.jsx(x,{id:"about"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[e.jsx(g,{htmlFor:"username","aria-describedby":"usernameDescription",children:"Kies een gebruikersnaam"}),e.jsx(b,{id:"username"}),e.jsxs(o,{id:"usernameDescription",children:[e.jsx(h,{size:"small",children:"Toegestane tekens"}),e.jsxs(r,{children:[e.jsx(r.Item,{children:"A - Z"}),e.jsx(r.Item,{children:"a - z"}),e.jsx(r.Item,{children:"0 - 9"}),e.jsx(r.Item,{children:"' . - _ ! # ^ ~"})]})]})]})};var a,t,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(d=(t=s.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem'
  }}>
      <FormLabel htmlFor="about" aria-describedby="aboutDescription">
        Waar gaat het om?
      </FormLabel>
      <FormFieldDescription id="aboutDescription">
        Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd
      </FormFieldDescription>
      <TextArea id="about" />
    </div>
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,F;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem'
  }}>
      <FormLabel htmlFor="username" aria-describedby="usernameDescription">
        Kies een gebruikersnaam
      </FormLabel>
      <TextInput id="username" />
      <FormFieldDescription id="usernameDescription">
        <Paragraph size="small">Toegestane tekens</Paragraph>
        <UnorderedList>
          <UnorderedList.Item>A - Z</UnorderedList.Item>
          <UnorderedList.Item>a - z</UnorderedList.Item>
          <UnorderedList.Item>0 - 9</UnorderedList.Item>
          <UnorderedList.Item>&apos; . - _ ! # ^ ~</UnorderedList.Item>
        </UnorderedList>
      </FormFieldDescription>
    </div>
}`,...(F=(u=i.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};const j=["Default","AboveFormField","BelowFormField"],f=Object.freeze(Object.defineProperty({__proto__:null,AboveFormField:n,BelowFormField:i,Default:s,__namedExportsOrder:j,default:D},Symbol.toStringTag,{value:"Module"}));export{n as A,i as B,f as F};
