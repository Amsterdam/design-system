import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as i,P as u,e as _}from"./index.esm-DynevYiA.js";import{c as D}from"./clsx-B-dksMZM.js";import{r as y}from"./index-G8LIXM5I.js";import{H as z}from"./Heading-BfwCY41a.js";import{I as B}from"./IconButton-CwFFXfEb.js";const h=a=>{var o;return(o=a.currentTarget.closest("dialog"))==null?void 0:o.close()},C=a=>{var o;return(o=document.querySelector(a))==null?void 0:o.showModal()},f=y.forwardRef(({children:a,className:o,closeButtonLabel:j="Sluiten",footer:s,heading:v,...x},b)=>e.jsxs("dialog",{...x,className:D("ams-dialog",o),ref:b,children:[e.jsxs("header",{className:"ams-dialog__header",children:[e.jsx(z,{level:1,size:"level-4",children:v}),e.jsx(B,{label:j,onClick:h,size:"heading-4",type:"button"})]}),e.jsx("div",{className:"ams-dialog__body",children:a}),s&&e.jsx("footer",{className:"ams-dialog__footer",children:s})]}));f.displayName="Dialog";const t=Object.assign(f,{close:h,open:C});try{t.displayName="Dialog",t.__docgenInfo={description:"",displayName:"Dialog",props:{closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Content for the footer, often one Button or an Action Group containing more of them.",name:"footer",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const S={title:"Components/Containers/Dialog",component:t,argTypes:{footer:{table:{disable:!0}},heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}},decorators:[(a,{args:o})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t.open(`#${o.id}`),children:"Open"}),e.jsx(a,{})]})]},n={args:{children:e.jsx(u,{children:"U ontvangt een bevestiging per e-mail."}),footer:e.jsx(i,{onClick:t.close,children:"Sluiten"}),heading:"De gegevens zijn opgeslagen",id:"ams-dialog-default"}},r={args:{children:e.jsx("form",{id:"ams-dialog-form",method:"dialog",children:e.jsx(u,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren."})}),footer:e.jsxs(_,{children:[e.jsx(i,{form:"ams-dialog-form",type:"submit",value:"submit",children:"Doorgaan"}),e.jsx(i,{onClick:t.close,variant:"tertiary",children:"Stoppen"})]}),heading:"Niet alle gegevens zijn opgeslagen",id:"ams-dialog-asking-to-confirm"}};var l,d,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>,
    footer: <Button onClick={Dialog.close}>Sluiten</Button>,
    heading: 'De gegevens zijn opgeslagen',
    id: 'ams-dialog-default'
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <form id="ams-dialog-form" method="dialog">
        <Paragraph>
          Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan
          dan verloren.
        </Paragraph>
      </form>,
    footer: <ActionGroup>
        <Button form="ams-dialog-form" type="submit" value="submit">
          Doorgaan
        </Button>
        <Button onClick={Dialog.close} variant="tertiary">
          Stoppen
        </Button>
      </ActionGroup>,
    heading: 'Niet alle gegevens zijn opgeslagen',
    id: 'ams-dialog-asking-to-confirm'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const k=["Default","Confirmation"],w=Object.freeze(Object.defineProperty({__proto__:null,Confirmation:r,Default:n,__namedExportsOrder:k,default:S},Symbol.toStringTag,{value:"Module"}));export{r as C,w as D};
