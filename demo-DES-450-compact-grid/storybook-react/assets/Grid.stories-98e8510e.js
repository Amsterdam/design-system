import{G as o,j as e,r as x,i as h}from"./index.esm-35a5296b.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const i={control:{type:"inline-radio",direction:"horizontal",labels:{undefined:"n/a",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},k={title:"Layout/Grid",component:o,argTypes:{marginVertical:i,marginTop:i,marginBottom:i}},t={decorators:[r=>e.jsx(h,{children:e.jsx(r,{})})]},a={...t,args:{children:Array.from(Array(12).keys()).map(r=>e.jsx(o.Cell,{className:"amsterdam-docs-pink-box"},r))},name:"Basis"},s={...t,args:{children:Array.from(Array(12).keys()).map(r=>e.jsx(o.Cell,{className:"amsterdam-docs-pink-box"},r)),marginVertical:"medium"},name:"Verticale marge"},m={...t,args:{children:Array.from(Array(3).keys()).map(r=>e.jsx(o.Cell,{span:4,children:e.jsx("figure",{className:"amsterdam-docs-figure",children:e.jsx(x,{alt:"",src:`https://picsum.photos/640/360?random=${r}`})})},r))},name:"Cellen"};var l,n,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    marginVertical: 'medium'
  },
  name: 'Verticale marge'
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,u,f;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(f=(u=m.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const A=["Default","VerticalMargin","Cells"],j=Object.freeze(Object.defineProperty({__proto__:null,Cells:m,Default:a,VerticalMargin:s,__namedExportsOrder:A,default:k},Symbol.toStringTag,{value:"Module"}));export{m as C,j as G,s as V};
//# sourceMappingURL=Grid.stories-98e8510e.js.map
