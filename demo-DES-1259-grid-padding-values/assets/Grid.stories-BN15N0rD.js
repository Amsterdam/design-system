import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{g as z}from"./common-CfqFMx79.js";import{G as s}from"./Grid-DgTFY_ag.js";const B={title:"Components/Layout/Grid",component:s,args:{gapVertical:void 0,paddingVertical:"x-large"},argTypes:{className:{table:{disable:!0}},...z},parameters:{layout:"fullscreen"}};s.Cell;const E=()=>a.jsx(s,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(e=>a.jsx(s.Cell,{className:"ams-docs-grid__cell"},e))}),p={decorators:[e=>a.jsxs(a.Fragment,{children:[a.jsx(E,{}),a.jsx(e,{})]})]},i={decorators:[e=>a.jsxs(a.Fragment,{children:[a.jsx(E,{}),a.jsx(s,{paddingVertical:"x-large",children:a.jsx(e,{})})]})],render:({children:e,...F})=>a.jsx(s.Cell,{...F,children:e})},r={...p},o={...p,args:{children:a.jsx(s.Cell,{className:"ams-docs-item",span:"all"})}},l={...p,args:{children:[a.jsx(s.Cell,{className:"ams-docs-item",span:"all"},1),a.jsx(s.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"x-large"}},t={...i,args:{className:"ams-docs-item",span:4}},n={...i,args:{className:"ams-docs-item",span:{narrow:4,medium:6,wide:8}}},c={...i,args:{className:"ams-docs-item",span:"all"}},m={...i,args:{className:"ams-docs-item",span:3,start:{narrow:2,medium:4,wide:6}}},d={...i,args:{as:"section"},render:({as:e})=>a.jsx(s.Cell,{as:e,className:"ams-docs-item",span:"all"})};var g,u,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var y,C,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var N,j,G;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" key={1} span="all" />, <Grid.Cell className="ams-docs-item" key={2} span="all" />],
    gapVertical: 'x-large'
  }
}`,...(G=(j=l.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var T,f,V;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 4
  }
}`,...(V=(f=t.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var h,w,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(_=(w=n.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var P,b,v;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 'all'
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var A,k,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var O,R,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} className="ams-docs-item" span="all" />
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const L=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:d,SpanAllColumns:c,SpanColumns:t,SpanResponsively:n,StartPosition:m,VerticalGap:l,VerticalPadding:o,__namedExportsOrder:L,default:B},Symbol.toStringTag,{value:"Module"}));export{J as G,d as I,t as S,o as V,l as a,n as b,c,m as d};
