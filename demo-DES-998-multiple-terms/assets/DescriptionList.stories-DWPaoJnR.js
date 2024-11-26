import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{P as U,U as p,L as S}from"./index.esm-Djsl7hF_.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as D}from"./index-B-o1Wr-g.js";const N=D.forwardRef(({children:i,className:n,...t},s)=>e.jsx("dd",{...t,ref:s,className:m("ams-description-list__description",n),children:i}));N.displayName="DescriptionList.Description";try{DescriptionList.Description.displayName="DescriptionList.Description",DescriptionList.Description.__docgenInfo={description:"",displayName:"DescriptionList.Description",props:{}}}catch{}const z=D.forwardRef(({children:i,className:n,...t},s)=>e.jsx("dt",{...t,ref:s,className:m("ams-description-list__term",n),children:i}));z.displayName="DescriptionList.Term";try{DescriptionList.Term.displayName="DescriptionList.Term",DescriptionList.Term.__docgenInfo={description:"",displayName:"DescriptionList.Term",props:{}}}catch{}const I=D.forwardRef(({children:i,className:n,inverseColor:t,termsWidth:s,...P},R)=>e.jsx("dl",{...P,ref:R,className:m("ams-description-list",s&&`ams-description-list--terms-width-${s}`,t&&"ams-description-list--inverse-color",n),children:i}));I.displayName="DescriptionList";const r=Object.assign(I,{Term:z,Description:N});try{r.displayName="DescriptionList",r.__docgenInfo={description:"",displayName:"DescriptionList",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},termsWidth:{defaultValue:null,description:"",name:"termsWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const E={title:"Components/Text/Description List",component:r,args:{children:[e.jsx(r.Term,{children:"Het hoger onderwijs"},1),e.jsx(r.Description,{children:"Het hbo en wo"},2),e.jsx(r.Term,{children:"Het mbo en hoger onderwijs"},3),e.jsx(r.Description,{children:"Het vervolgonderwijs"},4),e.jsx(r.Term,{children:"Laagopgeleid"},5),e.jsx(r.Description,{children:"Praktisch opgeleid"},6),e.jsx(r.Term,{children:"Hoogopgeleid"},7),e.jsx(r.Description,{children:"Theoretisch opgeleid"},8),e.jsx(r.Term,{children:"Opleidingsniveau"},9),e.jsx(r.Description,{children:"Onderwijsrichting"},10)],inverseColor:!1},argTypes:{termsWidth:{control:{type:"radio",labels:{undefined:"auto",sm:"small",md:"medium",lg:"large"}},options:[void 0,"sm","md","lg"]}}},o={},a={args:{children:[e.jsx(r.Term,{children:"Blinde, slechtziende"},1),e.jsx(r.Description,{children:"Persoon met een visuele beperking"},2),e.jsx(r.Description,{children:"Persoon met een visuele handicap"},3),e.jsx(r.Description,{children:"Persoon die blind is"},4),e.jsx(r.Description,{children:"Persoon die slechtziend is"},5)]}},c={args:{children:[e.jsxs("div",{children:[e.jsx(r.Term,{children:"Naam"}),e.jsx(r.Term,{children:"Voornaam"}),e.jsx(r.Term,{children:"Roepnaam"}),e.jsx(r.Term,{children:"Bijnaam"})]},1),e.jsx(r.Description,{children:"De naam waarmee een persoon wordt aangesproken"},2)]}},d={render:i=>e.jsxs(r,{...i,children:[e.jsx(r.Term,{children:"Amsterdam Light Festival"},1),e.jsxs(r.Description,{children:[e.jsxs(U,{className:"ams-mb--sm",inverseColor:i.inverseColor,children:["Een jaarlijks evenement waarbij kunstenaars van over de hele wereld hun"," ",e.jsx("strong",{children:"creatieve lichtinstallaties"})," tonen. De kunstwerken zijn verspreid over de stad en zijn zowel vanaf het water als vanaf de kant te bewonderen."]}),e.jsxs(p,{inverseColor:i.inverseColor,children:[e.jsx(p.Item,{children:"Kleed je warm aan, want de meeste exposities zijn buiten."}),e.jsx(p.Item,{children:"Er zijn begeleide boottochten en wandelroutes beschikbaar."}),e.jsxs(p.Item,{children:["Voor de volledige lijst met exposities kun je"," ",e.jsx(S,{href:"#",inverseColor:i.inverseColor,children:"de festivalbrochure downloaden"}),"."]})]})]},2)]})},l={args:{inverseColor:!0}};var h,u,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(j=(u=o.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var L,v,g;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>Blinde, slechtziende</DescriptionList.Term>, <DescriptionList.Description key={2}>Persoon met een visuele beperking</DescriptionList.Description>, <DescriptionList.Description key={3}>Persoon met een visuele handicap</DescriptionList.Description>, <DescriptionList.Description key={4}>Persoon die blind is</DescriptionList.Description>, <DescriptionList.Description key={5}>Persoon die slechtziend is</DescriptionList.Description>]
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,T,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: [<div key={1}>
        <DescriptionList.Term>Naam</DescriptionList.Term>
        <DescriptionList.Term>Voornaam</DescriptionList.Term>
        <DescriptionList.Term>Roepnaam</DescriptionList.Term>
        <DescriptionList.Term>Bijnaam</DescriptionList.Term>
      </div>, <DescriptionList.Description key={2}>De naam waarmee een persoon wordt aangesproken</DescriptionList.Description>]
  }
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var f,k,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <DescriptionList {...args}>
      <DescriptionList.Term key={1}>Amsterdam Light Festival</DescriptionList.Term>
      <DescriptionList.Description key={2}>
        <Paragraph className="ams-mb--sm" inverseColor={args.inverseColor}>
          Een jaarlijks evenement waarbij kunstenaars van over de hele wereld hun{' '}
          <strong>creatieve lichtinstallaties</strong> tonen. De kunstwerken zijn verspreid over de stad en zijn zowel
          vanaf het water als vanaf de kant te bewonderen.
        </Paragraph>
        <UnorderedList inverseColor={args.inverseColor}>
          <UnorderedList.Item>Kleed je warm aan, want de meeste exposities zijn buiten.</UnorderedList.Item>
          <UnorderedList.Item>Er zijn begeleide boottochten en wandelroutes beschikbaar.</UnorderedList.Item>
          <UnorderedList.Item>
            Voor de volledige lijst met exposities kun je{' '}
            <Link href="#" inverseColor={args.inverseColor}>
              de festivalbrochure downloaden
            </Link>
            .
          </UnorderedList.Item>
        </UnorderedList>
      </DescriptionList.Description>
    </DescriptionList>
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var b,y,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const M=["Default","MultipleDescriptions","MultipleTerms","RichDescription","InverseColour"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InverseColour:l,MultipleDescriptions:a,MultipleTerms:c,RichDescription:d,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{q as D,l as I,a as M,d as R,c as a};
