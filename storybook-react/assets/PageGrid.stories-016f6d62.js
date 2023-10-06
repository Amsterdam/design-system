import{m as b,j as r,G as a,P as e}from"./index.esm-7773f790.js";/* empty css                */const v={title:"Layout/Page Grid",component:b},s={args:{children:Array.from(Array(12).keys()).map(l=>r.jsx(a,{children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(e,{children:l+1})})},l))},parameters:{docs:{layout:"centered"}}},i={args:{children:[r.jsx(a,{gridColumns:4,children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(e,{children:"Blok 1: kolom 1 t/m 4"})})},1),r.jsx(a,{gridColumns:4,children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(e,{children:"Blok 2: kolom 5 t/m 8"})})},2),r.jsx(a,{gridColumns:4,children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(e,{children:"Blok 3: kolom 9 t/m 12"})})},3)]}},o={args:{children:[r.jsx(a,{gridColumns:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{src:"https://picsum.photos/800/450?random=1"})})},1),r.jsx(a,{gridColumns:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{src:"https://picsum.photos/800/450?random=2"})})},2),r.jsx(a,{gridColumns:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{src:"https://picsum.photos/800/450?random=3"})})},3)]}},d={args:{children:r.jsx(a,{gridColumns:{start:2,span:10},children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(e,{children:"Blok: kolom 2 t/m 11"})})})}},n={args:{children:[r.jsx(e,{gridColumns:{start:1,span:3},children:"A paragraph, directly on the grid, with a width of 3 columns."},1),r.jsx(e,{gridColumns:{start:4,span:9},children:"A paragraph, directly on the grid, with a width of 9 columns. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id quibusdam soluta. Architecto aspernatur at debitis, deserunt ea error ex impedit magnam nihil odio perferendis placeat porro quidem repellat temporibus ut voluptate."},2)]}};var t,m,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: Array.from(Array(12).keys()).map(i => <GridCell key={i}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>{i + 1}</Paragraph>
        </div>
      </GridCell>)
  },
  parameters: {
    docs: {
      layout: 'centered'
    }
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,g,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<GridCell key={1} gridColumns={4}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Blok 1: kolom 1 t/m 4</Paragraph>
        </div>
      </GridCell>, <GridCell key={2} gridColumns={4}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Blok 2: kolom 5 t/m 8</Paragraph>
        </div>
      </GridCell>, <GridCell key={3} gridColumns={4}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Blok 3: kolom 9 t/m 12</Paragraph>
        </div>
      </GridCell>]
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,x,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<GridCell key={1} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img src="https://picsum.photos/800/450?random=1" />
        </figure>
      </GridCell>, <GridCell key={2} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img src="https://picsum.photos/800/450?random=2" />
        </figure>
      </GridCell>, <GridCell key={3} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img src="https://picsum.photos/800/450?random=3" />
        </figure>
      </GridCell>]
  }
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,j,f;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <GridCell gridColumns={{
      start: 2,
      span: 10
    }}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Blok: kolom 2 t/m 11</Paragraph>
        </div>
      </GridCell>
  }
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var y,P,G;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<Paragraph key={1} gridColumns={{
      start: 1,
      span: 3
    }}>
        A paragraph, directly on the grid, with a width of 3 columns.
      </Paragraph>, <Paragraph key={2} gridColumns={{
      start: 4,
      span: 9
    }}>
        A paragraph, directly on the grid, with a width of 9 columns. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Eligendi id quibusdam soluta. Architecto aspernatur at debitis, deserunt ea error ex impedit
        magnam nihil odio perferendis placeat porro quidem repellat temporibus ut voluptate.
      </Paragraph>]
  }
}`,...(G=(P=n.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};const N=["Default","ThreeColumns","ThreeImages","MiddleBlock","Paragraphs"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:s,MiddleBlock:d,Paragraphs:n,ThreeColumns:i,ThreeImages:o,__namedExportsOrder:N,default:v},Symbol.toStringTag,{value:"Module"}));export{d as M,w as P,i as T,o as a,n as b};
//# sourceMappingURL=PageGrid.stories-016f6d62.js.map
