import{D as s,j as e,P as n,s as o,H as d}from"./index.esm-49650ed1.js";const j={title:"Feedback/Dialog",component:s,args:{title:"Later verder gaan",children:[e.jsx(n,{children:"U kunt de ingevulde antwoorden opslaan in onze beveiligde database, deze kunt u later openen om verder te gaan met invullen. Nadat u op opslaan heeft geklikt ontvangt u een mail. Met de link in deze mail kunt verder gaan met het formulier."},1)],actions:[e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"button",variant:"tertiary",children:"Terug"},1),e.jsx(o,{type:"submit",children:"Verder"},2)]})]}},a={args:{open:!0},render:r=>e.jsx("div",{style:{minHeight:"500px"},children:e.jsx(s,{...r})}),parameters:{backgrounds:{default:"dark"}}},t={args:{open:!0,title:"Privacyverklaring gemeente Amsterdam",children:[e.jsxs(e.Fragment,{children:[e.jsx(d,{size:"level-4",children:"Algemeen"},0),e.jsx(n,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."},1),e.jsx(n,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."},2),e.jsx(n,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."},3),e.jsx(n,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."},4),e.jsx(d,{size:"level-4",children:"Geldende wet- en regelgeving en reikwijdte"},5),e.jsx(n,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."},6),","]})]},render:r=>e.jsx("div",{style:{minHeight:"100vh"},children:e.jsx(s,{...r})}),parameters:{backgrounds:{default:"dark"}}},i={decorators:[r=>e.jsxs("article",{children:[e.jsx(o,{onClick:()=>{var g;return(g=document.querySelector("dialog"))==null?void 0:g.showModal()},children:"Open Dialog"}),e.jsx(r,{})]})]};var l,v,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <div style={{
    minHeight: '500px'
  }}>
      <Dialog {...args} />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(m=(v=a.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var p,c,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Privacyverklaring gemeente Amsterdam',
    children: [<>
        <Heading key={0} size="level-4">
          Algemeen
        </Heading>
        <Paragraph key={1}>
          De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier
          waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken
          persoonsgegevens.
        </Paragraph>
        <Paragraph key={2}>
          Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en
          over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens.
        </Paragraph>
        <Paragraph key={3}>
          Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt
          u op de hoofdpagina vinden.
        </Paragraph>
        <Paragraph key={4}>
          Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen
          ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig
          deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd.
        </Paragraph>
        <Heading key={5} size="level-4">
          Geldende wet- en regelgeving en reikwijdte
        </Heading>
        <Paragraph key={6}>
          Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
          persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
          geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt
          u vinden op de website van Autoriteit Persoonsgegevens.
        </Paragraph>
        ,
      </>]
  },
  render: args => <div style={{
    minHeight: '100vh'
  }}>
      <Dialog {...args} />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var k,h,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <article>
        <Button onClick={() => document.querySelector('dialog')?.showModal()}>Open Dialog</Button>
        <Story />
      </article>]
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const f=["Default","LongContent","ShowDialog"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:a,LongContent:t,ShowDialog:i,__namedExportsOrder:f,default:j},Symbol.toStringTag,{value:"Module"}));export{z as D,t as L};
//# sourceMappingURL=Dialog.stories-8828fa01.js.map
