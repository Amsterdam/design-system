import{j as n}from"./jsx-runtime-CKrituN3.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as y}from"./index-CBqU2yxZ.js";const s=y.forwardRef(({children:e,className:r,inverseColor:p,...m},u)=>n.jsx("h1",{...m,ref:u,className:v("ams-page-heading",p&&"ams-page-heading--inverse-color",r),children:e}));s.displayName="PageHeading";try{s.displayName="PageHeading",s.__docgenInfo={description:"",displayName:"PageHeading",props:{inverseColor:{defaultValue:null,description:`De kleur van de titel
Gebruik deze property om de titel in tegenovergestelde kleur te tonen.`,name:"inverseColor",required:!1,type:{name:"boolean"}}}}}catch{}const f={title:"Components/Text/Page Heading",component:s,args:{children:"Gemeente Amsterdam",inverseColor:!1},argTypes:{children:{table:{disable:!1}}}},a={decorators:[(e,r)=>n.jsx("div",{style:{background:r.args.inverseColor?"#004699":"transparent",margin:r.args.inverseColor?-16:0,padding:r.args.inverseColor?16:0},children:n.jsx(e,{})})]},o={args:{inverseColor:!0},decorators:[e=>n.jsx("div",{style:{background:"#004699",margin:-16,padding:16},children:n.jsx(e,{})})]};var t,d,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  decorators: [(Story, context) => <div style={{
    background: context.args.inverseColor ? '#004699' : 'transparent',
    margin: context.args.inverseColor ? -16 : 0,
    padding: context.args.inverseColor ? 16 : 0
  }}>
        <Story />
      </div>]
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,c,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  },
  decorators: [Story => <div style={{
    background: '#004699',
    margin: -16,
    padding: 16
  }}>
        <Story />
      </div>]
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const x=["Default","InvertedColor"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InvertedColor:o,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{o as I,j as P};
