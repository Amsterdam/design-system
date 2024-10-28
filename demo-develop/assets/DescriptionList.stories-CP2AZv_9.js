import{j as e}from"./jsx-runtime-BlAj40OV.js";import{P as U,U as p,L as S}from"./index.esm-7Ed363Qq.js";import{i as E}from"./decorators-CweBkPI6.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as D}from"./index-Cs7sjTYM.js";const z=D.forwardRef(({children:i,className:s,...t},o)=>e.jsx("dd",{...t,ref:o,className:m("ams-description-list__description",s),children:i}));z.displayName="DescriptionList.Description";try{DescriptionList.Description.displayName="DescriptionList.Description",DescriptionList.Description.__docgenInfo={description:"",displayName:"DescriptionList.Description",props:{}}}catch{}const I=D.forwardRef(({children:i,className:s,...t},o)=>e.jsx("dt",{...t,ref:o,className:m("ams-description-list__term",s),children:i}));I.displayName="DescriptionList.Term";try{DescriptionList.Term.displayName="DescriptionList.Term",DescriptionList.Term.__docgenInfo={description:"",displayName:"DescriptionList.Term",props:{}}}catch{}const N=D.forwardRef(({children:i,className:s,inverseColor:t,termsWidth:o,...P},R)=>e.jsx("dl",{...P,ref:R,className:m("ams-description-list",`ams-description-list--terms-width-${o}`,t&&"ams-description-list--inverse-color",s),children:i}));N.displayName="DescriptionList";const r=Object.assign(N,{Term:I,Description:z});try{r.displayName="DescriptionList",r.__docgenInfo={description:"",displayName:"DescriptionList",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},termsWidth:{defaultValue:null,description:"",name:"termsWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const M={title:"Components/Text/Description List",component:r,decorators:[E],args:{children:[e.jsx(r.Term,{children:"Het hoger onderwijs"},1),e.jsx(r.Description,{children:"Het hbo en wo"},2),e.jsx(r.Term,{children:"Het mbo en hoger onderwijs"},3),e.jsx(r.Description,{children:"Het vervolgonderwijs"},4),e.jsx(r.Term,{children:"Laagopgeleid"},5),e.jsx(r.Description,{children:"Praktisch opgeleid"},6),e.jsx(r.Term,{children:"Hoogopgeleid"},7),e.jsx(r.Description,{children:"Theoretisch opgeleid"},8),e.jsx(r.Term,{children:"Opleidingsniveau"},9),e.jsx(r.Description,{children:"Onderwijsrichting"},10)],inverseColor:!1},argTypes:{termsWidth:{control:{type:"radio",labels:{undefined:"auto",sm:"small",md:"medium",lg:"large"}},options:[void 0,"sm","md","lg"]}}},n={},a={args:{children:[e.jsx(r.Term,{children:"Blinde, slechtziende"},1),e.jsx(r.Description,{children:"Persoon met een visuele beperking"},2),e.jsx(r.Description,{children:"Persoon met een visuele handicap"},3),e.jsx(r.Description,{children:"Persoon die blind is"},4),e.jsx(r.Description,{children:"Persoon die slechtziend is"},5)]}},c={render:i=>e.jsxs(r,{...i,children:[e.jsx(r.Term,{children:"Amsterdam Light Festival"},1),e.jsxs(r.Description,{children:[e.jsxs(U,{className:"ams-mb--sm",inverseColor:i.inverseColor,children:["Een jaarlijks evenement waarbij kunstenaars van over de hele wereld hun"," ",e.jsx("strong",{children:"creatieve lichtinstallaties"})," tonen. De kunstwerken zijn verspreid over de stad en zijn zowel vanaf het water als vanaf de kant te bewonderen."]}),e.jsxs(p,{inverseColor:i.inverseColor,children:[e.jsx(p.Item,{children:"Kleed je warm aan, want de meeste exposities zijn buiten."}),e.jsx(p.Item,{children:"Er zijn begeleide boottochten en wandelroutes beschikbaar."}),e.jsxs(p.Item,{children:["Voor de volledige lijst met exposities kun je"," ",e.jsx(S,{href:"#",inverseColor:i.inverseColor,children:"de festivalbrochure downloaden"}),"."]})]})]},2)]})},d={args:{children:[e.jsx(r.Term,{children:"mbo-leerling"},1),e.jsx(r.Term,{children:"mbo-scholier"},2),e.jsx(r.Description,{style:{gridRow:"1 / 2"},children:"mbo-student"},3)]}},l={args:{inverseColor:!0}};var h,u,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(j=(u=n.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var g,L,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>Blinde, slechtziende</DescriptionList.Term>, <DescriptionList.Description key={2}>Persoon met een visuele beperking</DescriptionList.Description>, <DescriptionList.Description key={3}>Persoon met een visuele handicap</DescriptionList.Description>, <DescriptionList.Description key={4}>Persoon die blind is</DescriptionList.Description>, <DescriptionList.Description key={5}>Persoon die slechtziend is</DescriptionList.Description>]
  }
}`,...(v=(L=a.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var x,b,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,_,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>mbo-leerling</DescriptionList.Term>, <DescriptionList.Term key={2}>mbo-scholier</DescriptionList.Term>, <DescriptionList.Description key={3} style={{
      gridRow: '1 / 2'
    }}>
        mbo-student
      </DescriptionList.Description>]
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var w,T,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const O=["Default","MultipleDescriptions","RichDescription","MultipleTerms","InverseColour"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:n,InverseColour:l,MultipleDescriptions:a,MultipleTerms:d,RichDescription:c,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{B as D,l as I,a as M,c as R,d as a};
