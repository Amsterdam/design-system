import{k as y,j as e,P as o,G as i,i as v}from"./index.esm-baaaab8b.js";/* empty css                */const G={title:"Layout/Page Grid",component:y,parameters:{docs:{canvas:{sourceState:"hidden"}}}},t={decorators:[l=>e.jsx(v,{children:e.jsx(l,{})})]},r={...t,args:{children:Array.from(Array(12).keys()).map(l=>e.jsx(o,{className:"amsterdam-docs-pink-box",children:l+1},l))}},a={...t,args:{children:[e.jsx(i,{span:4,children:e.jsx("figure",{className:"amsterdam-docs-figure",children:e.jsx("img",{alt:"Voorbeeld van een afbeelding",src:"https://picsum.photos/1024/576?random=1"})})},1),e.jsx(i,{span:4,children:e.jsx("figure",{className:"amsterdam-docs-figure",children:e.jsx("img",{alt:"Voorbeeld van een afbeelding",src:"https://picsum.photos/1024/576?random=2"})})},2),e.jsx(i,{span:4,children:e.jsx("figure",{className:"amsterdam-docs-figure",children:e.jsx("img",{alt:"Voorbeeld van een afbeelding",src:"https://picsum.photos/1024/576?random=3"})})},3)],title:"Drie afbeeldingen"}},s={...t,args:{children:e.jsx(i,{fullWidth:!0,children:e.jsx("div",{className:"amsterdam-docs-pink-box",children:e.jsx(o,{children:"Full width"})})})}},d={...t,args:{children:e.jsx(i,{start:[1,2,2],span:[4,6,10],children:e.jsx("div",{className:"amsterdam-docs-pink-box",children:e.jsx(o,{children:"Laat de buitenste kolommen leeg op middelbrede en brede vensters."})})}),title:"Een blok in het midden"}};var n,c,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Paragraph className="amsterdam-docs-pink-box" key={i}>
        {i + 1}
      </Paragraph>)
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<GridCell key={1} span={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1024/576?random=1" />
        </figure>
      </GridCell>, <GridCell key={2} span={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1024/576?random=2" />
        </figure>
      </GridCell>, <GridCell key={3} span={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1024/576?random=3" />
        </figure>
      </GridCell>],
    title: 'Drie afbeeldingen'
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <GridCell fullWidth>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Full width</Paragraph>
        </div>
      </GridCell>
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,j,k;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <GridCell start={[1, 2, 2]} span={[4, 6, 10]}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Laat de buitenste kolommen leeg op middelbrede en brede vensters.</Paragraph>
        </div>
      </GridCell>,
    title: 'Een blok in het midden'
  }
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const S=["Default","ThreeColumns","FullWidth","MiddleBlock"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:r,FullWidth:s,MiddleBlock:d,ThreeColumns:a,__namedExportsOrder:S,default:G},Symbol.toStringTag,{value:"Module"}));export{s as F,d as M,N as P,a as T};
//# sourceMappingURL=PageGrid.stories-76bb4769.js.map
