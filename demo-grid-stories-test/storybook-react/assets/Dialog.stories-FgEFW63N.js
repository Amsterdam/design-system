import{D as g,j as e,P as a,d as s,H as d}from"./index.esm-cNgDosLW.js";const j={title:"Containers/Dialog",component:g,args:{title:"Later verder gaan",children:e.jsx(a,{children:"U kunt de ingevulde antwoorden opslaan in onze beveiligde database, deze kunt u later openen om verder te gaan met invullen. Nadat u op opslaan heeft geklikt ontvangt u een mail. Met de link in deze mail kunt verder gaan met het formulier."}),actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"tertiary",autoFocus:!0,onClick:n=>{var r;return(r=n.currentTarget.closest("dialog"))==null?void 0:r.close()},children:"Terug"}),e.jsx(s,{type:"submit",children:"Verder"})]})},parameters:{backgrounds:{default:"dark"}}},t={args:{open:!0},render:n=>e.jsx("div",{style:{minHeight:"500px"},children:e.jsx(g,{...n})})},o={args:{open:!0,title:"Privacyverklaring gemeente Amsterdam",children:e.jsxs(e.Fragment,{children:[e.jsx(d,{size:"level-4",children:"Algemeen"}),e.jsx(a,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."}),e.jsx(a,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."}),e.jsx(a,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."}),e.jsx(a,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."}),e.jsx(d,{size:"level-4",children:"Geldende wet- en regelgeving en reikwijdte"}),e.jsx(a,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."})]})},render:n=>e.jsx("div",{style:{minHeight:"100vh"},children:e.jsx(g,{...n})})},i={args:{id:"showdialog",actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"tertiary",autoFocus:!0,onClick:n=>{var r;return(r=n.currentTarget.closest("dialog"))==null?void 0:r.close()},children:"Terug"}),e.jsx(s,{type:"submit",children:"Verder"})]})},decorators:[n=>e.jsxs("article",{children:[e.jsx(s,{onClick:()=>{var r;return(r=document.querySelector("#showdialog"))==null?void 0:r.showModal()},children:"Open Dialog"}),e.jsx(n,{})]})],parameters:{backgrounds:{disable:!0}}};var l,v,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <div style={{
    minHeight: '500px'
  }}>
      <Dialog {...args} />
    </div>
}`,...(m=(v=t.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Privacyverklaring gemeente Amsterdam',
    children: <>
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
      </>
  },
  render: args => <div style={{
    minHeight: '100vh'
  }}>
      <Dialog {...args} />
    </div>
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,k,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'showdialog',
    actions: <>
        <Button variant="tertiary" autoFocus onClick={event => event.currentTarget.closest('dialog')?.close()}>
          Terug
        </Button>
        <Button type="submit">Verder</Button>
      </>
  },
  decorators: [Story => <article>
        <Button onClick={() => (document.querySelector('#showdialog') as HTMLDialogElement)?.showModal()}>
          Open Dialog
        </Button>
        <Story />
      </article>],
  parameters: {
    backgrounds: {
      disable: true
    }
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const x=["Default","ScrollContent","ShowDialog"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:t,ScrollContent:o,ShowDialog:i,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{f as D,o as S,i as a};