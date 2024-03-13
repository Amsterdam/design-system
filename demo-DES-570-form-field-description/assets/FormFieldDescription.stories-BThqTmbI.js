import{j as e}from"./jsx-runtime-CKrituN3.js";import{n as c,o as l,P as m,T as p}from"./index.esm-CPKrfbkJ.js";const u={title:"Components/Forms/Form Field Description",component:c,args:{children:"Hint text"}},r={},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[e.jsx(l,{htmlFor:"about",children:"Waar gaat het om?"}),e.jsx(c,{id:"aboutDescription",children:e.jsx(m,{size:"small",children:"Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd"})}),e.jsx(p,{id:"about","aria-describedby":"aboutDescription"})]})};var a,t,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var s,n,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem'
  }}>
      <FormLabel htmlFor="about">Waar gaat het om?</FormLabel>
      <FormFieldDescription id="aboutDescription">
        <Paragraph size="small">Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd</Paragraph>
      </FormFieldDescription>
      <TextInput id="about" aria-describedby="aboutDescription" />
    </div>
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const g=["Default","WithFormField"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithFormField:o,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{h as F,o as W};
