import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{c as B}from"./clsx-B-dksMZM.js";import{r as P}from"./index-uCp2LrAq.js";import{H as d}from"./Heading-CGpdaMNv.js";import{I as C}from"./IconButton-NbbL7CSf.js";import{B as t}from"./Button-B8AXuJtG.js";import{P as a}from"./Paragraph-DpVlyIEJ.js";const l=P.forwardRef(({heading:n,actions:r,children:D,className:z,closeButtonLabel:S="Sluiten",..._},A)=>e.jsx("dialog",{..._,ref:A,className:B("ams-dialog",z),children:e.jsxs("form",{method:"dialog",className:"ams-dialog__form",children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(d,{size:"level-4",children:n}),e.jsx(C,{formNoValidate:!0,label:S,size:"level-4"})]}),e.jsx("article",{className:"ams-dialog__article",children:D}),r&&e.jsx("footer",{className:"ams-dialog__footer",children:r})]})}));l.displayName="Dialog";try{l.displayName="Dialog",l.__docgenInfo={description:"",displayName:"Dialog",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"The button(s) in the footer. Start with a primary button.",name:"actions",required:!1,type:{name:"ReactNode"}},closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}}}}}catch{}const c=n=>{var r;return(r=n.currentTarget.closest("dialog"))==null?void 0:r.close()},N={title:"Components/Containers/Dialog",component:l,args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"submit",children:"Doorgaan"}),e.jsx(t,{onClick:c,variant:"tertiary",children:"Stoppen"})]}),children:e.jsx(a,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet opgeslagen zijn."}),heading:"Niet alle gegevens zijn opgeslagen"},argTypes:{actions:{table:{disable:!0}}}},o={args:{open:!0},argTypes:{open:{description:"Whether the dialog box is active and available for interaction."},heading:{description:"The text for the heading."}},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"32em"}}}},i={args:{actions:e.jsx(t,{onClick:c,children:"Sluiten"}),children:[e.jsx(d,{level:2,size:"level-5",children:"Algemeen"},1),e.jsx(a,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."},2),e.jsx(a,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."},3),e.jsx(a,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."},4),e.jsx(a,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."},5),e.jsx(d,{level:2,size:"level-5",children:"Geldende wet- en regelgeving en reikwijdte"},6),e.jsx(a,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."},7)],open:!0,heading:"Privacyverklaring gemeente Amsterdam"},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"100vh"}}}},s={args:{id:"openDialog"},decorators:[n=>e.jsxs("article",{children:[e.jsx(t,{onClick:()=>{var r;return(r=document.querySelector("#openDialog"))==null?void 0:r.showModal()},children:"Open Dialog"}),e.jsx(n,{})]})]},g={args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"submit",children:"Lange teksten op deze knoppen"}),e.jsx(t,{onClick:c,variant:"tertiary",children:"Om verticaal stapelen te demonstreren"})]}),open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"32em"}}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    open: true
  },
  argTypes: {
    open: {
      description: 'Whether the dialog box is active and available for interaction.'
    },
    heading: {
      description: 'The text for the heading.'
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
    layout: 'fullscreen',
    docs: {
      story: {
        height: '32em'
      }
    }
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,v,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    open: true,
    heading: 'Privacyverklaring gemeente Amsterdam'
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
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,w,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'openDialog'
  },
  decorators: [Story => <article>
        <Button onClick={() => (document.querySelector('#openDialog') as HTMLDialogElement)?.showModal()}>
          Open Dialog
        </Button>
        <Story />
      </article>]
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var f,b,x;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    layout: 'fullscreen',
    docs: {
      story: {
        height: '32em'
      }
    }
  }
}`,...(x=(b=g.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const T=["Default","WithScrollbar","TriggerButton","VerticalButtons"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:o,TriggerButton:s,VerticalButtons:g,WithScrollbar:i,__namedExportsOrder:T,default:N},Symbol.toStringTag,{value:"Module"}));export{L as D,s as T,g as V,i as W};
