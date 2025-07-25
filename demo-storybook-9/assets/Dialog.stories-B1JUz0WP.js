import{r as f,j as e,c as v,B as r,P as c,w as j}from"./iframe-Bwj7fvgb.js";import{H as _}from"./Heading-BAlwbcGv.js";import{I as x}from"./IconButton-GFwZd5Cm.js";const d=o=>o.currentTarget.closest("dialog")?.close(),b=o=>document.querySelector(o)?.showModal(),g=f.forwardRef(({children:o,className:s,closeButtonLabel:m="Sluiten",footer:l,heading:u,...p},h)=>e.jsxs("dialog",{...p,className:v("ams-dialog",s),ref:h,children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(_,{level:1,size:"level-4",children:u}),e.jsx(x,{label:m,onClick:d,size:"heading-4",type:"button"})]}),e.jsx("div",{className:"ams-dialog__body",children:o}),l&&e.jsx("footer",{className:"ams-dialog__footer",children:l})]}));g.displayName="Dialog";const a=Object.assign(g,{close:d,open:b});try{a.displayName="Dialog",a.__docgenInfo={description:"",displayName:"Dialog",props:{closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Content for the footer, often one Button or an Action Group containing more of them.",name:"footer",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const{action:i}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Components/Containers/Dialog",component:a,argTypes:{footer:{table:{disable:!0}},heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}},decorators:[(o,{args:s})=>e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>{i("open")(),a.open(`#${s.id}`)},children:"Open"}),e.jsx(o,{})]})]},n={args:{children:e.jsx(c,{children:"U ontvangt een bevestiging per e-mail."}),footer:e.jsx(r,{onClick:o=>(i("close")(),a.close(o)),children:"Sluiten"}),heading:"De gegevens zijn opgeslagen",id:"ams-dialog-default"}},t={args:{children:e.jsx("form",{id:"ams-dialog-form",method:"dialog",children:e.jsx(c,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren."})}),footer:e.jsxs(j,{children:[e.jsx(r,{form:"ams-dialog-form",onClick:i("continue"),type:"submit",value:"submit",children:"Doorgaan"}),e.jsx(r,{onClick:o=>(i("cancel")(),a.close(o)),variant:"secondary",children:"Stoppen"})]}),heading:"Niet alle gegevens zijn opgeslagen",id:"ams-dialog-asking-to-confirm"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["Default","Confirmation"],B=Object.freeze(Object.defineProperty({__proto__:null,Confirmation:t,Default:n,__namedExportsOrder:y,default:D},Symbol.toStringTag,{value:"Module"}));export{t as C,B as D};
