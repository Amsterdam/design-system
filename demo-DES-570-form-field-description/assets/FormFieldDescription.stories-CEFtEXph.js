import{j as e}from"./jsx-runtime-CKrituN3.js";import{n as s,o as F,T as x,p as b}from"./index.esm-Bly4hhEa.js";const g={title:"Components/Forms/Form Field Description",component:s,args:{children:"Hint text"}},r={},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[e.jsx(F,{htmlFor:"about","aria-describedby":"aboutDescription",children:"Waar gaat het om?"}),e.jsx(s,{id:"aboutDescription",children:"Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd"}),e.jsx(x,{id:"about"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[e.jsx(F,{htmlFor:"username","aria-describedby":"usernameDescription",children:"Kies een gebruikersnaam"}),e.jsx(b,{id:"username"}),e.jsxs(s,{id:"usernameDescription",children:[e.jsx("p",{children:"Toegestane tekens"}),e.jsxs("ul",{children:[e.jsx("li",{children:"A - Z"}),e.jsx("li",{children:"a - z"}),e.jsx("li",{children:"0 - 9"}),e.jsx("li",{children:"' . - _ ! # ^ ~"})]})]})]})};var o,a,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var l,d,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        <p>Toegestane tekens</p>
        <ul>
          <li>A - Z</li>
          <li>a - z</li>
          <li>0 - 9</li>
          <li>&apos; . - _ ! # ^ ~</li>
        </ul>
      </FormFieldDescription>
    </div>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const h=["Default","AboveFormField","BelowFormField"],y=Object.freeze(Object.defineProperty({__proto__:null,AboveFormField:i,BelowFormField:n,Default:r,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{i as A,n as B,y as F};
