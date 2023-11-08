import{G as o,j as r,i as p}from"./index.esm-a86226ae.js";const u={title:"Layout/Grid",component:o},d={decorators:[e=>r.jsx(p,{children:r.jsx(e,{})})]},s={...d,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(o.Cell,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},a={...d,args:{children:Array.from(Array(3).keys()).map(e=>r.jsx(o.Cell,{span:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{alt:"",src:`https://picsum.photos/1024/576?random=${e}`})})},e))},name:"Cellen"};var t,m,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="" src={\`https://picsum.photos/1024/576?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen'
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const y=["Default","Cells"],g=Object.freeze(Object.defineProperty({__proto__:null,Cells:a,Default:s,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{a as C,g as G};
//# sourceMappingURL=Grid.stories-248df616.js.map
