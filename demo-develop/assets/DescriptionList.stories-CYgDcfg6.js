import{j as e}from"./jsx-runtime-BlAj40OV.js";import{P as U,U as m,L as S}from"./index.esm-Bpf3nN5R.js";import{i as E}from"./decorators-CweBkPI6.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as D}from"./index-Cs7sjTYM.js";const z=D.forwardRef(({children:r,className:i,...t},o)=>e.jsx("dd",{...t,ref:o,className:p("ams-description-list__details",i),children:r}));z.displayName="DescriptionList.Details";try{DescriptionList.Details.displayName="DescriptionList.Details",DescriptionList.Details.__docgenInfo={description:"",displayName:"DescriptionList.Details",props:{}}}catch{}const I=D.forwardRef(({children:r,className:i,...t},o)=>e.jsx("dt",{...t,ref:o,className:p("ams-description-list__term",i),children:r}));I.displayName="DescriptionList.Term";try{DescriptionList.Term.displayName="DescriptionList.Term",DescriptionList.Term.__docgenInfo={description:"",displayName:"DescriptionList.Term",props:{}}}catch{}const N=D.forwardRef(({children:r,className:i,inverseColor:t,termsWidth:o,...P},R)=>e.jsx("dl",{...P,ref:R,className:p("ams-description-list",`ams-description-list--terms-width-${o}`,t&&"ams-description-list--inverse-color",i),children:r}));N.displayName="DescriptionList";const s=Object.assign(N,{Term:I,Details:z});try{s.displayName="DescriptionList",s.__docgenInfo={description:"",displayName:"DescriptionList",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},termsWidth:{defaultValue:null,description:"",name:"termsWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const M={title:"Components/Text/Description List",component:s,decorators:[E],args:{children:[e.jsx(s.Term,{children:"Het hoger onderwijs"},1),e.jsx(s.Details,{children:"Het hbo en wo"},2),e.jsx(s.Term,{children:"Het mbo en hoger onderwijs"},3),e.jsx(s.Details,{children:"Het vervolgonderwijs"},4),e.jsx(s.Term,{children:"Laagopgeleid"},5),e.jsx(s.Details,{children:"Praktisch opgeleid"},6),e.jsx(s.Term,{children:"Hoogopgeleid"},7),e.jsx(s.Details,{children:"Theoretisch opgeleid"},8),e.jsx(s.Term,{children:"Opleidingsniveau"},9),e.jsx(s.Details,{children:"Onderwijsrichting"},10)],inverseColor:!1},argTypes:{termsWidth:{control:{type:"radio",labels:{undefined:"auto",sm:"small",md:"medium",lg:"large"}},options:[void 0,"sm","md","lg"]}}},n={},a={args:{children:[e.jsx(s.Term,{children:"Blinde, slechtziende"},1),e.jsx(s.Details,{children:"Persoon met een visuele beperking"},2),e.jsx(s.Details,{children:"Persoon met een visuele handicap"},3),e.jsx(s.Details,{children:"Persoon die blind is"},4),e.jsx(s.Details,{children:"Persoon die slechtziend is"},5)]}},l={render:r=>e.jsxs(s,{...r,children:[e.jsx(s.Term,{children:"Amsterdam Light Festival"},1),e.jsxs(s.Details,{children:[e.jsxs(U,{className:"ams-mb--sm",inverseColor:r.inverseColor,children:["Een jaarlijks evenement waarbij kunstenaars van over de hele wereld hun"," ",e.jsx("strong",{children:"creatieve lichtinstallaties"})," tonen. De kunstwerken zijn verspreid over de stad en zijn zowel vanaf het water als vanaf de kant te bewonderen."]}),e.jsxs(m,{inverseColor:r.inverseColor,children:[e.jsx(m.Item,{children:"Kleed je warm aan, want de meeste exposities zijn buiten."}),e.jsx(m.Item,{children:"Er zijn begeleide boottochten en wandelroutes beschikbaar."}),e.jsxs(m.Item,{children:["Voor de volledige lijst met exposities kun je"," ",e.jsx(S,{href:"#",inverseColor:r.inverseColor,children:"de festivalbrochure downloaden"}),"."]})]})]},2)]})},d={args:{children:[e.jsx(s.Term,{children:"mbo-leerling"},1),e.jsx(s.Term,{children:"mbo-scholier"},2),e.jsx(s.Details,{style:{gridRow:"1 / 2"},children:"mbo-student"},3)]}},c={args:{inverseColor:!0}};var h,u,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(j=(u=n.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var g,L,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>Blinde, slechtziende</DescriptionList.Term>, <DescriptionList.Details key={2}>Persoon met een visuele beperking</DescriptionList.Details>, <DescriptionList.Details key={3}>Persoon met een visuele handicap</DescriptionList.Details>, <DescriptionList.Details key={4}>Persoon die blind is</DescriptionList.Details>, <DescriptionList.Details key={5}>Persoon die slechtziend is</DescriptionList.Details>]
  }
}`,...(v=(L=a.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var x,b,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <DescriptionList {...args}>
      <DescriptionList.Term key={1}>Amsterdam Light Festival</DescriptionList.Term>
      <DescriptionList.Details key={2}>
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
      </DescriptionList.Details>
    </DescriptionList>
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,_,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>mbo-leerling</DescriptionList.Term>, <DescriptionList.Term key={2}>mbo-scholier</DescriptionList.Term>, <DescriptionList.Details key={3} style={{
      gridRow: '1 / 2'
    }}>
        mbo-student
      </DescriptionList.Details>]
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var w,T,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const O=["Default","MultipleDescriptions","RichDescription","MultipleTerms","InverseColour"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:n,InverseColour:c,MultipleDescriptions:a,MultipleTerms:d,RichDescription:l,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{B as D,c as I,a as M,l as R,d as a};
