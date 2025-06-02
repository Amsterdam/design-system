import{r as D,j as e,c as y,B as i,P as h,t as C}from"./iframe-CmHy-vHF.js";import{H as S}from"./Heading-5pQOhATy.js";import{I as z}from"./IconButton-BcFrjimK.js";const f=o=>{var a;return(a=o.currentTarget.closest("dialog"))==null?void 0:a.close()},B=o=>{var a;return(a=document.querySelector(o))==null?void 0:a.showModal()},v=D.forwardRef(({children:o,className:a,closeButtonLabel:j="Sluiten",footer:l,heading:_,...x},b)=>e.jsxs("dialog",{...x,className:y("ams-dialog",a),ref:b,children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(S,{level:1,size:"level-4",children:_}),e.jsx(z,{label:j,onClick:f,size:"heading-4",type:"button"})]}),e.jsx("div",{className:"ams-dialog__body",children:o}),l&&e.jsx("footer",{className:"ams-dialog__footer",children:l})]}));v.displayName="Dialog";const n=Object.assign(v,{close:f,open:B});try{n.displayName="Dialog",n.__docgenInfo={description:"",displayName:"Dialog",props:{closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Content for the footer, often one Button or an Action Group containing more of them.",name:"footer",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const{action:s}=__STORYBOOK_MODULE_ACTIONS__,k={title:"Components/Containers/Dialog",component:n,argTypes:{footer:{table:{disable:!0}},heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}},decorators:[(o,{args:a})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>{s("open")(),n.open(`#${a.id}`)},children:"Open"}),e.jsx(o,{})]})]},t={args:{children:e.jsx(h,{children:"U ontvangt een bevestiging per e-mail."}),footer:e.jsx(i,{onClick:o=>(s("close")(),n.close(o)),children:"Sluiten"}),heading:"De gegevens zijn opgeslagen",id:"ams-dialog-default"}},r={args:{children:e.jsx("form",{id:"ams-dialog-form",method:"dialog",children:e.jsx(h,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren."})}),footer:e.jsxs(C,{children:[e.jsx(i,{form:"ams-dialog-form",onClick:s("continue"),type:"submit",value:"submit",children:"Doorgaan"}),e.jsx(i,{onClick:o=>(s("cancel")(),n.close(o)),variant:"tertiary",children:"Stoppen"})]}),heading:"Niet alle gegevens zijn opgeslagen",id:"ams-dialog-asking-to-confirm"}};var c,d,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      }} variant="tertiary">
          Stoppen
        </Button>
      </ActionGroup>,
    heading: 'Niet alle gegevens zijn opgeslagen',
    id: 'ams-dialog-asking-to-confirm'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const N=["Default","Confirmation"],G=Object.freeze(Object.defineProperty({__proto__:null,Confirmation:r,Default:t,__namedExportsOrder:N,default:k},Symbol.toStringTag,{value:"Module"}));export{r as C,G as D};
