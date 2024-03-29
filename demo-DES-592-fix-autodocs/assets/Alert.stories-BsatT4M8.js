import{j as e}from"./jsx-runtime-CKrituN3.js";import{a5 as X,a2 as w,a6 as Y,a7 as ee,P as n,Z as f,o as ne}from"./index.esm-6x9pi5Wx.js";import{c as G}from"./clsx-B-dksMZM.js";import{r as M}from"./index-CBqU2yxZ.js";import{I as Z}from"./Icon-D7XRVDhl.js";import{H as re}from"./Heading-BvXjPwC0.js";import{V as ae}from"./VisuallyHidden-BSYh8v1W.js";const k=M.forwardRef(({className:m,label:p,onBackground:g,size:r="level-5",svg:a=X,...h},v)=>e.jsxs("button",{...h,ref:v,className:G("ams-icon-button",g==="light"&&"ams-icon-button--on-background-light",g==="dark"&&"ams-icon-button--on-background-dark",m),children:[e.jsx(ae,{children:p}),e.jsx(Z,{svg:a,size:r,square:!0})]}));k.displayName="IconButton";k.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{label:{required:!0,tsType:{name:"string"},description:""},onBackground:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'level-3' | 'level-4' | 'level-5' | 'level-6'",elements:[{name:"literal",value:"'level-3'"},{name:"literal",value:"'level-4'"},{name:"literal",value:"'level-5'"},{name:"literal",value:"'level-6'"}]},description:"",defaultValue:{value:"'level-5'",computed:!1}},svg:{required:!1,tsType:{name:"Function"},description:"",defaultValue:{value:"CloseIcon",computed:!0}}}};const te={error:w,info:Y,success:ee,warning:w},j=M.forwardRef(({children:m,className:p,headingLevel:g=2,title:r,severity:a="warning",closeable:h,onClose:v,...$},J)=>{const b=r?"level-4":"level-5",Q=r?"section":"div";return e.jsxs(Q,{...$,ref:J,className:G("ams-alert",a&&`ams-alert--${a}`,p),children:[e.jsx("div",{className:"ams-alert__icon",children:e.jsx(Z,{size:b,svg:te[a]})}),e.jsxs("div",{className:"ams-alert__content",children:[r&&e.jsx(re,{level:g,size:"level-4",children:r}),m]}),h&&e.jsx(k,{label:"Sluiten",size:b,onClick:v})]})});j.displayName="Alert";j.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{closeable:{required:!1,tsType:{name:"boolean"},description:"Whether the alert can be dismissed by the user. Adds a button to the top right."},headingLevel:{required:!1,tsType:{name:"intersection['level']",raw:"HeadingProps['level']"},description:`The hierarchical level of the alert title within the document.
@default 2`,defaultValue:{value:"2",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Allows a callback when dismissing the alert."},severity:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'success' | 'warning'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"Highlights the meaning or tone of the message.",defaultValue:{value:"'warning'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"The title for the alert."}}};const se={title:"Components/Feedback/Alert",component:j,args:{title:"Let op",closeable:!1},argTypes:{headingLevel:{control:"radio",options:[1,2,3,4]},severity:{control:{type:"radio"},options:["warning","error","success","info"]},onClose:{action:"onClose"}}},t={args:{children:e.jsx(n,{children:"Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."})}},s={args:{children:e.jsx(n,{children:"U bent vergeten verplichte velden in te vullen."}),title:"Vul de gegevens aan"}},o={args:{children:e.jsx(n,{children:"Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen. Probeer het over een paar minuten opnieuw."}),severity:"error",title:"Niet gelukt"}},i={args:{children:e.jsx(n,{children:"Het formulier is verzonden. We hebben uw gegevens goed ontvangen."}),closeable:!0,severity:"success",title:"Gelukt"}},l={args:{children:e.jsx(n,{children:"Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten."}),closeable:!0,severity:"info"}},d={args:{title:"Vul de gegevens aan",children:[e.jsx(n,{children:"U bent vergeten de volgende verplichte velden in te vullen:"},1),e.jsxs(f,{children:[e.jsx(f.Item,{children:"Naam"}),e.jsx(f.Item,{children:"Telefoonnummer"})]},2)]}},c={args:{children:e.jsxs(n,{children:["Tijdens Koningsdag zijn"," ",e.jsx(ne,{variant:"inline",href:"#",children:"alle Stadsloketten"})," ","gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."]}),severity:"info"}},u={args:{children:e.jsx(n,{children:"De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing."}),title:void 0}};var y,x,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
  }
}`,...(z=(x=t.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var S,T,P;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U bent vergeten verplichte velden in te vullen.</Paragraph>,
    title: 'Vul de gegevens aan'
  }
}`,...(P=(T=s.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var I,W,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen.
        Probeer het over een paar minuten opnieuw.
      </Paragraph>,
    severity: 'error',
    title: 'Niet gelukt'
  }
}`,...(L=(W=o.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var _,N,U;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>Het formulier is verzonden. We hebben uw gegevens goed ontvangen.</Paragraph>,
    closeable: true,
    severity: 'success',
    title: 'Gelukt'
  }
}`,...(U=(N=i.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var q,V,A;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun
        aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten.
      </Paragraph>,
    closeable: true,
    severity: 'info'
  }
}`,...(A=(V=l.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var C,H,O;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Vul de gegevens aan',
    children: [<Paragraph key={1}>U bent vergeten de volgende verplichte velden in te vullen:</Paragraph>, <UnorderedList key={2}>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>]
  }
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var D,E,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn{' '}
        <Link variant="inline" href="#">
          alle Stadsloketten
        </Link>{' '}
        gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar.
      </Paragraph>,
    severity: 'info'
  }
}`,...(B=(E=c.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var K,R,F;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing.
      </Paragraph>,
    title: undefined
  }
}`,...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const oe=["Default","Warning","Error","Success","Info","WithList","WithInlineLink","WithoutTitle"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:o,Info:l,Success:i,Warning:s,WithInlineLink:c,WithList:d,WithoutTitle:u,__namedExportsOrder:oe,default:se},Symbol.toStringTag,{value:"Module"}));export{pe as A,o as E,l as I,i as S,s as W,c as a,d as b,u as c};
