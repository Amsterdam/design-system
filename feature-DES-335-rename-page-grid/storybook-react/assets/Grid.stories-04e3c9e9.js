import{G as o,j as r,i as p}from"./index.esm-03661c09.js";const u={title:"Layout/Grid",component:o,parameters:{docs:{canvas:{sourceState:"hidden"}}}},d={decorators:[e=>r.jsx(p,{children:r.jsx(e,{})})]},a={...d,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(o.Cell,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},s={...d,args:{children:Array.from(Array(3).keys()).map(e=>r.jsx(o.Cell,{span:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{alt:"",src:`https://picsum.photos/1024/576?random=${e}`})})},e))},name:"Cellen",parameters:{docs:{canvas:{sourceState:"shown"}}}};var t,c,m;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,i,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="" src={\`https://picsum.photos/1024/576?random=\${i}\`} />
        </figure>
      </Grid.Cell>)
  },
  name: 'Cellen',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const y=["Default","Cells"],g=Object.freeze(Object.defineProperty({__proto__:null,Cells:s,Default:a,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{s as C,g as G};
//# sourceMappingURL=Grid.stories-04e3c9e9.js.map
