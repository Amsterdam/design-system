import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as A}from"./clsx-B-dksMZM.js";import{r as N}from"./index-BwDkhjyp.js";import{H as d}from"./Heading-mbayTkiK.js";import{I as P}from"./IconButton-B8Ra7ApA.js";import{B as o}from"./Button-DXS7hO6e.js";import{P as a}from"./Paragraph-B6eM4Eli.js";const l=N.forwardRef(({children:n,className:r,title:z,actions:m,...S},_)=>e.jsx("dialog",{...S,ref:_,className:A("ams-dialog",r),children:e.jsxs("form",{method:"dialog",className:"ams-dialog__form",children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(d,{size:"level-4",children:z}),e.jsx(P,{formNoValidate:!0,label:"Sluiten",size:"level-4"})]}),e.jsx("article",{className:"ams-dialog__article",children:n}),m&&e.jsx("footer",{className:"ams-dialog__footer",children:m})]})}));l.displayName="Dialog";try{l.displayName="Dialog",l.__docgenInfo={description:"",displayName:"Dialog",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}}}}}catch{}const c=n=>{var r;return(r=n.currentTarget.closest("dialog"))==null?void 0:r.close()},B={title:"Components/Containers/Dialog",component:l,args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"submit",children:"Doorgaan"}),e.jsx(o,{onClick:c,variant:"tertiary",children:"Stoppen"})]}),children:e.jsx(a,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet opgeslagen zijn."}),title:"Niet alle gegevens zijn opgeslagen"},argTypes:{actions:{table:{disable:!0}}}},t={args:{open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"32em"}}}},i={args:{actions:e.jsx(o,{onClick:c,children:"Sluiten"}),children:[e.jsx(d,{level:2,size:"level-5",children:"Algemeen"},1),e.jsx(a,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."},2),e.jsx(a,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."},3),e.jsx(a,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."},4),e.jsx(a,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."},5),e.jsx(d,{level:2,size:"level-5",children:"Geldende wet- en regelgeving en reikwijdte"},6),e.jsx(a,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."},7)],open:!0,title:"Privacyverklaring gemeente Amsterdam"},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"100vh"}}}},s={args:{id:"openDialog"},decorators:[n=>e.jsxs("article",{children:[e.jsx(o,{onClick:()=>{var r;return(r=document.querySelector("#openDialog"))==null?void 0:r.showModal()},children:"Open Dialog"}),e.jsx(n,{})]})]},g={args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"submit",children:"Ja, ik wil doorgaan"}),e.jsx(o,{onClick:c,variant:"tertiary",children:"Nee, toch maar terug"})]}),open:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#0006",position:"absolute",width:"100%",height:"100%"},children:e.jsx(n,{})})],parameters:{layout:"fullscreen",docs:{story:{height:"32em"}},viewport:{defaultViewport:"phone"}}};var p,v,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var h,k,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,y,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'openDialog'
  },
  decorators: [Story => <article>
        <Button onClick={() => (document.querySelector('#openDialog') as HTMLDialogElement)?.showModal()}>
          Open Dialog
        </Button>
        <Story />
      </article>]
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,D,b;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    actions: <>
        <Button type="submit">Ja, ik wil doorgaan</Button>
        <Button onClick={closeDialog} variant="tertiary">
          Nee, toch maar terug
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
    },
    viewport: {
      defaultViewport: 'phone'
    }
  }
}`,...(b=(D=g.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const C=["Default","WithScrollbar","TriggerButton","VerticalButtons"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:t,TriggerButton:s,VerticalButtons:g,WithScrollbar:i,__namedExportsOrder:C,default:B},Symbol.toStringTag,{value:"Module"}));export{q as D,s as T,g as V,i as W};
