import{j as e}from"./jsx-runtime-BlAj40OV.js";import{P as R,U as p,L as U}from"./index.esm-BCCXlrck.js";import{i as S}from"./decorators-CweBkPI6.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as D}from"./index-Cs7sjTYM.js";const I=D.forwardRef(({children:i,className:r,...t},n)=>e.jsx("dd",{...t,ref:n,className:m("ams-description-list__details",r),children:i}));I.displayName="DescriptionList.Details";try{DescriptionList.Details.displayName="DescriptionList.Details",DescriptionList.Details.__docgenInfo={description:"",displayName:"DescriptionList.Details",props:{}}}catch{}const N=D.forwardRef(({children:i,className:r,...t},n)=>e.jsx("dt",{...t,ref:n,className:m("ams-description-list__term",r),children:i}));N.displayName="DescriptionList.Term";try{DescriptionList.Term.displayName="DescriptionList.Term",DescriptionList.Term.__docgenInfo={description:"",displayName:"DescriptionList.Term",props:{}}}catch{}const P=D.forwardRef(({children:i,className:r,inverseColor:t,...n},C)=>e.jsx("dl",{...n,ref:C,className:m("ams-description-list",t&&"ams-description-list--inverse-color",r),children:i}));P.displayName="DescriptionList";const s=Object.assign(P,{Term:N,Details:I});try{s.displayName="DescriptionList",s.__docgenInfo={description:"",displayName:"DescriptionList",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"Components/Text/Description List",component:s,decorators:[S],args:{children:[e.jsx(s.Term,{children:"Het hoger onderwijs"},1),e.jsx(s.Details,{children:"Het hbo en wo"},2),e.jsx(s.Term,{children:"Het mbo en hoger onderwijs"},3),e.jsx(s.Details,{children:"Het vervolgonderwijs"},4),e.jsx(s.Term,{children:"Laagopgeleid"},5),e.jsx(s.Details,{children:"Praktisch opgeleid"},6),e.jsx(s.Term,{children:"Hoogopgeleid"},7),e.jsx(s.Details,{children:"Theoretisch opgeleid"},8),e.jsx(s.Term,{children:"Opleidingsniveau"},9),e.jsx(s.Details,{children:"Onderwijsrichting"},10)],inverseColor:!1}},o={},a={args:{children:[e.jsx(s.Term,{children:"Blinde, slechtziende"},1),e.jsx(s.Details,{children:"Persoon met een visuele beperking"},2),e.jsx(s.Details,{children:"Persoon met een visuele handicap"},3),e.jsx(s.Details,{children:"Persoon die blind is"},4),e.jsx(s.Details,{children:"Persoon die slechtziend is"},5)]}},l={args:{children:[e.jsx(s.Term,{children:"Amsterdam Light Festival"},1),e.jsxs(s.Details,{children:[e.jsxs(R,{className:"ams-mb--sm",children:["Een jaarlijks evenement waarbij kunstenaars van over de hele wereld hun"," ",e.jsx("strong",{children:"creatieve lichtinstallaties"})," tonen. De kunstwerken zijn verspreid over de stad en zijn zowel vanaf het water als vanaf de kant te bewonderen."]}),e.jsxs(p,{children:[e.jsx(p.Item,{children:"Kleed je warm aan, want de meeste exposities zijn buiten."}),e.jsx(p.Item,{children:"Er zijn begeleide boottochten en wandelroutes beschikbaar."}),e.jsxs(p.Item,{children:["Voor de volledige lijst met exposities kun je ",e.jsx(U,{href:"#",children:"de festivalbrochure downloaden"}),"."]})]})]},2)]}},c={args:{children:[e.jsx(s.Term,{children:"mbo-leerling"},1),e.jsx(s.Term,{children:"mbo-scholier"},2),e.jsx(s.Details,{style:{gridRow:"1 / 2"},children:"mbo-student"},3)]}},d={args:{inverseColor:!0}};var h,j,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(u=(j=o.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var L,g,x;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>Blinde, slechtziende</DescriptionList.Term>, <DescriptionList.Details key={2}>Persoon met een visuele beperking</DescriptionList.Details>, <DescriptionList.Details key={3}>Persoon met een visuele handicap</DescriptionList.Details>, <DescriptionList.Details key={4}>Persoon die blind is</DescriptionList.Details>, <DescriptionList.Details key={5}>Persoon die slechtziend is</DescriptionList.Details>]
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,b,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>Amsterdam Light Festival</DescriptionList.Term>, <DescriptionList.Details key={2}>
        <Paragraph className="ams-mb--sm">
          Een jaarlijks evenement waarbij kunstenaars van over de hele wereld hun{' '}
          <strong>creatieve lichtinstallaties</strong> tonen. De kunstwerken zijn verspreid over de stad en zijn zowel
          vanaf het water als vanaf de kant te bewonderen.
        </Paragraph>
        <UnorderedList>
          <UnorderedList.Item>Kleed je warm aan, want de meeste exposities zijn buiten.</UnorderedList.Item>
          <UnorderedList.Item>Er zijn begeleide boottochten en wandelroutes beschikbaar.</UnorderedList.Item>
          <UnorderedList.Item>
            Voor de volledige lijst met exposities kun je <Link href="#">de festivalbrochure downloaden</Link>.
          </UnorderedList.Item>
        </UnorderedList>
      </DescriptionList.Details>]
  }
}`,...(_=(b=l.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var k,f,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>mbo-leerling</DescriptionList.Term>, <DescriptionList.Term key={2}>mbo-scholier</DescriptionList.Term>, <DescriptionList.Details key={3} style={{
      gridRow: '1 / 2'
    }}>
        mbo-student
      </DescriptionList.Details>]
  }
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,T,z;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(z=(T=d.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const M=["Default","MultipleDescriptions","RichDescription","MultipleTerms","InverseColour"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InverseColour:d,MultipleDescriptions:a,MultipleTerms:c,RichDescription:l,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{F as D,d as I,a as M,l as R,c as a};
