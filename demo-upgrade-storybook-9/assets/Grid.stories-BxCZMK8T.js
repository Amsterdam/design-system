import{j as s}from"./iframe-CmHy-vHF.js";import{g as z}from"./common-DYX7ZGrz.js";import{G as a}from"./Grid-BuwwfeLC.js";const B={title:"Components/Layout/Grid",component:a,args:{paddingVertical:"x-large"},argTypes:{className:{table:{disable:!0}},...z},parameters:{layout:"fullscreen"}};a.Cell;const E=()=>s.jsx(a,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(e=>s.jsx(a.Cell,{className:"ams-docs-grid__cell"},e))}),p={decorators:[e=>s.jsxs(s.Fragment,{children:[s.jsx(E,{}),s.jsx(e,{})]})]},i={decorators:[e=>s.jsxs(s.Fragment,{children:[s.jsx(E,{}),s.jsx(a,{paddingVertical:"x-large",children:s.jsx(e,{})})]})],render:({children:e,...F})=>s.jsx(a.Cell,{...F,children:e})},r={...p},o={...p,args:{children:s.jsx(a.Cell,{className:"ams-docs-item",span:"all"})}},n={...p,args:{children:[s.jsx(a.Cell,{className:"ams-docs-item",span:"all"},1),s.jsx(a.Cell,{className:"ams-docs-item",span:"all"},2)]}},l={...i,args:{className:"ams-docs-item",span:4}},t={...i,args:{className:"ams-docs-item",span:{narrow:4,medium:6,wide:8}}},m={...i,args:{className:"ams-docs-item",span:"all"}},c={...i,args:{className:"ams-docs-item",span:3,start:{narrow:2,medium:4,wide:6}}},d={...i,args:{as:"section"},render:({as:e})=>s.jsx(a.Cell,{as:e,className:"ams-docs-item",span:"all"})};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,C,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var N,j,G;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" key={1} span="all" />, <Grid.Cell className="ams-docs-item" key={2} span="all" />]
  }
}`,...(G=(j=n.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var T,f,h;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 4
  }
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,_,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(P=(_=t.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var V,b,A;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 'all'
  }
}`,...(A=(b=m.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var v,k,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var O,R,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} className="ams-docs-item" span="all" />
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const L=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:d,SpanAllColumns:m,SpanColumns:l,SpanResponsively:t,StartPosition:c,VerticalGap:n,VerticalPadding:o,__namedExportsOrder:L,default:B},Symbol.toStringTag,{value:"Module"}));export{J as G,d as I,l as S,o as V,n as a,t as b,m as c,c as d};
