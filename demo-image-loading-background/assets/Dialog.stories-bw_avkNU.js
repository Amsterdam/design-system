import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,c as i,n as a,nt as o}from"./index.esm-CHPzorys.js";import{n as s,t as c}from"./Dialog-DsueKGVY.js";var l=t({Confirmation:()=>m,Default:()=>p,SessionExpiring:()=>h,__namedExportsOrder:()=>g,default:()=>f}),u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),s(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Components/Containers/Dialog`,component:c,argTypes:{footer:{control:!1},id:{description:`The id of the dialog element. Use it to open the dialog.`},open:{description:`Whether the dialog box is active and available for interaction.`}},decorators:[(e,{args:t})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{onClick:()=>{d(`open`)(),c.open(`#${t.id}`)},children:`Open`}),(0,u.jsx)(e,{})]})]},p={args:{children:(0,u.jsx)(r,{children:`U ontvangt een bevestiging per e-mail.`}),footer:(0,u.jsx)(i,{onClick:e=>(d(`close`)(),c.close(e)),children:`Sluiten`}),heading:`De gegevens zijn opgeslagen`,id:`ams-dialog-default`}},m={args:{children:(0,u.jsx)(`form`,{id:`ams-dialog-form`,method:`dialog`,children:(0,u.jsx)(r,{children:`Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren.`})}),footer:(0,u.jsxs)(a,{children:[(0,u.jsx)(i,{form:`ams-dialog-form`,onClick:d(`continue`),type:`submit`,value:`submit`,children:`Doorgaan`}),(0,u.jsx)(i,{onClick:e=>(d(`cancel`)(),c.close(e)),variant:`secondary`,children:`Stoppen`})]}),heading:`Niet alle gegevens zijn opgeslagen`,id:`ams-dialog-asking-to-confirm`}},h={args:{children:(0,u.jsx)(r,{children:`Zonder activiteit wordt u over 2 minuten automatisch afgemeld.`}),footer:(0,u.jsxs)(a,{children:[(0,u.jsx)(i,{onClick:e=>(d(`continue`)(),c.close(e)),children:`Ingelogd blijven`}),(0,u.jsx)(i,{onClick:e=>(d(`sign-out`)(),c.close(e)),variant:`secondary`,children:`Nu afmelden`})]}),heading:`Uw sessie verloopt bijna`,id:`ams-dialog-session-expiring`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>,
    footer: <Button onClick={event => {
      action('close')();
      return Dialog.close(event);
    }}>
        Sluiten
      </Button>,
    heading: 'De gegevens zijn opgeslagen',
    id: 'ams-dialog-default'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <form id="ams-dialog-form" method="dialog">
        <Paragraph>
          Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan
          dan verloren.
        </Paragraph>
      </form>,
    footer: <ActionGroup>
        <Button form="ams-dialog-form" onClick={action('continue')} type="submit" value="submit">
          Doorgaan
        </Button>
        <Button onClick={event => {
        action('cancel')();
        return Dialog.close(event);
      }} variant="secondary">
          Stoppen
        </Button>
      </ActionGroup>,
    heading: 'Niet alle gegevens zijn opgeslagen',
    id: 'ams-dialog-asking-to-confirm'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>Zonder activiteit wordt u over 2 minuten automatisch afgemeld.</Paragraph>,
    footer: <ActionGroup>
        <Button onClick={event => {
        action('continue')();
        return Dialog.close(event);
      }}>
          Ingelogd blijven
        </Button>
        <Button onClick={event => {
        action('sign-out')();
        return Dialog.close(event);
      }} variant="secondary">
          Nu afmelden
        </Button>
      </ActionGroup>,
    heading: 'Uw sessie verloopt bijna',
    id: 'ams-dialog-session-expiring'
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Confirmation`,`SessionExpiring`]})))()}export{_ as i,l as n,h as r,m as t};