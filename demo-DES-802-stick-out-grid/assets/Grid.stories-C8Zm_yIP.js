import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as E}from"./index.esm-DqdD246O.js";import{G as s}from"./Grid-DLiIacfP.js";const L={title:"Components/Layout/Grid",component:s,args:{className:"ams-docs-grid"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}}};s.Cell;const p={decorators:[a=>e.jsx(E,{children:e.jsx(a,{})})]},d={decorators:[a=>e.jsx(E,{children:e.jsx(s,{children:e.jsx(a,{})})})],render:({children:a,...B})=>e.jsx(s.Cell,{...B,children:a})},z=Array.from(Array(12).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-item"},a)),r={...p,args:{children:z}},l={...p,args:{children:z,paddingVertical:"medium"}},o={...p,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-item",span:4},a)),gapVertical:"small"}},n={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},m={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},t={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},i={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:2}},c={...d,args:{as:"section"},render:({as:a})=>e.jsx(s.Cell,{as:a,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,C,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var x,h,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-item" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,T,G;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(G=(T=n.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var N,V,b;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(w=t.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var k,P,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 3,
    start: 2
  }
}`,...(I=(P=i.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var M,O,D;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const R=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","ImproveSemantics"],J=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:m,Default:r,ImproveSemantics:c,SpanAllColumns:t,SpanMultipleColumns:n,StartPosition:i,VerticalGap:o,VerticalSpace:l,__namedExportsOrder:R,default:L},Symbol.toStringTag,{value:"Module"}));export{m as C,J as G,c as I,n as S,l as V,o as a,t as b,i as c};
