import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{F as n,Vt as r,Y as i,c as a,i as o}from"./iframe-BMT8ASrJ.js";import{Z as s,t as c}from"./src-BZybp6bX.js";var l=t({Confirmation:()=>m,Default:()=>p,__namedExportsOrder:()=>h,default:()=>f}),u,d,f,p,m,h,g=e((()=>{i(),c(),u=r(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Components/Containers/Dialog`,component:s,argTypes:{footer:{table:{disable:!0}},heading:{description:`The text for the heading.`},open:{description:`Whether the dialog box is active and available for interaction.`}},decorators:[(e,{args:t})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{onClick:()=>{d(`open`)(),s.open(`#${t.id}`)},children:`Open`}),(0,u.jsx)(e,{})]})]},p={args:{children:(0,u.jsx)(n,{children:`U ontvangt een bevestiging per e-mail.`}),footer:(0,u.jsx)(a,{onClick:e=>(d(`close`)(),s.close(e)),children:`Sluiten`}),heading:`De gegevens zijn opgeslagen`,id:`ams-dialog-default`}},m={args:{children:(0,u.jsx)(`form`,{id:`ams-dialog-form`,method:`dialog`,children:(0,u.jsx)(n,{children:`Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren.`})}),footer:(0,u.jsxs)(o,{children:[(0,u.jsx)(a,{form:`ams-dialog-form`,onClick:d(`continue`),type:`submit`,value:`submit`,children:`Doorgaan`}),(0,u.jsx)(a,{onClick:e=>(d(`cancel`)(),s.close(e)),variant:`secondary`,children:`Stoppen`})]}),heading:`Niet alle gegevens zijn opgeslagen`,id:`ams-dialog-asking-to-confirm`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Confirmation`]}));g();export{m as Confirmation,p as Default,h as __namedExportsOrder,f as default,g as n,l as t};