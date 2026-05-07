import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Bt as n,J as r,P as i,r as a,s as o,y as s}from"./iframe-ByP82Dgj.js";import{Z as c,t as l}from"./src-BrBw9wc_.js";var u=t({Confirmation:()=>h,Default:()=>m,LegacyProps:()=>g,__namedExportsOrder:()=>_,default:()=>p}),d,f,p,m,h,g,_,v=e((()=>{r(),l(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Components/Containers/Dialog`,component:c,argTypes:{closeButtonLabel:{table:{disable:!0}},footer:{table:{disable:!0}},heading:{table:{disable:!0}}},decorators:[(e,{args:t})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{onClick:()=>{f(`open`)(),c.open(`#${t.id}`)},children:`Open`}),(0,d.jsx)(e,{})]})]},m={args:{"aria-labelledby":`ams-dialog-example-heading`,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c.Header,{children:[(0,d.jsx)(s,{id:`ams-dialog-example-heading`,level:1,size:`level-3`,children:`De gegevens zijn opgeslagen`}),(0,d.jsx)(c.CloseButton,{onClick:e=>(f(`close`)(),c.close(e))})]}),(0,d.jsx)(c.Body,{children:(0,d.jsx)(i,{children:`U ontvangt een bevestiging per e-mail.`})}),(0,d.jsx)(c.Footer,{children:(0,d.jsx)(o,{onClick:e=>(f(`close`)(),c.close(e)),children:`Sluiten`})})]}),id:`ams-dialog-example`}},h={args:{"aria-labelledby":`ams-dialog-confirmation-heading`,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c.Header,{children:[(0,d.jsx)(s,{id:`ams-dialog-confirmation-heading`,level:1,size:`level-3`,children:`Niet alle gegevens zijn opgeslagen`}),(0,d.jsx)(c.CloseButton,{onClick:e=>(f(`cancel`)(),c.close(e))})]}),(0,d.jsx)(c.Body,{children:(0,d.jsx)(`form`,{id:`ams-dialog-form`,method:`dialog`,children:(0,d.jsx)(i,{children:`Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren.`})})}),(0,d.jsx)(c.Footer,{children:(0,d.jsxs)(a,{children:[(0,d.jsx)(o,{form:`ams-dialog-form`,onClick:f(`continue`),type:`submit`,value:`submit`,children:`Doorgaan`}),(0,d.jsx)(o,{onClick:e=>(f(`cancel`)(),c.close(e)),variant:`secondary`,children:`Stoppen`})]})})]}),id:`ams-dialog-confirmation`}},g={args:{children:(0,d.jsx)(i,{children:`U ontvangt een bevestiging per e-mail.`}),footer:(0,d.jsx)(o,{onClick:e=>(f(`close`)(),c.close(e)),children:`Sluiten`}),heading:`De gegevens zijn opgeslagen`,id:`ams-dialog-legacy`},argTypes:{closeButtonLabel:{table:{disable:!1}},footer:{table:{disable:!1}},heading:{table:{disable:!1}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-labelledby': 'ams-dialog-example-heading',
    children: <>
        <Dialog.Header>
          <Heading id="ams-dialog-example-heading" level={1} size="level-3">
            De gegevens zijn opgeslagen
          </Heading>
          <Dialog.CloseButton onClick={event => {
          action('close')();
          return Dialog.close(event);
        }} />
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Button onClick={event => {
          action('close')();
          return Dialog.close(event);
        }}>
            Sluiten
          </Button>
        </Dialog.Footer>
      </>,
    id: 'ams-dialog-example'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-labelledby': 'ams-dialog-confirmation-heading',
    children: <>
        <Dialog.Header>
          <Heading id="ams-dialog-confirmation-heading" level={1} size="level-3">
            Niet alle gegevens zijn opgeslagen
          </Heading>
          <Dialog.CloseButton onClick={event => {
          action('cancel')();
          return Dialog.close(event);
        }} />
        </Dialog.Header>
        <Dialog.Body>
          <form id="ams-dialog-form" method="dialog">
            <Paragraph>
              Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn
              gaan dan verloren.
            </Paragraph>
          </form>
        </Dialog.Body>
        <Dialog.Footer>
          <ActionGroup>
            <Button form="ams-dialog-form" onClick={action('continue')} type="submit" value="submit">
              Doorgaan
            </Button>
            <Button onClick={event => {
            action('cancel')();
            return Dialog.close(event);
          }} variant="secondary">
              Stoppen
            </Button>
          </ActionGroup>
        </Dialog.Footer>
      </>,
    id: 'ams-dialog-confirmation'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>,
    footer: <Button onClick={event => {
      action('close')();
      return Dialog.close(event);
    }}>
        Sluiten
      </Button>,
    heading: 'De gegevens zijn opgeslagen',
    id: 'ams-dialog-legacy'
  },
  argTypes: {
    closeButtonLabel: {
      table: {
        disable: false
      }
    },
    footer: {
      table: {
        disable: false
      }
    },
    heading: {
      table: {
        disable: false
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:"The `heading`, `footer`, and `closeButtonLabel` props are deprecated.\nThey will be removed on or after 2026-11-06.\nUse the composable `Dialog.Header`, `Dialog.Body`, `Dialog.Footer`, and `Dialog.CloseButton` subcomponents instead.",...g.parameters?.docs?.description}}},_=[`Default`,`Confirmation`,`LegacyProps`]}));v();export{h as Confirmation,m as Default,g as LegacyProps,_ as __namedExportsOrder,p as default,v as n,u as t};