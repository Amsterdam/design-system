import{G as i,j as r,s as A,i as S}from"./index.esm-440b990a.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const l={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},T={title:"Layout/Grid",component:i,argTypes:{paddingVertical:l,paddingTop:l,paddingBottom:l}},m={decorators:[e=>r.jsx(S,{children:r.jsx(e,{})})]},a={...m,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(i.Cell,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},s={...m,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(i.Cell,{className:"amsterdam-docs-pink-box"},e)),density:"high"},argTypes:{density:{control:{type:"radio"},options:["low","high"]}},name:"Compact",parameters:{outline:"visible"}},o={...m,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(i.Cell,{className:"amsterdam-docs-pink-box"},e)),density:"low",paddingVertical:"medium"},argTypes:{density:{control:{type:"radio"},options:["low","high"]}},name:"Verticale witruimte"},t={...m,args:{children:Array.from(Array(3).keys()).map(e=>r.jsx(i.Cell,{span:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx(A,{alt:"",src:`https://picsum.photos/640/360?random=${e}`})})},e))},name:"Cellen"};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,y,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,h,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  name: 'Verticale witruimte'
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,x,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const b=["Default","Compact","VerticalSpace","Cells"],G=Object.freeze(Object.defineProperty({__proto__:null,Cells:t,Compact:s,Default:a,VerticalSpace:o,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{s as C,G,o as V,t as a};
//# sourceMappingURL=Grid.stories-03dd4c4f.js.map
