import{j as e}from"./jsx-runtime-CKrituN3.js";import{D as j,g as s,P as r,j as g}from"./index.esm-BanLUaIy.js";const w=n=>{var a;return(a=n.currentTarget.closest("dialog"))==null?void 0:a.close()},y={title:"Components/Containers/Dialog",component:j,args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"submit",children:"Doorgaan"}),e.jsx(s,{onClick:w,variant:"tertiary",children:"Stoppen"})]}),children:e.jsx(r,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet opgeslagen zijn."}),title:"Niet alle gegevens zijn opgeslagen"},argTypes:{actions:{table:{disable:!0}}}},o={args:{open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"32em"}}}},t={args:{actions:e.jsx(e.Fragment,{children:e.jsx(s,{onClick:w,children:"Sluiten"})}),children:[e.jsx(g,{size:"level-5",children:"Algemeen"},1),e.jsx(r,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."},2),e.jsx(r,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."},3),e.jsx(r,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."},4),e.jsx(r,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."},5),e.jsx(g,{size:"level-5",children:"Geldende wet- en regelgeving en reikwijdte"},6),e.jsx(r,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."},7)],open:!0,title:"Privacyverklaring gemeente Amsterdam"},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"100vh"}}}},i={args:{id:"openDialog"},decorators:[n=>e.jsxs("article",{children:[e.jsx(s,{onClick:()=>{var a;return(a=document.querySelector("#openDialog"))==null?void 0:a.showModal()},children:"Open Dialog"}),e.jsx(n,{})]})]};var d,l,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    open: true
  },
  decorators: [Story => <div style={{
    backgroundColor: '#0006',
    position: 'absolute',
    width: '100%',
    height: '100%'
  }}>
        <Story />
      </div>],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        height: '32em'
      }
    }
  }
}`,...(v=(l=o.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    actions: <>
        <Button onClick={closeDialog}>Sluiten</Button>
      </>,
    children: [<Heading size="level-5" key={1}>
        Algemeen
      </Heading>, <Paragraph key={2}>
        De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier
        waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken
        persoonsgegevens.
      </Paragraph>, <Paragraph key={3}>
        Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en
        over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens.
      </Paragraph>, <Paragraph key={4}>
        Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u
        op de hoofdpagina vinden.
      </Paragraph>, <Paragraph key={5}>
        Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen
        ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig
        deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd.
      </Paragraph>, <Heading size="level-5" key={6}>
        Geldende wet- en regelgeving en reikwijdte
      </Heading>, <Paragraph key={7}>
        Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
        persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
        geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u
        vinden op de website van Autoriteit Persoonsgegevens.
      </Paragraph>],
    open: true,
    title: 'Privacyverklaring gemeente Amsterdam'
  },
  decorators: [Story => <div style={{
    backgroundColor: '#0006',
    position: 'absolute',
    width: '100%',
    height: '100%'
  }}>
        <Story />
      </div>],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        height: '100vh'
      }
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,k;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'openDialog'
  },
  decorators: [Story => <article>
        <Button onClick={() => (document.querySelector('#openDialog') as HTMLDialogElement)?.showModal()}>
          Open Dialog
        </Button>
        <Story />
      </article>]
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const D=["Default","WithScrollbar","TriggerButton"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:o,TriggerButton:i,WithScrollbar:t,__namedExportsOrder:D,default:y},Symbol.toStringTag,{value:"Module"}));export{b as D,i as T,t as W};
