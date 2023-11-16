import{G as t,j as e,r as A,i as S}from"./index.esm-8227393c.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const m={control:{type:"inline-radio",direction:"horizontal",labels:{undefined:"n/a",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},T={title:"Layout/Grid",component:t,argTypes:{marginVertical:m,marginTop:m,marginBottom:m}},n={decorators:[r=>e.jsx(S,{children:e.jsx(r,{})})]},a={...n,args:{children:Array.from(Array(12).keys()).map(r=>e.jsx(t.Cell,{className:"amsterdam-docs-pink-box"},r))},name:"Basis"},s={...n,args:{children:Array.from(Array(12).keys()).map(r=>e.jsx(t.Cell,{className:"amsterdam-docs-pink-box"},r)),density:"high"},argTypes:{density:{control:{type:"inline-radio",direction:"horizontal"},options:["low","high"]}},name:"Compact"},o={...n,args:{children:Array.from(Array(12).keys()).map(r=>e.jsx(t.Cell,{className:"amsterdam-docs-pink-box"},r)),density:"low",marginVertical:"medium"},argTypes:{density:{control:{type:"inline-radio",direction:"horizontal"},options:["low","high"]}},name:"Verticale marge"},i={...n,args:{children:Array.from(Array(3).keys()).map(r=>e.jsx(t.Cell,{span:4,children:e.jsx("figure",{className:"amsterdam-docs-figure",children:e.jsx(A,{alt:"",src:`https://picsum.photos/640/360?random=${r}`})})},r))},name:"Cellen"};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        type: 'inline-radio',
        direction: 'horizontal'
      },
      options: ['low', 'high']
    }
  },
  name: 'Compact'
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
        type: 'inline-radio',
        direction: 'horizontal'
      },
      options: ['low', 'high']
    }
  },
  name: 'Verticale marge'
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,x,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const j=["Default","Compact","VerticalMargin","Cells"],G=Object.freeze(Object.defineProperty({__proto__:null,Cells:i,Compact:s,Default:a,VerticalMargin:o,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{s as C,G,o as V,i as a};
//# sourceMappingURL=Grid.stories-c502bdad.js.map
