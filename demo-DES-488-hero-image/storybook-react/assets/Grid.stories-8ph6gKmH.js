import{G as r,j as e,I as j,S as G}from"./index.esm-HGq7GEkr.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const i={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},T={title:"Layout/Grid",component:r,argTypes:{paddingVertical:i,paddingTop:i,paddingBottom:i}},t={decorators:[a=>e.jsx(G,{children:e.jsx(a,{})})]},s={...t,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a))},name:"Basis"},n={...t,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),compact:!0},name:"Compact",parameters:{outline:"visible"}},m={...t,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),compact:!1,paddingVertical:"medium"},name:"Verticale marge"},l={...t,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"},argTypes:{gapVertical:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]}},name:"Verticale witruimte"},o={...t,args:{children:Array.from(Array(3).keys()).map(a=>e.jsx(r.Cell,{span:4,children:e.jsx("figure",{className:"amsterdam-docs-figure",children:e.jsx(j,{alt:"",src:`https://picsum.photos/640/360?random=${a}`})})},a))},name:"Cellen"};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var y,g,u;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true
  },
  name: 'Compact',
  parameters: {
    outline: 'visible'
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,k,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: false,
    paddingVertical: 'medium'
  },
  name: 'Verticale marge'
}`,...(x=(k=m.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var A,C,S;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,h,V;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(V=(h=o.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};const N=["Default","Compact","VerticalSpace","VerticalGap","Cells"],v=Object.freeze(Object.defineProperty({__proto__:null,Cells:o,Compact:n,Default:s,VerticalGap:l,VerticalSpace:m,__namedExportsOrder:N,default:T},Symbol.toStringTag,{value:"Module"}));export{n as C,v as G,m as V,o as a,l as b};
