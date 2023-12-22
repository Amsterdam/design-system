import{a as _,j as e,P as n,U as c,L as K}from"./index.esm-DEQwgUG8.js";const N={title:"Feedback/Alert",component:_,args:{title:"Let op",closeable:!1},argTypes:{severity:{control:{type:"radio",labels:{info:"info",success:"success",warning:"warning",error:"error"}},options:["info","success","warning","error"]},closeable:{control:{type:"boolean",default:!1}},onClose:{action:"onClose"},children:{control:{disable:!0}}}},r={args:{children:e.jsx(n,{children:"Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."}),severity:"warning"}},a={args:{children:e.jsx(n,{children:"Het formulier is verzonden. We hebben uw gegevens goed ontvangen."}),closeable:!0,severity:"success",title:"Gelukt"}},s={args:{children:e.jsx(n,{children:"U bent vergeten verplichte velden in te vullen."}),severity:"warning",title:"Vul de gegevens aan"}},t={args:{children:e.jsx(n,{children:"Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen. Probeer het over een paar minuten opnieuw."}),severity:"error",title:"Niet gelukt"}},o={args:{children:e.jsx(n,{children:"Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten."}),closeable:!0,severity:"info"}},i={args:{severity:"warning",title:"Vul de gegevens aan"},render:E=>e.jsxs(_,{...E,children:[e.jsx(n,{children:"U bent vergeten de volgende verplichte velden in te vullen:"}),e.jsxs(c,{children:[e.jsx(c.Item,{children:"Naam"}),e.jsx(c.Item,{children:"Telefoonnummer"})]})]})},l={args:{children:e.jsxs(n,{children:["Tijdens Koningsdag zijn"," ",e.jsx(K,{variant:"inline",href:"#",children:"alle Stadsloketten"})," ","gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."]}),severity:void 0}},d={args:{children:e.jsx(n,{children:"De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing."}),title:void 0}};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>,
    severity: 'warning'
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var p,m,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>Het formulier is verzonden. We hebben uw gegevens goed ontvangen.</Paragraph>,
    closeable: true,
    severity: 'success',
    title: 'Gelukt'
  }
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var k,j,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U bent vergeten verplichte velden in te vullen.</Paragraph>,
    severity: 'warning',
    title: 'Vul de gegevens aan'
  }
}`,...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var f,w,z;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen.
        Probeer het over een paar minuten opnieuw.
      </Paragraph>,
    severity: 'error',
    title: 'Niet gelukt'
  }
}`,...(z=(w=t.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var P,y,W;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun
        aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten.
      </Paragraph>,
    closeable: true,
    severity: 'info'
  }
}`,...(W=(y=o.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var S,x,L;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    title: 'Vul de gegevens aan'
  },
  render: args => <Alert {...args}>
      <Paragraph>U bent vergeten de volgende verplichte velden in te vullen:</Paragraph>
      <UnorderedList>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>
    </Alert>
}`,...(L=(x=i.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var T,U,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn{' '}
        <Link variant="inline" href="#">
          alle Stadsloketten
        </Link>{' '}
        gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar.
      </Paragraph>,
    severity: undefined
  }
}`,...(I=(U=l.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var O,A,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing.
      </Paragraph>,
    title: undefined
  }
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const V=["Default","Success","Warning","Error","Info","WithList","WithInlineLink","WithoutTitle"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:t,Info:o,Success:a,Warning:s,WithInlineLink:l,WithList:i,WithoutTitle:d,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{G as A,t as E,o as I,a as S,s as W,l as a,i as b,d as c};
