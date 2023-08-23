import{d as y,j as r,G as e,P as a}from"./index.esm-b5977299.js";const P={title:"PageGrid",component:y},s={args:{children:Array.from(Array(12).keys()).map(o=>r.jsx(e,{children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:o+1})})},o))},parameters:{docs:{layout:"centered"}}},i={args:{children:[r.jsx(e,{gridColumns:4,children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:"Blok 1: kolom 1 t/m 4"})})},1),r.jsx(e,{gridColumns:4,children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:"Blok 2: kolom 5 t/m 8"})})},2),r.jsx(e,{gridColumns:4,children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:"Blok 3: kolom 9 t/m 12"})})},3)]}},d={args:{children:[r.jsx(e,{gridColumns:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{src:"https://www.amsterdam.nl/publish/pages/1037047/20230614_poma_visuals_pn_singel-zuid940.jpg"})})},1),r.jsx(e,{gridColumns:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{src:"https://www.amsterdam.nl/publish/pages/987083/33464-amstel-01-01sep2017-e-v-eis9403.jpg"})})},2),r.jsx(e,{gridColumns:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{src:"https://www.amsterdam.nl/publish/pages/1036935/46116-sara-burgerhardtstr-26-17072019-17juli2019-e-v-eis940.jpg"})})},3)]}},l={args:{children:r.jsx(e,{gridColumns:{start:2,span:10},children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:"Blok: kolom 2 t/m 11"})})})}},n={args:{children:[r.jsx(a,{gridColumns:{start:1,span:3},children:"A paragraph, directly on the grid, with a width of 3 columns."},1),r.jsx(a,{gridColumns:{start:4,span:9},children:"A paragraph, directly on the grid, with a width of 9 columns. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id quibusdam soluta. Architecto aspernatur at debitis, deserunt ea error ex impedit magnam nihil odio perferendis placeat porro quidem repellat temporibus ut voluptate."},2)]}};var t,m,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,x,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<GridCell key={1} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img src="https://www.amsterdam.nl/publish/pages/1037047/20230614_poma_visuals_pn_singel-zuid940.jpg" />
        </figure>
      </GridCell>, <GridCell key={2} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img src="https://www.amsterdam.nl/publish/pages/987083/33464-amstel-01-01sep2017-e-v-eis9403.jpg" />
        </figure>
      </GridCell>, <GridCell key={3} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img src="https://www.amsterdam.nl/publish/pages/1036935/46116-sara-burgerhardtstr-26-17072019-17juli2019-e-v-eis940.jpg" />
        </figure>
      </GridCell>]
  }
}`,...(k=(x=d.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,C,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var b,w,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const G=["Default","ThreeColumns","ThreeImages","MiddleBlock","Paragraphs"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:s,MiddleBlock:l,Paragraphs:n,ThreeColumns:i,ThreeImages:d,__namedExportsOrder:G,default:P},Symbol.toStringTag,{value:"Module"}));export{l as M,_ as P,i as T,d as a,n as b};
//# sourceMappingURL=PageGrid.stories-3ee1d242.js.map
