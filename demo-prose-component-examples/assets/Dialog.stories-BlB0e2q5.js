import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./iframe-BShduUlH.js";import{P as o,X as s,n as c,o as l}from"./index.esm-COSaBBDA.js";import{r as u,t as d}from"./Heading-CQ8BKXZ5.js";import{n as f,t as p}from"./IconButton-C4yETEux.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{a(),m=n(),u(),f(),h=r(),g=e=>e.currentTarget.closest(`dialog`)?.close(),_=e=>document.querySelector(e)?.showModal(),v=(0,m.forwardRef)(({children:e,className:t,closeButtonLabel:n=`Sluiten`,footer:r,heading:a,...o},s)=>(0,h.jsxs)(`dialog`,{...o,className:i(`ams-dialog`,t),ref:s,children:[(0,h.jsxs)(`header`,{className:`ams-dialog__header`,children:[(0,h.jsx)(d,{level:1,size:`level-3`,children:a}),(0,h.jsx)(p,{label:n,onClick:g,size:`heading-3`,type:`button`})]}),(0,h.jsx)(`div`,{className:`ams-dialog__body`,role:`group`,tabIndex:0,children:e}),r&&(0,h.jsx)(`footer`,{className:`ams-dialog__footer`,children:r})]})),v.displayName=`Dialog`,y=Object.assign(v,{close:g,open:_});try{y.displayName=`Dialog`,y.__docgenInfo={description:`A popup window in which the user must perform an action to proceed.`,displayName:`Dialog`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/Dialog/Dialog.tsx`,methods:[],props:{closeButtonLabel:{defaultValue:{value:`Sluiten`},declarations:[{fileName:`design-system/packages/react/src/Dialog/Dialog.tsx`,name:`TypeLiteral`}],description:`The label for the button that dismisses the dialog.`,name:`closeButtonLabel`,required:!1,tags:{},type:{name:`string`}},footer:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/Dialog/Dialog.tsx`,name:`TypeLiteral`}],description:`Content for the footer, often one Button or an Action Group containing more of them.`,name:`footer`,required:!1,tags:{},type:{name:`ReactNode`}},heading:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/Dialog/Dialog.tsx`,name:`TypeLiteral`}],description:`The text for the Heading.`,name:`heading`,required:!0,tags:{},type:{name:`string`}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-containers-dialog--docs Dialog docs at Amsterdam Design System}`}}}catch{}})))()}var x=t({Confirmation:()=>E,Default:()=>T,__namedExportsOrder:()=>D,default:()=>w}),S,C,w,T,E,D;function O(){return(O=e((()=>{s(),b(),S=r(),{action:C}=__STORYBOOK_MODULE_ACTIONS__,w={title:`Components/Containers/Dialog`,component:y,argTypes:{footer:{control:!1},id:{description:`The id of the dialog element. Use it to open the dialog.`},open:{description:`Whether the dialog box is active and available for interaction.`}},decorators:[(e,{args:t})=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(l,{onClick:()=>{C(`open`)(),y.open(`#${t.id}`)},children:`Open`}),(0,S.jsx)(e,{})]})]},T={args:{children:(0,S.jsx)(o,{children:`U ontvangt een bevestiging per e-mail.`}),footer:(0,S.jsx)(l,{onClick:e=>(C(`close`)(),y.close(e)),children:`Sluiten`}),heading:`De gegevens zijn opgeslagen`,id:`ams-dialog-default`}},E={args:{children:(0,S.jsx)(`form`,{id:`ams-dialog-form`,method:`dialog`,children:(0,S.jsx)(o,{children:`Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren.`})}),footer:(0,S.jsxs)(c,{children:[(0,S.jsx)(l,{form:`ams-dialog-form`,onClick:C(`continue`),type:`submit`,value:`submit`,children:`Doorgaan`}),(0,S.jsx)(l,{onClick:e=>(C(`cancel`)(),y.close(e)),variant:`secondary`,children:`Stoppen`})]}),heading:`Niet alle gegevens zijn opgeslagen`,id:`ams-dialog-asking-to-confirm`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Confirmation`]})))()}export{x as n,O as r,E as t};