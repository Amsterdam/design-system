import{G as t,j as r,r as u,i as y}from"./index.esm-3ad9a628.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const o={control:{type:"inline-radio",direction:"horizontal",labels:{undefined:"n/a",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},g={title:"Layout/Grid",component:t,argTypes:{spaceVertical:o,spaceTop:o,spaceBottom:o}},p={decorators:[e=>r.jsx(y,{children:r.jsx(e,{})})]},a={...p,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(t.Cell,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},s={...p,args:{children:Array.from(Array(3).keys()).map(e=>r.jsx(t.Cell,{span:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx(u,{alt:"",src:`https://picsum.photos/640/360?random=${e}`})})},e))},name:"Cellen"};var l,m,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var i,c,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const f=["Default","Cells"],x=Object.freeze(Object.defineProperty({__proto__:null,Cells:s,Default:a,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{s as C,x as G};
//# sourceMappingURL=Grid.stories-a91e40b1.js.map
