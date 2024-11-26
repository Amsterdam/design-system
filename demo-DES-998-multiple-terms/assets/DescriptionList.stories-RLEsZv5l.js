import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{P as U,U as l,L as S}from"./index.esm-D6d_HQky.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as D}from"./index-B-o1Wr-g.js";const N=D.forwardRef(({children:r,className:n,...t},s)=>e.jsx("dd",{...t,ref:s,className:m("ams-description-list__description",n),children:r}));N.displayName="DescriptionList.Description";try{DescriptionList.Description.displayName="DescriptionList.Description",DescriptionList.Description.__docgenInfo={description:"",displayName:"DescriptionList.Description",props:{}}}catch{}const G=D.forwardRef(({children:r,className:n,...t},s)=>e.jsx("div",{...t,ref:s,className:m("ams-description-list__group",n),children:r}));G.displayName="DescriptionList.Group";try{DescriptionList.Group.displayName="DescriptionList.Group",DescriptionList.Group.__docgenInfo={description:"",displayName:"DescriptionList.Group",props:{}}}catch{}const z=D.forwardRef(({children:r,className:n,...t},s)=>e.jsx("dt",{...t,ref:s,className:m("ams-description-list__term",n),children:r}));z.displayName="DescriptionList.Term";try{DescriptionList.Term.displayName="DescriptionList.Term",DescriptionList.Term.__docgenInfo={description:"",displayName:"DescriptionList.Term",props:{}}}catch{}const I=D.forwardRef(({children:r,className:n,inverseColor:t,termsWidth:s,...P},R)=>e.jsx("dl",{...P,ref:R,className:m("ams-description-list",s&&`ams-description-list--terms-width-${s}`,t&&"ams-description-list--inverse-color",n),children:r}));I.displayName="DescriptionList";const i=Object.assign(I,{Term:z,Description:N,Group:G});try{i.displayName="DescriptionList",i.__docgenInfo={description:"",displayName:"DescriptionList",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},termsWidth:{defaultValue:null,description:"",name:"termsWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const E={title:"Components/Text/Description List",component:i,args:{children:[e.jsx(i.Term,{children:"Het hoger onderwijs"},1),e.jsx(i.Description,{children:"Het hbo en wo"},2),e.jsx(i.Term,{children:"Het mbo en hoger onderwijs"},3),e.jsx(i.Description,{children:"Het vervolgonderwijs"},4),e.jsx(i.Term,{children:"Laagopgeleid"},5),e.jsx(i.Description,{children:"Praktisch opgeleid"},6),e.jsx(i.Term,{children:"Hoogopgeleid"},7),e.jsx(i.Description,{children:"Theoretisch opgeleid"},8),e.jsx(i.Term,{children:"Opleidingsniveau"},9),e.jsx(i.Description,{children:"Onderwijsrichting"},10)],inverseColor:!1},argTypes:{termsWidth:{control:{type:"radio",labels:{undefined:"auto",sm:"small",md:"medium",lg:"large"}},options:[void 0,"sm","md","lg"]}}},o={},a={args:{children:[e.jsx(i.Term,{children:"Blinde, slechtziende"},1),e.jsx(i.Description,{children:"Persoon met een visuele beperking"},2),e.jsx(i.Description,{children:"Persoon met een visuele handicap"},3),e.jsx(i.Description,{children:"Persoon die blind is"},4),e.jsx(i.Description,{children:"Persoon die slechtziend is"},5)]}},c={args:{termsWidth:"md",children:[e.jsxs(i.Group,{children:[e.jsx(i.Term,{children:"Achternaam"},1),e.jsx(i.Description,{children:"De naam die een persoon van zijn of haar ouders krijgt"},2)]},1),e.jsxs(i.Group,{children:[e.jsx(i.Term,{children:"Naam"},1),e.jsx(i.Term,{children:"Voornaam"},2),e.jsx(i.Term,{children:"Roepnaam"},3),e.jsx(i.Term,{children:"Bijnaam"},4),e.jsx(i.Description,{children:"De naam waarmee een persoon wordt aangesproken"},5)]},2),e.jsxs(i.Group,{children:[e.jsx(i.Term,{children:"Geboortedatum"},1),e.jsx(i.Description,{children:"De datum waarop een persoon is geboren"},2)]},3)]}},p={render:r=>e.jsxs(i,{...r,children:[e.jsx(i.Term,{children:"Amsterdam Light Festival"},1),e.jsxs(i.Description,{children:[e.jsxs(U,{className:"ams-mb--sm",inverseColor:r.inverseColor,children:["Een jaarlijks evenement waarbij kunstenaars van over de hele wereld hun"," ",e.jsx("strong",{children:"creatieve lichtinstallaties"})," tonen. De kunstwerken zijn verspreid over de stad en zijn zowel vanaf het water als vanaf de kant te bewonderen."]}),e.jsxs(l,{inverseColor:r.inverseColor,children:[e.jsx(l.Item,{children:"Kleed je warm aan, want de meeste exposities zijn buiten."}),e.jsx(l.Item,{children:"Er zijn begeleide boottochten en wandelroutes beschikbaar."}),e.jsxs(l.Item,{children:["Voor de volledige lijst met exposities kun je"," ",e.jsx(S,{href:"#",inverseColor:r.inverseColor,children:"de festivalbrochure downloaden"}),"."]})]})]},2)]})},d={args:{inverseColor:!0}};var h,u,L;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(L=(u=o.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};var j,g,v;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>Blinde, slechtziende</DescriptionList.Term>, <DescriptionList.Description key={2}>Persoon met een visuele beperking</DescriptionList.Description>, <DescriptionList.Description key={3}>Persoon met een visuele handicap</DescriptionList.Description>, <DescriptionList.Description key={4}>Persoon die blind is</DescriptionList.Description>, <DescriptionList.Description key={5}>Persoon die slechtziend is</DescriptionList.Description>]
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,y,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    termsWidth: 'md',
    children: [<DescriptionList.Group key={1}>
        <DescriptionList.Term key={1}>Achternaam</DescriptionList.Term>
        <DescriptionList.Description key={2}>
          De naam die een persoon van zijn of haar ouders krijgt
        </DescriptionList.Description>
      </DescriptionList.Group>, <DescriptionList.Group key={2}>
        <DescriptionList.Term key={1}>Naam</DescriptionList.Term>
        <DescriptionList.Term key={2}>Voornaam</DescriptionList.Term>
        <DescriptionList.Term key={3}>Roepnaam</DescriptionList.Term>
        <DescriptionList.Term key={4}>Bijnaam</DescriptionList.Term>
        <DescriptionList.Description key={5}>
          De naam waarmee een persoon wordt aangesproken
        </DescriptionList.Description>
      </DescriptionList.Group>, <DescriptionList.Group key={3}>
        <DescriptionList.Term key={1}>Geboortedatum</DescriptionList.Term>
        <DescriptionList.Description key={2}>De datum waarop een persoon is geboren</DescriptionList.Description>
      </DescriptionList.Group>]
  }
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var _,T,f;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(f=(T=p.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var b,w,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const M=["Default","MultipleDescriptions","MultipleTerms","RichDescription","InverseColour"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InverseColour:d,MultipleDescriptions:a,MultipleTerms:c,RichDescription:p,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{B as D,d as I,a as M,p as R,c as a};
