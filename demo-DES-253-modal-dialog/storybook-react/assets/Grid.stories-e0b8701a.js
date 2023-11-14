import{G as o,j as r,r as p,i as u}from"./index.esm-7e9c8a22.js";const y={title:"Layout/Grid",component:o},d={decorators:[e=>r.jsx(u,{children:r.jsx(e,{})})]},a={...d,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(o.Cell,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},s={...d,args:{children:Array.from(Array(3).keys()).map(e=>r.jsx(o.Cell,{span:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx(p,{alt:"",src:`https://picsum.photos/640/360?random=${e}`})})},e))},name:"Cellen"};var t,m,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var n,c,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={\`https://picsum.photos/640/360?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const f=["Default","Cells"],x=Object.freeze(Object.defineProperty({__proto__:null,Cells:s,Default:a,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{s as C,x as G};
//# sourceMappingURL=Grid.stories-e0b8701a.js.map
