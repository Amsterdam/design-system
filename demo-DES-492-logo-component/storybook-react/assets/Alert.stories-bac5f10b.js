import{y as S,j as e,P as o,p as U,U as i}from"./index.esm-ea8c736d.js";const P={title:"Feedback/Alert",component:S,args:{title:"Let op",closeable:!1,icon:!1},argTypes:{severity:{control:{type:"radio",labels:{undefined:"default",error:"error",success:"success"}},options:[void 0,"error","success"]},closeable:{control:{type:"boolean",default:!1}},icon:{control:{type:"boolean"},if:{arg:"severity",neq:void 0}},onClose:{action:"onClose"},children:{control:{disable:!0}}}},r={args:{severity:void 0,children:e.jsx(o,{children:"Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."})}},n={args:{severity:void 0,children:e.jsxs(o,{children:["Tijdens Koningsdag zijn"," ",e.jsx(U,{variant:"inline",onBackground:"light",href:"#",children:"alle Stadsloketten"})," ","gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar. telefoonnummers van de gemeente zijn niet bereikbaar."]})}},a={args:{severity:"error",icon:!0,closeable:!0,children:e.jsx(o,{children:"U bent verplichte velden vergeten in te vullen."})}},s={args:{severity:"error",icon:!0,closeable:!0,title:"Formulier kon niet opgeslagen worden"},render:x=>e.jsxs(S,{...x,children:[e.jsx(o,{children:"U bent verplichte velden vergeten in te vullen."}),e.jsxs(i,{children:[e.jsx(i.Item,{children:"Naam"}),e.jsx(i.Item,{children:"Telefoonnummer"})]})]})},t={args:{severity:"success",title:"Gelukt",closeable:!0,icon:!0,children:e.jsx(o,{children:"Uw formulier is succesvol opgeslagen."})}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    severity: undefined,
    children: <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    severity: undefined,
    children: <Paragraph>
        Tijdens Koningsdag zijn{' '}
        <Link variant="inline" onBackground="light" href="#">
          alle Stadsloketten
        </Link>{' '}
        gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar. telefoonnummers van de
        gemeente zijn niet bereikbaar.
      </Paragraph>
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,v,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    icon: true,
    closeable: true,
    children: <Paragraph>U bent verplichte velden vergeten in te vullen.</Paragraph>
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,f,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    icon: true,
    closeable: true,
    title: 'Formulier kon niet opgeslagen worden'
  },
  render: args => <Alert {...args}>
      <Paragraph>U bent verplichte velden vergeten in te vullen.</Paragraph>
      <UnorderedList>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>
    </Alert>
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var k,y,L;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    title: 'Gelukt',
    closeable: true,
    icon: true,
    children: <Paragraph>Uw formulier is succesvol opgeslagen.</Paragraph>
  }
}`,...(L=(y=t.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const z=["Default","InformationWithInlineLink","Error","ErrorWithList","Success"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:a,ErrorWithList:s,InformationWithInlineLink:n,Success:t,__namedExportsOrder:z,default:P},Symbol.toStringTag,{value:"Module"}));export{T as A,a as E,n as I,t as S,s as a};
//# sourceMappingURL=Alert.stories-bac5f10b.js.map
