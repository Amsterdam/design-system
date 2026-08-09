import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{$ as i,B as a,C as o,O as s,_ as c,c as l,et as u,n as d,nt as f}from"./index.esm-BAZToXFq.js";import{n as p,t as m}from"./ModalDialog-DWLmVkfj.js";import{f as h,s as g}from"./argTypes-Diu0Wtb4.js";var _=t({Controlled:()=>k,Default:()=>T,WithScrollingBody:()=>D,WithSubtitle:()=>E,__namedExportsOrder:()=>A,default:()=>w}),v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{f(),p(),v=n(),h(),y=r(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x=`Op 3 maart 2024 ontving ik uw besluit over de aanvraag voor een omgevingsvergunning aan de Voorbeeldstraat 12. Ik maak bezwaar tegen dit besluit en licht hieronder toe waarom ik het er niet mee eens ben.`,S=(e,{args:t})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>{b(`open`)(),m.open(`#${t.id}`)},children:`Open`}),(0,y.jsx)(e,{})]}),C=e=>{e&&!e.open&&e.showModal()},w={title:`Components/Containers/Modal Dialog`,component:m,argTypes:{"aria-labelledby":{description:`The id of the heading that labels the dialog. Provides its accessible name.`},id:g},subcomponents:{"ModalDialog.Body":m.Body,"ModalDialog.Footer":m.Footer,"ModalDialog.Header":m.Header}},T={args:{"aria-labelledby":`ams-modal-dialog-default-heading`,children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m.Header,{children:(0,y.jsx)(o,{id:`ams-modal-dialog-default-heading`,level:1,size:`level-2`,children:`Notitie toevoegen`})}),(0,y.jsx)(m.Body,{children:(0,y.jsxs)(`form`,{className:`ams-gap-l`,id:`ams-modal-dialog-note-form`,method:`dialog`,children:[(0,y.jsxs)(c,{children:[(0,y.jsx)(s,{htmlFor:`ams-modal-dialog-note-subject`,children:`Onderwerp`}),(0,y.jsx)(u,{id:`ams-modal-dialog-note-subject`,name:`subject`})]}),(0,y.jsxs)(c,{children:[(0,y.jsx)(s,{htmlFor:`ams-modal-dialog-note-text`,children:`Notitie`}),(0,y.jsx)(i,{id:`ams-modal-dialog-note-text`,name:`note`,rows:4})]})]})}),(0,y.jsx)(m.Footer,{children:(0,y.jsxs)(d,{children:[(0,y.jsx)(l,{form:`ams-modal-dialog-note-form`,onClick:b(`save`),type:`submit`,value:`save`,children:`Opslaan`}),(0,y.jsx)(l,{onClick:e=>(b(`cancel`)(),m.close(e)),variant:`secondary`,children:`Annuleren`})]})})]}),id:`ams-modal-dialog-default`},decorators:[S],parameters:{docs:{story:{iframeHeight:`40rem`,inline:!1}}},render:e=>(0,y.jsx)(m,{...e,ref:C})},E={args:{"aria-labelledby":`ams-modal-dialog-with-subtitle-heading`,children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(m.Header,{children:[(0,y.jsx)(o,{id:`ams-modal-dialog-with-subtitle-heading`,level:1,size:`level-2`,children:`Reactie versturen`}),(0,y.jsx)(a,{size:`small`,children:`Plan Nieuw-West, fase 2`})]}),(0,y.jsx)(m.Body,{children:(0,y.jsx)(a,{children:`Controleer uw gegevens voordat u uw reactie verstuurt.`})}),(0,y.jsx)(m.Footer,{children:(0,y.jsx)(l,{onClick:e=>(b(`close`)(),m.close(e)),children:`Sluiten`})})]}),id:`ams-modal-dialog-with-subtitle`},decorators:[S]},D={args:{"aria-labelledby":`ams-modal-dialog-scrolling-heading`,children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(m.Header,{children:[(0,y.jsx)(o,{id:`ams-modal-dialog-scrolling-heading`,level:1,size:`level-2`,children:`Bezwaar beoordelen`}),(0,y.jsx)(a,{size:`small`,children:`Bezwaar 2024-00842`})]}),(0,y.jsxs)(m.Body,{className:`ams-prose`,children:[(0,y.jsx)(a,{children:x}),(0,y.jsx)(a,{children:`De onderbouwing gaat niet in op de gevolgen voor de parkeerdruk in de straat. In de huidige situatie is er overdag al nauwelijks plek. Naar mijn idee is niet onderzocht wat het extra verkeer betekent voor de bewoners die hier al jaren wonen.`}),(0,y.jsx)(a,{children:`Ik verzoek u het besluit te heroverwegen en de aanvraag opnieuw te beoordelen, met aandacht voor de punten die ik noem. Graag ontvang ik binnen de wettelijke termijn een reactie. Mocht u vragen hebben, dan licht ik mijn bezwaar uiteraard graag mondeling toe.`})]}),(0,y.jsx)(m.Footer,{children:(0,y.jsxs)(d,{children:[(0,y.jsx)(l,{onClick:e=>(b(`grant`)(),m.close(e)),children:`Toewijzen`}),(0,y.jsx)(l,{onClick:e=>(b(`reject`)(),m.close(e)),variant:`secondary`,children:`Afwijzen`})]})})]}),id:`ams-modal-dialog-scrolling`},decorators:[S]},O=e=>{let[t,n]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>n(!0),children:`Open`}),(0,y.jsxs)(m,{...e,onClose:()=>n(!1),open:t,children:[(0,y.jsx)(m.Header,{children:(0,y.jsx)(o,{id:`ams-modal-dialog-controlled-heading`,level:1,size:`level-2`,children:`Weergavenaam wijzigen`})}),(0,y.jsx)(m.Body,{children:(0,y.jsxs)(c,{children:[(0,y.jsx)(s,{htmlFor:`ams-modal-dialog-controlled-name`,children:`Weergavenaam`}),(0,y.jsx)(u,{defaultValue:`A. de Vries`,id:`ams-modal-dialog-controlled-name`,name:`display-name`})]})}),(0,y.jsx)(m.Footer,{children:(0,y.jsxs)(d,{children:[(0,y.jsx)(l,{onClick:()=>n(!1),children:`Opslaan`}),(0,y.jsx)(l,{onClick:()=>n(!1),variant:`secondary`,children:`Annuleren`})]})})]})]})},k={args:{"aria-labelledby":`ams-modal-dialog-controlled-heading`,id:`ams-modal-dialog-controlled`},render:e=>(0,y.jsx)(O,{...e})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-labelledby': 'ams-modal-dialog-default-heading',
    children: <>
        <ModalDialog.Header>
          <Heading id="ams-modal-dialog-default-heading" level={1} size="level-2">
            Notitie toevoegen
          </Heading>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <form className="ams-gap-l" id="ams-modal-dialog-note-form" method="dialog">
            <Field>
              <Label htmlFor="ams-modal-dialog-note-subject">Onderwerp</Label>
              <TextInput id="ams-modal-dialog-note-subject" name="subject" />
            </Field>
            <Field>
              <Label htmlFor="ams-modal-dialog-note-text">Notitie</Label>
              <TextArea id="ams-modal-dialog-note-text" name="note" rows={4} />
            </Field>
          </form>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <ActionGroup>
            <Button form="ams-modal-dialog-note-form" onClick={action('save')} type="submit" value="save">
              Opslaan
            </Button>
            <Button onClick={event => {
            action('cancel')();
            return ModalDialog.close(event);
          }} variant="secondary">
              Annuleren
            </Button>
          </ActionGroup>
        </ModalDialog.Footer>
      </>,
    id: 'ams-modal-dialog-default'
  },
  decorators: [openButtonDecorator],
  parameters: {
    docs: {
      story: {
        // Render this story in its own iframe, so the modal’s top-layer backdrop covers only the example, not the whole docs page.
        iframeHeight: '40rem',
        inline: false
      }
    }
  },
  render: args => <ModalDialog {...args} ref={openModally} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-labelledby': 'ams-modal-dialog-with-subtitle-heading',
    children: <>
        <ModalDialog.Header>
          <Heading id="ams-modal-dialog-with-subtitle-heading" level={1} size="level-2">
            Reactie versturen
          </Heading>
          <Paragraph size="small">Plan Nieuw-West, fase 2</Paragraph>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <Paragraph>Controleer uw gegevens voordat u uw reactie verstuurt.</Paragraph>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <Button onClick={event => {
          action('close')();
          return ModalDialog.close(event);
        }}>
            Sluiten
          </Button>
        </ModalDialog.Footer>
      </>,
    id: 'ams-modal-dialog-with-subtitle'
  },
  decorators: [openButtonDecorator]
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-labelledby': 'ams-modal-dialog-scrolling-heading',
    children: <>
        <ModalDialog.Header>
          <Heading id="ams-modal-dialog-scrolling-heading" level={1} size="level-2">
            Bezwaar beoordelen
          </Heading>
          <Paragraph size="small">Bezwaar 2024-00842</Paragraph>
        </ModalDialog.Header>
        <ModalDialog.Body className="ams-prose">
          <Paragraph>{longObjection}</Paragraph>
          <Paragraph>
            De onderbouwing gaat niet in op de gevolgen voor de parkeerdruk in de straat. In de huidige situatie is er
            overdag al nauwelijks plek. Naar mijn idee is niet onderzocht wat het extra verkeer betekent voor de
            bewoners die hier al jaren wonen.
          </Paragraph>
          <Paragraph>
            Ik verzoek u het besluit te heroverwegen en de aanvraag opnieuw te beoordelen, met aandacht voor de punten
            die ik noem. Graag ontvang ik binnen de wettelijke termijn een reactie. Mocht u vragen hebben, dan licht ik
            mijn bezwaar uiteraard graag mondeling toe.
          </Paragraph>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <ActionGroup>
            <Button onClick={event => {
            action('grant')();
            return ModalDialog.close(event);
          }}>
              Toewijzen
            </Button>
            <Button onClick={event => {
            action('reject')();
            return ModalDialog.close(event);
          }} variant="secondary">
              Afwijzen
            </Button>
          </ActionGroup>
        </ModalDialog.Footer>
      </>,
    id: 'ams-modal-dialog-scrolling'
  },
  decorators: [openButtonDecorator]
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-labelledby': 'ams-modal-dialog-controlled-heading',
    id: 'ams-modal-dialog-controlled'
  },
  render: args => <ControlledExample {...args} />
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithSubtitle`,`WithScrollingBody`,`Controlled`]})))()}export{j as a,E as i,_ as n,w as o,D as r,k as t};