import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as c,B as d,P as r,H as g,C as D}from"./index.esm-B0AKU8Wx.js";import{e as V,b as T}from"./exampleContent-PGFPgakh.js";import{c as W}from"./clsx-B-dksMZM.js";import{r as E}from"./index-G8LIXM5I.js";import{H as q}from"./Heading-BfwCY41a.js";import{I as M}from"./IconButton-B1qq4j6H.js";const A=a=>{var n;return(n=a.currentTarget.closest("dialog"))==null?void 0:n.close()},R=a=>{var n;return(n=document.querySelector(a))==null?void 0:n.showModal()},S=E.forwardRef(({children:a,className:n,closeButtonLabel:H="Sluiten",footer:m,heading:B,...G},O)=>e.jsxs("dialog",{...G,className:W("ams-dialog",n),ref:O,children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(q,{level:1,size:"level-4",children:B}),e.jsx(M,{label:H,onClick:A,size:"heading-4",type:"button"})]}),e.jsx("div",{className:"ams-dialog__body",children:a}),m&&e.jsx("footer",{className:"ams-dialog__footer",children:m})]}));S.displayName="Dialog";const o=Object.assign(S,{close:A,open:R});try{o.displayName="Dialog",o.__docgenInfo={description:"",displayName:"Dialog",props:{closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Content for the footer, often one Button or an Action Group containing more of them.",name:"footer",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const P=V(),C=T(),_=a=>e.jsx("form",{id:a,method:"dialog",children:e.jsx(r,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren."})}),N=a=>e.jsxs(c,{children:[e.jsx(d,{form:a,type:"submit",value:"submit",children:"Doorgaan"}),e.jsx(d,{onClick:o.close,variant:"tertiary",children:"Stoppen"})]}),I={title:"Components/Containers/Dialog",component:o,args:{children:_("ams-dialog-form"),footer:N("ams-dialog-form"),heading:"Niet alle gegevens zijn opgeslagen"},argTypes:{footer:{table:{disable:!0}},heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}}},s={args:{children:e.jsx(r,{children:"De gegevens zijn opgeslagen."}),footer:e.jsx(c,{children:e.jsx(d,{onClick:o.close,variant:"primary",children:"Sluiten"})}),heading:"Gelukt",open:!0},decorators:[a=>e.jsxs("div",{className:"ams-docs-backdrop",children:[e.jsx(g,{level:1,children:P}),e.jsx(r,{children:C}),e.jsx(a,{})]})],parameters:{docs:{story:{height:"28rem"}},layout:"fullscreen"}},t={args:{id:"ams-dialog"},decorators:[a=>e.jsxs(D,{alignHorizontal:"start",children:[e.jsx(g,{level:1,children:P}),e.jsx(r,{children:C}),e.jsx(d,{onClick:()=>o.open("#ams-dialog"),children:"Open dialoog"}),e.jsx(a,{})]})]},i={args:{children:_("ams-dialog-asking-to-confirm-form"),footer:N("ams-dialog-asking-to-confirm-form"),open:!0},decorators:[a=>e.jsx("div",{className:"ams-docs-backdrop",children:e.jsx(a,{})})],parameters:{docs:{story:{height:"32rem"}},layout:"fullscreen"}},l={args:{children:e.jsxs(D,{gap:"small",children:[e.jsx(g,{level:2,size:"level-5",children:"Algemeen"}),e.jsx(r,{children:"De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken persoonsgegevens."}),e.jsx(r,{children:"Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens."}),e.jsx(r,{children:"Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u op de hoofdpagina vinden."}),e.jsx(r,{children:"Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd."}),e.jsx(g,{level:2,size:"level-5",children:"Geldende wet- en regelgeving en reikwijdte"}),e.jsx(r,{children:"Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u vinden op de website van Autoriteit Persoonsgegevens."})]}),footer:e.jsx(c,{children:e.jsx(d,{onClick:o.close,children:"Sluiten"})}),heading:"Privacyverklaring gemeente Amsterdam",open:!0},decorators:[a=>e.jsx("div",{className:"ams-docs-backdrop",children:e.jsx(a,{})})],parameters:{docs:{story:{height:"100vh"}},layout:"fullscreen"}};var p,h,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        <Heading level={1}>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
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
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var u,f,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'ams-dialog'
  },
  decorators: [Story => <Column alignHorizontal="start">
        <Heading level={1}>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        <Button onClick={() => Dialog.open('#ams-dialog')}>Open dialoog</Button>
        <Story />
      </Column>]
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var j,w,x;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,b,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(b=l.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const F=["Default","OpenAndClose","AskingToConfirm","WithScrollbar"],Y=Object.freeze(Object.defineProperty({__proto__:null,AskingToConfirm:i,Default:s,OpenAndClose:t,WithScrollbar:l,__namedExportsOrder:F,default:I},Symbol.toStringTag,{value:"Module"}));export{i as A,Y as D,t as O,l as W};
