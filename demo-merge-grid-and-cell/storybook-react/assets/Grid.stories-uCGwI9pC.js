import{G as l,j as e,S}from"./index.esm--0_0zttf.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const i={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},V={title:"Layout/Grid",component:l,argTypes:{paddingVertical:i,paddingTop:i,paddingBottom:i}},t={decorators:[a=>e.jsx(S,{children:e.jsx(a,{})})]},r={...t,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(l.Cell,{className:"amsterdam-docs-pink-box"},a))},name:"Basis"},s={...t,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(l.Cell,{className:"amsterdam-docs-pink-box"},a)),compact:!0},name:"Compact",parameters:{outline:"visible"}},m={...t,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(l.Cell,{className:"amsterdam-docs-pink-box"},a)),compact:!1,paddingVertical:"medium"},name:"Verticale marge"},o={...t,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(l.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"},argTypes:{gapVertical:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]}},name:"Verticale witruimte"};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var n,y,g;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true
  },
  name: 'Compact',
  parameters: {
    outline: 'visible'
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,f,k;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: false,
    paddingVertical: 'medium'
  },
  name: 'Verticale marge'
}`,...(k=(f=m.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,A,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  },
  argTypes: {
    gapVertical: {
      control: {
        type: 'radio',
        labels: {
          small: 'small',
          undefined: 'medium',
          large: 'large'
        }
      },
      options: ['small', undefined, 'large']
    }
  },
  name: 'Verticale witruimte'
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const C=["Default","Compact","VerticalSpace","VerticalGap"],T=Object.freeze(Object.defineProperty({__proto__:null,Compact:s,Default:r,VerticalGap:o,VerticalSpace:m,__namedExportsOrder:C,default:V},Symbol.toStringTag,{value:"Module"}));export{s as C,T as G,m as V,o as a};
