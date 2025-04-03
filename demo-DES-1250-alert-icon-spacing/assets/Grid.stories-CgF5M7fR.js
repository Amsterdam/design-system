import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{G as e}from"./Grid-D0HUEsWS.js";const F={title:"Components/Layout/Grid",component:e,args:{gapVertical:void 0,paddingVertical:"medium"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{labels:{large:"large",none:"none",small:"small",undefined:"medium"},type:"radio"},options:["none","small",void 0,"large"]},paddingBottom:{control:{labels:{large:"large",medium:"medium",small:"small",undefined:"none"},type:"radio"},options:[void 0,"small","medium","large"]},paddingTop:{control:{labels:{large:"large",medium:"medium",small:"small",undefined:"none"},type:"radio"},options:[void 0,"small","medium","large"]},paddingVertical:{control:{labels:{large:"large",medium:"medium",small:"small",undefined:"none"},type:"radio"},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};e.Cell;const D=()=>a.jsx(e,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(s=>a.jsx(e.Cell,{className:"ams-docs-grid__cell"},s))}),p={decorators:[s=>a.jsxs(a.Fragment,{children:[a.jsx(D,{}),a.jsx(s,{})]})]},i={decorators:[s=>a.jsxs(a.Fragment,{children:[a.jsx(D,{}),a.jsx(e,{paddingVertical:"medium",children:a.jsx(s,{})})]})],render:({children:s,...E})=>a.jsx(e.Cell,{...E,children:s})},r={...p},l={...p,args:{children:a.jsx(e.Cell,{className:"ams-docs-item",span:"all"})}},o={...p,args:{children:[a.jsx(e.Cell,{className:"ams-docs-item",span:"all"},1),a.jsx(e.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},m={...i,args:{className:"ams-docs-item",span:4}},n={...i,args:{className:"ams-docs-item",span:{narrow:4,medium:6,wide:8}}},t={...i,args:{className:"ams-docs-item",span:"all"}},c={...i,args:{className:"ams-docs-item",span:3,start:{narrow:2,medium:4,wide:6}}},d={...i,args:{as:"section"},render:({as:s})=>a.jsx(e.Cell,{as:s,className:"ams-docs-item",span:"all"})};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,C,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var j,x,f;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" key={1} span="all" />, <Grid.Cell className="ams-docs-item" key={2} span="all" />],
    gapVertical: 'small'
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var G,T,V;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 4
  }
}`,...(V=(T=m.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var b,v,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,_,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 'all'
  }
}`,...(P=(_=t.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var k,A,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
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
  }: GridCellProps) => <Grid.Cell as={as} className="ams-docs-item" span="all" />
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const z=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:d,SpanAllColumns:t,SpanColumns:m,SpanResponsively:n,StartPosition:c,VerticalGap:o,VerticalPadding:l,__namedExportsOrder:z,default:F},Symbol.toStringTag,{value:"Module"}));export{q as G,d as I,m as S,l as V,o as a,n as b,t as c,c as d};
