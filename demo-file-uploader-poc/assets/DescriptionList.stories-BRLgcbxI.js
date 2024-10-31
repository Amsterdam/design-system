import{j as e}from"./jsx-runtime-BlAj40OV.js";import{P as I,U as l,L as N}from"./index.esm-CWcWflPT.js";import{i as P}from"./decorators-CweBkPI6.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as m}from"./index-Cs7sjTYM.js";const w=m.forwardRef(({children:i,className:t,...o},s)=>e.jsx("dd",{...o,ref:s,className:p("ams-description-list__description",t),children:i}));w.displayName="DescriptionList.Description";try{DescriptionList.Description.displayName="DescriptionList.Description",DescriptionList.Description.__docgenInfo={description:"",displayName:"DescriptionList.Description",props:{}}}catch{}const y=m.forwardRef(({children:i,className:t,...o},s)=>e.jsx("dt",{...o,ref:s,className:p("ams-description-list__term",t),children:i}));y.displayName="DescriptionList.Term";try{DescriptionList.Term.displayName="DescriptionList.Term",DescriptionList.Term.__docgenInfo={description:"",displayName:"DescriptionList.Term",props:{}}}catch{}const C=m.forwardRef(({children:i,className:t,inverseColor:o,termsWidth:s,...T},z)=>e.jsx("dl",{...T,ref:z,className:p("ams-description-list",s&&`ams-description-list--terms-width-${s}`,o&&"ams-description-list--inverse-color",t),children:i}));C.displayName="DescriptionList";const r=Object.assign(C,{Term:y,Description:w});try{r.displayName="DescriptionList",r.__docgenInfo={description:"",displayName:"DescriptionList",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},termsWidth:{defaultValue:null,description:"",name:"termsWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const U={title:"Components/Text/Description List",component:r,decorators:[P],args:{children:[e.jsx(r.Term,{children:"Het hoger onderwijs"},1),e.jsx(r.Description,{children:"Het hbo en wo"},2),e.jsx(r.Term,{children:"Het mbo en hoger onderwijs"},3),e.jsx(r.Description,{children:"Het vervolgonderwijs"},4),e.jsx(r.Term,{children:"Laagopgeleid"},5),e.jsx(r.Description,{children:"Praktisch opgeleid"},6),e.jsx(r.Term,{children:"Hoogopgeleid"},7),e.jsx(r.Description,{children:"Theoretisch opgeleid"},8),e.jsx(r.Term,{children:"Opleidingsniveau"},9),e.jsx(r.Description,{children:"Onderwijsrichting"},10)],inverseColor:!1},argTypes:{termsWidth:{control:{type:"radio",labels:{undefined:"auto",sm:"small",md:"medium",lg:"large"}},options:[void 0,"sm","md","lg"]}}},n={},a={args:{children:[e.jsx(r.Term,{children:"Blinde, slechtziende"},1),e.jsx(r.Description,{children:"Persoon met een visuele beperking"},2),e.jsx(r.Description,{children:"Persoon met een visuele handicap"},3),e.jsx(r.Description,{children:"Persoon die blind is"},4),e.jsx(r.Description,{children:"Persoon die slechtziend is"},5)]}},c={render:i=>e.jsxs(r,{...i,children:[e.jsx(r.Term,{children:"Amsterdam Light Festival"},1),e.jsxs(r.Description,{children:[e.jsxs(I,{className:"ams-mb--sm",inverseColor:i.inverseColor,children:["Een jaarlijks evenement waarbij kunstenaars van over de hele wereld hun"," ",e.jsx("strong",{children:"creatieve lichtinstallaties"})," tonen. De kunstwerken zijn verspreid over de stad en zijn zowel vanaf het water als vanaf de kant te bewonderen."]}),e.jsxs(l,{inverseColor:i.inverseColor,children:[e.jsx(l.Item,{children:"Kleed je warm aan, want de meeste exposities zijn buiten."}),e.jsx(l.Item,{children:"Er zijn begeleide boottochten en wandelroutes beschikbaar."}),e.jsxs(l.Item,{children:["Voor de volledige lijst met exposities kun je"," ",e.jsx(N,{href:"#",inverseColor:i.inverseColor,children:"de festivalbrochure downloaden"}),"."]})]})]},2)]})},d={args:{inverseColor:!0}};var h,D,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(u=(D=n.parameters)==null?void 0:D.docs)==null?void 0:u.source}}};var j,v,g;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Term key={1}>Blinde, slechtziende</DescriptionList.Term>, <DescriptionList.Description key={2}>Persoon met een visuele beperking</DescriptionList.Description>, <DescriptionList.Description key={3}>Persoon met een visuele handicap</DescriptionList.Description>, <DescriptionList.Description key={4}>Persoon die blind is</DescriptionList.Description>, <DescriptionList.Description key={5}>Persoon die slechtziend is</DescriptionList.Description>]
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var L,x,f;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var _,b,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const R=["Default","MultipleDescriptions","RichDescription","InverseColour"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:n,InverseColour:d,MultipleDescriptions:a,RichDescription:c,__namedExportsOrder:R,default:U},Symbol.toStringTag,{value:"Module"}));export{V as D,d as I,a as M,c as R};
