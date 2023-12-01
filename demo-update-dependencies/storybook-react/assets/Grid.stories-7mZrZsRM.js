import{G as r,j as e,I as j,S as G}from"./index.esm-obMGEgjf.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const c={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},T={title:"Layout/Grid",component:r,argTypes:{paddingVertical:c,paddingTop:c,paddingBottom:c}},i={decorators:[a=>e.jsx(G,{children:e.jsx(a,{})})]},s={...i,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a))},name:"Basis"},m={...i,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),compact:!0},name:"Compact",parameters:{outline:"visible"}},l={...i,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),compact:!1,paddingVertical:"medium"},name:"Verticale marge"},o={...i,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"},argTypes:{gapVertical:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]}},name:"Verticale witruimte"},t={...i,args:{children:Array.from(Array(3).keys()).map(a=>e.jsx(r.Cell,{span:4,children:e.jsx("figure",{className:"amsterdam-docs-figure",children:e.jsx(j,{alt:"",src:`https://picsum.photos/640/360?random=${a}`})})},a))},name:"Cellen"};var d,n,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(p=(n=s.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var y,g,u;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true
  },
  name: 'Compact',
  parameters: {
    outline: 'visible'
  }
}`,...(u=(g=m.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,k,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: false,
    paddingVertical: 'medium'
  },
  name: 'Verticale marge'
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var A,C,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,h,V;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(V=(h=t.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};const N=["Default","Compact","VerticalSpace","VerticalGap","Cells"],v=Object.freeze(Object.defineProperty({__proto__:null,Cells:t,Compact:m,Default:s,VerticalGap:o,VerticalSpace:l,__namedExportsOrder:N,default:T},Symbol.toStringTag,{value:"Module"}));export{m as C,v as G,l as V,t as a,o as b};
