import{j as e}from"./jsx-runtime-CKrituN3.js";import{m as v,p as J,q as Q}from"./index.esm-DjZ2yxjc.js";import{c as X}from"./clsx-B-dksMZM.js";import{r as Y}from"./index-CBqU2yxZ.js";import{I as Z}from"./Icon-DW52t4nJ.js";import{H as ee}from"./Heading-DWMBrRCk.js";import{I as ne}from"./IconButton-DnKuviCZ.js";import{U as u}from"./UnorderedList-CiQqrqaZ.js";import{L as re}from"./Link-D3gFihhU.js";import{P as n}from"./Paragraph-XcXe9TCG.js";const ae={error:v,info:J,success:Q,warning:v},g=Y.forwardRef(({children:h,className:H,closeable:K,closeLabel:B="Sluiten",headingLevel:G=2,onClose:R,severity:m="warning",title:c,...F},M)=>{const p=c?"level-4":"level-5",$=c?"section":"div";return e.jsxs($,{...F,ref:M,className:X("ams-alert",m&&`ams-alert--${m}`,H),children:[e.jsx("div",{className:"ams-alert__icon",children:e.jsx(Z,{size:p,svg:ae[m]})}),e.jsxs("div",{className:"ams-alert__content",children:[c&&e.jsx(ee,{level:G,size:"level-4",children:c}),h]}),K&&e.jsx(ne,{label:B,size:p,onClick:R})]})});g.displayName="Alert";try{g.displayName="Alert",g.__docgenInfo={description:"",displayName:"Alert",props:{closeable:{defaultValue:null,description:"Whether the alert can be dismissed by the user. Adds a button to the top right.",name:"closeable",required:!1,type:{name:"boolean"}},closeLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Alert.",name:"closeLabel",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:"The hierarchical level of the alert title within the document.",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},onClose:{defaultValue:null,description:"Allows a callback when dismissing the alert.",name:"onClose",required:!1,type:{name:"(() => void)"}},severity:{defaultValue:{value:"warning"},description:"Highlights the meaning or tone of the message.",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title for the alert.",name:"title",required:!1,type:{name:"string"}}}}}catch{}const te={title:"Components/Feedback/Alert",component:g,args:{title:"Let op",closeable:!1}},r={args:{children:e.jsx(n,{children:"Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."})}},a={args:{children:e.jsx(n,{children:"U bent vergeten verplichte velden in te vullen."}),title:"Vul de gegevens aan"}},t={args:{children:e.jsx(n,{children:"Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen. Probeer het over een paar minuten opnieuw."}),severity:"error",title:"Niet gelukt"}},s={args:{children:e.jsx(n,{children:"Het formulier is verzonden. We hebben uw gegevens goed ontvangen."}),closeable:!0,severity:"success",title:"Gelukt"}},o={args:{children:e.jsx(n,{children:"Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten."}),closeable:!0,severity:"info"}},i={args:{title:"Vul de gegevens aan",children:[e.jsx(n,{children:"U bent vergeten de volgende verplichte velden in te vullen:"},1),e.jsxs(u,{children:[e.jsx(u.Item,{children:"Naam"}),e.jsx(u.Item,{children:"Telefoonnummer"})]},2)]}},l={args:{children:e.jsxs(n,{children:["Tijdens Koningsdag zijn"," ",e.jsx(re,{variant:"inline",href:"#",children:"alle Stadsloketten"})," ","gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."]}),severity:"info"}},d={args:{children:e.jsx(n,{children:"De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing."}),title:void 0}};var f,k,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
  }
}`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var j,y,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U bent vergeten verplichte velden in te vullen.</Paragraph>,
    title: 'Vul de gegevens aan'
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var z,w,x;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen.
        Probeer het over een paar minuten opnieuw.
      </Paragraph>,
    severity: 'error',
    title: 'Niet gelukt'
  }
}`,...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var P,L,W;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>Het formulier is verzonden. We hebben uw gegevens goed ontvangen.</Paragraph>,
    closeable: true,
    severity: 'success',
    title: 'Gelukt'
  }
}`,...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,I,T;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun
        aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten.
      </Paragraph>,
    closeable: true,
    severity: 'info'
  }
}`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var U,A,N;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Vul de gegevens aan',
    children: [<Paragraph key={1}>U bent vergeten de volgende verplichte velden in te vullen:</Paragraph>, <UnorderedList key={2}>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>]
  }
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var V,q,O;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(q=l.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var D,E,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing.
      </Paragraph>,
    title: undefined
  }
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const se=["Default","Warning","Error","Success","Info","WithList","WithInlineLink","WithoutTitle"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:t,Info:o,Success:s,Warning:a,WithInlineLink:l,WithList:i,WithoutTitle:d,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{ve as A,t as E,o as I,s as S,a as W,l as a,i as b,d as c};
