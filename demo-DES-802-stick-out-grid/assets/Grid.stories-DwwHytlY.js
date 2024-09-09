import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as L}from"./index.esm-DqpJdjJZ.js";import{G as a}from"./Grid-BGK2-FYX.js";const H={title:"Components/Layout/Grid",component:a,args:{className:"ams-docs-grid"},argTypes:{gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}}};a.Cell;const u={decorators:[s=>e.jsx(L,{children:e.jsx(s,{})})]},p={decorators:[s=>e.jsx(L,{children:e.jsx(a,{children:e.jsx(s,{})})})],render:({children:s,...F})=>e.jsx(a.Cell,{...F,children:s})},q=Array.from(Array(12).keys()).map(s=>e.jsx(a.Cell,{className:"ams-docs-item"},s)),r={...u,args:{children:q}},l={...u,args:{children:q,paddingVertical:"medium"}},o={...u,args:{children:Array.from(Array(6).keys()).map(s=>e.jsx(a.Cell,{className:"ams-docs-item",span:4},s)),gapVertical:"small"}},m={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},n={...u,args:{children:[e.jsx(a.Cell,{className:"ams-docs-item",span:4,rowSpan:2,style:{padding:"1rem"}},1),e.jsx(a.Cell,{className:"ams-docs-item",span:4},2),e.jsx(a.Cell,{className:"ams-docs-item",span:4},3),e.jsx(a.Cell,{className:"ams-docs-item",span:4},4),e.jsx(a.Cell,{className:"ams-docs-item",span:4},5)],gapVertical:"small"}},t={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},i={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},c={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:2}},d={...p,args:{as:"section"},render:({as:s})=>e.jsx(a.Cell,{as:s,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var g,y,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,x,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var j,v,G;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-item" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(G=(v=o.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var h,T,f;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(f=(T=m.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var V,w,b;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" span={4} rowSpan={2} key={1} style={{
      padding: '1rem'
    }} />, <Grid.Cell className="ams-docs-item" span={4} key={2} />, <Grid.Cell className="ams-docs-item" span={4} key={3} />, <Grid.Cell className="ams-docs-item" span={4} key={4} />, <Grid.Cell className="ams-docs-item" span={4} key={5} />],
    gapVertical: 'small'
  }
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var k,A,_;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(_=(A=t.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var M,P,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all'
  }
}`,...(I=(P=i.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var O,R,D;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 3,
    start: 2
  }
}`,...(D=(R=c.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var E,z,B;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const J=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","SpanMultipleRows","ConfigureGridVariants","SpanAllColumns","StartPosition","ImproveSemantics"],W=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:t,Default:r,ImproveSemantics:d,SpanAllColumns:i,SpanMultipleColumns:m,SpanMultipleRows:n,StartPosition:c,VerticalGap:o,VerticalSpace:l,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{t as C,W as G,d as I,m as S,l as V,o as a,n as b,i as c,c as d};
