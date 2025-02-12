import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as a}from"./Grid-DyweqPIf.js";const F={title:"Components/Layout/Grid",component:a,args:{gapVertical:void 0,paddingVertical:"medium"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{labels:{large:"large",none:"none",small:"small",undefined:"medium"},type:"radio"},options:["none","small",void 0,"large"]},paddingBottom:{control:{labels:{large:"large",medium:"medium",small:"small",undefined:"none"},type:"radio"},options:[void 0,"small","medium","large"]},paddingTop:{control:{labels:{large:"large",medium:"medium",small:"small",undefined:"none"},type:"radio"},options:[void 0,"small","medium","large"]},paddingVertical:{control:{labels:{large:"large",medium:"medium",small:"small",undefined:"none"},type:"radio"},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};a.Cell;const D=()=>e.jsx(a,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(s=>e.jsx(a.Cell,{className:"ams-docs-grid__cell"},s))}),p={decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(s,{})]})]},i={decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(a,{paddingVertical:"medium",children:e.jsx(s,{})})]})],render:({children:s,...E})=>e.jsx(a.Cell,{...E,children:s})},r={...p},l={...p,args:{children:e.jsx(a.Cell,{className:"ams-docs-item",span:"all"})}},o={...p,args:{children:[e.jsx(a.Cell,{className:"ams-docs-item",span:"all"},1),e.jsx(a.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},m={...i,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},n={...i,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},t={...i,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},c={...i,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:{narrow:2,medium:4,wide:6}}},d={...i,args:{as:"section"},render:({as:s})=>e.jsx(a.Cell,{as:s,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,C,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(j=(C=l.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var x,v,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" key={1} span="all" />, <Grid.Cell className="ams-docs-item" key={2} span="all" />],
    gapVertical: 'small'
  }
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var h,G,f;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(f=(G=m.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var T,V,b;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(b=(V=n.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var w,_,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,R,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const z=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:d,SpanAllColumns:t,SpanColumns:m,SpanResponsively:n,StartPosition:c,VerticalGap:o,VerticalPadding:l,__namedExportsOrder:z,default:F},Symbol.toStringTag,{value:"Module"}));export{q as G,d as I,m as S,l as V,o as a,n as b,t as c,c as d};
