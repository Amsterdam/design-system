import{D as s,j as e,P as r,u as i,H as d}from"./index.esm-7e9c8a22.js";const j={title:"Containers/Dialog",component:s,args:{title:"Later verder gaan",children:[e.jsx(r,{children:"U kunt de ingevulde antwoorden opslaan in onze beveiligde database, deze kunt u later openen om verder te gaan met invullen. Nadat u op opslaan heeft geklikt ontvangt u een mail. Met de link in deze mail kunt verder gaan met het formulier."},0)],actions:[e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"tertiary",autoFocus:!0,onClick:()=>{var n;return(n=document.querySelector("dialog"))==null?void 0:n.close()},children:"Terug"},1),e.jsx(i,{type:"submit",children:"Verder"},2)]})]},parameters:{backgrounds:{default:"dark"}}},a={args:{open:!0},render:n=>e.jsx("div",{style:{minHeight:"500px"},children:e.jsx(s,{...n})})},t={args:{open:!0,title:"Privacyverklaring gemeente Amsterdam",children:[e.jsxs(e.Fragment,{children:[e.jsx(d,{size:"level-4",children:"Algemeen"}),e.jsx(r,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."}),e.jsx(r,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."}),e.jsx(r,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."}),e.jsx(r,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."}),e.jsx(d,{size:"level-4",children:"Geldende wet- en regelgeving en reikwijdte"}),e.jsx(r,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."})]})]},render:n=>e.jsx("div",{style:{minHeight:"100vh"},children:e.jsx(s,{...n})})},o={args:{id:"showdialog",actions:[e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"tertiary",autoFocus:!0,onClick:()=>{var n;return(n=document.querySelector("#showdialog"))==null?void 0:n.close()},children:"Terug"},1),e.jsx(i,{type:"submit",children:"Verder"},2)]})]},decorators:[n=>e.jsxs("article",{children:[e.jsx(i,{onClick:()=>{var g;return(g=document.querySelector("#showdialog"))==null?void 0:g.showModal()},children:"Open Dialog"}),e.jsx(n,{})]})],parameters:{backgrounds:{default:"white"}}};var l,v,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <div style={{
    minHeight: '500px'
  }}>
      <Dialog {...args} />
    </div>
}`,...(m=(v=a.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Privacyverklaring gemeente Amsterdam',
    children: [<>
        <Heading size="level-4">Algemeen</Heading>
        <Paragraph>
          De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier
          waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken
          persoonsgegevens.
        </Paragraph>
        <Paragraph>
          Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en
          over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens.
        </Paragraph>
        <Paragraph>
          Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt
          u op de hoofdpagina vinden.
        </Paragraph>
        <Paragraph>
          Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen
          ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig
          deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd.
        </Paragraph>
        <Heading size="level-4">Geldende wet- en regelgeving en reikwijdte</Heading>
        <Paragraph>
          Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
          persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
          geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt
          u vinden op de website van Autoriteit Persoonsgegevens.
        </Paragraph>
      </>]
  },
  render: args => <div style={{
    minHeight: '100vh'
  }}>
      <Dialog {...args} />
    </div>
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,k,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'showdialog',
    actions: [<>
        <Button key={1} variant="tertiary" autoFocus onClick={() => document.querySelector(('#showdialog' as any))?.close()}>
          Terug
        </Button>
        <Button key={2} type="submit">
          Verder
        </Button>
      </>]
  },
  decorators: [Story => <article>
        <Button onClick={() => document.querySelector(('#showdialog' as any))?.showModal()}>Open Dialog</Button>
        <Story />
      </article>],
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const f=["Default","ScrollContent","ShowDialog"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ScrollContent:t,ShowDialog:o,__namedExportsOrder:f,default:j},Symbol.toStringTag,{value:"Module"}));export{y as D,t as S,o as a};
//# sourceMappingURL=Dialog.stories-6e4bc248.js.map
