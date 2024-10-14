import{j as e}from"./jsx-runtime-BlAj40OV.js";import{P as r,A as g,a as l,C as G,H as m}from"./index.esm-DY3eGenA.js";import{c as H}from"./clsx-B-dksMZM.js";import{r as O}from"./index-Cs7sjTYM.js";import{H as V}from"./Heading-DUu-96hO.js";import{I as T}from"./IconButton-CifdSLJY.js";const A=a=>{var n;return(n=a.currentTarget.closest("dialog"))==null?void 0:n.close()},W=a=>{var n;return(n=document.querySelector(a))==null?void 0:n.showModal()},z=O.forwardRef(({children:a,className:n,closeButtonLabel:_="Sluiten",footer:c,heading:N,...P},B)=>e.jsxs("dialog",{...P,ref:B,className:H("ams-dialog",n),children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(V,{size:"level-4",children:N}),e.jsx(T,{label:_,onClick:A,size:"level-4",type:"button"})]}),e.jsx("div",{className:"ams-dialog__body",children:a}),c&&e.jsx("footer",{className:"ams-dialog__footer",children:c})]}));z.displayName="Dialog";const o=Object.assign(z,{close:A,open:W});try{o.displayName="Dialog",o.__docgenInfo={description:"",displayName:"Dialog",props:{closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Content for the footer, often one Button or an Action Group containing more of them.",name:"footer",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const S=a=>e.jsx("form",{id:a,method:"dialog",children:e.jsx(r,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren."})}),C=a=>e.jsxs(g,{children:[e.jsx(l,{form:a,type:"submit",value:"submit",children:"Doorgaan"}),e.jsx(l,{onClick:o.close,variant:"tertiary",children:"Stoppen"})]}),E={title:"Components/Containers/Dialog",component:o,args:{children:S("ams-dialog-form"),footer:C("ams-dialog-form"),heading:"Niet alle gegevens zijn opgeslagen"},argTypes:{footer:{table:{disable:!0}},heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}}},t={args:{children:e.jsx(r,{children:"De gegevens zijn opgeslagen."}),footer:e.jsx(g,{children:e.jsx(l,{onClick:o.close,variant:"primary",children:"Sluiten"})}),heading:"Gelukt",open:!0},decorators:[a=>e.jsx("div",{className:"ams-docs-backdrop",children:e.jsx(a,{})})],parameters:{docs:{story:{height:"28rem"}},layout:"fullscreen"}},s={args:{id:"ams-dialog"},decorators:[a=>e.jsxs("div",{children:[e.jsx(l,{onClick:()=>o.open("#ams-dialog"),children:"Open Dialog"}),e.jsx(a,{})]})]},i={args:{children:S("ams-dialog-asking-to-confirm-form"),footer:C("ams-dialog-asking-to-confirm-form"),open:!0},decorators:[a=>e.jsx("div",{className:"ams-docs-backdrop",children:e.jsx(a,{})})],parameters:{docs:{story:{height:"32rem"}},layout:"fullscreen"}},d={args:{children:e.jsxs(G,{gap:"small",children:[e.jsx(m,{level:2,size:"level-5",children:"Algemeen"}),e.jsx(r,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."}),e.jsx(r,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."}),e.jsx(r,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."}),e.jsx(r,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."}),e.jsx(m,{level:2,size:"level-5",children:"Geldende wet- en regelgeving en reikwijdte"}),e.jsx(r,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."})]}),footer:e.jsx(g,{children:e.jsx(l,{onClick:o.close,children:"Sluiten"})}),heading:"Privacyverklaring gemeente Amsterdam",open:!0},decorators:[a=>e.jsx("div",{className:"ams-docs-backdrop",children:e.jsx(a,{})})],parameters:{docs:{story:{height:"100vh"}},layout:"fullscreen"}};var p,v,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>De gegevens zijn opgeslagen.</Paragraph>,
    footer: <ActionGroup>
        <Button onClick={Dialog.close} variant="primary">
          Sluiten
        </Button>
      </ActionGroup>,
    heading: 'Gelukt',
    open: true
  },
  decorators: [Story => <div className="ams-docs-backdrop">
        <Story />
      </div>],
  parameters: {
    docs: {
      story: {
        height: '28rem'
      }
    },
    layout: 'fullscreen'
  }
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var h,f,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'ams-dialog'
  },
  decorators: [Story => <div>
        <Button onClick={() => Dialog.open('#ams-dialog')}>Open Dialog</Button>
        <Story />
      </div>]
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var j,w,x;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: defaultChildren('ams-dialog-asking-to-confirm-form'),
    footer: defaultFooter('ams-dialog-asking-to-confirm-form'),
    open: true
  },
  decorators: [Story => <div className="ams-docs-backdrop">
        <Story />
      </div>],
  parameters: {
    docs: {
      story: {
        height: '32rem'
      }
    },
    layout: 'fullscreen'
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,b,D;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <Column gap="small">
        <Heading level={2} size="level-5">
          Algemeen
        </Heading>
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
        <Heading level={2} size="level-5">
          Geldende wet- en regelgeving en reikwijdte
        </Heading>
        <Paragraph>
          Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
          persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
          geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt
          u vinden op de website van Autoriteit Persoonsgegevens.
        </Paragraph>
      </Column>,
    footer: <ActionGroup>
        <Button onClick={Dialog.close}>Sluiten</Button>
      </ActionGroup>,
    heading: 'Privacyverklaring gemeente Amsterdam',
    open: true
  },
  decorators: [Story => <div className="ams-docs-backdrop">
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
}`,...(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const q=["Default","OpenAndClose","AskingToConfirm","WithScrollbar"],$=Object.freeze(Object.defineProperty({__proto__:null,AskingToConfirm:i,Default:t,OpenAndClose:s,WithScrollbar:d,__namedExportsOrder:q,default:E},Symbol.toStringTag,{value:"Module"}));export{i as A,$ as D,s as O,d as W};
