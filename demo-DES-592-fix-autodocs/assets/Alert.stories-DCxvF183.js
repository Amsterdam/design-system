import{j as e}from"./jsx-runtime-CKrituN3.js";import{a8 as f,a9 as ee,a5 as P,aa as ne,ab as ae,P as s,a0 as w,s as re}from"./index.esm-BWcJJZNk.js";import{r as k}from"./index-CBqU2yxZ.js";function le(r){switch(r){case 2:return"h2";case 3:return"h3";case 4:return"h4";default:return"h1"}}const z=k.forwardRef(({children:r,className:a,inverseColor:l,level:n=1,size:t,...i},o)=>{const j=le(n),y=t?t.split("-")[1]:n;return e.jsx(j,{ref:o,className:f("ams-heading",`ams-heading--${y}`,l&&"ams-heading--inverse-color",a),...i,children:r})});z.displayName="Heading";z.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"Het hiërarchische niveau van de titel.",defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6'",elements:[{name:"literal",value:"'level-1'"},{name:"literal",value:"'level-2'"},{name:"literal",value:"'level-3'"},{name:"literal",value:"'level-4'"},{name:"literal",value:"'level-5'"},{name:"literal",value:"'level-6'"}]},description:`De visuele grootte van de titel.
Voeg dit toe om de titel groter of kleiner weer te geven zonder de semantische betekenis te veranderen.`},inverseColor:{required:!1,tsType:{name:"boolean"},description:`De kleur van de titel
Gebruik deze property om de titel in tegenovergestelde kleur te tonen.`}}};const b=k.forwardRef(({className:r,size:a="level-3",square:l,svg:n,...t},i)=>e.jsx("span",{ref:i,className:f("ams-icon",a==="level-3"&&"ams-icon--size-3",a==="level-4"&&"ams-icon--size-4",a==="level-5"&&"ams-icon--size-5",a==="level-6"&&"ams-icon--size-6",l&&"ams-icon--square",r),...t,children:n()}));b.displayName="Icon";b.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{required:!1,tsType:{name:"union",raw:"'level-3' | 'level-4' | 'level-5' | 'level-6'",elements:[{name:"literal",value:"'level-3'"},{name:"literal",value:"'level-4'"},{name:"literal",value:"'level-5'"},{name:"literal",value:"'level-6'"}]},description:"",defaultValue:{value:"'level-3'",computed:!1}},square:{required:!1,tsType:{name:"boolean"},description:""},svg:{required:!0,tsType:{name:"Function"},description:""}}};const x=k.forwardRef(({children:r,className:a,...l},n)=>e.jsx("span",{...l,ref:n,className:f("ams-visually-hidden",a),children:r}));x.displayName="VisuallyHidden";x.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden"};const T=k.forwardRef(({className:r,label:a,onBackground:l,size:n="level-5",svg:t=ee,...i},o)=>e.jsxs("button",{...i,ref:o,className:f("ams-icon-button",l==="light"&&"ams-icon-button--on-background-light",l==="dark"&&"ams-icon-button--on-background-dark",r),children:[e.jsx(x,{children:a}),e.jsx(b,{svg:t,size:n,square:!0})]}));T.displayName="IconButton";T.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{label:{required:!0,tsType:{name:"string"},description:""},onBackground:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'level-3' | 'level-4' | 'level-5' | 'level-6'",elements:[{name:"literal",value:"'level-3'"},{name:"literal",value:"'level-4'"},{name:"literal",value:"'level-5'"},{name:"literal",value:"'level-6'"}]},description:"",defaultValue:{value:"'level-5'",computed:!1}},svg:{required:!1,tsType:{name:"Function"},description:"",defaultValue:{value:"CloseIcon",computed:!0}}}};const te={error:P,info:ne,success:ae,warning:P},S=k.forwardRef(({children:r,className:a,headingLevel:l=2,title:n,severity:t="warning",closeable:i,onClose:o,...j},y)=>{const I=n?"level-4":"level-5",Z=n?"section":"div";return e.jsxs(Z,{...j,ref:y,className:f("ams-alert",t&&`ams-alert--${t}`,a),children:[e.jsx("div",{className:"ams-alert__icon",children:e.jsx(b,{size:I,svg:te[t]})}),e.jsxs("div",{className:"ams-alert__content",children:[n&&e.jsx(z,{level:l,size:"level-4",children:n}),r]}),i&&e.jsx(T,{label:"Sluiten",size:I,onClick:o})]})});S.displayName="Alert";S.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{closeable:{required:!1,tsType:{name:"boolean"},description:"Whether the alert can be dismissed by the user. Adds a button to the top right."},headingLevel:{required:!1,tsType:{name:"intersection['level']",raw:"HeadingProps['level']"},description:`The hierarchical level of the alert title within the document.
@default 2`,defaultValue:{value:"2",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Allows a callback when dismissing the alert."},severity:{required:!1,tsType:{name:"union",raw:"'error' | 'info' | 'success' | 'warning'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"Highlights the meaning or tone of the message.",defaultValue:{value:"'warning'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"The title for the alert."}}};const se={title:"Components/Feedback/Alert",component:S,args:{title:"Let op",closeable:!1},argTypes:{headingLevel:{control:"radio",options:[1,2,3,4]},severity:{control:{type:"radio"},options:["warning","error","success","info"]},onClose:{action:"onClose"}}},d={args:{children:e.jsx(s,{children:"Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."})}},c={args:{children:e.jsx(s,{children:"U bent vergeten verplichte velden in te vullen."}),title:"Vul de gegevens aan"}},u={args:{children:e.jsx(s,{children:"Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen. Probeer het over een paar minuten opnieuw."}),severity:"error",title:"Niet gelukt"}},m={args:{children:e.jsx(s,{children:"Het formulier is verzonden. We hebben uw gegevens goed ontvangen."}),closeable:!0,severity:"success",title:"Gelukt"}},g={args:{children:e.jsx(s,{children:"Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten."}),closeable:!0,severity:"info"}},v={args:{title:"Vul de gegevens aan",children:[e.jsx(s,{children:"U bent vergeten de volgende verplichte velden in te vullen:"},1),e.jsxs(w,{children:[e.jsx(w.Item,{children:"Naam"}),e.jsx(w.Item,{children:"Telefoonnummer"})]},2)]}},p={args:{children:e.jsxs(s,{children:["Tijdens Koningsdag zijn"," ",e.jsx(re,{variant:"inline",href:"#",children:"alle Stadsloketten"})," ","gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."]}),severity:"info"}},h={args:{children:e.jsx(s,{children:"De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing."}),title:void 0}};var N,W,_;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,L,V;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U bent vergeten verplichte velden in te vullen.</Paragraph>,
    title: 'Vul de gegevens aan'
  }
}`,...(V=(L=c.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var H,U,A;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen.
        Probeer het over een paar minuten opnieuw.
      </Paragraph>,
    severity: 'error',
    title: 'Niet gelukt'
  }
}`,...(A=(U=u.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var C,D,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>Het formulier is verzonden. We hebben uw gegevens goed ontvangen.</Paragraph>,
    closeable: true,
    severity: 'success',
    title: 'Gelukt'
  }
}`,...(O=(D=m.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var E,R,B;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun
        aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten.
      </Paragraph>,
    closeable: true,
    severity: 'info'
  }
}`,...(B=(R=g.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var K,F,G;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Vul de gegevens aan',
    children: [<Paragraph key={1}>U bent vergeten de volgende verplichte velden in te vullen:</Paragraph>, <UnorderedList key={2}>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>]
  }
}`,...(G=(F=v.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var $,M,X;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(M=p.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var J,Q,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing.
      </Paragraph>,
    title: undefined
  }
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const ie=["Default","Warning","Error","Success","Info","WithList","WithInlineLink","WithoutTitle"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Error:u,Info:g,Success:m,Warning:c,WithInlineLink:p,WithList:v,WithoutTitle:h,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{ue as A,u as E,g as I,m as S,c as W,p as a,v as b,h as c};
