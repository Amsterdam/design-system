import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as z}from"./Screen-Bi3gjHLv.js";import{G as s}from"./Grid-LBiHLbDB.js";const R={title:"Components/Layout/Grid",component:s,args:{className:"ams-docs-grid"},argTypes:{gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}}};s.Cell;const p={decorators:[a=>e.jsx(z,{children:e.jsx(a,{})})]},d={decorators:[a=>e.jsx(z,{children:e.jsx(s,{children:e.jsx(a,{})})})],render:({children:a,...L})=>e.jsx(s.Cell,{...L,children:a})},B=Array.from(Array(12).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-item"},a)),r={...p,args:{children:B}},l={...p,args:{children:B,paddingVertical:"medium"}},o={...p,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-item",span:4},a)),gapVertical:"small"}},n={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},m={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},t={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},i={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:2}},c={...d,args:{as:"section"},render:({as:a})=>e.jsx(s.Cell,{as:a,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,C,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var v,T,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-item" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var j,f,G;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(G=(f=n.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};var N,V,b;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(b=(V=m.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var A,w,_;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all'
  }
}`,...(_=(w=t.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var k,P,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 3,
    start: 2
  }
}`,...(M=(P=i.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var O,D,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const q=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],J=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:m,CustomTagName:c,Default:r,SpanAllColumns:t,SpanMultipleColumns:n,StartPosition:i,VerticalGap:o,VerticalSpace:l,__namedExportsOrder:q,default:R},Symbol.toStringTag,{value:"Module"}));export{m as C,J as G,n as S,l as V,o as a,t as b,i as c,c as d};
