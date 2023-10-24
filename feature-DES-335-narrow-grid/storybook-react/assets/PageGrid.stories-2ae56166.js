import{k as p,j as r,G as i,i as u}from"./index.esm-f4bbcc7e.js";const g={title:"Layout/Page Grid",component:p,parameters:{docs:{canvas:{sourceState:"hidden"}}}},l={decorators:[e=>r.jsx(u,{children:r.jsx(e,{})})]},a={...l,args:{children:Array.from(Array(12).keys()).map(e=>r.jsx(i,{className:"amsterdam-docs-pink-box"},e))}},s={...l,args:{children:Array.from(Array(3).keys()).map(e=>r.jsx(i,{span:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{alt:"Voorbeeld van een afbeelding",src:`https://picsum.photos/1024/576?random=${e}`})})},e))},parameters:{docs:{canvas:{sourceState:"shown"}}}};var o,n,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <GridCell className="amsterdam-docs-pink-box" key={i} />)
  }
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map(i => <GridCell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="Voorbeeld van een afbeelding" src={\`https://picsum.photos/1024/576?random=\${i}\`} />
        </figure>
      </GridCell>)
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const y=["Default","Cells"],h=Object.freeze(Object.defineProperty({__proto__:null,Cells:s,Default:a,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{s as C,h as P};
//# sourceMappingURL=PageGrid.stories-2ae56166.js.map
