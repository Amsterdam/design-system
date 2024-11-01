import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as D}from"./index.esm-BagDMI_g.js";import{G as a}from"./Grid-CsHNJ6m8.js";const L={title:"Components/Layout/Grid",component:a,args:{gapVertical:void 0,paddingVertical:"medium"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};a.Cell;const E=()=>e.jsx(a,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(s=>e.jsx(a.Cell,{className:"ams-docs-grid__cell"},s))}),p={decorators:[s=>e.jsxs(D,{children:[e.jsx(E,{}),e.jsx(s,{})]})]},d={decorators:[s=>e.jsxs(D,{children:[e.jsx(E,{}),e.jsx(a,{paddingVertical:"medium",children:e.jsx(s,{})})]})],render:({children:s,...z})=>e.jsx(a.Cell,{...z,children:s})},r={...p},l={...p,args:{children:e.jsx(a.Cell,{className:"ams-docs-item",span:"all"})}},o={...p,args:{children:[e.jsx(a.Cell,{className:"ams-docs-item",span:"all"},1),e.jsx(a.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},m={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},n={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},t={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},c={...d,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:{narrow:2,medium:4,wide:6}}},i={...d,args:{as:"section"},render:({as:s})=>e.jsx(a.Cell,{as:s,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,x,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,v,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" span="all" key={1} />, <Grid.Cell className="ams-docs-item" span="all" key={2} />],
    gapVertical: 'small'
  }
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var h,f,G;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(G=(f=m.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};var T,b,V;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(V=(b=n.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var w,_,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all'
  }
}`,...(P=(_=t.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var k,A,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 3,
    start: {
      narrow: 2,
      medium: 4,
      wide: 6
    }
  }
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,R,B;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(B=(R=i.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const M=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:i,SpanAllColumns:t,SpanColumns:m,SpanResponsively:n,StartPosition:c,VerticalGap:o,VerticalPadding:l,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{J as G,i as I,m as S,l as V,o as a,n as b,t as c,c as d};
