import{G as m,j as r,r as A,i as S}from"./index.esm-1e29fb8f.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const l={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},T={title:"Layout/Grid",component:m,argTypes:{marginVertical:l,marginTop:l,marginBottom:l}},i={decorators:[e=>r.jsx(S,{children:r.jsx(e,{})})]},a={...i,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(m.Cell,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},s={...i,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(m.Cell,{className:"amsterdam-docs-pink-box"},e)),density:"high"},argTypes:{density:{control:{type:"radio"},options:["low","high"]}},name:"Compact",parameters:{outline:"visible"}},o={...i,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(m.Cell,{className:"amsterdam-docs-pink-box"},e)),density:"low",marginVertical:"medium"},argTypes:{density:{control:{type:"radio"},options:["low","high"]}},name:"Verticale marge"},t={...i,args:{children:Array.from(Array(3).keys()).map(e=>r.jsx(m.Cell,{span:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx(A,{alt:"",src:`https://picsum.photos/640/360?random=${e}`})})},e))},name:"Cellen"};var n,c,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,y,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    marginVertical: 'medium'
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
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const b=["Default","Compact","VerticalMargin","Cells"],G=Object.freeze(Object.defineProperty({__proto__:null,Cells:t,Compact:s,Default:a,VerticalMargin:o,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{s as C,G,o as V,t as a};
//# sourceMappingURL=Grid.stories-96e7a00e.js.map
