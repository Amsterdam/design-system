import{j as e}from"./jsx-runtime-BlAj40OV.js";import{e as o,f as l,P as a,H as c}from"./index.esm-CKMrc-NS.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as C}from"./index-Cs7sjTYM.js";import{H as B}from"./Heading-DUu-96hO.js";import{I as N}from"./IconButton-Dm87s2wh.js";const T=n=>{var r;return(r=n.currentTarget.closest("dialog"))==null?void 0:r.close()},d=C.forwardRef(({actions:n,children:r,className:D,closeButtonLabel:z="Sluiten",heading:S,..._},A)=>e.jsx("dialog",{..._,ref:A,className:P("ams-dialog",D),children:e.jsxs("form",{method:"dialog",className:"ams-dialog__form",children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(B,{size:"level-4",children:S}),e.jsx(N,{label:z,size:"level-4",type:"button",onClick:T})]}),e.jsx("article",{className:"ams-dialog__article",children:r}),n&&e.jsx("footer",{className:"ams-dialog__footer",children:n})]})}));d.displayName="Dialog";try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{}}}catch{}const H={title:"Components/Containers/Dialog",component:d,args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"submit",children:"Doorgaan"}),e.jsx(o,{onClick:l,variant:"tertiary",children:"Stoppen"})]}),children:e.jsx(a,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet opgeslagen zijn."}),heading:"Niet alle gegevens zijn opgeslagen"},argTypes:{actions:{table:{disable:!0}}}},t={args:{open:!0},argTypes:{heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"32em"}},layout:"fullscreen"}},i={args:{actions:e.jsx(o,{onClick:l,children:"Sluiten"}),children:[e.jsx(c,{level:2,size:"level-5",children:"Algemeen"},1),e.jsx(a,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."},2),e.jsx(a,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."},3),e.jsx(a,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."},4),e.jsx(a,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."},5),e.jsx(c,{level:2,size:"level-5",children:"Geldende wet- en regelgeving en reikwijdte"},6),e.jsx(a,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."},7)],heading:"Privacyverklaring gemeente Amsterdam",open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"100vh"}},layout:"fullscreen"}},s={args:{id:"openDialog"},decorators:[n=>e.jsxs("article",{children:[e.jsx(o,{onClick:()=>{var r;return(r=document.querySelector("#openDialog"))==null?void 0:r.showModal()},children:"Open Dialog"}),e.jsx(n,{})]})]},g={args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"submit",children:"Lange teksten op deze knoppen"}),e.jsx(o,{onClick:l,variant:"tertiary",children:"Om verticaal stapelen te demonstreren"})]}),open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"32em"}},layout:"fullscreen"}};var p,m,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    open: true
  },
  argTypes: {
    heading: {
      description: 'The text for the heading.'
    },
    open: {
      description: 'Whether the dialog box is active and available for interaction.'
    }
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
    docs: {
      story: {
        height: '32em'
      }
    },
    layout: 'fullscreen'
  }
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var h,u,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    actions: <Button onClick={closeDialog}>Sluiten</Button>,
    children: [<Heading level={2} size="level-5" key={1}>
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
      </Paragraph>, <Heading level={2} size="level-5" key={6}>
        Geldende wet- en regelgeving en reikwijdte
      </Heading>, <Paragraph key={7}>
        Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
        persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
        geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u
        vinden op de website van Autoriteit Persoonsgegevens.
      </Paragraph>],
    heading: 'Privacyverklaring gemeente Amsterdam',
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
    docs: {
      story: {
        height: '100vh'
      }
    },
    layout: 'fullscreen'
  }
}`,...(k=(u=i.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var w,j,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'openDialog'
  },
  decorators: [Story => <article>
        <Button onClick={() => (document.querySelector('#openDialog') as HTMLDialogElement)?.showModal()}>
          Open Dialog
        </Button>
        <Story />
      </article>]
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var f,x,b;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    actions: <>
        <Button type="submit">Lange teksten op deze knoppen</Button>
        <Button onClick={closeDialog} variant="tertiary">
          Om verticaal stapelen te demonstreren
        </Button>
      </>,
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
    docs: {
      story: {
        height: '32em'
      }
    },
    layout: 'fullscreen'
  }
}`,...(b=(x=g.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const V=["Default","WithScrollbar","TriggerButton","VerticalButtons"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:t,TriggerButton:s,VerticalButtons:g,WithScrollbar:i,__namedExportsOrder:V,default:H},Symbol.toStringTag,{value:"Module"}));export{q as D,s as T,g as V,i as W};
