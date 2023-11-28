import{G as t,j as a,s as h,i as S}from"./index.esm-ZOrJeqrL.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const l={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},b={title:"Layout/Grid",component:t,argTypes:{paddingVertical:l,paddingTop:l,paddingBottom:l}},c={decorators:[e=>a.jsx(S,{children:a.jsx(e,{})})]},r={...c,args:{children:Array.from(Array(12).keys()).map(e=>a.jsx(t.Cell,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},s={...c,args:{children:Array.from(Array(12).keys()).map(e=>a.jsx(t.Cell,{className:"amsterdam-docs-pink-box"},e)),compact:!0},name:"Compact",parameters:{outline:"visible"}},m={...c,args:{children:Array.from(Array(12).keys()).map(e=>a.jsx(t.Cell,{className:"amsterdam-docs-pink-box"},e)),compact:!1,paddingVertical:"medium"},name:"Verticale witruimte"},o={...c,args:{children:Array.from(Array(3).keys()).map(e=>a.jsx(t.Cell,{span:4,children:a.jsx("figure",{className:"amsterdam-docs-figure",children:a.jsx(h,{alt:"",src:`https://picsum.photos/640/360?random=${e}`})})},e))},name:"Cellen"};var i,d,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var p,u,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true
  },
  name: 'Compact',
  parameters: {
    outline: 'visible'
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,f,k;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: false,
    paddingVertical: 'medium'
  },
  name: 'Verticale witruimte'
}`,...(k=(f=m.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,C,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const j=["Default","Compact","VerticalSpace","Cells"],T=Object.freeze(Object.defineProperty({__proto__:null,Cells:o,Compact:s,Default:r,VerticalSpace:m,__namedExportsOrder:j,default:b},Symbol.toStringTag,{value:"Module"}));export{s as C,T as G,m as V,o as a};
//# sourceMappingURL=Grid.stories-7qKb_tPF.js.map
