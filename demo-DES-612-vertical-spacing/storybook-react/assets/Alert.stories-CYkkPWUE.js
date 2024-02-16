import{j as e}from"./jsx-runtime-CKrituN3.js";import{a as _,P as n,U as c,L as K}from"./index.esm-BVI2VTva.js";const N={title:"Feedback/Alert",component:_,args:{title:"Let op",closeable:!1},argTypes:{severity:{control:{type:"radio"},options:["warning","error","success","info"]},closeable:{control:{type:"boolean",default:!1}},onClose:{action:"onClose"},children:{control:{disable:!0}}}},r={args:{children:e.jsx(n,{children:"Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."})}},a={args:{children:e.jsx(n,{children:"U bent vergeten verplichte velden in te vullen."}),title:"Vul de gegevens aan"}},t={args:{children:e.jsx(n,{children:"Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen. Probeer het over een paar minuten opnieuw."}),severity:"error",title:"Niet gelukt"}},s={args:{children:e.jsx(n,{children:"Het formulier is verzonden. We hebben uw gegevens goed ontvangen."}),closeable:!0,severity:"success",title:"Gelukt"}},o={args:{children:e.jsx(n,{children:"Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten."}),closeable:!0,severity:"info"}},i={args:{title:"Vul de gegevens aan"},render:E=>e.jsxs(_,{...E,children:[e.jsx(n,{children:"U bent vergeten de volgende verplichte velden in te vullen:"}),e.jsxs(c,{children:[e.jsx(c.Item,{children:"Naam"}),e.jsx(c.Item,{children:"Telefoonnummer"})]})]})},l={args:{children:e.jsxs(n,{children:["Tijdens Koningsdag zijn"," ",e.jsx(K,{variant:"inline",href:"#",children:"alle Stadsloketten"})," ","gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."]}),severity:"info"}},d={args:{children:e.jsx(n,{children:"De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing."}),title:void 0}};var g,u,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,m,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U bent vergeten verplichte velden in te vullen.</Paragraph>,
    title: 'Vul de gegevens aan'
  }
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var k,j,b;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen.
        Probeer het over een paar minuten opnieuw.
      </Paragraph>,
    severity: 'error',
    title: 'Niet gelukt'
  }
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var f,z,P;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>Het formulier is verzonden. We hebben uw gegevens goed ontvangen.</Paragraph>,
    closeable: true,
    severity: 'success',
    title: 'Gelukt'
  }
}`,...(P=(z=s.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var W,S,w;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun
        aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten.
      </Paragraph>,
    closeable: true,
    severity: 'info'
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var x,L,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Vul de gegevens aan'
  },
  render: args => <Alert {...args}>
      <Paragraph>U bent vergeten de volgende verplichte velden in te vullen:</Paragraph>
      <UnorderedList>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>
    </Alert>
}`,...(y=(L=i.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var T,U,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn{' '}
        <Link variant="inline" href="#">
          alle Stadsloketten
        </Link>{' '}
        gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar.
      </Paragraph>,
    severity: 'info'
  }
}`,...(I=(U=l.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var O,A,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing.
      </Paragraph>,
    title: undefined
  }
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const V=["Default","Warning","Error","Success","Info","WithList","WithInlineLink","WithoutTitle"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:t,Info:o,Success:s,Warning:a,WithInlineLink:l,WithList:i,WithoutTitle:d,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{H as A,t as E,o as I,s as S,a as W,l as a,i as b,d as c};
