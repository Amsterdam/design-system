import{G as m,j as r,r as x,i as h}from"./index.esm-35a5296b.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const t={control:{type:"inline-radio",direction:"horizontal",labels:{undefined:"n/a",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},k={title:"Layout/Grid",component:m,argTypes:{spaceVertical:t,spaceTop:t,spaceBottom:t}},l={decorators:[e=>r.jsx(h,{children:r.jsx(e,{})})]},a={...l,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(m.Cell,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},s={...l,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(m.Cell,{className:"amsterdam-docs-pink-box"},e)),spaceVertical:"medium"},name:"Verticale witruimte"},o={...l,args:{children:Array.from(Array(3).keys()).map(e=>r.jsx(m.Cell,{span:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx(x,{alt:"",src:`https://picsum.photos/640/360?random=${e}`})})},e))},name:"Cellen"};var i,c,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    spaceVertical: 'medium'
  },
  name: 'Verticale witruimte'
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,g,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const A=["Default","VerticalMargin","Cells"],j=Object.freeze(Object.defineProperty({__proto__:null,Cells:o,Default:a,VerticalMargin:s,__namedExportsOrder:A,default:k},Symbol.toStringTag,{value:"Module"}));export{o as C,j as G,s as V};
//# sourceMappingURL=Grid.stories-7eb7ef64.js.map
