import{j as e}from"./jsx-runtime-BlAj40OV.js";import{P as n,p as t,C as E,H as v}from"./index.esm-8wEFUDjb.js";import{c as G}from"./clsx-B-dksMZM.js";import{r as P}from"./index-Cs7sjTYM.js";import{H as R}from"./Heading-DUu-96hO.js";import{I as q}from"./IconButton-BgcGyAbu.js";const m=P.forwardRef(({children:o,className:a,...p},c)=>e.jsx("div",{...p,ref:c,className:G("ams-dialog__action-group",a),children:o}));m.displayName="DialogActionGroup";try{m.displayName="DialogActionGroup",m.__docgenInfo={description:"",displayName:"DialogActionGroup",props:{}}}catch{}const B=o=>{var a;return(a=o.currentTarget.closest("dialog"))==null?void 0:a.close()},I=o=>{var a;return(a=document.querySelector(o))==null?void 0:a.showModal()},V=P.forwardRef(({children:o,className:a,closeButtonLabel:p="Sluiten",footer:c,heading:H,...T},W)=>e.jsxs("dialog",{...T,ref:W,className:G("ams-dialog",a),children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(R,{size:"level-4",children:H}),e.jsx(q,{label:p,onClick:B,size:"level-4",type:"button"})]}),e.jsx("div",{className:"ams-dialog__body",children:o}),c&&e.jsx("footer",{className:"ams-dialog__footer",children:c})]}));V.displayName="Dialog";const r=Object.assign(V,{ActionGroup:m,close:B,open:I});try{r.displayName="Dialog",r.__docgenInfo={description:"",displayName:"Dialog",props:{closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Content for the footer, often an Action Group with one or more buttons.",name:"footer",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const u=o=>e.jsx("form",{id:o,method:"dialog",children:e.jsx(n,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren."})}),O=o=>e.jsxs(r.ActionGroup,{children:[e.jsx(t,{form:o,type:"submit",value:"submit",children:"Doorgaan"}),e.jsx(t,{onClick:r.close,variant:"tertiary",children:"Stoppen"})]}),L={title:"Components/Containers/Dialog",component:r,args:{children:u("ams-dialog-form"),footer:O("ams-dialog-form"),heading:"Niet alle gegevens zijn opgeslagen"},argTypes:{footer:{table:{disable:!0}},heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}}},s={args:{children:e.jsx(n,{children:"De gegevens zijn opgeslagen."}),footer:e.jsx(r.ActionGroup,{children:e.jsx(t,{onClick:r.close,variant:"primary",children:"Sluiten"})}),heading:"Gelukt",open:!0},decorators:[o=>e.jsx("div",{className:"ams-docs-backdrop",children:e.jsx(o,{})})],parameters:{docs:{story:{height:"28rem"}},layout:"fullscreen"}},i={args:{id:"ams-dialog"},decorators:[o=>e.jsxs("div",{children:[e.jsx(t,{onClick:()=>r.open("#ams-dialog"),children:"Open Dialog"}),e.jsx(o,{})]})]},l={args:{children:u("ams-dialog-asking-to-confirm-form"),footer:O("ams-dialog-asking-to-confirm-form"),open:!0},decorators:[o=>e.jsx("div",{className:"ams-docs-backdrop",children:e.jsx(o,{})})],parameters:{docs:{story:{height:"32rem"}},layout:"fullscreen"}},d={args:{children:e.jsxs(E,{gap:"small",children:[e.jsx(v,{level:2,size:"level-5",children:"Algemeen"}),e.jsx(n,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."}),e.jsx(n,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."}),e.jsx(n,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."}),e.jsx(n,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."}),e.jsx(v,{level:2,size:"level-5",children:"Geldende wet- en regelgeving en reikwijdte"}),e.jsx(n,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."})]}),footer:e.jsx(r.ActionGroup,{children:e.jsx(t,{onClick:r.close,children:"Sluiten"})}),heading:"Privacyverklaring gemeente Amsterdam",open:!0},decorators:[o=>e.jsx("div",{className:"ams-docs-backdrop",children:e.jsx(o,{})})],parameters:{docs:{story:{height:"100vh"}},layout:"fullscreen"}},g={args:{children:u("ams-dialog-vertical-buttons-form"),footer:e.jsxs(r.ActionGroup,{children:[e.jsx(t,{form:"ams-dialog-vertical-buttons-form",type:"submit",value:"submit",children:"Lange teksten op deze knoppen"}),e.jsx(t,{onClick:r.close,variant:"tertiary",children:"Om verticaal stapelen te demonstreren"})]}),open:!0},decorators:[o=>e.jsx("div",{className:"ams-docs-backdrop",children:e.jsx(o,{})})],parameters:{docs:{story:{height:"36rem"}},layout:"fullscreen"}};var h,f,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>De gegevens zijn opgeslagen.</Paragraph>,
    footer: <Dialog.ActionGroup>
        <Button onClick={Dialog.close} variant="primary">
          Sluiten
        </Button>
      </Dialog.ActionGroup>,
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
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var j,y,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'ams-dialog'
  },
  decorators: [Story => <div>
        <Button onClick={() => Dialog.open('#ams-dialog')}>Open Dialog</Button>
        <Story />
      </div>]
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,b,D;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(b=l.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var A,z,_;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    footer: <Dialog.ActionGroup>
        <Button onClick={Dialog.close}>Sluiten</Button>
      </Dialog.ActionGroup>,
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
}`,...(_=(z=d.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var S,N,C;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: defaultChildren('ams-dialog-vertical-buttons-form'),
    footer: <Dialog.ActionGroup>
        <Button form="ams-dialog-vertical-buttons-form" type="submit" value="submit">
          Lange teksten op deze knoppen
        </Button>
        <Button onClick={Dialog.close} variant="tertiary">
          Om verticaal stapelen te demonstreren
        </Button>
      </Dialog.ActionGroup>,
    open: true
  },
  decorators: [Story => <div className="ams-docs-backdrop">
        <Story />
      </div>],
  parameters: {
    docs: {
      story: {
        height: '36rem'
      }
    },
    layout: 'fullscreen'
  }
}`,...(C=(N=g.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const M=["Default","OpenAndClose","AskingToConfirm","WithScrollbar","VerticalButtons"],X=Object.freeze(Object.defineProperty({__proto__:null,AskingToConfirm:l,Default:s,OpenAndClose:i,VerticalButtons:g,WithScrollbar:d,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{l as A,X as D,i as O,g as V,d as W};
