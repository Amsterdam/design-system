import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as i,P as h,e as D}from"./index.esm-BGLgu2rm.js";import{a as s}from"./index-B-lxVbXh.js";import{c as y}from"./clsx-B-dksMZM.js";import{r as C}from"./index-G8LIXM5I.js";import{H as z}from"./Heading-7IbEntpa.js";import{I as k}from"./IconButton-B1cgMLyf.js";const f=o=>{var a;return(a=o.currentTarget.closest("dialog"))==null?void 0:a.close()},B=o=>{var a;return(a=document.querySelector(o))==null?void 0:a.showModal()},v=C.forwardRef(({children:o,className:a,closeButtonLabel:j="Sluiten",footer:l,heading:x,...b},_)=>e.jsxs("dialog",{...b,className:y("ams-dialog",a),ref:_,children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(z,{level:1,size:"level-4",children:x}),e.jsx(k,{label:j,onClick:f,size:"heading-4",type:"button"})]}),e.jsx("div",{className:"ams-dialog__body",children:o}),l&&e.jsx("footer",{className:"ams-dialog__footer",children:l})]}));v.displayName="Dialog";const n=Object.assign(v,{close:f,open:B});try{n.displayName="Dialog",n.__docgenInfo={description:"",displayName:"Dialog",props:{closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Content for the footer, often one Button or an Action Group containing more of them.",name:"footer",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const S={title:"Components/Containers/Dialog",component:n,argTypes:{footer:{table:{disable:!0}},heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}},decorators:[(o,{args:a})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>{s("open")(),n.open(`#${a.id}`)},children:"Open"}),e.jsx(o,{})]})]},t={args:{children:e.jsx(h,{children:"U ontvangt een bevestiging per e-mail."}),footer:e.jsx(i,{onClick:o=>(s("close")(),n.close(o)),children:"Sluiten"}),heading:"De gegevens zijn opgeslagen",id:"ams-dialog-default"}},r={args:{children:e.jsx("form",{id:"ams-dialog-form",method:"dialog",children:e.jsx(h,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren."})}),footer:e.jsxs(D,{children:[e.jsx(i,{form:"ams-dialog-form",onClick:s("continue"),type:"submit",value:"submit",children:"Doorgaan"}),e.jsx(i,{onClick:o=>(s("cancel")(),n.close(o)),variant:"secondary",children:"Stoppen"})]}),heading:"Niet alle gegevens zijn opgeslagen",id:"ams-dialog-asking-to-confirm"}};var c,d,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      }} variant="secondary">
          Stoppen
        </Button>
      </ActionGroup>,
    heading: 'Niet alle gegevens zijn opgeslagen',
    id: 'ams-dialog-asking-to-confirm'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const N=["Default","Confirmation"],R=Object.freeze(Object.defineProperty({__proto__:null,Confirmation:r,Default:t,__namedExportsOrder:N,default:S},Symbol.toStringTag,{value:"Module"}));export{r as C,R as D};
