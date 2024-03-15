import{j as e}from"./jsx-runtime-CKrituN3.js";import{D as w,P as a,g as s,j as g}from"./index.esm-CLvyEonM.js";const j={title:"Components/Containers/Dialog",component:w,args:{title:"Weet u het zeker?",children:e.jsx(a,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Alle niet-opgeslagen data zal worden verwijderd."}),actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"tertiary",onClick:n=>{var r;return(r=n.currentTarget.closest("dialog"))==null?void 0:r.close()},children:"Terug"}),e.jsx(s,{type:"submit",children:"Verder"})]})},argTypes:{actions:{table:{disable:!0}}}},t={args:{open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"32em"}}}},o={args:{open:!0,title:"Privacyverklaring gemeente Amsterdam",children:[e.jsx(g,{size:"level-4",children:"Algemeen"},1),e.jsx(a,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."},2),e.jsx(a,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."},3),e.jsx(a,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."},4),e.jsx(a,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."},5),e.jsx(g,{size:"level-4",children:"Geldende wet- en regelgeving en reikwijdte"},6),e.jsx(a,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."},7)]},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"100vh"}}}},i={args:{id:"openDialog",actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"tertiary",autoFocus:!0,onClick:n=>{var r;return(r=n.currentTarget.closest("dialog"))==null?void 0:r.close()},children:"Terug"}),e.jsx(s,{type:"submit",children:"Verder"})]})},decorators:[n=>e.jsxs("article",{children:[e.jsx(s,{onClick:()=>{var r;return(r=document.querySelector("#openDialog"))==null?void 0:r.showModal()},children:"Open Dialog"}),e.jsx(n,{})]})]};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var v,m,p;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Privacyverklaring gemeente Amsterdam',
    children: [<Heading size="level-4" key={1}>
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
      </Paragraph>, <Heading size="level-4" key={6}>
        Geldende wet- en regelgeving en reikwijdte
      </Heading>, <Paragraph key={7}>
        Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
        persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
        geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u
        vinden op de website van Autoriteit Persoonsgegevens.
      </Paragraph>]
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,k;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'openDialog',
    actions: <>
        <Button variant="tertiary" autoFocus onClick={event => event.currentTarget.closest('dialog')?.close()}>
          Terug
        </Button>
        <Button type="submit">Verder</Button>
      </>
  },
  decorators: [Story => <article>
        <Button onClick={() => (document.querySelector('#openDialog') as HTMLDialogElement)?.showModal()}>
          Open Dialog
        </Button>
        <Story />
      </article>]
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const y=["Default","WithScrollbar","TriggerButton"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:t,TriggerButton:i,WithScrollbar:o,__namedExportsOrder:y,default:j},Symbol.toStringTag,{value:"Module"}));export{D,i as T,o as W};
