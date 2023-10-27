import{D as s,j as e,P as r,s as g,H as l}from"./index.esm-f5e8df3d.js";const y={title:"Containers/Dialog",component:s,args:{title:"Later verder gaan",children:[e.jsx(r,{children:"U kunt de ingevulde antwoorden opslaan in onze beveiligde database, deze kunt u later openen om verder te gaan met invullen. Nadat u op opslaan heeft geklikt ontvangt u een mail. Met de link in deze mail kunt verder gaan met het formulier."},0)],actions:[e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"button",variant:"tertiary",autoFocus:!0,children:"Terug"},1),e.jsx(g,{type:"submit",children:"Verder"},2)]})]}},a={args:{open:!0},render:n=>e.jsx("div",{style:{minHeight:"500px"},children:e.jsx(s,{...n})}),parameters:{backgrounds:{default:"dark"}}},t={args:{actions:null,open:!0},render:n=>e.jsx("div",{style:{minHeight:"500px"},children:e.jsx(s,{...n})}),parameters:{backgrounds:{default:"dark"}}},o={args:{open:!0,title:"Privacyverklaring gemeente Amsterdam",children:[e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"level-4",children:"Algemeen"},0),e.jsx(r,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."},1),e.jsx(r,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."},2),e.jsx(r,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."},3),e.jsx(r,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."},4),e.jsx(l,{size:"level-4",children:"Geldende wet- en regelgeving en reikwijdte"},5),e.jsx(r,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."},6)]})]},render:n=>e.jsx("div",{style:{minHeight:"100vh"},children:e.jsx(s,{...n})}),parameters:{backgrounds:{default:"dark"}}},i={decorators:[n=>e.jsxs("article",{children:[e.jsx(g,{onClick:()=>{var d;return(d=document.querySelector("dialog"))==null?void 0:d.showModal()},children:"Open Dialog"}),e.jsx(n,{})]})]};var m,v,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(v=a.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var c,u,k;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    actions: null,
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
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var h,w,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(w=o.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var f,x,D;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <article>
        <Button onClick={() => document.querySelector('dialog')?.showModal()}>Open Dialog</Button>
        <Story />
      </article>]
}`,...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const z=["Default","NoActions","ScrollContent","ShowDialog"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:a,NoActions:t,ScrollContent:o,ShowDialog:i,__namedExportsOrder:z,default:y},Symbol.toStringTag,{value:"Module"}));export{A as D,t as N,o as S};
//# sourceMappingURL=Dialog.stories-ba88d584.js.map
