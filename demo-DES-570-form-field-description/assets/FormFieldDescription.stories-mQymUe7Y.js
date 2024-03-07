import{j as e}from"./jsx-runtime-CKrituN3.js";import{n as s,o as F,T as x,p as g}from"./index.esm-Bly4hhEa.js";const h={title:"Components/Forms/Form Field Description",component:s,args:{children:"Hint text"}},r={},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[e.jsx(F,{htmlFor:"about",children:"Waar gaat het om?"}),e.jsx(s,{children:"Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd"}),e.jsx(x,{id:"about"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[e.jsx(F,{htmlFor:"username",children:"Kies een gebruikersnaam"}),e.jsx(g,{id:"username"}),e.jsxs(s,{children:[e.jsx("p",{children:"Toegestane tekens"}),e.jsxs("ul",{children:[e.jsx("li",{children:"A - Z"}),e.jsx("li",{children:"a - z"}),e.jsx("li",{children:"0 - 9"}),e.jsx("li",{children:"' . - _ ! # ^ ~"})]})]})]})};var i,a,t;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem'
  }}>
      <FormLabel htmlFor="about">Waar gaat het om?</FormLabel>
      <FormFieldDescription>
        Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd
      </FormFieldDescription>
      <TextArea id="about" />
    </div>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem'
  }}>
      <FormLabel htmlFor="username">Kies een gebruikersnaam</FormLabel>
      <TextInput id="username" />
      <FormFieldDescription>
        <p>Toegestane tekens</p>
        <ul>
          <li>A - Z</li>
          <li>a - z</li>
          <li>0 - 9</li>
          <li>&apos; . - _ ! # ^ ~</li>
        </ul>
      </FormFieldDescription>
    </div>
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const j=["Default","AboveFormField","BelowFormField"],v=Object.freeze(Object.defineProperty({__proto__:null,AboveFormField:n,BelowFormField:o,Default:r,__namedExportsOrder:j,default:h},Symbol.toStringTag,{value:"Module"}));export{n as A,o as B,v as F};
