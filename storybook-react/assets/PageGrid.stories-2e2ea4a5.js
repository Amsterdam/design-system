import{j as r}from"./jsx-runtime-ffb262ed.js";/* empty css                *//* empty css                  */import{G as e,P as a}from"./Paragraph-89479e9a.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const t=({children:s})=>r.jsx("div",{className:"amsterdam-page-grid",children:s});t.displayName="PageGrid";try{t.displayName="PageGrid",t.__docgenInfo={description:"",displayName:"PageGrid",props:{}}}catch{}const v={title:"PageGrid",component:t},i={args:{children:Array.from(Array(12).keys()).map(s=>r.jsx(e,{children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:s+1})})},s))},parameters:{docs:{layout:"centered"}}},d={args:{children:[r.jsx(e,{gridColumns:4,children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:"Blok 1: kolom 1 t/m 4"})})},1),r.jsx(e,{gridColumns:4,children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:"Blok 2: kolom 5 t/m 8"})})},2),r.jsx(e,{gridColumns:4,children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:"Blok 3: kolom 9 t/m 12"})})},3)]}},l={args:{children:[r.jsx(e,{gridColumns:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{src:"https://www.amsterdam.nl/publish/pages/1037047/20230614_poma_visuals_pn_singel-zuid940.jpg"})})},1),r.jsx(e,{gridColumns:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{src:"https://www.amsterdam.nl/publish/pages/987083/33464-amstel-01-01sep2017-e-v-eis9403.jpg"})})},2),r.jsx(e,{gridColumns:4,children:r.jsx("figure",{className:"amsterdam-docs-figure",children:r.jsx("img",{src:"https://www.amsterdam.nl/publish/pages/1036935/46116-sara-burgerhardtstr-26-17072019-17juli2019-e-v-eis940.jpg"})})},3)]}},n={args:{children:r.jsx(e,{gridColumns:{start:2,span:10},children:r.jsx("div",{className:"amsterdam-docs-pink-box",children:r.jsx(a,{children:"Blok: kolom 2 t/m 11"})})})}},o={args:{children:[r.jsx(a,{gridColumns:{start:1,span:3},children:"A paragraph, directly on the grid, with a width of 3 columns."},1),r.jsx(a,{gridColumns:{start:4,span:9},children:"A paragraph, directly on the grid, with a width of 9 columns. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id quibusdam soluta. Architecto aspernatur at debitis, deserunt ea error ex impedit magnam nihil odio perferendis placeat porro quidem repellat temporibus ut voluptate."},2)]}};var m,c,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,u,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(u=d.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,j,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,w,P;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(P=(w=o.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const G=["Default","ThreeColumns","ThreeImages","MiddleBlock","Paragraphs"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:i,MiddleBlock:n,Paragraphs:o,ThreeColumns:d,ThreeImages:l,__namedExportsOrder:G,default:v},Symbol.toStringTag,{value:"Module"}));export{n as M,S as P,d as T,l as a,o as b};
//# sourceMappingURL=PageGrid.stories-2e2ea4a5.js.map
