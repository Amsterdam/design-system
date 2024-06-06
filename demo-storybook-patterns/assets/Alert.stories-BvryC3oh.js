import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{l as v,o as J,p as Q}from"./index.esm-BePouZ6p.js";import{c as X}from"./clsx-B-dksMZM.js";import{r as Y}from"./index-uCp2LrAq.js";import{I as Z}from"./Icon-j44OzEOs.js";import{H as ee}from"./Heading-CGpdaMNv.js";import{I as ne}from"./IconButton-D9sFX4Y6.js";import{U as m}from"./UnorderedList-Dj5vkGIl.js";import{L as re}from"./Link-CmIS35CK.js";import{P as n}from"./Paragraph-DpVlyIEJ.js";const ae={error:v,info:J,success:Q,warning:v},u=Y.forwardRef(({children:h,className:H,closeable:B,closeButtonLabel:K="Sluiten",headingLevel:G=2,onClose:R,severity:g="warning",title:c,...F},M)=>{const p=c?"level-4":"level-5",$=c?"section":"div";return e.jsxs($,{...F,ref:M,className:X("ams-alert",g&&`ams-alert--${g}`,H),children:[e.jsx("div",{className:"ams-alert__icon",children:e.jsx(Z,{size:p,svg:ae[g]})}),e.jsxs("div",{className:"ams-alert__content",children:[c&&e.jsx(ee,{level:G,size:"level-4",children:c}),h]}),B&&e.jsx(ne,{label:K,size:p,onClick:R})]})});u.displayName="Alert";try{u.displayName="Alert",u.__docgenInfo={description:"",displayName:"Alert",props:{closeable:{defaultValue:null,description:"Whether the user can dismiss the Alert. Adds a button to its top right.",name:"closeable",required:!1,type:{name:"boolean"}},closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Alert.",name:"closeButtonLabel",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:"The hierarchical level of the Alert’s heading within the document.",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},onClose:{defaultValue:null,description:"A function to run when dismissing.",name:"onClose",required:!1,type:{name:"(() => void)"}},severity:{defaultValue:{value:"warning"},description:"The significance of the message conveyed.",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The text for the Heading.",name:"title",required:!1,type:{name:"string"}}}}}catch{}const te={title:"Components/Feedback/Alert",component:u,args:{title:"Let op",closeable:!1}},r={args:{children:e.jsx(n,{children:"Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."})}},a={args:{children:e.jsx(n,{children:"U bent vergeten verplichte velden in te vullen."}),title:"Vul de gegevens aan"}},t={args:{children:e.jsx(n,{children:"Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen. Probeer het over een paar minuten opnieuw."}),severity:"error",title:"Niet gelukt"}},s={args:{children:e.jsx(n,{children:"Het formulier is verzonden. We hebben uw gegevens goed ontvangen."}),closeable:!0,severity:"success",title:"Gelukt"}},o={args:{children:e.jsx(n,{children:"Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten."}),closeable:!0,severity:"info"}},i={args:{title:"Vul de gegevens aan",children:[e.jsx(n,{children:"U bent vergeten de volgende verplichte velden in te vullen:"},1),e.jsxs(m,{children:[e.jsx(m.Item,{children:"Naam"}),e.jsx(m.Item,{children:"Telefoonnummer"})]},2)]}},l={args:{children:e.jsxs(n,{children:["Tijdens Koningsdag zijn"," ",e.jsx(re,{variant:"inline",href:"#",children:"alle Stadsloketten"})," ","gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."]}),severity:"info"}},d={args:{children:e.jsx(n,{children:"De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing."}),title:void 0}};var f,k,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
  }
}`,...(j=(k=r.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var b,y,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U bent vergeten verplichte velden in te vullen.</Paragraph>,
    title: 'Vul de gegevens aan'
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,z,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen.
        Probeer het over een paar minuten opnieuw.
      </Paragraph>,
    severity: 'error',
    title: 'Niet gelukt'
  }
}`,...(w=(z=t.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var P,L,W;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var A,U,N;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Vul de gegevens aan',
    children: [<Paragraph key={1}>U bent vergeten de volgende verplichte velden in te vullen:</Paragraph>, <UnorderedList key={2}>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>]
  }
}`,...(N=(U=i.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var V,O,q;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var D,E,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing.
      </Paragraph>,
    title: undefined
  }
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const se=["Default","Warning","Error","Success","Info","WithList","WithInlineLink","WithoutTitle"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:t,Info:o,Success:s,Warning:a,WithInlineLink:l,WithList:i,WithoutTitle:d,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{ve as A,t as E,o as I,s as S,a as W,l as a,i as b,d as c};
