import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{G as a}from"./Grid-BNLu_M1m.js";const F={title:"Components/Layout/Grid",component:a,args:{gapVertical:void 0,paddingVertical:"medium"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};a.Cell;const D=()=>e.jsx(a,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(s=>e.jsx(a.Cell,{className:"ams-docs-grid__cell"},s))}),p={decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(s,{})]})]},i={decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(a,{paddingVertical:"medium",children:e.jsx(s,{})})]})],render:({children:s,...E})=>e.jsx(a.Cell,{...E,children:s})},r={...p},l={...p,args:{children:e.jsx(a.Cell,{className:"ams-docs-item",span:"all"})}},n={...p,args:{children:[e.jsx(a.Cell,{className:"ams-docs-item",span:"all"},1),e.jsx(a.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},o={...i,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},m={...i,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},t={...i,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},d={...i,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:{narrow:2,medium:4,wide:6}}},c={...i,args:{as:"section"},render:({as:s})=>e.jsx(a.Cell,{as:s,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,x,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,N,f;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" span="all" key={1} />, <Grid.Cell className="ams-docs-item" span="all" key={2} />],
    gapVertical: 'small'
  }
}`,...(f=(N=n.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var h,v,G;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(G=(v=o.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var T,b,V;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(V=(b=m.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var w,_,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all'
  }
}`,...(P=(_=t.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var k,A,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,R,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const z=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:c,SpanAllColumns:t,SpanColumns:o,SpanResponsively:m,StartPosition:d,VerticalGap:n,VerticalPadding:l,__namedExportsOrder:z,default:F},Symbol.toStringTag,{value:"Module"}));export{q as G,c as I,o as S,l as V,n as a,m as b,t as c,d};
