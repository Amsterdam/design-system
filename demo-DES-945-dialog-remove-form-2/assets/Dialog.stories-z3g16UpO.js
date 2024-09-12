import{j as e}from"./jsx-runtime-BlAj40OV.js";import{g as t,P as r,H as c}from"./index.esm-DOp8MTf9.js";import{c as V}from"./clsx-B-dksMZM.js";import{r as W}from"./index-Cs7sjTYM.js";import{H}from"./Heading-DUu-96hO.js";import{I as O}from"./IconButton-BgcGyAbu.js";const _=n=>{var a;return(a=n.currentTarget.closest("dialog"))==null?void 0:a.close()},E=n=>{var a;return(a=document.querySelector(n))==null?void 0:a.showModal()},P=W.forwardRef(({footer:n,children:a,className:A,closeButtonLabel:B="Sluiten",heading:C,...N},T)=>e.jsx("dialog",{...N,ref:T,className:V("ams-dialog",A),children:e.jsxs("div",{className:"ams-dialog__content",children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(H,{size:"level-4",children:C}),e.jsx(O,{label:B,onClick:_,size:"level-4",type:"button"})]}),e.jsx("article",{className:"ams-dialog__article",children:a}),n&&e.jsx("footer",{className:"ams-dialog__footer",children:n})]})}));P.displayName="Dialog";const o=Object.assign(P,{close:_,open:E});try{o.displayName="Dialog",o.__docgenInfo={description:"",displayName:"Dialog",props:{footer:{defaultValue:null,description:"The button(s) in the footer. Start with a primary button.",name:"footer",required:!1,type:{name:"ReactNode"}},closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const F={title:"Components/Containers/Dialog",component:o,args:{footer:e.jsx(t,{onClick:o.close,variant:"primary",children:"Sluiten"}),children:e.jsx(r,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet opgeslagen zijn."}),heading:"Niet alle gegevens zijn opgeslagen"},argTypes:{footer:{table:{disable:!0}}}},i={args:{open:!0},argTypes:{heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"32em"}},layout:"fullscreen"}},s={args:{open:!0,footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"submit",form:"dialog1",value:"continue",children:"Doorgaan"}),e.jsx(t,{onClick:o.close,variant:"tertiary",children:"Stoppen"})]}),children:e.jsx("form",{method:"dialog",id:"dialog1",children:e.jsx(r,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet opgeslagen zijn."})})},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"32em"}},layout:"fullscreen"}},g={args:{footer:e.jsx(t,{onClick:o.close,children:"Sluiten"}),children:[e.jsx(c,{level:2,size:"level-5",children:"Algemeen"},1),e.jsx(r,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."},2),e.jsx(r,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."},3),e.jsx(r,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."},4),e.jsx(r,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."},5),e.jsx(c,{level:2,size:"level-5",children:"Geldende wet- en regelgeving en reikwijdte"},6),e.jsx(r,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."},7)],heading:"Privacyverklaring gemeente Amsterdam",open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"100vh"}},layout:"fullscreen"}},d={args:{id:"openDialog"},decorators:[n=>e.jsxs("article",{children:[e.jsx(t,{onClick:()=>o.open("#openDialog"),children:"Open Dialog"}),e.jsx(n,{})]})]},l={args:{footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"submit",form:"dialog2",children:"Lange teksten op deze knoppen"}),e.jsx(t,{onClick:o.close,variant:"tertiary",children:"Om verticaal stapelen te demonstreren"})]}),children:e.jsx("form",{method:"dialog",id:"dialog2",children:e.jsx(r,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet opgeslagen zijn."})}),open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"32em"}},layout:"fullscreen"}};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,v,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: true,
    footer: <>
        <Button type="submit" form="dialog1" value="continue">
          Doorgaan
        </Button>
        <Button onClick={Dialog.close} variant="tertiary">
          Stoppen
        </Button>
      </>,
    children: <form method="dialog" id="dialog1">
        <Paragraph>
          Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet
          opgeslagen zijn.
        </Paragraph>
      </form>
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
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var f,j,y;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    footer: <Button onClick={Dialog.close}>Sluiten</Button>,
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
}`,...(y=(j=g.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var w,b,x;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'openDialog'
  },
  decorators: [Story => <article>
        <Button onClick={() => Dialog.open('#openDialog')}>Open Dialog</Button>
        <Story />
      </article>]
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var D,z,S;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    footer: <>
        <Button type="submit" form="dialog2">
          Lange teksten op deze knoppen
        </Button>
        <Button onClick={Dialog.close} variant="tertiary">
          Om verticaal stapelen te demonstreren
        </Button>
      </>,
    children: <form method="dialog" id="dialog2">
        <Paragraph>
          Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet
          opgeslagen zijn.
        </Paragraph>
      </form>,
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
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const q=["Default","FormDialog","WithScrollbar","TriggerButton","VerticalButtons"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:i,FormDialog:s,TriggerButton:d,VerticalButtons:l,WithScrollbar:g,__namedExportsOrder:q,default:F},Symbol.toStringTag,{value:"Module"}));export{$ as D,s as F,d as T,l as V,g as W};
