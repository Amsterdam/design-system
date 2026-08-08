import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{B as i,C as a,c as o,n as s,nt as c}from"./index.esm-M2z_2xS7.js";import{n as l,t as u}from"./AlertDialog-B3EPTsQ0.js";import{f as d,s as f}from"./argTypes-Diu0Wtb4.js";var p=t({Confirmation:()=>S,Controlled:()=>w,Default:()=>b,SessionExpiring:()=>C,WithSeverity:()=>x,__namedExportsOrder:()=>T,default:()=>y}),m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{c(),l(),m=n(),d(),h=r(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=e=>(0,h.jsx)(`div`,{ref:e=>{let t=e?.querySelector(`dialog`);t&&!t.open&&(t.style.position=`static`,t.show())},children:(0,h.jsx)(e,{})}),v=(e,{args:t})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{onClick:()=>{g(`open`)(),u.open(`#${t.id}`)},children:`Open`}),(0,h.jsx)(e,{})]}),y={title:`Components/Containers/Alert Dialog`,component:u,argTypes:{"aria-describedby":{description:`The id of the message in the Body. Announced together with the accessible name.`},"aria-labelledby":{description:`The id of the heading that labels the dialog. Provides its accessible name.`},id:f},subcomponents:{"AlertDialog.Body":u.Body,"AlertDialog.Footer":u.Footer,"AlertDialog.Header":u.Header}},b={decorators:[_],render:()=>(0,h.jsxs)(u,{"aria-describedby":`ams-alert-dialog-default-body`,"aria-labelledby":`ams-alert-dialog-default-heading`,children:[(0,h.jsx)(u.Header,{children:(0,h.jsx)(a,{id:`ams-alert-dialog-default-heading`,level:1,size:`level-3`,children:`Uw sessie is verlopen`})}),(0,h.jsx)(u.Body,{children:(0,h.jsx)(i,{id:`ams-alert-dialog-default-body`,children:`Log opnieuw in om verder te gaan.`})}),(0,h.jsx)(u.Footer,{children:(0,h.jsx)(o,{onClick:u.close,children:`Opnieuw inloggen`})})]})},x={decorators:[_],render:()=>(0,h.jsxs)(u,{"aria-describedby":`ams-alert-dialog-with-severity-body`,"aria-labelledby":`ams-alert-dialog-with-severity-heading`,children:[(0,h.jsx)(u.Header,{severity:`warning`,children:(0,h.jsx)(a,{id:`ams-alert-dialog-with-severity-heading`,level:1,size:`level-3`,children:`Er zijn niet-opgeslagen wijzigingen`})}),(0,h.jsx)(u.Body,{children:(0,h.jsx)(i,{id:`ams-alert-dialog-with-severity-body`,children:`Als u doorgaat, gaan uw wijzigingen verloren. Wilt u eerst opslaan?`})}),(0,h.jsx)(u.Footer,{children:(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{onClick:u.close,children:`Opslaan`}),(0,h.jsx)(o,{onClick:u.close,variant:`secondary`,children:`Doorgaan zonder opslaan`})]})})]})},S={args:{id:`ams-alert-dialog-confirmation`},decorators:[v],render:e=>(0,h.jsxs)(u,{...e,"aria-describedby":`ams-alert-dialog-confirmation-body`,"aria-labelledby":`ams-alert-dialog-confirmation-heading`,children:[(0,h.jsx)(u.Header,{children:(0,h.jsx)(a,{id:`ams-alert-dialog-confirmation-heading`,level:1,size:`level-3`,children:`Wilt u dit bestand verwijderen?`})}),(0,h.jsx)(u.Body,{children:(0,h.jsx)(`form`,{id:`ams-alert-dialog-form`,method:`dialog`,children:(0,h.jsx)(i,{id:`ams-alert-dialog-confirmation-body`,children:`U kunt het bestand ‘Begroting 2026.pdf’ hierna niet meer terughalen.`})})}),(0,h.jsx)(u.Footer,{children:(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{form:`ams-alert-dialog-form`,type:`submit`,value:`delete`,children:`Verwijderen`}),(0,h.jsx)(o,{form:`ams-alert-dialog-form`,type:`submit`,value:`cancel`,variant:`secondary`,children:`Annuleren`})]})})]})},C={args:{id:`ams-alert-dialog-session-expiring`},decorators:[v],render:e=>(0,h.jsxs)(u,{...e,"aria-describedby":`ams-alert-dialog-session-expiring-body`,"aria-labelledby":`ams-alert-dialog-session-expiring-heading`,children:[(0,h.jsx)(u.Header,{children:(0,h.jsx)(a,{id:`ams-alert-dialog-session-expiring-heading`,level:1,size:`level-3`,children:`Uw sessie verloopt bijna`})}),(0,h.jsx)(u.Body,{children:(0,h.jsx)(i,{id:`ams-alert-dialog-session-expiring-body`,children:`Zonder activiteit wordt u over 2 minuten automatisch afgemeld.`})}),(0,h.jsx)(u.Footer,{children:(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{onClick:e=>(g(`continue`)(),u.close(e)),children:`Ingelogd blijven`}),(0,h.jsx)(o,{onClick:e=>(g(`sign-out`)(),u.close(e)),variant:`secondary`,children:`Nu afmelden`})]})})]})},w={parameters:{docs:{source:{code:`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open</Button>
<AlertDialog
  aria-describedby="ams-alert-dialog-controlled-body"
  aria-labelledby="ams-alert-dialog-controlled-heading"
  onClose={() => setOpen(false)}
  open={open}
>
  <AlertDialog.Header>
    <Heading id="ams-alert-dialog-controlled-heading" level={1} size="level-3">
      Uw sessie verloopt bijna
    </Heading>
  </AlertDialog.Header>
  <AlertDialog.Body>
    <Paragraph id="ams-alert-dialog-controlled-body">Zonder activiteit wordt u over 2 minuten afgemeld.</Paragraph>
  </AlertDialog.Body>
  <AlertDialog.Footer>
    <Button onClick={() => setOpen(false)}>Doorgaan met mijn sessie</Button>
  </AlertDialog.Footer>
</AlertDialog>`,language:`tsx`}}},render:function(){let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{onClick:()=>t(!0),children:`Open`}),(0,h.jsxs)(u,{"aria-describedby":`ams-alert-dialog-controlled-body`,"aria-labelledby":`ams-alert-dialog-controlled-heading`,onClose:()=>t(!1),open:e,children:[(0,h.jsx)(u.Header,{children:(0,h.jsx)(a,{id:`ams-alert-dialog-controlled-heading`,level:1,size:`level-3`,children:`Uw sessie verloopt bijna`})}),(0,h.jsx)(u.Body,{children:(0,h.jsx)(i,{id:`ams-alert-dialog-controlled-body`,children:`Zonder activiteit wordt u over 2 minuten afgemeld.`})}),(0,h.jsx)(u.Footer,{children:(0,h.jsx)(o,{onClick:()=>t(!1),children:`Doorgaan met mijn sessie`})})]})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  decorators: [showInlineDecorator],
  render: () => <AlertDialog aria-describedby="ams-alert-dialog-default-body" aria-labelledby="ams-alert-dialog-default-heading">
      <AlertDialog.Header>
        <Heading id="ams-alert-dialog-default-heading" level={1} size="level-3">
          Uw sessie is verlopen
        </Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Paragraph id="ams-alert-dialog-default-body">Log opnieuw in om verder te gaan.</Paragraph>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <Button onClick={AlertDialog.close}>Opnieuw inloggen</Button>
      </AlertDialog.Footer>
    </AlertDialog>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [showInlineDecorator],
  render: () => <AlertDialog aria-describedby="ams-alert-dialog-with-severity-body" aria-labelledby="ams-alert-dialog-with-severity-heading">
      <AlertDialog.Header severity="warning">
        <Heading id="ams-alert-dialog-with-severity-heading" level={1} size="level-3">
          Er zijn niet-opgeslagen wijzigingen
        </Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Paragraph id="ams-alert-dialog-with-severity-body">
          Als u doorgaat, gaan uw wijzigingen verloren. Wilt u eerst opslaan?
        </Paragraph>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <ActionGroup>
          <Button onClick={AlertDialog.close}>Opslaan</Button>
          <Button onClick={AlertDialog.close} variant="secondary">
            Doorgaan zonder opslaan
          </Button>
        </ActionGroup>
      </AlertDialog.Footer>
    </AlertDialog>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'ams-alert-dialog-confirmation'
  },
  decorators: [openButtonDecorator],
  render: args => <AlertDialog {...args} aria-describedby="ams-alert-dialog-confirmation-body" aria-labelledby="ams-alert-dialog-confirmation-heading">
      <AlertDialog.Header>
        <Heading id="ams-alert-dialog-confirmation-heading" level={1} size="level-3">
          Wilt u dit bestand verwijderen?
        </Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <form id="ams-alert-dialog-form" method="dialog">
          <Paragraph id="ams-alert-dialog-confirmation-body">
            U kunt het bestand ‘Begroting 2026.pdf’ hierna niet meer terughalen.
          </Paragraph>
        </form>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <ActionGroup>
          <Button form="ams-alert-dialog-form" type="submit" value="delete">
            Verwijderen
          </Button>
          <Button form="ams-alert-dialog-form" type="submit" value="cancel" variant="secondary">
            Annuleren
          </Button>
        </ActionGroup>
      </AlertDialog.Footer>
    </AlertDialog>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'ams-alert-dialog-session-expiring'
  },
  decorators: [openButtonDecorator],
  render: args => <AlertDialog {...args} aria-describedby="ams-alert-dialog-session-expiring-body" aria-labelledby="ams-alert-dialog-session-expiring-heading">
      <AlertDialog.Header>
        <Heading id="ams-alert-dialog-session-expiring-heading" level={1} size="level-3">
          Uw sessie verloopt bijna
        </Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Paragraph id="ams-alert-dialog-session-expiring-body">
          Zonder activiteit wordt u over 2 minuten automatisch afgemeld.
        </Paragraph>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <ActionGroup>
          <Button onClick={event => {
          action('continue')();
          return AlertDialog.close(event);
        }}>
            Ingelogd blijven
          </Button>
          <Button onClick={event => {
          action('sign-out')();
          return AlertDialog.close(event);
        }} variant="secondary">
            Nu afmelden
          </Button>
        </ActionGroup>
      </AlertDialog.Footer>
    </AlertDialog>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open</Button>
<AlertDialog
  aria-describedby="ams-alert-dialog-controlled-body"
  aria-labelledby="ams-alert-dialog-controlled-heading"
  onClose={() => setOpen(false)}
  open={open}
>
  <AlertDialog.Header>
    <Heading id="ams-alert-dialog-controlled-heading" level={1} size="level-3">
      Uw sessie verloopt bijna
    </Heading>
  </AlertDialog.Header>
  <AlertDialog.Body>
    <Paragraph id="ams-alert-dialog-controlled-body">Zonder activiteit wordt u over 2 minuten afgemeld.</Paragraph>
  </AlertDialog.Body>
  <AlertDialog.Footer>
    <Button onClick={() => setOpen(false)}>Doorgaan met mijn sessie</Button>
  </AlertDialog.Footer>
</AlertDialog>\`,
        language: 'tsx'
      }
    }
  },
  render: function Controlled() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <AlertDialog aria-describedby="ams-alert-dialog-controlled-body" aria-labelledby="ams-alert-dialog-controlled-heading" onClose={() => setOpen(false)} open={open}>
          <AlertDialog.Header>
            <Heading id="ams-alert-dialog-controlled-heading" level={1} size="level-3">
              Uw sessie verloopt bijna
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph id="ams-alert-dialog-controlled-body">
              Zonder activiteit wordt u over 2 minuten afgemeld.
            </Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button onClick={() => setOpen(false)}>Doorgaan met mijn sessie</Button>
          </AlertDialog.Footer>
        </AlertDialog>
      </>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithSeverity`,`Confirmation`,`SessionExpiring`,`Controlled`]})))()}export{x as a,C as i,S as n,E as o,w as r,y as s,p as t};