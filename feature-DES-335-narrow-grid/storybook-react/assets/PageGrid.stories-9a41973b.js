import{o as p,j as r,G as d,i as u}from"./index.esm-e6c79e9a.js";const y={title:"Layout/Page Grid",component:p,parameters:{docs:{canvas:{sourceState:"hidden"}}}},n={decorators:[e=>r.jsx(u,{children:r.jsx(e,{})})]},a={...n,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(d,{className:"amsterdam-docs-pink-box"},e))},name:"Basis"},s={...n,args:{children:Array.from(Array(3).keys()).map(e=>r.jsx(d,{span:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{alt:"",src:`https://picsum.photos/1024/576?random=${e}`})})},e))},name:"Cellen",parameters:{docs:{canvas:{sourceState:"shown"}}}};var o,t,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <GridCell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Basis'
}`,...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var m,i,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <GridCell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="" src={\`https://picsum.photos/1024/576?random=\${i}\`} />
        </figure>
      </GridCell>)
  },
  name: 'Cellen',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const g=["Default","Cells"],h=Object.freeze(Object.defineProperty({__proto__:null,Cells:s,Default:a,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{s as C,h as P};
//# sourceMappingURL=PageGrid.stories-9a41973b.js.map
