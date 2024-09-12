import{j as e}from"./jsx-runtime-BlAj40OV.js";import{g as o,P as t,H as d}from"./index.esm-DOslqLVZ.js";import{c as B}from"./clsx-B-dksMZM.js";import{r as C}from"./index-Cs7sjTYM.js";import{H as N}from"./Heading-DUu-96hO.js";import{I as T}from"./IconButton-BgcGyAbu.js";const x=n=>{var r;return(r=n.currentTarget.closest("dialog"))==null?void 0:r.close()},V=n=>{var r;return(r=document.querySelector(n))==null?void 0:r.showModal()},D=C.forwardRef(({actions:n,children:r,className:z,closeButtonLabel:S="Sluiten",heading:_,...A},P)=>e.jsx("dialog",{...A,ref:P,className:B("ams-dialog",z),children:e.jsxs("form",{className:"ams-dialog__form",method:"dialog",children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(N,{size:"level-4",children:_}),e.jsx(T,{label:S,onClick:x,size:"level-4",type:"button"})]}),e.jsx("article",{className:"ams-dialog__article",children:r}),n&&e.jsx("footer",{className:"ams-dialog__footer",children:n})]})}));D.displayName="Dialog";const a=Object.assign(D,{close:x,open:V});try{a.displayName="Dialog",a.__docgenInfo={description:"",displayName:"Dialog",props:{actions:{defaultValue:null,description:"The button(s) in the footer. Start with a primary button.",name:"actions",required:!1,type:{name:"ReactNode"}},closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const H={title:"Components/Containers/Dialog",component:a,args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"submit",children:"Doorgaan"}),e.jsx(o,{onClick:a.close,variant:"tertiary",children:"Stoppen"})]}),children:e.jsx(t,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet opgeslagen zijn."}),heading:"Niet alle gegevens zijn opgeslagen"},argTypes:{actions:{table:{disable:!0}}}},i={args:{open:!0},argTypes:{heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"32em"}},layout:"fullscreen"}},s={args:{actions:e.jsx(o,{onClick:a.close,children:"Sluiten"}),children:[e.jsx(d,{level:2,size:"level-5",children:"Algemeen"},1),e.jsx(t,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."},2),e.jsx(t,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."},3),e.jsx(t,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."},4),e.jsx(t,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."},5),e.jsx(d,{level:2,size:"level-5",children:"Geldende wet- en regelgeving en reikwijdte"},6),e.jsx(t,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."},7)],heading:"Privacyverklaring gemeente Amsterdam",open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"100vh"}},layout:"fullscreen"}},g={args:{id:"openDialog"},decorators:[n=>e.jsxs("article",{children:[e.jsx(o,{onClick:()=>a.open("#openDialog"),children:"Open Dialog"}),e.jsx(n,{})]})]},l={args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"submit",children:"Lange teksten op deze knoppen"}),e.jsx(o,{onClick:a.close,variant:"tertiary",children:"Om verticaal stapelen te demonstreren"})]}),open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{docs:{story:{height:"32em"}},layout:"fullscreen"}};var c,p,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,u,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    actions: <Button onClick={Dialog.close}>Sluiten</Button>,
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
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var k,y,j;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'openDialog'
  },
  decorators: [Story => <article>
        <Button onClick={() => Dialog.open('#openDialog')}>Open Dialog</Button>
        <Story />
      </article>]
}`,...(j=(y=g.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,f,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    actions: <>
        <Button type="submit">Lange teksten op deze knoppen</Button>
        <Button onClick={Dialog.close} variant="tertiary">
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
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const O=["Default","WithScrollbar","TriggerButton","VerticalButtons"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:i,TriggerButton:g,VerticalButtons:l,WithScrollbar:s,__namedExportsOrder:O,default:H},Symbol.toStringTag,{value:"Module"}));export{I as D,g as T,l as V,s as W};
