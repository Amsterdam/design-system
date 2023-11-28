import{G as r,j as a,s as V,i as j}from"./index.esm-PEP5w2xV.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const n={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},G={title:"Layout/Grid",component:r,argTypes:{paddingVertical:n,paddingTop:n,paddingBottom:n}},m={decorators:[e=>a.jsx(j,{children:a.jsx(e,{})})]},s={...m,args:{children:Array.from(Array(12).keys()).map(e=>a.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},o={...m,args:{children:Array.from(Array(12).keys()).map(e=>a.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},e)),density:"high"},argTypes:{density:{control:{type:"radio"},options:["low","high"]}},name:"Compact",parameters:{outline:"visible"}},l={...m,args:{children:Array.from(Array(12).keys()).map(e=>a.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},e)),density:"low",paddingVertical:"medium"},argTypes:{density:{control:{type:"radio"},options:["low","high"]}},name:"Verticale marge"},t={...m,args:{children:Array.from(Array(6).keys()).map(e=>a.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},e)),gapVertical:"small"},argTypes:{gapVertical:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]}},name:"Verticale witruimte"},i={...m,args:{children:Array.from(Array(3).keys()).map(e=>a.jsx(r.Cell,{span:4,children:a.jsx("figure",{className:"amsterdam-docs-figure",children:a.jsx(V,{alt:"",src:`https://picsum.photos/640/360?random=${e}`})})},e))},name:"Cellen"};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var y,g,u;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    density: 'high'
  },
  argTypes: {
    density: {
      control: {
        type: 'radio'
      },
      options: ['low', 'high']
    }
  },
  name: 'Compact',
  parameters: {
    outline: 'visible'
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    density: 'low',
    paddingVertical: 'medium'
  },
  argTypes: {
    density: {
      control: {
        type: 'radio'
      },
      options: ['low', 'high']
    }
  },
  name: 'Verticale marge'
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,A,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(A=t.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var b,S,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const N=["Default","Compact","VerticalSpace","VerticalGap","Cells"],_=Object.freeze(Object.defineProperty({__proto__:null,Cells:i,Compact:o,Default:s,VerticalGap:t,VerticalSpace:l,__namedExportsOrder:N,default:G},Symbol.toStringTag,{value:"Module"}));export{o as C,_ as G,l as V,i as a,t as b};
//# sourceMappingURL=Grid.stories-4V4mRQ2g.js.map
